let handler = m => m 
handler.before = async function (m, { text, args, usedPrefix, command, conn } ) {
let user = global.db.data.users[m.sender]
if (user.afk > -1) {
await conn.reply(m.chat, `
${IDexotic.afkB} *@${m.sender.split("@")[0]}* ${IDexotic.afkC}

${IDexotic.afkD}${user.afkReason ? `\n${IDexotic.afkE} ` + user.afkReason : ''}

${IDexotic.afkG}
• *${(new Date - user.afk).toTimeString()}*`.trim(), m, { mentions: [m.sender] })
user.afk = -1
user.afkReason = ''
}
let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of jids) {
let user = global.db.data.users[jid]
if (!user)
continue
let afkTime = user.afk
if (!afkTime || afkTime < 0)
continue
let reason = user.afkReason || ''
await conn.reply(m.chat, `
${IDexotic.afkB} *@${m.sender.split("@")[0]}*
${IDexotic.afkF}

${reason ? `${IDexotic.afkE}` + reason : `${IDexotic.aMotivo}`}

${IDexotic.afkG}
• *${(new Date - user.afk).toTimeString()}*`.trim(), m)
}
return true
}
export default handler
