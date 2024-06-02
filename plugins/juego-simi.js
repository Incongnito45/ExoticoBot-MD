import fetch from 'node-fetch'
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

export default handler
