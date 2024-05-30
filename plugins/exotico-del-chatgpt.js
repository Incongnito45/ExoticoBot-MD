let handler = async (m, { usedPrefix }) => {
try {
delete global.chatgpt.data.users[m.sender]  
m.reply(`${IDexotic.ChatGptC}`)    
} catch (error1) {   
console.log(error1)
throw `${IDexotic.ChatGptD}`   
}} 
handler.command = ['delchatgpt']
export default handler
