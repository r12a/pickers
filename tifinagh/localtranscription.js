function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'toIRCAM') { return toIRCAM(str) }
	}
		


function transliterate (str) {

str += ' '

str = str.replace(/\u200C/g, "ₓ")
str = str.replace(/\u200D/g, "₊")
str = str.replace(/⵿/g, "͓")
str = str.replace(/ⴰ/g, "a")
str = str.replace(/ⴱ/g, "b")
str = str.replace(/ⴲ/g, "β")
str = str.replace(/ⴳ/g, "g")
str = str.replace(/ⴴ/g, "ʝ")
str = str.replace(/ⴵ/g, "ʤ")
str = str.replace(/ⴶ/g, "ʤ̇")
str = str.replace(/ⴷ/g, "d")
str = str.replace(/ⴸ/g, "ð")
str = str.replace(/ⴹ/g, "dˁ")
str = str.replace(/ⴺ/g, "ðˁ")
str = str.replace(/ⴻ/g, "e")
str = str.replace(/ⴼ/g, "f")
str = str.replace(/ⴽ/g, "k")
str = str.replace(/ⴾ/g, "k̇")
str = str.replace(/ⴿ/g, "ç")
str = str.replace(/ⵀ/g, "h")
str = str.replace(/ⵁ/g, "ḣ")
str = str.replace(/ⵂ/g, "ḧ")
str = str.replace(/ⵃ/g, "ħ")
str = str.replace(/ⵄ/g, "ʕ")
str = str.replace(/ⵅ/g, "χ")
str = str.replace(/ⵆ/g, "χ̇")
str = str.replace(/ⵇ/g, "q")
str = str.replace(/ⵈ/g, "q̇")
str = str.replace(/ⵉ/g, "i")
str = str.replace(/ⵊ/g, "ʒ")
str = str.replace(/ⵋ/g, "ʒ̇")
str = str.replace(/ⵌ/g, "ʒ̈")
str = str.replace(/ⵍ/g, "l")
str = str.replace(/ⵎ/g, "m")
str = str.replace(/ⵏ/g, "n")
str = str.replace(/ⵐ/g, "ɲ")
str = str.replace(/ⵑ/g, "ŋ")
str = str.replace(/ⵒ/g, "p")
str = str.replace(/ⵓ/g, "u")
str = str.replace(/ⵔ/g, "r")
str = str.replace(/ⵕ/g, "rˤ")
str = str.replace(/ⵖ/g, "ʁ")
str = str.replace(/ⵗ/g, "ʁ̇")
str = str.replace(/ⵘ/g, "ʁ̈")
str = str.replace(/ⵙ/g, "s")
str = str.replace(/ⵚ/g, "sˁ")
str = str.replace(/ⵛ/g, "ʃ")
str = str.replace(/ⵜ/g, "t")
str = str.replace(/ⵝ/g, "θ")
str = str.replace(/ⵞ/g, "ʧ")
str = str.replace(/ⵟ/g, "tˁ")
str = str.replace(/ⵠ/g, "v")
str = str.replace(/ⵡ/g, "w")
str = str.replace(/ⵢ/g, "y")
str = str.replace(/ⵣ/g, "z")
str = str.replace(/ⵤ/g, "ż")
str = str.replace(/ⵥ/g, "zˁ")
str = str.replace(/ⵦ/g, "ė")
str = str.replace(/ⵧ/g, "o")
str = str.replace(/ⵯ/g, "ʷ")
str = str.replace(/⵰/g, "[{•]")

return str.trim()
}




function toIRCAM (str) {

str = str.normalize('NFC')+' '

str = str.replace(/\u200C/g, "ₓ")
str = str.replace(/\u200D/g, "₊")
str = str.replace(/◌⵿/g, "")
str = str.replace(/ⴰ/g, "a")
str = str.replace(/ⴱ/g, "b")
str = str.replace(/ⴲ/g, "ḇ")
str = str.replace(/ⴳ/g, "g")
str = str.replace(/ⴴ/g, "g̱")
str = str.replace(/ⴵ/g, "ǧ")
str = str.replace(/ⴶ/g, "dj")
str = str.replace(/ⴷ/g, "d")
str = str.replace(/ⴸ/g, "ḏ")
str = str.replace(/ⴹ/g, "ḍ")
str = str.replace(/ⴺ/g, "ḍ̱")
str = str.replace(/ⴻ/g, "e")
str = str.replace(/ⴼ/g, "f")
str = str.replace(/ⴽ/g, "k")
str = str.replace(/ⴾ/g, "k")
str = str.replace(/ⴿ/g, "ḵ")
str = str.replace(/ⵀ/g, "h")
str = str.replace(/ⵁ/g, "h")
str = str.replace(/ⵂ/g, "h")
str = str.replace(/ⵃ/g, "ḥ")
str = str.replace(/ⵄ/g, "[ɛ{ʕ]")
str = str.replace(/ⵅ/g, "x")
str = str.replace(/ⵆ/g, "[kh{x]")
str = str.replace(/ⵇ/g, "q")
str = str.replace(/ⵈ/g, "q")
str = str.replace(/ⵉ/g, "i")
str = str.replace(/ⵊ/g, "j")
str = str.replace(/ⵋ/g, "j")
str = str.replace(/ⵌ/g, "j")
str = str.replace(/ⵍ/g, "l")
str = str.replace(/ⵎ/g, "m")
str = str.replace(/ⵏ/g, "n")
str = str.replace(/ⵐ/g, "ny")
str = str.replace(/ⵑ/g, "ng")
str = str.replace(/ⵒ/g, "p")
str = str.replace(/ⵓ/g, "u")
str = str.replace(/ⵔ/g, "r")
str = str.replace(/ⵕ/g, "ṛ")
str = str.replace(/ⵖ/g, "ɣ")
str = str.replace(/ⵗ/g, "[gh{γ]")
str = str.replace(/ⵘ/g, "[gh{γ]")
str = str.replace(/ⵙ/g, "s")
str = str.replace(/ⵚ/g, "ṣ")
str = str.replace(/ⵛ/g, "š")
str = str.replace(/ⵜ/g, "t")
str = str.replace(/ⵝ/g, "ṯ")
str = str.replace(/ⵞ/g, "č")
str = str.replace(/ⵟ/g, "ṭ")
str = str.replace(/ⵠ/g, "v")
str = str.replace(/ⵡ/g, "w")
str = str.replace(/ⵢ/g, "y")
str = str.replace(/ⵣ/g, "z")
str = str.replace(/ⵤ/g, "z")
str = str.replace(/ⵥ/g, "ẓ")
str = str.replace(/ⵦ/g, "e")
str = str.replace(/ⵧ/g, "o")
str = str.replace(/ⵯ/g, "ʷ")
str = str.replace(/⵰/g, "[{•]")

return str.trim()
}








	
function OLDtoIRCAM (str) {
	str += '  '

    str = str.replace(/\u2D30/g, "a")
    str = str.replace(/\u2D3B/g, "e")
    str = str.replace(/\u2D49/g, "i")
    str = str.replace(/\u2D53/g, "u")
    str = str.replace(/\u2D66/g, "e")
    str = str.replace(/\u2D67/g, "o")


    str = str.replace(/\u2D5C\u2D59/g, "ts")
    str = str.replace(/\u2D37\u2D63/g, "dz")
    str = str.replace(/\u2D5C\u2D5B/g, "tc")
    str = str.replace(/\u2D37\u2D4A/g, "dj")
    str = str.replace(/\u2D31/g, "b")
    str = str.replace(/\u2D33/g, "g")
    str = str.replace(/\u2D37/g, "d")
    str = str.replace(/\u2D39/g, "\u1E0D")
    str = str.replace(/\u2D3C/g, "f")
    str = str.replace(/\u2D3D/g, "k")
    str = str.replace(/\u2D40/g, "h")
    str = str.replace(/\u2D43/g, "\u1E25")
    str = str.replace(/\u2D44/g, "[\u025B{\u0295]")
    str = str.replace(/\u2D45/g, "x")
    str = str.replace(/\u2D47/g, "q")
    str = str.replace(/\u2D4A/g, "j")
    str = str.replace(/\u2D4D/g, "l")
    str = str.replace(/\u2D4E/g, "m")
    str = str.replace(/\u2D4F/g, "n")
    str = str.replace(/\u2D54/g, "r")
    str = str.replace(/\u2D55/g, "\u1E5B")
    str = str.replace(/\u2D56/g, "\u0263")
    str = str.replace(/\u2D59/g, "s")
    str = str.replace(/\u2D5A/g, "\u1E63")
    str = str.replace(/\u2D5B/g, "c")
    str = str.replace(/\u2D5C/g, "t")
    str = str.replace(/\u2D5F/g, "\u1E6D")
    str = str.replace(/\u2D61/g, "w")
    str = str.replace(/\u2D62/g, "y")
    str = str.replace(/\u2D63/g, "z")
    str = str.replace(/\u2D65/g, "\u1E93")
    str = str.replace(/\u2D6F/g, "\u00B0")
    str = str.replace(/\u2D32/g, "\u1E07")
    str = str.replace(/\u2D34/g, "g\u0331")
    str = str.replace(/\u2D38/g, "\u1E0F")
    str = str.replace(/\u2D3A/g, "\u1E0D\u0331")
    str = str.replace(/\u2D3F/g, "\u1E35")
    str = str.replace(/\u2D52/g, "p")
    str = str.replace(/\u2D5D/g, "\u1E6F")
    str = str.replace(/\u2D60/g, "v")
    str = str.replace(/\u2D35/g, "ǧ")

    str = str.replace(/\u2D70/g, " • ")


	return str.trim()
	}


