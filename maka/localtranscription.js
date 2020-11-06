function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'toLatin') { return toLatin(str) }
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

str = str.replace(/𑻠/g, "k")
str = str.replace(/𑻡/g, "g")
str = str.replace(/𑻢/g, "ŋ")
str = str.replace(/𑻣/g, "p")
str = str.replace(/𑻤/g, "b")
str = str.replace(/𑻥/g, "m")
str = str.replace(/𑻦/g, "t")
str = str.replace(/𑻧/g, "d")
str = str.replace(/𑻨/g, "n")
str = str.replace(/𑻩/g, "c")
str = str.replace(/𑻪/g, "j")
str = str.replace(/𑻫/g, "ɳ")
str = str.replace(/𑻬/g, "y")
str = str.replace(/𑻭/g, "r")
str = str.replace(/𑻮/g, "l")
str = str.replace(/𑻯/g, "w")
str = str.replace(/𑻰/g, "s")
str = str.replace(/𑻱/g, "a")
str = str.replace(/𑻲/g, "˖˖")
str = str.replace(/𑻳/g, "i")
str = str.replace(/𑻴/g, "u")
str = str.replace(/𑻵/g, "e")
str = str.replace(/𑻶/g, "o")
str = str.replace(/𑻷/g, "•")
str = str.replace(/𑻸/g, "¶")

return str.trim()
}
*/
	

function OLDtransliterate (str) { // this version for abgidas
    
str = str + '  '

str = str.replace(/\u0ACD/g, "͓") // virama

// nuktas


// consonants 
str = str.replace(/𑻠/g, "kᵃ")
str = str.replace(/𑻡/g, "gᵃ")
str = str.replace(/𑻢/g, "ṅᵃ")
str = str.replace(/𑻩/g, "cᵃ")
str = str.replace(/𑻪/g, "jᵃ")
str = str.replace(/𑻫/g, "ñᵃ")
str = str.replace(/𑻦/g, "tᵃ")
str = str.replace(/𑻧/g, "dᵃ")
str = str.replace(/𑻨/g, "nᵃ")
str = str.replace(/𑻣/g, "pᵃ")
str = str.replace(/𑻤/g, "bᵃ")
str = str.replace(/𑻥/g, "mᵃ")
str = str.replace(/𑻬/g, "yᵃ")
str = str.replace(/𑻭/g, "rᵃ")
str = str.replace(/𑻮/g, "lᵃ")
str = str.replace(/𑻰/g, "sᵃ")
str = str.replace(/𑻯/g, "wᵃ")

str = str.replace(/𑻲/g, "𑻲")



// medials

// finals

// vocalics

// independent vowels


// vowel signs
str = str.replace(/𑻱/g, "a")
str = str.replace(/𑻳/g, "i")
str = str.replace(/𑻴/g, "u")
str = str.replace(/𑻵/g, "e")
str = str.replace(/𑻶/g, "o")



// diacritics


// digits


// punctuation
str = str.replace(/𑻷/g, " • ")
str = str.replace(/𑻸/g, " | ")






// remove inherent vowel where necessary
str = str.replace(/ᵃ͓/g, "͓")
str = str.replace(/ᵒ͓/g, "͓")
str = str.replace(/ᵒ͓/g, "͓")

str = str.replace(/[ᵃ|ᵒ]a/g, "a")
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



function toLatin (str) {
	str += '  '
	var A = '\u{11EF1}'
	var vowelSet = new Set(['\u{11EF3}', '\u{11EF4}', '\u{11EF5}', '\u{11EF6}']) // all characters that would kill the inherent vowel
	var consonantSet = new Set(['\u{11EE0}', '\u{11EE1}', '\u{11EE2}', '\u{11EE3}', '\u{11EE4}', '\u{11EE5}', '\u{11EE6}', '\u{11EE7}', '\u{11EE8}', '\u{11EE9}', '\u{11EEA}', '\u{11EEB}', '\u{11EEC}', '\u{11EED}', '\u{11EEE}', '\u{11EEF}', '\u{11EF0}', '\u{11EF1}', '\u{11EF2}'])

	var out=''
	var prevcons = ''
	var chars = [...str] 
	for (var i=0; i<chars.length-2; i++) {
		var inherent = false
		var doublevowel = false
		var ch = chars[i]
		
		// check for angka
		if (ch === '\u{11EF2}') ch = prevcons
		
		// check for double vowels
		if (vowelSet.has(chars[i-1]) && vowelSet.has(ch)) { ch = prevcons; chars[i-1] = prevcons; i-- }
		
		// store as previous consonant for next time
		if (consonantSet.has(ch)) prevcons = ch
		
		// add inherent vowel
		if (consonantSet.has(ch) && ! vowelSet.has(chars[i+1])) inherent = true		
		if (ch == A && vowelSet.has(chars[i+1])) ch = ''		
		if (typeof mapToISO[ch] !== 'undefined') { out += mapToISO[ch] }
		else { out += ch }
		if (inherent && ch != A) { out += 'a' }
		if (doublevowel) { i-- }
		}

	return out.trim()
	}


var mapToISO = {
// consonants
'\u{11EE0}':'k',
'\u{11EE1}':'g',
'\u{11EE2}':'ng',
'\u{11EE9}':'c',
'\u{11EEA}':'j',
'\u{11EEB}':'ny',
'\u{11EE6}':'t',
'\u{11EE7}':'d',
'\u{11EE8}':'n',
'\u{11EE3}':'p',
'\u{11EE4}':'b',
'\u{11EE5}':'m',
'\u{11EEC}':'y',
'\u{11EED}':'r',
'\u{11EEE}':'l',
'\u{11EF0}':'s',
'\u{11EEF}':'w',

// vowels
'\u{11EF1}':'a',
'\u{11EF3}':'i',
'\u{11EF4}':'u',
'\u{11EF5}':'e',
'\u{11EF6}':'o',

// punctuation
'\u{11EF8}':' | ',
'\u{11EF7}':'\u2009•\u2009',
'\u{11EF2}':'',

}



