import axios from 'axios';
import cheerio from 'cheerio';
const apkpureApi = 'https://apkpure.com/api/v2/search?q=';
const apkpureDownloadApi = 'https://apkpure.com/api/v2/download?id=';
async function searchApk(text) {
  const response = await axios.get(`${apkpureApi}${encodeURIComponent(text)}`);
  const data = response.data;
  return data.results;
}

async function downloadApk(id) {
  const response = await axios.get(`${apkpureDownloadApi}${id}`);
  const data = response.data;
  return data;
}

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) throw `᥀·࣭࣪̇˖☁️◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙣𝙤𝙢𝙗𝙧𝙚 𝙚𝙣 𝙚𝙨𝙥𝙚𝙨𝙞𝙛𝙞𝙘𝙤 𝙥𝙖𝙧𝙖 𝙗𝙪𝙨𝙘𝙖𝙧.\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤: WhatsApp`;
  try {
    const searchResults = await searchApk(text);
    const apkData = await downloadApk(searchResults[0].id);
    const response = `✯ 𝗡𝗼𝗺𝗯𝗿𝗲: ${apkData.name}
✯ 𝗣𝗮𝗾𝘂𝗲𝘁𝗲: ${apkData.package}
✯ 𝗨𝗽𝗱𝗮𝘁𝗲: ${apkData.lastup}
✯ 𝗣𝗲𝘀𝗼: ${apkData.size}`;
    await conn.sendMessage(m.chat, { image: { url: apkData.icon }, caption: response }, { quoted: m });
    if (apkData.size.includes('GB') || apkData.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, { text: '᥀·࣭࣪̇˖☁️◗ 𝙀𝙡 𝙖𝙧𝙘𝙝𝙞𝙫𝙤 𝙥𝙚𝙨𝙖 𝙢𝙪𝙘𝙝𝙤, 𝙣𝙤 𝙨𝙚 𝙚𝙣𝙫𝙞𝙖𝙧𝙖.' }, { quoted: m });
    }
    await conn.sendMessage(m.chat, { document: { url: apkData.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: apkData.name + '.apk', caption: null }, { quoted: m });
  } catch (e) {
    await conn.reply(m.chat, `᥀·࣭࣪̇˖⚠️◗ 𝙀𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙝𝙖 𝙛𝙖𝙡𝙡𝙖𝙙𝙤 𝙥𝙤𝙧 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤, 𝙧𝙚𝙥𝙤𝙧𝙩𝙖𝙡𝙤 𝙖𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙙𝙚𝙡 𝙗𝙤𝙩.`, m);
    console.log(`᥀·࣭࣪̇˖❌◗ 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙚𝙧𝙧𝙤𝙣𝙚𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`);
    console.log(e);
    handler.limit = false;
  }
};

handler.command = /^(apk2|apkpure|apkdl)$/i;
handler.register = true;
handler.limit = 2;
export default handler;
