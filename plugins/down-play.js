import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
if (!text) throw `${IDexotic.faltaTexto}\n*${usedPrefix + command} Erika lundmoen - yad*`
try { 
const yt_play = await search(args.join(' '))
const texto1 = `
${IDexotic.aBordeC}${IDexotic.Nombre}
${IDexotic.aBordeB}${yt_play[0].title}
${IDexotic.aBordeC${IDexotic.Publicado}
${IDexotic.aBordeB}${yt_play[0].ago}
${IDexotic.aBordeC}${IDexotic.Duracion}
${IDexotic.aBordeB}${secondString(yt_play[0].duration.seconds)}
${IDexotic.aBordeC}${IDexotic.Vistas}
${IDexotic.aBordeB}${MilesNumber(yt_play[0].views)}
${IDexotic.aBordeC}${IDexotic.Enlace}
${IDexotic.aBordeB}${yt_play[0].url}`.trim()

await conn.sendButton(m.chat, wm, texto1, yt_play[0].thumbnail, [[IDexotic.botonVerify, `${usedPrefix}reg Exotic.33`]], null, null, m)
let listSections = [];             
listSections.push({
title: IDexotic.rsDown,
rows: [{ header: IDexotic.videoA, title: "", id: `${usedPrefix}ytv ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },
{ header: IDexotic.audioB, title: "", id: `${usedPrefix}yta ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },
{ header: IDexotic.videoDos, title: "", id: `${usedPrefix}playvideo ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },
{ header: IDexotic.audioDos, title: "", id: `${usedPrefix}playaudio ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },
{ header: IDexotic.videoDoc, title: "", id: `${usedPrefix}playdoc2 ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },
{header: IDexotic.audioDoc, title: "", id: `${usedPrefix}playdoc ${yt_play[0].url}`, description: `${yt_play[0].title}\n`}
]});
await conn.sendList(m.chat, `*${IDexotic.Nombre} ${text}*`, `\n${IDexotic.SelSms}`, IDexotic.botonVerA, listSections, {quoted: fkontak});
} catch (e) {
await conn.reply(m.chat, `${IDexotic.ErrorA}`, fkontak, m)
console.log(`${IDexotic.ErrorB}`)
console.log(e)
handler.limit = 0
}}
handler.command = ['playlist2', 'playlista2', 'dlavlist2', 'downlist2']
//handler.limit = 3
//handler.register = true 
export default handler;

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
return search.videos;
}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor((seconds % (3600 * 24)) / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
return dDisplay + hDisplay + mDisplay + sDisplay;
}
