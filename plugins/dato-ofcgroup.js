let handler = async (m, { conn, command }) => {
let media = menusRB
let str = `GRUPOS OFICIALES

${IDexotic.Grupo}
1 *${grupo1}*

${IDexotic.Grupo}
2 *${grupo2}*

${IDexotic.Grupo}
3 *${grupo3}*`
await conn.sendButton(m.chat, str, `${IDexotic.botNombre}, media, [
[IDexotic.botonCuentas, '.exaccounts'],
[IDexotic.botonMasB, '.comandofc'],
[IDexotic.botonMenuA, '/menu']], null, [
[IDexotic.fBotonCanal, `${mycanal}`]], fkontak)}

handler.command = /^grupoex|exogroup|exoticgroup|grupoexotico|grupoexotic|exoticogrupo|gruposofc$/i
handler.exp = 33

export default handler
