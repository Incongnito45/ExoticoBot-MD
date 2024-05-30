import { es } from '../language/index.js'

export async function before(m,{ conn }) {

	let lang = global.db.data.users[m.sender].language
	
  let translations
   if (lang === "es") {
      translations = es
     } else {
      translations = es
     }

	global.IDexotic = translations
	
}
