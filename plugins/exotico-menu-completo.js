import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let exoticomenu = `
ExoticoBot-MD / Beta:
${readMore}
╭᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─•
│⌑╔•  •───────────────•  •╗
│⌑║ \`𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 𝐎𝐅𝐂\`
│⌑╚•  •───────────────•  •╝
│⌑┏┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
│⌑┃⌕
│⌑┃ *_${usedPrefix}cuentasoficiales_*
│⌑┃ *_${usedPrefix}exoticocuentas_*
│⌑┃ *_${usedPrefix}creator_*
│⌑┃ *_${usedPrefix}owner_*
│⌑┃ *_${usedPrefix}donate_*
│⌑┃ *_${usedPrefix}donar_*
│⌑┃ *_${usedPrefix}estado_*
│⌑┃ *_${usedPrefix}status_*
│⌑┃ *_${usedPrefix}infobot_*
│⌑┃ *_${usedPrefix}grupoex_*
│⌑┃ *_${usedPrefix}exogroup_*
│⌑┃ *_${usedPrefix}runtime_*
│⌑┃ *_${usedPrefix}ping_*
│⌑┗┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
╰────────────────┬────•
╭᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼┴᷼─᷼─᷼─᷼─•
│⌑╔•  •───────────────•  •╗
│⌑║ \`𝐄𝐃𝐈𝐓𝐎𝐑 𝐃𝐄 𝐀𝐔𝐃𝐈𝐎𝐒\`
│⌑╚•  •───────────────•  •╝
│⌑┏┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
│⌑┃⌕
│⌑┃ *_${usedPrefix}bass_*
│⌑┃ *_${usedPrefix}blown_*
│⌑┃ *_${usedPrefix}deep_*
│⌑┃ *_${usedPrefix}earrape_*
│⌑┃ *_${usedPrefix}fast_*
│⌑┃ *_${usedPrefix}fat_*
│⌑┃ *_${usedPrefix}nightcore_*
│⌑┃ *_${usedPrefix}reverse_*
│⌑┃ *_${usedPrefix}robot_*
│⌑┃ *_${usedPrefix}slow_*
│⌑┃ *_${usedPrefix}smooth_*
│⌑┃ *_${usedPrefix}tupai_*
│⌑┗┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
╰───┬─────────────────•
╭᷼─᷼─᷼─᷼┴᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─•
│⌑╔•  •───────────────•  •╗
│⌑║ \`𝐌𝐄𝐍𝐔 𝐈𝐍𝐓𝐄𝐋𝐈𝐆𝐄𝐍𝐂𝐈𝐀\`
│⌑╚•  •───────────────•  •╝
│⌑┏┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
│⌑┃⌕
│⌑┃ *_${usedPrefix}ia_*
│⌑┃ *_${usedPrefix}chatgpt_*
│⌑┃ *_${usedPrefix}bard_*
│⌑┃ *_${usedPrefix}dalle_*
│⌑┃ *_${usedPrefix}copilot_*
│⌑┃ *_${usedPrefix}bot_*
│⌑┗┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
╰────────────────┬────•
╭᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼┴᷼─᷼─᷼─᷼─•
│⌑╔•  •───────────────•  •╗
│⌑║ \`𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐌𝐄𝐍𝐔𝐒\`
│⌑╚•  •───────────────•  •╝
│⌑┏┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
│⌑┃⌕
│⌑┃ *_${usedPrefix}menulist_*
│⌑┗┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
╰───┬─────────────────•
╭᷼─᷼─᷼─᷼┴᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─•
│⌑╔•  •───────────────•  •╗
│⌑║ \`𝐌𝐈𝐒 𝐑𝐄𝐂𝐔𝐑𝐒𝐎𝐒\`
│⌑╚•  •───────────────•  •╝
│⌑┏┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
│⌑┃⌕
│⌑┃ *_${usedPrefix}minfo_*
│⌑┃ *_${usedPrefix}misdiamantes_*
│⌑┃ *_${usedPrefix}miscoins_*
│⌑┃ *_${usedPrefix}miexp_*
│⌑┃ *_${usedPrefix}miservercoins_*
│⌑┃ *_${usedPrefix}miserver_*
│⌑┃ *_${usedPrefix}mispaquetes_*
│⌑┃ *_${usedPrefix}mistokens_*
│⌑┃ *_${usedPrefix}mismonedas_*
│⌑┃ *_${usedPrefix}minivel_*
│⌑┃ *_${usedPrefix}mirango_*
│⌑┗┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
╰────────────────┬────•
╭᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼┴᷼─᷼─᷼─᷼─•
│⌑╔•  •───────────────•  •╗
│⌑║ \`𝐌𝐄𝐍𝐔 𝐈𝐍𝐒𝐓𝐀𝐋𝐋 𝐁𝐎𝐓\`
│⌑╚•  •───────────────•  •╝
│⌑┏┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
│⌑┃⌕
│⌑┃ *_${usedPrefix}insgatabot_*
│⌑┃ *_${usedPrefix}inslolibot_*
│⌑┃ *_${usedPrefix}insnovabot_*
│⌑┃ *_${usedPrefix}inscuriositybot_*
│⌑┃ *_${usedPrefix}insmysticbot_*
│⌑┃ *_${usedPrefix}insgatabotlite_*
│⌑┃ *_${usedPrefix}insyartexbot_*
│⌑┃ *_${usedPrefix}inshadesbot_*
│⌑┃ *_${usedPrefix}insyoshikobot_*
│⌑┃ *_${usedPrefix}insshadowbot_*
│⌑┃ *_${usedPrefix}insdorratbot_*
│⌑┃ *_${usedPrefix}insnekotinabot_*
│⌑┃ *_${usedPrefix}insbrolybot_*
│⌑┗┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
╰───┬─────────────────•
╭᷼─᷼─᷼─᷼┴᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─•
│⌑╔•  •───────────────•  •╗
│⌑║ \`𝐌𝐄𝐍𝐔 𝐃𝐄 𝐒𝐎𝐏𝐎𝐑𝐓𝐄\`
│⌑╚•  •───────────────•  •╝
│⌑┏┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
│⌑┃⌕
│⌑┃ *_${usedPrefix}reporte_*
│⌑┗┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
╰────────────────┬────•
╭᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼┴᷼─᷼─᷼─᷼─•
│⌑╔•  •───────────────•  •╗
│⌑║ \`𝐌𝐄𝐍𝐔 𝐃𝐄 𝐋𝐎𝐆𝐎𝐒\`
│⌑╚•  •───────────────•  •╝
│⌑┏┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
│⌑┃⌕
│⌑┃ *_${usedPrefix}menulogos_*
│⌑┃ *_${usedPrefix}menulogos2_*
│⌑┗┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
╰───┬─────────────────•
╭᷼─᷼─᷼─᷼┴᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─•
│⌑╔•  •───────────────•  •╗
│⌑║ \`𝐌𝐄𝐍𝐔 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑\`
│⌑╚•  •───────────────•  •╝
│⌑┏┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
│⌑┃⌕
│⌑┃ *_${usedPrefix}toanime_*
│⌑┃ *_${usedPrefix}exoanime_*
│⌑┃ *_${usedPrefix}toaudio_*
│⌑┃ *_${usedPrefix}tovn_*
│⌑┃ *_${usedPrefix}vn_*
│⌑┃ *_${usedPrefix}url_*
│⌑┃ *_${usedPrefix}tourl_*
│⌑┃ *_${usedPrefix}toimg_*
│⌑┃ *_${usedPrefix}tovideo_*
│⌑┗┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
╰────────────────┬────•
╭᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼┴᷼─᷼─᷼─᷼─•
│⌑╔•  •───────────────•  •╗
│⌑║ \`𝐌𝐄𝐍𝐔 / 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒\`
│⌑╚•  •───────────────•  •╝
│⌑┏┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
│⌑┃⌕
│⌑┃ *_${usedPrefix}s_*
│⌑┃ *_${usedPrefix}sticker_*
│⌑┃ *_${usedPrefix}pat_*
│⌑┃ *_${usedPrefix}beso_*
│⌑┃ *_${usedPrefix}dado_*
│⌑┃ *_${usedPrefix}smeme_*
│⌑┃ *_${usedPrefix}ttp_*
│⌑┃ *_${usedPrefix}ttp2_*
│⌑┃ *_${usedPrefix}ttp3_*
│⌑┃ *_${usedPrefix}ttp4_*
│⌑┃ *_${usedPrefix}ttp5_*
│⌑┃ *_${usedPrefix}attp_*
│⌑┃ *_${usedPrefix}attp2_*
│⌑┗┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
╰───┬─────────────────•
╭᷼─᷼─᷼─᷼┴᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─•
│⌑╔•  •───────────────•  •╗
│⌑║ \`𝐌𝐄𝐍𝐔 𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀\`
│⌑╚•  •───────────────•  •╝
│⌑┏┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
│⌑┃⌕
│⌑┃ *_${usedPrefix}rob_*
│⌑┃ *_${usedPrefix}robar_*
│⌑┃ *_${usedPrefix}aventura_*
│⌑┃ *_${usedPrefix}minar_*
│⌑┃ *_${usedPrefix}buy_*
│⌑┃ *_${usedPrefix}balance_*
│⌑┃ *_${usedPrefix}bal_*
│⌑┃ *_${usedPrefix}cofre_*
│⌑┃ *_${usedPrefix}crime_*
│⌑┃ *_${usedPrefix}curar_*
│⌑┃ *_${usedPrefix}heal_*
│⌑┃ *_${usedPrefix}levelup_*
│⌑┃ *_${usedPrefix}work_*
│⌑┃ *_${usedPrefix}trabajar_*
│⌑┃ *_${usedPrefix}myns_*
│⌑┃ *_${usedPrefix}verify_*
│⌑┗┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
╰────────────────┬────•
╭᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼┴᷼─᷼─᷼─᷼─•
│⌑╔•  •───────────────•  •╗
│⌑║ \`𝐌𝐄𝐍𝐔 𝐎𝐍 𝐘 𝐎𝐅𝐅\`
│⌑╚•  •───────────────•  •╝
│⌑┏┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
│⌑┃⌕
│⌑┃ *_${usedPrefix}on welcome_*
│⌑┃ *_${usedPrefix}on detect_*
│⌑┃ *_${usedPrefix}on antidelete_*
│⌑┃ *_${usedPrefix}on public_*
│⌑┃ *_${usedPrefix}on antilink_*
│⌑┃ *_${usedPrefix}on antilink2_*
│⌑┃ *_${usedPrefix}on modohorny_*
│⌑┃ *_${usedPrefix}on stickers_*
│⌑┃ *_${usedPrefix}on game_*
│⌑┃ *_${usedPrefix}on game2_*
│⌑┃ *_${usedPrefix}on temporal_*
│⌑┃ *_${usedPrefix}on autolevelup_*
│⌑┃ *_${usedPrefix}on autosticker_*
│⌑┃ *_${usedPrefix}on reaction_*
│⌑┃ *_${usedPrefix}on antitoxic_*
│⌑┃ *_${usedPrefix}on audios_*
│⌑┃ *_${usedPrefix}on antiver_*
│⌑┃ *_${usedPrefix}on antifake_*
│⌑┃ *_${usedPrefix}on serbot_*
│⌑┃ *_${usedPrefix}on restrict_*
│⌑┃ *_${usedPrefix}on antiporno_*
│⌑┃ *_${usedPrefix}on autoread_*
│⌑┃ *_${usedPrefix}on autoread2_*
│⌑┃ *_${usedPrefix}on antillamar_*
│⌑┃ *_${usedPrefix}on antispam_*
│⌑┃ *_${usedPrefix}on modoadmin_*
│⌑┃ *_${usedPrefix}on pconly_*
│⌑┃ *_${usedPrefix}on gconly_*
│⌑┃ *_${usedPrefix}on antiprivado_*
│⌑┃ *_${usedPrefix}on modoia_*
│⌑┃•┈┈┈┈┈┈┈┈┈┈┈┈┈┈•
│⌑┃ *_${usedPrefix}off welcome_*
│⌑┃ *_${usedPrefix}off detect_*
│⌑┃ *_${usedPrefix}off antidelete_*
│⌑┃ *_${usedPrefix}off public_*
│⌑┃ *_${usedPrefix}off antilink_*
│⌑┃ *_${usedPrefix}off antilink2_*
│⌑┃ *_${usedPrefix}off modohorny_*
│⌑┃ *_${usedPrefix}off stickers_*
│⌑┃ *_${usedPrefix}off game_*
│⌑┃ *_${usedPrefix}off game2_*
│⌑┃ *_${usedPrefix}off temporal_*
│⌑┃ *_${usedPrefix}off autolevelup_*
│⌑┃ *_${usedPrefix}off autosticker_*
│⌑┃ *_${usedPrefix}off reaction_*
│⌑┃ *_${usedPrefix}off antitoxic_*
│⌑┃ *_${usedPrefix}off audios_*
│⌑┃ *_${usedPrefix}off antiver_*
│⌑┃ *_${usedPrefix}off antifake_*
│⌑┃ *_${usedPrefix}off serbot_*
│⌑┃ *_${usedPrefix}off restrict_*
│⌑┃ *_${usedPrefix}off antiporno_*
│⌑┃ *_${usedPrefix}off autoread_*
│⌑┃ *_${usedPrefix}off autoread2_*
│⌑┃ *_${usedPrefix}off antillamar_*
│⌑┃ *_${usedPrefix}off antispam_*
│⌑┃ *_${usedPrefix}off modoadmin_*
│⌑┃ *_${usedPrefix}off pconly_*
│⌑┃ *_${usedPrefix}off gconly_*
│⌑┃ *_${usedPrefix}off antiprivado_*
│⌑┃ *_${usedPrefix}off modoia_*
│⌑┗┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
╰────────────────┬────•
╭᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼┴᷼─᷼─᷼─᷼─•
│⌑╔•  •───────────────•  •╗
│⌑║ \`𝐌𝐄𝐍𝐔 𝐃𝐄 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒\`
│⌑╚•  •───────────────•  •╝
│⌑┏┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
│⌑┃⌕
│⌑┃ *_${usedPrefix}play_*
│⌑┃ *_${usedPrefix}play2_*
│⌑┃ *_${usedPrefix}play3_*
│⌑┃ *_${usedPrefix}play4_*
│⌑┃ *_${usedPrefix}ig_*
│⌑┃ *_${usedPrefix}fb_*
│⌑┃ *_${usedPrefix}tiktok_*
│⌑┃ *_${usedPrefix}twitter_*
│⌑┃ *_${usedPrefix}playvideo_*
│⌑┃ *_${usedPrefix}playaudio_*
│⌑┃ *_${usedPrefix}playdoc_*
│⌑┃ *_${usedPrefix}playdoc2_*
│⌑┃ *_${usedPrefix}video_*
│⌑┃ *_${usedPrefix}audio_*
│⌑┃ *_${usedPrefix}igver_*
│⌑┃ *_${usedPrefix}igstory_*
│⌑┃ *_${usedPrefix}mediafire_*
│⌑┃ *_${usedPrefix}apk_*
│⌑┃ *_${usedPrefix}apk2_*
│⌑┃ *_${usedPrefix}drive_*
│⌑┃ *_${usedPrefix}imagen_*
│⌑┃ *_${usedPrefix}gitclone_*
│⌑┃ *_${usedPrefix}pinterest_*
│⌑┃ *_${usedPrefix}spotify_*
│⌑┃ *_${usedPrefix}quemusica_*
│⌑┃ *_${usedPrefix}tiktokimagen_*
│⌑┃ *_${usedPrefix}ttimagen_*
│⌑┃ *_${usedPrefix}tiktokfoto_*
│⌑┃ *_${usedPrefix}ttstalk_*
│⌑┃ *_${usedPrefix}wp_*
│⌑┗┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
╰───┬─────────────────•
╭᷼─᷼─᷼─᷼┴᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─•
│⌑╔•  •───────────────•  •╗
│⌑║ \`𝐌𝐄𝐍𝐔 𝐏𝐀𝐑𝐀 𝐆𝐑𝐔𝐏𝐎𝐒\`
│⌑╚•  •───────────────•  •╝
│⌑┏┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
│⌑┃⌕
│⌑┃ *_${usedPrefix}setwelcome_*
│⌑┃ *_${usedPrefix}setbye_*
│⌑┃ *_${usedPrefix}setdesc_*
│⌑┃ *_${usedPrefix}setfoto_*
│⌑┃ *_${usedPrefix}setname_*
│⌑┃ *_${usedPrefix}demote_*
│⌑┃ *_${usedPrefix}promote_*
│⌑┃ *_${usedPrefix}invocar_*
│⌑┃ *_${usedPrefix}tagall_*
│⌑┃ *_${usedPrefix}setpp_*
│⌑┃ *_${usedPrefix}hidetag_*
│⌑┃ *_${usedPrefix}add_*
│⌑┃ *_${usedPrefix}agregar_*
│⌑┃ *_${usedPrefix}admins_*
│⌑┃ *_${usedPrefix}kick_*
│⌑┃ *_${usedPrefix}ban_*
│⌑┃ *_${usedPrefix}link_*
│⌑┃ *_${usedPrefix}grupo_*
│⌑┃ *_${usedPrefix}group_*
│⌑┃ *_${usedPrefix}revoke_*
│⌑┃ *_${usedPrefix}nuevolink_*
│⌑┃ *_${usedPrefix}resetlink_*
│⌑┗┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
╰────────────────┬────•
╭᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼┴᷼─᷼─᷼─᷼─•
│⌑╔•  •───────────────•  •╗
│⌑║ \`𝐌𝐄𝐍𝐔 𝐀𝐋𝐄𝐀𝐓𝐎𝐑𝐈𝐎\`
│⌑╚•  •───────────────•  •╝
│⌑┏┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
│⌑┃⌕
│⌑┃ *_${usedPrefix}hot asuma_*
│⌑┃ *_${usedPrefix}hot takeda_*
│⌑┃ *_${usedPrefix}hot endeavor_*
│⌑┃ *_${usedPrefix}wall_*
│⌑┃ *_${usedPrefix}hd_*
│⌑┃ *_${usedPrefix}chatgpt_*
│⌑┃ *_${usedPrefix}quemusica_*
│⌑┃ *_${usedPrefix}spoiler_*
│⌑┃ *_${usedPrefix}ssweb_*
│⌑┃ *_${usedPrefix}consejo_*
│⌑┃ *_${usedPrefix}traducir_*
│⌑┃ *_${usedPrefix}frase_*
│⌑┃ *_${usedPrefix}trad_*
│⌑┃ *_${usedPrefix}delchatgpt_*
│⌑┃ *_${usedPrefix}eliminar_*
│⌑┃ *_${usedPrefix}delete_*
│⌑┃ *_${usedPrefix}cat_*
│⌑┃ *_${usedPrefix}copilot_*
│⌑┃ *_${usedPrefix}lolice_*
│⌑┃ *_${usedPrefix}blur_*
│⌑┗┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
╰───┬─────────────────•
╭᷼─᷼─᷼─᷼┴᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─•
│⌑╔•  •───────────────•  •╗
│⌑║ \`𝐌𝐄𝐍𝐔 𝐏𝐀𝐑𝐀 𝐎𝐖𝐍𝐄𝐑𝐒\`
│⌑╚•  •───────────────•  •╝
│⌑┏┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
│⌑┃⌕
│⌑┃ *_${usedPrefix}addowner_*
│⌑┃ *_${usedPrefix}addcmd_*
│⌑┃ *_${usedPrefix}delcmd_*
│⌑┃ *_${usedPrefix}listcmd_*
│⌑┃ *_${usedPrefix}autoadmin_*
│⌑┃ *_${usedPrefix}backup_*
│⌑┃ *_${usedPrefix}banchat_*
│⌑┃ *_${usedPrefix}banuser_*
│⌑┃ *_${usedPrefix}unbanchat_*
│⌑┃ *_${usedPrefix}unbanuser_*
│⌑┃ *_${usedPrefix}block_*
│⌑┃ *_${usedPrefix}unblock_*
│⌑┃ *_${usedPrefix}boost_*
│⌑┃ *_${usedPrefix}sessiondel_*
│⌑┃ *_${usedPrefix}cleartmp_*
│⌑┃ *_${usedPrefix}listaplugins_*
│⌑┃ *_${usedPrefix}listgp_*
│⌑┃ *_${usedPrefix}unete_*
│⌑┃ *_${usedPrefix}join_*
│⌑┃ *_${usedPrefix}salir_*
│⌑┃ *_${usedPrefix}leave_*
│⌑┃ *_${usedPrefix}borrardatos_*
│⌑┃ *_${usedPrefix}exoren_*
│⌑┃ *_${usedPrefix}setbiobot_*
│⌑┃ *_${usedPrefix}setbotname_*
│⌑┃ *_${usedPrefix}setprefix_*
│⌑┃ *_${usedPrefix}setppbot_*
│⌑┃ *_${usedPrefix}actualizar_*
│⌑┃ *_${usedPrefix}update_*
│⌑┃ *_${usedPrefix}reinstalar_*
│⌑┃ *_${usedPrefix}_*
│⌑┗┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
╰─────────────────────•
 `.trim()
    
const viexotic = ['https://qu.ax/uLtU.mp4',
'https://qu.ax/ukVe.mp4',
'https://qu.ax/lMxG.mp4',
'https://qu.ax/hAag.mp4',
'https://qu.ax/SNLc.mp4',
'https://qu.ax/ysCL.mp4']
try {
await conn.sendMessage(m.chat, { video: { url: viexotic.getRandom() }, gifPlayback: true, caption: exoticomenu, contextInfo: atomofc })
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: imagenRB.getRandom() }, gifPlayback: false, caption: exoticomenu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { video: viexotic.getRandom(), gifPlayback: true, caption: exoticomenu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, imagen5, 'exoticomenu.jpg', exoticomenu, fkontak, false, { mentions: [m.sender, global.conn.user.jid] })
} catch (error) {
return 
}}}} 
} catch (e) {
await m.reply(errorAB)
console.log(`${errorBB}`)
console.log(e)}}

handler.command = /^(allmenu|allhelp|memucompleto|allmemu|menucompleto|menuallbot|\?)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}