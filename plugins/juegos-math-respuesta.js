global.math = global.math ? global.math : {};
const handler = async (m, {conn}) => {
  const id = m.chat;
  if (!m.quoted) return;
  if (m.quoted.sender != conn.user.jid) return;
  if (!/^• 𝘾𝙐𝘼𝙉𝙏𝙊 𝙀𝙎: /i.test(m.quoted.text)) return;
  if (!(m.chat in global.math)) return conn.reply(m.chat, `᥀·࣭࣪̇˖🎮◗ 𝙀𝙨𝙚 𝙞𝙣𝙩𝙚𝙣𝙩𝙤 𝙮𝙖 𝙝𝙖 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙙𝙤.`, m);

  if (m.quoted.id == global.math[id][0].id) {
    const math = global.math[id][1];
    if (m.text == math.result) {
      conn.reply(m.chat, `᥀·࣭࣪̇˖✅◗ 𝙂𝘼𝙉𝘼𝙎𝙏𝙀!!!\n\n• 𝙊𝙗𝙩𝙞𝙚𝙣𝙚𝙨:\n*${math.bonus}* 𝙭𝙥`, m);

      global.db.data.users[m.sender].exp += math.bonus;
      clearTimeout(global.math[id][3]);
      delete global.math[id];
    } else {
      if (--global.math[id][2] == 0) {
        conn.reply(m.chat, `᥀·࣭࣪̇˖🎮◗ 𝙎𝙚 𝙖𝙘𝙖𝙗𝙖𝙧𝙤𝙣 𝙩𝙪𝙨 𝙤𝙥𝙤𝙧𝙩𝙪𝙣𝙞𝙙𝙖𝙙𝙚𝙨...\n\n• 𝙍𝙚𝙨𝙥𝙪𝙚𝙨𝙩𝙖:\n*${math.result}*`, m);

        clearTimeout(global.math[id][3]);
        delete global.math[id];
      } else conn.reply(m.chat, `᥀·࣭࣪̇˖🚫◗ 𝙄𝙉𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝙊!!!\n\n• 𝙏𝙄𝙀𝙉𝙀𝙎:\n${global.math[id][2]} 𝙞𝙣𝙩𝙚𝙣𝙩𝙤𝙨...`, m);
    }
  }
};
handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/;
handler.command = new RegExp;
export default handler;
