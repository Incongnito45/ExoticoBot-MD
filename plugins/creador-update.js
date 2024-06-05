import axios from 'axios';
let previousCommitSHA = '';
let previousUpdatedAt = '';
const owner = 'MultiBot-OFC';
const repo = 'ExoticoBot-MD';
let handler = async (m, { conn, text, usedPrefix, command }) => {
  async function checkRepoUpdates() {
    try {
      const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`)
      const { sha, commit: { message }, html_url } = response.data[0]

      if (sha !== previousCommitSHA || message !== previousUpdatedAt) {
        previousCommitSHA = sha
        previousUpdatedAt = message
    conn.sendMessage(m.chat, { text: `᥀·࣭࣪̇˖✅◗ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 𝘼𝘾𝙏𝙐𝘼𝙇𝙄𝙕𝘼𝘿𝙊:\n\n${message}` }, { quoted: m })
   } 
  } catch (error) {
    await m.reply(`᥀·࣭࣪̇˖❌◗ 𝙀𝙧𝙧𝙤𝙧 𝙖𝙡 𝙖𝙘𝙩𝙪𝙖𝙡𝙞𝙯𝙖𝙧 𝙚𝙡 𝙗𝙤𝙩, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`, error.message)
   }
  }
 setInterval(checkRepoUpdates, 60000)
}
handler.command = /^(actualizar|update|actualizacion)/i
handler.rowner = true
export default handler
