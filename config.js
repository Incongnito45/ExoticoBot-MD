import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"
import cheerio from "cheerio"
import fetch from "node-fetch"
import axios from "axios"
import moment from "moment-timezone"
import { es } from "./language/index.js" 

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//𝘌𝘳𝘳𝘰𝘳𝘦𝘴 𝘮𝘦𝘯𝘴𝘪𝘰𝘯𝘢𝘥𝘰𝘴.
global.errorAB = '᥀·࣭࣪̇˖⚠️◗ 𝙀𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙝𝙖 𝙛𝙖𝙡𝙡𝙖𝙙𝙤 𝙥𝙤𝙧 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤, 𝙧𝙚𝙥𝙤𝙧𝙩𝙖𝙡𝙤 𝙖𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙙𝙚𝙡 𝙗𝙤𝙩.'
global.errorBB = '᥀·࣭࣪̇˖❌◗ 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙚𝙧𝙧𝙤𝙣𝙚𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.'

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//𝘐𝘨𝘯𝘰𝘳𝘦𝘯 𝘦𝘴𝘵𝘦 𝘢𝘱𝘢𝘳𝘵𝘢𝘥𝘰.
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//𝘐𝘨𝘯𝘰𝘳𝘦𝘯 𝘦𝘴𝘵𝘦 𝘢𝘱𝘢𝘳𝘵𝘢𝘥𝘰.
global.mods = []
global.prems = []

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//redes
global.fb = 'no disponible aun'
global.md = 'https://github.com/MultiBot-OFC/ExoticoBot-MD'
global.md2 = 'https://github.com/MultiBot-OFC'
global.paypal = 'https://www.paypal.me/ColaboracionBotOFC'
global.ig = 'no disponible aun'
global.exoticomail = 'josueveniciovargas@gmail.com'
global.cuentaofc = 'https://wa.me/5491133980551'
global.asistencia = 'https://wa.me/5493873232221'
global.atomofc = 'https://atom.bio/exotico-ofc'

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//grupos
global.grupo1 = 'https://chat.whatsapp.com/JTj6OkGZ6exLnAIJkPqIgA'
global.grupo2 = 'https://chat.whatsapp.com/I9LGemZUOAK5bbiHfcdcRx'
global.grupo3 = 'https://chat.whatsapp.com/GHMU94F45nW1RyRcXifiQb'

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//ubicado
global.creador = 'https://wa.me/5493873232212'
global.mycanal = 'https://whatsapp.com/channel/0029Vaf8ZxlLdQelKKUUON22'

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//Cuentas get random
global.exoticoRedes = [md, paypal, paypal, md, paypal, atomofc, atomofc, mycanal, mycanal, md, asistencia, asistencia]
global.exoticCnts = [mycanal, grupo1, atomofc, atomofc, grupo2, grupo3, md, paypal, asistencia, creador, md]
global.exoticoAll = [asistencia, atomofc, mycanal, grupo1, grupo2, grupo3, md, paypal, atomofc, paypal, md, asistencia]

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
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

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//menus
global.menuImg1 = fs.readFileSync("./Multi_Imagen/Menu1.jpg")
global.menuImg2 = fs.readFileSync("./Multi_Imagen/Menu2.jpg")
global.menuImg3 = fs.readFileSync("./Multi_Imagen/Menu3.jpg")

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//paypal
global.imgpaypal = fs.readFileSync("./Multi_Imagen/paypal.jpg")

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//Imagenes de handler.js advs
global.imgAdv = fs.readFileSync("./Adv_Imagen/Adv.jpg")
global.imgAdv2 = fs.readFileSync("./Adv_Imagen/Adv2.jpg")
global.imgAdv3 = fs.readFileSync("./Adv_Imagen/Adv3.jpg")
global.imgAdv4 = fs.readFileSync("./Adv_Imagen/Adv4.jpg")
global.imgAdv5 = fs.readFileSync("./Adv_Imagen/Adv5.jpg")
global.imgAdv6 = fs.readFileSync("./Adv_Imagen/Adv6.jpg")
global.imgAdv7 = fs.readFileSync("./Adv_Imagen/Adv7.jpg")
global.imgAdv8 = fs.readFileSync("./Adv_Imagen/Adv8.jpg")

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//Stickers de Exotico Bot
global.exocafecito = fs.readFileSync("./STICKER/exotico.jpg")

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
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

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
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

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//fotos de bienvenida
global.imgwel1 = 'https://telegra.ph/file/0a50af66014eb25698588.jpg'
global.imgwel2 = 'https://telegra.ph/file/1bff4d35ea7578c8aebee.jpg'
global.imgwel3 = 'https://telegra.ph/file/7313d5093daff008970b3.jpg'
global.imgwel4 = 'https://telegra.ph/file/e4950b9621e4b0c64aa9a.jpg'
global.imgwel5 = 'https://telegra.ph/file/03422fdb16457b5310a52.jpg'

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
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

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//videos
global.videoRandom = ['https://qu.ax/uLtU.mp4', 'https://qu.ax/ukVe.mp4', 'https://qu.ax/lMxG.mp4', 'https://qu.ax/hAag.mp4', 'https://qu.ax/SNLc.mp4', 'https://qu.ax/ysCL.mp4']

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//fotos cuadradas
global.menusRB = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18]

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//fotos anchas
global.imgRB = [imag1, imag2, imag3, imag4, imag5, imag6, imag7, imag8, imag9, imag10, imag11, imag12]

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//bienvenida
global.imggRB = [imgwel1, imgwel2, imgwel3, imgwel4, imgwel5]

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//niveles
global.imgggRB = [fotonivel1, fotonivel2, fotonivel3, fotonivel4, fotonivel5, fotonivel6, fotonivel7, fotonivel8, fotonivel9, fotonivel10]

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//Imagenes
global.imagenRB = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13, imagen14, imagen15, imagen16, imagen17, imagen18, imagen19, imagen20, imagen21, imagen22, imagen23, imagen24, imagen25, imagen26, imagen27, imagen28, imagen29, imagen30]

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//menus 3
global.multiMenus = [menuImg1, menuImg2, menuImg3]

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//Imagenes advs
global.imgAdvs = [imgAdv, imgAdv2, imgAdv3, imgAdv4, imgAdv5, imgAdv6, imgAdv7, imgAdv8]

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//Videos
global.videoMenu1 = fs.readFileSync("./NODE_EXOTICO_JSON/Menu1.mp4")
global.videoMenu2 = fs.readFileSync("./NODE_EXOTICO_JSON/Menu2.mp4")

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//Estilos
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5493873232212-5493873232221@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Super Bot WhatsApp', orderTitle: 'Bang', thumbnail: menusRB, sellerJid: '0@s.whatsapp.net' }}}
global.estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5493873232212-5493873232221@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   
                                 
//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//𝘐𝘨𝘯𝘰𝘳𝘦𝘯 𝘦𝘴𝘵𝘦 𝘢𝘱𝘢𝘳𝘵𝘢𝘥𝘰.
//global.fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${user.split('@')[0]}:${user.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }      
global.fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//𝘗𝘪𝘤𝘬 𝘳𝘢𝘯𝘥𝘰𝘮.
global.wait = "❮🌌❯ •═────────────• *10%*"
global.waitt = "❮🌌❯ •═══──────────• *33%*"
global.waittt = "❮🌌❯ •═══════──────• *64%*"
global.waitttt = "❮🌌❯ •═══════════──• *87%*"
global.waittttt = "❮🌌❯ •═════════════• *100%*"

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//𝘐𝘨𝘯𝘰𝘳𝘦𝘯 𝘦𝘴𝘵𝘦 𝘢𝘱𝘢𝘳𝘵𝘢𝘥𝘰.
global.ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 99, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
global.fgif = {key: {participant : '0@s.whatsapp.net'}, message: {"videoMessage": { "title": wm, "h": `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Multi_Imagen/Menu3.jpg')}}}

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//𝘐𝘨𝘯𝘰𝘳𝘦𝘯 𝘦𝘴𝘵𝘦 𝘢𝘱𝘢𝘳𝘵𝘢𝘥𝘰.
global.enlace = { contextInfo: { externalAdReply: {title: wm, body: 'WhatsApp bot / MultiBot', sourceUrl: exoticoAll, thumbnail: await(await fetch(global.imgRB)).buffer() }}}
global.enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: paypal, mediaType: 'VIDEO', description: '', title: wm, body: ' • ExoticoBot-MD / Multi Bot • ', thumbnailUrl: menusRB, sourceUrl: exoticoAll }}}
global.dos = [enlace, enlace2]  

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//𝘋𝘦𝘴𝘵𝘳𝘢𝘣𝘢.
global.destraba = `𝘽𝘼𝙎𝙄𝘾 / 𝙏𝙀𝙓𝙏\n\n⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞\n\n> 𝙈𝙪𝙡𝙩𝙞𝘽𝙤𝙩-𝙊𝙁𝘾`

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//𝘐𝘨𝘯𝘰𝘳𝘦𝘯 𝘦𝘴𝘵𝘦 𝘢𝘱𝘢𝘳𝘵𝘢𝘥𝘰.
global.obtenerQrWeb = 0; 
global.keepAliveRender = 0; 
global.botNumberCode = ""
global.confirmCode = "" 

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//𝘈𝘱𝘪 𝘒𝘦𝘺𝘴
global.Key360 = ["Gata_Dios"] 
global.openai_key = 'sk-0' // Api New: https://platform.openai.com/account/api-keys 
global.openai_org_id = 'org-3' // Api New: https://platform.openai.com/account/org-settings */
global.keysZens = ["LuOlangNgentot", "c2459db922", "37CC845916", "6fb0eff124", "hdiiofficial", "fiktod", "BF39D349845E", "675e34de8a", "0b917b905e6f"]
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ["29d4b59a4aa687ca", "5LTV57azwaid7dXfz5fzJu", "cb15ed422c71a2fb", "5bd33b276d41d6b4", "HIRO", "kurrxd09", "ebb6251cc00f9c63"]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ["5VC9rvNx", "cfALv5"]
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = "Gata_Dios"
global.itsrose = ["4b146102c4d500809da9d1ff"]
global.baileys = "@whiskeysockets/baileys"

global.APIs = { 
xteam: 'https://api.xteam.xyz',
dzx: 'https://api.dhamzxploit.my.id',
lol: 'https://api.lolhuman.xyz',
violetics: 'https://violetics.pw',
neoxr: 'https://api.neoxr.my.id',
zenzapis: 'https://api.zahwazein.xyz',
akuari: 'https://api.akuari.my.id',
akuari2: 'https://apimu.my.id',	
fgmods: 'https://api.fgmods.xyz', 
botcahx: 'https://api.botcahx.biz.id',
ibeng: 'https://api.ibeng.tech/docs',	
rose: 'https://api.itsrose.site',
popcat : 'https://api.popcat.xyz',
xcoders : 'https://api-xcoders.site'
},
   
global.APIKeys = { 
'https://api.xteam.xyz': `${keysxteam}`,
'https://api.lolhuman.xyz': `${lolkeysapi}`,
'https://api.neoxr.my.id': `${keysneoxr}`,	
'https://violetics.pw': 'beta',
'https://api.zahwazein.xyz': `${keysxxx}`,
'https://api.fgmods.xyz': 'DRLg5kY7', 
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://api.botcahx.biz.id': 'Admin',
'https://api.ibeng.tech/docs': 'tamvan',
'https://api.itsrose.site': 'Rs-Zeltoria',
'https://api-xcoders.site': 'Frieren'
}

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//𝘕𝘰𝘮𝘣𝘳𝘦 𝘥𝘦𝘭 𝘣𝘰𝘵.
global.wm = "⬩ٜ࣭݊𑁍ٜ࣭݊⬩𝇏𝆺𝅥𝙀𝙭𝆭𝙤𝙩𝙞𝙘๋𝆭𝙤⬩𝘽𝆭𝙤𝙩ە𝙈𝘿𝆹𝅥𝇏⬩ٜ࣭݊𑁍ٜ࣭݊⬩"
global.igfg = "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵 / 𝘔𝘶𝘭𝘵𝘪𝘉𝘰𝘵"
global.nomorown = "5493873232221"
global.toexotic = "᥀·࣭࣪̇˖🌆◗ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿...✨"
global.packname = `𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿`
global.author = `𝙈𝙪𝙡𝙩𝙞𝘽𝙤𝙩-𝙊𝙁𝘾`

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//𝘖𝘸𝘯𝘦𝘳𝘴 𝘥𝘦𝘭 𝘣𝘰𝘵, 𝘢𝘨𝘳𝘦𝘨𝘢𝘵𝘦 𝘴𝘪 𝘲𝘶𝘪𝘦𝘳𝘦𝘴.
global.owner = [
["5493873232221", '𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝙊𝙁𝘾 ╱ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩', true],
 ["5493873232212", '𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝙊𝙁𝘾 ╱ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩 2', true],
  ["523142183828", '𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝙊𝙁𝘾 ╱ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩 3', true],
   ["51921207166", '𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝙊𝙁𝘾 ╱ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩 4', true],
    ["5491133980551", '𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝙊𝙁𝘾 ╱ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩 5', true],
     ["51929838430"],
      ["529982147937"],
       ["5491125730852"],
        ["573108625104"],
         ["527421168105"],
          ["5491133979238"]
]

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//𝘊𝘰𝘯𝘵𝘢𝘤𝘵𝘰𝘴 𝘰𝘧𝘪𝘤𝘪𝘢𝘭𝘦𝘴.
global.official = [
["5493873232221", 'ExoticoBot : Asistencia', 1],
["5493873232212", 'ExoticoBot : Creador', 1],
["523142183828", 'ExoticoBot : Colaborador', 1],
["51921207166", 'ExoticoBot : Colaborador', 1],
["5491133980551", 'ExoticoBot : Asistencia', 1]
]

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//Simple
global.esmsMT = es
global.mail = ''
global.desc = '' 
global.desc2 = '' 
global.country = ''

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//𝘝𝘦𝘳𝘴𝘪𝘰𝘯 𝘥𝘦𝘭 𝘣𝘰𝘵
global.vs = "2.0.0"
global.vs2 = "2.5"
global.vs3 = "3.5.0"

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//𝘐𝘨𝘯𝘰𝘳𝘦𝘯 𝘦𝘴𝘵𝘦 𝘢𝘱𝘢𝘳𝘵𝘢𝘥𝘰.
global.pdoc = ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel", "application/msword", "application/pdf", "text/rtf"]
global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='];

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//𝘋𝘪𝘴𝘦𝘯̃𝘰𝘴.
global.botDescrip = `• 𝘽𝙤𝙩 𝙙𝙚 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥 𝘼𝙫𝙖𝙣𝙯𝙖𝙙𝙤 💯`
global.botInfo = `⧏❪̣࣭̇࣪𝆭·ฺ۪۟𖡎𝆭｡𝆹𝅥𝘌ฺ𝙭𝆭𝙤𝘵ฺ𝘪𝘤𝆭𝙤𝘉𝆭𝙤ฺ𝙩-𝗠ฺ𝖣𝆹𝅥𖣠ᮬ𝆭·̣̇͜᭺⧐`
global.cmenut = "┏•──•═════•𑁍 "
global.cmenub = "┋〤 "
global.cmenuf = "┗•──•═════•𑁍 \n"
global.cmenua = "\n⊹ •──•━•『 𝙀𝙭𝙤𝙩𝙞𝙘𝙤_𝙫2 』•━•──• ⊹\n     "
global.dmenut = "*❖─┅──┅〈*"
global.dmenub = "*┊»*"
global.dmenub2 = "*┊*"
global.dmenuf = "*╰┅────────┅✦*"
global.htjava = "⫹⫺"
global.htki = "*⭑•̩̩͙⊱•••• ☪*"
global.htka = "*☪ ••••̩̩͙⊰•⭑*"
global.comienzo = "• • ◕◕════"
global.fin = " • •"
global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`; //Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;//America/Los_Angeles
global.fgif = {
key: {
participant : '0@s.whatsapp.net'},
message: { 
"videoMessage": { 
"title": wm,
"h": `Hmm`,
'seconds': '999999999', 
'gifPlayback': 'true', 
'caption': bottime,
'jpegThumbnail': fs.readFileSync('./Multi_Imagen/Menu3.jpg')
}}}

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//Mensajes
global.mensajesEditados = async function(conn, m) {
const mensajes = [waitt, waittt, waitttt, waittttt]
key = await conn.sendMessage(m.chat, { text: wait, quoted: m })
for (let i = 0; i < mensajes.length; i++) {
await new Promise(resolve => setTimeout(resolve, 1000))
await conn.sendMessage(m.chat, { text: mensajes[i], edit: key })
}}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]                                                                                                                                                          }
  
//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//𝘐𝘨𝘯𝘰𝘳𝘦𝘯 𝘦𝘴𝘵𝘦 𝘢𝘱𝘢𝘳𝘵𝘢𝘥𝘰
global.multiplier = 85
global.rpg = {
emoticon(string) {
string = string.toLowerCase();
let emot = {
level: '🧬 Nivel',
limit: '💎 Diamante',
exp: '⚡ Experiencia',
bank: '🏦 Banco',
diamond: '💎+ Diamante+',
health: '❤️ Salud',
kyubi: '🌀 Magia',
joincount: '🪙 Token',
emerald: '💚 Esmeralda',
stamina: '✨ Energía',
role: '💪 Rango',
premium: '🎟️ Premium',
pointxp: '📧 Puntos Exp',
gold: '👑 Oro',
trash: '🗑 Basura',
crystal: '🔮 Cristal',
intelligence: '🧠 Inteligencia',
string: '🕸️ Cuerda',
keygold: '🔑 Llave de Oro',
keyiron: '🗝️ Llave de Hierro',
emas: '🪅 Piñata',
fishingrod: '🎣 Caña de Pescar',
gems: '🍀 Gemas',
magicwand: '⚕️ Varita Mágica',
mana: '🪄 Hechizo',
agility: '🤸‍♂️ Agilidad',
darkcrystal: '♠️ Cristal Oscuro',
iron: '⛓️ Hierro',
rock: '🪨 Roca',
potion: '🥤 Poción',
superior: '💼 Superior',
robo: '🚔 Robo',
upgrader: '🧰 Aumentar Mejora',
wood: '🪵 Madera',
strength: '🦹‍ ♀️ Fuerza',
arc: '🏹 Arco',
armor: '🥼 Armadura',
bow: '🏹 Super Arco',
pickaxe: '⛏️ Pico',
sword: '⚔️ Espada',
common: '📦 Caja Común',
uncoommon: '🥡 Caja Poco Común',
mythic: '🗳️ Caja Mítica',
legendary: '🎁 Caja Legendaria',
petFood: '🍖 Alimento para Mascota', //?
pet: '📫 Caja de Mascotas',//?
bibitanggur: '🌾🍇 Semillas de uva',
bibitapel: '🌾🍎 Semillas de manzana',
bibitjeruk: '🌾🍊 Semillas de naranja',
bibitmangga: '🌾🥭 Semillas de Mango',
bibitpisang: '🌾🍌 Semillas de plátano',
ayam: '🐓 Pollo',
babi: '🐖 Puerco',
Jabali: '🐗 Jabalí',
bull: '🐃 Toro',    
buaya: '🐊 Cocodrilo',    
cat: '🐈 Gato',    
centaur: '🐐 Centauro',
chicken: '🐓 Pollo',
cow: '🐄 Vaca', 
dog: '🐶 Perro',
dragon: '🐉 Dragón',
elephant: '🐘 Elefante',
fox: '🦊 Zorro',
giraffe: '🦒 Jirafa',
griffin: '🦅 Ave', //Mascota : Griffin',
horse: '🐎 Caballo',
kambing: '🐐 Cabra',
kerbau: '🐃 Búfalo',
lion: '🦁 León',
money: '🪙 BotCoins',
monyet: '🐒 Mono',
panda: '🐼 Panda',
snake: '🐍 Serpiente',
phonix: '🕊️ Fénix',
rhinoceros: '🦏 Rinoceronte',
wolf: '🐺 Lobo',
tiger: '🐅 Tigre',
cumi: '🦑 Calamar',
udang: '🦐 Camarón',
ikan: '🐟 Pez',
fideos: '🍝 Fideos',
ramuan: '🧪 Ingrediente',
knife: '🔪 Cuchillo'
}
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]];
}}

global.rpgg = {
emoticon(string) {
string = string.toLowerCase();
let emott = {
level: '🧬',
limit: '💎',
exp: '⚡',
bank: '🏦',
diamond: '💎',
health: '❤️',
kyubi: '🌀',
joincount: '🧧',
emerald: '☘️',
stamina: '✨',
role: '💪',
premium: '🎟️',
pointxp: '📧',
gold: '👑',
trash: '🗑',
crystal: '🔮',
intelligence: '🧠',
string: '🕸️',
keygold: '🔑',
keyiron: '🗝️',
emas: '🪅',
fishingrod: '🎣',
gems: '🍀',
magicwand: '⚕️',
mana: '🪄',
agility: '🤸‍♂️',
darkcrystal: '♠️',
iron: '⛓️',
rock: '🪨',
potion: '🥤',
superior: '💼',
robo: '🚔',
upgrader: '🧰',
wood: '🪵',
strength: '🦹‍ ♀️',
arc: '🏹',
armor: '🥼',
bow: '🏹',
pickaxe: '⛏️',
sword: '⚔️',
common: '📦',
uncoommon: '🥡',
mythic: '🗳️',
legendary: '🎁',
petFood: '🍖',
pet: '🍱',
bibitanggur: '🍇',
bibitapel: '🍎',
bibitjeruk: '🍊',
bibitmangga: '🥭',
bibitpisang: '🍌',
ayam: '🐓',
babi: '🐖',
Jabali: '🐗',
bull: '🐃',
buaya: '🐊',
cat: '🐈',      
centaur: '🐐',
chicken: '🐓',
cow: '🐄',
dog: '🐕',
dragon: '🐉',
elephant: '🐘',
fox: '🦊',
giraffe: '🦒',
griffin: '🦅', //Mascota : Griffin',
horse: '🐎',
kambing: '🐐',
kerbau: '🐃',
lion: '🦁',
money: '🪙',
monyet: '🐒',
panda: '🐼',
snake: '🐍',
phonix: '🕊️',
rhinoceros: '🦏',
wolf: '🐺',
tiger: '🐅',
cumi: '🦑',
udang: '🦐',
ikan: '🐟',
fideos: '🍝',
ramuan: '🧪',
knife: '🔪'
}
let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
if (!results.length) return '';
else return emott[results[0][0]];
}}

global.rpgshop = { 
emoticon(string) {
string = string.toLowerCase();
let emottt = {
exp: '⚡ Experiencia',
limit: '💎 Diamante',
diamond: '💎+ Diamante+',
joincount: '🪙 Token',
emerald: '💚 Esmeralda',
berlian: '♦️ Joya',
kyubi: '🌀 Magia',
gold: '👑 Oro',
money: '🪙 BotCoins',
tiketcoin: '🎫 Bot Tickers',
stamina: '✨ Energía',
potion: '🥤 Poción',
aqua: '💧 Agua',
trash: '🗑 Basura',
wood: '🪵 Madera',
rock: '🪨 Roca',
batu: '🥌 Piedra',
string: '🕸️ Cuerda',
iron: '⛓️ Hierro',
coal: '⚱️ Carbón',
botol: '🍶 Botella',
kaleng: '🥫 Lata',
kardus: '🪧 Cartón',
eleksirb: '💡 Electricidad',
emasbatang: '〽️ Barra de Oro',
emasbiasa: '🧭 Oro Común',
rubah: '🦊🌫️ Zorro Grande',
sampah: '🗑🌫️ Super Basura',
serigala: '🐺🌫️ Super Lobo',
kayu: '🛷🌫️ Super Madera',
sword: '⚔️ Espada',
umpan: '🪱 Carnada',
healtmonster: '💵 Billetes',
emas: '🪅 Piñata',
pancingan: '🪝 Gancho',
pancing: '🎣 Caña de Pescar',      
common: '📦 Caja Común',
uncoommon: '🥡 Caja Poco Común',
mythic: '🗳️ Caja Mítica',
pet: '📫 Caja de Mascotas',
gardenboxs: '💐 Caja de Jardinería',
legendary: '🎁 Caja Legendaria',
anggur: '🍇 Uva',
apel: '🍎 Manzana',
jeruk: '🍊 Naranja',
mangga: '🥭 Mango',
pisang: '🍌 Platano',
bibitanggur: '🌾🍇 Semillas de uva',
bibitapel: '🌾🍎 Semillas de manzana',
bibitjeruk: '🌾🍊 Semillas de naranja',
bibitmangga: '🌾🥭 Semillas de Mango',
bibitpisang: '🌾🍌 Semillas de plátano',
centaur: '🐐 Centauro',
griffin: '🦅 Ave',
kucing: '🐈 Gato',
naga: '🐉 Dragón',
fox: '🦊 Zorro',
kuda: '🐎 Caballo',
phonix: '🕊️ Fénix',
wolf: '🐺 Lobo',
anjing: '🐶 Perro',
petFood: '🍖 Alimento para Mascota',
makanancentaur: '🐐🥩 Comida de Centauro',
makanangriffin: '🦅🥩 Comida de Ave',
makanankyubi: '🌀🥩 Comida Mágica',
makanannaga: '🐉🥩 Comida de Dragón',
makananpet: '🐎🥩 Alimentos Para Caballo',
makananphonix: '🕊️🥩 Comida de Fénix',
}
let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
if (!results.length) return '';
else return emottt[results[0][0]];
}}

global.rpgshopp = { 
emoticon(string) {
string = string.toLowerCase();
let emotttt = {
exp: '⚡',
limit: '💎',
diamond: '💎',
joincount: '🧧',
emerald: '☘️',
berlian: '♦️',
kyubi: '🌀',
gold: '👑',
money: '🪙',
tiketcoin: '🎫',
stamina: '✨',
potion: '🥤',
aqua: '💧',
trash: '🗑',
wood: '🪵',
rock: '🪨',
batu: '🥌',
string: '🕸️',
iron: '⛓️',
coal: '⚱️',
botol: '🍶',
kaleng: '🥫',
kardus: '🪧',
eleksirb: '💡',
emasbatang: '〽️',
emasbiasa: '🧭',
rubah: '🦊🌫️',
sampah: '🗑🌫️',
serigala: '🐺🌫️',
kayu: '🛷',
sword: '⚔️',
umpan: '🪱',
healtmonster: '💵',
emas: '🪅',
pancingan: '🪝',
pancing: '🎣',
common: '📦',
uncoommon: '🥡',
mythic: '🗳️',
pet: '📫',
gardenboxs: '💐',
legendary: '🎁',
anggur: '🍇',
apel: '🍎',
jeruk: '🍊',
mangga: '🥭',
pisang: '🍌',
bibitanggur: '🌾🍇',
bibitapel: '🌾🍎',
bibitjeruk: '🌾🍊',
bibitmangga: '🌾🥭',
bibitpisang: '🌾🍌',
centaur: '🐐',
griffin: '🦅',
kucing: '🐈',
naga: '🐉',
fox: '🦊',
kuda: '🐎',
phonix: '🕊️',
wolf: '🐺',
anjing: '🐶',
petFood: '🍖',
makanancentaur: '🐐🥩',
makanangriffin: '🦅🥩',
makanankyubi: '🌀🥩',
makanannaga: '🐉🥩',
makananpet: '🍱🥩',
makananphonix: '🕊️🥩'  
}
let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
if (!results.length) return '';
else return emotttt[results[0][0]];
}}

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
unwatchFile(file);
console.log(chalk.redBright("Update 'config.js'"));
import(`${file}?update=${Date.now()}`);
})
   
