function localtranscribe (direction, str) {
	
	if (direction == 'toTranslit') { return toTranslit(str) }
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'transcription') { return transcription(str) }
	}
		



function transliterate (str) { 
	str += '  '

str = str.replace(/،/g, ",")
str = str.replace(/؛/g, ";")
str = str.replace(/؟/g, "?")
str = str.replace(/٪/g, "%")
str = str.replace(/߀/g, "0")
str = str.replace(/߁/g, "1")
str = str.replace(/߂/g, "2")
str = str.replace(/߃/g, "3")
str = str.replace(/߄/g, "4")
str = str.replace(/߅/g, "5")
str = str.replace(/߆/g, "6")
str = str.replace(/߇/g, "7")
str = str.replace(/߈/g, "8")
str = str.replace(/߉/g, "9")
str = str.replace(/ߊ/g, "a")
str = str.replace(/ߋ/g, "e")
str = str.replace(/ߌ/g, "i")
str = str.replace(/ߍ/g, "ɛ")
str = str.replace(/ߎ/g, "u")
str = str.replace(/ߏ/g, "o")
str = str.replace(/ߐ/g, "ɔ")
str = str.replace(/ߑ/g, "ˣ")
str = str.replace(/ߒ/g, "ŋ")
str = str.replace(/ߓ/g, "b")
str = str.replace(/ߔ/g, "p")
str = str.replace(/ߕ/g, "t")
str = str.replace(/ߖ/g, "ʤ")
str = str.replace(/ߗ/g, "ʧ")
str = str.replace(/ߘ/g, "d")
str = str.replace(/ߙ/g, "r")
str = str.replace(/ߚ/g, "ṙ")
str = str.replace(/ߛ/g, "s")
str = str.replace(/ߜ/g, "gᵇ")
str = str.replace(/ߝ/g, "f")
str = str.replace(/ߞ/g, "k")
str = str.replace(/ߟ/g, "l")
str = str.replace(/ߠ/g, "ł")
str = str.replace(/ߡ/g, "m")
str = str.replace(/ߢ/g, "ɲ")
str = str.replace(/ߣ/g, "n")
str = str.replace(/ߤ/g, "h")
str = str.replace(/ߥ/g, "w")
str = str.replace(/ߦ/g, "y")
str = str.replace(/ߧ/g, "j")
str = str.replace(/߫/g, "¹")
str = str.replace(/߬/g, "²")
str = str.replace(/߭/g, "³")
str = str.replace(/߮/g, "⁴")
str = str.replace(/߯/g, "⁵")
str = str.replace(/߰/g, "⁶")
str = str.replace(/߱/g, "⁷")
str = str.replace(/߲/g, "x̃")
str = str.replace(/߳/g, "x̣")
str = str.replace(/ߴ/g, "⁸")
str = str.replace(/ߵ/g, "⁹")
str = str.replace(/߸/g, ",")
str = str.replace(/߹/g, "!")
str = str.replace(/ߺ/g, "_")

	return str.trim()
	}



function transcription (str) {

str = str.normalize('NFC')+' '

	// collect a list of punctuation, in order
	var punctuationSet = /!|\(|\)|\-|\.|:|\[|\]|\*|\/|\\|،|؟|«|»|‹|›|߸|߹|ߺ| /g
	var punctuationList = str.match(punctuationSet)
	str = str.replace(punctuationSet,' ')

	// handle consonant duplication
	var re = /(.)([\u0859]?)\u085B/g
	str = str.replace(re,'$1$1$2')  // shadda

str = str.replace(/ߊ߳/g, "ä")
str = str.replace(/ߋ߳/g, "ǝ̈")
str = str.replace(/ߎ߳/g, "ü")
str = str.replace(/ߓ߭/g, "bʰ")
str = str.replace(/ߕ߭/g, "ᵵ")
str = str.replace(/ߖ߭/g, "z")
str = str.replace(/ߖ߳/g, "ƶ")
str = str.replace(/ߗ߭/g, "ð")
str = str.replace(/ߘ߭/g, "đ")
str = str.replace(/ߙ߭/g, "ʀ")
str = str.replace(/ߙ߳/g, "dʰ")
str = str.replace(/ߛ߫/g, "ᵴ")
str = str.replace(/ߛ߭/g, "ʃ")
str = str.replace(/ߛ߳/g, "θ")
str = str.replace(/ߜ߫/g, "ɣ")
str = str.replace(/ߜ߭/g, "ɡ")
str = str.replace(/ߜ߳/g, "kᵖ")
str = str.replace(/ߝ߭/g, "v")
str = str.replace(/ߞ߫/g, "q")
str = str.replace(/ߞ߭/g, "x")
str = str.replace(/ߟ߭/g, "lʰ")
str = str.replace(/ߡ߭/g, "mʰ")
str = str.replace(/ߢ߭/g, "nʰ")
str = str.replace(/ߤ߭/g, "ḣ")
str = str.replace(/ߦ߭/g, "yʰ")

	// replace punctuation
	var ptr = 0
	var out = ''
	for (var c=0;c<str.length;c++) {
		if (str.charAt(c) == ' ') out += punctuationList[ptr++]
		else out += str.charAt(c)
		}
	str = out

str = transliterate(str)


return str.trim()
}






function OLDtranscription (str) { // this version for abgidas
    
str = str + '  '
str = str.normalize('NFC')

var consonants = new Set(['\uA98F', '\uA991', '\uA992', '\uA993', '\uA994', '\uA995', '\uA996', '\uA997', '\uA99B', '\uA99A', '\uA998', '\uA9A0', '\uA9A1', '\uA9A2', '\uA99D', '\uA9A4', '\uA99F', '\uA9A5', '\uA9A6', '\uA9A7', '\uA9A8', '\uA9A9', '\uA9AA', '\uA9AD', '\uA9AB', '\uA9B1', '\uA9AF', '\uA9AE', '\uA9B2', '\uA9B0', '\uA9A3', '\uA99E', '\uA999', '\uA99C', '\uA9BE', '\uA9BF'])
var vowelSet = new Set(['ꦴ', 'ꦶ', 'ꦸ', 'ꦺ', 'ꦺꦴ', 'ꦼ'])
var medialSet = new Set(['ꦽ', 'ꦾ', 'ꦿ'])
var finalSet = new Set(['ꦀ', 'ꦁ', 'ꦂ', 'ꦃ'])
var nuktaSet = new Set(['\uA9B3'])
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
        if (chars[ptr] === virama) hasVirama = true
        ptr++
        }
    
    //console.log(i,'chars:i',chars[i],'vsign',vowelsign, 'virama',hasVirama, 'nukta',hasNukta, 'ptr',chars[ptr])
    
    out += '\u200B'+chars[i]
    if (nuktas) out += nuktas
    if (consonants.has(chars[i]) && vowelsign === '' && hasVirama === false) vowelsign = 'a'
    //for (p=i+1;p<ptr;p++) if (chars[p] !== nukta) out += chars[p]
    out += medials + vowelsign + otherCombining + finals
    //if (vowelsign === 'a' && (chars[ptr] === 'ਇ' || chars[ptr] === 'ਉ')) out += ':'
    if (hasAddak) out += chars[ptr]
    
    i = ptr-1

    //console.log(out)
    }

str = out+'  '
console.log(out)

str = str.replace(/\uA9C0/g, "͓") // virama

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


// consonants
str = str.replace(/ߒ/g, "ṉ")
str = str.replace(/ߓ/g, "b")
str = str.replace(/ߔ/g, "p")
str = str.replace(/ߕ/g, "t")
str = str.replace(/ߖ/g, "ʤ")
str = str.replace(/ߗ/g, "ʧ")
str = str.replace(/ߘ/g, "d")
str = str.replace(/ߙ/g, "r")
str = str.replace(/ߚ/g, "ṙ")
str = str.replace(/ߛ/g, "s")
str = str.replace(/ߜ/g, "gᵇ")
str = str.replace(/ߝ/g, "f")
str = str.replace(/ߞ/g, "k")
str = str.replace(/ߟ/g, "l")
str = str.replace(/ߠ/g, "ł")
str = str.replace(/ߡ/g, "m")
str = str.replace(/ߢ/g, "ñ")
str = str.replace(/ߣ/g, "n")
str = str.replace(/ߤ/g, "h")
str = str.replace(/ߥ/g, "w")
str = str.replace(/ߦ/g, "y")
str = str.replace(/ߧ/g, "j")


// medials
str = str.replace(/ꦽ/g, "ṛĕ")
str = str.replace(/ꦾ/g, "ỵ")
str = str.replace(/ꦿ/g, "ṛ")

// finals
str = str.replace(/ꦀ/g, "ṁ")
str = str.replace(/ꦁ/g, "ṅ")
str = str.replace(/ꦂ/g, "ṙ")
str = str.replace(/ꦃ/g, "ḣ")

// independent vowels
str = str.replace(/ꦄ/g, "ạ")
str = str.replace(/ꦆ/g, "ị")
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
str = str.replace(/꧊/g, "|")
str = str.replace(/꧋/g, "|")
str = str.replace(/꧌/g, "(")
str = str.replace(/꧍/g, ")")
str = str.replace(/꧈/g, ",")
str = str.replace(/꧉/g, ".")
str = str.replace(/꧇/g, ":")
str = str.replace(/ꧏ/g, "2")



	return str.trim()


    }





