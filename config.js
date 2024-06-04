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
global.gt = "🌌 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 🌌"
global.packname = `𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿`
global.author = `𝙈𝙪𝙡𝙩𝙞𝘽𝙤𝙩-𝙊𝙁𝘾`

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//𝘖𝘸𝘯𝘦𝘳𝘴 𝘥𝘦𝘭 𝘣𝘰𝘵, 𝘢𝘨𝘳𝘦𝘨𝘢𝘵𝘦 𝘴𝘪 𝘲𝘶𝘪𝘦𝘳𝘦𝘴.
global.owner = [
["5493873232221", '𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝙊𝙁𝘾 ╱ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩', true],
["5493873232212", '𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝙊𝙁𝘾 ╱ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩 2', true],
["523142183828", '𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝙊𝙁𝘾 ╱ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩 3', true],
["15108672308", '𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝙊𝙁𝘾 ╱ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩 4', true],
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
["5493873232221", 'ExoticoBot : 𝘊𝘳𝘦𝘢𝘥𝘰𝘳', 1],
["5493873232212", 'ExoticoBot : 𝘊𝘳𝘦𝘢𝘥𝘰𝘳 2', 1]
["523142183828", 'ExoticoBot : 𝘊𝘳𝘦𝘢𝘥𝘰𝘳 3', 1]
["15108672308", 'ExoticoBot : 𝘊𝘳𝘦𝘢𝘥𝘰𝘳 4', 1]
]

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//𝘓𝘦𝘯𝘨𝘶𝘢𝘫𝘦 𝘣𝘦𝘵𝘢, 𝘤𝘰𝘥𝘪𝘨𝘰 𝘥𝘦 𝘎𝘢𝘵𝘢𝘕𝘪𝘯𝘢-𝘓𝘪
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
   
