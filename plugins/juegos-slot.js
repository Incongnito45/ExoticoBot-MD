/* CREDITOS A https://github.com/FG98F */

const handler = async (m, {args, usedPrefix, command}) => {
  const fa = `
*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙻𝙰 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝙰𝙿𝙾𝚂𝚃𝙰𝚁* 

*📌 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*
*${usedPrefix + command} 100*`.trim();
  if (!args[0]) throw fa;
  if (isNaN(args[0])) throw fa;
  const apuesta = parseInt(args[0]);
  const users = global.db.data.users[m.sender];
  const time = users.lastslot + 10000;
  if (new Date - users.lastslot < 10000) throw `᥀·࣭࣪̇˖🎮◗ 𝙍𝙚𝙜𝙧𝙚𝙨𝙖 𝙚𝙣 ${msToTime(time - new Date())} 𝙥𝙖𝙧𝙖 𝙫𝙤𝙡𝙫𝙚𝙧 𝙖 𝙟𝙪𝙜𝙖𝙧.`;
  if (apuesta < 100) throw '᥀·࣭࣪̇˖⚔️◗ 𝙈𝙞𝙣𝙞𝙢𝙤 𝙙𝙚 𝙖𝙥𝙪𝙚𝙨𝙩𝙖, 𝙚𝙨 𝙙𝙚 100 𝙭𝙥.';
  if (users.exp < apuesta) {
    throw `᥀·࣭࣪̇˖⚔️◗ 𝙉𝙤 𝙩𝙞𝙚𝙣𝙚𝙨 𝙨𝙪𝙛𝙞𝙘𝙞𝙚𝙣𝙩𝙚 𝙭𝙥 𝙥𝙖𝙧𝙖 𝙟𝙪𝙜𝙖𝙧 𝙚𝙨𝙩𝙚 𝙟𝙪𝙚𝙜𝙤.\n\n• 𝙅𝙪𝙚𝙜𝙖 𝙤𝙩𝙧𝙤𝙨 𝙟𝙪𝙚𝙜𝙤𝙨 𝙥𝙖𝙧𝙖 𝙜𝙖𝙣𝙖𝙧 𝙭𝙥.`;
  }
  const emojis = ['💎', '🪙', '🚫'];
  let a = Math.floor(Math.random() * emojis.length);
  let b = Math.floor(Math.random() * emojis.length);
  let c = Math.floor(Math.random() * emojis.length);
  const x = [];
  const y = [];
  const z = [];
  for (let i = 0; i < 3; i++) {
    x[i] = emojis[a];
    a++;
    if (a == emojis.length) a = 0;
  }
  for (let i = 0; i < 3; i++) {
    y[i] = emojis[b];
    b++;
    if (b == emojis.length) b = 0;
  }
  for (let i = 0; i < 3; i++) {
    z[i] = emojis[c];
    c++;
    if (c == emojis.length) c = 0;
  }
  let end;
  if (a == b && b == c) {
    end = `• 𝙃𝙖𝙨 𝙜𝙖𝙣𝙖𝙙𝙤!!! 𝙤𝙗𝙩𝙞𝙚𝙣𝙚𝙨 +${apuesta + apuesta} 𝙙𝙚 𝙭𝙥 ✨`;
    users.exp += apuesta;
  } else if (a == b || a == c || b == c) {
    end = `• 𝘾𝙖𝙨𝙞 𝙡𝙤 𝙡𝙤𝙜𝙧𝙖𝙨 :𝙫`;
    users.exp += 10;
  } else {
    end = `• 𝙋𝙚𝙧𝙙𝙞𝙨𝙩𝙚 -${apuesta} 𝙙𝙚 𝙭𝙥 💀`;
    users.exp -= apuesta;
  }
  users.lastslot = new Date * 1;
  return await m.reply(
      `
┌• •┈┈┈┈┈┈┈┈┈┈┈┈┈• • ⧐
┃🎰   𝗚𝗔𝗠𝗘 / 𝗦𝗟𝗢𝗧   🎰
└• •┈┈┈┈┈┈┈┈┈┈┈┈┈• • ⧐
${x[0]} ┃ ${y[0]} ┃ ${z[0]}
${x[1]} ┃ ${y[1]} ┃ ${z[1]}
${x[2]} ┃ ${y[2]} ┃ ${z[2]}
⧏ • •┈┈┈┈┈┈┈┈┈┈• • ⧐
${end}`);
};
handler.help = ['slot <apuesta>'];
handler.tags = ['fun'];
handler.command = ['slot'];
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return minutes + ' m ' + seconds + ' s ';
}

