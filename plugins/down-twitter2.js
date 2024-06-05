import fetch from "node-fetch";
let handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text)
    throw `᥀·࣭࣪̇˖☁️◗ 𝘿𝙚𝙗𝙚 𝙙𝙚 𝙞𝙣𝙜𝙧𝙚𝙨𝙖𝙧 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙫𝙖𝙡𝙞𝙙𝙤 𝙙𝙚 𝙏𝙬𝙞𝙩𝙩𝙚𝙧.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command}* https://twitter.com/auronplay/status/1586487664274206720?s=20&t=3snvkvwGUIez5iWYQAehpw`;
  let res = await twitterDl(text);
  await m.reply(global.wait);
  for (let x = 0; x < res.media.length; x++) {
    let caption = x === 0 ? res.caption.replace(/https:\/\/t.co\/[a-zA-Z0-9]+/gi, "").trim() : "᥀·࣭࣪̇˖🍷◗ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿... ✨";
    await conn.sendFile(m.chat, res.media[x].url, "error.mp4", caption, m);
  }
};
handler.command = /^((twdl2|tw2|twt2|twitter2)(dl)?)$/i;
export default handler;
async function twitterDl(url) {
  let id = /twitter\.com\/[^/]+\/status\/(\d+)/.exec(url)?.[1];
  if (!id)
    throw "᥀·࣭࣪̇˖🚫◗ 𝙀𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙞𝙣𝙜𝙧𝙚𝙨𝙖𝙙𝙤 𝙣𝙤 𝙚𝙨 𝙫𝙖𝙡𝙞𝙙𝙤, 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙞𝙣𝙜𝙧𝙚𝙨𝙖𝙧 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙫𝙖𝙡𝙞𝙙𝙤.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*#twitter2* https://twitter.com/auronplay/status/1586487664274206720?s=20&t=3snvkvwGUIez5iWYQAehpw";
  let res = await fetch(`https://tweetpik.com/api/tweets/${id}`);
  if (res.status !== 200) throw res.statusText;
  let json = await res.json();
  if (json.media) {
    let media = [];
    for (let i of json.media) {
      if (/video|animated_gif/.test(i.type)) {
        let vid = await (await fetch(`https://tweetpik.com/api/tweets/${id}/video`)).json();
        vid = vid.variants.pop();
        media.push({url: vid.url, type: i.type});
      } else {
        media.push({url: i.url, type: i.type});
      }
    }
    return {
      caption: json.text,
      media,
    };
  } else throw "᥀·࣭࣪̇˖⚔️◗ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.";
}
