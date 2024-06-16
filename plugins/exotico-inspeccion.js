//import * as baileys from '@adiwajshing/baileys'
let baileys = (await import(global.baileys)).default

let handler = async (m, { conn, text }) => {
	let [, code] = text.match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []
	if (!code) throw `᥀·࣭࣪̇˖🧰◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙜𝙧𝙪𝙥𝙖𝙡 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤. • 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤: ${usedPrefix + command} ${grupo1}`
	let res = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code } }] }),
		data = extractGroupMetadata(res),
		txt = Object.keys(data).map(v => `*${v.capitalize()}:* ${data[v]}`).join('\n'),
		pp = await conn.profilePictureUrl(data.id, 'image').catch(console.error)
let groupinfo = `
𝗜𝗗 • ${data.id}

𝗡𝗢𝗠𝗕𝗥𝗘 • ${data.subject}

𝗖𝗥𝗘𝗔𝗗𝗢 𝗘𝗡 • ${data.creation}

𝗖𝗥𝗘𝗔𝗗𝗢𝗥 • ${data.owner}`
await await conn.sendButton(m.chat, groupinfo, `𝗖𝗼𝗽𝗶𝗮𝗿 𝗱𝗲𝘀𝗰𝗿𝗶𝗽𝗰𝗶𝗼𝗻`, pp, [['𝗠𝗶 𝗜𝗻𝗳𝗼', '/minfo']], `https://www.whatsapp.com/otp/copy/${data.desc}`, null, null, m)
}
handler.command = /^(inspect)$/i

export default handler
handler.owner = false

const extractGroupMetadata = (result) => {
	const group = baileys.getBinaryNodeChild(result, 'group')
	const descChild = baileys.getBinaryNodeChild(group, 'description')
	let desc
	if (descChild) desc = baileys.getBinaryNodeChild(descChild, 'body')?.content
	const metadata = {
		id: group.attrs.id.includes('@') ? group.attrs.id : baileys.jidEncode(group.attrs.id, 'g.us'),
		subject: group.attrs.subject,
		creation: new Date(+group.attrs.creation * 1000).toLocaleString('id', { timeZone: 'America/Los_Angeles' }),
		owner: group.attrs.creator ? 'wa.me/' + baileys.jidNormalizedUser(group.attrs.creator).split('@')[0] : undefined,
		desc
	}
	return metadata
}


