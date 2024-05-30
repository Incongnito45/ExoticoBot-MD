import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix, command, text}) => {
if (!text) throw `${IDexotic.faltaTexto}\n\n${usedPrefix + command} WhatsApp`;
try {    
const searchA = await search(text);
const data5 = await download(searchA[0].id);
let response = `${IDexotic.rsExito}
${IDexotic.aBordeC}${IDexotic.Nombre}
${IDexotic.aBordeB}${data5.name}

${IDexotic.aBordeC}${IDexotic.Paquete}
${IDexotic.aBordeB}${data5.package}

${IDexotic.aBordeC}${IDexotic.Actualizacion}
${IDexotic.aBordeB}${data5.lastup}

${IDexotic.aBordeC}${IDexotic.Peso}
${IDexotic.aBordeB${data5.size}

${IDexotic.espereArchivo}`
await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
return await conn.sendMessage(m.chat, {text: 'El archivo pesa mucho, no sera enviado.'}, {quoted: m})}
await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m}); 
} catch (e) {
await conn.reply(m.chat, `${IDexotic.ErrorA}`, m)
console.log(`${IDexotic.ErrorB}`)
console.log(e)
handler.limit = false
}};
handler.command = /^(apkmod|apk|modapk|dapk2|aptoide|aptoidedl)$/i;
handler.register = true
handler.limit = 2
export default handler;
