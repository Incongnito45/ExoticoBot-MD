import {Maker} from 'imagemaker.js';


const handler = async (m, {conn, args, command, usedPrefix}) => {

  const response = args.join(' ').split('|');
  if (!args[0]) throw `᥀·࣭࣪̇˖🗿◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n${usedPrefix + command} ExoticoBot`;
  if (command == 'logocorazon') {
    try {
      await conn.reply(m.chat, tradutor.texto2, m);
      const res = await new Maker().Ephoto360('https://en.ephoto360.com/text-heart-flashlight-188.html', [response[0]]);
      await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
    } catch {
      await conn.reply(m.chat, `᥀·࣭࣪̇˖💜◗ *_${text}..._* ✨`, m);
    }
  }
  if (command == 'logochristmas') {
    try {
      await conn.reply(m.chat, `᥀·࣭࣪̇˖🗿◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n${usedPrefix + command} ExoticoBot`, m);
      const res2 = await new Maker().Ephoto360('https://en.ephoto360.com/christmas-effect-by-name-376.html', [response[0]]);
      await conn.sendFile(m.chat, res2.imageUrl, 'error.jpg', null, m);
    } catch {
      await conn.reply(m.chat, `᥀·࣭࣪̇˖❄️◗ *_${text}..._* ✨`, m);
    }
  }
};
handler.command = /^logocorazon|logochristmas|logoephoto360|logotextpro/i;
export default handler;
