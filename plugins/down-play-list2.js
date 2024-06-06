import yts from 'yt-search';
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    if (!text) throw `᥀·࣭࣪̇˖☁️◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙩𝙞𝙩𝙪𝙡𝙤 𝙙𝙚 𝙡𝙖 𝙘𝙖𝙣𝙘𝙞𝙤𝙣 𝙥𝙖𝙧𝙖 𝙗𝙪𝙨𝙘𝙖𝙧 𝙨𝙪𝙨 𝙗𝙖𝙧𝙞𝙖𝙣𝙩𝙚𝙨.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command} Erika lundmoen - yad*`;
    m.react('✅');
    
    let result = await yts(text);
    let ytres = result.videos;
    

    let listSections = [];
    for (let index in ytres) {
        let v = ytres[index];
        listSections.push({
            title: `${index} • ${v.title}`,
            rows: [
                {
                    header: '𝙑𝙄𝘿𝙀𝙊 🎬',
                    title: "",
                    description: `• *${mssg.duration}:* ${v.timestamp}\n`, 
                    id: `${usedPrefix}video ${v.url}`
                },
                {
                    header: "𝘼𝙐𝘿𝙄𝙊 🎧",
                    title: "" ,
                    description: `• *${mssg.duration}:* ${v.timestamp}\n`, 
                    id: `${usedPrefix}audio ${v.url}`
                }
            ]
        });
    }

    await conn.sendList(m.chat, '  𝗘𝘅𝗼𝘁𝗶𝗰𝗼𝗕𝗼𝘁-𝗠𝗗', `\n 𝘛𝘪𝘵𝘶𝘭𝘰:\n *${text}*`, `Ver Lista`, ytres[0].image, listSections, m);
};

handler.help = ['playlist2']
handler.tags = ['down']
handler.command = ['playsearh2', 'playlist2', 'searchplay2', 'playlista2'] 
handler.disabled = false

export default handler
          
