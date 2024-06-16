

const handler = async (m, {conn, usedprefix, text}) => {

  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/pixelate', {
    avatar: await conn.profilePictureUrl(m.sender, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    comment: text,
    username: conn.getName(m.sender),
  }), 'error.png', `᥀·࣭࣪̇˖☁️◗ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿... ✨`, m);
};
handler.help = ['pixel', 'difuminar'];
handler.tags = ['maker'];
handler.command = /^(pixel|pixelar|difuminar)$/i;
export default handler;
