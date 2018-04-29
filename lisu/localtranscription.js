function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	}
		


function transliterate (str) { // this version for abgidas
    
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

/*
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
*/

// consonants
str = str.replace(/ꓨ/g, "ɦᵃ")
str = str.replace(/ꓦ/g, "hᵃ")
str = str.replace(/ꓗ/g, "kᵃ")
str = str.replace(/ꓘ/g, "kʰᵃ")
str = str.replace(/ꓖ/g, "ɡᵃ")
str = str.replace(/ꓧ/g, "xᵃ")
str = str.replace(/ꓭ/g, "ɣᵃ")
str = str.replace(/ꓥ/g, "ŋᵃ")
str = str.replace(/ꓚ/g, "ʧᵃ")
str = str.replace(/ꓛ/g, "ʧʰᵃ")
str = str.replace(/ꓙ/g, "ʤᵃ")
str = str.replace(/ꓫ/g, "ʃᵃ")
str = str.replace(/ꓣ/g, "ʒᵃ")
str = str.replace(/ꓬ/g, "ʝᵃ")
str = str.replace(/ꓝ/g, "ʦᵃ")
str = str.replace(/ꓞ/g, "ʦʰᵃ")
str = str.replace(/ꓜ/g, "ʣᵃ")
str = str.replace(/ꓢ/g, "sᵃ")
str = str.replace(/ꓤ/g, "zᵃ")
str = str.replace(/ꓔ/g, "tᵃ")
str = str.replace(/ꓕ/g, "tʰᵃ")
str = str.replace(/ꓓ/g, "dᵃ")
str = str.replace(/ꓠ/g, "nᵃ")
str = str.replace(/ꓡ/g, "lᵃ")
str = str.replace(/ꓑ/g, "pᵃ")
str = str.replace(/ꓒ/g, "pʰᵃ")
str = str.replace(/ꓐ/g, "bᵃ")
str = str.replace(/ꓩ/g, "fᵃ")
str = str.replace(/ꓪ/g, "wᵃ")
str = str.replace(/ꓟ/g, "mᵃ")
str = str.replace(/'/g, "~")

// vowels
str = str.replace(/ꓮ/g, "ɑ")
str = str.replace(/ꓯ/g, "ɛ")
str = str.replace(/ꓷ/g, "ə")
str = str.replace(/ꓰ/g, "e")
str = str.replace(/ꓱ/g, "ø")
str = str.replace(/ꓲ/g, "i")
str = str.replace(/ꓶ/g, "ɯ")
str = str.replace(/ꓳ/g, "ʊ")
str = str.replace(/ꓴ/g, "u")
str = str.replace(/ꓵ/g, "y")
str = str.replace(/ˍ/g, "ä")


// tones
str = str.replace(/ꓸ/g, "¹")
str = str.replace(/ꓹ/g, "²")
str = str.replace(/ꓺ/g, "³")
str = str.replace(/ꓻ/g, "⁴")
str = str.replace(/ꓼ/g, "⁵")
str = str.replace(/ꓽ/g, "⁶")


// punctuation
str = str.replace(/꓾/g, ", ")
str = str.replace(/꓿/g, ". ")
str = str.replace(/-/g, "-")




// remove inherent vowel where necessary
str = str.replace(/ᵃ͓/g, "͓")
str = str.replace(/ᵒ͓/g, "͓")
str = str.replace(/ᵒ͓/g, "͓")

str = str.replace(/[ᵃ|ᵒ]ɑ/g, "ɑ")
str = str.replace(/[ᵃ|ᵒ]ɛ/g, "ɛ")
str = str.replace(/[ᵃ|ᵒ]ə/g, "ə")
str = str.replace(/[ᵃ|ᵒ]e/g, "e")
str = str.replace(/[ᵃ|ᵒ]ø/g, "ø")
str = str.replace(/[ᵃ|ᵒ]i/g, "i")
str = str.replace(/[ᵃ|ᵒ]ɯ/g, "ɯ")
str = str.replace(/[ᵃ|ᵒ]ʊ/g, "ʊ")
str = str.replace(/[ᵃ|ᵒ]u/g, "u")
str = str.replace(/[ᵃ|ᵒ]y/g, "y")
str = str.replace(/[ᵃ|ᵒ]ä/g, "ä")
str = str.replace(/[ᵃ|ᵒ]ʝ/g, "ʝ")
str = str.replace(/[ᵃ|ᵒ]w/g, "w")


	return str.trim()


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
	// add markup for ambiguous cases
	chstring = chstring.replace(/\[/g,'<span class=alts><span class=altfirst>')
	chstring = chstring.replace(/\|/g,'</span><span class=alt>')
	chstring = chstring.replace(/\{/g,'</span><span class=altlast>')
	chstring = chstring.replace(/\]/g,'</span></span>')
	chstring = chstring.replace(/¶/g,'')
	}

