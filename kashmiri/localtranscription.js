function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'translitPlus') { return translitPlus(str) }
	if (direction == 'transcription') { return transcription(str) }
	if (direction == 'toISO15919') { return toISO15919(str) }
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









function translitPlus (str) {

var consonants = new Set(['प', 'त', 'च़', 'ट', 'च', 'क', 'ब', 'द', 'ड', 'ज', 'ग', 'फ', 'थ', 'छ़', 'ठ', 'छ', 'ख', 'स', 'श', 'ह', 'ज़', 'म', 'न', 'र', 'ल', 'य', 'व', '\u095B' ])
var indvowels = new Set(['ं', 'ः', 'इ', 'ई', 'ॶ', 'ॷ', 'उ', 'ऊ', 'ऎ', 'ए', 'ॳ', 'ॴ', 'ऒ', 'ओ', 'अ', 'आ', 'ॵ', 'ऐ', 'औ' ])
var vowels = new Set(['ि', 'ी', 'ॖ', 'ॗ', 'ु', 'ू', 'ॆ', 'े', 'ऺ', 'ऻ', 'ॊ', 'ो', 'ा', 'ॏ', 'ै', 'ौ', ])

str = ' '+str.normalize('NFC')+'        '

// stop viramas being treated as combining characters
// (otherwise they're difficult to extract from cchar sequences later)
str = str.replace(/\u094D/g,'V')


// add inherent vowels
var withInherents = ''
for (let i=0; i<str.length-1; i++) {
console.log(str[i])
    if (consonants.has(str[i]) && consonants.has(str[i+1]) && vowels.has(str[i+2]) && str[i+3] === ' ') { console.log('hey');withInherents += str[i] } // penultimate syllable
	else if (consonants.has(str[i]) && (consonants.has(str[i+1]) || indvowels.has(str[i+1])))  withInherents += str[i]+'ʘ'
    else if (consonants.has(str[i]) && str[i+1] === '\u093C' && ((consonants.has(str[i+2]) || indvowels.has(str[i+2])))) { // nukta
        withInherents += str[i]+str[i+1]+'ʘ'
        i++
        }
	else  withInherents += str[i]
	}
str=withInherents


str = ' '+transliterate(str)+'  '



// convert translit letters to ipa letters
// convert these to uppercase first, then lowercase all later, so there's no interference
// nuktas
str = str.replace(/ʧˑ/g, "ʦ")
str = str.replace(/ʧʰˑ/g, "ʦʰ")
str = str.replace(/ʤˑ/g, "z")

str = str.replace(/yV /g, "ⁱ ")


// remove virama
str = str.replace(/V/g, "")

// replace 0 for inherent vowel
str = str.replace(/ʘ/g, "ə")



// add markup for ambiguous cases
str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
str = str.replace(/\|/g,'</span><span class=alt>')
str = str.replace(/\{/g,'</span><span class=altlast>')
str = str.replace(/\]/g,'</span></span>')

return str.trim().toLowerCase()
}







function OLDtransliterate (str) {

str = ' '+str

str = str.replace(/\u0958/g, "q")
str = str.replace(/\u0959/g, "x")
str = str.replace(/\u095A/g, "ɣ")
str = str.replace(/\u095B/g, "z")
str = str.replace(/\u095C/g, "ɾ")
str = str.replace(/\u095D/g, "ɾʰ")
str = str.replace(/\u095E/g, "f")
str = str.replace(/ँ/g, "ŋ̽")
str = str.replace(/ं/g, "m̽")
str = str.replace(/ः/g, "h̽")
str = str.replace(/अ/g, "ạ")
str = str.replace(/आ/g, "ạ̄")
str = str.replace(/इ/g, "ị")
str = str.replace(/ई/g, "ị̄")
str = str.replace(/उ/g, "ụ")
str = str.replace(/ऊ/g, "ụ̄")
str = str.replace(/ऋ/g, "r̥̣")
str = str.replace(/ए/g, "ẹ̄")
str = str.replace(/ऐ/g, "ɛ̣̄")
str = str.replace(/ओ/g, "ọ̄")
str = str.replace(/औ/g, "ɔ̣̄")
str = str.replace(/क/g, "k")
str = str.replace(/ख/g, "kʰ")
str = str.replace(/ग/g, "g")
str = str.replace(/घ/g, "gʰ")
str = str.replace(/ङ/g, "ŋ")
str = str.replace(/च/g, "c")
str = str.replace(/छ/g, "cʰ")
str = str.replace(/ज/g, "ɟ")
str = str.replace(/झ/g, "ɟʰ")
str = str.replace(/ञ/g, "ɲ")
str = str.replace(/ट/g, "ʈ")
str = str.replace(/ठ/g, "ʈʰ")
str = str.replace(/ड/g, "ɖ")
str = str.replace(/ढ/g, "ɖʰ")
str = str.replace(/ण/g, "ɳ")
str = str.replace(/त/g, "t")
str = str.replace(/थ/g, "tʰ")
str = str.replace(/द/g, "d")
str = str.replace(/ध/g, "dʰ")
str = str.replace(/न/g, "n")
str = str.replace(/प/g, "p")
str = str.replace(/फ/g, "pʰ")
str = str.replace(/ब/g, "b")
str = str.replace(/भ/g, "bʰ")
str = str.replace(/म/g, "m")
str = str.replace(/य/g, "y")
str = str.replace(/र/g, "r")
str = str.replace(/ल/g, "l")
str = str.replace(/ळ/g, "ɭ")
str = str.replace(/व/g, "ʋ")
str = str.replace(/श/g, "ʃ")
str = str.replace(/ष/g, "ʂ")
str = str.replace(/स/g, "s")
str = str.replace(/ह/g, "h")
str = str.replace(/़/g, "ˑ")
str = str.replace(/ऽ/g, "´")
str = str.replace(/ा/g, "ā")
str = str.replace(/ि/g, "i")
str = str.replace(/ी/g, "ī")
str = str.replace(/ु/g, "u")
str = str.replace(/ू/g, "ū")
str = str.replace(/ृ/g, "r̥")
str = str.replace(/ॄ/g, "r̥̄")
str = str.replace(/े/g, "ē")
str = str.replace(/ै/g, "ɛ̄")
str = str.replace(/ो/g, "ō")
str = str.replace(/ौ/g, "ɔ̄")
str = str.replace(/्/g, "͓")
str = str.replace(/ॠ/g, "r̥̣̄")
str = str.replace(/।/g, ".")
str = str.replace(/॥/g, "¶")
str = str.replace(/०/g, "0")
str = str.replace(/१/g, "1")
str = str.replace(/२/g, "2")
str = str.replace(/३/g, "3")
str = str.replace(/४/g, "4")
str = str.replace(/५/g, "5")
str = str.replace(/६/g, "6")
str = str.replace(/७/g, "7")
str = str.replace(/८/g, "8")
str = str.replace(/९/g, "9")
str = str.replace(/॰/g, "¨")
str = str.replace(/₹/g, "¤")
str = str.replace(/\u200C/g, "ₓ")
str = str.replace(/\u200D/g, "₊")




return str.trim()
}









function transcription (str) {

var consonants = new Set(['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'ळ', 'व', 'श', 'ष', 'स', 'ह', '\u0958', '\u0959', '\u095A', '\u095B', '\u095C', '\u095D', '\u095E'])
var indvowels = new Set(['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ', 'ऋ', 'ॠ', 'ं', 'ः'])
var vowels = new Set(['ा', 'ि', 'ी', 'ु', 'ू', 'े', 'ै', 'ो', 'ौ', 'ृ', 'ॄ'])

str = ' '+str.normalize('NFC')+'        '

// stop viramas being treated as combining characters
// (otherwise they're difficult to extract from cchar sequences later)
str = str.replace(/\u094D/g,'V')


// add inherent vowels
var withInherents = ''
for (let i=0; i<str.length-1; i++) {
console.log(str[i])
    if (consonants.has(str[i]) && consonants.has(str[i+1]) && vowels.has(str[i+2]) && str[i+3] === ' ') { console.log('hey');withInherents += str[i] } // penultimate syllable
	else if (consonants.has(str[i]) && (consonants.has(str[i+1]) || indvowels.has(str[i+1])))  withInherents += str[i]+'ʘ'
    else if (consonants.has(str[i]) && str[i+1] === '\u093C' && ((consonants.has(str[i+2]) || indvowels.has(str[i+2])))) { // nukta
        withInherents += str[i]+str[i+1]+'ʘ'
        i++
        }
	else  withInherents += str[i]
	}
str=withInherents


str = ' '+transliterate(str)+'  '



// convert translit letters to ipa letters
// convert these to uppercase first, then lowercase all later, so there's no interference
// nuktas
str = str.replace(/kʰˑ/g, "x")
str = str.replace(/kˑ/g, "q")
str = str.replace(/gˑ/g, "ɣ")
str = str.replace(/ɖʰˑ/g, "R")
str = str.replace(/ɖˑ/g, "ɾ")
str = str.replace(/pʰˑ/g, "f")
str = str.replace(/ɟˑ/g, "z")

str = str.replace(/R/g, "ɾʰ")


// remove virama
str = str.replace(/V/g, "")

// replace 0 for inherent vowel
str = str.replace(/ʘ/g, "ə")



// add markup for ambiguous cases
str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
str = str.replace(/\|/g,'</span><span class=alt>')
str = str.replace(/\{/g,'</span><span class=altlast>')
str = str.replace(/\]/g,'</span></span>')

return str.trim().toLowerCase()
}










function inSet (group, ch) {
	if (group.indexOf(ch) > -1) return true
	else { return false }
	}



function toISO15919 (str) {
	str += '  '
	var inherentvowelkillers = '\u093E\u093F\u0940\u0941\u0942\u0956\u0957\u0943\u0944\u0962\u0963\u0945\u0946\u0947\u0948\u0949\u094A\u094B\u094C\u094F\u093A\u093B\u094E\u094D\u0955 X\u093C'
	var consonants = 'कखगघङक़ख़चछजझञग़ऩटठडढणड़ढ़तथदधनऱय़पफबभमळऴयरलवफ़ज़शषसहॹॺॻॼॾॿ\u093C'
	var aspiratedconsonants = 'कचटतपयशगजडदबलसड़'
	var punctuation = ',.?\'" ।॥॰'

	var out=''
	for (var i=0; i<str.length-2; i++) {
		var inherent = false
		var ambiguous = false
		var ch = str.charAt(i)
		
		// check for ambiguity, eg. b+h, or a+i
		if (ch == '\u094D' && inSet(aspiratedconsonants, str.charAt(i-1)) && str.charAt(i+1) == 'ह')  {
			ambiguous = true
			}
		if ((str.charAt(i+1) == 'इ' || str.charAt(i+1) == 'उ') && inSet(consonants, ch) )  {
			ambiguous = true
			}
		
		// add inherent vowel
		if ((inSet(consonants, ch)) && ! (inSet(inherentvowelkillers, str.charAt(i+1)))) { inherent = true }
		
		// absorb nuktas
		if (str.charAt(i+1) == '\u093C') { 
			ch += str.charAt(i+1)
			i++
			}

		// anusvara
		if (ch == '\u0902') {
			if (inSet(punctuation, str.charAt(i+1))) { 
				ch = '̃'
				}
			else if (str.charAt(i) == '\u0902') {
				ch = '<span class=alts><span class=altfirst>&nbsp;̃</span><span class=alt>'
				if ('कखगघङ'.indexOf(str.charAt(i+1)) > -1) { ch += 'ṅ' }
				else if ('चछजझञ'.indexOf(str.charAt(i+1)) > -1) { ch += 'ñ' }
				else if ('टठडढण'.indexOf(str.charAt(i+1)) > -1) { ch += 'ṇ' }
				else if ('तथदधन'.indexOf(str.charAt(i+1)) > -1) { ch += 'n' }
				else if ('पफबभम'.indexOf(str.charAt(i+1)) > -1) { ch += 'm' }
				else { ch += 'ṁ' }	
				ch += '</span><span class=altlast>ṁ</span></span>'
				}
			}
		
		
		if (typeof mapToISO[ch] != 'undefined') { out += mapToISO[ch] }
		else { out += ch }
		if (inherent) { out += 'a' }
		if (ambiguous) { out += ':' }
		}

	return out.trim()
	}


var mapToISO = {
'\u0915':'k', 
'\u0916':'kh', 
'\u0917':'g', 
'\u0918':'gh', 
'\u0919':'ṅ', 
'\u0915\u093C':'q', 
'\u0916\u093C':'k͟h', 
'\u091A':'c', 
'\u091B':'ch', 
'\u091C':'j', 
'\u091D':'jh', 
'\u091E':'ñ', 
'\u0917\u093C':'ġ', 
'\u0929':'ṉ', 
'\u091F':'ṭ', 
'\u0920':'ṭh', 
'\u0921':'ḍ', 
'\u0922':'ḍh', 
'\u0923':'ṇ', 
'\u0921\u093C':'ṛ', 
'\u0922\u093C':'ṛh', 
'\u0924':'t', 
'\u0925':'th', 
'\u0926':'d', 
'\u0927':'dh', 
'\u0928':'n', 
'\u0931':'ṟ', 
'\u092F\u093C':'ẏ', 
'\u092A':'p', 
'\u092B':'ph', 
'\u092C':'b', 
'\u092D':'bh', 
'\u092E':'m', 
'\u0933':'ḷ', 
'\u0934':'ḻ', 
'\u092F':'y', 
'\u0930':'r', 
'\u0932':'l', 
'\u0935':'v', 
'\u092B\u093C':'f', 
'\u091C\u093C':'z', 
'\u0936':'ś', 
'\u0937':'ṣ', 
'\u0938':'s', 
'\u0939':'h', 
'\u0979':'', '\u097A':'', 
'\u097B':'ɠ', 
'\u097C':'ʄ', 
'\u097E':'ɗ', 
'\u097F':'ɓ',

// vowel signs
'\u093E':'ā', 
'\u093F':'i', 
'\u0940':'ī', 
'\u0941':'u', 
'\u0942':'ū', 
'\u0956':'?', 
'\u0957':'?', 
'\u0943':'r̥', 
'\u0944':'r̥', 
'\u0962':'r̥̄', 
'\u0963':'l̥', 
'\u0945':'ê', 
'\u0946':'e', 
'\u0947':'ē', 
'\u0948':'ai', 
'\u0949':'ô', 
'\u094A':'o', 
'\u094B':'ō', 
'\u094C':'au', 
'\u094F':'?', '\u093A':'?', '\u093B':'?', '\u094E':'?', 

// independent vowels
'ऄ':'?', 
'अ':'a', 
'आ':'ā', 
'इ':'i', 
'ई':'ī', 
'उ':'u', 
'ऊ':'ū', 
'ॶ':'?', 'ॷ':'?', 
'ऋ':'r̥', 
'ॠ':'r̥̄', 
'ऌ':'l̥', 
'ॡ':'l̥̄', 
'ॲ':'â', 
'ऍ':'ê', 
'ऎ':'e', 
'ए':'ē', 
'ऐ':'ai', 
'ऑ':'ô', 
'ऒ':'o', 
'ओ':'ō', 
'औ':'au', 
'ॵ':'?', 'ॳ':'?', 'ॴ':'?',

//virama
'\u094D':'',

// candrabindu
'\u0901':'\u0303',

// punctuation
'।':'.',
'\u093D':'\'' ,
'\u0903':'ḥ',

// numbers
'०': '0',
'१': '1', 
'२': '2', 
'३': '3', 
'४': '4', 
'५': '5', 
'६': '6', 
'७': '7', 
'८': '8', 
'९': '9' 

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
