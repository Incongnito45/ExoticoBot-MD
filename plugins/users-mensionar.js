let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `┋⧈ 𝙈𝙚𝙣𝙨𝙖𝙟𝙚: ${pesan}`
let teks = `┏•┅┅┅•❲᥀·࣭࣪̇˖·࣭࣪̇𝗜𝆬𝗡𝆬𝗩𝆬𝗢𝆬𝗖𝆬𝗔𝆬𝗥˖·࣭࣪̇᥀❳•┅┅┅•┓\n${oi}\n`
for (let mem of participants) {
teks += `┋⧈ @${mem.id.split('@')[0]}\n`}
teks += `┋\n`
teks += `┋⧈ ${wm}\n`
teks += `┗•┅┅┅•❲᥀·࣭࣪̇˖·࣭࣪̇𝗜𝆬𝗡𝆬𝗩𝆬𝗢𝆬𝗖𝆬𝗔𝆬𝗥˖·࣭࣪̇᥀❳•┅┅┅•┛`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
