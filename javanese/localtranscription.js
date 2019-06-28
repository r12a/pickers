/* jshint strict: false */
/* globals cl, langs */


function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'toLatin') { return toLatin(str) }
	if (direction == 'toDeva') { return toDeva(str) }
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



/*
function transliterate (str) {

str += ' '

str = str.replace(/\u200B/g, "␣")
str = str.replace(/\u200C/g, "ₓ")
str = str.replace(/\u200D/g, "₊")
str = str.replace(/ꦿ/g, "r̆")
str = str.replace(/ꦀ/g, "m̽")
str = str.replace(/ꦁ/g, "ŋ̽")
str = str.replace(/ꦂ/g, "r̽")
str = str.replace(/ꦃ/g, "h̽")
str = str.replace(/ꦄ/g, "ạ")
str = str.replace(/ꦅ/g, "ị̂")
str = str.replace(/ꦆ/g, "ị")
str = str.replace(/ꦇ/g, "ị̄")
str = str.replace(/ꦈ/g, "ụ")
str = str.replace(/ꦉ/g, "r̥")
str = str.replace(/ꦊ/g, "l̥")
str = str.replace(/ꦋ/g, "ŀ̥")
str = str.replace(/ꦌ/g, "ẹ")
str = str.replace(/ꦍ/g, "")
str = str.replace(/ꦎ/g, "ọ")
str = str.replace(/ꦏ/g, "k")
str = str.replace(/ꦐ/g, "q")
str = str.replace(/ꦑ/g, "K")
str = str.replace(/ꦒ/g, "g")
str = str.replace(/ꦓ/g, "G")
str = str.replace(/ꦔ/g, "ŋ")
str = str.replace(/ꦕ/g, "ʧ")
str = str.replace(/ꦖ/g, "C")
str = str.replace(/ꦗ/g, "ʤ")
str = str.replace(/ꦘ/g, "Ñ")
str = str.replace(/ꦙ/g, "J̱")
str = str.replace(/ꦚ/g, "ɲ")
str = str.replace(/ꦛ/g, "ʈ")
str = str.replace(/ꦜ/g, "Ṯ")
str = str.replace(/ꦝ/g, "ɖ")
str = str.replace(/ꦞ/g, "Ḓ")
str = str.replace(/ꦟ/g, "N")
str = str.replace(/ꦠ/g, "t")
str = str.replace(/ꦡ/g, "T")
str = str.replace(/ꦢ/g, "d")
str = str.replace(/ꦣ/g, "Ḏ")
str = str.replace(/ꦤ/g, "n")
str = str.replace(/ꦥ/g, "p")
str = str.replace(/ꦦ/g, "P")
str = str.replace(/ꦧ/g, "b")
str = str.replace(/ꦨ/g, "B")
str = str.replace(/ꦩ/g, "m")
str = str.replace(/ꦪ/g, "y")
str = str.replace(/ꦫ/g, "r")
str = str.replace(/ꦬ/g, "ṙ")
str = str.replace(/ꦭ/g, "l")
str = str.replace(/ꦮ/g, "w")
str = str.replace(/ꦯ/g, "S")
str = str.replace(/ꦰ/g, "S̱")
str = str.replace(/ꦱ/g, "s")
str = str.replace(/ꦲ/g, "h")
str = str.replace(/꦳/g, "ˑ")
str = str.replace(/ꦴ/g, "ː")
str = str.replace(/ꦵ/g, "ȯ")
str = str.replace(/ꦶ/g, "i")
str = str.replace(/ꦷ/g, "ī")
str = str.replace(/ꦸ/g, "u")
str = str.replace(/ꦹ/g, "ū")
str = str.replace(/ꦺ/g, "e")
str = str.replace(/ꦻ/g, "aʲ")
str = str.replace(/ꦼ/g, "ə")
str = str.replace(/ꦽ/g, "r̥̆")
str = str.replace(/ꦾ/g, "y̆")
str = str.replace(/꧀/g, "͓")
str = str.replace(/꧁/g, "<ᵗ")
str = str.replace(/꧂/g, "ᵗ>")
str = str.replace(/꧃/g, "{ʰ")
str = str.replace(/꧄/g, "[ʰ")
str = str.replace(/꧅/g, "<ʰ")
str = str.replace(/꧆/g, "°")
str = str.replace(/꧇/g, ":")
str = str.replace(/꧈/g, ",")
str = str.replace(/꧉/g, ".")
str = str.replace(/꧊/g, "|")
str = str.replace(/꧋/g, "¶")
str = str.replace(/꧌/g, "(")
str = str.replace(/꧍/g, ")")
str = str.replace(/ꧏ/g, "²")
str = str.replace(/꧐/g, "0")
str = str.replace(/꧑/g, "1")
str = str.replace(/꧒/g, "2")
str = str.replace(/꧓/g, "3")
str = str.replace(/꧔/g, "4")
str = str.replace(/꧕/g, "5")
str = str.replace(/꧖/g, "6")
str = str.replace(/꧗/g, "7")
str = str.replace(/꧘/g, "8")
str = str.replace(/꧙/g, "9")
str = str.replace(/꧞/g, "")
str = str.replace(/꧟/g, "")

return str.trim()
}

*/











		
function inSet (group, ch) {
	if (group.indexOf(ch) > -1) return true
	else { return false }
	}





function OLDtransliterate (str) {
    
str = str + '  '
str = str.normalize('NFC')

var consonants = new Set(['\uA98F', '\uA991', '\uA992', '\uA993', '\uA994', '\uA995', '\uA996', '\uA997', '\uA99B', '\uA99A', '\uA998', '\uA9A0', '\uA9A1', '\uA9A2', '\uA99D', '\uA9A4', '\uA99F', '\uA9A5', '\uA9A6', '\uA9A7', '\uA9A8', '\uA9A9', '\uA9AA', '\uA9AD', '\uA9AB', '\uA9B1', '\uA9AF', '\uA9AE', '\uA9B2', '\uA9B0', '\uA9A3', '\uA99E', '\uA999', '\uA99C', '\uA9BE', '\uA9BF'])
var vowelSet = new Set(['ꦴ', 'ꦶ', 'ꦸ', 'ꦺ', 'ꦺꦴ', 'ꦼ'])
var medialSet = new Set(['ꦽ', 'ꦾ', 'ꦿ'])
var finalSet = new Set(['ꦀ', 'ꦁ', 'ꦂ', 'ꦃ'])
var nuktaSet = new Set(['\uA9B3'])
var viramaSet = new Set(['\uA9C0'])
var combChar = new Set(['ꦴ', 'ꦶ', 'ꦸ', 'ꦺ', 'ꦺꦴ', 'ꦼ', 'ꦾ', 'ꦿ','\uA9C0', '\uA9B3'])

var addak = '\u0A71'
var virama = '\uA9C0'


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

str = str.replace(/\uA9C0/g, "͓") // virama
str = str.replace(/\u200B/g, " ") // virama

// correction for medial vocalic r
str = str.replace(/a​ꦽ​/g,'ꦽ​')

// do 'nuktas'
str = str.replace(/ꦲ꦳/g, "ħ")
str = str.replace(/ꦏ꦳/g, "x")
str = str.replace(/ꦢ꦳/g, "ð")
str = str.replace(/ꦗ꦳/g, "z")
str = str.replace(/ꦱ꦳/g, "ʃ")
str = str.replace(/ꦒ꦳/g, "ɣ")
str = str.replace(/ꦥ꦳/g, "f")
str = str.replace(/ꦔ꦳/g, "ʔ")



str = str.replace(/ꦏ/g, "k")
str = str.replace(/ꦑ/g, "K")
str = str.replace(/ꦒ/g, "g")
str = str.replace(/ꦓ/g, "G")
str = str.replace(/ꦔ/g, "ṅ")
str = str.replace(/ꦕ/g, "c")
str = str.replace(/ꦖ/g, "C")
str = str.replace(/ꦗ/g, "j")
str = str.replace(/ꦛ/g, "ṭ")
str = str.replace(/ꦚ/g, "ñ")
str = str.replace(/ꦘ/g, "Ñ")
str = str.replace(/ꦠ/g, "t")
str = str.replace(/ꦡ/g, "T")
str = str.replace(/ꦢ/g, "d")
str = str.replace(/ꦝ/g, "ḍ")
str = str.replace(/ꦤ/g, "n")
str = str.replace(/ꦟ/g, "N")
str = str.replace(/ꦥ/g, "p")
str = str.replace(/ꦦ/g, "P")
str = str.replace(/ꦧ/g, "b")
str = str.replace(/ꦨ/g, "B")
str = str.replace(/ꦩ/g, "m")
str = str.replace(/ꦪ/g, "y")
str = str.replace(/ꦭ/g, "l")
str = str.replace(/ꦫ/g, "r")
str = str.replace(/ꦱ/g, "s")
str = str.replace(/ꦯ/g, "S")
str = str.replace(/ꦮ/g, "w")
str = str.replace(/ꦲ/g, "h")
str = str.replace(/ꦉ/g, "rĕ")
str = str.replace(/ꦊ/g, "lĕ")
str = str.replace(/ꦰ/g, "S̱")
str = str.replace(/ꦣ/g, "Ḏ")
str = str.replace(/ꦞ/g, "Ḓ")
str = str.replace(/ꦙ/g, "J̱")
str = str.replace(/ꦜ/g, "Ṯ")

// medials
str = str.replace(/ꦽ/g, "r̥̆")
str = str.replace(/ꦾ/g, "y̆")
str = str.replace(/ꦿ./g, "r̆")


// finals
str = str.replace(/ꦀ/g, "m̽")
str = str.replace(/ꦁ/g, "ṅ̽")
str = str.replace(/ꦂ/g, "r̽")
str = str.replace(/ꦃ/g, "h̽")

// independent vowels
str = str.replace(/ꦄ/g, "ạ")
str = str.replace(/ꦆ/g, "ị")
str = str.replace(/ꦅ/g, "ị̈")
str = str.replace(/ꦈ/g, "ụ")
str = str.replace(/ꦌ/g, "ẹ")
str = str.replace(/ꦎ/g, "ọ")

// vowel signs
str = str.replace(/ꦺꦴ/g, "o")
str = str.replace(/ꦴ/g, "ā")
str = str.replace(/ꦶ/g, "i")
str = str.replace(/ꦸ/g, "u")
str = str.replace(/ꦺ/g, "é")
str = str.replace(/ꦼ/g, "e")

// digits
str = str.replace(/꧐/g, "0")
str = str.replace(/꧑/g, "1")
str = str.replace(/꧒/g, "2")
str = str.replace(/꧓/g, "3")
str = str.replace(/꧔/g, "4")
str = str.replace(/꧕/g, "5")
str = str.replace(/꧖/g, "6")
str = str.replace(/꧗/g, "7")
str = str.replace(/꧘/g, "8")
str = str.replace(/꧙/g, "9")

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






function toLatin (str) {
    // Convert javanese text to a transcription ressembling latin indonesian

	str = transliterate(str)
    str += '  '
    

str = str.replace(/ᵃ/g, "a")

    // consonants
str = str.replace(/h/g, "[h{∅]")
str = str.replace(/k/g, "k")
str = str.replace(/q/g, "q")
str = str.replace(/g/g, "g")
str = str.replace(/ŋ/g, "ng")
str = str.replace(/c/g, "c")
str = str.replace(/j/g, "j")
str = str.replace(/ñ/g, "ny")
str = str.replace(/ṭ/g, "th")
str = str.replace(/ḍ/g, "dh")
str = str.replace(/t/g, "t")
str = str.replace(/d/g, "d")
str = str.replace(/n/g, "n")
str = str.replace(/p/g, "p")
str = str.replace(/b/g, "b")
str = str.replace(/m/g, "m")
str = str.replace(/y/g, "y")
str = str.replace(/l/g, "l")
str = str.replace(/r/g, "r")
str = str.replace(/s/g, "s")
str = str.replace(/w/g, "w")
str = str.replace(/rĕ/g, "re")
str = str.replace(/lĕ/g, "le")
str = str.replace(/K/g, "K")
str = str.replace(/G/g, "G")
str = str.replace(/C/g, "C")
str = str.replace(/Ñ/g, "NY")
str = str.replace(/T/g, "T")
str = str.replace(/N/g, "N")
str = str.replace(/P/g, "P")
str = str.replace(/B/g, "B")
str = str.replace(/S/g, "S")
str = str.replace(/S̱/g, "S")
str = str.replace(/Ḏ/g, "D")
str = str.replace(/Ḓ/g, "DH")
str = str.replace(/J̱/g, "J")
str = str.replace(/Ṯ/g, "TH")

str = str.replace(/ṛĕ/g, "re")
str = str.replace(/ỵ/g, "y")
str = str.replace(/ṛ/g, "r")

str = str.replace(/ṁ/g, "m")
str = str.replace(/ṅ/g, "ng")
str = str.replace(/ṙ/g, "r")
str = str.replace(/ḣ/g, "h")

str = str.replace(/ạ/g, "a")
str = str.replace(/ị/g, "i")
str = str.replace(/ị̄/g, "i")
str = str.replace(/ụ/g, "u")
str = str.replace(/ẹ/g, "e")
str = str.replace(/ọ/g, "o")

str = str.replace(/ā/g, "a")
str = str.replace(/i/g, "i")
str = str.replace(/u/g, "u")
str = str.replace(/é/g, "e")
str = str.replace(/e/g, "e")
str = str.replace(/ī/g, "i")
str = str.replace(/ū/g, "u")
str = str.replace(/o/g, "o")

str = str.replace(/ħ/g, "h")
str = str.replace(/x/g, "x")
str = str.replace(/ð/g, "ð")
str = str.replace(/z/g, "z")
str = str.replace(/ʃ/g, "sh")
str = str.replace(/ɣ/g, "gh")
str = str.replace(/f/g, "f")


str = str.replace(/\u0353/g, "") // virama

console.log(str)

	// add markup for ambiguous cases
	str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
	str = str.replace(/\|/g,'</span><span class=alt>')
	str = str.replace(/\{/g,'</span><span class=altlast>')
	str = str.replace(/\]/g,'</span></span>')

	return str.trim()

}





function toLatinOLD (str) {
	str += '  '
	var ivowelkillerSet = new Set(['\uA9C0', '\uA9BD', '\uA9BE', '\uA9BF', '\uA9B6', '\uA9B8', '\uA9BA', '\uA9BC', '\uA9B4','O']) // all characters that would kill the inherent vowel
	var consonantSet = new Set(['\uA98F', '\uA991', '\uA992', '\uA993', '\uA994', '\uA995', '\uA996', '\uA997', '\uA99B', '\uA99A', '\uA998', '\uA9A0', '\uA9A1', '\uA9A2', '\uA99D', '\uA9A4', '\uA99F', '\uA9A5', '\uA9A6', '\uA9A7', '\uA9A8', '\uA9A9', '\uA9AA', '\uA9AD', '\uA9AB', '\uA9B1', '\uA9AF', '\uA9AE', '\uA9B2', '\uA9B0', '\uA9A3', '\uA99E', '\uA999', '\uA99C', '\uA9BE', '\uA9BF'])
	var finalsSet = new Set(['\uA980', '\uA981', '\uA982', '\uA983']) // syllable final diacritics

	// preprocess tricky bits
	str = str.replace(/\uA9BA\uA9B4/g,'O')
	
	var out=''
	for (var i=0; i<str.length-2; i++) {
		var inherent = false
		var ambiguous = false
		var ch = str[i]
		
		// add inherent vowel
		if (consonantSet.has(ch) && ! ivowelkillerSet.has(str[i+1])) inherent = true		
		
		if (typeof mapToISO[ch] !== 'undefined') { out += mapToISO[ch] }
		else { out += ch }
		if (inherent) { 
			if (finalsSet.has(str[i+1])) out += 'a' 
			else out += 'a'
			}
		if (ambiguous) { out += ':' }
		}

	return out.trim()
	}


var mapToISO = {
// consonants
'\uA98F':'k',
'\uA991':'K',
'\uA992':'g',
'\uA993':'G',
'\uA994':'ng',
'\uA995':'c',
'\uA996':'C',
'\uA997':'j',
'\uA99A':'ny',
'\uA998':'Ny',
'\uA9A0':'t',
'\uA9A1':'T',
'\uA9A2':'d',
'\uA99D':'D',
'\uA9A4':'n',
'\uA99F':'N',
'\uA99B':'th',
'\uA9A5':'p',
'\uA9A6':'P',
'\uA9A7':'b',
'\uA9A8':'B',
'\uA9A9':'m',
'\uA9AA':'y',
'\uA9AD':'l',
'\uA9AB':'r',
'\uA9B1':'s',
'\uA9AF':'S',
'\uA9AE':'w',
'\uA9B2':'h',
'\uA9B0':'S',
'\uA9A3':'D',
'\uA99E':'DH',
'\uA999':'J',
'\uA99C':'TH',
'\uA989':'re',
'\uA98A':'le',

// medials and finals
'\uA9BD':'re',
'\uA9BE':'y',
'\uA9BF':'r',
'\uA980':'m',
'\uA981':'ng',
'\uA982':'r',
'\uA983':'h',

// vowel signs
'\uA9B6':'i',
'\uA9B8':'u',
'\uA9BA':'\u00E9',
'\uA9BC':'e',
'O':'o',

// independent vowels
'\uA984':'a',
'\uA986':'i',
'\uA988':'u',
'\uA98C':'e',
'\uA98E':'o',

//virama
'\uA9C0':'',

// punctuation
'\uA9CA':'|',
'\uA9CB':'\u00A7',
'\uA9CC':'(',
'\uA9CD':')',
'\uA9C8':',',
'\uA9C9':'.',
'\uA9C7':':',
'\uA9CF':'2',

// numbers
'\uA9D0':'0',
'\uA9D1':'1',
'\uA9D2':'2',
'\uA9D3':'3',
'\uA9D4':'4',
'\uA9D5':'5',
'\uA9D6':'6',
'\uA9D7':'7',
'\uA9D8':'8',
'\uA9D9':'9',

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
