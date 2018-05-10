function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'toISO15919') { return toISO15919(str) }
	if (direction == 'toDeva') { return toDeva(str) }
	}




function transliterate (str) { // this version for abgidas
    
str = str + '  '
//str = str.normalize('NFC')

str = str.replace(/\u0ACD/g, "͓") // virama

// nuktas
str = str.replace(/ਕ\u03AC/g, "q")
str = str.replace(/ਖ\u03AC/g, "x")
str = str.replace(/ਗ\u03AC/g, "ġ")
str = str.replace(/ਲ\u03AC/g, "ḷ")
str = str.replace(/ਜ\u03AC/g, "z")
str = str.replace(/ਫ\u03AC/g, "f")

str = str.replace(/ਖ਼/g, "x")
str = str.replace(/ਗ਼/g, "ġ")
str = str.replace(/ਲ਼/g, "ḷ")
str = str.replace(/ਸ਼/g, "ś")
str = str.replace(/ਜ਼/g, "z")
str = str.replace(/ਫ਼/g, "f")
str = str.replace(/઼/g, "̣")


// consonants 
str = str.replace(/ਕ/g, "k")
str = str.replace(/ਖ/g, "kʰ")
str = str.replace(/ਗ/g, "g")
str = str.replace(/ਘ/g, "gʰ")
str = str.replace(/ਙ/g, "ṅ")
str = str.replace(/ਚ/g, "c")
str = str.replace(/ਛ/g, "cʰ")
str = str.replace(/ਜ/g, "j")
str = str.replace(/ਝ/g, "jʰ")
str = str.replace(/ਞ/g, "ñ")
str = str.replace(/ਟ/g, "ṭ")
str = str.replace(/ਠ/g, "ṭʰ")
str = str.replace(/ਡ/g, "ḍ")
str = str.replace(/ਢ/g, "ḍʰ")
str = str.replace(/ਣ/g, "ṇ")
str = str.replace(/ਤ/g, "t")
str = str.replace(/ਥ/g, "tʰ")
str = str.replace(/ਦ/g, "d")
str = str.replace(/ਧ/g, "dʰ")
str = str.replace(/ਨ/g, "n")
str = str.replace(/ਪ/g, "p")
str = str.replace(/ਫ/g, "pʰ")
str = str.replace(/ਬ/g, "b")
str = str.replace(/ਭ/g, "bʰ")
str = str.replace(/ਮ/g, "m")
str = str.replace(/ਯ/g, "y")
str = str.replace(/ਰ/g, "r")
str = str.replace(/ੜ/g, "ṛ")
str = str.replace(/ਲ/g, "l")
str = str.replace(/ਵ/g, "v")
str = str.replace(/ਸ/g, "s")
str = str.replace(/ਹ/g, "h")

str = str.replace(/ੲ/g, "‘")
str = str.replace(/ੳ/g, "’")
str = str.replace(/ਅ/g, "a")


// medials

// finals

// vocalics

// independent vowels
str = str.replace(/ਆ/g, "ạ̄")
str = str.replace(/ਇ/g, "ị")
str = str.replace(/ਈ/g, "ị̄")
str = str.replace(/ਉ/g, "ụ")
str = str.replace(/ਊ/g, "ụ̄")
str = str.replace(/ਏ/g, "ẹ")
str = str.replace(/ਐ/g, "ạʲ")
str = str.replace(/ਓ/g, "ọ")
str = str.replace(/ਔ/g, "ạʷ")


// vowel signs
str = str.replace(/ਾ/g, "ā")
str = str.replace(/ਿ/g, "i")
str = str.replace(/ੀ/g, "ī")
str = str.replace(/ੁ/g, "u")
str = str.replace(/ੂ/g, "ū")
str = str.replace(/ੇ/g, "e")
str = str.replace(/ੈ/g, "aʲ")
str = str.replace(/ੋ/g, "o")
str = str.replace(/ੌ/g, "aʷ")


// diacritics
str = str.replace(/੍/g, "͓")
str = str.replace(/਼/g, "̣")
str = str.replace(/ਁ/g, "m̐")
str = str.replace(/ਂ/g, "ṁ")
str = str.replace(/ਃ/g, "ḥ")
str = str.replace(/ੵ/g, "ʸ")
str = str.replace(/ੑ/g, "ˊ")
str = str.replace(/ੰ/g, "ṃ")
str = str.replace(/ੱ/g, "ʺ")


// digits
str = str.replace(/੦/g, "0")
str = str.replace(/੧/g, "1")
str = str.replace(/੨/g, "2")
str = str.replace(/੩/g, "3")
str = str.replace(/੪/g, "4")
str = str.replace(/੫/g, "5")
str = str.replace(/੬/g, "6")
str = str.replace(/੭/g, "7")
str = str.replace(/੮/g, "8")
str = str.replace(/੯/g, "9")


// punctuation
str = str.replace(/।/g, ",")
str = str.replace(/॥/g, ".")





/*  REMOVED BECAUSE INHERENT VOWEL KILLING NOT SYSTEMATIC IN GURU
// remove inherent vowel where necessary
str = str.replace(/ᵃ͓/g, "͓")
str = str.replace(/ᵒ͓/g, "͓")
str = str.replace(/ᵒ͓/g, "͓")

str = str.replace(/[ᵃ|ᵒ]ā/g, "ā")
str = str.replace(/[ᵃ|ᵒ]ɑ/g, "ɑ")
str = str.replace(/[ᵃ|ᵒ]æ/g, "æ")
str = str.replace(/[ᵃ|ᵒ]ɛ/g, "ɛ")
str = str.replace(/[ᵃ|ᵒ]ə/g, "ə")
str = str.replace(/[ᵃ|ᵒ]e/g, "e")
str = str.replace(/[ᵃ|ᵒ]ø/g, "ø")
str = str.replace(/[ᵃ|ᵒ]i/g, "i")
str = str.replace(/[ᵃ|ᵒ]ī/g, "ī")
str = str.replace(/[ᵃ|ᵒ]ɯ/g, "ɯ")
str = str.replace(/[ᵃ|ᵒ]ʊ/g, "ʊ")
str = str.replace(/[ᵃ|ᵒ]o/g, "o")
str = str.replace(/[ᵃ|ᵒ]ɔ/g, "ɔ")
str = str.replace(/[ᵃ|ᵒ]u/g, "u")
str = str.replace(/[ᵃ|ᵒ]ū/g, "ū")
str = str.replace(/[ᵃ|ᵒ]y/g, "y")
str = str.replace(/[ᵃ|ᵒ]ä/g, "ä")
str = str.replace(/[ᵃ|ᵒ]ʝ/g, "ʝ")
str = str.replace(/[ᵃ|ᵒ]w/g, "w")
str = str.replace(/[ᵃ|ᵒ]r̥/g, "r̥")
*/


	return str.trim()


    }






function transliterateMark2 (str) {

str = str + '  '
str = str.normalize('NFC')

var consonants = new Set(['ਕ', 'ਖ', 'ਗ', 'ਘ', 'ਙ', 'ਖ਼', 'ਚ', 'ਛ', 'ਜ', 'ਝ', 'ਞ', 'ਗ਼', 'ਟ', 'ਠ', 'ਡ', 'ਢ', 'ਣ', 'ੜ', 'ਤ', 'ਥ', 'ਦ', 'ਧ', 'ਨ', 'ਲ਼', 'ਪ', 'ਫ', 'ਬ', 'ਭ', 'ਮ', 'ਫ਼', 'ਯ', 'ਰ', 'ਲ', 'ਵ', 'ਜ਼', 'ਸ਼', 'ਸ', 'ਹ', '\u0A3C'])
var vowelSet = new Set(['\u0A3E', '\u0A3F', '\u0A40', '\u0A41', '\u0A42', '\u0A47', '\u0A48', '\u0A4B', '\u0A4C'])
var medialSet = new Set(['ꦽ', 'ꦾ', 'ꦿ'])
var finalSet = new Set(['ꦀ', 'ꦁ', 'ꦂ', 'ꦃ'])
var nuktaSet = new Set(['\u0A3C'])
var combChar = new Set(['\u{A4D}', '\u{A75}', '\u{A51}', '\u{A3C}', '\u{A3E}', '\u{A3F}', '\u{A40}', '\u{A41}', '\u{A42}', '\u{A47}', '\u{A48}', '\u{A4B}', '\u{A4C}', '\u{A70}', '\u{A71}', '\u{A01}', '\u{A02}', '\u{A03}'])

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
    
    out += chars[i] // '\u200B'+chars[i]
    if (nuktas) out += nuktas
    if (consonants.has(chars[i]) && vowelsign === '' && hasVirama === false) vowelsign = 'a'
    out += medials + vowelsign + otherCombining + finals
    if (vowelsign === 'a' && (chars[ptr] === 'ਇ' || chars[ptr] === 'ਉ')) out += ':'
    if (hasAddak) out += chars[ptr]
    
    i = ptr-1

    //console.log(out)
    }

str = out+'  '
console.log(out)

str = str.replace(/\uA9C0/g, "͓") // virama


str = str.replace(/\u0A71/g, "") // remove addak

// do nuktas
str = str.replace(/ਖ਼/g, "k͟h")
str = str.replace(/ਗ਼/g, "ġ")
str = str.replace(/ੜ/g, "ṛ")
str = str.replace(/ਲ਼/g, "ḷ")
str = str.replace(/ਫ਼/g, "f")
str = str.replace(/ਜ਼/g, "z")


str = str.replace(/ਕ/g, "k")
str = str.replace(/ਖ/g, "kʰ")
str = str.replace(/ਗ/g, "g")
str = str.replace(/ਘ/g, "gʰ")
str = str.replace(/ਙ/g, "ṅ")
str = str.replace(/ਚ/g, "c")
str = str.replace(/ਛ/g, "cʰ")
str = str.replace(/ਜ/g, "j")
str = str.replace(/ਝ/g, "jʰ")
str = str.replace(/ਞ/g, "ñ")
str = str.replace(/ਟ/g, "ṭ")
str = str.replace(/ਠ/g, "ṭʰ")
str = str.replace(/ਡ/g, "ḍ")
str = str.replace(/ਢ/g, "ḍʰ")
str = str.replace(/ਣ/g, "ṇ")
str = str.replace(/ਤ/g, "t")
str = str.replace(/ਥ/g, "tʰ")
str = str.replace(/ਦ/g, "d")
str = str.replace(/ਧ/g, "dʰ")
str = str.replace(/ਨ/g, "n")
str = str.replace(/ਪ/g, "p")
str = str.replace(/ਫ/g, "pʰ")
str = str.replace(/ਬ/g, "b")
str = str.replace(/ਭ/g, "bʰ")
str = str.replace(/ਮ/g, "m")
str = str.replace(/ਯ/g, "y")
str = str.replace(/ਰ/g, "r")
str = str.replace(/ਲ/g, "l")
str = str.replace(/ਵ/g, "v")
str = str.replace(/ਸ਼/g, "ś")
str = str.replace(/ਸ/g, "s")
str = str.replace(/ਹ/g, "h")

str = str.replace(/ਅ/g, "a")
str = str.replace(/ਆ/g, "ā")
str = str.replace(/ਇ/g, "i")
str = str.replace(/ਈ/g, "ī")
str = str.replace(/ਉ/g, "u")
str = str.replace(/ਊ/g, "ū")
str = str.replace(/ਏ/g, "ē")
str = str.replace(/ਐ/g, "ai")
str = str.replace(/ਓ/g, "ō")
str = str.replace(/ਔ/g, "au")

str = str.replace(/ਾ/g, "ā")
str = str.replace(/ਿ/g, "i")
str = str.replace(/ੀ/g, "ī")
str = str.replace(/ੁ/g, "u")
str = str.replace(/ੂ/g, "ū")
str = str.replace(/ੇ/g, "ē")
str = str.replace(/ੈ/g, "ai")
str = str.replace(/ੋ/g, "ō")
str = str.replace(/ੌ/g, "au")

str = str.replace(/੦/g, "0")
str = str.replace(/੧/g, "1")
str = str.replace(/੨/g, "2")
str = str.replace(/੩/g, "3")
str = str.replace(/੪/g, "4")
str = str.replace(/੫/g, "5")
str = str.replace(/੬/g, "6")
str = str.replace(/੭/g, "7")
str = str.replace(/੮/g, "8")
str = str.replace(/੯/g, "9")

str = str.replace(/ਁ/g, "m̐")
str = str.replace(/ਂ/g, "ṁ")
str = str.replace(/ਃ/g, "ḥ")
str = str.replace(/ੰ/g, "ṃ")

str = str.replace(/ ।/g, ".")
str = str.replace(/ ॥/g, ".")
str = str.replace(/।/g, ".")
str = str.replace(/॥/g, ".")


	return str.trim()


    }



function transliterateOLD (str) {
    
str = str + '  '
str = str.normalize('NFC')

var consonants = new Set(['ਕ', 'ਖ', 'ਗ', 'ਘ', 'ਙ', 'ਖ਼', 'ਚ', 'ਛ', 'ਜ', 'ਝ', 'ਞ', 'ਗ਼', 'ਟ', 'ਠ', 'ਡ', 'ਢ', 'ਣ', 'ੜ', 'ਤ', 'ਥ', 'ਦ', 'ਧ', 'ਨ', 'ਲ਼', 'ਪ', 'ਫ', 'ਬ', 'ਭ', 'ਮ', 'ਫ਼', 'ਯ', 'ਰ', 'ਲ', 'ਵ', 'ਜ਼', 'ਸ਼', 'ਸ', 'ਹ', '\u0A3C'])
var vowels = new Set(['\u0A3E', '\u0A3F', '\u0A40', '\u0A41', '\u0A42', '\u0A47', '\u0A48', '\u0A4B', '\u0A4C'])
var combChar = new Set(['\u{A4D}', '\u{A75}', '\u{A51}', '\u{A3C}', '\u{A3E}', '\u{A3F}', '\u{A40}', '\u{A41}', '\u{A42}', '\u{A47}', '\u{A48}', '\u{A4B}', '\u{A4C}', '\u{A70}', '\u{A71}', '\u{A01}', '\u{A02}', '\u{A03}'])

var addak = '\u0A71'
var nukta = '\u0A3C'


// adjust the string for nukta, virama, and addak, and add inherent vowel
let chars = [...str]
out = []
for (let i=0; i<chars.length-2; i++) {
    // look ahead to syllable end
    var ptr = i+1
    var vowelsign = ''
    var hasAddak = false
    var hasNukta = false
    while (combChar.has(chars[ptr]) && ptr < chars.length) {
        if (vowels.has(chars[ptr])) vowelsign = chars[ptr]
        if (chars[ptr] === addak) hasAddak = true
        if (chars[ptr] === nukta) hasNukta = true
        ptr++
        }
    
    //console.log(i,chars[i],vowelsign, hasNukta, chars[ptr])
    
    out += chars[i]
    if (hasNukta) out += nukta
    if (consonants.has(chars[i]) && vowelsign === '') out += 'a'
    for (p=i+1;p<ptr;p++) if (chars[p] !== nukta) out += chars[p]
    if (consonants.has(chars[i]) && vowelsign === '' && (chars[ptr] === 'ਇ' || chars[ptr] === 'ਉ')) out += ':'
    if (hasAddak) out += chars[ptr]
    
    i = ptr-1

    //console.log(out)
    }

str = out+'  '

str = str.replace(/\u0A71/g, "") // remove addak

// do nuktas
str = str.replace(/ਖ਼/g, "k͟h")
str = str.replace(/ਗ਼/g, "ġ")
str = str.replace(/ੜ/g, "ṛ")
str = str.replace(/ਲ਼/g, "ḷ")
str = str.replace(/ਫ਼/g, "f")
str = str.replace(/ਜ਼/g, "z")


str = str.replace(/ਕ/g, "k")
str = str.replace(/ਖ/g, "kʰ")
str = str.replace(/ਗ/g, "g")
str = str.replace(/ਘ/g, "gʰ")
str = str.replace(/ਙ/g, "ṅ")
str = str.replace(/ਚ/g, "c")
str = str.replace(/ਛ/g, "cʰ")
str = str.replace(/ਜ/g, "j")
str = str.replace(/ਝ/g, "jʰ")
str = str.replace(/ਞ/g, "ñ")
str = str.replace(/ਟ/g, "ṭ")
str = str.replace(/ਠ/g, "ṭʰ")
str = str.replace(/ਡ/g, "ḍ")
str = str.replace(/ਢ/g, "ḍʰ")
str = str.replace(/ਣ/g, "ṇ")
str = str.replace(/ਤ/g, "t")
str = str.replace(/ਥ/g, "tʰ")
str = str.replace(/ਦ/g, "d")
str = str.replace(/ਧ/g, "dʰ")
str = str.replace(/ਨ/g, "n")
str = str.replace(/ਪ/g, "p")
str = str.replace(/ਫ/g, "pʰ")
str = str.replace(/ਬ/g, "b")
str = str.replace(/ਭ/g, "bʰ")
str = str.replace(/ਮ/g, "m")
str = str.replace(/ਯ/g, "y")
str = str.replace(/ਰ/g, "r")
str = str.replace(/ਲ/g, "l")
str = str.replace(/ਵ/g, "v")
str = str.replace(/ਸ਼/g, "ś")
str = str.replace(/ਸ/g, "s")
str = str.replace(/ਹ/g, "h")

str = str.replace(/ਅ/g, "a")
str = str.replace(/ਆ/g, "ā")
str = str.replace(/ਇ/g, "i")
str = str.replace(/ਈ/g, "ī")
str = str.replace(/ਉ/g, "u")
str = str.replace(/ਊ/g, "ū")
str = str.replace(/ਏ/g, "ē")
str = str.replace(/ਐ/g, "ai")
str = str.replace(/ਓ/g, "ō")
str = str.replace(/ਔ/g, "au")

str = str.replace(/ਾ/g, "ā")
str = str.replace(/ਿ/g, "i")
str = str.replace(/ੀ/g, "ī")
str = str.replace(/ੁ/g, "u")
str = str.replace(/ੂ/g, "ū")
str = str.replace(/ੇ/g, "ē")
str = str.replace(/ੈ/g, "ai")
str = str.replace(/ੋ/g, "ō")
str = str.replace(/ੌ/g, "au")

str = str.replace(/੦/g, "0")
str = str.replace(/੧/g, "1")
str = str.replace(/੨/g, "2")
str = str.replace(/੩/g, "3")
str = str.replace(/੪/g, "4")
str = str.replace(/੫/g, "5")
str = str.replace(/੬/g, "6")
str = str.replace(/੭/g, "7")
str = str.replace(/੮/g, "8")
str = str.replace(/੯/g, "9")

str = str.replace(/ਁ/g, "m̐")
str = str.replace(/ਂ/g, "ṁ")
str = str.replace(/ਃ/g, "ḥ")
str = str.replace(/ੰ/g, "ṃ")

str = str.replace(/ ।/g, ".")
str = str.replace(/ ॥/g, ".")
str = str.replace(/।/g, ".")
str = str.replace(/॥/g, ".")


	return str.trim()


    }


