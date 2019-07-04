function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'transcription') { return transcription(str) }
	if (direction == 'toMaldivian') { return toMaldivian(str) }
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







function transcription (str) {

// tests     އަށްޑިހަ ރަށް އެންމެ ކަނޑު އިރުގައި ފައް ބައްޓެއް ރަތް އަތްޕުޅު
// ʿəɖɖihə rəʔ ʿemme kəⁿɖu ʿirugəʿi fəʔ bəʈʈeʔ rəyʔ ʿəyppuɭu

str = str.normalize('NFC')+' '

	// collect a list of punctuation, in order
	var punctuationSet = /!|\(|\)|\-|\.|:|\[|\]|\*|\/|\\|،|؟|«|»|‹|›|߸|߹|ߺ| /g
	var punctuationList = str.match(punctuationSet)
	str = str.replace(punctuationSet,' ')

	// word final ށް and އް and ތް
	str = str.replace(/ށް\u0020/g,'ʔ ')
	str = str.replace(/އް\u0020/g,'ʔ ')
	str = str.replace(/ތް\u0020/g,'yʔ ')

	// handle gemination
	var re = /(އް|ށް)([ހށނރބޅކވމފދތލގޏސޑޒޓޔޕޖޗ])/g // set is consonants (not arabic)
	str = str.replace(re,'$2$2') 
	var re = /(ތް)([ހށނރބޅކވމފދތލގޏސޑޒޓޔޕޖޗ])/g // set is consonants (not arabic)
	str = str.replace(re,'y$2$2') 
	re = /(ން)([ނމޱ])/g // set is nasals
	str = str.replace(re,'$2$2') 
	
	console.log(str)
	
	// prenasalisation
	re = /\u0782([\u0784\u0786\u078B\u078C\u078E\u078F\u0791\u0793\u0795\u0797])/g // set is stops
	str = str.replace(re,'ⁿ$1') 

	// replace punctuation
	var ptr = 0
	var out = ''
	for (var c=0;c<str.length;c++) {
		if (str.charAt(c) == ' ') out += punctuationList[ptr++]
		else out += str.charAt(c)
		}
	str = out

str = transliterate(str)


return str.trim()
}


		
function toMaldivian (str) {
	str += '  '


	// handle gemination
	var re = /އް(.)/g
	str = str.replace(re,'$1$1') 


str = str.replace(/ަ/g, "a")
str = str.replace(/ާ/g, "aa")
str = str.replace(/ި/g, "i")
str = str.replace(/ީ/g, "ee")
str = str.replace(/ު/g, "u")
str = str.replace(/ޫ/g, "oo")
str = str.replace(/ެ/g, "e")
str = str.replace(/ޭ/g, "ey")
str = str.replace(/ޮ/g, "o")
str = str.replace(/ޯ/g, "oa")
str = str.replace(/ް/g, "")



str = str.replace(/ހ/g, "h")
str = str.replace(/ށ/g, "sh")
str = str.replace(/ނ/g, "n")
str = str.replace(/ރ/g, "r")
str = str.replace(/ބ/g, "b")
str = str.replace(/ޅ/g, "lh")
str = str.replace(/ކ/g, "k")
str = str.replace(/އ/g, "")
str = str.replace(/ވ/g, "v")
str = str.replace(/މ/g, "m")
str = str.replace(/ފ/g, "f")
str = str.replace(/ދ/g, "dh")
str = str.replace(/ތ/g, "th")
str = str.replace(/ލ/g, "l")
str = str.replace(/ގ/g, "g")
str = str.replace(/ޏ/g, "gn")
str = str.replace(/ސ/g, "s")
str = str.replace(/ޑ/g, "d")
str = str.replace(/ޒ/g, "z")
str = str.replace(/ޓ/g, "t")
str = str.replace(/ޔ/g, "y")
str = str.replace(/ޕ/g, "p")
str = str.replace(/ޖ/g, "j")
str = str.replace(/ޗ/g, "ch")

str = str.replace(/ޘ/g, "ṯ")
str = str.replace(/ޙ/g, "ḥ")
str = str.replace(/ޚ/g, "ḫ")
str = str.replace(/ޛ/g, "ḏ")
str = str.replace(/ޜ/g, "undefined")
str = str.replace(/ޝ/g, "š")
str = str.replace(/ޞ/g, "ṣ")
str = str.replace(/ޟ/g, "d̤")
str = str.replace(/ޠ/g, "t̤")
str = str.replace(/ޡ/g, "undefined")
str = str.replace(/ޢ/g, "ʻ")
str = str.replace(/ޣ/g, "ǵ")
str = str.replace(/ޤ/g, "q")
str = str.replace(/ޥ/g, "w")
str = str.replace(/ޱ/g, "ṇ")

str = str.replace(/،/g, ",")
str = str.replace(/؛/g, ";")


console.log(str)
	return str.trim()
	}


/*
function transliterate (str) {
	str += '  '

str = str.replace(/،/g, ",")
str = str.replace(/؛/g, ";")
str = str.replace(/ހ/g, "h")
str = str.replace(/ށ/g, "ʂ")
str = str.replace(/ނ/g, "n")
str = str.replace(/ރ/g, "r")
str = str.replace(/ބ/g, "b")
str = str.replace(/ޅ/g, "ɭ")
str = str.replace(/ކ/g, "k")
str = str.replace(/އ/g, "ʿ")
str = str.replace(/ވ/g, "v")
str = str.replace(/މ/g, "m")
str = str.replace(/ފ/g, "f")
str = str.replace(/ދ/g, "d")
str = str.replace(/ތ/g, "t")
str = str.replace(/ލ/g, "l")
str = str.replace(/ގ/g, "g")
str = str.replace(/ޏ/g, "ɲ")
str = str.replace(/ސ/g, "s")
str = str.replace(/ޑ/g, "ɖ")
str = str.replace(/ޒ/g, "z")
str = str.replace(/ޓ/g, "ʈ")
str = str.replace(/ޔ/g, "y")
str = str.replace(/ޕ/g, "p")
str = str.replace(/ޖ/g, "ɟ")
str = str.replace(/ޗ/g, "c")
str = str.replace(/ޘ/g, "θ")
str = str.replace(/ޙ/g, "ħ")
str = str.replace(/ޚ/g, "x")
str = str.replace(/ޛ/g, "ð")
str = str.replace(/ޜ/g, "ʒ")
str = str.replace(/ޝ/g, "ʃ")
str = str.replace(/ޞ/g, "s̴")
str = str.replace(/ޟ/g, "d̴")
str = str.replace(/ޠ/g, "t̴")
str = str.replace(/ޡ/g, "z̴")
str = str.replace(/ޢ/g, "ʕ")
str = str.replace(/ޣ/g, "ɣ")
str = str.replace(/ޤ/g, "q")
str = str.replace(/ޥ/g, "w")
str = str.replace(/ަ/g, "ə")
str = str.replace(/ާ/g, "ə̄")
str = str.replace(/ި/g, "i")
str = str.replace(/ީ/g, "ī")
str = str.replace(/ު/g, "u")
str = str.replace(/ޫ/g, "ū")
str = str.replace(/ެ/g, "e")
str = str.replace(/ޭ/g, "ē")
str = str.replace(/ޮ/g, "o")
str = str.replace(/ޯ/g, "ō")
str = str.replace(/ް/g, "͓")
str = str.replace(/ޱ/g, "ɳ")

	return str.trim()
	}

*/
