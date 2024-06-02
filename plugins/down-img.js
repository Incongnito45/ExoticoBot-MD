import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `????????? ??????? ?? ????? ???? ????????.\n? *${usedPrefix + command} Universo*`
const prohibited = ['caca', 'polla', 'porno', 'porn', 'gore', 'cum', 'semen', 'puta', 'puto', 'culo', 'putita', 'putito','pussy', 'hentai', 'pene', 'coño', 'asesinato', 'zoofilia', 'mia khalifa', 'desnudo', 'desnuda', 'cuca', 'chocha', 'muertos', 'pornhub', 'xnxx', 'xvideos', 'teta', 'vagina', 'marsha may', 'misha cross', 'sexmex', 'furry', 'furro', 'furra', 'xxx', 'rule34', 'panocha', 'pedofilia', 'necrofilia', 'pinga', 'horny', 'ass', 'nude', 'popo', 'nsfw', 'femdom', 'futanari', 'erofeet', 'sexo', 'sex', 'yuri', 'ero', 'ecchi', 'blowjob', 'anal', 'ahegao', 'pija', 'verga', 'trasero', 'violation', 'violacion', 'bdsm', 'cachonda', '+18', 'cp', 'mia marin', 'lana rhoades', 'cepesito', 'hot', 'buceta', 'xxx', 'Violet Myllers', 'Violet Myllers pussy', 'Violet Myllers desnuda', 'Violet Myllers sin ropa', 'Violet Myllers culo', 'Violet Myllers vagina', 'Pornografía', 'Pornografía infantil', 'niña desnuda', 'niñas desnudas', 'niña pussy', 'niña pack', 'niña culo', 'niña sin ropa', 'niña siendo abusada', 'niña siendo abusada sexualmente' , 'niña cogiendo', 'niña fototeta', 'niña vagina', 'hero Boku no pico', 'Mia Khalifa cogiendo', 'Mia Khalifa sin ropa', 'Mia Khalifa comiendo polla', 'Mia Khalifa desnuda']
if (prohibited.some(word => m.text.toLowerCase().includes(word))) return m.reply('???????? ??? ???? ?? ?????? ?? ???? ?????????.')      
try {
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendButton(m.chat, `${packname}`, wm, link, [['????????? ?', `/imagen ${text}`]], null, null, m)
} catch (e) {
console.log(`${errorBB}`)
console.log(e)
handler.money = false
}}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen|jpg)$/i
//handler.money = 1
export default handler
