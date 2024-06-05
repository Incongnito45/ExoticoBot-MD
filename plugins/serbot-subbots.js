import ws from 'ws';
async function handler(m, { conn: _envio, usedPrefix }) {
const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
function convertirMsADiasHorasMinutosSegundos(ms) {
var segundos = Math.floor(ms / 1000);
var minutos = Math.floor(segundos / 60);
var horas = Math.floor(minutos / 60);
var días = Math.floor(horas / 24);
segundos %= 60;
minutos %= 60;
horas %= 24;
var resultado = "";
if (días !== 0) {
resultado += días + ` dias, `;
}
if (horas !== 0) {
resultado += horas + ` horas, `;
}
if (minutos !== 0) {
resultado += minutos + ` minutos, `;
}
if (segundos !== 0) {
resultado += segundos + ` segundos`;
}
return resultado;
}
const message = users.map((v, index) => `Numero: *${index + 1}*\n• wa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}menu\nNombre: ${v.user.name || '-'}*\nTiempo Activo: ${ v.uptime ? convertirMsADiasHorasMinutosSegundos(Date.now() - v.uptime) : "Desconocido"}`).join('\n\n◈•────────────────•◈\n\n');
  const replyMessage = message.length === 0 ? '᥀·࣭࣪̇˖👺◗ 𝙉𝙤 𝙝𝙖𝙮 𝙎𝙪𝙗 𝘽𝙤𝙩𝙨 𝙖𝙘𝙩𝙞𝙫𝙤𝙨, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.' : message;
const totalUsers = users.length;
const responseMessage = `𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙎𝙐𝘽𝘽𝙊𝙏𝙎 𝙀𝙓𝙊𝙏𝙄𝘾𝙊𝘽𝙊𝙏\n\n${totalUsers || '0'}\n\n${replyMessage.trim()}`.trim();
await _envio.sendMessage(m.chat, {text: responseMessage, mentions: _envio.parseMention(responseMessage)}, {quoted: m})}
handler.command = handler.help = ['exoticobots', 'bots', 'subsbots'];
handler.tags = ['exoticobots'];
export default handler;
