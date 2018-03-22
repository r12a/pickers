function localtranscribe (direction, str) {
	
	if (direction == 'toTranslit') { return toTranslit(str) }
	if (direction == 'toDeva') { return toDeva(str) }
	}
		
		
function toTranslit (str) {
	str += '  '

str = str.replace(/ᠠ/g, "a")
str = str.replace(/ᠡ/g, "e")
str = str.replace(/ᠢ/g, "i")
str = str.replace(/ᠣ/g, "o")
str = str.replace(/ᠤ/g, "u")
str = str.replace(/ᠥ/g, "ö")
str = str.replace(/ᠦ/g, "ü")
str = str.replace(/ᠧ/g, "ē")



str = str.replace(/ᠨ/g, "n")
str = str.replace(/ᠩ/g, "ṅ")
str = str.replace(/ᠪ/g, "b")
str = str.replace(/ᠫ/g, "p")
str = str.replace(/ᠬ/g, "q")
str = str.replace(/ᠭ/g, "g")
str = str.replace(/ᠮ/g, "m")
str = str.replace(/ᠯ/g, "l")
str = str.replace(/ᠰ/g, "s")
str = str.replace(/ᠱ/g, "š")
str = str.replace(/ᠲ/g, "t")
str = str.replace(/ᠳ/g, "d")
str = str.replace(/ᠴ/g, "č")
str = str.replace(/ᠵ/g, "j")
str = str.replace(/ᠶ/g, "y")
str = str.replace(/ᠷ/g, "r")
str = str.replace(/ᠸ/g, "v")
str = str.replace(/ᠹ/g, "f")
str = str.replace(/ᠺ/g, "ḳ")
str = str.replace(/ᠼ/g, "c")
str = str.replace(/ᠽ/g, "z")
str = str.replace(/ᠾ/g, "h")
str = str.replace(/ᠿ/g, "ř")
str = str.replace(/ᡀ/g, "lh")
str = str.replace(/ᡁ/g, "zh")
str = str.replace(/ᡂ/g, "chi")

str = str.replace(/᠁/g, "…")
str = str.replace(/᠂/g, ",")
str = str.replace(/᠃/g, ".")
str = str.replace(/᠄/g, ":")

str = str.replace(/\u180B/g, "¹")
str = str.replace(/\u180C/g, "²")
str = str.replace(/\u180D/g, "³")
str = str.replace(/\u180E/g, "-")
str = str.replace(/\u202F/g, "·")

    return str.trim()
	}



function toDeva (str) {
	}

