function localtranscribe (direction, str) {
	
	if (direction == 'toTranslit') { return toTranslit(str) }
	if (direction == 'toDeva') { return toDeva(str) }
	}
		
		
function toTranslit (str) {
	str += '  '

str = str.replace(/\u0561/g, "a")
str = str.replace(/\u0565/g, "e")
str = str.replace(/\u0587/g, "ew")
str = str.replace(/\u0568/g, "\u00EB")
str = str.replace(/\u0567/g, "\u025B")
str = str.replace(/\u056B/g, "i")
str = str.replace(/\u0578/g, "o")
str = str.replace(/\u0585/g, "\u00F2")

str = str.replace(/\u0531/g, "A")
str = str.replace(/\u0535/g, "E")
str = str.replace(/\u0538/g, "\u00CB")
str = str.replace(/\u0537/g, "\u0190")
str = str.replace(/\u053B/g, "I")
str = str.replace(/\u0548/g, "O")
str = str.replace(/\u0555/g, "\u00D2")


str = str.replace(/\u0562/g, "b")
str = str.replace(/\u056E/g, "\u00E7")
str = str.replace(/\u0579/g, "\u010D")
str = str.replace(/\u0573/g, "\u010D\u0323")
str = str.replace(/\u0581/g, "c\u2019")
str = str.replace(/\u0564/g, "d")
str = str.replace(/\u0586/g, "f")
str = str.replace(/\u0563/g, "g")
str = str.replace(/\u0572/g, "\u0121")
str = str.replace(/\u0570/g, "h")
str = str.replace(/\u0571/g, "j")
str = str.replace(/\u057B/g, "\u01F0")
str = str.replace(/\u056F/g, "k")
str = str.replace(/\u0584/g, "k\u2019")
str = str.replace(/\u056C/g, "l")
str = str.replace(/\u0574/g, "m")
str = str.replace(/\u0576/g, "n")
str = str.replace(/\u057A/g, "p")
str = str.replace(/\u0583/g, "p\u2019")
str = str.replace(/\u0580/g, "r")
str = str.replace(/\u057C/g, "\u1E59")
str = str.replace(/\u057D/g, "s")
str = str.replace(/\u0577/g, "\u0161")
str = str.replace(/\u057F/g, "t")
str = str.replace(/\u0569/g, "t\u2019")
str = str.replace(/\u057E/g, "v")
str = str.replace(/\u0582/g, "w")
str = str.replace(/\u056D/g, "x")
str = str.replace(/\u0575/g, "y")
str = str.replace(/\u0566/g, "z")
str = str.replace(/\u056A/g, "\u017E")

str = str.replace(/\u0532/g, "B")
str = str.replace(/\u053E/g, "\u00C7")
str = str.replace(/\u0549/g, "\u010C")
str = str.replace(/\u0543/g, "\u010C\u0323")
str = str.replace(/\u0551/g, "C\u2019")
str = str.replace(/\u0534/g, "D")
str = str.replace(/\u0556/g, "F")
str = str.replace(/\u0533/g, "G")
str = str.replace(/\u0542/g, "\u0120")
str = str.replace(/\u0540/g, "H")
str = str.replace(/\u0541/g, "J")
str = str.replace(/\u054B/g, "\u01F0")
str = str.replace(/\u053F/g, "K")
str = str.replace(/\u0554/g, "K\u2019")
str = str.replace(/\u053C/g, "L")
str = str.replace(/\u0544/g, "M")
str = str.replace(/\u0546/g, "N")
str = str.replace(/\u054A/g, "P")
str = str.replace(/\u0553/g, "P\u2019")
str = str.replace(/\u0550/g, "R")
str = str.replace(/\u054C/g, "\u1E58")
str = str.replace(/\u054D/g, "S")
str = str.replace(/\u0547/g, "\u0160")
str = str.replace(/\u054F/g, "T")
str = str.replace(/\u0539/g, "T\u2019")
str = str.replace(/\u054E/g, "V")
str = str.replace(/\u0552/g, "W")
str = str.replace(/\u053D/g, "X")
str = str.replace(/\u0545/g, "Y")
str = str.replace(/\u0536/g, "Z")
str = str.replace(/\u053A/g, "\u017D")

str = str.replace(/\u2024/g, ";")
str = str.replace(/\u055D/g, ":")
str = str.replace(/\u0589/g, ".")
str = str.replace(/\u00AB/g, "“")
str = str.replace(/\u00BB/g, "”")
str = str.replace(/\u055E/g, "?")
str = str.replace(/\u055C/g, "!")
str = str.replace(/\u055B/g, "!")


console.log(str)
	return str.trim()
	}



function toDeva (str) {
	}

