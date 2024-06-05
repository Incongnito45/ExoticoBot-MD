const handler = (m) => m;
handler.before = async function(m) {
  this.suit = this.suit ? this.suit : {};
  if (db.data.users[m.sender].suit < 0) db.data.users[m.sender].suit = 0;
  const room = Object.values(this.suit).find((room) => room.id && room.status && [room.p, room.p2].includes(m.sender));
  if (room) {
    let win = '';
    let tie = false;
    if (m.sender == room.p2 && /^(acc(ept)?|terima|aceptar|gas|aceptare?|nao|gamau|rechazar|ga(k.)?bisa)/i.test(m.text) && m.isGroup && room.status == 'wait') {
      if (/^(tolak|gamau|rechazar|ga(k.)?bisa)/i.test(m.text)) {
        const textno = `᥀·࣭࣪̇˖🎮◗ 𝙀𝙡 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚 @${room.p2.split`@`[0]}, 𝙧𝙚𝙘𝙝𝙖𝙯𝙤 𝙚𝙡 𝙥𝙫𝙥, 𝙚𝙡 𝙟𝙪𝙚𝙜𝙤 𝙨𝙚 𝙘𝙖𝙣𝙘𝙚𝙡𝙖... 💀`;
        m.reply(textno, null, {mentions: this.parseMention(textno)});
        delete this.suit[room.id];
        return !0;
      }
      room.status = 'play';
      room.asal = m.chat;
      clearTimeout(room.waktu);
      const textplay = `᥀·࣭࣪̇˖❕◗ 𝘾𝙤𝙢𝙞𝙚𝙣𝙯𝙖 𝙚𝙡 𝙟𝙪𝙚𝙜𝙤, 𝙡𝙤𝙨 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨 𝙛𝙪𝙚𝙧𝙤𝙣 𝙚𝙣𝙫𝙞𝙖𝙙𝙤𝙨 𝙖 @${room.p.split`@`[0]} 𝙮 @${room.p2.split`@`[0]} 𝙚𝙣 𝙥𝙧𝙞𝙫𝙖𝙙𝙤.\n\n• 𝙎𝙚𝙡𝙚𝙘𝙘𝙞𝙤𝙣𝙚𝙣 𝙪𝙣𝙖 𝙤𝙥𝙘𝙞𝙤𝙣 𝙚𝙣 𝙚𝙡 𝙘𝙝𝙖𝙩 𝙥𝙧𝙞𝙫𝙖𝙙𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩.`;
      m.reply(textplay, m.chat, {mentions: this.parseMention(textplay)});
      const comienzop = `╭• 👤 •══════════════• 👤 •╮
│    𝗣𝗜𝗘𝗗𝗥𝗔 / 𝗣𝗔𝗣𝗘𝗟 / 𝗧𝗜𝗝𝗘𝗥𝗔
╰• 👤 •══════════════• 👤 •╯

𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔𝗦:
⤷ piedra
⤷ papel
⤷ tijera

᥀·࣭࣪̇˖🎮◗ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙚𝙨𝙘𝙧𝙞𝙗𝙖 𝙨𝙤𝙡𝙤
𝙪𝙣𝙖 𝙧𝙚𝙨𝙥𝙪𝙚𝙨𝙩𝙖 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙞𝙚𝙣𝙙𝙤
𝙖 𝙚𝙨𝙩𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚.`;
      const comienzop2 = `╭• 👤 •══════════════• 👤 •╮
│    𝗣𝗜𝗘𝗗𝗥𝗔 / 𝗣𝗔𝗣𝗘𝗟 / 𝗧𝗜𝗝𝗘𝗥𝗔
╰• 👤 •══════════════• 👤 •╯

𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔𝗦:
⤷ piedra
⤷ papel
⤷ tijera

᥀·࣭࣪̇˖🎮◗ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙚𝙨𝙘𝙧𝙞𝙗𝙖 𝙨𝙤𝙡𝙤
𝙪𝙣𝙖 𝙧𝙚𝙨𝙥𝙪𝙚𝙨𝙩𝙖 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙞𝙚𝙣𝙙𝙤
𝙖 𝙚𝙨𝙩𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚.`;

      if (!room.pilih) this.sendMessage(room.p, {text: comienzop}, {quoted: m});
      if (!room.pilih2) this.sendMessage(room.p2, {text: comienzop2}, {quoted: m});
      room.waktu_milih = setTimeout(() => {
        const iniciativa = `᥀·࣭࣪̇˖🎮◗ 𝙉𝙞𝙣𝙜𝙪𝙣 𝙟𝙪𝙜𝙖𝙙𝙤𝙧 𝙩𝙤𝙢𝙤 𝙡𝙖 𝙞𝙣𝙞𝙘𝙞𝙖𝙩𝙞𝙫𝙖 𝙙𝙚𝙡 𝙟𝙪𝙚𝙜𝙤, 𝙨𝙚 𝙘𝙖𝙣𝙘𝙚𝙡𝙖...`;
        if (!room.pilih && !room.pilih2) this.sendMessage(m.chat, {text: iniciativa}, {quoted: m});
        else if (!room.pilih || !room.pilih2) {
          win = !room.pilih ? room.p2 : room.p;
          const textnull = `᥀·࣭࣪̇˖❕◗ 𝙅𝙪𝙜𝙖𝙙𝙤𝙧 @${(room.pilih ? room.p2 : room.p).split`@`[0]}, 𝙣𝙤 𝙝𝙖𝙨 𝙚𝙡𝙚𝙜𝙞𝙙𝙤 𝙣𝙞𝙣𝙜𝙪𝙣𝙖 𝙧𝙚𝙨𝙥𝙪𝙚𝙨𝙩𝙖, 𝙚𝙡 𝙟𝙪𝙚𝙜𝙤 𝙨𝙚 𝙝𝙖 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙙𝙤.`;
          this.sendMessage(m.chat, {text: textnull}, {quoted: m}, {mentions: this.parseMention(textnull)});
          db.data.users[win == room.p ? room.p : room.p2].exp += room.poin;
          db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot;
          db.data.users[win == room.p ? room.p2 : room.p].exp -= room.poin_lose;
        }
        delete this.suit[room.id];
        return !0;
      }, room.timeout);
    }
    const jwb = m.sender == room.p;
    const jwb2 = m.sender == room.p2;
    const g = /tijera/i;
    const b = /piedra/i;
    const k = /papel/i;
    const reg = /^(tijera|piedra|papel)/i;
    if (jwb && reg.test(m.text) && !room.pilih && !m.isGroup) {
      room.pilih = reg.exec(m.text.toLowerCase())[0];
      room.text = m.text;
      m.reply(`᥀·࣭࣪̇˖✅◗ 𝙀𝙡𝙚𝙜𝙞𝙨𝙩𝙚: ${m.text}, 𝙧𝙚𝙜𝙧𝙚𝙨𝙖 𝙖𝙡 𝙜𝙧𝙪𝙥𝙤 𝙮 ${room.pilih2 ? `𝙧𝙚𝙫𝙞𝙨𝙖 𝙡𝙤𝙨 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨.` : '𝙚𝙨𝙥𝙚𝙧𝙖 𝙡𝙤𝙨 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨.'}`);
      if (!room.pilih2) this.reply(room.p2, '᥀·࣭࣪̇˖👤◗ 𝙀𝙡 𝙤𝙩𝙧𝙤 𝙟𝙪𝙜𝙖𝙙𝙤𝙧 𝙝𝙖 𝙚𝙡𝙚𝙜𝙞𝙙𝙤 𝙪𝙣𝙖 𝙤𝙥𝙘𝙞𝙤𝙣, 𝙚𝙨 𝙩𝙪 𝙩𝙪𝙧𝙣𝙤.', 0);
    }
    if (jwb2 && reg.test(m.text) && !room.pilih2 && !m.isGroup) {
      room.pilih2 = reg.exec(m.text.toLowerCase())[0];
      room.text2 = m.text;
      m.reply(`᥀·࣭࣪̇˖✅◗ 𝙀𝙡𝙚𝙜𝙞𝙨𝙩𝙚: ${m.text}, 𝙧𝙚𝙜𝙧𝙚𝙨𝙖 𝙖𝙡 𝙜𝙧𝙪𝙥𝙤 𝙮 ${room.pilih ? `𝙧𝙚𝙫𝙞𝙨𝙖 𝙡𝙤𝙨 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨.` : '𝙚𝙨𝙥𝙚𝙧𝙖 𝙡𝙤𝙨 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨.'}`);
      if (!room.pilih) this.reply(room.p, '᥀·࣭࣪̇˖👤◗ 𝙀𝙡 𝙤𝙩𝙧𝙤 𝙟𝙪𝙜𝙖𝙙𝙤𝙧 𝙝𝙖 𝙚𝙡𝙚𝙜𝙞𝙙𝙤 𝙪𝙣𝙖 𝙤𝙥𝙘𝙞𝙤𝙣, 𝙚𝙨 𝙩𝙪 𝙩𝙪𝙧𝙣𝙤.', 0);
    }
    const stage = room.pilih;
    const stage2 = room.pilih2;
    if (room.pilih && room.pilih2) {
      clearTimeout(room.waktu_milih);
      if (b.test(stage) && g.test(stage2)) win = room.p;
      else if (b.test(stage) && k.test(stage2)) win = room.p2;
      else if (g.test(stage) && k.test(stage2)) win = room.p;
      else if (g.test(stage) && b.test(stage2)) win = room.p2;
      else if (k.test(stage) && b.test(stage2)) win = room.p;
      else if (k.test(stage) && g.test(stage2)) win = room.p2;
      else if (stage == stage2) tie = true;
      this.reply(room.asal, `
╭• 👤 •══════════════• 👤 •╮
│    𝗣𝗜𝗘𝗗𝗥𝗔 / 𝗣𝗔𝗣𝗘𝗟 / 𝗧𝗜𝗝𝗘𝗥𝗔
╰• 👤 •══════════════• 👤 •╯

• 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎:
${tie ? '\nEmpate 💀:' : ''}
*@${room.p.split`@`[0]} (${room.text})* ${tie ? '' : room.p == win ? ` 𝙜𝙖𝙣𝙤 ✨, 𝙤𝙗𝙩𝙞𝙚𝙣𝙚𝙨 +${room.poin} 𝙙𝙚 𝙀𝙓𝙋!!! 🥳` : ` 𝙥𝙚𝙧𝙙𝙞𝙨𝙩𝙚 💀, 𝙩𝙚 𝙦𝙪𝙞𝙩𝙖𝙣 ${room.poin_lose} 𝙙𝙚 𝙀𝙓𝙋!!! 👺`}
*@${room.p2.split`@`[0]} (${room.text2})* ${tie ? '' : room.p2 == win ? ` 𝙜𝙖𝙣𝙤 ✨, 𝙤𝙗𝙩𝙞𝙚𝙣𝙚𝙨 +${room.poin} 𝙙𝙚 𝙀𝙓𝙋!!! 🥳` : ` 𝙥𝙚𝙧𝙙𝙞𝙨𝙩𝙚 💀, 𝙩𝙚 𝙦𝙪𝙞𝙩𝙖𝙣 ${room.poin_lose} 𝙙𝙚 𝙀𝙓𝙋!!! 👺`}
`.trim(), m, {mentions: [room.p, room.p2]} );
      if (!tie) {
        db.data.users[win == room.p ? room.p : room.p2].exp += room.poin;
        db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot;
        db.data.users[win == room.p ? room.p2 : room.p].exp += room.poin_lose;
      }
      delete this.suit[room.id];
    }
  }
  return !0;
};
handler.exp = 0;
export default handler;
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
