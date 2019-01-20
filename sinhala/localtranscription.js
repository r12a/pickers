function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'transcription') { return transcription(str) }
	if (direction == 'toISO15919') { return toISO15919(str) }
	}




function transliterate (str) {

str += ' '

str = str.replace(/\u200C/g, "ₓ")
str = str.replace(/\u200D/g, "₊")
str = str.replace(/𑇡/g, "1̣")
str = str.replace(/𑇢/g, "2̣")
str = str.replace(/𑇣/g, "3̣")
str = str.replace(/𑇤/g, "4̣")
str = str.replace(/𑇥/g, "5̣")
str = str.replace(/𑇦/g, "6̣")
str = str.replace(/𑇧/g, "7̣")
str = str.replace(/𑇨/g, "8̣")
str = str.replace(/𑇩/g, "9̣")
str = str.replace(/𑇪/g, "{10}")
str = str.replace(/𑇫/g, "{20}")
str = str.replace(/𑇬/g, "{30}")
str = str.replace(/𑇭/g, "{40}")
str = str.replace(/𑇮/g, "{50}")
str = str.replace(/𑇯/g, "{60}")
str = str.replace(/𑇰/g, "{70}")
str = str.replace(/𑇱/g, "{80}")
str = str.replace(/𑇲/g, "{90}")
str = str.replace(/𑇳/g, "{100}")
str = str.replace(/𑇴/g, "{1000}")
str = str.replace(/ං/g, "ŋ̽")
str = str.replace(/ඃ/g, "h̽")
str = str.replace(/අ/g, "ạ")
str = str.replace(/ආ/g, "ạ̄")
str = str.replace(/ඇ/g, "æ̣")
str = str.replace(/ඈ/g, "ǣ̣")
str = str.replace(/ඉ/g, "ị")
str = str.replace(/ඊ/g, "ị̄")
str = str.replace(/උ/g, "ụ")
str = str.replace(/ඌ/g, "ụ̄")
str = str.replace(/ඍ/g, "r̥̣")
str = str.replace(/ඎ/g, "r̥̣̄")
str = str.replace(/ඏ/g, "l̥̣")
str = str.replace(/ඐ/g, "l̥̣̄")
str = str.replace(/එ/g, "ẹ")
str = str.replace(/ඒ/g, "ẹ̄")
str = str.replace(/ඓ/g, "ạʲ")
str = str.replace(/ඔ/g, "ọ")
str = str.replace(/ඕ/g, "ọ̄")
str = str.replace(/ඖ/g, "ạʷ")
str = str.replace(/ක/g, "k")
str = str.replace(/ඛ/g, "kʰ")
str = str.replace(/ග/g, "g")
str = str.replace(/ඝ/g, "gʰ")
str = str.replace(/ඞ/g, "ŋ")
str = str.replace(/ඟ/g, "ᵑɡ")
str = str.replace(/ච/g, "ʧ")
str = str.replace(/ඡ/g, "ʧʰ")
str = str.replace(/ජ/g, "ʤ")
str = str.replace(/ඣ/g, "ʤʰ")
str = str.replace(/ඤ/g, "ɲ")
str = str.replace(/ඥ/g, "ᵑǰ")
str = str.replace(/ඦ/g, "ⁿʤ")
str = str.replace(/ට/g, "ʈ")
str = str.replace(/ඨ/g, "ʈʰ")
str = str.replace(/ඩ/g, "ɖ")
str = str.replace(/ඪ/g, "ɖʰ")
str = str.replace(/ණ/g, "n")
str = str.replace(/ඬ/g, "ⁿɖ")
str = str.replace(/ත/g, "t")
str = str.replace(/ථ/g, "tʰ")
str = str.replace(/ද/g, "d")
str = str.replace(/ධ/g, "dʰ")
str = str.replace(/න/g, "ṅ")
str = str.replace(/ඳ/g, "ⁿd")
str = str.replace(/ප/g, "p")
str = str.replace(/ඵ/g, "pʰ")
str = str.replace(/බ/g, "b")
str = str.replace(/භ/g, "bʰ")
str = str.replace(/ම/g, "m")
str = str.replace(/ඹ/g, "ᵐb")
str = str.replace(/ය/g, "y")
str = str.replace(/ර/g, "r")
str = str.replace(/ල/g, "l")
str = str.replace(/ව/g, "v")
str = str.replace(/ශ/g, "ʃ")
str = str.replace(/ෂ/g, "ʃ̇")
str = str.replace(/ස/g, "s")
str = str.replace(/හ/g, "h")
str = str.replace(/ළ/g, "ɭ")
str = str.replace(/ෆ/g, "f")
str = str.replace(/්/g, "͓")
str = str.replace(/ා/g, "ā")
str = str.replace(/ැ/g, "æ")
str = str.replace(/ෑ/g, "ǣ")
str = str.replace(/ි/g, "i")
str = str.replace(/ී/g, "ī")
str = str.replace(/ු/g, "u")
str = str.replace(/ූ/g, "ū")
str = str.replace(/ෘ/g, "r̥")
str = str.replace(/ෙ/g, "e")
str = str.replace(/ේ/g, "ē")
str = str.replace(/ෛ/g, "aʲ")
str = str.replace(/ො/g, "o")
str = str.replace(/ෝ/g, "ō")
str = str.replace(/ෞ/g, "aʷ")
str = str.replace(/ෟ/g, "l̥")
str = str.replace(/෦/g, "0")
str = str.replace(/෧/g, "1")
str = str.replace(/෨/g, "2")
str = str.replace(/෩/g, "3")
str = str.replace(/෪/g, "4")
str = str.replace(/෫/g, "5")
str = str.replace(/෬/g, "6")
str = str.replace(/෭/g, "7")
str = str.replace(/෮/g, "8")
str = str.replace(/෯/g, "9")
str = str.replace(/ෲ/g, "r̥̄")
str = str.replace(/ෳ/g, "l̥̄")
str = str.replace(/෴/g, "¶")



return str.trim()
}






function transcription (str) {

var consonants = new Set(['ක', 'ඛ', 'ග', 'ඝ', 'ඞ', 'ඟ', 'ච', 'ඡ', 'ජ', 'ඣ', 'ඤ', 'ඥ', 'ඦ', 'ට', 'ඨ', 'ඩ', 'ඪ', 'ණ', 'ඬ', 'ත', 'ථ', 'ද', 'ධ', 'න', 'ඳ', 'ප', 'ඵ', 'බ', 'භ', 'ම', 'ඹ', 'ය', 'ර', 'ල', 'ව', 'ශ', 'ෂ', 'ස', 'හ', 'ළ', 'ෆ'])
var indvowels = new Set(['අ', 'ආ', 'ඇ', 'ඈ', 'ඉ', 'ඊ', 'උ', 'ඌ', 'එ', 'ඒ', 'ඓ', 'ඖ', 'ඔ', 'ඕ','.',',',')'])

str = str.normalize('NFC')+' '

str = str.replace(/\u0DD9\u0DCA/g, "ē")
str = str.replace(/\u0DD9\u0DCF/g, "o")
str = str.replace(/\u0DD9\u0DDF/g, "aʷ")
str = str.replace(/\u0DDC\u0DCA/g, "ō")
str = str.replace(/\u0DD9\u0DCF\u0DCA/g, "ō")


// add inherent vowels
var withConjuncts = ''
for (let i=0; i<str.length; i++) {
	if (i<str.length-1 && consonants.has(str[i]) && (consonants.has(str[i+1]) || indvowels.has(str[i+1]) || str[i+1] === ' '))  withConjuncts += str[i]+'a'
	else  withConjuncts += str[i]
	}
str=withConjuncts


str = transliterate(str)

// remove virama & zwj
str = str.replace(/͓/g, "")
str = str.replace(/₊/g, "")

return str.trim()
}









		
function inSet (group, ch) {
	if (group.indexOf(ch) > -1) return true
	else { return false }
	}



function toISO15919 (str) {
	str += '  '
    var inherentvowelkillers = new Set(['\u{0DCA}', '\u{0DCF}', '\u{0DD0}', '\u{0DD1}', '\u{0DD2}', '\u{0DD3}', '\u{0DD4}', '\u{0DD6}', '\u{0DD8}', '\u{0DD9}', '\u{0DDA}', '\u{0DDB}', '\u{0DDC}', '\u{0DDD}', '\u{0DDE}', '\u{0DDF}', '\u{0DF2}', '\u{0DF3}'])
    var consonants = new Set(['ක', 'ඛ', 'ග', 'ඝ', 'ඞ', 'ඟ', 'ච', 'ඡ', 'ජ', 'ඣ', 'ඤ', 'ඥ', 'ඦ', 'ට', 'ඨ', 'ඩ', 'ඪ', 'ණ', 'ඬ', 'ත', 'ථ', 'ද', 'ධ', 'න', 'ඳ', 'ප', 'ඵ', 'බ', 'භ', 'ම', 'ඹ', 'ය', 'ර', 'ල', 'ව', 'ශ', 'ෂ', 'ස', 'හ', 'ළ', 'ෆ'])
	var aspiratedconsonants = 'कचटतपयशगजडदबलसड़'
	var punctuation = ',.?\'" ।॥॰෴'

	var out=''
	for (var i=0; i<str.length-2; i++) {
		var inherent = false
		var ambiguous = false
		var ch = str.charAt(i)
		
		// check for ambiguity, eg. b+h, or a+i
		if (ch == '\u0D4D' && inSet(aspiratedconsonants, str.charAt(i-1)) && str.charAt(i+1) == 'ह')  {
			ambiguous = true
			}
		if ((str.charAt(i+1) == 'इ' || str.charAt(i+1) == 'उ') && inSet(consonants, ch) )  {
			ambiguous = true
			}
		
		// add inherent vowel
		if (consonants.has(ch) && ! inherentvowelkillers.has(str.charAt(i+1))) { inherent = true }
		
		// absorb nuktas
		if (str.charAt(i+1) == '\u0D3C') { 
			ch += str.charAt(i+1)
			i++
			}

		// anusvara
		if (ch == '\u0D02') {
			if (inSet(punctuation, str.charAt(i+1))) { 
				ch = '̃'
				}
			else if (str.charAt(i) == '\u0D02') {
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
'\u0D9A':'k', 
'\u0D9B':'kh', 
'\u0D9C':'g', 
'\u0D9D':'gh', 
'\u0D9E':'ṅ', 
'\u0D9F':'ňg', 
'\u0DA0':'c', 
'\u0DA1':'ch', 
'\u0DA2':'j', 
'\u0DA3':'jh', 
'\u0DA4':'ñ', 
'\u0DA5':'jñ', 
'\u0DA6':'ňj', 
'\u0DA7':'ṭ', 
'\u0DA8':'ṭh', 
'\u0DA9':'ḍ', 
'\u0DAA':'ḍh', 
'\u0DAB':'ṇ', 
'\u0DAC':'ňḍ', 
'\u0DAD':'t', 
'\u0DAE':'th', 
'\u0DAF':'d', 
'\u0DB0':'dh', 
'\u0DB1':'n', 
'\u0DB3':'ňd', 
'\u0DB4':'p', 
'\u0DB5':'ph', 
'\u0DB6':'b', 
'\u0DB7':'bh', 
'\u0DB8':'m', 
'\u0DB9':'m̌b', 
'\u0DBA':'y', 
'\u0DBB':'r', 
'\u0DBD':'l', 
'\u0DC0':'v', 
'\u0DC1':'ś', 
'\u0DC2':'ṣ', 
'\u0DC3':'s', 
'\u0DC4':'h', 
'\u0DC5':'ḷ', 
'\u0DC6':'f', 

// vowel signs
'\u0DCF':'ā', 
'\u0dD0':'æ', 
'\u0dD1':'ǣ', 
'\u0DD2':'i', 
'\u0DD3':'ī', 
'\u0DD4':'u', 
'\u0DD6':'ū', 
'\u0DD8':'r̥', 
'\u0DF2':'r̥̄', 
'\u0DDF':'l̥', 
'\u0DF3':'l̥', 
'\u0DD9':'e', 
'\u0DDA':'ē', 
'\u0DDB':'ai', 
'\u0D49':'ô', 
'\u0DDC':'o', 
'\u0DDD':'ō', 
'\u0DDE':'au', 

// independent vowels
'\u0d85':'?', 
'\u0d85':'a', 
'\u0d86':'ā', 
'\u0d87':'æ', 
'\u0d88':'ǣ', 
'\u0d89':'i', 
'\u0d8A':'ī', 
'\u0d8B':'u', 
'\u0d8C':'ū', 
'\u0d8D':'r̥', 
'\u0d8E':'r̥̄', 
'\u0d8F':'l̥', 
'\u0d90':'l̥̄', 
'\u0d91':'e', 
'\u0d92':'ē', 
'\u0d93':'ai', 
'\u0d94':'o', 
'\u0d95':'ō', 
'\u0d96':'au', 

//virama
'\u0DCA':'',
'\u200D':'',

// visarga, anusvara
'\u0D83':'ḥ',
'\u0D82':'ṃ',

// punctuation
'।':'.',
'\u0D3D':'\'' ,
'\u0DF4':'.',

// numbers
'\u0DE6': '0',
'\u0DE7': '1', 
'\u0DE8': '2', 
'\u0DE9': '3', 
'\u0DEA': '4', 
'\u0DEB': '5', 
'\u0DEC': '6', 
'\u0DED': '7', 
'\u0DEE': '8', 
'\u0DEF': '9' 

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
			ch = '\u0D02'
			}
		else if (str.charAt(i) == '\u0303') { ch = '\u0D01' }
		
		// anusvara before conjunct
		if (nasals.indexOf(ch) > -1 && consonants.indexOf(str.charAt(i-1)) == -1 && consonants.indexOf(str.charAt(i+1)) > -1 ) {
			switch (ch) {
				case 'ṅ': ch = 'ङ\u0D4D'; break
				case 'ñ': ch = 'ञ\u0D4D'; break
				case 'ṇ': ch = 'ण\u0D4D'; break
				case 'n': ch = 'न\u0D4D'; break
				case 'm': ch = 'म\u0D4D'; break
				}
			ch = '<span class=alts><span class=altfirst>&nbsp;\u0D02</span><span class=altlast>'+ch+'</span></span>'
			conjunct = false
			}
		
		if (typeof mapToDeva[ch] != 'undefined') { out += mapToDeva[ch] }
		else { out += ch }
		if (conjunct) { out += '\u0D4D' }
		if (skipOne) { i++ }
		}

	return out.trim()
	}


var mapToDeva = {
'k': '\u0D15', 
'K': '\u0D16', 
'g': '\u0D17', 
'G': '\u0D18', 
'ṅ': '\u0D19', 
'q': '\u0D15\u0D3C', 
'X': '\u0D16\u0D3C', 
'c': '\u0D1A', 
'C': '\u0D1B', 
'j': '\u0D1C', 
'J': '\u0D1D', 
'ñ': '\u0D1E', 
'ġ': '\u0D17\u0D3C', 
'ṉ': '\u0D29', 
'ṭ': '\u0D1F', 
'Ṭ': '\u0D20', 
'ḍ': '\u0D21', 
'Ḍ': '\u0D22', 
'ṇ': '\u0D23', 
'ṛ': '\u0D21\u0D3C', 
'Ṛ': '\u0D22\u0D3C', 
't': '\u0D24', 
'T': '\u0D25', 
'd': '\u0D26', 
'D': '\u0D27', 
'n': '\u0D28', 
'ṟ': '\u0D31', 
'ẏ': '\u0D2F\u0D3C', 
'p': '\u0D2A', 
'P': '\u0D2B', 
'b': '\u0D2C', 
'B': '\u0D2D', 
'm': '\u0D2E', 
'ḷ': '\u0D33', 
'ḻ': '\u0D34', 
'y': '\u0D2F', 
'r': '\u0D30', 
'l': '\u0D32', 
'v': '\u0D35', 
'f': '\u0D2B\u0D3C', 
'z': '\u0D1C\u0D3C', 
'ś': '\u0D36', 
'ṣ': '\u0D37', 
's': '\u0D38', 
'h': '\u0D39', 
'?': '\u0D79', '?': '\u0D7A', 
'ɠ': '\u0D7B', 
'ʄ': '\u0D7C', 
'ɗ': '\u0D7E', 
'ɓ': '\u0D7F',


'A': '',
'Ā': '\u0D3E',
'I': '\u0D3F',
'Ī': '\u0D40',
'U': '\u0D41',
'Ū': '\u0D42',
'?': '\u0D56',
'?': '\u0D57',
'Ȓ': '\u0D43',
'Ř': '\u0D44',
'Ɫ': '\u0D62',
'Ḹ': '\u0D63',
'ê': '\u0D45',
'E': '\u0D46',
'Ē': '\u0D47',
'Ɛ': '\u0D48',
'Ô': '\u0D49',
'O': '\u0D4A',
'Ō': '\u0D4B',
'Ʊ': '\u0D4C',
'?': '\u0D4F',
'?': '\u0D3A',
'?': '\u0D3B',
'?': '\u0D4E',



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
'\u0D4D':'',

// candrabindu
'\u0303': '\u0D01',

// punctuation
'.': ' ।',
'\'': '\u0D3D',
'ḥ': '\u0D03',
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
