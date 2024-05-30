import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/MultiBot-OFC/ExoticoBot-MD/master/Multi_Imagen/node_product.json/buy_servidores.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, "𝐄𝐗𝐎𝐓𝐈𝐂𝐎 𝐁𝐎𝐓 𝐌𝐃", '𝘊𝘰𝘯𝘴𝘶𝘭𝘵𝘢 𝘦𝘭 𝘱𝘳𝘰𝘥𝘶𝘤𝘵𝘰 𝘴𝘪 𝘵𝘦 𝘪𝘯𝘵𝘦𝘳𝘦𝘴𝘢.', url, [[mssg.botonSiguiente, `${usedPrefix + command}`]], null, [[IDexotic.fBotonConsulta, `${creador}`], [IDexotic.fBotonComprar, `${paypal}`]], m)}
handler.help = ['productos']
handler.tags = ['internet']
handler.command = /^(cproducto|verproductos)$/i
export default handler
