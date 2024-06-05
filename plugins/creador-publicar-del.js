const handler = async (m, {command, usedPrefix, text}) => {
  const which = command.replace(/eliminar/i, '');
  if (!text) throw `᥀·࣭࣪̇˖💎◗ 𝙋𝙖𝙧𝙖 𝙫𝙚𝙧 𝙡𝙖 𝙡𝙞𝙨𝙩𝙖 𝙙𝙚 𝙘𝙤𝙨𝙖𝙨 𝙥𝙪𝙗𝙡𝙞𝙘𝙖𝙙𝙖𝙨, 𝙪𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: *${usedPrefix}verpubli*`;
  const msgs = global.db.data.msgs;
  if (!text in msgs) throw `᥀·࣭࣪̇˖❌◗ 𝙉𝙤 𝙨𝙚 𝙝𝙖 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙙𝙤 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙚𝙨𝙚 𝙤𝙗𝙟𝙚𝙩𝙞𝙫𝙤, 𝙪𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: *${usedPrefix}verpubli*`;
  delete msgs[text];
  m.reply(`᥀·࣭࣪̇˖✅◗ 𝙎𝙚 𝙝𝙖 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙚𝙡 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤!!`);
};
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map((v) => 'del' + v + ' <text>');
handler.tags = ['database'];
handler.command = /^eliminar(vn|msg|video|audio|img|sticker)$/;
handler.rowner = true;
export default handler;

/*
let handler = async (m, { conn, usedPrefix, text, command }) => {
let hash = text
if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
if (!hash) throw `᥀·࣭࣪̇˖💎◗ 𝙋𝙖𝙧𝙖 𝙫𝙚𝙧 𝙡𝙖 𝙡𝙞𝙨𝙩𝙖 𝙙𝙚 𝙘𝙤𝙨𝙖𝙨 𝙥𝙪𝙗𝙡𝙞𝙘𝙖𝙙𝙖𝙨, 𝙪𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: *${usedPrefix}verpubli*`
let sticker = global.db.data.sticker
if (sticker[hash] && sticker[hash].locked) throw `᥀·࣭࣪̇˖❌◗ 𝙎𝙤𝙡𝙤 𝙡𝙤𝙨 𝙤𝙬𝙣𝙚𝙧𝙨 𝙮 𝙚𝙡 𝙗𝙤𝙩 𝙥𝙪𝙚𝙙𝙚 𝙧𝙚𝙖𝙡𝙞𝙯𝙖𝙧 𝙚𝙨𝙩𝙖 𝙖𝙘𝙘𝙞𝙤𝙣.`
delete sticker[hash]
m.reply(`᥀·࣭࣪̇˖✅◗ 𝙎𝙚 𝙝𝙖 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙚𝙡 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤!!`)}
handler.command = ['delcmd']
handler.rowner = true
export default handler
*/