let handler  = async (m, { conn, usedPrefix, command }) => {
let picture = './Multi_Imagen/Menu1.jpg'
let exotico = `${IDexotic.rsInfo}INSTALACION POR TERMUX:\ntermux-setup-storage && apt update && apt upgrade && pkg install -y git nodejs ffmpeg imagemagick yarn && git clone https://github.com/MultiBot-OFC/ExoticoBot-MD && cd ExoticoBot-MD && yarn install && npm install && npm start\n\nCopialo en el boton de Copy y pegalo en termux.`
await 
conn.sendButton(m.chat, exotico, `${IDexotic.botInfo}`, picture, [
[IDexotic.botonMasB, '.instalaciones'],
[IDexotic.botonDonar, '.donar']], 'termux-setup-storage && apt update && apt upgrade && pkg install -y git nodejs ffmpeg imagemagick yarn && git clone https://github.com/MultiBot-OFC/ExoticoBot-MD && cd ExoticoBot-MD && yarn install && npm install && npm start', fkontak)}
handler.command = /^(installtermux|instalarentermux|termuxbot)/i
export default handler


