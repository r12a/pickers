function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'reverse') { return reverse(str) }
	}
		
		


function transliterate (str) {

str = ' '+str

var strArray = [...str]
var exclusions = new Set(['(',')','[',']','.',' '])

for (i=0;i<strArray.length;i++) {
	if (exclusions.has(strArray[i])) continue
	if (! autoTranslitArray[strArray[i]]) continue
	re = new RegExp(strArray[i],'g')
	str = str.replace(re, autoTranslitArray[strArray[i]])
	}


return str.trim()
}






function reverse (str) {
	str += '  '

str = str.replace(/yv/g, "Ᏼ")
str = str.replace(/yu/g, "Ᏻ")
str = str.replace(/yo/g, "Ᏺ")
str = str.replace(/yi/g, "Ᏹ")
str = str.replace(/ye/g, "Ᏸ")
str = str.replace(/ya/g, "Ꮿ")
str = str.replace(/wv/g, "Ꮾ")
str = str.replace(/wu/g, "Ꮽ")
str = str.replace(/wo/g, "Ꮼ")
str = str.replace(/wi/g, "Ꮻ")
str = str.replace(/we/g, "Ꮺ")
str = str.replace(/wa/g, "Ꮹ")
str = str.replace(/tsv/g, "Ꮸ")
str = str.replace(/tsu/g, "Ꮷ")
str = str.replace(/tso/g, "Ꮶ")
str = str.replace(/tsi/g, "Ꮵ")
str = str.replace(/tse/g, "Ꮴ")
str = str.replace(/tsa/g, "Ꮳ")
str = str.replace(/dlv/g, "Ꮲ")
str = str.replace(/dlu/g, "Ꮱ")
str = str.replace(/dlo/g, "Ꮰ")
str = str.replace(/dli/g, "Ꮯ")
str = str.replace(/dle/g, "Ꮮ")
str = str.replace(/tla/g, "Ꮭ")
str = str.replace(/dla/g, "Ꮬ")
str = str.replace(/dv/g, "Ꮫ")
str = str.replace(/du/g, "Ꮪ")
str = str.replace(/do/g, "Ꮩ")
str = str.replace(/ti/g, "Ꮨ")
str = str.replace(/di/g, "Ꮧ")
str = str.replace(/te/g, "Ꮦ")
str = str.replace(/de/g, "Ꮥ")
str = str.replace(/ta/g, "Ꮤ")
str = str.replace(/da/g, "Ꮣ")
str = str.replace(/sv/g, "Ꮢ")
str = str.replace(/su/g, "Ꮡ")
str = str.replace(/so/g, "Ꮠ")
str = str.replace(/si/g, "Ꮟ")
str = str.replace(/se/g, "Ꮞ")
str = str.replace(/sa/g, "Ꮜ")
str = str.replace(/s/g, "Ꮝ")
str = str.replace(/qv/g, "Ꮛ")
str = str.replace(/qu/g, "Ꮚ")
str = str.replace(/qo/g, "Ꮙ")
str = str.replace(/qi/g, "Ꮘ")
str = str.replace(/qe/g, "Ꮗ")
str = str.replace(/qa/g, "Ꮖ")
str = str.replace(/nv/g, "Ꮕ")
str = str.replace(/nu/g, "Ꮔ")
str = str.replace(/no/g, "Ꮓ")
str = str.replace(/ni/g, "Ꮒ")
str = str.replace(/ne/g, "Ꮑ")
str = str.replace(/nah/g, "Ꮐ")
str = str.replace(/hna/g, "Ꮏ")
str = str.replace(/na/g, "Ꮎ")
str = str.replace(/mv/g, "Ᏽ")
str = str.replace(/mu/g, "Ꮍ")
str = str.replace(/mo/g, "Ꮌ")
str = str.replace(/mi/g, "Ꮋ")
str = str.replace(/me/g, "Ꮊ")
str = str.replace(/ma/g, "Ꮉ")
str = str.replace(/lv/g, "Ꮈ")
str = str.replace(/lu/g, "Ꮇ")
str = str.replace(/lo/g, "Ꮆ")
str = str.replace(/li/g, "Ꮅ")
str = str.replace(/le/g, "Ꮄ")
str = str.replace(/la/g, "Ꮃ")
str = str.replace(/hv/g, "Ꮂ")
str = str.replace(/hu/g, "Ꮁ")
str = str.replace(/ho/g, "Ꮀ")
str = str.replace(/hi/g, "Ꭿ")
str = str.replace(/he/g, "Ꭾ")
str = str.replace(/ha/g, "Ꭽ")
str = str.replace(/gv/g, "Ꭼ")
str = str.replace(/gu/g, "Ꭻ")
str = str.replace(/go/g, "Ꭺ")
str = str.replace(/gi/g, "Ꭹ")
str = str.replace(/ge/g, "Ꭸ")
str = str.replace(/ka/g, "Ꭷ")
str = str.replace(/ga/g, "Ꭶ")
str = str.replace(/v/g, "Ꭵ")
str = str.replace(/u/g, "Ꭴ")
str = str.replace(/o/g, "Ꭳ")
str = str.replace(/i/g, "Ꭲ")
str = str.replace(/e/g, "Ꭱ")
str = str.replace(/a/g, "Ꭰ")


	return str.trim()
	}



