import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api';
const handler = async (m, {conn, usedPrefix, command, text}) => {
  if (m.isGroup) return;
  const aki = global.db.data.users[m.sender].akinator;
  if (text == 'end') {
    if (!aki.sesi) return m.reply('᥀·࣭࣪̇˖🎮◗ 𝙉𝙤 𝙚𝙨𝙩𝙖𝙨 𝙚𝙣 𝙪𝙣𝙖 𝙥𝙖𝙧𝙩𝙞𝙙𝙖 𝙙𝙚 𝙖𝙠𝙞𝙣𝙖𝙩𝙤𝙧.');
    aki.sesi = false;
    aki.soal = null;
    m.reply('᥀·࣭࣪̇˖✅◗ 𝙎𝙚 𝙚𝙡𝙞𝙢𝙞𝙣𝙤 𝙡𝙖 𝙨𝙚𝙨𝙞𝙤𝙣 𝙙𝙚 𝙖𝙠𝙞𝙣𝙖𝙩𝙤𝙧 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤.');
  } else {
    if (aki.sesi) return conn.reply(m.chat, '᥀·࣭࣪̇˖🎮◗ 𝙏𝙤𝙙𝙖𝙫𝙞𝙖 𝙚𝙨𝙩𝙖𝙨 𝙚𝙣 𝙪𝙣𝙖 𝙥𝙖𝙧𝙩𝙞𝙙𝙖 𝙘𝙤𝙣 𝙖𝙠𝙞𝙣𝙖𝙩𝙤𝙧, 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙡𝙤 𝙥𝙧𝙞𝙢𝙚𝙧𝙤.', aki.soal);
    try {
      const res = await fetch(`https://api.lolhuman.xyz/api/akinator/start?apikey=${lolkeysapi}`);
      const anu = await res.json();
      if (anu.status !== 200) throw '᥀·࣭࣪̇˖🚫◗ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.';
      const {server, frontaddr, session, signature, question, progression, step} = anu.result;
      aki.sesi = true;
      aki.server = server;
      aki.frontaddr = frontaddr;
      aki.session = session;
      aki.signature = signature;
      aki.question = question;
      aki.progression = progression;
      aki.step = step;
      const resultes2 = await translate(question, {to: 'es', autoCorrect: false});
      let txt = `• 🎰 𝗔𝗞𝗜𝗡𝗔𝗧𝗢𝗥 🎰 •\n\n• @${m.sender.split('@')[0]}*\n𝗣𝗿𝗲𝗴𝘂𝗻𝘁𝗮: ${resultes2.text}*\n\n`;
      txt += '*0 - Sí*\n';
      txt += '*1 - No*\n';
      txt += '*2 - No sé*\n';
      txt += '*3 - Probablemente sí*\n';
      txt += '*4 - Probablemente no*\n\n';
      txt += `᥀·࣭࣪̇˖❕◗ 𝙐𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: ${usedPrefix + command} end, 𝙥𝙖𝙧𝙖 𝙨𝙖𝙡𝙞𝙧 𝙤 𝙙𝙚𝙟𝙖𝙧 𝙚𝙡 𝙟𝙪𝙚𝙜𝙤.`;
      const soal = await conn.sendMessage(m.chat, {text: txt, mentions: [m.sender]}, {quoted: m});
      aki.soal = soal;
    } catch {
      m.reply('᥀·࣭࣪̇˖🚫◗ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.');
    }
  }
};
handler.menu = ['akinator'];
handler.tags = ['fun'];
handler.command = /^(akinator)$/i;
export default handler;
