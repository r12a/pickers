function localtranscribe (direction, str) {
	
	if (direction == 'toLatin') { return toLatin(str) }
	if (direction == 'transliterate') { return transliterate(str) }
	}




function transliterate (str) {

str += ' '

str = str.replace(/ᬀ/g, "m̽")
str = str.replace(/ᬁ/g, "ŋ̽")
str = str.replace(/ᬂ/g, "ŋ̇̽")
str = str.replace(/ᬃ/g, "r̽")
str = str.replace(/ᬄ/g, "h̽")
str = str.replace(/ᬅ/g, "ạ")
str = str.replace(/ᬆ/g, "ɑ̣̄")
str = str.replace(/ᬇ/g, "ị")
str = str.replace(/ᬈ/g, "ị̄")
str = str.replace(/ᬉ/g, "ụ")
str = str.replace(/ᬊ/g, "ụ̄")
str = str.replace(/ᬋ/g, "r̥̣")
str = str.replace(/ᬌ/g, "r̥̣̄")
str = str.replace(/ᬍ/g, "l̥̣")
str = str.replace(/ᬎ/g, "l̥̣̄")
str = str.replace(/ᬏ/g, "ẹ")
str = str.replace(/ᬐ/g, "ạʲ")
str = str.replace(/ᬑ/g, "ọ")
str = str.replace(/ᬒ/g, "ạʷ")
str = str.replace(/ᬓ/g, "k")
str = str.replace(/ᬔ/g, "K")
str = str.replace(/ᬕ/g, "g")
str = str.replace(/ᬖ/g, "ĝ")
str = str.replace(/ᬗ/g, "ŋ")
str = str.replace(/ᬘ/g, "c")
str = str.replace(/ᬙ/g, "ĉ")
str = str.replace(/ᬚ/g, "ʤ")
str = str.replace(/ᬛ/g, "ʤ̇")
str = str.replace(/ᬜ/g, "ɲ")
str = str.replace(/ᬝ/g, "t̂")
str = str.replace(/ᬞ/g, "T")
str = str.replace(/ᬟ/g, "D")
str = str.replace(/ᬠ/g, "Ḋ")
str = str.replace(/ᬡ/g, "n̂")
str = str.replace(/ᬢ/g, "t")
str = str.replace(/ᬣ/g, "ṫ̂")
str = str.replace(/ᬤ/g, "d")
str = str.replace(/ᬥ/g, "d̂")
str = str.replace(/ᬦ/g, "n")
str = str.replace(/ᬧ/g, "p")
str = str.replace(/ᬨ/g, "p̂")
str = str.replace(/ᬩ/g, "b")
str = str.replace(/ᬪ/g, "b̂")
str = str.replace(/ᬫ/g, "m")
str = str.replace(/ᬬ/g, "y")
str = str.replace(/ᬭ/g, "r")
str = str.replace(/ᬮ/g, "l")
str = str.replace(/ᬯ/g, "w")
str = str.replace(/ᬰ/g, "ŝ")
str = str.replace(/ᬱ/g, "s")
str = str.replace(/ᬲ/g, "ṡ̂")
str = str.replace(/ᬳ/g, "h")
str = str.replace(/᬴/g, "̣")
str = str.replace(/ᬵ/g, "ɑ̄")
str = str.replace(/ᬶ/g, "i")
str = str.replace(/ᬷ/g, "ī")
str = str.replace(/ᬸ/g, "u")
str = str.replace(/ᬹ/g, "ū")
str = str.replace(/ᬺ/g, "r̥")
str = str.replace(/ᬻ/g, "r̥̄")
str = str.replace(/ᬼ/g, "l̥")
str = str.replace(/ᬽ/g, "l̥̄")
str = str.replace(/ᬾ/g, "e")
str = str.replace(/ᬿ/g, "aʲ")
str = str.replace(/ᭀ/g, "o")
str = str.replace(/ᭁ/g, "aʷ")
str = str.replace(/ᭂ/g, "ə")
str = str.replace(/ᭃ/g, "ə̄")
str = str.replace(/᭄/g, "͓")
str = str.replace(/᭐/g, "0")
str = str.replace(/᭑/g, "1")
str = str.replace(/᭒/g, "2")
str = str.replace(/᭓/g, "3")
str = str.replace(/᭔/g, "4")
str = str.replace(/᭕/g, "5")
str = str.replace(/᭖/g, "6")
str = str.replace(/᭗/g, "7")
str = str.replace(/᭘/g, "8")
str = str.replace(/᭙/g, "9")
str = str.replace(/᭚/g, "ᵖ>")
str = str.replace(/᭛/g, "ʳ>")
str = str.replace(/᭜/g, "°")
str = str.replace(/᭝/g, ":")
str = str.replace(/᭞/g, ",")
str = str.replace(/᭟/g, ".")
str = str.replace(/᭠/g, "-")

return str.trim()
}









function toLatin (str) {
    
str = str + '  '
str = str.normalize('NFC')

var consonants = new Set(['ᬓ', 'ᬔ', 'ᬕ', 'ᬖ', 'ᬗ', 'ᬘ', 'ᬙ', 'ᬚ', 'ᬛ', 'ᬜ', 'ᬝ', 'ᬞ', 'ᬟ', 'ᬠ', 'ᬡ', 'ᬢ', 'ᬣ', 'ᬤ', 'ᬥ', 'ᬦ', 'ᬧ', 'ᬨ', 'ᬩ', 'ᬪ', 'ᬫ', 'ᬬ', 'ᬭ', 'ᬮ', 'ᬯ', 'ᬰ', 'ᬲ', 'ᬱ', 'ᬳ', 'ᬚ᬴', 'ᬧ᬴', 'ᬯ᬴', 'ᬓ᬴', 'ᬳ᬴', 'ᬕ᬴', 'ᬗ᬴'])
var vowelSet = new Set(['ᬵ', 'ᬶ', 'ᬷ', 'ᬸ', 'ᬹ', 'ᬺ', 'ᬻ', 'ᬾ', 'ᭀ', 'ᬿ', 'ᭁ', 'ᭂ', 'ᭃ'])
var medialSet = new Set([])
var finalSet = new Set(['\u1B02', '\u1B03', '\u1B04', '\u1B00', '\u1B01'])
var nuktaSet = new Set(['\u1B34'])
var viramaSet = new Set(['\u1B44'])
var combChar = new Set(['ᬵ', 'ᬶ', 'ᬷ', 'ᬸ', 'ᬹ', 'ᬺ', 'ᬻ', 'ᬾ', 'ᭀ', 'ᬿ', 'ᭁ', 'ᭂ', 'ᭃ', '\u1B02', '\u1B03', '\u1B04', '\u1B00', '\u1B01', '\u1B44', '\u1B34'])

var addak = ''
var virama = '\u1B44'


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

str = str.replace(/\u1B44/g, "͓") // virama
//str = str.replace(/\u200B/g, " ") // virama

// zwnj
str = str.replace(/\u200C/g,'ⁿʲ')

// do 'nuktas'
str = str.replace(/ᬚ᬴/g, "z")
str = str.replace(/ᬧ᬴/g, "f")
str = str.replace(/ᬯ᬴/g, "v")
str = str.replace(/ᬓ᬴/g, "x")
str = str.replace(/ᬳ᬴/g, "ħ")
str = str.replace(/ᬕ᬴/g, "ɣ")
str = str.replace(/ᬗ᬴/g, "ʕ")



// basic consonants
str = str.replace(/ᬓ/g, "k")
str = str.replace(/ᬔ/g, "kʰ")
str = str.replace(/ᬕ/g, "g")
str = str.replace(/ᬖ/g, "gʰ")
str = str.replace(/ᬗ/g, "ṅ")
str = str.replace(/ᬘ/g, "c")
str = str.replace(/ᬙ/g, "cʰ")
str = str.replace(/ᬚ/g, "j")
str = str.replace(/ᬛ/g, "jʰ")
str = str.replace(/ᬜ/g, "ñ")
str = str.replace(/ᬝ/g, "ṭ")
str = str.replace(/ᬞ/g, "ṭʰ")
str = str.replace(/ᬟ/g, "ḍ")
str = str.replace(/ᬠ/g, "ḍʰ")
str = str.replace(/ᬡ/g, "ṇ")
str = str.replace(/ᬢ/g, "t")
str = str.replace(/ᬣ/g, "tʰ")
str = str.replace(/ᬤ/g, "d")
str = str.replace(/ᬥ/g, "dʰ")
str = str.replace(/ᬦ/g, "n")
str = str.replace(/ᬧ/g, "p")
str = str.replace(/ᬨ/g, "pʰ")
str = str.replace(/ᬩ/g, "b")
str = str.replace(/ᬪ/g, "bʰ")
str = str.replace(/ᬫ/g, "m")
str = str.replace(/ᬬ/g, "y")
str = str.replace(/ᬭ/g, "r")
str = str.replace(/ᬮ/g, "l")
str = str.replace(/ᬯ/g, "v")
str = str.replace(/ᬰ/g, "ś")
str = str.replace(/ᬲ/g, "ṣ")
str = str.replace(/ᬱ/g, "s")
str = str.replace(/ᬳ/g, "h")

// vocalics
str = str.replace(/ᬋ/g, "r̥ᵊ")
str = str.replace(/ᬌ/g, "r̥̄ᵊ")
str = str.replace(/ᬍ/g, "l̥ᵊ")
str = str.replace(/ᬎ/g, "l̥̄ᵊ")


// finals
str = str.replace(/ᬂ/g, "ṅ̽")
str = str.replace(/ᬃ/g, "r̽")
str = str.replace(/ᬄ/g, "h̽")
str = str.replace(/ᬀ/g, "m̽")
str = str.replace(/ᬁ/g, "ṃ̽")


// independent vowels
str = str.replace(/ᬅ/g, "ạ")
str = str.replace(/ᬆ/g, "ạ̄")
str = str.replace(/ᬇ/g, "ị")
str = str.replace(/ᬈ/g, "ị̄")
str = str.replace(/ᬉ/g, "ụ")
str = str.replace(/ᬊ/g, "ụ̄")
str = str.replace(/ᬏ/g, "ẹ")
str = str.replace(/ᬐ/g, "ạ͡i")
str = str.replace(/ᬑ/g, "ọ")
str = str.replace(/ᬒ/g, "ạ͡u")


// vowel signs
str = str.replace(/ᬵ/g, "ā")
str = str.replace(/ᬶ/g, "i")
str = str.replace(/ᬷ/g, "ī")
str = str.replace(/ᬸ/g, "u")
str = str.replace(/ᬹ/g, "ū")
str = str.replace(/ᬺ/g, "r̥ₔ")
str = str.replace(/ᬻ/g, "r̥̄ₔ")
str = str.replace(/ᬼ/g, "l̥ₔ")
str = str.replace(/ᬽ/g, "l̥̄ₔ")
str = str.replace(/ᬾ/g, "e")
str = str.replace(/ᬿ/g, "a͡i")
str = str.replace(/ᭀ/g, "o")
str = str.replace(/ᭁ/g, "a͡u")
str = str.replace(/ᭂ/g, "ə")
str = str.replace(/ᭃ/g, "ə̄")


// digits
str = str.replace(/᭐/g, "0")
str = str.replace(/᭑/g, "1")
str = str.replace(/᭒/g, "2")
str = str.replace(/᭓/g, "3")
str = str.replace(/᭔/g, "4")
str = str.replace(/᭕/g, "5")
str = str.replace(/᭖/g, "6")
str = str.replace(/᭗/g, "7")
str = str.replace(/᭘/g, "8")
str = str.replace(/᭙/g, "9")


// punctuation
str = str.replace(/᭞/g, ",")
str = str.replace(/᭟/g, ".")
str = str.replace(/᭝/g, ":")
str = str.replace(/᭠/g, "-")




	return str.trim()


    }








function OLDtoLatin (str) {
	str = transliterate(str)
    
str = str.replace(/ạ͡uṃ̽/g, "om")
str = str.replace(/ⁿʲ/g, "")
str = str.replace(/ᵃ/g, "a")
str = str.replace(/ʰ/g, "h")
str = str.replace(/ᵊ/g, "ě")
str = str.replace(/ₔ/g, "ě")
str = str.replace(/ə/g, "ě")
str = str.replace(/ṅ/g, "ng")
str = str.replace(/ṇ/g, "n")
str = str.replace(/ṃ/g, "ng")
str = str.replace(/ś/g, "s")
str = str.replace(/ṣ/g, "s")
str = str.replace(/r̥/g, "r")
str = str.replace(/\u033D/g, "")
str = str.replace(/\u0353/g, "")

	return str.trim()
}


































