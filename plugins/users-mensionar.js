let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `${IDexotic.afkE} ${pesan}`
let teks = `${IDexotic.tagallA}\n${IDexotic.tagallB} ${oi}\n${IDexotic.tagallB}`
for (let mem of participants) {
teks += `${IDexotic.tagallB} @${mem.id.split('@')[0]}\n`}
teks += `${IDexotic.tagallB}\n`
teks += `${IDexotic.tagallB} ${wm}\n`
teks += `${IDexotic.tagallC}`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
