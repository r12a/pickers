function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'toIPA') { return toIPA(str) }
	if (direction == 'transcription') { return transcription(str) }
	if (direction == 'rtoBeng') { return radiceToBengali(str) }
	if (direction == 'toBeng') { return isoToBengali(str) }
	if (direction == 'toISO') { return bengaliToISO(str) }
	if (direction == 'toRadice') { return bengaliToRadice(str) }
	}




function transliterate (str) {
str += ' '

str = str.replace(/\u09DC/g, "ɽ")
str = str.replace(/\u09DD/g, "ɽ̇")
str = str.replace(/\u09DF/g, "ẏ")
str = str.replace(/।/g, ".")
str = str.replace(/ঁ/g, "m̽")
str = str.replace(/ং/g, "ŋ̽")
str = str.replace(/ঃ/g, "h̽")
str = str.replace(/অ/g, "ɔ̣")
str = str.replace(/আ/g, "ɑ")
str = str.replace(/ই/g, "ị")
str = str.replace(/ঈ/g, "ị̄")
str = str.replace(/উ/g, "ụ")
str = str.replace(/ঊ/g, "ụ̄")
str = str.replace(/ঋ/g, "r̥̣")
str = str.replace(/ঌ/g, "l̥̣")
str = str.replace(/এ/g, "ẹ")
str = str.replace(/ঐ/g, "ọʲ")
str = str.replace(/ও/g, "ọ")
str = str.replace(/ঔ/g, "ọʷ")
str = str.replace(/ক/g, "k")
str = str.replace(/খ/g, "kʰ")
str = str.replace(/গ/g, "g")
str = str.replace(/ঘ/g, "gʰ")
str = str.replace(/ঙ/g, "ŋ")
str = str.replace(/চ/g, "c")
str = str.replace(/ছ/g, "cʰ")
str = str.replace(/জ/g, "ʤ")
str = str.replace(/ঝ/g, "ʤʰ")
str = str.replace(/ঞ/g, "ñ")
str = str.replace(/ট/g, "ʈ")
str = str.replace(/ঠ/g, "ʈʰ")
str = str.replace(/ড/g, "ɖ")
str = str.replace(/ঢ/g, "ɖʰ")
str = str.replace(/ণ/g, "n̈")
str = str.replace(/ত/g, "t")
str = str.replace(/থ/g, "tʰ")
str = str.replace(/দ/g, "d")
str = str.replace(/ধ/g, "dʰ")
str = str.replace(/ন/g, "n")
str = str.replace(/প/g, "p")
str = str.replace(/ফ/g, "pʰ")
str = str.replace(/ব/g, "b")
str = str.replace(/ভ/g, "bʰ")
str = str.replace(/ম/g, "m")
str = str.replace(/য/g, "ý")
str = str.replace(/র/g, "r")
str = str.replace(/ল/g, "l")
str = str.replace(/শ/g, "ʃ")
str = str.replace(/ষ/g, "ʃ̇")
str = str.replace(/স/g, "ʃ̈")
str = str.replace(/হ/g, "h")
str = str.replace(/়/g, "ˑ")
str = str.replace(/া/g, "ɑ")
str = str.replace(/ি/g, "i")
str = str.replace(/ী/g, "ī")
str = str.replace(/ু/g, "u")
str = str.replace(/ূ/g, "ū")
str = str.replace(/ৃ/g, "r̥")
str = str.replace(/ৄ/g, "r̥̄")
str = str.replace(/ে/g, "e")
str = str.replace(/ৈ/g, "oʲ")
str = str.replace(/ো/g, "o")
str = str.replace(/ৌ/g, "oʷ")
str = str.replace(/্/g, "͓")
str = str.replace(/ৎ/g, "t̽")
str = str.replace(/ৗ/g, "ː")
str = str.replace(/ৠ/g, "r̥̣̄")
str = str.replace(/ৡ/g, "l̥̣̄")
str = str.replace(/ৢ/g, "l̥")
str = str.replace(/ৣ/g, "l̥̄")
str = str.replace(/০/g, "0")
str = str.replace(/১/g, "1")
str = str.replace(/২/g, "2")
str = str.replace(/৩/g, "3")
str = str.replace(/৪/g, "4")
str = str.replace(/৫/g, "5")
str = str.replace(/৬/g, "6")
str = str.replace(/৭/g, "7")
str = str.replace(/৮/g, "8")
str = str.replace(/৯/g, "9")

return str.trim()
}





function transcription (str) {

var consonants = new Set(['ক','খ','গ','ঘ','ঙ','চ','ছ','জ','ঝ','ঞ','ট','ঠ','ড','ঢ','ণ','ত','থ','দ','ধ','ন','প','ফ','ব','ভ','ম','য','র','ল','শ','ষ','স','হ','ড়','ঢ়','য়','ৰ','ৱ', 'ড়'])
var indvowels = new Set(['অ', 'আ', 'ই', 'ঈ', 'উ', 'ঊ', 'এ', 'ঐ', 'ও', 'ঔ', 'ৎ','ং', 'ঃ', ' '])

str = ' '+str.normalize('NFC')+'  '

// stop viramas being treated as combining characters
// (otherwise they're difficult to extract from cchar sequences later)
str = str.replace(/\u09CD/g,'V')


// add inherent vowels
var withInherents = ''
for (let i=0; i<str.length-1; i++) {
	if (consonants.has(str[i]) && (consonants.has(str[i+1]) || indvowels.has(str[i+1])))  withInherents += str[i]+'ʘ'
    else if (consonants.has(str[i]) && str[i+1] === '\u09BC' && ((consonants.has(str[i+2]) || indvowels.has(str[i+2])))) { // deals with nukta
        withInherents += str[i]+str[i+1]+'ʘ'
        i++
        }
	else  withInherents += str[i]
	}
str=withInherents


// bisorgo to H
str = str.replace(/ঃ/g, "H")

// po-phola + A to po-phola + AE
str = str.replace(/Vযা/g, "Æ")
str = str.replace(/Vযʘ /g, "O ")
str = str.replace(/Vযʘ/g, "[Æ{E]")

// sound changes for consonant clusters
// 5 codepoints
str = str.replace(/কVষVম/g, "kkʰ")
str = str.replace(/কVষVয/g, "kkʰ")
str = str.replace(/চVছVব/g, "ccʰ")
str = str.replace(/ জVঞা/g, " gæ")
str = str.replace(/জVজVব/g, "jj")
str = str.replace(/তVমVয/g, "tt")
str = str.replace(/সVতVয/g, "stt")
str = str.replace(/দVবVয/g, "dd")
str = str.replace(/সVতVর/g, "str")

// 4 codepoints
str = str.replace(/ কVষ/g, " kʰ")
str = str.replace(/জVঞা/g, "ggæ")
str = str.replace(/ জVঞ/g, " g")

// 3 codepoints
str = str.replace(/কVষ/g, "kkʰ")
str = str.replace(/জVঞ/g, "gg")
str = str.replace(/হVণ/g, "[nn{nh]")
str = str.replace(/তVব/g, "tt")
str = str.replace(/তVম/g, "tt")
str = str.replace(/থVব/g, "ttʰ")
str = str.replace(/দVম/g, "dd")
str = str.replace(/দVব/g, "dd")
str = str.replace(/ধVব/g, "ddʰ")
str = str.replace(/হVন/g, "[nn{nh]")
str = str.replace(/মVব/g, "[mm{mb]")
str = str.replace(/হVম/g, "[mh{mm]")
str = str.replace(/হVয/g, "jj")
str = str.replace(/লVম/g, "ll")
str = str.replace(/শVম/g, "ʃʃ")
str = str.replace(/শVব/g, "ʃʃ")
str = str.replace(/শVর/g, "sr")
str = str.replace(/সVমৃ/g, "sৃ")
str = str.replace(/ষVম/g, "ʃʃ")
str = str.replace(/সVত/g, "st")
str = str.replace(/সVথ/g, "stʰ")
str = str.replace(/সVন/g, "sn")
str = str.replace(/সVম/g, "ʃʃ")


// bo-phola at start of word
str = str.replace(/ (.)Vব/g, " $1")

// yo-phola doubling
str = str.replace(/(.)Vয/g, "$1$1")



str = str.replace(/ঞ/g, "N")
str = str.replace(/ফ/g, "[PF{F]")



str = ' '+transliterate(str)+'  '



// convert translit letters to ipa letters
// convert these to uppercase first, then lowercase all later, so there's no interference
// nuktas
str = str.replace(/ɖʰˑ/g, "Ɽ")
str = str.replace(/ɖˑ/g, "Ɽ")
str = str.replace(/ýˑ/g, "[J{E|W|∅]")
str = str.replace(/ɽ̇/g, "Ɽ")
str = str.replace(/ẏ/g, "[J{E|W|∅]")

// convert translit to ipa
str = str.replace(/c/g, "T͡Ʃ")
str = str.replace(/g/g, "Ɡ")
str = str.replace(/n̈/g, "N") 
str = str.replace(/ñ/g, "N") 
str = str.replace(/ ý/g, "ʤ")
str = str.replace(/m̽/g, "̃")

str = str.replace(/e/g, "[E{Æ]")
str = str.replace(/oʲ/g, "OJ")
str = str.replace(/oʷ/g, "OW")
str = str.replace(/o/g, "[O{U|Ɔ]")
str = str.replace(/xxx/g, "xxx")
str = str.replace(/xxx/g, "xxx")
str = str.replace(/xxx/g, "xxx")
str = str.replace(/xxx/g, "xxx")



// remove virama
str = str.replace(/V/g, "")

// replace H for bisorgo
str = str.replace(/H /g, "ɦ ")
str = str.replace(/H(.)/g, "$1$1")

// replace 0 for inherent vowel
str = str.replace(/ʘ /g, "[ɔ{o|∅] ")
str = str.replace(/ʘ/g, "[ɔ{o]")

// remove superfluous diacritics from translit letters
str = str.normalize('NFD')
str = str.replace(/\u0323/g, "") // dot below
str = str.replace(/\u0353/g, "") // virama cchar
str = str.replace(/\u0307/g, "") // dot above
str = str.replace(/\u0308/g, "") // diaeresis
str = str.replace(/\u033D/g, "") // x above
str = str.replace(/\u0304/g, "ː") // macron



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




function bengaliToRadice (str) { // adds inherent vowels - superceded by simple translit below
	str += '  '
	var inherentvowelkillers = '\u09CD\u09BE\u09BF\u09C0\u09C1\u09C2\u09C3\u09C7\u09C8\u09CB\u09CC\u09C4\u09E2\u09E3'
	//var consonants = 'কখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহড়ঢ়য়ৰৱ'
	var consonants = { 'ক':'','খ':'','গ':'','ঘ':'','ঙ':'','চ':'','ছ':'','জ':'','ঝ':'','ঞ':'','ট':'','ঠ':'','ড':'','ঢ':'','ণ':'','ত':'','থ':'','দ':'','ধ':'','ন':'','প':'','ফ':'','ব':'','ভ':'','ম':'','য':'','র':'','ল':'','শ':'','ষ':'','স':'','হ':'','ড়':'','ঢ়':'','য়':'','ৰ':'','ৱ':'' }
	var aspiratedconsonants = 'খঘছঝঠঢথধফভ'
	var punctuation = ',.?\'" ।॥॰'

	var out=''
	for (var i=0; i<str.length-2; i++) {
		var inherent = false
		var ambiguous = false
		var ch = str.charAt(i)
		var next = str.charAt(i+1)
		
		// check for ambiguity, eg. b+h, or a+i
		if (ch == '\u09CD' && inSet(aspiratedconsonants, next) && next == 'হ')  {
			ambiguous = true
			}
		if ((next == 'इ' || next == 'उ') && inSet(consonants, ch) )  {
			ambiguous = true
			}

		// absorb nuktas
		if (next == '\u09BC') { 
			ch += next
			i++
			next = str.charAt(i+1)
			}
		
		// add inherent vowel
		if (ch in consonants && ! (inSet(inherentvowelkillers, next))) { inherent = true }
		
		// deal with bo phola
		if (ch == 'ব' && str.charAt(i-1) == '\u09CD') { ch = '\u09CDব' }
		
		// yo phola
		if (ch == '\u09AF' && str.charAt(i-1) == '\u09CD') { 
			if (next == '\u09BE') { // before a
				ch = '[æ|ya{yæ]'
				i++
				}
			else if (next in consonants) {
				ch = 'y'
				inherent = false
				}
			}
		
		// anusvara
		if (ch == '\u0902') {
			if (inSet(punctuation, next)) { 
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
		
		
		if (typeof mapToRadice[ch] != 'undefined') { out += mapToRadice[ch] }
		else { out += ch }
		if (inherent) {
			if (str.charAt(i-1) && str.charAt(i-1)=='\u09CD') out += 'ô'
			else if (next == ' ' || next=='/') out += '[ɔ|ô{∅]'
			else out += '[ɔ{ô]' 
			}
		if (ambiguous) { out += ':' }
		}

	// add markup for ambiguous cases
	out = out.replace(/\[/g,'<span class=alts><span class=altfirst>')
	out = out.replace(/\|/g,'</span><span class=alt>')
	out = out.replace(/\{/g,'</span><span class=altlast>')
	out = out.replace(/\]/g,'</span></span>')
	out = out.replace(/¶/g,'')

	return out.replace(/ ¶/,'').trim()
	}






var mapToRadice = {
'া':'a',
'আ':'a', 
'ে':'[e{æ]', 
'এ':'[e{æ]', 
'ি':'i', 
'ই':'i', 
'ী':'ī', 
'ঈ':'ī', 
'ো':'o', 
'ও':'o', 
'অ':'ô', 
'ৈ':'oĭ', 
'ঐ':'oĭ', 
'ৌ':'oŭ', 
'ঔ':'oŭ', 
'অ':'[ɔ{ô]', 
'ু':'u', 
'উ':'u', 
'ূ':'ū', 
'ঊ':'ū', 
'ৃ':'ṛ', 
'ঋ':'ṛ',  

'প':'p', 
'ত':'t', 
'ৎ':'ṯ', 
'ট':'ʈ', 
'চ':'c', 
'ক':'k', 
'\u09CDব':'[b{v]', 
'ব':'b', 
'দ':'d', 
'ড':'ɖ', 
'জ':'j', 
'গ':'g', 
'ফ':'ph', 
'থ':'th', 
'ঠ':'ʈh', 
'ছ':'ch', 
'খ':'kh', 
'ভ':'bh', 
'ধ':'dh', 
'ঢ':'ɖh', 
'ঝ':'jh', 
'ঘ':'gh', 

'স':'s', 
'শ':'ʃ', 
'ষ':'ʂ', 
'হ':'h', 
'ঃ':'ḥ', 
'ম':'m', 
'ং':'ɱ', 
'ন':'n', 
'ণ':'ɳ', 
'ঞ':'ñ', 
'ঙ':'ŋ', 
'ঁ':'\u0303',

'ড়':'ɽ', 
'\u09DC':'ɽ', 
'ঢ়':'ɽh', 
'\u09DD':'ɽh', 
'র':'r', 
'ল':'l', 
'য়':'y', 
'\u09DF':'y', 
'য':'y̌', 

'\u09CD':''

}






function bengaliToISO (str) { 
	str += '  '
	var inherentvowelkillers = '\u09CD\u09BE\u09BF\u09C0\u09C1\u09C2\u09C3\u09C7\u09C8\u09CB\u09CC\u09C4\u09E2\u09E3'
	//var consonants = 'কখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহড়ঢ়য়ৰৱ'
	var consonants = { 'ক':'','খ':'','গ':'','ঘ':'','ঙ':'','চ':'','ছ':'','জ':'','ঝ':'','ঞ':'','ট':'','ঠ':'','ড':'','ঢ':'','ণ':'','ত':'','থ':'','দ':'','ধ':'','ন':'','প':'','ফ':'','ব':'','ভ':'','ম':'','য':'','র':'','ল':'','শ':'','ষ':'','স':'','হ':'','ড়':'','ঢ়':'','য়':'','ৰ':'','ৱ':'' }
	var aspiratedconsonants = 'খঘছঝঠঢথধফভ'
	var punctuation = ',.?\'" ।॥॰'

	var out=''
	for (var i=0; i<str.length-2; i++) {
		var inherent = false
		var ambiguous = false
		var ch = str.charAt(i)
		var next = str.charAt(i+1)
		
		// check for ambiguity, eg. b+h, or a+i
		if (ch == '\u09CD' && inSet(aspiratedconsonants, next) && next == 'হ')  {
			ambiguous = true
			}
		if ((next == 'ই' || next == 'উ') && (ch in consonants) )  {
			ambiguous = true
			}

		// absorb nuktas
		if (next == '\u09BC') { 
			ch += next
			i++
			next = str.charAt(i+1)
			}
		
		// add inherent vowel
		if (ch in consonants && ! (inSet(inherentvowelkillers, next))) { inherent = true }
		
		// anusvara
		if (ch == '\u0902') {
			if (inSet(punctuation, next)) { 
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
		if (inherent) {
			if (next == ' ' || next=='/') out += '[a{∅]'
			else out += 'a' 
			}
		if (ambiguous) { out += ':' }
		}

	// add markup for ambiguous cases
	out = out.replace(/\[/g,'<span class=alts><span class=altfirst>')
	out = out.replace(/\|/g,'</span><span class=alt>')
	out = out.replace(/\{/g,'</span><span class=altlast>')
	out = out.replace(/\]/g,'</span></span>')
	out = out.replace(/¶/g,'')

	return out.replace(/ ¶/,'').trim()
	}



var mapToISO = {
'অ':'a', 
'া':'ā', 
'আ':'ā', 
'ৈ':'ai', 
'ঐ':'ai', 
'ৌ':'au', 
'ঔ':'au', 
'ে':'ē', 
'এ':'ē', 
'ি':'i', 
'ই':'i', 
'ী':'ī', 
'ঈ':'ī', 
'ো':'ō', 
'ও':'ō', 
'ু':'u', 
'উ':'u', 
'ূ':'ū', 
'ঊ':'ū', 
'ৃ':'r̥', 
'ঋ':'r̥',  
'ৄ':'r̥̄',
'ৠ':'r̥̄',
'ৢ':'l̥',
'ঌ':'l̥',
'ৣ':'l̥̄',
'ৡ':'l̥̄',


'প':'p', 
'ত':'t', 
'ৎ':'ṯ', 
'ট':'ṭ', 
'চ':'c', 
'ক':'k', 
'খ':'kh', 
'ব':'b', 
'দ':'d', 
'ড':'ḍ', 
'জ':'j', 
'গ':'g', 
'ফ':'ph', 
'থ':'th', 
'ঠ':'ṭh', 
'ছ':'ch', 
'ভ':'bh', 
'ধ':'dh', 
'ঢ':'ḍh', 
'ঝ':'jh', 
'ঘ':'gh', 

'স':'s', 
'শ':'ś', 
'ষ':'ṣ', 
'হ':'h', 
'ঃ':'ḥ', 
'ম':'m', 
'ং':'ṁ', 
'ন':'n', 
'ণ':'ṇ', 
'ঞ':'ñ', 
'ঙ':'ṅ', 
'ঁ':'mঁ',

'ড়':'ṛ', 
'ঢ়':'ṛh', 
'র':'r', 
'ল':'l', 
'য়':'ẏ', 
'য':'y', 

'ৱ':'v',
'ক়':'q',
'খ়':'k͟h',
'গ়':'ġ',
'জ়':'z',
'ফ়':'f',
'ব়':'w',

'ঽ':'\'',
'্':''

}



function isoToBengali (str) { 
	str += '  '
	var canHaveAspiration = { 'p':'','t':'','ṭ':'','c':'','k':'', 
		'b':'', 'd':'', 'ḍ':'', 'j':'', 'g':'','ɽ':'' };
	var vowels = { 'a':'', 'ā':'', 'ai':'','au':'','ē':'', 'i':'', 'ī':'', 
		'o':'', 'ɔ':'', 'u':'', 'ū':'', 'Ṛ':'', 'Ṝ':'','Ḷ':'','Ḹ':'' };
	var consonants = { 'k':'','kh':'','g':'','gh':'','ṅ':'','c':'','ch':'','j':'','jh':'','ñ':'','ṭ':'','ṭh':'','ḍ':'','ḍh':'','ṇ':'','t':'','th':'','d':'','dh':'','n':'','p':'','ph':'','b':'','bh':'','m':'','y':'','r':'','l':'','ś':'','ṣ':'','s':'','h':'','ẏ':'','ৰ':'','v':'' }
    var output = '' 
	var ch = ''
	for (var i=0; i<str.length-1; i++) {
		var conjunct = false
		var ch = str.charAt(i)
		var next = str.charAt(i+1)
		
		// convert all vocalics to a single character
		str = str.replace(/r̥/g,'Ṛ')
		str = str.replace(/r̥̄/g,'Ṝ')
		str = str.replace(/l̥/g,'Ḷ')
		str = str.replace(/l̥̄/g,'Ḹ')
		str = str.replace(/mঁ/g,'M')
		
		// double independent vowels
		if (ch in vowels) {
			if (str.charAt(i-1) == ' ' || str.charAt(i-1) in vowels) {
				ch += ch    //.toUpperCase()
				}
			}
			
		// absorb h for aspiration
		if (ch in canHaveAspiration && next=='h') {
			ch += 'h'
			i++
			next = str.charAt(i+1)
			}
		
		// absorb whole diphthongs	
		if (ch=='a' && next=='i') {
			ch += 'i'
			i++
			next = str.charAt(i+1)
			}
		if (ch=='a' && next=='u') {
			ch += 'u'
			i++
			next = str.charAt(i+1)
			}
			
		if (ch=='̃') {
			ch = 'candrabindu'
			}
		if (ch=='͟') {
			ch = 'virama'
			}
		
		// check for conjuncts
		if (ch in consonants && next in consonants) 	conjunct = true
		//console.log('ch',ch,'next',next,'conjunct',conjunct)
			
		var out = isomap[ch]
		if (conjunct) out += '\u09CD'
		if (out) { if (out !='null') {output += out} }
		else { output += ch }
		}
	 
	return output.replace(/ ¶/,'').trim()
	}


var isomap = {
a:'null',
aa:'অ', 
ā:'া', 
āā:'আ', 
ai:'ে', 
aai:'ঐ', 
au:'ৌ', 
aau:'ঔ', 
ē:'ে', 
ēē:'এ', 
i:'ি', 
ii:'ই', 
ī:'ী', 
īī:'ঈ', 
ō:'ো', 
ōō:'ও', 
ɔ:'null', 
u:'ু', 
uu:'উ', 
ū:'ূ', 
ūū:'ঊ', 
Ṛ:'ৃ', 
ṚṚ:'ঋ',  
Ṝ:'ৄ',
ṜṜ:'ৠ',
Ḷ:'ৢ',
ḶḶ:'ঌ',
Ḹ:'ৣ',
ḸḸ:'ৡ',


p:'প', 
t:'ত', 
ṯ:'ৎ', 
ṭ:'ট', 
c:'চ', 
k:'ক', 
kh:'খ', 
b:'ব', 
d:'দ', 
ḍ:'ড', 
j:'জ', 
g:'গ', 
ph:'ফ', 
th:'থ', 
ṭh:'ঠ', 
ch:'ছ', 
bh:'ভ', 
dh:'ধ', 
ḍh:'ঢ', 
jh:'ঝ', 
gh:'ঘ', 

s:'স', 
ś:'শ', 
ṣ:'ষ', 
h:'হ', 
ḥ:'ঃ', 
m:'ম', 
ṁ:'ং', 
n:'ন', 
ṇ:'ণ', 
ñ:'ঞ', 
ṅ:'ঙ', 
M:'ঁ',

ṛ:'ড়', 
ṛh:'ঢ়', 
r:'র', 
l:'ল', 
ẏ:'য়', 
y:'য', 

v:'ৱ',
q:'ক়',
'k͟h':'খ়',
ġ:'গ়',
z:'জ়',
f:'ফ়',
w:'ব়',

'\'':'ঽ',
virama:'্'

}


function radiceToBengali (chstring) { 
	chstring += '  '
	// add an X to avoid breaking on lookahead; if no selection, try whole field; if still nothing, abort
	chstring = chstring.toLowerCase()+'X';
	if (chstring=='X') { chstring = node.value.toLowerCase()+'X'; }
	if (chstring=='X') { return; }

	var canHaveAspiration = { '\u0070':'','\u0074':'','\u0288':'','\u0063':'','\u006B':'', 
		'\u0062':'', '\u0064':'', '\u0256':'', '\u006A':'', '\u0067':'','ɽ':'' };
	var vowels = { 'a':'', 'æ':'', 'e':'', 'i':'', 'ī':'', 
		'o':'', 'ô':'', 'oĭ':'', 'oŭ':'', 'ɔ':'',
		'u':'', 'ū':'', 'ṛ':'', 'ĭ':'', 'ŭ':'' };
    var output = ''; var latin = '';
	for (var i=0; i<chstring.length-1; i++) {
		latin = chstring.charAt(i);
		if (chstring.charAt(i) in vowels) {
			if (i==0 || chstring.charAt(i-1) in vowels) {
				latin += latin;    //.toUpperCase();
				}
			}
		if (latin in canHaveAspiration && chstring.charAt(i+1)=='h') {
			latin += 'h';
			i++;
			}
		if ((latin=='o' || latin=='oo') && chstring.charAt(i+1)=='ĭ') {
			latin += 'ĭ';
			i++;
			}
		if ((latin=='o' || latin=='oo') && chstring.charAt(i+1)=='ŭ') {
			latin += 'ŭ';
			i++;
			}
		if (latin=='y' && chstring.charAt(i+1)=='\u030C') {
			latin += 'y̌';
			i++;
			}
		if (latin=='̃') {
			latin = 'candrabindu';
			}
		if (latin=='͟') {
			latin = 'virama';
			}
		
		var ch = map[latin];
		if (ch) { if (ch !='null') {output += ch;} }
		else { output += latin; }
		}
	//document.getElementById('latin').value = output;
	//node.value = node.value+' '+output;
	 
	return output.replace(/ ¶/,'').trim()
	}




var map = {
'a':'া',
'aa':'আ', 
'æ':'ে', 
'ææ':'এ', 
'e':'ে', 
'ee':'এ', 
'i':'ি', 
'ii':'ই', 
'ī':'ী', 
'īī':'ঈ', 
'o':'ো', 
'oo':'ও', 
'ô':'null', 
'ôô':'অ', 
'oĭ':'ে', 
'ooĭ':'এ', 
'oŭ':'ৌ', 
'ooŭ':'ঔ', 
'ɔ':'null', 
'ɔɔ':'অ', 
'u':'ু', 
'uu':'উ', 
'ū':'ূ', 
'ūū':'ঊ', 
'ṛ':'ৃ', 
'ṛṛ':'ঋ',  

'p':'প', 
't':'ত', 
'ṯ':'ৎ', 
'ʈ':'ট', 
'c':'চ', 
'k':'ক', 
'b':'ব', 
'd':'দ', 
'ɖ':'ড', 
'j':'জ', 
'g':'গ', 
'ph':'ফ', 
'th':'থ', 
'ʈh':'ঠ', 
'ch':'ছ', 
'kh':'খ', 
'bh':'ভ', 
'dh':'ধ', 
'ɖh':'ঢ', 
'jh':'ঝ', 
'gh':'ঘ', 

'v':'ব', 
's':'স', 
'ʃ':'শ', 
'ʂ':'ষ', 
'h':'হ', 
'ḥ':'ঃ', 
'm':'ম', 
'ɱ':'ং', 
'n':'ন', 
'ɳ':'ণ', 
'ɲ':'ঞ', 
'ŋ':'ঙ', 
'candrabindu':'ঁ',

'ɽ':'ড়', 
'ɽh':'ঢ়', 
'r':'র', 
'l':'ল', 
'y':'য়', 
'y̌':'য', 

'virama':'্'

}

