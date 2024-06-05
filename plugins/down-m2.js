import axios from 'axios';
 import fetch from 'node-fetch';
 import cheerio from 'cheerio';
 import { mediafiredl } from '@bochilteam/scraper';
  
 let handler = async (m, { conn, args, usedPrefix, command }) => { 
 if (!args[0]) throw `᥀·࣭࣪̇˖☁️◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙫𝙖𝙡𝙞𝙙𝙤 𝙙𝙚 𝙈𝙚𝙙𝙞𝙖𝙛𝙞𝙧𝙚 𝙥𝙖𝙧𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧𝙡𝙤.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n${usedPrefix + command} https://www.mediafire.com/file/r0lrc9ir5j3e2fs/DOOM_v13_UNCLONE*`;
 try{ 
 let resEX = await mediafiredl(args[0]);
 let captionES = ` 
❮🪐❯ 𝐍𝐎𝐌𝐁𝐑𝐄: ${resEX.filename};

❮☁️❯ 𝐏𝐄𝐒𝐎: ${resEX.filesizeH};

❮🪐❯ 𝐓𝐈𝐏𝐎: ${resEX.ext};
  
᥀·࣭࣪̇˖🚀◗ 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙉𝘿𝙊... ✨
 `.trim();
 m.reply(captionES) 
 await conn.sendFile(m.chat, resEX.url, resEX.filename, '', m, null, { mimetype: resEX.ext, asDocument: true });    
 } catch { 
 try {   
 let res = await mediafireDl(args[0]) 
 let { name, size, date, mime, link } = res 
 let caption = `
❮🪐❯ 𝐍𝐎𝐌𝐁𝐑𝐄: ${name}

❮☁️❯ 𝐏𝐄𝐒𝐎: ${size}

❮🪐❯ 𝐓𝐈𝐏𝐎: ${mime}

᥀·࣭࣪̇˖🚀◗ 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙉𝘿𝙊... ✨  
 `.trim();
 await m.reply(caption);
 await conn.sendFile(m.chat, link, name, '', m, null, { mimetype: mime, asDocument: true });
 } catch {   
 await m.reply('᥀·࣭࣪̇˖🚫◗ 𝙀𝙧𝙧𝙤𝙧, 𝙥𝙧𝙤𝙘𝙪𝙧𝙚 𝙫𝙚𝙧 𝙦𝙪𝙚 𝙚𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙨𝙚𝙖 𝙙𝙚 𝙢𝙚𝙙𝙞𝙖𝙛𝙞𝙧𝙚 𝙮 𝙫𝙪𝙚𝙡𝙫𝙖 𝙖 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙧𝙡𝙤.');
 }}} 
 handler.help = ['mediafire'].map(v => v + ' <url>');
 handler.tags = ['downloader'];
 handler.command = /^(mediafire2|m2|mediafiredl2|dlmediafire2)$/i;
handler.dolares = 8;
 export default handler 
  
 async function mediafireDl(url) { 
    const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/','')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`) 
    const $ = cheerio.load(res.data) 
    const link = $('#downloadButton').attr('href') 
    const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ','').replaceAll('\n','') 
    const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text() 
    const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ','') 
    let mime = '' 
    let rese = await axios.head(link) 
    mime = rese.headers['content-type'] 
    return { name, size, date, mime, link } 
 }