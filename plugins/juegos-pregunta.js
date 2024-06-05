var handler = async (m, { conn, text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `᥀·࣭࣪̇˖🎰◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧.`)
m.react('❔')
await delay(1000 * 1)
m.react('❓')
await delay(1000 * 1)
m.react('❔')
await delay(1000 * 1)

conn.reply(m.chat, `BOT: ${['Si','Tal vez sí','Posiblemente','Probablemente no','No','Imposible','Por que haces estas preguntas','Por eso te dejo','Para que quieres saber','No te dire la respuesta'].getRandom()}`)

}
handler.help = ['pregunta']
handler.tags = ['fun']
handler.command = /^pregunta|preguntas|apakah$/i

handler.register = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

