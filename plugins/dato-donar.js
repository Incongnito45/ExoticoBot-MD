let media = './Multi_Imagen/paypal.jpg'
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let donar = `Gracias por donar en este bot
puedes comprar servidores o tambien
coins para servidores facil y seguro!!!`
await conn.sendButton(m.chat, donar, IDexotic.botInfo, media, [
['Grupos', '.grupos'],
['Menu ', '#menu']], null, [
['PayPal', `https://www.paypal.me/ColaboracionBotOFC`]], fkontak)}
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
handler.exp = 80
export default handler
