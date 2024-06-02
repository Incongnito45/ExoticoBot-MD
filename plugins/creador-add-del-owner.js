const handler = async (m, { conn, text, args, usedPrefix, command }) => {
const who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false;
if (!who) return conn.reply(m.chat,  `᥀·࣭࣪̇˖💎◗ 𝘿𝙚𝙗𝙚 𝙙𝙚 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙚𝙧 𝙤 𝙢𝙚𝙣𝙨𝙞𝙤𝙣𝙖𝙧 𝙖 𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙮𝙖 𝙤𝙬𝙣𝙚𝙧 𝙤 𝙪𝙣 𝙣𝙪𝙚𝙫𝙤 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙥𝙖𝙧𝙖 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤: *${usedPrefix + command}* @${m.sender.split('@')[0]}`,  m, {mentions: [m.sender]});
  switch (command) {
case 'addowner':
const nuevoNumero = who;
global.owner.push([nuevoNumero]);
await conn.reply(m.chat, `᥀·࣭࣪̇˖✅◗ 𝙉𝙪𝙚𝙫𝙤 𝙤𝙬𝙣𝙚𝙧 𝙖𝙜𝙧𝙚𝙜𝙖𝙙𝙤 𝙖𝙡 𝙗𝙤𝙩!!!`, m);
break;
case 'delowner':
const numeroAEliminar = who;
const index = global.owner.findIndex(owner => owner[0] === numeroAEliminar);
if (index !== -1) {
global.owner.splice(index, 1);
await conn.reply(m.chat, `᥀·࣭࣪̇˖✅◗ 𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙮𝙖 𝙣𝙤 𝙚𝙨 𝙪𝙣 𝙤𝙬𝙢𝙚𝙧 𝙙𝙚𝙡 𝙗𝙤𝙩!!`,  m);
} else {
await conn.reply(m.chat, `᥀·࣭࣪̇˖❌◗ 𝙀𝙡 𝙣𝙪𝙢𝙚𝙧𝙤 𝙞𝙣𝙜𝙧𝙚𝙨𝙖𝙙𝙤 𝙣𝙤 𝙚𝙭𝙞𝙨𝙩𝙚 𝙚𝙣 𝙘𝙤𝙣𝙛𝙞𝙜.𝙟𝙨.`, m);
}
break;
}};
handler.command = /^(addowner|delowner)$/i;
handler.rowner = true;
export default handler;
