function localtranscribe (direction, str) {
	
	if (direction == 'normalise') { return normalise(str) }
	if (direction == 'toDeva') { return toDeva(str) }
	}
		
		
function normalise (str) {
	str += '  '

	str = str.replace(/\u202F\uE269/g,'\uE269')
	str = str.replace(/\uE289\uE27E/g,'\uE297')
	var out=''
	for (var i=0; i<str.length-2; i++) {
		var ch = str[i]
		
		// add inherent vowel
		if (typeof mapToCP[ch] !== 'undefined') { out += mapToCP[ch] }
		else { out += ch }
		}

	return out.trim()
	}


var mapToCP = {
// consonants
'\uE262':'\uE26C',
'\uE2B2':'\uE26C',
'\uE26C':'\uE26C',
'\uE268':'\uE26C',
'\uE2B1':'\uE2B1',
'\uE2B7':'\uE2B1',
'\uE2B6':'\uE2B1',

'\uE27B':'\uE27B', // I
'\uE27E':'\uE27B',
	
'\uE31D':'\u1854', // JA
'\uE31B':'\u1854',
	
'\uE289':'\uE286', // U
'\uE286':'\uE286',
	
'\uE2CF':'\uE2D9', // GA
'\uE2D9':'\uE2D9',
'\uE2D7':'\uE2D9',
'\uE2CE':'\uE2D8', // QA
'\uE2D6':'\u1889',
'\uED2A':'\u1889', // GE
'\uE2E8':'\u1889',
'\uE312':'\uE30B', // DA
'\uE30A':'\uE308', // TA
'\uE311':'\uE314', // DA CODA
'\uE2AF':'\uE2B0', // WA
'\uE347':'\u1841', // HA
'\uE346':'\u1841', 
'\uE2C7':'\u182A', // BA
'\uE2C3':'\u182A', 
'\uE2CD':'\u182B', // PA
'\uE2CA':'\u182B', 
'\uE2F1':'\u182E', // MA
'\uE2F4':'\u182E', 
'\uE2F3':'\u182E', 
'\uE2F7':'\u182F', // LA
'\uE2FA':'\u182F', 
'\uE2F9':'\u182F', 
'\uE2FD':'\u1830', // SA
'\uE301':'\u1830', 
'\uE2FF':'\u1830', 
'\uE303':'\u1831', // SHA
'\uE306':'\u1831', 
'\uE305':'\u1831', 
'\uE315':'\u1834', // CHA
'\uE316':'\u1834', 
'\uE322':'\u1837', // RA
'\uE326':'\u1837', 
'\uE325':'\u1837', 
'\uE332':'\u1839', // FA
'\uE32F':'\u1839', 
'\uE338':'\u183A', // KA
'\uE335':'\u183A', 
'\uE33F':'\u183C', // TSA
'\uE341':'\u183C', 
'\uE340':'\u183C', 
'\uE342':'\u183D', // ZA
'\uE344':'\u183D', 
'\uE343':'\u183D', 
'\uE348':'\u183F', // ZRA
'\uE34F':'\u1842', // CHI
	
	
	/*
'\uE2':'\u18',

// medials and finals
'\uE2':'\u18',
'\uE2':'\u18',
'\uE2':'\u18',
'\uE2':'\u18',
'\uE2':'\u18',
'\uE2':'\u18',

// vowel signs
'\uE2':'\u18',
'\uE2':'\u18',
'\uE2':'\u18',
'\uE2':'\u18',
'\uE2':'\u18',
'\uE2':'\u18',

// independent vowels
'\uE2':'\u18',
'\uE2':'\u18',
'\uE2':'\u18',
'\uE2':'\u18',
'\uE2':'\u18',
'\uE2':'\u18',
'\uE2':'\u18',

//virama
'\u1BAA':'',
'\u1BAB':'',

// punctuation
'।':'.',
'\u093D':'\'' ,
'\u0903':'ḥ',

// numbers
'\uE2':'\u18',
'\uE2':'\u18',
'\uE2':'\u18',
'\uE2':'\u18',
'\uE2':'\u18',
'\uE2':'\u18',
'\uE2':'\u18',
'\uE2':'\u18',
'\uE2':'\u18',
'\uE2':'\u18',
*/
}



function inSet (group, ch) {
	if (group.indexOf(ch) > -1) return true
	else { return false }
	}



function toLatin (str) {
	str += '  '
	var ivowelkillerSet = new Set(['\u1BAA', '\u1BAC', '\u1BAD', '\u1BA1', '\u1BA2', '\u1BA3', '\u1BA4', '\u1BA5', '\u1BA6', '\u1BA7', '\u1BA8', '\u1BA9', '\u1BAB']) // all characters that would kill the inherent vowel
	var consonantSet = new Set(['\u1B8A', '\u1B8C', '\u1B8D', '\u1B8E', '\u1B8F', '\u1B91', '\u1B92', '\u1B93', '\u1B94', '\u1B95', '\u1B98', '\u1B99', '\u1B9A', '\u1B9C', '\u1B9B', '\u1B9E', '\u1B9D', '\u1BA0', '\u1B8B', '\u1BAE', '\u1B96', '\u1B97', '\u1B90', '\u1BAF', '\u1B9F', '\u1BBD', '\u1BA1', '\u1BA2', '\u1BA3'])

	var out=''
	for (var i=0; i<str.length-2; i++) {
		var inherent = false
		var ambiguous = false
		var ch = str[i]
		
		// add inherent vowel
		if (consonantSet.has(ch) && ! ivowelkillerSet.has(str[i+1])) inherent = true		
		
		if (typeof mapToISO[ch] !== 'undefined') { out += mapToISO[ch] }
		else { out += ch }
		if (inherent) { out += 'a' }
		if (ambiguous) { out += ':' }
		}

	return out.trim()
	}


var mapToISO = {
// consonants
'\u1B8A':'k',
'\u1B8C':'g',
'\u1B8D':'ng',
'\u1B8E':'c',
'\u1B8F':'j',
'\u1B91':'ny',
'\u1B92':'t',
'\u1B93':'d',
'\u1B94':'n',
'\u1B95':'p',
'\u1B98':'b',
'\u1B99':'m',
'\u1B9A':'y',
'\u1B9C':'l',
'\u1B9B':'r',
'\u1B9E':'s',
'\u1B9D':'w',
'\u1BA0':'h',
'\u1B8B':'q',
'\u1BAE':'kh',
'\u1B96':'f',
'\u1B97':'v',
'\u1B90':'z',
'\u1BAF':'sy',
'\u1B9F':'x',

// medials and finals
'\u1BA1':'y',
'\u1BA2':'r',
'\u1BA3':'l',
'\u1B80':'ng',
'\u1B81':'r',
'\u1B82':'h',

// vowel signs
'\u1BA4':'i',
'\u1BA5':'u',
'\u1BA6':'\u00E9',
'\u1BA7':'o',
'\u1BA8':'e',
'\u1BA9':'eu',

// independent vowels
'\u1B83':'a',
'\u1B84':'i',
'\u1B85':'u',
'\u1B86':'\u00E9',
'\u1B87':'o',
'\u1B88':'e',
'\u1B89':'eu',

//virama
'\u1BAA':'',
'\u1BAB':'',

// punctuation
'।':'.',
'\u093D':'\'' ,
'\u0903':'ḥ',

// numbers
'\u1BB0':'0',
'\u1BB1':'1',
'\u1BB2':'2',
'\u1BB3':'3',
'\u1BB4':'4',
'\u1BB5':'5',
'\u1BB6':'6',
'\u1BB7':'7',
'\u1BB8':'8',
'\u1BB9':'9',

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
