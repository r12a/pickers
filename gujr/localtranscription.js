function localtranscribe (direction, str) {
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'transcription') { return transcription(str) }
	if (direction == 'toTranslit') { return toTranslit(str) }
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
console.log(str)
str = str.replace(/ક્ષ/g, "k͓ʃ")
str = str.replace(/જ્ઞ/g, "ʤ͓ɲ")
str = str.replace(/।/g, ".")
str = str.replace(/॥/g, "¶")
str = str.replace(/ં/g, "˜")
str = str.replace(/ઃ/g, "h̽")
str = str.replace(/અ/g, "ə̣")
str = str.replace(/આ/g, "ạ̄")
str = str.replace(/ઇ/g, "ị")
str = str.replace(/ઈ/g, "ị̄")
str = str.replace(/ઉ/g, "ụ")
str = str.replace(/ઊ/g, "ụ̄")
str = str.replace(/ઋ/g, "r̥̣")
str = str.replace(/ઌ/g, "l̥̣")
str = str.replace(/ઍ/g, "æ̣")
str = str.replace(/એ/g, "ẹ")
str = str.replace(/ઐ/g, "ə̣ʲ")
str = str.replace(/ઑ/g, "ɔ̣")
str = str.replace(/ઓ/g, "ọ")
str = str.replace(/ઔ/g, "ə̣ʷ")
str = str.replace(/ક/g, "k")
str = str.replace(/ખ/g, "kʰ")
str = str.replace(/ગ/g, "g")
str = str.replace(/ઘ/g, "gʰ")
str = str.replace(/ઙ/g, "ŋ")
str = str.replace(/ચ/g, "c")
str = str.replace(/છ/g, "cʰ")
str = str.replace(/જ/g, "ʤ")
str = str.replace(/ઝ/g, "ʤʰ")
str = str.replace(/ઞ/g, "ɲ")
str = str.replace(/ટ/g, "ʈ")
str = str.replace(/ઠ/g, "ʈʰ")
str = str.replace(/ડ/g, "ɖ")
str = str.replace(/ઢ/g, "ɖʰ")
str = str.replace(/ણ/g, "ɳ")
str = str.replace(/ત/g, "t")
str = str.replace(/થ/g, "tʰ")
str = str.replace(/દ/g, "d")
str = str.replace(/ધ/g, "dʰ")
str = str.replace(/ન/g, "n")
str = str.replace(/પ/g, "p")
str = str.replace(/ફ/g, "f")
str = str.replace(/બ/g, "b")
str = str.replace(/ભ/g, "bʰ")
str = str.replace(/મ/g, "m")
str = str.replace(/ય/g, "y")
str = str.replace(/ર/g, "r")
str = str.replace(/લ/g, "l")
str = str.replace(/ળ/g, "ɭ")
str = str.replace(/વ/g, "ʋ")
str = str.replace(/શ/g, "ɕ")
str = str.replace(/ષ/g, "ʃ")
str = str.replace(/સ/g, "s")
str = str.replace(/હ/g, "h")
str = str.replace(/઼/g, "̣")
str = str.replace(/ા/g, "ə")
str = str.replace(/િ/g, "i")
str = str.replace(/ી/g, "ī")
str = str.replace(/ુ/g, "u")
str = str.replace(/ૂ/g, "ū")
str = str.replace(/ૃ/g, "r̥")
str = str.replace(/ૄ/g, "r̥̄")
str = str.replace(/ૅ/g, "æ")
str = str.replace(/ે/g, "e")
str = str.replace(/ૈ/g, "əʲ")
str = str.replace(/ૉ/g, "ɔ")
str = str.replace(/ો/g, "o")
str = str.replace(/ૌ/g, "əʷ")
str = str.replace(/્/g, "͓")
str = str.replace(/ૠ/g, "r̥̣̄")
str = str.replace(/ૡ/g, "l̥̣̄")
str = str.replace(/ૢ/g, "l̥")
str = str.replace(/ૣ/g, "l̥̄")
str = str.replace(/૦/g, "0")
str = str.replace(/૧/g, "1")
str = str.replace(/૨/g, "2")
str = str.replace(/૩/g, "3")
str = str.replace(/૪/g, "4")
str = str.replace(/૫/g, "5")
str = str.replace(/૬/g, "6")
str = str.replace(/૭/g, "7")
str = str.replace(/૮/g, "8")
str = str.replace(/૯/g, "9")

return str.trim()
}
*/



function transcription (str) { // this version for abgidas
    
str = str + '  '
str = str.normalize('NFC')
let chars = [...str]
/*

var consonants = new Set(['\uA98F', '\uA991', '\uA992', '\uA993', '\uA994', '\uA995', '\uA996', '\uA997', '\uA99B', '\uA99A', '\uA998', '\uA9A0', '\uA9A1', '\uA9A2', '\uA99D', '\uA9A4', '\uA99F', '\uA9A5', '\uA9A6', '\uA9A7', '\uA9A8', '\uA9A9', '\uA9AA', '\uA9AD', '\uA9AB', '\uA9B1', '\uA9AF', '\uA9AE', '\uA9B2', '\uA9B0', '\uA9A3', '\uA99E', '\uA999', '\uA99C', '\uA9BE', '\uA9BF'])
var vowelSet = new Set(['ꦴ', 'ꦶ', 'ꦸ', 'ꦺ', 'ꦺꦴ', 'ꦼ'])
var medialSet = new Set(['ꦽ', 'ꦾ', 'ꦿ'])
var finalSet = new Set(['ꦀ', 'ꦁ', 'ꦂ', 'ꦃ'])
var nuktaSet = new Set(['\uA9B3'])
var combChar = new Set(['ꦴ', 'ꦶ', 'ꦸ', 'ꦺ', 'ꦺꦴ', 'ꦼ', 'ꦾ', 'ꦿ','\uA9C0', '\uA9B3'])

var addak = '\u0A71'
var virama = '\uA9C0'


// adjust the string for nukta, virama, and addak, and add inherent vowel
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
*/

str = str.replace(/\u0ACD/g, "͓") // virama

// do 'nuktas'
str = str.replace(/઼/g, "̣")


// consonants 
str = str.replace(/ક/g, "kᵃ")
str = str.replace(/ખ/g, "kʰᵃ")
str = str.replace(/ગ/g, "gᵃ")
str = str.replace(/ઘ/g, "gʰᵃ")
str = str.replace(/ઙ/g, "ṅᵃ")
str = str.replace(/ચ/g, "cᵃ")
str = str.replace(/છ/g, "cʰᵃ")
str = str.replace(/જ/g, "jᵃ")
str = str.replace(/ઝ/g, "jʰᵃ")
str = str.replace(/ઞ/g, "ñᵃ")
str = str.replace(/ટ/g, "ṭᵃ")
str = str.replace(/ઠ/g, "ṭʰᵃ")
str = str.replace(/ડ/g, "ḍᵃ")
str = str.replace(/ઢ/g, "ḍʰᵃ")
str = str.replace(/ણ/g, "ṇᵃ")
str = str.replace(/ત/g, "tᵃ")
str = str.replace(/થ/g, "tʰᵃ")
str = str.replace(/દ/g, "dᵃ")
str = str.replace(/ધ/g, "dʰᵃ")
str = str.replace(/ન/g, "nᵃ")
str = str.replace(/પ/g, "pᵃ")
str = str.replace(/ફ/g, "pʰᵃ")
str = str.replace(/બ/g, "bᵃ")
str = str.replace(/ભ/g, "bʰᵃ")
str = str.replace(/મ/g, "mᵃ")
str = str.replace(/ય/g, "yᵃ")
str = str.replace(/ર/g, "rᵃ")
str = str.replace(/લ/g, "lᵃ")
str = str.replace(/ળ/g, "ḷᵃ")
str = str.replace(/વ/g, "vᵃ")
str = str.replace(/શ/g, "śᵃ")
str = str.replace(/ષ/g, "ṣᵃ")
str = str.replace(/સ/g, "sᵃ")
str = str.replace(/હ/g, "hᵃ")

// medials

// finals

// vocalics
str = str.replace(/ઋ/g, "r̥ₔ")
str = str.replace(/ૃ/g, "r̥ᵊ")
str = str.replace(/ૠ/g, "ṝₔ")
str = str.replace(/ૄ/g, "r̥̄ᵊ")
str = str.replace(/ઌ/g, "l̥ₔ")
str = str.replace(/ૢ/g, "l̥ᵊ")
str = str.replace(/ૡ/g, "l̥̄ₔ")
str = str.replace(/ૣ/g, "l̥̄ᵊ")

// independent vowels
str = str.replace(/અ/g, "ạ")
str = str.replace(/આ/g, "ạ̄")
str = str.replace(/ઇ/g, "ị")
str = str.replace(/ઈ/g, "ị̄")
str = str.replace(/ઉ/g, "ụ")
str = str.replace(/ઊ/g, "ụ̄")
str = str.replace(/એ/g, "ẹ")
str = str.replace(/ઐ/g, "ạʲ")
str = str.replace(/ઓ/g, "ọ")
str = str.replace(/ઔ/g, "ạʷ")
str = str.replace(/ઍ/g, "æ̣")
str = str.replace(/ઑ/g, "ɔ̣")

// vowel signs
str = str.replace(/ા/g, "ā")
str = str.replace(/િ/g, "i")
str = str.replace(/ી/g, "ī")
str = str.replace(/ુ/g, "u")
str = str.replace(/ૂ/g, "ū")
str = str.replace(/ે/g, "e")
str = str.replace(/ૈ/g, "aʲ")
str = str.replace(/ો/g, "o")
str = str.replace(/ૌ/g, "aʷ")
str = str.replace(/ૅ/g, "æ")
str = str.replace(/ૉ/g, "ɔ")

// diacritics
str = str.replace(/ં/g, "ṁ")
str = str.replace(/ઃ/g, "ḥ")

// digits
str = str.replace(/૦/g, "0")
str = str.replace(/૧/g, "1")
str = str.replace(/૨/g, "2")
str = str.replace(/૩/g, "3")
str = str.replace(/૪/g, "4")
str = str.replace(/૫/g, "5")
str = str.replace(/૬/g, "6")
str = str.replace(/૭/g, "7")
str = str.replace(/૮/g, "8")
str = str.replace(/૯/g, "9")

// punctuation
str = str.replace(/।/g, ".")
str = str.replace(/॥/g, ".")





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

