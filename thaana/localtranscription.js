function localtranscribe (direction, str) {
	
	if (direction == 'toTranslit') { return toTranslit(str) }
	if (direction == 'toMaldivian') { return toMaldivian(str) }
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



function toTranslit (str) {
	str += '  '

str = str.replace(/ަ/g, "a")
str = str.replace(/ާ/g, "ā")
str = str.replace(/ި/g, "i")
str = str.replace(/ީ/g, "ī")
str = str.replace(/ު/g, "u")
str = str.replace(/ޫ/g, "ū")
str = str.replace(/ެ/g, "e")
str = str.replace(/ޭ/g, "ē")
str = str.replace(/ޮ/g, "o")
str = str.replace(/ޯ/g, "ō")
str = str.replace(/ް/g, "̊")



str = str.replace(/ހ/g, "h")
str = str.replace(/ށ/g, "š")
str = str.replace(/ނ/g, "n")
str = str.replace(/ރ/g, "r")
str = str.replace(/ބ/g, "b")
str = str.replace(/ޅ/g, "ḷ")
str = str.replace(/ކ/g, "k")
str = str.replace(/އ/g, "'")
str = str.replace(/ވ/g, "v")
str = str.replace(/މ/g, "m")
str = str.replace(/ފ/g, "f")
str = str.replace(/ދ/g, "d")
str = str.replace(/ތ/g, "t")
str = str.replace(/ލ/g, "l")
str = str.replace(/ގ/g, "g")
str = str.replace(/ޏ/g, "n")
str = str.replace(/ސ/g, "s")
str = str.replace(/ޑ/g, "ḍ")
str = str.replace(/ޒ/g, "z")
str = str.replace(/ޓ/g, "ṭ")
str = str.replace(/ޔ/g, "y")
str = str.replace(/ޕ/g, "p")
str = str.replace(/ޖ/g, "j")
str = str.replace(/ޗ/g, "c")

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


