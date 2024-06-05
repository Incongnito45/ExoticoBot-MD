import translate from '@vitalets/google-translate-api';
import fetch from 'node-fetch';
const handler = async (m, {text, command, args, usedPrefix}) => {
if (!text) throw `᥀·࣭࣪̇˖☁️◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙖 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙝𝙖𝙗𝙡𝙖𝙧 𝙘𝙤𝙣𝙢𝙞𝙜𝙤.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n${usedPrefix + command} como estas.`
try {
await conn.sendPresenceUpdate('composing', m.chat)
const api = await fetch('https://api.simsimi.net/v2/?text=' + text + '&lc=es');
const resSimi = await api.json();
m.reply(resSimi.success);
} catch {
try {
if (text.includes('Hola')) text = text.replace('Hola', 'Hello');
if (text.includes('hola')) text = text.replace('hola', 'Hello');
if (text.includes('HOLA')) text = text.replace('HOLA', 'HELLO');
const reis = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + text);
const resu = await reis.json();
const nama = m.pushName || '1';
const api = await fetch('http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=' + nama + '&msg=' + resu[0][0][0]);
const res = await api.json();
const reis2 = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=' + res.cnt);
const resu2 = await reis2.json();
m.reply(resu2[0][0][0]);
} catch (e) {
await m.reply(errorAB)
console.log(`${errorBB}`)
console.log(e)
}}}
handler.help = ['simsimi']
handler.tags = ['General']
handler.command = ['bot', 'simi', 'exotico'] 
export default handler

/*import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {

 let lang = global.db.data.users[m.sender].language
  if (!text) throw `᥀·࣭࣪̇˖🎒◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙖 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙝𝙖𝙗𝙡𝙖𝙧 𝙘𝙤𝙣𝙢𝙞𝙜𝙤.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n${usedPrefix + command} como estas.`
  m.react('👺') 
  try { 
  //let res = await fetch(`https://api.simsimi.vn/v2/?text=${text}&lc=${lang}`)
  let res = await fetch('https://api.simsimi.vn/v1/simtalk', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `text=${encodeURIComponent(text)}&lc=${lang}&key=`
  })
  let json = await res.json()
  m.reply(json.message.replace('simsimi', `𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩`).replace('Simsimi', `𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩`).replace('sim simi', `𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩`))
} catch {
  m.reply(`᥀·࣭࣪̇˖⛔◗ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`)
}

}
handler.help = ['bot']
handler.tags = ['fun']
handler.command = ['bot', 'simi'] 

export default handler*/
