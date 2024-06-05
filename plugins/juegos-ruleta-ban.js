let handler = async (m, { conn,groupMetadata, participants, usedPrefix, command, isBotAdmin,isAdmin,isSuperAdmin }) => {
let bot = global.db.data.settings[conn.user.jid] || {}
if (!bot.restrict) return m.reply(`᥀·࣭࣪̇˖⚔️◗ 𝙀𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙖𝙘𝙩𝙞𝙫𝙖𝙧 𝙡𝙖𝙨 𝙧𝙚𝙨𝙩𝙧𝙞𝙘𝙘𝙞𝙤𝙣𝙚𝙨 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙗𝙤𝙩.`) 
if (!isBotAdmin) return m.reply(`᥀·࣭࣪̇˖⚔️◗ 𝙉𝙤 𝙨𝙤𝙮 𝙖𝙙𝙢𝙞𝙣, 𝙣𝙤 𝙥𝙪𝙚𝙙𝙤 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙖 𝙡𝙖𝙨 𝙥𝙚𝙧𝙨𝙤𝙣𝙖𝙨 𝙘𝙤𝙣 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.`)
if (!m.isGroup) return !1
let format = a => '@' + a.split('@')[0]
let psmap = groupMetadata.participants.filter(v => v !== conn.user.jid)
psmap=psmap.filter(v => v.admin !=='superadmin')
psmap=psmap.filter(v => v.admin !=='admin')
psmap=psmap.map(v => v.id)
if (psmap == '') return m.reply(`᥀·࣭࣪̇˖🍷◗ 𝙉𝙤 𝙨𝙚 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙧𝙤𝙣 𝙥𝙚𝙧𝙨𝙤𝙣𝙖𝙨 𝙥𝙖𝙧𝙖 𝙧𝙚𝙖𝙡𝙞𝙯𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.`)
let user = psmap.getRandom()
m.reply(`᥀·࣭࣪̇˖🗿◗ 𝙃𝙤𝙡𝙖 ${format(user)}, 𝙝𝙖𝙨 𝙨𝙞𝙙𝙤 𝙚𝙡𝙚𝙜𝙞𝙙𝙤, 𝙗𝙮𝙚 𝙗𝙮𝙚`,null,{mentions: [user]})	
await delay(2000)    
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
}

handler.command = /^(ruletaban)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler

const delay = time => new Promise(res => setTimeout(res, time))


