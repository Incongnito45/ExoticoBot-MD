const handler = async (m, {conn, usedprefix}) => {
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/blur', {
    avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
}), 'hornycard.png', '᥀·࣭࣪̇˖⚙️◗ 𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚 𝙡𝙖 𝙞𝙢𝙖𝙜𝙚𝙣', m);
};
handler.help = ['blur', 'difuminar2'];
handler.tags = ['maker'];
handler.command = /^(blur|difuminar2)$/i;
export default handler;
