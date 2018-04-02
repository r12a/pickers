function localtranscribe (direction, str) {
	
	if (direction == 'toLatin') { return toLatin(str) }
	if (direction == 'transliterate') { return transliterate(str) }
	}
		




function transliterate (str) {
    
str = str + '  '
str = str.normalize('NFC')

var consonants = new Set(['ᨀ', 'ᨁ', 'ᨂ', 'ᨌ', 'ᨍ', 'ᨎ', 'ᨈ', 'ᨉ', 'ᨊ', 'ᨄ', 'ᨅ', 'ᨆ', 'ᨐ', 'ᨑ', 'ᨒ', 'ᨔ', 'ᨓ', 'ᨖ', 'ᨃ', 'ᨏ', 'ᨋ', 'ᨇ'])
var vowelSet = new Set(['ᨗ', 'ᨘ', 'ᨙ', 'ᨚ', 'ᨛ'])
var medialSet = new Set([])
var finalSet = new Set([])
var nuktaSet = new Set([])
var viramaSet = new Set([])
var combChar = new Set(['ᨗ', 'ᨘ', 'ᨙ', 'ᨚ', 'ᨛ'])

var addak = ''
var virama = '\u1BAA'


// adjust the string for nukta, virama, and addak, and add inherent vowel
let chars = [...str]
var out = ''
for (let i=0; i<chars.length-2; i++) {
    // look ahead to syllable end
    var ptr = i+1
    var vowelsign = ''
    var medials = ''
    var finals = ''
    var otherCombining = ''
    var nuktas = ''
    var hasAddak = false
    var hasNukta = false
    var hasVirama = false
    while (combChar.has(chars[ptr]) && ptr < chars.length) {
        if (vowelSet.has(chars[ptr])) vowelsign += chars[ptr]
        else if (medialSet.has(chars[ptr])) medials += chars[ptr]
        else if (finalSet.has(chars[ptr])) finals += chars[ptr]
        else if (nuktaSet.has(chars[ptr])) nuktas += chars[ptr]
        else otherCombining += chars[ptr]
        if (chars[ptr] === addak) hasAddak = true
        if (viramaSet.has(chars[ptr])) hasVirama = true
        ptr++
        }
    
    //console.log(i,'chars:i',chars[i],'vsign',vowelsign, 'virama',hasVirama, 'nukta',hasNukta, 'ptr',chars[ptr])
    
    out += chars[i] // '\u200B'+chars[i]
    if (nuktas) out += nuktas
    if (consonants.has(chars[i]) && vowelsign === '' && hasVirama === false) vowelsign = 'ᵃ'
    out += medials + vowelsign + otherCombining + finals
    //if (vowelsign === 'ᵃ' && (chars[ptr] === 'ਇ' || chars[ptr] === 'ਉ')) out += ':'
    if (hasAddak) out += chars[ptr]
    
    i = ptr-1

    //console.log(out)
    }

str = out+'  '
console.log(out)

str = str.replace(/\u1BAA/g, "͓") // virama
//str = str.replace(/\u200B/g, " ") // virama


// do compounds
str = str.replace(/ᨃ/g, "ᵑk")
str = str.replace(/ᨏ/g, "ᶮc")
str = str.replace(/ᨋ/g, "ⁿr")
str = str.replace(/ᨇ/g, "ᵐp")
str = str.replace(/ᨕᨗ‍ᨐ/g, "i͡a")



// basic consonants
str = str.replace(/ᨀ/g, "k")
str = str.replace(/ᨁ/g, "g")
str = str.replace(/ᨂ/g, "ṅ")
str = str.replace(/ᨌ/g, "c")
str = str.replace(/ᨍ/g, "j")
str = str.replace(/ᨎ/g, "ñ")
str = str.replace(/ᨈ/g, "t")
str = str.replace(/ᨉ/g, "d")
str = str.replace(/ᨊ/g, "n")
str = str.replace(/ᨄ/g, "p")
str = str.replace(/ᨅ/g, "b")
str = str.replace(/ᨆ/g, "m")
str = str.replace(/ᨐ/g, "y")
str = str.replace(/ᨑ/g, "r")
str = str.replace(/ᨒ/g, "l")
str = str.replace(/ᨔ/g, "s")
str = str.replace(/ᨓ/g, "w")
str = str.replace(/ᨖ/g, "h")



// independent vowels
str = str.replace(/ᨕᨗ/g, "ị")
str = str.replace(/ᨕᨘ/g, "ụ")
str = str.replace(/ᨕᨙ/g, "ẹ")
str = str.replace(/ᨕᨚ/g, "ọ")
str = str.replace(/ᨕᨛ/g, "ə̣")
str = str.replace(/ᨕ/g, "ạ")


// vowel signs
str = str.replace(/ᨗ/g, "i")
str = str.replace(/ᨘ/g, "u")
str = str.replace(/ᨙ/g, "e")
str = str.replace(/ᨚ/g, "o")
str = str.replace(/ᨛ/g, "ə")





// punctuation
str = str.replace(/᨞/g, ".")
str = str.replace(/᨟/g, "•")




	return str.trim()


    }














function inSet (group, ch) {
	if (group.indexOf(ch) > -1) return true
	else { return false }
	}



function toLatin (str) {
	str += '  '
	var ivowelkillerSet = new Set(['\u1A17', '\u1A18', '\u1A19', '\u1A1A', '\u1A1B']) // all characters that would kill the inherent vowel
	var consonantSet = new Set(['\u1A00', '\u1A01', '\u1A02', '\u1A03', '\u1A0C', '\u1A0D', '\u1A0E', '\u1A0F', '\u1A08', '\u1A09', '\u1A0A', '\u1A0B', '\u1A04', '\u1A05', '\u1A06', '\u1A07', '\u1A10', '\u1A11', '\u1A12', '\u1A14', '\u1A13', '\u1A16'])

	var out=''
	for (var i=0; i<str.length-2; i++) {
		var inherent = false
		var ambiguous = false
		var ch = str[i]
		
		// add inherent vowel
		if (consonantSet.has(ch) && ! ivowelkillerSet.has(str[i+1])) inherent = true		
		if (ch == '\u1A15' && ivowelkillerSet.has(str[i+1])) ch = ''		
		if (typeof mapToISO[ch] !== 'undefined') { out += mapToISO[ch] }
		else { out += ch }
		if (inherent) { out += 'a' }
		if (ambiguous) { out += ':' }
		}

	return out.trim()
	}


var mapToISO = {
// consonants
'\u1A00':'k',
'\u1A01':'g',
'\u1A02':'ng',
'\u1A03':'ngk',
'\u1A0C':'c',
'\u1A0D':'j',
'\u1A0E':'ny',
'\u1A0F':'nyc',
'\u1A08':'t',
'\u1A09':'d',
'\u1A0A':'n',
'\u1A0B':'nr',
'\u1A04':'p',
'\u1A05':'b',
'\u1A06':'m',
'\u1A07':'mp',
'\u1A10':'y',
'\u1A11':'r',
'\u1A12':'l',
'\u1A14':'s',
'\u1A13':'w',
'\u1A16':'h',

// vowels
'\u1A15':'a',
'\u1A17':'i',
'\u1A18':'u',
'\u1A19':'e',
'\u1A1A':'o',
'\u1A1B':'\u0259',

// punctuation
'\u1A1E':' • ',
'\u1A1F':'.',

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
			ch = '\u0902'
			}
		else if (str.charAt(i) == '\u0303') { ch = '\u0901' }
		
		// anusvara before conjunct
		if (nasals.indexOf(ch) > -1 && consonants.indexOf(str.charAt(i-1)) == -1 && consonants.indexOf(str.charAt(i+1)) > -1 ) {
			switch (ch) {
				case 'ṅ': ch = 'ङ\u094D'; break
				case 'ñ': ch = 'ञ\u094D'; break
				case 'ṇ': ch = 'ण\u094D'; break
				case 'n': ch = 'न\u094D'; break
				case 'm': ch = 'म\u094D'; break
				}
			ch = '<span class=alts><span class=altfirst>&nbsp;\u0902</span><span class=altlast>'+ch+'</span></span>'
			conjunct = false
			}
		
		if (typeof mapToDeva[ch] != 'undefined') { out += mapToDeva[ch] }
		else { out += ch }
		if (conjunct) { out += '\u094D' }
		if (skipOne) { i++ }
		}

	return out.trim()
	}


var mapToDeva = {
'k': '\u0915', 
'K': '\u0916', 
'g': '\u0917', 
'G': '\u0918', 
'ṅ': '\u0919', 
'q': '\u0915\u093C', 
'X': '\u0916\u093C', 
'c': '\u091A', 
'C': '\u091B', 
'j': '\u091C', 
'J': '\u091D', 
'ñ': '\u091E', 
'ġ': '\u0917\u093C', 
'ṉ': '\u0929', 
'ṭ': '\u091F', 
'Ṭ': '\u0920', 
'ḍ': '\u0921', 
'Ḍ': '\u0922', 
'ṇ': '\u0923', 
'ṛ': '\u0921\u093C', 
'Ṛ': '\u0922\u093C', 
't': '\u0924', 
'T': '\u0925', 
'd': '\u0926', 
'D': '\u0927', 
'n': '\u0928', 
'ṟ': '\u0931', 
'ẏ': '\u092F\u093C', 
'p': '\u092A', 
'P': '\u092B', 
'b': '\u092C', 
'B': '\u092D', 
'm': '\u092E', 
'ḷ': '\u0933', 
'ḻ': '\u0934', 
'y': '\u092F', 
'r': '\u0930', 
'l': '\u0932', 
'v': '\u0935', 
'f': '\u092B\u093C', 
'z': '\u091C\u093C', 
'ś': '\u0936', 
'ṣ': '\u0937', 
's': '\u0938', 
'h': '\u0939', 
'?': '\u0979', '?': '\u097A', 
'ɠ': '\u097B', 
'ʄ': '\u097C', 
'ɗ': '\u097E', 
'ɓ': '\u097F',


'A': '',
'Ā': '\u093E',
'I': '\u093F',
'Ī': '\u0940',
'U': '\u0941',
'Ū': '\u0942',
'?': '\u0956',
'?': '\u0957',
'Ȓ': '\u0943',
'Ř': '\u0944',
'Ɫ': '\u0962',
'Ḹ': '\u0963',
'ê': '\u0945',
'E': '\u0946',
'Ē': '\u0947',
'Ɛ': '\u0948',
'Ô': '\u0949',
'O': '\u094A',
'Ō': '\u094B',
'Ʊ': '\u094C',
'?': '\u094F',
'?': '\u093A',
'?': '\u093B',
'?': '\u094E',



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
'\u094D':'',

// candrabindu
'\u0303': '\u0901',

// punctuation
'.': ' ।',
'\'': '\u093D',
'ḥ': '\u0903',
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
