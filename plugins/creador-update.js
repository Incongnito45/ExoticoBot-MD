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
    conn.sendMessage(m.chat, { text: `${IDexotic.UpdateD} ${message}` }, { quoted: m })
   } 
  } catch (error) {
    await m.reply(`${IDexotic.UpdateB}'`, error.message)
   }
  }
 setInterval(checkRepoUpdates, 60000)
}
handler.command = /^(actualizar|update|actualizacion)/i
handler.rowner = true
export default handler
