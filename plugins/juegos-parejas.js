const toM = (a) => '@' + a.split('@')[0];
function handler(m, {groupMetadata}) {
  const ps = groupMetadata.participants.map((v) => v.id);
  const a = ps.getRandom();
  let b;
  do b = ps.getRandom();
  while (b === a);
  m.reply(`
• ${toM(a)}
᥀·࣭࣪̇˖💖◗ 𝘿𝙚𝙗𝙚𝙧𝙞𝙖𝙨 𝙘𝙖𝙨𝙖𝙧𝙩𝙚 𝙘𝙤𝙣 ${toM(b)}, 𝙝𝙖𝙘𝙚𝙣 𝙪𝙣𝙖 𝙗𝙤𝙣𝙞𝙩𝙖 𝙥𝙖𝙡𝙖𝙗𝙧𝙖.
`, null, {
    mentions: [a, b],
  });
}
handler.help = ['formarpareja'];
handler.tags = ['main', 'fun'];
handler.command = ['formarpareja', 'formarparejas'];
handler.group = true;
export default handler;
