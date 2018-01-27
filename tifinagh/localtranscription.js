function localtranscribe (direction, str) {
	
	if (direction == 'toIRCAM') { return toIRCAM(str) }
	if (direction == 'toDeva') { return toDeva(str) }
	}
		
		
function toIRCAM (str) {
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



function toDeva (str) {
	str += '  '
	var consonants = 'kgṉcjñṭḍtdnṇpqbmyrvśṣshlXṛṚṟẏḷḻfzɠʄɗɓġ'
	var aspiratedconsonants = 'kgcjṭḍtdpbṛ'
	var vowels = 'aāiīuūeēoōɛʊȓřɫḹ'
	var highvowels = 'īɛoōuॕeēoōʊ'
	var nasals = 'ṉñnmṅ'
	
	var out=''
	str = ' '+str
	str = str.replace(/ã/g,'a\u0303')
	str = str.replace(/ĩ/g,'i\u0303')
	str = str.replace(/ũ/g,'u\u0303')
	str = str.replace(/ẽ/g,'e\u0303')
	str = str.replace(/õ/g,'o\u0303')
	str = str.replace(/aĩ/g,'ai\u0303')
	str = str.replace(/aũ/g,'au\u0303')
	str = str.replace(/ai/g,'ɛ')
	str = str.replace(/au/g,'ʊ')
	str = str.replace(/k͟h/g,'X')
	str = str.replace(/r̥̄/g,'ř')
	str = str.replace(/r̥/g,'ȓ')
	str = str.replace(/l̥̄/g,'ḹ')
	str = str.replace(/l̥/g,'ɫ')
	
	for (var i=1; i<str.length-2; i++) {
		var ch = str.charAt(i)
		var conjunct = false
		var skipOne = false
		
		// conjuncts
		//if (consonants.indexOf(ch) > -1 && consonants.indexOf(str.charAt(i+1)) > -1  && str.charAt(i+1) != 'h') { conjunct = true }
		if (inSet(consonants, ch) && inSet(consonants, str.charAt(i+1)) && str.charAt(i+1) != 'h') { conjunct = true }
		if (inSet(consonants, ch) && str.charAt(i+1) == ':') { conjunct = true }
		
		// aspirated consonants
		if (aspiratedconsonants.indexOf(ch) > -1 && str.charAt(i+1) == 'h') { 
			ch = ch.toUpperCase() 
			skipOne = true
			}
		
		// upper case vowel signs, lowercase independent vowels
		if (inSet(vowels, ch) && inSet(consonants, str.charAt(i-1)) ) { 
			ch = ch.toUpperCase()
			}
		
		// candrabindu vs anusvara
		if (str.charAt(i) == '\u0303' && highvowels.indexOf(str.charAt(i-1)) > -1) {
			ch = '\u0D02'
			}
		else if (str.charAt(i) == '\u0303') { ch = '\u0D01' }
		
		// anusvara before conjunct
		if (nasals.indexOf(ch) > -1 && consonants.indexOf(str.charAt(i-1)) == -1 && consonants.indexOf(str.charAt(i+1)) > -1 ) {
			switch (ch) {
				case 'ṅ': ch = 'ङ\u0D4D'; break
				case 'ñ': ch = 'ञ\u0D4D'; break
				case 'ṇ': ch = 'ण\u0D4D'; break
				case 'n': ch = 'न\u0D4D'; break
				case 'm': ch = 'म\u0D4D'; break
				}
			ch = '<span class=alts><span class=altfirst>&nbsp;\u0D02</span><span class=altlast>'+ch+'</span></span>'
			conjunct = false
			}
		
		if (typeof mapToDeva[ch] != 'undefined') { out += mapToDeva[ch] }
		else { out += ch }
		if (conjunct) { out += '\u0D4D' }
		if (skipOne) { i++ }
		}

	return out.trim()
	}


var mapToDeva = {
'k': '\u0D15', 
'K': '\u0D16', 
'g': '\u0D17', 
'G': '\u0D18', 
'ṅ': '\u0D19', 
'q': '\u0D15\u0D3C', 
'X': '\u0D16\u0D3C', 
'c': '\u0D1A', 
'C': '\u0D1B', 
'j': '\u0D1C', 
'J': '\u0D1D', 
'ñ': '\u0D1E', 
'ġ': '\u0D17\u0D3C', 
'ṉ': '\u0D29', 
'ṭ': '\u0D1F', 
'Ṭ': '\u0D20', 
'ḍ': '\u0D21', 
'Ḍ': '\u0D22', 
'ṇ': '\u0D23', 
'ṛ': '\u0D21\u0D3C', 
'Ṛ': '\u0D22\u0D3C', 
't': '\u0D24', 
'T': '\u0D25', 
'd': '\u0D26', 
'D': '\u0D27', 
'n': '\u0D28', 
'ṟ': '\u0D31', 
'ẏ': '\u0D2F\u0D3C', 
'p': '\u0D2A', 
'P': '\u0D2B', 
'b': '\u0D2C', 
'B': '\u0D2D', 
'm': '\u0D2E', 
'ḷ': '\u0D33', 
'ḻ': '\u0D34', 
'y': '\u0D2F', 
'r': '\u0D30', 
'l': '\u0D32', 
'v': '\u0D35', 
'f': '\u0D2B\u0D3C', 
'z': '\u0D1C\u0D3C', 
'ś': '\u0D36', 
'ṣ': '\u0D37', 
's': '\u0D38', 
'h': '\u0D39', 
'?': '\u0D79', '?': '\u0D7A', 
'ɠ': '\u0D7B', 
'ʄ': '\u0D7C', 
'ɗ': '\u0D7E', 
'ɓ': '\u0D7F',


'A': '',
'Ā': '\u0D3E',
'I': '\u0D3F',
'Ī': '\u0D40',
'U': '\u0D41',
'Ū': '\u0D42',
'?': '\u0D56',
'?': '\u0D57',
'Ȓ': '\u0D43',
'Ř': '\u0D44',
'Ɫ': '\u0D62',
'Ḹ': '\u0D63',
'ê': '\u0D45',
'E': '\u0D46',
'Ē': '\u0D47',
'Ɛ': '\u0D48',
'Ô': '\u0D49',
'O': '\u0D4A',
'Ō': '\u0D4B',
'Ʊ': '\u0D4C',
'?': '\u0D4F',
'?': '\u0D3A',
'?': '\u0D3B',
'?': '\u0D4E',



// independent vowels
'x': 'ऄ',
'a': 'अ', 
'ā': 'आ', 
'i': 'इ', 
'ī': 'ई', 
'u': 'उ', 
'ū': 'ऊ', 
'?': 'ॶ', '?': 'ॷ', 
'ȓ': 'ऋ', 
'ř': 'ॠ', 
'ɫ': 'ऌ', 
'ḹ': 'ॡ', 
'â': 'ॲ', 
'ê': 'ऍ', 
'e': 'ऎ', 
'ē': 'ए', 
'ɛ': 'ऐ', 
'x': 'ऑ', 
'o': 'ऒ', 
'ō': 'ओ', 
'ô': 'ऑ', 
'ʊ': 'औ', 
'?': 'ॵ', '?': 'ॳ', '?': 'ॴ',

//virama
'\u0D4D':'',

// candrabindu
'\u0303': '\u0D01',

// punctuation
'.': ' ।',
'\'': '\u0D3D',
'ḥ': '\u0D03',
':': '',

// numbers
'0': '०',
'1': '१', 
'2': '२', 
'3': '३', 
'4': '४', 
'5': '५', 
'6': '६', 
'7': '७', 
'8': '८', 
'9': '९' 

}
