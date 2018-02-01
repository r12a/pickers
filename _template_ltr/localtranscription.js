function localtranscribe (direction, str) {
	
	if (direction == 'toTranslit') { return toTranslit(str) }
	if (direction == 'toDeva') { return toDeva(str) }
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

