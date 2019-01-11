function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'transcription') { return transcription(str) }
	if (direction == 'addSpaces') { return addSpaces(str) }
	}




function transliterate ( str ) { 

str += '  '

str = str.replace(/ᦀ/g, "ạ")
str = str.replace(/ᦁ/g, "ạ̱")
str = str.replace(/ᦂ/g, "k")
str = str.replace(/ᦃ/g, "x")
str = str.replace(/ᦄ/g, "ŋ")
str = str.replace(/ᦅ/g, "ḵ")
str = str.replace(/ᦆ/g, "x̱")
str = str.replace(/ᦇ/g, "ŋ̱")
str = str.replace(/ᦈ/g, "ʦ")
str = str.replace(/ᦉ/g, "s")
str = str.replace(/ᦊ/g, "y")
str = str.replace(/ᦋ/g, "ʦ̱")
str = str.replace(/ᦌ/g, "s̱")
str = str.replace(/ᦍ/g, "y̱")
str = str.replace(/ᦎ/g, "t")
str = str.replace(/ᦏ/g, "tʰ")
str = str.replace(/ᦐ/g, "n")
str = str.replace(/ᦑ/g, "ṯ")
str = str.replace(/ᦒ/g, "ṯʰ")
str = str.replace(/ᦓ/g, "ṉ")
str = str.replace(/ᦔ/g, "p")
str = str.replace(/ᦕ/g, "pʰ")
str = str.replace(/ᦖ/g, "m")
str = str.replace(/ᦗ/g, "p̱")
str = str.replace(/ᦘ/g, "p̱ʰ")
str = str.replace(/ᦙ/g, "m̱")
str = str.replace(/ᦚ/g, "f")
str = str.replace(/ᦛ/g, "w")
str = str.replace(/ᦜ/g, "l")
str = str.replace(/ᦝ/g, "f̱")
str = str.replace(/ᦞ/g, "w̱")
str = str.replace(/ᦟ/g, "ḻ")
str = str.replace(/ᦠ/g, "h")
str = str.replace(/ᦡ/g, "d")
str = str.replace(/ᦢ/g, "b")
str = str.replace(/ᦣ/g, "ẖ")
str = str.replace(/ᦤ/g, "ḏ")
str = str.replace(/ᦥ/g, "ḇ")
str = str.replace(/ᦦ/g, "kʷ")
str = str.replace(/ᦧ/g, "xʷ")
str = str.replace(/ᦨ/g, "ḵʷ")
str = str.replace(/ᦩ/g, "x̱ʷ")
str = str.replace(/ᦪ/g, "sʷ")
str = str.replace(/ᦫ/g, "s̱ʷ")
str = str.replace(/ᦰ/g, "ʔ")
str = str.replace(/ᦱ/g, "ā")
str = str.replace(/ᦲ/g, "i")
str = str.replace(/ᦳ/g, "u")
str = str.replace(/ᦴ/g, "ū")
str = str.replace(/ᦵ/g, "e͕")
str = str.replace(/ᦶ/g, "ɛ͕")
str = str.replace(/ᦷ/g, "o͕")
str = str.replace(/ᦸ/g, "ɔ")
str = str.replace(/ᦹ/g, "ɯ")
str = str.replace(/ᦺ/g, "a͕ʲ")
str = str.replace(/ᦻ/g, "aʲ")
str = str.replace(/ᦼ/g, "uʲ")
str = str.replace(/ᦽ/g, "oʲ")
str = str.replace(/ᦾ/g, "ɔʲ")
str = str.replace(/ᦿ/g, "ɯʲ")
str = str.replace(/ᧀ/g, "əʲ")
str = str.replace(/ᧁ/g, "w̽")
str = str.replace(/ᧂ/g, "ŋ̽")
str = str.replace(/ᧃ/g, "n̽")
str = str.replace(/ᧄ/g, "m̽")
str = str.replace(/ᧅ/g, "k̽")
str = str.replace(/ᧆ/g, "t̽")
str = str.replace(/ᧇ/g, "p̽")
str = str.replace(/ᧈ/g, "¹")
str = str.replace(/ᧉ/g, "²")
str = str.replace(/᧐/g, "0")
str = str.replace(/᧑/g, "1")
str = str.replace(/᧒/g, "2")
str = str.replace(/᧓/g, "3")
str = str.replace(/᧔/g, "4")
str = str.replace(/᧕/g, "5")
str = str.replace(/᧖/g, "6")
str = str.replace(/᧗/g, "7")
str = str.replace(/᧘/g, "8")
str = str.replace(/᧙/g, "9")
str = str.replace(/᧚/g, "1̣")
str = str.replace(/᧞/g, "lˀ")
str = str.replace(/᧟/g, "lʷ")
str = str.replace(/、/g, ",")
str = str.replace(/。/g, ".")
str = str.replace(/〈/g, "<")
str = str.replace(/〉/g, ">")
str = str.replace(/《/g, "{")
str = str.replace(/》/g, "}")
str = str.replace(/！/g, "!")
str = str.replace(/（/g, "(")
str = str.replace(/）/g, ")")
str = str.replace(/，/g, ",")
str = str.replace(/．/g, ".")
str = str.replace(/：/g, ":")
str = str.replace(/；/g, ";")
str = str.replace(/？/g, "?")


return str.trim()
}


		

function addSpaces (str) {
// separate syllables with spaces

var onsets = new Set(['ᦂ', 'ᦅ', 'ᦦ', 'ᦨ', 'ᦄ', 'ᦇ', 'ᦈ', 'ᦋ', 'ᦎ', 'ᦑ', 'ᦏ', 'ᦒ', 'ᦡ', 'ᦤ', 'ᦐ', 'ᦓ', 'ᦔ', 'ᦗ', 'ᦕ', 'ᦘ', 'ᦢ', 'ᦥ', 'ᦖ', 'ᦙ', 'ᦜ', 'ᦟ', 'ᦊ', 'ᦍ', 'ᦛ', 'ᦞ', 'ᦠ', 'ᦣ', 'ᦃ', 'ᦆ', 'ᦧ', 'ᦩ', 'ᦉ', 'ᦌ', 'ᦪ', 'ᦫ', 'ᦚ', 'ᦝ', 'ᦀ', 'ᦁ'])
var finals = new Set(['ᧅ', 'ᧂ', 'ᧆ', 'ᧃ', 'ᧇ', 'ᧄ', 'ᧁ',' '])
var tones = new Set(['ᧈ', 'ᧉ'])
var vowels = new Set(['ᦺ', 'ᦵ', 'ᦶ', 'ᦷ', 'ᦱ', 'ᦲ', 'ᦹ', 'ᦳ', 'ᦴ', 'ᦸ', 'ᦰ', 'ᦻ', 'ᦿ', 'ᦼ', 'ᦽ', 'ᦾ', 'ᧀ'])

// move prescript vowels
str = str.replace(/ᦺ(.)/g, "$1ᦺ")
str = str.replace(/ᦵ(.)/g, "$1ᦵ")
str = str.replace(/ᦶ(.)/g, "$1ᦶ")
str = str.replace(/ᦷ(.)/g, "$1ᦷ")

// segment
var out = ''
var chars = [...str]
for (let i=0;i<chars.length-1;i++) {
    if (onsets.has(chars[i])) {
        var ptr = i+1
        var syllable = chars[i]
        while (finals.has(chars[ptr]) || tones.has(chars[ptr]) || vowels.has(chars[ptr])) {
            syllable += chars[ptr]
            ptr++
            }
        out += syllable+' '
        i = ptr-1
        }
    else out += chars[i]
    }

// move prescript vowels back
out = out.replace(/(.)ᦺ/g, "ᦺ$1")
out = out.replace(/(.)ᦵ/g, "ᦵ$1")
out = out.replace(/(.)ᦶ/g, "ᦶ$1")
out = out.replace(/(.)ᦷ/g, "ᦷ$1")


return out
}




function transcription ( str ) { 

str = str.normalize('NFC')
str = addSpaces(str)+'  '

var onsets = new Set(['ᦂ', 'ᦅ', 'ᦦ', 'ᦨ', 'ᦄ', 'ᦇ', 'ᦈ', 'ᦋ', 'ᦎ', 'ᦑ', 'ᦏ', 'ᦒ', 'ᦡ', 'ᦤ', 'ᦐ', 'ᦓ', 'ᦔ', 'ᦗ', 'ᦕ', 'ᦘ', 'ᦢ', 'ᦥ', 'ᦖ', 'ᦙ', 'ᦜ', 'ᦟ', 'ᦊ', 'ᦍ', 'ᦛ', 'ᦞ', 'ᦠ', 'ᦣ', 'ᦃ', 'ᦆ', 'ᦧ', 'ᦩ', 'ᦉ', 'ᦌ', 'ᦪ', 'ᦫ', 'ᦚ', 'ᦝ', 'ᦀ', 'ᦁ'])
var finals = new Set(['ᧅ', 'ᧂ', 'ᧆ', 'ᧃ', 'ᧇ', 'ᧄ', 'ᧁ',' '])
var tones = new Set(['ᧈ', 'ᧉ'])
var prescriptVowels = new Set(['ᦺ', 'ᦵ', 'ᦶ', 'ᦷ'])

// move prescript vowels
str = str.replace(/ᦺ(.)/g, "$1ᦺ")
str = str.replace(/ᦵ(.)/g, "$1ᦵ")
str = str.replace(/ᦶ(.)/g, "$1ᦶ")
str = str.replace(/ᦷ(.)/g, "$1ᦷ")

// add inherent vowel
var out = []
var chars = [...str]
for (let i=0;i<chars.length-1;i++) {
    if (onsets.has(chars[i]) && (onsets.has(chars[i+1]) || finals.has(chars[i+1]) || tones.has(chars[i+1]))) out.push(chars[i]+'a')
    else out.push(chars[i])
    }
str = out.join('')


// do complex vowels
str = str.replace(/(.)ᦲᦰ/g, "$1iʔ")
str = str.replace(/(.)ᦸᦰ/g, "$1ɔʔ")
str = str.replace(/(.)ᦹᦰ/g, "$1ɯ")
str = str.replace(/(.)ᦵᦰ/g, "$1eʔ")
str = str.replace(/(.)ᦵᦲ/g, "$1əː")
str = str.replace(/(.)ᦵᦲᦰ/g, "$1əʔ")
str = str.replace(/(.)ᦶᦰ/g, "$1ɛʔ")
str = str.replace(/(.)ᦷᦰ/g, "$1oʔ")



str = transliterate(str)+'  '

// remove combining >
str = str.replace(/\u0355/g, '')


return str.trim()
}








