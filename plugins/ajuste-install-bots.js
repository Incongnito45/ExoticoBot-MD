let handler = async (m, { conn, usedPrefix, command, text }) => {
const messages = [[ 
'🔮 𝙏𝙝𝙚𝙈𝙮𝙨𝙩𝙞𝙘-𝘽𝙤𝙩-𝙈𝘿 🔮', 
'𝗚𝗶𝘁𝗛𝘂𝗯: 𝘉𝘳𝘶𝘯𝘰𝘚𝘰𝘣𝘳𝘪𝘯𝘰',
'https://telegra.ph/file/ec18948a55ac7c0b8c52c.jpg',
[['𝙎𝙚𝙡𝙚𝙘𝙘𝙞𝙤𝙣𝙖𝙧 ✨', usedPrefix + 'stallmysticbot']],
[['𝙍𝙚𝙥𝙤𝙨𝙞𝙩𝙤𝙧𝙞𝙤', 'https://github.com/BrunoSobrino/TheMystic-Bot-MD']]
], [ 
'♟️ 𝙎𝙝𝙖𝙙𝙤𝙬𝘽𝙤𝙩-𝙈𝘿 ♟️', 
'𝗚𝗶𝘁𝗛𝘂𝗯: 𝘋𝘐𝘌𝘎𝘖-𝘖𝘍𝘊',
'https://telegra.ph/file/d4d1e3c148677d1950d04.jpg',
[['𝙎𝙚𝙡𝙚𝙘𝙘𝙞𝙤𝙣𝙖𝙧 ✨', usedPrefix + 'stallshadowbot']],
[['𝙍𝙚𝙥𝙤𝙨𝙞𝙩𝙤𝙧𝙞𝙤', 'https://github.com/DIEGO-OFC/ShadowBot-MD']]
], [ 
'🐱 𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿 🐱', 
'𝗚𝗶𝘁𝗛𝘂𝗯: 𝘎𝘢𝘵𝘢𝘕𝘪𝘯𝘢-𝘓𝘪',
'https://telegra.ph/file/36ecc1fe421e2f6e59987.jpg',
[['𝙎𝙚𝙡𝙚𝙘𝙘𝙞𝙤𝙣𝙖𝙧 ✨', usedPrefix + 'stallgatabot']],
[['𝙍𝙚𝙥𝙤𝙨𝙞𝙩𝙤𝙧𝙞𝙤', 'https://github.com/GataNina-Li/GataBot-MD']]
], [ 
'🐱 𝙂𝙖𝙩𝙖𝘽𝙤𝙩𝙇𝙞𝙩𝙚-𝙈𝘿 🐱', 
'𝗚𝗶𝘁𝗛𝘂𝗯: 𝘎𝘢𝘵𝘢𝘕𝘪𝘯𝘢-𝘓𝘪',
'https://telegra.ph/file/0d72104de407765d25117.jpg',
[['𝙎𝙚𝙡𝙚𝙘𝙘𝙞𝙤𝙣𝙖𝙧 ✨', usedPrefix + 'stallgatabotlite']],
[['𝙍𝙚𝙥𝙤𝙨𝙞𝙩𝙤𝙧𝙞𝙤', 'https://github.com/GataNina-Li/GataBotLite-MD']]
], [ 
'⛩️ 𝙇𝙤𝙡𝙞𝘽𝙤𝙩-𝙈𝘿 ⛩️', 
'𝗚𝗶𝘁𝗛𝘂𝗯: 𝘦𝘭𝘳𝘦𝘣𝘦𝘭𝘥𝘦21',
'https://telegra.ph/file/5f6becb0fc4001d0c7ee8.jpg',
[['𝙎𝙚𝙡𝙚𝙘𝙘𝙞𝙤𝙣𝙖𝙧 ✨', usedPrefix + 'stallolibot']],
[['𝙍𝙚𝙥𝙤𝙨𝙞𝙩𝙤𝙧𝙞𝙤', 'https://github.com/elrebelde21/LoliBot-MD']]
], [ 
'✨ 𝙉𝙤𝙫𝙖𝘽𝙤𝙩-𝙈𝘿 ✨', 
'𝗚𝗶𝘁𝗛𝘂𝗯: 𝘦𝘭𝘳𝘦𝘣𝘦𝘭𝘥𝘦21',
'https://telegra.ph/file/e177b785755eedb9c9b1a.jpg',
[['𝙎𝙚𝙡𝙚𝙘𝙘𝙞𝙤𝙣𝙖𝙧 ✨', usedPrefix + 'stallnovabot']],
[['𝙍𝙚𝙥𝙤𝙨𝙞𝙩𝙤𝙧𝙞𝙤', 'https://github.com/elrebelde21/NovaBot-MD']]
], [ 
'🍷 𝙎𝙚𝙣𝙣𝙖-𝘽𝙤𝙩 🍷',
'𝗚𝗶𝘁𝗛𝘂𝗯: FG98F',
'https://telegra.ph/file/41c277f835b7b33b9fc08.jpg',
[['𝙎𝙚𝙡𝙚𝙘𝙘𝙞𝙤𝙣𝙖𝙧 ✨', usedPrefix + 'stallsennabot']],
[['𝙍𝙚𝙥𝙤𝙨𝙞𝙩𝙤𝙧𝙞𝙤', 'https://github.com/FG98F/senna-bot']]
]] 
await conn.sendCarousel(m.chat, '᥀·࣭࣪̇˖🗿◗ 𝙎𝙚𝙡𝙚𝙘𝙘𝙞𝙤𝙣𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙦𝙪𝙚 𝙙𝙚𝙨𝙚𝙖 𝙄𝙣𝙨𝙩𝙖𝙡𝙖𝙧.', '• 𝙎𝙚 𝙖𝙜𝙧𝙚𝙜𝙖𝙧𝙖𝙣 𝙤𝙩𝙧𝙤𝙨 𝙗𝙤𝙩𝙨 𝙚𝙣 𝙥𝙧𝙤𝙭𝙞𝙢𝙖𝙨 𝙖𝙘𝙩𝙪𝙖𝙡𝙞𝙯𝙖𝙘𝙞𝙤𝙣𝙚𝙨.', '𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋', messages, m)            
}
handler.command = /^(menuinstall|instalarrobots|botsinstall|instalarbots)$/i
export default handler
