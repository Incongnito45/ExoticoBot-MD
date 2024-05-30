let handler = async (m, { conn, usedPrefix, text }) => {
    if (conn.user.jid !== global.conn.user.jid) throw false
    let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user.jid)])]
    let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
    let teks = text ? text : cc.text
    let content = conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : `${IDexotic.catalogDif}\n\n• ${IDexotic.afkE} ` + teks)
    for (let id of users) {
      await delay(1500)
      await conn.copyNForward(id, content, true)
    }
    conn.reply(m.chat, `${IDexotic.finalizarBots} ${users.length}
    
  ${users.map(v => 'wa.me/' + v.replace(/[^0-9]/g, '') + `?text=${encodeURIComponent(usedPrefix)}level`).join('\n')}
  \n`.trim(), m)
  }
  handler.command = /^bcbot$/i
  handler.owner = true
  
  export default handler
  
  const more = String.fromCharCode(8206)
  const readMore = more.repeat(4001)
  
  const delay = time => new Promise(res => setTimeout(res, time))
