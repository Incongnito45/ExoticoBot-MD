import fetch from 'node-fetch'
import moment from 'moment-timezone'
import axios from 'axios'
import fs from 'fs'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto }  = (await import(global.baileys))

var handler = m => m
handler.all = async function (m) {
global.key = ''

// Cuentas
const response = await fetch('https://raw.githubusercontent.com/MultiBot-OFC/ExoticoBot-MD/master/random_cuentas.json')  
const data = await response.json()
let { accounts, groups } = data.info

global.ig = accounts.instagram
global.md = accounts.exoticobot_md
global.fb = accounts.facebook
global.paypal = accounts.paypal
global.ig = accounts.instagram
global.cuentaofc = accounts.mail
global.asistencia = 'https://wa.me/5493873232221'
global.atomofc = accounts.all

global.grupo1 = groups.group1
global.grupo2 = groups.group2
global.grupo3 = groups.group3

global.creador = 'https://wa.me/5493873232212'
global.mycanal = 'https://whatsapp.com/channel/0029Vaf8ZxlLdQelKKUUON22'

global.exoticoRedes = [md, paypal, paypal, md, paypal, atomofc, atomofc, mycanal, mycanal, md, asistencia, asistencia].getRandom()
global.exoticCnts = [mycanal, grupo1, atomofc, atomofc, grupo2, grupo3, md, paypal, asistencia, creador, md].getRandom()
global.exoticoAll = [mycanal, asistencia, grupo1, grupo2, grupo3, mycanal, atomofc, atomofc, paypal, fb, md, asistencia].getRandom()

// Imágenes 
global.imagen1 = fs.readFileSync("./Multi_Imagen/Menu3.jpg")
global.imagen2 = fs.readFileSync("./Multi_Imagen/exotico1.jpg")
global.imagen3 = fs.readFileSync("./Multi_Imagen/exotico2.jpg")
global.imagen4 = fs.readFileSync("./Multi_Imagen/exotico3.jpg")
global.imagen5 = fs.readFileSync("./Multi_Imagen/exotico4.jpg")
global.imagen6 = fs.readFileSync("./Multi_Imagen/exotico5.jpg")
global.imagen7 = fs.readFileSync("./Multi_Imagen/exotico6.jpg")
global.imagen8 = fs.readFileSync("./Multi_Imagen/exotico7.jpg")
global.imagen9 = fs.readFileSync("./Multi_Imagen/exotico8.jpg")
global.imagen10 = fs.readFileSync("./Multi_Imagen/exotico9.jpg")
global.imagen11 = fs.readFileSync("./Multi_Imagen/exotico10.jpg")
global.imagen12 = fs.readFileSync("./Multi_Imagen/exotico11.jpg")
global.imagen13 = fs.readFileSync("./Multi_Imagen/exotico12.jpg")
global.imagen14 = fs.readFileSync("./Multi_Imagen/exotico13.jpg")
global.imagen15 = fs.readFileSync("./Multi_Imagen/exotico14.jpg")
global.imagen16 = fs.readFileSync("./Multi_Imagen/exotico15.jpg")
global.imagen17 = fs.readFileSync("./Multi_Imagen/exotico16.jpg")
global.imagen18 = fs.readFileSync("./Multi_Imagen/exotico17.jpg")
global.imagen19 = fs.readFileSync("./Multi_Imagen/exotico18.jpg")
global.imagen20 = fs.readFileSync("./Multi_Imagen/exotico19.jpg")
global.imagen21 = fs.readFileSync("./Multi_Imagen/exotico20.jpg")
global.imagen22 = fs.readFileSync("./Multi_Imagen/exotico21.jpg")
global.imagen23 = fs.readFileSync("./Multi_Imagen/exotico22.jpg")
global.imagen24 = fs.readFileSync("./Multi_Imagen/exotico23.jpg")
global.imagen25 = fs.readFileSync("./Multi_Imagen/exotico24.jpg")
global.imagen26 = fs.readFileSync("./Multi_Imagen/exotico25.jpg")
global.imagen27 = fs.readFileSync("./Multi_Imagen/exotico26.jpg")
global.imagen28 = fs.readFileSync("./Multi_Imagen/exotico27.jpg")
global.imagen29 = fs.readFileSync("./Multi_Imagen/exotico28.jpg")
global.imagen30 = fs.readFileSync("./Multi_Imagen/exotico29.jpg")

//menus
global.menuImg1 = fs.readFileSync("./Multi_Imagen/Menu1.jpg")
global.menuImg2 = fs.readFileSync("./Multi_Imagen/Menu2.jpg")
global.menuImg3 = fs.readFileSync("./Multi_Imagen/Menu3.jpg")

//paypal
global.imgpaypal = fs.readFileSync("./Multi_Imagen/paypal.jpg")

//Imagenes de handler.js advs
global.imgAdv = fs.readFileSync("./Adv_Imagen/Adv.jpg")
global.imgAdv2 = fs.readFileSync("./Adv_Imagen/Adv2.jpg")
global.imgAdv3 = fs.readFileSync("./Adv_Imagen/Adv3.jpg")
global.imgAdv4 = fs.readFileSync("./Adv_Imagen/Adv4.jpg")
global.imgAdv5 = fs.readFileSync("./Adv_Imagen/Adv5.jpg")
global.imgAdv6 = fs.readFileSync("./Adv_Imagen/Adv6.jpg")
global.imgAdv7 = fs.readFileSync("./Adv_Imagen/Adv7.jpg")
global.imgAdv8 = fs.readFileSync("./Adv_Imagen/Adv8.jpg")

global.exocafecito = fs.readFileSync("./STICKER/exotico.jpg")

//Foto version 2
global.imag1 = 'https://telegra.ph/file/2f71a434e7bbe5864ce2e.jpg'
global.imag2 = 'https://telegra.ph/file/66e5987e174c02696641e.jpg'
global.imag3 = 'https://telegra.ph/file/6244b3ffc194dbda90e65.jpg'
global.imag4 = 'https://telegra.ph/file/a89c40c1cf062b3397a11.jpg'
global.imag5 = 'https://telegra.ph/file/4b9a9151cd53427d697a2.jpg'
global.imag6 = 'https://telegra.ph/file/04da417fda5683f08b18f.jpg'
global.imag7 = 'https://telegra.ph/file/0d7775bd4cf2ec4847db4.jpg'
global.imag8 = 'https://telegra.ph/file/ac351a18272c246a48dbb.jpg'
global.imag9 = 'https://telegra.ph/file/89affade811755f4f5ec4.jpg'
global.imag10 = 'https://telegra.ph/file/6db49fba157558ec09a03.jpg'
global.imag11 = 'https://telegra.ph/file/f5dc2f8c20f2c0e1fa65a.jpg'
global.imag12 = 'https://telegra.ph/file/e7ed70b5d04bf55536704.jpg'

//fotos de nivel
global.fotonivel1 = 'https://telegra.ph/file/b6cf8929ee99ec64d5d10.jpg'
global.fotonivel2 = 'https://telegra.ph/file/86067b7da2c94d068e8b2.jpg'
global.fotonivel3 = 'https://telegra.ph/file/7a156b9730c6e3a0e604a.jpg'
global.fotonivel4 = 'https://telegra.ph/file/da28ca68e223ed9849eaa.jpg'
global.fotonivel5 = 'https://telegra.ph/file/c2830903d3d6496ba0d20.jpg'
global.fotonivel6 = 'https://telegra.ph/file/4e8616a265e3fa7f28e4d.jpg'
global.fotonivel7 = 'https://telegra.ph/file/170c4b6996f6cba40cc53.jpg'
global.fotonivel8 = 'https://telegra.ph/file/aba0c6831fe83b97948c8.jpg'
global.fotonivel9 = 'https://telegra.ph/file/1c7938756cb378c198204.jpg'
global.fotonivel10 = 'https://telegra.ph/file/1703ef2a226eb026ff183.jpg'

//fotos de bienvenida
global.imgwel1 = 'https://telegra.ph/file/0a50af66014eb25698588.jpg'
global.imgwel2 = 'https://telegra.ph/file/1bff4d35ea7578c8aebee.jpg'
global.imgwel3 = 'https://telegra.ph/file/7313d5093daff008970b3.jpg'
global.imgwel4 = 'https://telegra.ph/file/e4950b9621e4b0c64aa9a.jpg'
global.imgwel5 = 'https://telegra.ph/file/03422fdb16457b5310a52.jpg'

//fotos cuadradas.
global.img = 'https://telegra.ph/file/9848f5a79db976bd81412.jpg'
global.img2 = 'https://telegra.ph/file/e3a8e7662085c2408a364.jpg'
global.img3 = 'https://telegra.ph/file/be70073e7e14fdb7f9cba.jpg' //prem
global.img4 = 'https://telegra.ph/file/3bb0ba7c872888910f187.jpg' //prem
global.img5 = 'https://telegra.ph/file/170e4d3d6d3b61bd001c0.jpg'
global.img6 = 'https://telegra.ph/file/904a0c6955906353add69.jpg'
global.img7 = 'https://telegra.ph/file/7e25ba80e27911432fa7f.jpg'
global.img8 = 'https://telegra.ph/file/8a608a3120edf66318a5e.jpg'
global.img9 = 'https://telegra.ph/file/f3f14be94ffbf2af7c91a.jpg'
global.img10 = 'https://telegra.ph/file/992e96bdaa4d4f16157e2.jpg'
global.img11 = 'https://telegra.ph/file/2065ba7752f4699c80c6b.jpg'
global.img12 = 'https://telegra.ph/file/083aac29c82fd4daabda8.jpg'
global.img13 = 'https://telegra.ph/file/7faa584c06802a99b4c37.jpg'
global.img14 = 'https://telegra.ph/file/e4b622704c514398bad37.jpg'
global.img15 = 'https://telegra.ph/file/728884baa1ba9eb98e072.jpg' 
global.img16 = 'https://telegra.ph/file/728884baa1ba9eb98e072.jpg' //+18
global.img17 = 'https://telegra.ph/file/b91ecba67229defc0012e.jpg'
global.img18 = 'https://telegra.ph/file/e4b622704c514398bad37.jpg'
global.logogit = 'https://qu.ax/RzKF.jpg'

//videos
global.videoRandom = ['https://qu.ax/uLtU.mp4', 'https://qu.ax/ukVe.mp4', 'https://qu.ax/lMxG.mp4', 'https://qu.ax/hAag.mp4', 'https://qu.ax/SNLc.mp4', 'https://qu.ax/ysCL.mp4'].getRandom()

//fotos cuadradas
global.menusRB = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18].getRandom()

//fotos anchas
global.imgRB = [imag1, imag2, imag3, imag4, imag5, imag6, imag7, imag8, imag9, imag10, imag11, imag12].getRandom()

//bienvenida
global.imggRB = [imgwel1, imgwel2, imgwel3, imgwel4, imgwel5].getRandom()

//niveles
global.imgggRB = [fotonivel1, fotonivel2, fotonivel3, fotonivel4, fotonivel5, fotonivel6, fotonivel7, fotonivel8, fotonivel9, fotonivel10].getRandom()

//Imagenes
global.imagenRB = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13, imagen14, imagen15, imagen16, imagen17, imagen18, imagen19, imagen20, imagen21, imagen22, imagen23, imagen24, imagen25, imagen26, imagen27, imagen28, imagen29, imagen30].getRandom()

//menus 3
global.multiMenus = [menuImg1, menuImg2, menuImg3].getRandom

//Imagenes advs
global.imgAdvs = [imgAdv, imgAdv2, imgAdv3, imgAdv4, imgAdv5, imgAdv6, imgAdv7, imgAdv8].getRandom()

global.videoMenu1 = fs.readFileSync("./NODE_EXOTICO_JSON/Menu1.mp4")
global.videoMenu2 = fs.readFileSync("./NODE_EXOTICO_JSON/Menu2.mp4")

/*
global.videoMenu3 = fs.readFileSync("./NODE_EXOTICO_JSON/Menu3.mp4")
global.videoMenu4 = fs.readFileSync("./NODE_EXOTICO_JSON/Menu4.mp4")
global.videoMenu5 = fs.readFileSync("./NODE_EXOTICO_JSON/Menu5.mp4")
global.videoMenu6 = fs.readFileSync("./NODE_EXOTICO_JSON/Menu6.mp4")
*/

// Fake
global.fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

global.fakeChannel = 'https://whatsapp.com/channel/0029Vaf8ZxlLdQelKKUUON22'
  
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5493873232212-5493873232221@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Super Bot WhatsApp', orderTitle: 'Bang', thumbnail: menusRB, sellerJid: '0@s.whatsapp.net' }}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5493873232212-5493873232221@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   
}}} 

//let bottime = `${name} 𝗧𝗜𝗠𝗘: ${moment.tz('America/Bogota').format('HH:mm:ss')}`//America/Los_Angeles

let ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 99, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
let fgif = {key: {participant : '0@s.whatsapp.net'}, message: {"videoMessage": { "title": wm, "h": `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Multi_Imagen/Menu3.jpg')}}}
                             
let enlace = { contextInfo: { externalAdReply: {title: wm, body: IDexotic.botInfo, sourceUrl: exoticoAll, thumbnail: await(await fetch(global.imgRB)).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: paypal, mediaType: 'VIDEO', description: '', title: wm, body: ' • ExoticoBot-MD / Multi Bot • ', thumbnailUrl: menusRB, sourceUrl: exoticoAll }}}
let dos = [enlace, enlace2]  

global.wait = "❮🌌❯ •═────────────• *10%*"
global.waitt = "❮🌌❯ •═══──────────• *33%*"
global.waittt = "❮🌌❯ •═══════──────• *64%*"
global.waitttt = "❮🌌❯ •═══════════──• *87%*"
global.waittttt = "❮🌌❯ •═════════════• *100%*"

global.destraba = `⏰DESTRABA⏰*
li.DESTRAVip.to
2024 🦍💨

ဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪ
☣✝ﾚⅰɬ◊D͠Я◊ⅰD͠  D͠∑ㄅɬЯ∆√✝☣`
  
}
export default handler

// Mensaje de espera
// await mensajesEditados(conn, m)
global.mensajesEditados = async function(conn, m) {
const mensajes = [waitt, waittt, waitttt, waittttt]
key = await conn.sendMessage(m.chat, { text: wait, quoted: m })
for (let i = 0; i < mensajes.length; i++) {
await new Promise(resolve => setTimeout(resolve, 1000))
await conn.sendMessage(m.chat, { text: mensajes[i], edit: key })
}}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
  }
