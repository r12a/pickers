function localtranscribe (direction, str) {
	
	if (direction == 'toTranslit') { return toTranslit(str) }
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'toDeva') { return toDeva(str) }
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



str = str.replace(/ꦏ/g, "k")
str = str.replace(/ꦑ/g, "K")
str = str.replace(/ꦒ/g, "g")
str = str.replace(/ꦓ/g, "G")
str = str.replace(/ꦔ/g, "ŋ")
str = str.replace(/ꦕ/g, "c")
str = str.replace(/ꦖ/g, "C")
str = str.replace(/ꦗ/g, "j")
str = str.replace(/ꦛ/g, "ṭ")
str = str.replace(/ꦚ/g, "ñ")
str = str.replace(/ꦘ/g, "Ñ")
str = str.replace(/ꦠ/g, "t")
str = str.replace(/ꦡ/g, "T")
str = str.replace(/ꦢ/g, "d")
str = str.replace(/ꦝ/g, "D")
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

