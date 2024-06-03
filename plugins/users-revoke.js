let handler = async (m, { conn }) => {
  try{
    let res = await this.groupRevokeInvite(m.chat);
  }catch{
  }
conn.sendMessage(m.chat, {text: '᥀·࣭࣪̇˖🪐◗ 𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙚𝙡 𝙣𝙪𝙚𝙫𝙤 𝙚𝙣𝙡𝙖𝙘𝙚 𝙧𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙤!!!', + '\n\n*https://chat.whatsapp.com/' + res + '*'}, {quoted: fkontak)};
handler.command = ['nuevolink', 'nuevoenlace', 'revoke', 'resetlink'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
