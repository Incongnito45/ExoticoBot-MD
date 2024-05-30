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
resultado += días + ` ${IDexotic.dTd}, `;
}
if (horas !== 0) {
resultado += horas + ` ${IDexotic.dTc}, `;
}
if (minutos !== 0) {
resultado += minutos + ` ${IDexotic.dTb}, `;
}
if (segundos !== 0) {
resultado += segundos + ` ${IDexotic.dTa}`;
}
return resultado;
}
const message = users.map((v, index) => `${IDexotic.Numero} *${index + 1}*\n${IDexotic.aBordeB}wa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}menu\n${IDexotic.aBordeB}*${IDexotic.Nombre} ${v.user.name || '-'}*\n${IDexotic.aBordeB}*${IDexotic.Tiempo} ${ v.uptime ? convertirMsADiasHorasMinutosSegundos(Date.now() - v.uptime) : "Desconocido"}`).join('\n\n◈•────────────────•◈\n\n');
  const replyMessage = message.length === 0 ? IDexotic.noBots : message;
const totalUsers = users.length;
const responseMessage = `${IDexotic.BotsList(usedPrefix)}\n\n${IDexotic.difUsers}: ${totalUsers || '0'}\n\n${replyMessage.trim()}`.trim();
await _envio.sendMessage(m.chat, {text: responseMessage, mentions: _envio.parseMention(responseMessage)}, {quoted: m})}
handler.command = handler.help = ['exoticobots', 'bots', 'subsbots'];
handler.tags = ['exoticobots'];
export default handler;
