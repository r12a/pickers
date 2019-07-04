function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'toTranslit') { return toTranslit(str) }
	if (direction == 'toISO') { return toISO(str) }
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






function toISO (str) {
str += ' '

str = str.normalize('NFC')

str = str.replace(/Ё/g, "Ë")
str = str.replace(/А/g, "A")
str = str.replace(/Б/g, "B")
str = str.replace(/В/g, "V")
str = str.replace(/Г/g, "G")
str = str.replace(/Д/g, "D")
str = str.replace(/Е/g, "E")
str = str.replace(/Ж/g, "Ž")
str = str.replace(/З/g, "Z")
str = str.replace(/И/g, "I")
str = str.replace(/Й/g, "Ī")
str = str.replace(/К/g, "K")
str = str.replace(/Л/g, "L")
str = str.replace(/М/g, "M")
str = str.replace(/Н/g, "N")
str = str.replace(/О/g, "O")
str = str.replace(/П/g, "P")
str = str.replace(/Р/g, "R")
str = str.replace(/С/g, "S")
str = str.replace(/Т/g, "T")
str = str.replace(/У/g, "U")
str = str.replace(/Ф/g, "F")
str = str.replace(/Х/g, "H")
str = str.replace(/Ц/g, "C")
str = str.replace(/Ч/g, "Č")
str = str.replace(/Ш/g, "Š")
str = str.replace(/Щ/g, "Ŝ")
str = str.replace(/Ъ/g, "ʺ")
str = str.replace(/Ы/g, "Y")
str = str.replace(/Ь/g, "ʹ")
str = str.replace(/Э/g, "È")
str = str.replace(/Ю/g, "Û")
str = str.replace(/Я/g, "Â")
str = str.replace(/а/g, "a")
str = str.replace(/б/g, "b")
str = str.replace(/в/g, "v")
str = str.replace(/г/g, "g")
str = str.replace(/д/g, "d")
str = str.replace(/е/g, "e")
str = str.replace(/ж/g, "ž")
str = str.replace(/з/g, "z")
str = str.replace(/и/g, "i")
str = str.replace(/й/g, "ī")
str = str.replace(/к/g, "k")
str = str.replace(/л/g, "l")
str = str.replace(/м/g, "m")
str = str.replace(/н/g, "n")
str = str.replace(/о/g, "o")
str = str.replace(/п/g, "p")
str = str.replace(/р/g, "r")
str = str.replace(/с/g, "s")
str = str.replace(/т/g, "t")
str = str.replace(/у/g, "u")
str = str.replace(/ф/g, "f")
str = str.replace(/х/g, "h")
str = str.replace(/ц/g, "c")
str = str.replace(/ч/g, "č")
str = str.replace(/ш/g, "š")
str = str.replace(/щ/g, "ŝ")
str = str.replace(/ъ/g, "ʺ")
str = str.replace(/ы/g, "y")
str = str.replace(/ь/g, "ʹ")
str = str.replace(/э/g, "è")
str = str.replace(/ю/g, "û")
str = str.replace(/я/g, "â")
str = str.replace(/ё/g, "ë")


return str.trim()
}









function toTranslit (str) {
	str += '  '

str = str.replace(/\u0430/g, "a")
str = str.replace(/\u0435/g, "e")
str = str.replace(/\u0451/g, "\u0113")
str = str.replace(/\u0438/g, "i")
str = str.replace(/\u0439/g, "\u012D")
str = str.replace(/\u043E/g, "o")
str = str.replace(/\u0443/g, "u")
str = str.replace(/\u044B/g, "y")
str = str.replace(/\u044D/g, "\u0117")
str = str.replace(/\u044E/g, "i\u0361u")
str = str.replace(/\u044F/g, "i\u0361a")
str = str.replace(/\u0410/g, "A")
str = str.replace(/\u0415/g, "E")
str = str.replace(/\u0401/g, "\u0112")
str = str.replace(/\u0418/g, "I")
str = str.replace(/\u0419/g, "\u012C")
str = str.replace(/\u041E/g, "O")
str = str.replace(/\u0423/g, "U")
str = str.replace(/\u042B/g, "Y")
str = str.replace(/\u042D/g, "\u0116")
str = str.replace(/\u042E/g, "I\u0361U")
str = str.replace(/\u042F/g, "I\u0361A")


str = str.replace(/\u0431/g, "b")
str = str.replace(/\u0447/g, "ch")
str = str.replace(/\u0434/g, "d")
str = str.replace(/\u0444/g, "f")
str = str.replace(/\u0433/g, "g")
str = str.replace(/\u043A/g, "k")
str = str.replace(/\u0445/g, "kh")
str = str.replace(/\u043B/g, "l")
str = str.replace(/\u043C/g, "m")
str = str.replace(/\u043D/g, "n")
str = str.replace(/\u043F/g, "p")
str = str.replace(/\u0440/g, "r")
str = str.replace(/\u0441/g, "s")
str = str.replace(/\u0448/g, "sh")
str = str.replace(/\u0449/g, "shch")
str = str.replace(/\u0442/g, "t")
str = str.replace(/\u0446/g, "\u02A6")
str = str.replace(/\u0432/g, "v")
str = str.replace(/\u0437/g, "z")
str = str.replace(/\u0436/g, "zh")
str = str.replace(/\u044A/g, "\u02BA")
str = str.replace(/\u044C/g, "\u02B9")

str = str.replace(/\u0411/g, "B")
str = str.replace(/\u0427/g, "CH")
str = str.replace(/\u0414/g, "D")
str = str.replace(/\u0424/g, "F")
str = str.replace(/\u0413/g, "G")
str = str.replace(/\u041A/g, "K")
str = str.replace(/\u0425/g, "KH")
str = str.replace(/\u041B/g, "L")
str = str.replace(/\u041C/g, "M")
str = str.replace(/\u041D/g, "N")
str = str.replace(/\u041F/g, "P")
str = str.replace(/\u0420/g, "R")
str = str.replace(/\u0421/g, "S")
str = str.replace(/\u0428/g, "SH")
str = str.replace(/\u0429/g, "SHCH")
str = str.replace(/\u0422/g, "T")
str = str.replace(/\u0426/g, "\u02A6")
str = str.replace(/\u0412/g, "V")
str = str.replace(/\u0417/g, "Z")
str = str.replace(/\u0416/g, "ZH")
str = str.replace(/\u042A/g, "\u02BA")
str = str.replace(/\u042C/g, "\u02B9")


console.log(str)
	return str.trim()
	}



function toDeva (str) {
	}

