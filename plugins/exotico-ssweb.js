import fetch from 'node-fetch' 
import axios from "axios"
const handler = async (m, {conn, text, args, usedPrefix, isPrems}) => {   
if (!args[0]) return conn.reply(m.chat, '᥀·࣭࣪̇˖⚙️◗ *Por favor ingresa una url de la página a la que se le tomará captura*', m)  
let user = global.db.data.users[m.sender]
try {
let krt = await ssweb(args[0])

await conn.sendMessage(m.chat, { image: { url: krt.result }, caption: `᥀·࣭࣪̇˖✅◗ 𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚 𝙨𝙪 𝙞𝙢𝙖𝙜𝙚𝙣!!!` }, { quoted: m }) 
//}
} catch { 
m.reply('᥀·࣭࣪̇˖⛔◗ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙚𝙣 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.')
}} 
handler.command = /^ss(web)?f?$/i  
export default handler

async function ssweb(url, device = 'desktop') {
     return new Promise((resolve, reject) => {
          const base = 'https://www.screenshotmachine.com'
          const param = {
            url: url,
            device: device,
            cacheLimit: 0
          }
          axios({url: base + '/capture.php',
               method: 'POST',
               data: new URLSearchParams(Object.entries(param)),
               headers: {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
               }
          }).then((data) => {
               const cookies = data.headers['set-cookie']
               if (data.data.status == 'success') {
                    axios.get(base + '/' + data.data.link, {
                         headers: {
                              'cookie': cookies.join('')
                         },
                         responseType: 'arraybuffer'
                    }).then(({ data }) => {
                        result = {
                            status: 200,
                            result: data
                        }
                         resolve(result)
                    })
               } else {
                    reject({ status: 404, statuses: `Link Error`, message: data.data })
               }
          }).catch(reject)
     })
}