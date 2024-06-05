import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `᥀·࣭࣪̇˖☁️◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙫𝙖𝙡𝙞𝙙𝙤 𝙙𝙚 𝘿𝙧𝙞𝙫𝙚 𝙥𝙖𝙧𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧𝙡𝙤.`
let url=args[0]
if (!(url && url.match(/drive\.google\.com\/file/i))) throw `᥀·࣭࣪̇˖☁️◗ 𝙀𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙞𝙣𝙜𝙧𝙚𝙨𝙖𝙙𝙤 𝙣𝙤 𝙚𝙨 𝙫𝙖𝙡𝙞𝙙𝙤, 𝙞𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙫𝙖𝙡𝙞𝙙𝙤 𝙙𝙚 𝘿𝙧𝙞𝙫𝙚.`
try{
let res = await fdrivedl(url)
} catch (e){
throw '᥀·࣭࣪̇˖☁️◗ 𝙉𝙤 𝙨𝙚 𝙥𝙪𝙙𝙤 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙚𝙡 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.';
}
let caption=`✵ 𝗡𝗼𝗺𝗯𝗿𝗲: ${res.fileName}

✵ 𝗣𝗲𝘀𝗼: ${formatBytes(res.sizeBytes)}

✵ 𝗧𝗶𝗽𝗼: ${res.mimetype}`.trim()
m.reply(`${caption}`)
let fileSize=formatBytes(res.sizeBytes)
if (fileSize.includes('GB') && parseInt(fileSize.replace(' GB', '')) > 1.8) throw '᥀·࣭࣪̇˖☁️◗ 𝙀𝙡 𝙖𝙧𝙘𝙝𝙞𝙫𝙤 𝙥𝙚𝙨𝙖 𝙢𝙪𝙘𝙝𝙤, 𝙣𝙤 𝙥𝙤𝙙𝙧𝙖 𝙨𝙚𝙧 𝙚𝙣𝙫𝙞𝙖𝙙𝙤.'
conn.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
}
async function fdrivedl(url) {
      let id;
      id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1];
      if (!id) throw '᥀·࣭࣪̇˖☁️◗ 𝙉𝙤 𝙨𝙚 𝙝𝙖 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙙𝙤 𝙡𝙖 𝙄𝘿 𝙙𝙚 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖.';
      let res = await fetch(
        `https://drive.google.com/uc?id=${id}&authuser=0&export=download`,
        {
          method: 'post',
          headers: {
            'accept-encoding': 'gzip, deflate, br',
            'content-length': 0,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            origin: 'https://drive.google.com',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
            'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
            'x-drive-first-party': 'DriveWebUi',
            'x-json-requested': 'true',
          },
        }
      );
      let { fileName, sizeBytes, downloadUrl } = JSON.parse(
        (await res.text()).slice(4)
      );
      if (!downloadUrl) throw 'Se excedió el número de descargas del link';
      let data = await fetch(downloadUrl);
      if (data.status !== 200) throw data.statusText;
      return {
        downloadUrl,
        fileName,
        sizeBytes,
        mimetype: data.headers.get('content-type'),
      };
    }

function formatBytes(bytes, decimals = 2) {
      if (bytes === 0) return '0 Bytes';

      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

      const i = Math.floor(Math.log(bytes) / Math.log(k));

      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
  

handler.help = ['drive'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(drive|drivedl|dldrive)$/i
handler.register = true
handler.limit = true
export default handler
