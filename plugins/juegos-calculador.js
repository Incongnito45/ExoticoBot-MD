const handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `᥀·࣭࣪̇˖🎰◗ 𝙈𝙚𝙣𝙨𝙞𝙤𝙣𝙖 𝙤 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.`;
  const percentages = (500).getRandom();
  let emoji = '';
  let description = '';
  switch (command) {
    case 'gay2':
      emoji = '🏳️‍🌈';
      if (percentages < 50) {
        description = `*᥀·࣭࣪̇˖🎰◗ Los calculos han arrojado que ${text.toUpperCase()} es ${percentages}% Gay. ${emoji}*\n*-• Eso es bajo... ¡Tu eres Joto, no Gay! 😏*`;
      } else if (percentages > 100) {
        description = `*᥀·࣭࣪̇˖🎰◗ Los calculos han arrojado que ${text.toUpperCase()} es ${percentages}% Gay. ${emoji}*\n*-• ¡Incluso más gay de lo que pensábamos! 💀*`;
      } else {
        description = `*᥀·࣭࣪̇˖🎰◗ Los calculos han arrojado que ${text.toUpperCase()} es ${percentages}% Gay. ${emoji}*\n*-• Lo tuyo, lo tuyo es que eres Gay. 👺*`;
      }
      break;
    case 'lesbiana':
      emoji = '🏳️‍🌈';
      if (percentages < 50) {
        description = `*᥀·࣭࣪̇˖🎰◗ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-• Quizás necesites más películas románticas en tu vida. 🎒*`;
      } else if (percentages > 100) {
        description = `*᥀·࣭࣪̇˖🎰◗ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-• ¡Eso es un amor extremo por las chicas! 👩‍❤️‍👩*`;
      } else {
        description = `*᥀·࣭࣪̇˖🎰◗ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-• Mantén el amor floreciendo! 😏*`;
      }
      break;
    case 'pajero':
    case 'pajera':
      emoji = '😏💦';
      if (percentages < 50) {
        description = `*᥀·࣭࣪̇˖🎰◗ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-• Tal vez necesites más hobbies! 🎨*`;
      } else if (percentages > 100) {
        description = `*᥀·࣭࣪̇˖🎰◗ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-• Eso es una resistencia admirable! 💪*`;
      } else {
        description = `*᥀·࣭࣪̇˖🎰◗ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-• Mantén el buen trabajo (en solitario). 🙌*`;
      }
      break;
    case 'puto':
    case 'puta':
      emoji = '🔥🥵';
      if (percentages < 50) {
        description = `*᥀·࣭࣪̇˖🎰◗ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-• ¡Más suerte en tu próxima conquista! 💔*`;
      } else if (percentages > 100) {
        description = `*᥀·࣭࣪̇˖🎰◗ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-• ¡Estás en llamas! 🚒*`;
      } else {
        description = `*᥀·࣭࣪̇˖🎰◗ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-• Mantén ese encanto ardiente! 🔥*`;
      }
      break;
    case 'manco':
    case 'manca':
      emoji = '💩';
      if (percentages < 50) {
        description = `*᥀·࣭࣪̇˖🎰◗ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-• ¡No eres el único en ese club! 😅*`;
      } else if (percentages > 100) {
        description = `*᥀·࣭࣪̇˖🎰◗ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-• ¡Tienes un talento muy especial! 🙈*`;
      } else {
        description = `*᥀·࣭࣪̇˖🎰◗ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-• Mantén esa actitud valiente! 🤙*`;
      }
      break;
    case 'rata':
      emoji = '🐁';
      if (percentages < 50) {
        description = `*᥀·࣭࣪̇˖🎰◗ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-• Nada de malo en disfrutar del queso! 🧀*`;
      } else if (percentages > 100) {
        description = `*᥀·࣭࣪̇˖🎰◗ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-• Un auténtico ratón de lujo! 🏰*`;
      } else {
        description = `*᥀·࣭࣪̇˖🎰◗ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-• Come queso con responsabilidad! 🧀*`;
      }
      break;
    case 'prostituto':
    case 'prostituta':
      emoji = '🫦👅';
      if (percentages < 50) {
        description = `*᥀·࣭࣪̇˖🎰◗ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-• El mercado está en auge! 💼*`;
      } else if (percentages > 100) {
        description = `*᥀·࣭࣪̇˖🎰◗ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-• Un/a verdadero/a profesional! 💰*`;
      } else {
        description = `*᥀·࣭࣪̇˖🎰◗ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-• Siempre es hora de negocios! 💼*`;
      }
      break;
      default:
      throw `᥀·࣭࣪̇˖👺◗ 𝙀𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙦𝙪𝙚 𝙞𝙣𝙜𝙧𝙚𝙨𝙖𝙨𝙩𝙚 𝙣𝙤 𝙚𝙨 𝙫𝙖𝙡𝙞𝙙𝙤.`;
  }
  const responses = [
    "El universo ha hablado. 💀",
    "Los científicos lo confirman. 👺",
    "💀 bro?"
  ];
  const response = responses[Math.floor(Math.random() * responses.length)];
  const cal = `
• 𝘾𝘼𝙇𝘾𝙐𝙇𝘼𝘿𝙊𝙍:
• ${description}

*"${response}"*`.trim()  
  async function loading() {
var hawemod = [
"「🕛」▰▱▱▱▱▱▱▱▱",
"「🕜」▰▰▱▱▱▱▱▱▱",
"「🕟」▰▰▰▱▱▱▱▱▱",
"「🕙」▰▰▰▰▰▰▱▱▱",
"「🕛」▰▰▰▰▰▰▰▰▰"
]
   let { key } = await conn.sendMessage(m.chat, {text: `• 𝘾𝘼𝙇𝘾𝙐𝙇𝘼𝙉𝘿𝙊....`, mentions: conn.parseMention(cal)}, {quoted: m})
 for (let i = 0; i < hawemod.length; i++) {
   await new Promise(resolve => setTimeout(resolve, 1000)); 
   await conn.sendMessage(m.chat, {text: hawemod[i], edit: key, mentions: conn.parseMention(cal)}, {quoted: m}); 
  }
  await conn.sendMessage(m.chat, {text: cal, edit: key, mentions: conn.parseMention(cal)}, {quoted: m});         
 }
loading()    
};
handler.help = ['gay2', 'lesbiana', 'pajero', 'pajera', 'puto', 'puta', 'manco', 'manca', 'rata', 'prostituta', 'prostituto'].map((v) => v + ' @tag | nombre');
handler.tags = ['calculator'];
handler.command = /^(gay2|lesbiana|pajero|pajera|puto|puta|manco|manca|rata|prostituta|prostituto)$/i;
export default handler;
