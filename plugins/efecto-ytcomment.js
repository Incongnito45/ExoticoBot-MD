

const handler = async (m, {conn, text}) => {

  if (!text) throw `᥀·࣭࣪̇˖🔮◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n${usedPrefix + command} Hola, saludos.`;
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/youtube-comment', {
    avatar: await conn.profilePictureUrl(m.sender, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    comment: text,
    username: conn.getName(m.sender),
  }), 'error.png', `᥀·࣭࣪̇˖🗿◗ 𝙃𝙖𝙨 𝙘𝙤𝙢𝙚𝙣𝙩𝙖𝙙𝙤 𝙚𝙣 𝙔𝙤𝙪𝙏𝙪𝙗𝙚.`, m);
};
handler.help = ['ytcomment <comment>'];
handler.tags = ['maker'];
handler.command = /^(ytcomment)$/i;
export default handler;
