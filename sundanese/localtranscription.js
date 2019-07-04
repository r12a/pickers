function localtranscribe (direction, str) {
	
	if (direction == 'toLatin') { return toLatin(str) }
	if (direction == 'transliterate') { return transliterate(str) }
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







function OLDtransliterate (str) {
    
str = str + '  '
str = str.normalize('NFC')

var consonants = new Set(['ᮊ', 'ᮌ', 'ᮍ', 'ᮎ', 'ᮏ', 'ᮑ', 'ᮒ', 'ᮓ', 'ᮔ', 'ᮕ', 'ᮘ', 'ᮙ', 'ᮚ', 'ᮛ', 'ᮜ', 'ᮞ', 'ᮝ', 'ᮠ', 'ᮋ', 'ᮮ', 'ᮖ', 'ᮗ', 'ᮐ', 'ᮯ', 'ᮟ', '\u1BA1', '\u1BA2', '\u1BA3'])
var vowelSet = new Set(['ᮤ', 'ᮥ', 'ᮦ', 'ᮧ', 'ᮨ', 'ᮩ'])
var medialSet = new Set(['\u1BA1', '\u1BA2', '\u1BA3'])
var finalSet = new Set(['ᮀ', 'ᮁ', 'ᮂ'])
var nuktaSet = new Set([])
var viramaSet = new Set(['\u1BAA'])
var combChar = new Set(['ᮤ', 'ᮥ', 'ᮦ', 'ᮧ', 'ᮨ', 'ᮩ','\u1BA1', '\u1BA2', '\u1BA3','ᮀ', 'ᮁ', 'ᮂ', '\u1BAA'])

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

// correction for medial vocalic r
str = str.replace(/a​ꦽ​/g,'ꦽ​')

// do 'nuktas'
str = str.replace(/ᮋ/g, "q")
str = str.replace(/ᮐ/g, "z")
str = str.replace(/ᮖ/g, "f")
str = str.replace(/ᮗ/g, "v")
str = str.replace(/ᮟ/g, "k͜s")
str = str.replace(/ᮮ/g, "ẖ")
str = str.replace(/ᮯ/g, "š")



// basic consonants
str = str.replace(/ᮊ/g, "k")
str = str.replace(/ᮌ/g, "g")
str = str.replace(/ᮍ/g, "ṅ")
str = str.replace(/ᮎ/g, "c")
str = str.replace(/ᮏ/g, "j")
str = str.replace(/ᮑ/g, "ñ")
str = str.replace(/ᮒ/g, "t")
str = str.replace(/ᮓ/g, "d")
str = str.replace(/ᮔ/g, "n")
str = str.replace(/ᮕ/g, "p")
str = str.replace(/ᮘ/g, "b")
str = str.replace(/ᮙ/g, "m")
str = str.replace(/ᮚ/g, "y")
str = str.replace(/ᮛ/g, "r")
str = str.replace(/ᮜ/g, "l")
str = str.replace(/ᮝ/g, "w")
str = str.replace(/ᮞ/g, "s")
str = str.replace(/ᮠ/g, "h")


// medials
str = str.replace(/ᮡ/g, "y̆")
str = str.replace(/ᮢ/g, "r̆")
str = str.replace(/ᮣ/g, "l̆")



// finals
str = str.replace(/ᮀ/g, "ṅ̽")
str = str.replace(/ᮁ/g, "r̽")
str = str.replace(/ᮂ/g, "h̽")


// independent vowels
str = str.replace(/ᮃ/g, "ạ")
str = str.replace(/ᮄ/g, "ị")
str = str.replace(/ᮅ/g, "ụ")
str = str.replace(/ᮆ/g, "ẹ́")
str = str.replace(/ᮇ/g, "ọ")
str = str.replace(/ᮈ/g, "ẹ")
str = str.replace(/ᮉ/g, "ẹ̆")


// vowel signs
str = str.replace(/ᮤ/g, "i")
str = str.replace(/ᮥ/g, "u")
str = str.replace(/ᮦ/g, "é")
str = str.replace(/ᮧ/g, "o")
str = str.replace(/ᮨ/g, "e")
str = str.replace(/ᮩ/g, "ĕ")


// digits
str = str.replace(/᮰/g, "0")
str = str.replace(/᮱/g, "1")
str = str.replace(/᮲/g, "2")
str = str.replace(/᮳/g, "3")
str = str.replace(/᮴/g, "4")
str = str.replace(/᮵/g, "5")
str = str.replace(/᮶/g, "6")
str = str.replace(/᮷/g, "7")
str = str.replace(/᮸/g, "8")
str = str.replace(/᮹/g, "9")


// punctuation
str = str.replace(/꧊/g, "•")
str = str.replace(/꧋/g, "•")
str = str.replace(/꧌/g, "(")
str = str.replace(/꧍/g, ")")
str = str.replace(/꧈/g, ",")
str = str.replace(/꧉/g, ".")
str = str.replace(/꧇/g, ":")
str = str.replace(/ꧏ/g, "²")



	return str.trim()


    }












function inSet (group, ch) {
	if (group.indexOf(ch) > -1) return true
	else { return false }
	}



function toLatin (str) {
	str += '  '
	var ivowelkillerSet = new Set(['\u1BAA', '\u1BAC', '\u1BAD', '\u1BA1', '\u1BA2', '\u1BA3', '\u1BA4', '\u1BA5', '\u1BA6', '\u1BA7', '\u1BA8', '\u1BA9', '\u1BAB']) // all characters that would kill the inherent vowel
	var consonantSet = new Set(['\u1B8A', '\u1B8C', '\u1B8D', '\u1B8E', '\u1B8F', '\u1B91', '\u1B92', '\u1B93', '\u1B94', '\u1B95', '\u1B98', '\u1B99', '\u1B9A', '\u1B9C', '\u1B9B', '\u1B9E', '\u1B9D', '\u1BA0', '\u1B8B', '\u1BAE', '\u1B96', '\u1B97', '\u1B90', '\u1BAF', '\u1B9F', '\u1BBD', '\u1BA1', '\u1BA2', '\u1BA3'])

	var out=''
	for (var i=0; i<str.length-2; i++) {
		var inherent = false
		var ambiguous = false
		var ch = str[i]
		
		// add inherent vowel
		if (consonantSet.has(ch) && ! ivowelkillerSet.has(str[i+1])) inherent = true		
		
		if (typeof mapToISO[ch] !== 'undefined') { out += mapToISO[ch] }
		else { out += ch }
		if (inherent) { out += 'a' }
		if (ambiguous) { out += ':' }
		}

	return out.trim()
	}


var mapToISO = {
// consonants
'\u1B8A':'k',
'\u1B8C':'g',
'\u1B8D':'ng',
'\u1B8E':'c',
'\u1B8F':'j',
'\u1B91':'ny',
'\u1B92':'t',
'\u1B93':'d',
'\u1B94':'n',
'\u1B95':'p',
'\u1B98':'b',
'\u1B99':'m',
'\u1B9A':'y',
'\u1B9C':'l',
'\u1B9B':'r',
'\u1B9E':'s',
'\u1B9D':'w',
'\u1BA0':'h',
'\u1B8B':'q',
'\u1BAE':'kh',
'\u1B96':'f',
'\u1B97':'v',
'\u1B90':'z',
'\u1BAF':'sy',
'\u1B9F':'x',

// medials and finals
'\u1BA1':'y',
'\u1BA2':'r',
'\u1BA3':'l',
'\u1B80':'ng',
'\u1B81':'r',
'\u1B82':'h',

// vowel signs
'\u1BA4':'i',
'\u1BA5':'u',
'\u1BA6':'\u00E9',
'\u1BA7':'o',
'\u1BA8':'e',
'\u1BA9':'eu',

// independent vowels
'\u1B83':'a',
'\u1B84':'i',
'\u1B85':'u',
'\u1B86':'\u00E9',
'\u1B87':'o',
'\u1B88':'e',
'\u1B89':'eu',

//virama
'\u1BAA':'',
'\u1BAB':'',

// punctuation
'।':'.',
'\u093D':'\'' ,
'\u0903':'ḥ',

// numbers
'\u1BB0':'0',
'\u1BB1':'1',
'\u1BB2':'2',
'\u1BB3':'3',
'\u1BB4':'4',
'\u1BB5':'5',
'\u1BB6':'6',
'\u1BB7':'7',
'\u1BB8':'8',
'\u1BB9':'9',

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
