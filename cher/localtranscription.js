function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'MAtoIPA') { return MAtoIPA(str) }
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






function MAtoIPA (str) {
	str += '  '

str = str.replace(/a\s/g, "A ")
str = str.replace(/i\s/g, "I ")
str = str.replace(/u\s/g, "U ")
str = str.replace(/e\s/g, "E ")
str = str.replace(/o\s/g, "O ")
str = str.replace(/v\s/g, "Ə̃ ")



str = str.replace(/íí/g, "I̋ː")
str = str.replace(/íì/g, "Îː")
str = str.replace(/iì/g, "Ȉː")
str = str.replace(/ií/g, "Ǐː")
str = str.replace(/íi/g, "Íː")
str = str.replace(/ii/g, "Ìː")
str = str.replace(/í/g, "Í")
str = str.replace(/i/g, "Ì")
str = str.replace(/úú/g, "Űː")
str = str.replace(/úù/g, "Ûː")
str = str.replace(/uù/g, "Ȕː")
str = str.replace(/uú/g, "Ǔː")
str = str.replace(/úu/g, "Úː")
str = str.replace(/uu/g, "Ùː")
str = str.replace(/ú/g, "Ú")
str = str.replace(/u/g, "Ù")
str = str.replace(/éé/g, "E̋ː")
str = str.replace(/éè/g, "Êː")
str = str.replace(/eè/g, "Ȅː")
str = str.replace(/eé/g, "Ěː")
str = str.replace(/ée/g, "Éː")
str = str.replace(/ee/g, "Èː")
str = str.replace(/é/g, "É")
str = str.replace(/e/g, "È")
str = str.replace(/óó/g, "Őː")
str = str.replace(/óò/g, "Ôː")
str = str.replace(/oò/g, "Ȍː")
str = str.replace(/oó/g, "Ǒː")
str = str.replace(/óo/g, "Óː")
str = str.replace(/oo/g, "Òː")
str = str.replace(/ó/g, "Ó")
str = str.replace(/o/g, "Ò")
str = str.replace(/áá/g, "A̋ː")
str = str.replace(/áà/g, "Âː")
str = str.replace(/aà/g, "Ȁː")
str = str.replace(/aá/g, "Ǎː")
str = str.replace(/áa/g, "Áː")
str = str.replace(/aa/g, "Àː")
str = str.replace(/á/g, "Á")
str = str.replace(/a/g, "À")
str = str.replace(/v́v́/g, "Ə̃̋ː")
str = str.replace(/v́v̀/g, "Ə̃̂ː")
str = str.replace(/vv̀/g, "Ə̃̏ː")
str = str.replace(/vv́/g, "Ə̃̌ː")
str = str.replace(/v́v/g, "Ə̃́ː")
str = str.replace(/vv/g, "Ə̃̀ː")
str = str.replace(/v́/g, "Ə̃́")
str = str.replace(/v/g, "Ə̃̀")


str = str.replace(/khw/g, "KʰW̥")
str = str.replace(/kw/g, "KW̥")
str = str.replace(/kh/g, "Kʰ")
str = str.replace(/thl/g, "TꞭ")
str = str.replace(/th/g, "Tʰ")
str = str.replace(/ts/g, "Tʰ͡S")
str = str.replace(/ch/g, "Tʰ͡Ʃ")
str = str.replace(/hl/g, "Ɬ")
str = str.replace(/hn/g, "HN̥")
str = str.replace(/hw/g, "HW̥")
str = str.replace(/hy/g, "HY̥")
str = str.replace(/j/g, "T͡S")


	return str.toLowerCase().trim()
	}



