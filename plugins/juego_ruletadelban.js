let handler = async (m, { conn,groupMetadata, participants, usedPrefix, command, isBotAdmin,isAdmin,isSuperAdmin }) => {
let bot = global.db.data.settings[conn.user.jid] || {}
if (!bot.restrict) return m.reply(`᥀·࣭࣪̇˖🛡️◗ 𝙀𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙖𝙘𝙩𝙞𝙫𝙖𝙧 𝙡𝙖𝙨 𝙧𝙚𝙨𝙩𝙧𝙞𝙘𝙘𝙞𝙤𝙣𝙚𝙨 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.`) 
if (!isBotAdmin) return m.reply(`᥀·࣭࣪̇˖❕◗ 𝙉𝙤 𝙨𝙤𝙮 𝙖𝙙𝙢𝙞𝙣 𝙥𝙖𝙧𝙖 𝙚𝙟𝙚𝙘𝙪𝙩𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.`)
if (!m.isGroup) return !1
let format = a => '@' + a.split('@')[0]
let psmap = groupMetadata.participants.filter(v => v !== conn.user.jid)
psmap=psmap.filter(v => v.admin !=='superadmin')
psmap=psmap.filter(v => v.admin !=='admin')
psmap=psmap.map(v => v.id)
if (psmap == '') return m.reply(`᥀·࣭࣪̇˖⛔◗ 𝙉𝙤 𝙨𝙚 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙧𝙤𝙣 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚𝙨 𝙤 𝙩𝙤𝙙𝙤𝙨 𝙨𝙤𝙣 𝙖𝙙𝙢𝙞𝙣𝙨 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.`)
let user = psmap.getRandom()
m.reply(`᥀·࣭࣪̇˖🎯◗ 𝙃𝙤𝙡𝙖 ${format(user)}, 𝙝𝙖𝙨 𝙨𝙞𝙙𝙤 𝙚𝙡𝙚𝙜𝙞𝙙𝙤 𝙚𝙣 𝙡𝙖 \`𝙍𝙪𝙡𝙚𝙩𝙖𝘽𝙖𝙣\`, 𝙟𝙨𝙟𝙨𝙟`,null,{mentions: [user]})	
await delay(2000)    
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
}

handler.command = /^(ruletadelban)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler

const delay = time => new Promise(res => setTimeout(res, time))


