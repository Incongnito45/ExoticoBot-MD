let handler = async(m, { conn, command }) => {

let text = `
𝗢𝗪𝗡𝗘𝗥:
*@${m.sender.split`@`[0]}*

𝗧𝗘𝗫𝗧𝗢:
𝘚𝘰𝘭𝘪𝘤𝘶𝘵𝘶𝘥 𝘱𝘢𝘳𝘢 𝘳𝘦𝘶𝘯𝘪𝘳𝘴𝘦 𝘱𝘢𝘳𝘢 𝘶𝘯 𝘱𝘳𝘰𝘣𝘭𝘦𝘮𝘢 𝘤𝘰𝘮𝘶𝘯 𝘰 𝘤𝘰𝘮𝘶𝘯𝘪𝘤𝘢𝘥𝘰 𝘨𝘳𝘶𝘱𝘢𝘭.`
m.reply('᥀·࣭࣪̇˖✅◗ 𝙎𝙤𝙡𝙞𝙘𝙞𝙩𝙪𝙙 𝙙𝙚 𝙧𝙚𝙪𝙣𝙞𝙤𝙣 𝙚𝙣𝙫𝙞𝙖𝙙𝙖 𝙖 𝙩𝙤𝙙𝙤𝙨 𝙡𝙤𝙨 𝙙𝙚𝙨𝙖𝙧𝙧𝙤𝙡𝙡𝙖𝙙𝙤𝙧𝙚𝙨.')
for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                        conn.sendPayment(data.jid, '999999999', text, m)
                        
                           // conn.reply(data.jid, text, m, { mentions: [m.sender] })
                    }

}
handler.tags = ['owner']
handler.command = handler.help =['exoren']
handler.rowner = true

export default handler
ndler
