import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = m => m
handler.before = async function (m, { conn, usedPrefix }) {
	
if (!db.data.chats[m.chat].autolevelup) return
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
	
let user = global.db.data.users[m.sender]
let chat = global.db.data.chats[m.chat]
if (!chat.autolevelup)
return !0
	
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
 if (before !== user.level) {
 

conn.sendButton(m.chat, IDexotic.botInfo, `${IDexotic.rsLevel}${IDexotic.rpgNuevoNivel}

${IDexotic.rpgNewLevel}
${before}*   /   *${user.level}*

*${IDexotic.rpgNewRango}* ${user.role}

*_${IDexotic.rpgNivelDescrip}_*`, null, [[IDexotic.botonInfoA, `${usedPrefix}minfo`]], null, null, fkontak)


let especial = ['limit', 'diamond', 'joincount', 'emerald', 'berlian', 'kyubi', 'gold', 'money', 'tiketcoin', 'stamina'].getRandom()
let especial2 = ['potion', 'aqua', 'trash', 'wood', 'rock', 'batu', 'string', 'iron', 'coal', 'botol', 'kaleng', 'kardus'].getRandom()
let especial3 = ['eleksirb', 'emasbatang', 'emasbiasa', 'rubah', 'sampah', 'serigala', 'kayu', 'sword', 'umpan', 'healtmonster', 'emas', 'pancingan', 'pancing'].getRandom()
let especial4 = ['common', 'uncoommon', 'mythic', 'pet', 'gardenboxs', 'legendary'].getRandom()

let especialCant = [6, 7, 6, 7, 6, 6, 6, 7, 8, 9, 8, 3, 9, 7, 9].getRandom()
let especialCant2 = [6, 7, 6, 7, 6, 6, 6, 7, 8, 9, 10, 3, 11, 7, 9].getRandom()
let especialCant3 = [6, 7, 6, 7, 6, 6, 6, 7, 8, 9, 10, 3, 11, 7, 9].getRandom()
let especialCant4 = [2, 2, 2, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 2, 2].getRandom()

let normal = ['potion', 'aqua', 'trash', 'wood', 'rock', 'batu', 'string', 'iron', 'coal', 'botol', 'kaleng', 'kardus'].getRandom()
let normal2 = ['petFood', 'makanancentaur', 'makanangriffin', 'makanankyubi', 'makanannaga', 'makananpet', 'makananphonix'  ].getRandom()
let normal3 = ['anggur', 'apel', 'jeruk', 'mangga', 'pisang'].getRandom()

let normalCant = [1, 3, 3, 3, 4, 4, 2, 2, 4, 4, 4, 4, 1].getRandom() 
let normalCant2 = [1, 3, 2, 2, 4, 4, 2, 2, 4, 4, 5, 5, 1].getRandom() 
let normalCant3 = [1, 3, 3, 3, 4, 4, 2, 2, 4, 4, 4, 4, 1].getRandom() 

if (user.level == 5){
conn.reply(m.chat, `${IDexotic.rsLevel}*${IDexotic.rpgNuevoNivel} 5* 🎊
${IDexotic.aBordeG}*${especialCant * 1} ${global.rpgshop.emoticon(especial)}*
${IDexotic.aBordeG}*${especialCant2 * 1} ${global.rpgshop.emoticon(especial2)}*
${IDexotic.aBordeG}*${especialCant3 * 1} ${global.rpgshop.emoticon(especial3)}*
${IDexotic.aBordeG}*${especialCant4 * 1} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: IDexotic.botInfo, body: IDexotic.botDescrip, previewType: 0, thumbnail: imgAdvs, sourceUrl: exoticoAll }}}) 
user[especial] += especialCant * 1
user[especial2] += especialCant2 * 1
user[especial3] += especialCant3 * 1
user[especial4] += especialCant4 * 1
  
}else if (user.level == 10){
conn.reply(m.chat, `${IDexotic.rsLevel}*${IDexotic.rpgNuevoNivel} 10!!* 🎊
${IDexotic.aBordeG}*${especialCant * 1} ${global.rpgshop.emoticon(especial)}*
${IDexotic.aBordeG}*${especialCant2 * 1} ${global.rpgshop.emoticon(especial2)}*
${IDexotic.aBordeG}*${especialCant3 * 1} ${global.rpgshop.emoticon(especial3)}*
${IDexotic.aBordeG}*${especialCant4 * 1} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: IDexotic.botInfo, body: IDexotic.botDescrip, previewType: 0, thumbnail: imgAdvs, sourceUrl: exoticoAll }}}) 
user[especial] += especialCant * 1
user[especial2] += especialCant2 * 1
user[especial3] += especialCant3 * 1
user[especial4] += especialCant4 * 1
  
}else if (user.level == 15){
conn.reply(m.chat, `${IDexotic.rsLevel}*${IDexotic.rpgNuevoNivel} 15!!* 🎊
${IDexotic.aBordeG}*${especialCant * 2} ${global.rpgshop.emoticon(especial)}*
${IDexotic.aBordeG}*${especialCant2 * 2} ${global.rpgshop.emoticon(especial2)}*
${IDexotic.aBordeG}*${especialCant3 * 2} ${global.rpgshop.emoticon(especial3)}*
${IDexotic.aBordeG}*${especialCant4 * 2} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: IDexotic.botInfo, body: IDexotic.botDescrip, previewType: 0, thumbnail: imgAdvs, sourceUrl: exoticoAll }}}) 
user[especial] += especialCant * 2
user[especial2] += especialCant2 * 2
user[especial3] += especialCant3 * 2
user[especial4] += especialCant4 * 2
  
}else if (user.level == 20){
conn.reply(m.chat, `${IDexotic.rsLevel}*${IDexotic.rpgNuevoNivel} 20!!* 🎊
${IDexotic.aBordeG}*${especialCant * 2} ${global.rpgshop.emoticon(especial)}*
${IDexotic.aBordeG}*${especialCant2 * 2} ${global.rpgshop.emoticon(especial2)}*
${IDexotic.aBordeG}*${especialCant3 * 2} ${global.rpgshop.emoticon(especial3)}*
${IDexotic.aBordeG}*${especialCant4 * 2} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: IDexotic.botInfo, body: IDexotic.botDescrip, previewType: 0, thumbnail: imgAdvs, sourceUrl: exoticoAll}}}) 
user[especial] += especialCant * 2
user[especial2] += especialCant2 * 2
user[especial3] += especialCant3 * 2
user[especial4] += especialCant4 * 2
  
}else if (user.level == 25){
conn.reply(m.chat, `${IDexotic.rsLevel}*${IDexotic.rpgNuevoNivel} 25!!* 🎊
${IDexotic.aBordeG}*${especialCant * 3} ${global.rpgshop.emoticon(especial)}*
${IDexotic.aBordeG}*${especialCant2 * 3} ${global.rpgshop.emoticon(especial2)}*
${IDexotic.aBordeG}*${especialCant3 * 3} ${global.rpgshop.emoticon(especial3)}*
${IDexotic.aBordeG}*${especialCant4 * 3} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: IDexotic.botInfo, body: IDexotic.botDescrip, previewType: 0, thumbnail: imgAdvs, sourceUrl: exoticoAll }}})
user[especial] += especialCant * 3
user[especial2] += especialCant2 * 3
user[especial3] += especialCant3 * 3
user[especial4] += especialCant4 * 3
	
}else if (user.level == 30){
conn.reply(m.chat, `${IDexotic.rsLevel}*${IDexotic.rpgNuevoNivel} 30!!* 🎊
${IDexotic.aBordeG}*${especialCant * 3} ${global.rpgshop.emoticon(especial)}*
${IDexotic.aBordeG}*${especialCant2 * 3} ${global.rpgshop.emoticon(especial2)}*
${IDexotic.aBordeG}*${especialCant3 * 3} ${global.rpgshop.emoticon(especial3)}*
${IDexotic.aBordeG}*${especialCant4 * 3} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: IDexotic.botInfo, body: IDexotic.botDescrip, previewType: 0, thumbnail: imgAdvs, sourceUrl: exoticoAll }}})
user[especial] += especialCant * 3
user[especial2] += especialCant2 * 3
user[especial3] += especialCant3 * 3
user[especial4] += especialCant4 * 3
	
}else if (user.level == 35){
conn.reply(m.chat, `${IDexotic.rsLevel}*${IDexotic.rpgNuevoNivel} 35!!* 🎊
${IDexotic.aBordeG}*${especialCant * 4} ${global.rpgshop.emoticon(especial)}*
${IDexotic.aBordeG}*${especialCant2 * 4} ${global.rpgshop.emoticon(especial2)}*
${IDexotic.aBordeG}*${especialCant3 * 4} ${global.rpgshop.emoticon(especial3)}*
${IDexotic.aBordeG}*${especialCant4 * 4} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: IDexotic.botInfo, body: IDexotic.botDescrip, previewType: 0, thumbnail: imgAdvs, sourceUrl: exoticoAll }}})
user[especial] += especialCant * 4
user[especial2] += especialCant2 * 4
user[especial3] += especialCant3 * 4
user[especial4] += especialCant4 * 4
	
}else if (user.level == 40){
conn.reply(m.chat, `${IDexotic.rsLevel}*${IDexotic.rpgNuevoNivel} 40!!* 🎊
${IDexotic.aBordeG}*${especialCant * 4} ${global.rpgshop.emoticon(especial)}*
${IDexotic.aBordeG}*${especialCant2 * 4} ${global.rpgshop.emoticon(especial2)}*
${IDexotic.aBordeG}*${especialCant3 * 4} ${global.rpgshop.emoticon(especial3)}*
${IDexotic.aBordeG}*${especialCant4 * 4} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: IDexotic.botInfo, body: IDexotic.botDescrip, previewType: 0, thumbnail: imgAdvs, sourceUrl: exoticoAll }}})
user[especial] += especialCant * 4
user[especial2] += especialCant2 * 4
user[especial3] += especialCant3 * 4
user[especial4] += especialCant4 * 4
	
}else if (user.level == 45){
conn.reply(m.chat, `${IDexotic.rsLevel}*${IDexotic.rpgNuevoNivel} 45!!* 🎊
${IDexotic.aBordeG}*${especialCant * 4} ${global.rpgshop.emoticon(especial)}*
${IDexotic.aBordeG}*${especialCant2 * 4} ${global.rpgshop.emoticon(especial2)}*
${IDexotic.aBordeG}*${especialCant3 * 4} ${global.rpgshop.emoticon(especial3)}*
${IDexotic.aBordeG}*${especialCant4 * 4} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: IDexotic.botInfo, body: IDexotic.botDescrip, previewType: 0, thumbnail: imgAdvs, sourceUrl: exoticoAll }}})
user[especial] += especialCant * 4
user[especial2] += especialCant2 * 4
user[especial3] += especialCant3 * 4
user[especial4] += especialCant4 * 4
	
}else if (user.level == 50){
conn.reply(m.chat, `${IDexotic.rsLevel}*${IDexotic.rpgNuevoNivel} 50!!* 🎊
${IDexotic.aBordeG}*${especialCant * 5} ${global.rpgshop.emoticon(especial)}*
${IDexotic.aBordeG}*${especialCant2 * 5} ${global.rpgshop.emoticon(especial2)}*
${IDexotic.aBordeG}*${especialCant3 * 5} ${global.rpgshop.emoticon(especial3)}*
${IDexotic.aBordeG}*${especialCant4 * 5} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: IDexotic.botInfo, body: IDexotic.botDescrip, previewType: 0, thumbnail: imgAdvs, sourceUrl: exoticoAll }}})
user[especial] += especialCant * 5
user[especial2] += especialCant2 * 5
user[especial3] += especialCant3 * 5
user[especial4] += especialCant4 * 5
	
}else if (user.level == 55){
conn.reply(m.chat, `${IDexotic.rsLevel}*${IDexotic.rpgNuevoNivel} 55!!* 🎊
${IDexotic.aBordeG}*${especialCant * 5} ${global.rpgshop.emoticon(especial)}*
${IDexotic.aBordeG}*${especialCant2 * 5} ${global.rpgshop.emoticon(especial2)}*
${IDexotic.aBordeG}*${especialCant3 * 5} ${global.rpgshop.emoticon(especial3)}*
${IDexotic.aBordeG}*${especialCant4 * 5} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: IDexotic.botInfo, body: IDexotic.botDescrip, previewType: 0, thumbnail: imgAdvs, sourceUrl: exoticoAll }}})
user[especial] += especialCant * 5
user[especial2] += especialCant2 * 5
user[especial3] += especialCant3 * 5
user[especial4] += especialCant4 * 5
	
}else if (user.level == 60){
conn.reply(m.chat, `${IDexotic.rsLevel}*${IDexotic.rpgNuevoNivel} 60!!* 🎊
${IDexotic.aBordeG}*${especialCant * 5} ${global.rpgshop.emoticon(especial)}*
${IDexotic.aBordeG}*${especialCant2 * 5} ${global.rpgshop.emoticon(especial2)}*
${IDexotic.aBordeG}*${especialCant3 * 5} ${global.rpgshop.emoticon(especial3)}*
${IDexotic.aBordeG}*${especialCant4 * 5} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: IDexotic.botInfo, body: IDexotic.botDescrip, previewType: 0, thumbnail: imgAdvs, sourceUrl: exoticoAll }}})
user[especial] += especialCant * 5
user[especial2] += especialCant2 * 5
user[especial3] += especialCant3 * 5
user[especial4] += especialCant4 * 5
	
}else if (user.level == 65){
conn.reply(m.chat, `${IDexotic.rsLevel}*${IDexotic.rpgNuevoNivel} 65!!* 🎊
${IDexotic.aBordeG}*${especialCant * 5} ${global.rpgshop.emoticon(especial)}*
${IDexotic.aBordeG}*${especialCant2 * 5} ${global.rpgshop.emoticon(especial2)}*
${IDexotic.aBordeG}*${especialCant3 * 5} ${global.rpgshop.emoticon(especial3)}*
${IDexotic.aBordeG}*${especialCant4 * 5} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: IDexotic.botInfo, body: IDexotic.botDescrip, previewType: 0, thumbnail: imgAdvs, sourceUrl: exoticoAll }}})
user[especial] += especialCant * 5
user[especial2] += especialCant2 * 5
user[especial3] += especialCant3 * 5
user[especial4] += especialCant4 * 5
	
}else if (user.level == 70){
conn.reply(m.chat, `${IDexotic.rsLevel}*${IDexotic.rpgNuevoNivel} 70!!* 🎊
${IDexotic.aBordeG}*${especialCant * 6} ${global.rpgshop.emoticon(especial)}*
${IDexotic.aBordeG}*${especialCant2 * 6} ${global.rpgshop.emoticon(especial2)}*
${IDexotic.aBordeG}*${especialCant3 * 6} ${global.rpgshop.emoticon(especial3)}*
${IDexotic.aBordeG}*${especialCant4 * 6} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: IDexotic.botInfo, body: IDexotic.botDescrip, previewType: 0, thumbnail: imgAdvs, sourceUrl: exoticoAll }}})
user[especial] += especialCant * 6
user[especial2] += especialCant2 * 6
user[especial3] += especialCant3 * 6
user[especial4] += especialCant4 * 6
	
}else if (user.level == 75){
conn.reply(m.chat, `${IDexotic.rsLevel}*${IDexotic.rpgNuevoNivel} 75!!* 🎊
${IDexotic.aBordeG}*${especialCant * 6} ${global.rpgshop.emoticon(especial)}*
${IDexotic.aBordeG}*${especialCant2 * 6} ${global.rpgshop.emoticon(especial2)}*
${IDexotic.aBordeG}*${especialCant3 * 6} ${global.rpgshop.emoticon(especial3)}*
${IDexotic.aBordeG}*${especialCant4 * 6} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: IDexotic.botInfo, body: IDexotic.botDescrip, previewType: 0, thumbnail: imgAdvs, sourceUrl: exoticoAll }}})
user[especial] += especialCant * 6
user[especial2] += especialCant2 * 6
user[especial3] += especialCant3 * 6
user[especial4] += especialCant4 * 6
	
}else if (user.level == 80){
conn.reply(m.chat, `${IDexotic.rsLevel}*${IDexotic.rpgNuevoNivel} 80!!* 🎊
${IDexotic.aBordeG}*${especialCant * 7} ${global.rpgshop.emoticon(especial)}*
${IDexotic.aBordeG}*${especialCant2 * 7} ${global.rpgshop.emoticon(especial2)}*
${IDexotic.aBordeG}*${especialCant3 * 7} ${global.rpgshop.emoticon(especial3)}*
${IDexotic.aBordeG}*${especialCant4 * 7} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: IDexotic.botInfo, body: IDexotic.botDescrip, previewType: 0, thumbnail: imgAdvs, sourceUrl: exoticoAll }}})
user[especial] += especialCant * 7
user[especial2] += especialCant2 * 7
user[especial3] += especialCant3 * 7
user[especial4] += especialCant4 * 7
	
}else if (user.level == 85){
conn.reply(m.chat, `${IDexotic.rsLevel}*${IDexotic.rpgNuevoNivel} 85!!* 🎊
${IDexotic.aBordeG}*${especialCant * 7} ${global.rpgshop.emoticon(especial)}*
${IDexotic.aBordeG}*${especialCant2 * 7} ${global.rpgshop.emoticon(especial2)}*
${IDexotic.aBordeG}*${especialCant3 * 7} ${global.rpgshop.emoticon(especial3)}*
${IDexotic.aBordeG}*${especialCant4 * 7} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: IDexotic.botInfo, body: IDexotic.botDescrip, previewType: 0, thumbnail: imgAdvs, sourceUrl: exoticoAll}}})
user[especial] += especialCant * 7
user[especial2] += especialCant2 * 7
user[especial3] += especialCant3 * 7
user[especial4] += especialCant4 * 7
	
}else if (user.level == 90){
conn.reply(m.chat, `${IDexotic.rsLevel}*${IDexotic.rpgNuevoNivel} 90!!* 🎊
${IDexotic.aBordeG}*${especialCant * 8} ${global.rpgshop.emoticon(especial)}*
${IDexotic.aBordeG}*${especialCant2 * 8} ${global.rpgshop.emoticon(especial2)}*
${IDexotic.aBordeG}*${especialCant3 * 8} ${global.rpgshop.emoticon(especial3)}*
${IDexotic.aBordeG}*${especialCant4 * 8} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: IDexotic.botInfo, body: IDexotic.botDescrip, previewType: 0, thumbnail: imgAdvs, sourceUrl: exoticoAll }}})
user[especial] += especialCant * 8
user[especial2] += especialCant2 * 8
user[especial3] += especialCant3 * 8
user[especial4] += especialCant4 * 8
	
}else if (user.level == 95){
conn.reply(m.chat, `${IDexotic.rsLevel}*${IDexotic.rpgNuevoNivel} 95!!* 🎊
${IDexotic.aBordeG}*${especialCant * 10} ${global.rpgshop.emoticon(especial)}*
${IDexotic.aBordeG}*${especialCant2 * 10} ${global.rpgshop.emoticon(especial2)}*
${IDexotic.aBordeG}*${especialCant3 * 10} ${global.rpgshop.emoticon(especial3)}*
${IDexotic.aBordeG}*${especialCant4 * 10} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: IDexotic.botInfo, body: IDexotic.botDescrip, previewType: 0, thumbnail: imgAdvs, sourceUrl: exoticoAll }}})
user[especial] += especialCant * 10
user[especial2] += especialCant2 * 10
user[especial3] += especialCant3 * 10
user[especial4] += especialCant4 * 10
	
}else if (user.level == 100){
conn.reply(m.chat, `${IDexotic.rsLevel}*${IDexotic.rpgNuevoNivel} 100!!* 🎊
${IDexotic.aBordeG}*${especialCant * 10} ${global.rpgshop.emoticon(especial)}*
${IDexotic.aBordeG}*${especialCant2 * 10} ${global.rpgshop.emoticon(especial2)}*
${IDexotic.aBordeG}*${especialCant3 * 10} ${global.rpgshop.emoticon(especial3)}*
${IDexotic.aBordeG}*${especialCant4 * 10} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: IDexotic.botInfo, body: IDexotic.botDescrip, previewType: 0, thumbnail: imgAdvs, sourceUrl: exoticoAll }}})
user[especial] += especialCant * 10
user[especial2] += especialCant2 * 10
user[especial3] += especialCant3 * 10
user[especial4] += especialCant4 * 10
	
}else{	
	
}
	 
}}		
export default handler
