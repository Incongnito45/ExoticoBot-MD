/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(
      m.chat,
      { text: `𝙐𝙏𝙄𝙇𝙄𝙕𝘼 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙄𝙍𝙀𝘾𝙏𝘼𝙈𝙀𝙉𝙏𝙀 𝙀𝙉 𝙀𝙇 𝙉𝙐́𝙈𝙀𝙍𝙊 𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙇 𝘿𝙀𝙇 𝘽𝙊𝙏` },
      { quoted: m }
    );
  }

  const sessionPath = './ExoticoBotSession/';
  try {
    if (!existsSync(sessionPath)) {
      return await conn.sendMessage(
        m.chat,
        { text: `𝙇𝘼 𝘾𝘼𝙍𝙋𝙀𝙏𝘼 (ExoticoBotSession) 𝙉𝙊 𝙀𝙓𝙄𝙎𝙏𝙀 𝙊 𝙀𝙎𝙏𝘼 𝙑𝘼𝘾𝙄́𝘼.*` },
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
        { text: `No se ha encontrado la carpeta o nada dentro de la carpeta: *(ExoticoBotSession)*` },
        { quoted: m }
      );
    } else {
      await conn.sendMessage(
        m.chat,
        { text: `Iniciando eliminacion de cosas innecesarias...` },
        { quoted: m }
      );
    }
  } catch (err) {
    console.error('Ocurrio un error al eliminar la carpeta o archivo, tipo de error:', err);
    await conn.sendMessage(
      m.chat,
      { text: `Ocurrio un error al eliminar los archivos de sesion.` },
      { quoted: m }
    );
  }
  await conn.sendMessage(m.chat, {text: `*Intente hacer un pequeño spam para provar, por ejemplo:*\n${usedPrefix}s\n${usedPrefix}s\n${usedPrefix}s`}, { quoted: m })}
handler.help = ['del_reg_in_session_owner'];
handler.tags = ['owner'];
handler.command = /^(del_reg_in_session_owner|clearallsession|sessiondel)$/i;
handler.rowner = true
export default handler;
