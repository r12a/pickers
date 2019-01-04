function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'transcription') { return transcription(str) }
	if (direction == 'reverse') { return reverse(str) }
	if (direction == 'toISO1') { return toISO1(str) }
	if (direction == 'toISO2') { return toLatin(str,'iso2') }
	if (direction == 'toIPA') { return toLatin(str,'ipa') }
	}




function transliterate ( str ) { 
// based on harmonised translit for se asian scripts

str += '  '

str = str.replace(/ก/g, "k̯")
str = str.replace(/ข/g, "kʰ")
str = str.replace(/ฃ/g, "k̈ʰ")
str = str.replace(/ค/g, "ḵʰ")
str = str.replace(/ฅ/g, "ḵ̈ʰ")
str = str.replace(/ฆ/g, "ḵ̇ʰ")
str = str.replace(/ง/g, "ŋ̱")
str = str.replace(/จ/g, "c̯")
str = str.replace(/ฉ/g, "cʰ")
str = str.replace(/ช/g, "c̱ʰ")
str = str.replace(/ซ/g, "ṡ̱")
str = str.replace(/ฌ/g, "ċ̱ʰ")
str = str.replace(/ญ/g, "ẏ̱")
str = str.replace(/ฎ/g, "ḍ̯")
str = str.replace(/ฏ/g, "ṭ̯")
str = str.replace(/ฐ/g, "ṭʰ")
str = str.replace(/ฑ/g, "ṭ̲ʰ")
str = str.replace(/ฒ/g, "ṭ̲̇ʰ")
str = str.replace(/ณ/g, "ṇ̱")
str = str.replace(/ด/g, "d̯")
str = str.replace(/ต/g, "t̯")
str = str.replace(/ถ/g, "tʰ")
str = str.replace(/ท/g, "ṯʰ")
str = str.replace(/ธ/g, "ṯ̇ʰ")
str = str.replace(/น/g, "ṉ")
str = str.replace(/บ/g, "b̯")
str = str.replace(/ป/g, "p̯")
str = str.replace(/ผ/g, "pʰ")
str = str.replace(/ฝ/g, "f̱")
str = str.replace(/พ/g, "p̱ʰ")
str = str.replace(/ฟ/g, "ḟ̱")
str = str.replace(/ภ/g, "ṗ̱ʰ")
str = str.replace(/ม/g, "m̱")
str = str.replace(/ย/g, "y̱")
str = str.replace(/ร/g, "ṟ")
str = str.replace(/ฤ/g, "r̥")
str = str.replace(/ล/g, "ḻ")
str = str.replace(/ฦ/g, "l̥")
str = str.replace(/ว/g, "w̱")
str = str.replace(/ศ/g, "ś")
str = str.replace(/ษ/g, "ṣ")
str = str.replace(/ส/g, "s")
str = str.replace(/ห/g, "h")
str = str.replace(/ฬ/g, "ḻ̇")
str = str.replace(/อ/g, "ʔ")
str = str.replace(/ฮ/g, "ẖ")
str = str.replace(/ฯ/g, "⋯")
str = str.replace(/ะ/g, "a")
str = str.replace(/ั/g, "ä")
str = str.replace(/า/g, "ā")
str = str.replace(/ำ/g, "aᵐ")
str = str.replace(/ิ/g, "i")
str = str.replace(/ี/g, "ī")
str = str.replace(/ึ/g, "ɯ")
str = str.replace(/ื/g, "ɯ̄")
str = str.replace(/ุ/g, "u")
str = str.replace(/ู/g, "ū")
str = str.replace(/฿/g, "(baht)")
str = str.replace(/เ/g, "e")
str = str.replace(/แ/g, "ɛ")
str = str.replace(/โ/g, "o")
str = str.replace(/ใ/g, "äʲ")
str = str.replace(/ไ/g, "aʲ")
str = str.replace(/ๅ/g, "ɯ̃")
str = str.replace(/ๆ/g, "˖")
str = str.replace(/็/g, "˘")
str = str.replace(/่/g, "¹")
str = str.replace(/้/g, "²")
str = str.replace(/๊/g, "³")
str = str.replace(/๋/g, "⁴")
str = str.replace(/์/g, "˟")
str = str.replace(/๏/g, "•")
str = str.replace(/๚/g, "¶")
str = str.replace(/๛/g, "|")
str = str.replace(/໐/g, "0")
str = str.replace(/໑/g, "1")
str = str.replace(/໒/g, "2")
str = str.replace(/໓/g, "3")
str = str.replace(/໔/g, "4")
str = str.replace(/໕/g, "5")
str = str.replace(/໖/g, "6")
str = str.replace(/໗/g, "7")
str = str.replace(/໘/g, "8")
str = str.replace(/໙/g, "9")

return str.trim()
}



function transcription (str) {

str = str.normalize('NFC')+' '

	// collect a list of punctuation, in order
	var punctuationSet = /!|\(|\)|\-|\.|:|\[|\]|\*|\/|\\|،|؟|«|»|‹|›|߸|߹|ߺ|฿|๚|๛|ๆ|ฯ|๏| /g
	var punctuationList = str.match(punctuationSet)
	str = str.replace(punctuationSet,' ')


// reorder left-side vowels
str = str.replace(/เ(.[\u0E48\u0E49\u0E4A\u0E4B]?)/g, "$1เ")
str = str.replace(/แ(.[\u0E48\u0E49\u0E4A\u0E4B]?)/g, "$1แ")
str = str.replace(/โ(.[\u0E48\u0E49\u0E4A\u0E4B]?)/g, "$1โ")
str = str.replace(/ใ(.[\u0E48\u0E49\u0E4A\u0E4B]?)/g, "$1ใ")
str = str.replace(/ไ(.[\u0E48\u0E49\u0E4A\u0E4B]?)/g, "$1ไ")


str = str.replace(/ัย/g, "aj")
str = str.replace(/ัว/g, "ua")
str = str.replace(/ัวะ/g, "uaʔ")
str = str.replace(/ิว/g, "iw")
str = str.replace(/ือ/g, "ɯː")
str = str.replace(/ุย/g, "uj")
str = str.replace(/็อ/g, "o")
str = str.replace(/็อย/g, "ɔj")
str = str.replace(/เย/g, "ɤːj")
str = str.replace(/เว/g, "eːw")
str = str.replace(/เอ/g, "ɤː")
str = str.replace(/เอะ/g, "ɤʔ")
str = str.replace(/เะ/g, "e")
str = str.replace(/เา/g, "aw")
str = str.replace(/เาะ/g, "ɔ")
str = str.replace(/เิ/g, "ɤː")
str = str.replace(/เีย/g, "ia")
str = str.replace(/เียว/g, "iaw")
str = str.replace(/เียะ/g, "iaʔ")
str = str.replace(/เือ/g, "ɯa")
str = str.replace(/เือย/g, "ɯaj")
str = str.replace(/เือะ/g, "ɯaʔ")
str = str.replace(/เ็/g, "e")
str = str.replace(/เ็ว/g, "ew")
str = str.replace(/แว/g, "eːw")
str = str.replace(/แะ/g, "ɛ")
str = str.replace(/แ็/g, "ɛ")
str = str.replace(/โย/g, "ɔːj")
str = str.replace(/โะ/g, "o")
str = str.replace(/ไย/g, "aj")
str = str.replace(/ฯลฯ/g, "etc.")
str = str.replace(/ฤๅ/g, "rɯː")
str = str.replace(/ฦๅ/g, "lɯː")
str = str.replace(/วย/g, "uaj")
str = str.replace(/อย/g, "ɔːj")
str = str.replace(/าย/g, "aːj")
str = str.replace(/าว/g, "aːu")





	// replace punctuation
	var ptr = 0
	var out = ''
	for (var c=0;c<str.length;c++) {
		if (str.charAt(c) == ' ') out += punctuationList[ptr++]
		else out += str.charAt(c)
		}
	str = out

str = transliterate(str)


return str.trim()
}









function reverse ( str ) { 
// based on harmonised translit for se asian scripts

str += '  '

str = str.replace(/⁴/g, "๋")
str = str.replace(/ẖ/g, "ฮ")
str = str.replace(/ẏ̱/g, "ญ")
str = str.replace(/ṯ̇ʰ/g, "ธ")
str = str.replace(/ṯʰ/g, "ท")
str = str.replace(/ṭ̲̇ʰ/g, "ฒ")
str = str.replace(/ṭ̲ʰ/g, "ฑ")
str = str.replace(/ṭ̯/g, "ฏ")
str = str.replace(/ṭʰ/g, "ฐ")
str = str.replace(/ṣ/g, "ษ")
str = str.replace(/ṡ̱/g, "ซ")
str = str.replace(/ṟ/g, "ร")
str = str.replace(/ṗ̱ʰ/g, "ภ")
str = str.replace(/ṉ/g, "น")
str = str.replace(/ṇ̱/g, "ณ")
str = str.replace(/ḻ̇/g, "ฬ")
str = str.replace(/ḻ/g, "ล")
str = str.replace(/ḵ̈ʰ/g, "ฅ")
str = str.replace(/ḵ̇ʰ/g, "ฆ")
str = str.replace(/ḵʰ/g, "ค")
str = str.replace(/ḟ̱/g, "ฟ")
str = str.replace(/ḍ̯/g, "ฎ")
str = str.replace(/˟/g, "์")
str = str.replace(/˘/g, "็")
str = str.replace(/ʔ/g, "อ")
str = str.replace(/ɯ̄/g, "ื")
str = str.replace(/ɯ/g, "ึ")
str = str.replace(/ɛ/g, "แ")
str = str.replace(/ū/g, "ู")
str = str.replace(/ś/g, "ศ")
str = str.replace(/ŋ̱/g, "ง")
str = str.replace(/ī/g, "ี")
str = str.replace(/ċ̱ʰ/g, "ฌ")
str = str.replace(/ā/g, "า")
str = str.replace(/äʲ/g, "ใ")
str = str.replace(/ä/g, "ั")
str = str.replace(/¹/g, "่")
str = str.replace(/³/g, "๊")
str = str.replace(/²/g, "้")
str = str.replace(/y̱/g, "ย")
str = str.replace(/w̱/g, "ว")
str = str.replace(/u/g, "ุ")
str = str.replace(/t̯/g, "ต")
str = str.replace(/tʰ/g, "ถ")
str = str.replace(/s/g, "ส")
str = str.replace(/r̥ɯ̃/g, "ฤๅ")
str = str.replace(/r̥/g, "ฤ")
str = str.replace(/p̱ʰ/g, "พ")
str = str.replace(/p̯/g, "ป")
str = str.replace(/pʰ/g, "ผ")
str = str.replace(/o/g, "โ")
str = str.replace(/m̱/g, "ม")
str = str.replace(/l̥ɯ̃/g, "ฦๅ")
str = str.replace(/l̥/g, "ฦ")
str = str.replace(/k̯/g, "ก")
str = str.replace(/k̈ʰ/g, "ฃ")
str = str.replace(/kʰ/g, "ข")
str = str.replace(/i/g, "ิ")
str = str.replace(/h/g, "ห")
str = str.replace(/f̱/g, "ฝ")
str = str.replace(/e/g, "เ")
str = str.replace(/d̯/g, "ด")
str = str.replace(/c̱ʰ/g, "ช")
str = str.replace(/c̯/g, "จ")
str = str.replace(/cʰ/g, "ฉ")
str = str.replace(/b̯/g, "บ")
str = str.replace(/aᵐ/g, "ำ")
str = str.replace(/aʲ/g, "ไ")
str = str.replace(/a/g, "ะ")
str = str.replace(/B/g, "฿")
str = str.replace(/9/g, "໙")
str = str.replace(/8/g, "໘")
str = str.replace(/7/g, "໗")
str = str.replace(/6/g, "໖")
str = str.replace(/5/g, "໕")
str = str.replace(/4/g, "໔")
str = str.replace(/3/g, "໓")
str = str.replace(/2/g, "໒")
str = str.replace(/1/g, "໑")
str = str.replace(/0/g, "໐")


return str.trim()
}


		





		
function inSet (group, ch) {
	if (group.indexOf(ch) > -1) return true
	else { return false }
	}


function toLatin (str, target) {
	
	leftvowels = 'เแโใไ'
	tonemarks = '\u0E48\u0E49\u0E4A\u0E4B'
	vowels = '\u0E31\u0E47\u0E33\u0E34\u0E35\u0E36\u0E37\u0E38\u0E39\u0E30ายวอฤ'
	shortvowels = {'ะ':'','ิ':'','ึ':'','ุ':'','เะ':'','แะ':'','โะ':'','เาะ':'','ัาะ':'','เียะ':'','เือะ':'','เอะ':''}
	consonants = 'ตฏฐฑฒทถธกขคฆจฉชฌปผพภบฎดซศษสฟฝหฮลฬรญนณมง'
	debug = ''
	lowclass = 'คฅฆงชซฌญฑฒณทธนฝพภมยรลวฬฮ'
	highclass = 'ขฃฉฐถผฝศษสห'
	sonorants = 'มญณนรลฬง'
	tones = new Array;
	
	// housekeeping
	str = str.replace(/ ¶/g,'')
	str = str.replace(/\s+/g,' ')
	str = str.replace(/-/g,' ')
	str = str.trim()

	// remove symbol followed by gaaran
	str = str.replace(/.[\u0E31|\u0E47|\u0E33|\u0E34|\u0E35|\u0E36|\u0E37|\u0E38|\u0E39|\u0E30|า]์/g,'')
	str = str.replace(/.์/g,'')

	// analyse and rearrange aech syllable
	syllables = str.split(' ')
	str = ''
	for (s=0;s<syllables.length;s++) {
		//alert(syllables[s])
		syll = syllables[s]
		vowel = ''
		final = ''
		// detect lefted vowels, remove and store
		if (inSet(leftvowels, syll[0])) { 
			vowel = syll[0] 
			syll = syll.substr(1)
			}
		
		// split the syllable into parts
		tonemark = ''
		initial = syll[0]
		initialended = false
		var presettone = ''
		for (c=1;c<syll.length;c++) {
			//alert(syll[c])
			/*if (syll[c] == 'ร' && initial == 'ท' && ! initialended) {
				initial = 'ซ'
				initialended = true
				continue;
				}*/
			if (syll[c] == 'ย' && initial == 'อ' && ! initialended) {
				initial = syll[c]
				initialended = true
				presettone = 'mid'
				continue;
				} 
			if ((syll[c] == 'ง' || syll[c] == 'ญ' || syll[c] == 'น' || syll[c] == 'ม' || syll[c] == 'ย' || syll[c] == 'ร' || syll[c] == 'ล' || syll[c] == 'ว') && initial == 'ห' && ! initialended) {
				initial = syll[c]
				initialended = true
				presettone = 'high'
				continue;
				}
			if (inSet(tonemarks, syll[c])) { 
				tonemark = syll[c] 
				initialended = true
				continue;
				}
			if (inSet(vowels, syll[c])) {  
				vowel += syll[c] 
				initialended = true
				continue;
				}
			if (inSet(consonants, syll[c])) { 
				if (initialended) { final += syll[c] }
				else { initial += syll[c] }
				continue;
				}
			}
				
		// check for รร in initial cluster and move to vowel
		posn = syll.indexOf('รร')
		if (posn > -1 && vowel == '') { 
			vowel = 'รร'
			if (initial.length > posn+2) { final = initial.substr(posn+2) }
			initial = initial.substr(0, posn)
			}
			
		
		// put single left vowels in right context (this makes assumptions about ra and la)
		/*
		
		if (inSet(leftvowels, vowel) & initial.length > 1 && final == '' && initial[1] != 'ร' && initial[1] != 'ล') {  
			final = initial.substr(-1)
			initial = initial.substr(0,initial.length-1)
			}
			
			*/
		
		// if there's no vowel or tone mark, look for a final character (do so before tones processing, because you need the finals)
		if ((vowel == '' || inSet(leftvowels, vowel)) && tonemark == '' && initial.length > 1 && final == '') {
			//var pair = syll.match(/กร|กล|ขร|ขล|คร|คล|ตร|ปร|ปล|ผร|ผล|พร|พล|ทร|ศร|สร|หง|หญ|หน|หม|หย|หร|หล|หว/)
			var pair = syll.match(/กร|กล|ขร|ขล|คร|คล|ตร|ปร|ปล|ผร|ผล|พร|พล|ทร|ศร|สร/)
			if (pair && pair.index < syll.length-2) {
				// if there's something more than the pair, move it to the final
				final = initial.substr(-1)
				initial = initial.substr(0,initial.length-1)
				}
			if (syll.length >= 2 && pair == null) {
				// if this is not a legitimate pair, split the second char into the final
				// this runs the risk of mistaking CVra for CraV
				final = initial.substr(-1)
				initial = initial.substr(0,initial.length-1)
				}
			}
		
		
		// add inherent vowel
		if (vowel == '') {
			if (final == 'ร') vowel = 'ᴐː'
			else if ( initial == 'ฤ') vowel = ''
			else if (final != '')  vowel = 'o'
			else vowel = 'ะ'
			}
		
		
		/*if (vowel == '' && initial.length > 1 && final == '') {
			final = initial.substr(-1)
			initial = initial.substr(0,initial.length-1)
			vowel = 'o'
			}
		if (vowel == 'o' && final == 'ร') {
			vowel = 'ᴐː'
			}
		if (vowel == '' && final != '' && initial != 'ฤ') {
			vowel = 'o'
			}
		if (vowel == '' && final == '') {
			vowel = 'ะ'
			}*/

		//alert(initial+'+'+tonemark+'+'+vowel+'+'+final)
		str += initial+tonemark+vowel+final+' '
		debug += initial+'+'+tonemark+'+'+vowel+'+'+final+'|'
		
		// figure out tones for IPA transcription only
		if (target == 'ipa') { 
			tones[s] = ''
			if (tonemark == '\u0E4A') tones[s] = '\u0301' // high
			else if (tonemark == '\u0E4B') tones[s] = '\u030C'  // rising
			else if (tonemark == '\u0E48' ) {
				if (inSet(lowclass, initial[0]) && presettone != 'high') tones[s] = '\u0302'  // falling
				else tones[s] = '\u0300'  // low
				}
			else if (tonemark == '\u0E49') {
				if (inSet(lowclass, initial[0]) && presettone != 'high') tones[s] = '\u0301'  // high
				else tones[s] = '\u0302'  // falling
				}
			else { // no tone marks
				// first establish whether this is a live or dead syllable
				var dead = false
				var live = false
				if (final == '') {
					if (vowel in shortvowels) dead = true
					else live = true
					}
				else {
					if (inSet(sonorants, final)) live = true
					else dead = true
					}
				// assign tone
				if (live) { 
					if (presettone == 'high' || inSet(highclass,initial[0])) tones[s] = '\u030C'  // rising
					else  tones[s] = ''  // mid
					}
				else {
					if (presettone == 'low' && inSet(lowclass,initial[0])) {
						if (vowel in shortvowels) tones[s] = '\u0301'  // high
						else tones[s] = '\u0302'  // falling
						}
					else  tones[s] = '\u0300'  // low
					}
				}
			}
		}
		
	


	console.log(debug)
	
	if (target == 'iso2') { str = map2iso2(' '+str) }
	else {  str = map2ipa(' '+str) }


	
	out = ''
	str = str.trim()
	syllables = str.split(' ')
	

	// add tones
	for (s=0;s<syllables.length;s++) {
		tonelocation = syllables[s].match('a|ɤ|ɔ|e|o|ɛ|i|u|ɯ')
		if (tonelocation != null && tones[s]) {
			tonelocation = tonelocation.index
			syllables[s] = syllables[s].substr(0,tonelocation+1)+tones[s]+syllables[s].substr(tonelocation+1)
			}
		}
	
	// add markup for ambiguous cases
	for (s=0;s<syllables.length;s++) {
		syllables[s] = '<span class=syllable>'+syllables[s]+' </span>'
		if (syllables[s] != ' ' && syllables[s] != '') out += syllables[s]
		}
		
	
	out = out.replace(/\[/g,'<span class=alts><span class=altfirst>')
	out = out.replace(/\|/g,'</span><span class=alt>')
	out = out.replace(/\{/g,'</span><span class=altlast>')
	out = out.replace(/\]/g,'</span></span>')
	out = out.replace(/¶/g,'')

	return out
	}


function map2iso2 (str) {
	str = str.replace(/ ทร /, 'tor')
	str = str.replace(/ ทร/, ' s')
	str = str.replace(/ ศร/, ' s')
	str = str.replace(/ สร/, ' s')
	
	str = str.replace(/จ |ช |ซ |ฌ |ฎ |ฏ |ฐ |ฑ |ฒ |ด |ถ |ท |ธ |ศ |ษ |ส /g, 't ')
	str = str.replace(/ต|ฏ/g, 't')
	str = str.replace(/ฐ|ฑ|ฒ|ถ|ท|ธ/g, 'th')
	str = str.replace(/ข |ค |ฆ /g, 'k ')
	str = str.replace(/ก/g, 'k')
	str = str.replace(/ข|ค|ฆ|ฃ|ฅ/g, 'kh')
	str = str.replace(/จ/g, 'c')
	str = str.replace(/ฉ|ช|ฌ/g, 'ch')
	str = str.replace(/บ |พ |ฟ |ภ /g, 'p ')
	str = str.replace(/ป/g, 'p')
	str = str.replace(/บ/g, 'b')
	str = str.replace(/ฎ|ด/g, 'd')
	str = str.replace(/ผ|พ|ภ/g, 'ph')
	str = str.replace(/ฟ|ฝ/g, 'f')
	str = str.replace(/ซ|ศ|ษ|ส/g, 's')
	str = str.replace(/ห|ฮ/g, 'h')
	str = str.replace(/ญ |ล |ฬ /g, 'n ')
	str = str.replace(/ญ/g, 'y')
	str = str.replace(/ล|ฬ/g, 'l')
	str = str.replace(/น|ณ/g, 'n')
	str = str.replace(/ง/g, 'ng')
	str = str.replace(/ม/g, 'm')
	str = str.replace(/รร /g, 'an ')
	str = str.replace(/รร/g, 'a')
	str = str.replace(/ร /g, 'n ')
	str = str.replace(/ร/g, 'r')
	
	str = str.replace(/ฤๅ/g, 'rūe')
	str = str.replace(/ฤ/g, 'ri')
	str = str.replace(/เือย/g, 'ūeai')
	str = str.replace(/เียว/g, 'īao')
	str = str.replace(/เียะ/g, 'ia')
	str = str.replace(/เือะ/g, 'uea')
	str = str.replace(/เือ/g, 'ūea')
	str = str.replace(/เีย/g, 'īa')
	str = str.replace(/เอะ/g, 'oe')
	str = str.replace(/เาะ/g, 'ɔ')
	str = str.replace(/เ็ว/g, 'eo')
	str = str.replace(/ัวะ/g, 'ua')
	str = str.replace(/ัว/g, 'ūa')
	str = str.replace(/าว/g, 'āo')
	str = str.replace(/เา/g, 'ao')
	str = str.replace(/เว/g, 'ēo')
	str = str.replace(/แว/g, 'āeo')
	str = str.replace(/เอ/g, 'ōe')
	str = str.replace(/เิ/g, 'ōe')
	str = str.replace(/อย/g, 'ɔi')
	str = str.replace(/โย/g, 'ōi')
	str = str.replace(/ูย/g, 'ūi')
	str = str.replace(/ุย/g, 'ui')
	str = str.replace(/เย/g, 'ōei')
	str = str.replace(/วย/g, 'ūai')
	str = str.replace(/าย/g, 'āi')
	str = str.replace(/ไย|ัย/g, 'ai')
	str = str.replace(/ิว/g, 'io')
	str = str.replace(/เะ/g, 'e')
	str = str.replace(/เ็/g, 'e')
	str = str.replace(/โะ/g, 'o')
	str = str.replace(/แะ/g, 'ae')
	str = str.replace(/แ็/g, 'ae')
	
	str = str.replace(/\u0E34/g, 'i')
	str = str.replace(/\u0E35/g, 'ī')
	str = str.replace(/\u0E36/g, 'ue')
	str = str.replace(/\u0E37/g, 'ūe')
	str = str.replace(/\u0E38/g, 'u')
	str = str.replace(/\u0E39/g, 'ū')
	str = str.replace(/เ/g, 'ē')
	str = str.replace(/โ/g, 'ō')
	str = str.replace(/แ/g, 'āe')
	str = str.replace(/ไ|ใ/g, 'ai')
	str = str.replace(/ำ/g, 'am')
	str = str.replace(/า/g, 'ā')
	str = str.replace(/\u0E31/g, 'a')
	str = str.replace(/ะ/g, 'a')

	str = str.replace(/\u0E48/g, '')
	str = str.replace(/\u0E49/g, '')
	str = str.replace(/\u0E4A/g, '')
	str = str.replace(/\u0E4B/g, '')
	
	str = str.replace(/ อ/g, ' \'')
	str = str.replace(/ ว/g, 'w')
	str = str.replace(/ว/g, 'ūa')
	str = str.replace(/ย /g, 'ᴐ ')
	str = str.replace(/ ย/g, ' y')
	str = str.replace(/อ/g, 'o')
	str = str.replace(/ː/g, '')  // correction for xr
	
/*
	
	problems:
	
	ฤท ธิ์ > rit
	ใกร เขียน หนัง สือ เลม นั้น >  krai khīan nang sūe lēm nan
	
	*/
	
	return str
	}



function map2ipa (str) {
	str = str.replace(/ ทร /, 'tɔːr')
	str = str.replace(/ ทร/, ' s')
	str = str.replace(/ ศร/, ' s')
	str = str.replace(/ สร/, ' s')
	
	str = str.replace(/จ |ช |ซ |ฌ |ฎ |ฏ |ฐ |ฑ |ฒ |ด |ถ |ท |ธ |ศ |ษ |ส /g, 't ')
	str = str.replace(/ต|ฏ/g, 't')
	str = str.replace(/ฐ|ฑ|ฒ|ถ|ท|ธ/g, 'tʰ')
	str = str.replace(/ข |ค |ฆ /g, 'k ')
	str = str.replace(/ก/g, 'k')
	str = str.replace(/ข|ค|ฆ|ฃ|ฅ/g, 'kʰ')
	str = str.replace(/จ/g, 'tɕ')
	str = str.replace(/ฉ|ช|ฌ/g, 'tɕʰ')
	str = str.replace(/บ |พ |ฟ |ภ /g, 'p ')
	str = str.replace(/ป/g, 'p')
	str = str.replace(/บ/g, 'b')
	str = str.replace(/ฎ|ด/g, 'd')
	str = str.replace(/ผ|พ|ภ/g, 'pʰ')
	str = str.replace(/ฟ|ฝ/g, 'f')
	str = str.replace(/ซ|ศ|ษ|ส/g, 's')
	str = str.replace(/ห|ฮ/g, 'h')
	str = str.replace(/ญ |ล |ฬ /g, 'n ')
	str = str.replace(/ญ/g, 'j')
	str = str.replace(/ล|ฬ/g, 'l')
	str = str.replace(/น|ณ/g, 'n')
	str = str.replace(/ง/g, 'ŋ')
	str = str.replace(/ม/g, 'm')
	str = str.replace(/รร /g, 'an ')
	str = str.replace(/รร/g, 'a')
	str = str.replace(/ร /g, 'n ')
	str = str.replace(/ร/g, 'r')
	
	str = str.replace(/ฤๅ/g, 'rɯː')
	str = str.replace(/ฤ/g, '[ri|rɯ{rɤː]')
	str = str.replace(/เือย/g, 'ɯaj')
	str = str.replace(/เียว/g, 'iaw')
	str = str.replace(/เียะ/g, 'ia')
	str = str.replace(/เือะ/g, 'ɯa')
	
	str = str.replace(/วาย/g, 'uaːj')
	str = str.replace(/เือ/g, 'ɯːa')
	str = str.replace(/เีย/g, 'iːa')
	str = str.replace(/เอะ/g, 'ɤ')
	str = str.replace(/เาะ/g, 'ɔ')
	str = str.replace(/เ็ว/g, 'ew')
	str = str.replace(/ัวะ/g, 'ua')
	str = str.replace(/ัว/g, 'uːa')
	str = str.replace(/าว/g, 'aːw')
	str = str.replace(/เา/g, 'aw')
	str = str.replace(/เว/g, 'eːw')
	str = str.replace(/แว/g, 'ɛːw')
	str = str.replace(/เอ/g, 'ɤː')
	str = str.replace(/เิ/g, 'ɤː')
	str = str.replace(/อย/g, 'ɔːj')
	str = str.replace(/โย/g, 'oːj')
	str = str.replace(/ูย/g, 'uːj')
	str = str.replace(/ุย/g, 'uj')
	str = str.replace(/เย/g, 'ɤːj')
	str = str.replace(/วย/g, 'uaj')
	str = str.replace(/าย/g, 'aːj')
	str = str.replace(/ไย|ัย/g, 'aj')
	str = str.replace(/ิว/g, 'iw')
	str = str.replace(/เะ/g, 'e')
	str = str.replace(/เ็/g, 'e')
	str = str.replace(/โะ/g, 'o')
	str = str.replace(/แะ/g, 'ɛ')
	str = str.replace(/แ็/g, 'ɛ')
	
	str = str.replace(/\u0E34/g, 'i')
	str = str.replace(/\u0E35/g, 'iː')
	str = str.replace(/\u0E36/g, 'ɯ')
	str = str.replace(/\u0E37/g, 'ɯː')
	str = str.replace(/\u0E38/g, 'u')
	str = str.replace(/\u0E39/g, 'uː')
	str = str.replace(/เ/g, 'eː')
	str = str.replace(/โ/g, 'oː')
	str = str.replace(/แ/g, 'ɛː')
	str = str.replace(/ไ|ใ/g, 'aj')
	str = str.replace(/ำ/g, 'am')
	str = str.replace(/า/g, 'aː')
	str = str.replace(/\u0E31/g, 'a')
	str = str.replace(/ะ/g, 'a')

	str = str.replace(/\u0E48/g, '')
	str = str.replace(/\u0E49/g, '')
	str = str.replace(/\u0E4A/g, '')
	str = str.replace(/\u0E4B/g, '')
	
	str = str.replace(/ ว/g, ' w')
	str = str.replace(/ว/g, 'uːa')
	str = str.replace(/ อ/g, ' ')
	str = str.replace(/ย /g, 'ᴐː ')
	str = str.replace(/ ย/g, ' j')
	str = str.replace(/อ/g, 'o')
	
	/*
	
	problems:
	
	อยู่ > yuu
	ใกร เขียน หนัง สือ เลม นั้น >  krai khīan nang sūe lēm nan
	
	*/
		

	return str
	}




function toISO1 (str) {
	// housekeeping
	str = str.replace(/ ¶/g,'')
	str = str.replace(/\s+/g,' ')
	str = str.replace(/-/g,' ')
	str = str.trim()
	
	leftvowels = 'eæoıị'

	str = str.replace(/ก/g,'k')
	str = str.replace(/ข/g,'k̄h')
	str = str.replace(/ฃ/g,'ḳ̄h')
	str = str.replace(/ค/g,'kh')
	str = str.replace(/ฅ/g,'k̛h')
	str = str.replace(/ฆ/g,'ḳh')
	str = str.replace(/ง/g,'ng')
	str = str.replace(/จ/g,'c')
	str = str.replace(/ฉ/g,'c̄h')
	str = str.replace(/ช/g,'ch')
	str = str.replace(/ซ/g,'s')
	str = str.replace(/ฌ/g,'c̣h')
	str = str.replace(/ญ/g,'ỵ')
	
	str = str.replace(/ฎ/g,'ḍ')
	str = str.replace(/ฏ/g,'ṭ')
	str = str.replace(/ฐ/g,'ṭ̄h')
	str = str.replace(/ฑ/g,'ṯh')
	str = str.replace(/ฒ/g,'t̛h')  
	str = str.replace(/ณ/g,'ṇ')
	str = str.replace(/ด/g,'d')
	str = str.replace(/ต/g,'t')
	str = str.replace(/ถ/g,'t̄h')
	str = str.replace(/ท/g,'th')
	str = str.replace(/ธ/g,'ṭh')
	str = str.replace(/น/g,'n')
	
	str = str.replace(/บ/g,'b')
	str = str.replace(/ป/g,'p')
	str = str.replace(/ผ/g,'p̄h')
	str = str.replace(/ฝ/g,'f̄')
	str = str.replace(/พ/g,'ph')
	str = str.replace(/ฟ/g,'f')
	str = str.replace(/ภ/g,'p̣h')
	str = str.replace(/ม/g,'m')
	
	str = str.replace(/ย/g,'y')
	str = str.replace(/ร/g,'r')
	str = str.replace(/ล/g,'l')
	str = str.replace(/ฦ/g,'ł')
	str = str.replace(/ว/g,'w')
	str = str.replace(/ศ/g,'ศ')
	str = str.replace(/ศ/g,'ṣ̄')
	str = str.replace(/ษ/g,'s̛̄')
	str = str.replace(/ส/g,'s̄')
	str = str.replace(/ห/g,'h̄')
	str = str.replace(/ฬ/g,'ḷ')
	str = str.replace(/อ/g,'x')
	str = str.replace(/ฮ/g,'ฮ')
	
	str = str.replace(/ะ/g,'a')
	str = str.replace(/ั/g,'ạ')
	str = str.replace(/า/g,'ā')
	str = str.replace(/ำ/g,'å')
	str = str.replace(/ิ/g,'i')
	str = str.replace(/ี/g,'ī')
	str = str.replace(/ึ/g,'ụ')
	str = str.replace(/ื/g,'ụ̄')
	str = str.replace(/ุ/g,'u')
	str = str.replace(/ู/g,'ū')
	str = str.replace(/เ/g,'e')
	str = str.replace(/แ/g,'æ')
	str = str.replace(/โ/g,'o')
	str = str.replace(/ใ/g,'ı')
	str = str.replace(/ไ/g,'ị')
	str = str.replace(/ฤๅ/g,'vɨ')
	str = str.replace(/ฤ/g,'v')
	str = str.replace(/ฦๅ/g,'łɨ')
	str = str.replace(/ฦ/g,'ł')
	str = str.replace(/ย/g,'y')
	str = str.replace(/ว/g,'w')
	str = str.replace(/อ/g,'x')

	str = str.replace(/่/g,'̀')
	str = str.replace(/้/g,'̂')
	str = str.replace(/๊/g,'́')
	str = str.replace(/๋/g,'̌')
	str = str.replace(/็/g,'̆')
	str = str.replace(/์/g,'̒')
	str = str.replace(/๎/g,'~')
	str = str.replace(/ํ/g,'̊')
	str = str.replace(/ฺ/g,'̥')
	
	str = str.replace(/ๆ/g,'«')
	str = str.replace(/ฯ/g,'ǂ')
	str = str.replace(/๏/g,'§')
	str = str.replace(/ฯ/g,'ǀ')
	str = str.replace(/๚/g,'ǁ')
	str = str.replace(/๛/g,'»')
	str = str.replace(/๐/g,'0')
	str = str.replace(/๑/g,'1')
	str = str.replace(/๒/g,'2')
	str = str.replace(/๓/g,'3')
	str = str.replace(/๔/g,'4')
	str = str.replace(/๕/g,'5')
	str = str.replace(/๖/g,'6')
	str = str.replace(/๗/g,'7')
	str = str.replace(/๘/g,'8')
	str = str.replace(/๙/g,'9')
	
	return str.toLowerCase()
	}





function choose () {  // redefined here to add reordering of predisposed vowels
	var replacement = this.textContent
	var syllable = this.parentNode.parentNode
	if (replacement.charAt(0) == '\u00A0') { replacement = replacement.substr(1) }
	this.parentNode.innerHTML = replacement
	
	syll = syllable.textContent
	syll = syll.replace(/-/,'')
	if (syllable.querySelectorAll('span.altfirst').length == 0) { // only rearrange if this is the last alternative
		syll = syll.replace(/(.+)ไ/,'ไ$1')
		syll = syll.replace(/(.+)ใ/,'ใ$1')
		syll = syll.replace(/(.+)โ/,'โ$1')
		syll = syll.replace(/(.+)แ/,'แ$1')
		syll = syll.replace(/(.+)เ/,'เ$1')
		syllable.textContent = syll
		}
	}








