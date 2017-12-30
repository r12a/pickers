function localtranscribe (direction, str) {
	
	if (direction == 'toLatin') { return toLatin(str) }
	if (direction == 'toDeva') { return toDeva(str) }
	}
		
		

function toLatin (str) {
	// transcribes mandaic text into an Daniels/Bright transcription
	
		
	// add initial space so that space-based rules work
	str = ' '+str+' '
	
	// collect a list of punctuation, in order
	var punctuationSet = /!|\(|\)|\-|\.|:|\[|\]|\*|\/|\\|،|؟|«|»|‹|›| /g
	var punctuationList = str.match(punctuationSet)
	str = str.replace(punctuationSet,' ')
	
	// handle consonant duplication
	var re = /(.)([\u0859]?)\u085B/g
	str = str.replace(re,'$1$1$2')  // shadda
	
	str = str.replace(/\u0622/g,'ā') 
	
	// handle vowels
	str = str.replace(/ \u084F\u0845/g,' u') // initial in ushenna 
	str = str.replace(/ \u084F\u0849/g,' i') // initial in aksa 
	// str = str.replace(/\u0849\u0840 /g,'i ') // final aksa+halqa 

    str = str.replace(/\u0840\u085A/g,'a') // halqa + vocalisation mark
	str = str.replace(/\u0849\u085A/g,'e') // aksa + vocalisation mark
	str = str.replace(/\u0845\u085A/g,'o') // ushenna + vocalisation mark
    
    str = str.replace(/\u0840/g,'a') // halqa 
	str = str.replace(/\u0849/g,'[i{e{y]') // aksa 
	str = str.replace(/\u0845/g,'[u{o{w]') // ushenna 
	str = str.replace(/\u084F/g,'e') // in 

	
	// consonants
    str = str.replace(/\u0841/g, "b")
    str = str.replace(/\u0842\u0859/g, "\u03B3")
    str = str.replace(/\u0842/g, "g")
    str = str.replace(/\u0843\u0859/g, "\u03B4")
    str = str.replace(/\u0843/g, "d")
    str = str.replace(/\u0844\u0859/g, "\u1E25")
    str = str.replace(/\u0844/g, "h")
    str = str.replace(/\u0846/g, "z")
    str = str.replace(/\u0847/g, "\u1E96")
    str = str.replace(/\u0848\u0859/g, "\u1E93")
    str = str.replace(/\u0848/g, "\u1E6D")
    str = str.replace(/\u084A\u0859/g, "\u03C7")
    str = str.replace(/\u084A/g, "k")
    str = str.replace(/\u084B/g, "l")
    str = str.replace(/\u084C/g, "m")
    str = str.replace(/\u084D/g, "n")
    str = str.replace(/\u084E/g, "s")
    str = str.replace(/\u084F/g, "\u02BF")
    str = str.replace(/\u0850\u0859/g, "f")
    str = str.replace(/\u0850/g, "p")
    str = str.replace(/\u0851\u0859/g, "\u017E")
    str = str.replace(/\u0851/g, "\u1E63")
    str = str.replace(/\u0852/g, "q")
    str = str.replace(/\u0853/g, "r")
    str = str.replace(/\u0854\u0859/g, "\u010D,\u01F0")
    str = str.replace(/\u0854/g, "\u0161")
    str = str.replace(/\u0855\u0859/g, "\u03B8")
    str = str.replace(/\u0855/g, "t")
    str = str.replace(/\u0856/g, "\u1E0F")
    str = str.replace(/\u0857/g, "k\u1E0F")

    // numbers
	str = str.replace(/۱/g,'1') 
	str = str.replace(/۲/g,'2') 
	str = str.replace(/۳/g,'3') 
	str = str.replace(/۴/g,'4') 
	str = str.replace(/۵/g,'5') 
	str = str.replace(/۶/g,'6')
	str = str.replace(/۷/g,'7')
	str = str.replace(/۸/g,'8')
	str = str.replace(/۹/g,'9')
	str = str.replace(/۰/g,'0')
	
    // punctuation
	str = str.replace(/࡞/g,'&bull;')
    
	str = str.replace(/٪/g,'%')
	str = str.replace(/؟/g,'?')
	str = str.replace(/؛/g,'\u002C')
	str = str.replace(/،/g,',')
	str = str.replace(/؛/g,';')
	str = str.replace(/۔/g,'.')
	str = str.replace(/ـ/g,'')

	

	str = str.replace(/ʹ/g,'')
	// replace punctuation
	var ptr = 0
	var out = ''
	for (var c=0;c<str.length;c++) {
		if (str.charAt(c) == ' ') out += punctuationList[ptr++]
		else out += str.charAt(c)
		}
	str = out
	
	// add markup for ambiguous cases
	str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
	str = str.replace(/\|/g,'</span><span class=alt>')
	str = str.replace(/\{/g,'</span><span class=altlast>')
	str = str.replace(/\]/g,'</span></span>')
	//str = str.replace(/¶/g,'')


	return str.trim()
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
