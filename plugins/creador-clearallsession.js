/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(
      m.chat,
      { text: `᥀·࣭࣪̇˖💎◗ 𝙎𝙤𝙡𝙤 𝙥𝙪𝙚𝙙𝙚𝙨 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙚𝙣 𝙚𝙡 𝙗𝙤𝙩 𝙥𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡.` },
      { quoted: m }
    );
  }

  const sessionPath = './ExoticoBotSession/';
  try {
    if (!existsSync(sessionPath)) {
      return await conn.sendMessage(
        m.chat,
        { text: `᥀·࣭࣪̇˖🗂️◗ 𝙇𝙖 𝙘𝙖𝙧𝙥𝙚𝙩𝙖 𝙤 𝙖𝙧𝙘𝙝𝙞𝙫𝙤 𝙙𝙚: (ExoticoBotSession)\n\n• 𝙉𝙤 𝙚𝙭𝙞𝙨𝙩𝙚 𝙚𝙣 𝙡𝙖 𝙗𝙖𝙨𝙚 𝙙𝙖𝙩𝙤𝙨.` },
        { quoted: m }
      );
    }
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      if (file !== 'creds.json') {
        await fs.unlink(path.join(sessionPath, file));
        filesDeleted++;
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(
        m.chat,
        { text: `᥀·࣭࣪̇˖💎◗ 𝙉𝙤 𝙨𝙚 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙤 𝙡𝙖 𝙘𝙖𝙧𝙥𝙚𝙩𝙖 𝙤 𝙣𝙖𝙙𝙖 𝙙𝙚𝙣𝙩𝙧𝙤 𝙙𝙚 𝙡𝙖 𝙘𝙖𝙧𝙥𝙚𝙩𝙖: (ExoticoBotSession)` },
        { quoted: m }
      );
    } else {
      await conn.sendMessage(
        m.chat,
        { text: `᥀·࣭࣪̇˖✅◗ 𝙀𝙡𝙞𝙢𝙞𝙣𝙖𝙣𝙙𝙤 𝙘𝙤𝙨𝙖𝙨 𝙞𝙣𝙣𝙚𝙘𝙚𝙨𝙖𝙧𝙞𝙖𝙨....` },
        { quoted: m }
      );
    }
  } catch (err) {
    console.error('᥀·࣭࣪̇˖❌◗ 𝙀𝙍𝙍𝙊𝙍: ', err);
    await conn.sendMessage(
      m.chat,
      { text: `᥀·࣭࣪̇˖⚠️◗ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙖𝙡 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙡𝙤𝙨 𝙖𝙧𝙘𝙝𝙞𝙫𝙤𝙨 𝙞𝙣𝙣𝙚𝙘𝙚𝙨𝙖𝙧𝙞𝙤𝙨...` },
      { quoted: m }
    );
  }
  await conn.sendMessage(m.chat, {text: `᥀·࣭࣪̇˖✅◗ 𝙎𝙚 𝙝𝙖𝙣 𝙗𝙤𝙧𝙧𝙖𝙙𝙤 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙖𝙢𝙚𝙣𝙩𝙚 𝙡𝙖 𝙗𝙖𝙨𝙪𝙧𝙖 𝙚𝙣: (ExoticoBotSession)`}, { quoted: m })}
handler.help = ['del_reg_in_session_owner'];
handler.tags = ['owner'];
handler.command = /^(del_reg_in_session_owner|clearallsession|sessiondel)$/i;
handler.rowner = true
export default handler;
