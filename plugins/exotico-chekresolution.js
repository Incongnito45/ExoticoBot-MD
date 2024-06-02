import jimp from "jimp"
import uploadImage from "../lib/uploadImage.js"
import uploadFile from "../lib/uploadFile.js"
let handler = async (m, { conn, usedPrefix }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw "᥀·࣭࣪̇˖🌐◗ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣𝙖 𝙞𝙢𝙖𝙜𝙚𝙣 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤."
let media = await q.download()
let isMedia = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isMedia ? uploadImage : uploadImage)(media)
let source = await jimp.read(await link)
let height = await source.getHeight()
let width = await source.getWidth()
m.reply(`𝗥𝗘𝗦𝗢𝗟𝗜𝗖𝗜𝗢𝗡: ${width} x ${height}\n𝗔𝗡𝗖𝗛𝗢: ${width}\n𝗔𝗟𝗧𝗨𝗥𝗔: ${height}\n𝗘𝗡𝗟𝗔𝗖𝗘: ${link}`)}
handler.help = ['cekresolution <reply | caption>', 'cekreso <reply | caption>']
handler.tags = ['tool']
handler.command = /^(cekreso(lution)?|calidadimg|qualityimg)$/i
export default handler
