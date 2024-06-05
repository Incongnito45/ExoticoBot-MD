const timeout = 60000;
const poin = 500;
const poin_lose = -100;
const poin_bot = 200;
const handler = async (m, {conn, usedPrefix, text}) => {
  conn.suit = conn.suit ? conn.suit : {};
  if (Object.values(conn.suit).find((room) => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw '᥀·࣭࣪̇˖⚔️◗ 𝙏𝙚𝙧𝙢𝙞𝙣𝙖 𝙚𝙡 𝙟𝙪𝙚𝙜𝙤 𝙥𝙧𝙞𝙢𝙚𝙧𝙤 𝙥𝙖𝙧𝙖 𝙞𝙣𝙞𝙘𝙞𝙖𝙧 𝙤𝙩𝙧𝙖...';
  const textquien = `᥀·࣭࣪̇˖🎮◗ 𝙈𝙚𝙣𝙨𝙞𝙤𝙣𝙖 𝙖 𝙪𝙣𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 𝙥𝙖𝙧𝙖 𝙟𝙪𝙜𝙖𝙧 𝙚𝙨𝙩𝙚 𝙟𝙪𝙚𝙜𝙤.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n${usedPrefix}suit @${global.owner[0][0]}`;
  if (!m.mentionedJid[0]) return m.reply(textquien, m.chat, {mentions: conn.parseMention(textquien)});
  if (Object.values(conn.suit).find((room) => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `᥀·࣭࣪̇˖👥◗ 𝙇𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 𝙢𝙚𝙣𝙨𝙞𝙤𝙣𝙖𝙙𝙖 𝙚𝙨𝙩𝙖 𝙟𝙪𝙜𝙖𝙣𝙙𝙤 𝙘𝙤𝙣 𝙤𝙩𝙧𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙖, 𝙚𝙩𝙞𝙦𝙪𝙚𝙩𝙖 𝙖 𝙤𝙩𝙧𝙤 𝙤 𝙚𝙨𝙥𝙚𝙧𝙖 𝙖 𝙦𝙪𝙚 𝙩𝙚𝙧𝙢𝙞𝙣𝙚𝙣 𝙚𝙡 𝙟𝙪𝙚𝙜𝙤.`;
  const id = 'suit_' + new Date() * 1;
  const caption = `᥀·࣭࣪̇˖⚔️◗ @${m.sender.split`@`[0]} 𝙙𝙚𝙨𝙖𝙛𝙞𝙖 𝙖 @${m.mentionedJid[0].split`@`[0]} 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙟𝙪𝙚𝙜𝙤, 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙚𝙡 𝙢𝙚𝙣𝙨𝙖𝙟𝙚.\n\n• 𝙀𝙨𝙘𝙧𝙞𝙗𝙖: "aceptar" 𝙥𝙖𝙧𝙖 𝙟𝙪𝙜𝙖𝙧 𝙚𝙡 𝙟𝙪𝙚𝙜𝙤.\n\n• 𝙀𝙨𝙘𝙧𝙞𝙗𝙖 "rechazar" 𝙥𝙖𝙧𝙖 𝙧𝙚𝙘𝙝𝙖𝙯𝙖𝙧 𝙚𝙡 𝙟𝙪𝙚𝙜𝙤.`;
  const imgplaygame = `https://www.merca2.es/wp-content/uploads/2020/05/Piedra-papel-o-tijera-0003318_1584-825x259.jpeg`;
  conn.suit[id] = {
    chat: await conn.sendMessage(m.chat, {text: caption}, {mentions: await conn.parseMention(caption)}),
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: 'wait',
    waktu: setTimeout(() => {
      if (conn.suit[id]) conn.reply(m.chat, `᥀·࣭࣪̇˖⛔◗ 𝙎𝙚 𝙘𝙖𝙣𝙘𝙚𝙡𝙖 𝙚𝙡 𝙟𝙪𝙚𝙜𝙤 𝙥𝙤𝙧 𝙛𝙖𝙡𝙩𝙖 𝙙𝙚 𝙧𝙚𝙨𝙥𝙪𝙚𝙨𝙩𝙖𝙨.`, m);

      delete conn.suit[id];
    }, timeout), poin, poin_lose, poin_bot, timeout,
  };
};
handler.command = /^pvp|suit(pvp)?$/i;
handler.group = true;
handler.game = true;
export default handler;
