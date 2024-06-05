let handler = async (m, { text, conn, usedPrefix, command }) => {
let why = `᥀·࣭࣪̇˖💎◗ 𝘿𝙚𝙗𝙚 𝙙𝙚 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙚𝙧 𝙤 𝙢𝙚𝙣𝙨𝙞𝙤𝙣𝙖𝙧 𝙖 𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.`
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
if (!who) conn.reply(m.chat, why, m, { mentions: [m.sender] })
let res = [];
console.log(command)
	
switch (command) {
case "blok":
case "block":
case "bloquear":		
if (who) await conn.updateBlockStatus(who, "block").then(() => {
res.push(who);
})
else conn.reply(m.chat, why, m, { mentions: [m.sender] })
break
		
case "unblok":
case "unblock":
case "desbloquear":
if (who) await conn.updateBlockStatus(who, "unblock").then(() => {
res.push(who);
})
else conn.reply(m.chat, why, m, { mentions: [m.sender] })
break
}
if (res[0]) conn.reply(m.chat, `${res ? '᥀·࣭࣪̇˖✅◗ 𝙐𝙨𝙪𝙖𝙧𝙞𝙤 𝙗𝙡𝙤𝙦𝙪𝙚𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤!!!' : '᥀·࣭࣪̇˖✅◗ 𝙐𝙨𝙪𝙖𝙧𝙞𝙤 𝙙𝙚𝙨𝙗𝙡𝙤𝙦𝙪𝙚𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤!!!'`, m, { mentions: res })
}
handler.help = ["block", "unblock"]
handler.tags = ["owner"]
handler.command = /^(block|unblock|bloquear|desbloquear)$/i
handler.owner = true
 
export default handler
