const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) throw `᥀·࣭࣪̇˖💎◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙥𝙧𝙚𝙛𝙞𝙟𝙤 𝙚𝙣 𝙚𝙨𝙥𝙚𝙘𝙞𝙛𝙞𝙘𝙤 𝙥𝙖𝙧𝙖 𝙘𝙖𝙢𝙗𝙞𝙖𝙧𝙡𝙤.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤: #`;
global.prefix = new RegExp('^[' + (text || global.opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');
await m.reply(`᥀·࣭࣪̇˖✅◗ 𝙀𝙡 𝙥𝙧𝙚𝙛𝙞𝙟𝙤 𝙛𝙪𝙚 𝙘𝙖𝙢𝙗𝙞𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤 𝙖: ${text}`);
};
handler.help = ['setprefix'].map((v) => v + ' [prefix]');
handler.tags = ['owner'];
handler.command = /^(setprefix)$/i;
handler.rowner = true;
export default handler;
