const handler = async (m, {conn, command, usedPrefix, text}) => {
  const which = command.replace(/ver/i, '');
  if (!text) throw `᥀·࣭࣪̇˖💎◗ 𝙋𝙖𝙧𝙖 𝙫𝙚𝙧 𝙡𝙖 𝙡𝙞𝙨𝙩𝙖 𝙙𝙚 𝙘𝙤𝙨𝙖𝙨 𝙥𝙪𝙗𝙡𝙞𝙘𝙖𝙙𝙖𝙨, 𝙪𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: *${usedPrefix}verpubli*`;
  const msgs = global.db.data.msgs;
  if (!text in msgs) throw `᥀·࣭࣪̇˖❌◗ 𝙉𝙤 𝙨𝙚 𝙝𝙖 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙙𝙤 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙚𝙨𝙚 𝙤𝙗𝙟𝙚𝙩𝙞𝙫𝙤, 𝙪𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: *${usedPrefix}verpubli*`;
  const _m = await conn.serializeM(msgs[text]);
  await _m.copyNForward(m.chat, true);
};
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map((v) => 'get' + v + ' <text>');
handler.tags = ['database'];
handler.command = /^verpubli(vn|msg|video|audio|img|sticker)$/;
handler.rowner = false;
export default handler;

/*
let handler = async (m, { conn }) => {
conn.reply(m.chat, `COSAS GUARDADAS

${Object.entries(global.db.data.sticker).map(([key, value], index) => `*${index + 1}.-${key}` : key}\nTEXTO ${value.text}`).join('\n\n')}
`.trim(), null, {mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])})
}
handler.command = ['listadecosas', 'botguardados']
handler.rowner = true
export default handler
*/