function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'toISO') { return transcribetoISO(str) }
	if (direction == 'toLOC') { return transcribetoLOC(str) }
	if (direction == 'toIPA') { return transcribetoIPA(str) }
	if (direction == 'devowel') { return removeVowels(str) }
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



function removeVowels (str) {
// removes the harakat etc from the text in the text area

var vowels = ['ِ','ٍ','ُ','ٌ','َ','ً','ْ','ّ']

for (var i=0;i<vowels.length;i++) {
	re = new RegExp(vowels[i],'g')
	str = str.replace(re,'')
	}

return str
}




var vowels = {'\u064E':'a', '\u064F':'u', '\u0650':'i', '\u0652':'sukun', 	'\u064B':'an', '\u064C':'un', '\u064D':'in'}




function transcribetoIPA (str) {
	// transcribes vowelled arabic text into an LOC transcription
	
    str = str.normalize('NFC')

	// check that there are vowels
	var found = false
	for (var i=0;i<str.length;i++) {
		if (vowels[str.charAt(i)]) { found=true; break }
		}
	if (!found) alert('For a complete transcription you need to add vowels to the text.')
	
	// add initial space so that beginning of word rules work
	str = ' '+str
	
	// disambiguate any xh followed by h
	str = str.replace(/([ت|ك|س|غ|د])ه/g, "$1ʹه")
	
	str = str.replace(/اللّٰه/g,'Allāh') 

	// handle shadda
	var re = /(.)([\u064E|\u064F|\u0650|\u0652|\u064B|\u064C|\u064D]?)\u0651/g
	str = str.replace(re,'$1$1$2')  // shadda
	
	str = str.replace(/ ال/g,' al-') // definite article
	
	str = str.replace(/\u200C([^ ])/g,'ʹ$1')  // zwnj creating final form in middle of word

	str = str.replace(/\u064E[\u0651]?ا/g,'aː') 
	str = str.replace(/\u064E[\u0651]?ى/g,'aː') 
	str = str.replace(/\u064F[\u0651]?و/g,'uː') 
	str = str.replace(/\u0650[\u0651]?ى/g,'iː') 
	str = str.replace(/\u0650[\u0651]?ي/g,'iː') 
	str = str.replace(/\u064E[\u0651]?و\u0652/g,'aw') 
	str = str.replace(/\u064E[\u0651]?ى\u0652/g,'ay') 
	
	
	str = str.replace(/ء/g,'ʔ') 
	str = str.replace(/م/g,'m') 
	str = str.replace(/\bا/g,'ʔa') 
	str = str.replace(/ا/g,'') 
	str = str.replace(/ آ/g,'ʔaː') 
	//str = str.replace(/آ/g,'[’ā{ā]') 
	//str = str.replace(/ أ/g,'') 
	str = str.replace(/أ/g,'ʔ') 
	//str = str.replace(/ إ/g,'') 
	str = str.replace(/إ/g,'ʔ') 
	str = str.replace(/ٱ/g,'') 
	str = str.replace(/ؤ/g,'ʔ') 
	str = str.replace(/ئ/g,'ʔ') 
	str = str.replace(/ب/g,'b') 
	str = str.replace(/ت/g,'t') 
	str = str.replace(/ث/g,'θ') 
	str = str.replace(/ج/g,'d͡ʒ') 
	str = str.replace(/ح/g,'ħ')
	str = str.replace(/خ/g,'x')
	str = str.replace(/د/g,'d') 
	str = str.replace(/ذ/g,'ð') 
	str = str.replace(/ر/g,'r') 
	str = str.replace(/ز/g,'z') 
	str = str.replace(/س/g,'s') 
	str = str.replace(/ش/g,'ʃ') 
	str = str.replace(/ص/g,'sˤ') 
	str = str.replace(/ض/g,'dˤ') 
	str = str.replace(/ط/g,'tˤ') 
	str = str.replace(/ظ/g,'ðˤ') 
	str = str.replace(/ع/g,'ʕ') 
	str = str.replace(/غ/g,'ɣ') 
	str = str.replace(/ف/g,'f') 
	str = str.replace(/ق/g,'q') 
	str = str.replace(/ك/g,'k') 
	str = str.replace(/ل/g,'l')
	str = str.replace(/م/g,'m')
	str = str.replace(/ن/g,'n')
	str = str.replace(/ه/g,'h')
	str = str.replace(/و/g,'w') 
	str = str.replace(/ي/g,'y') 
	str = str.replace(/ة/g,'') 
	str = str.replace(/ى/g,'ỳ') 
	
	str = str.replace(/\u064E/g,'a') 
	str = str.replace(/\u064F/g,'ʊ') 
	str = str.replace(/\u0650/g,'ɪ') 
	str = str.replace(/\u0652/g,'') 
	str = str.replace(/\u064B/g,'an')  
	str = str.replace(/\u064C/g,'ʊn') 
	str = str.replace(/\u064D/g,'ɪn')
	 
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
	
	str = str.replace(/٪/g,'%')
	str = str.replace(/؟/g,'?')
	str = str.replace(/؛/g,'\u002C')
	str = str.replace(/،/g,',')
	str = str.replace(/؛/g,';')
	str = str.replace(/۔/g,'.')
	str = str.replace(/ـ/g,'')


console.log(str)
	// replace shams letters after definite article
	str = str.replace(/ al-t/g,' att')
	str = str.replace(/ al-θ/g,' aθθ')
	str = str.replace(/ al-d/g,' add')
	str = str.replace(/ al-ð/g,' aðð')
	str = str.replace(/ al-r/g,' arr')
	str = str.replace(/ al-z/g,' azz')
	str = str.replace(/ al-s/g,' ass')
	str = str.replace(/ al-ʃ/g,' aʃʃ')
	str = str.replace(/ al-sˤ/g,' assˤ')
	str = str.replace(/ al-dˤ/g,' addˤ')
	str = str.replace(/ al-tˤ/g,' attˤ')
	str = str.replace(/ al-ðˤ/g,' adðˤ')
	str = str.replace(/ al-l/g,' all')
	str = str.replace(/ al-n/g,' ann')
	
	
	// add markup for ambiguous cases
	str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
	str = str.replace(/\|/g,'</span><span class=alt>')
	str = str.replace(/\{/g,'</span><span class=altlast>')
	str = str.replace(/\]/g,'</span></span>')
	str = str.replace(/¶/g,'')


	document.getElementById('pulldown').style.display='none'
	return str.trim()
	}








function transcribetoLOC (str) {
	// transcribes vowelled arabic text into an LOC transcription
	
	
	// check that there are vowels
	var found = false
	for (var i=0;i<str.length;i++) {
		if (vowels[str.charAt(i)]) { found=true; break }
		}
	if (!found) alert('For a complete transcription you need to add vowels to the text.')
	
	// add initial space so that beginning of word rules work
	str = ' '+str
	
	// disambiguate any xh followed by h
	str = str.replace(/([ت|ك|س|غ|د])ه/g, "$1ʹه")
	
	str = str.replace(/اللّٰه/g,'Allāh') 

	// handle shadda
	var re = /(.)([\u064E|\u064F|\u0650|\u0652|\u064B|\u064C|\u064D]?)\u0651/g
	str = str.replace(re,'$1$1$2')  // shadda
	
	str = str.replace(/ ال/g,' al-') // definite article
	
	str = str.replace(/\u200C([^ ])/g,'ʹ$1')  // zwnj creating final form in middle of word

	str = str.replace(/\u064E[\u0651]?ا/g,'ā') 
	str = str.replace(/\u064E[\u0651]?ى/g,'á') 
	str = str.replace(/\u064F[\u0651]?و/g,'ū') 
	str = str.replace(/\u0650[\u0651]?ى/g,'ī') 
	str = str.replace(/\u0650[\u0651]?ي/g,'ī') 
	str = str.replace(/\u064E[\u0651]?و\u0652/g,'aw') 
	str = str.replace(/\u064E[\u0651]?ى\u0652/g,'ay') 
	
	
	str = str.replace(/ء/g,'’') 
	str = str.replace(/م/g,'m') 
	str = str.replace(/\bا/g,'ʾa') 
	str = str.replace(/ا/g,'') 
	str = str.replace(/ آ/g,'ā') 
	str = str.replace(/آ/g,'[’ā{ā]') 
	str = str.replace(/ أ/g,'') 
	str = str.replace(/أ/g,'’') 
	str = str.replace(/ إ/g,'') 
	str = str.replace(/إ/g,'’') 
	str = str.replace(/ٱ/g,'') 
	str = str.replace(/ؤ/g,'’') 
	str = str.replace(/ئ/g,'’') 
	str = str.replace(/ب/g,'b') 
	str = str.replace(/ت/g,'t') 
	str = str.replace(/ث/g,'th') 
	str = str.replace(/ج/g,'j') 
	str = str.replace(/ح/g,'ḥ')
	str = str.replace(/خ/g,'kh')
	str = str.replace(/د/g,'d') 
	str = str.replace(/ذ/g,'dh') 
	str = str.replace(/ر/g,'r') 
	str = str.replace(/ز/g,'z') 
	str = str.replace(/س/g,'s') 
	str = str.replace(/ش/g,'sh') 
	str = str.replace(/ص/g,'ṣ') 
	str = str.replace(/ض/g,'ḍ') 
	str = str.replace(/ط/g,'ṭ') 
	str = str.replace(/ظ/g,'ẓ') 
	str = str.replace(/ع/g,'ʻ') 
	str = str.replace(/غ/g,'gh') 
	str = str.replace(/ف/g,'f') 
	str = str.replace(/ق/g,'q') 
	str = str.replace(/ك/g,'k') 
	str = str.replace(/ل/g,'l')
	str = str.replace(/م/g,'m')
	str = str.replace(/ن/g,'n')
	str = str.replace(/ه/g,'h')
	str = str.replace(/و/g,'w') 
	str = str.replace(/ي/g,'y') 
	str = str.replace(/ة/g,'[h{t]') 
	str = str.replace(/ى/g,'ỳ') 
	
	str = str.replace(/\u064E/g,'a') 
	str = str.replace(/\u064F/g,'u') 
	str = str.replace(/\u0650/g,'i') 
	str = str.replace(/\u0652/g,'') 
	str = str.replace(/\u064B/g,'an')  
	str = str.replace(/\u064C/g,'un') 
	str = str.replace(/\u064D/g,'in')
	 
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
	
	str = str.replace(/٪/g,'%')
	str = str.replace(/؟/g,'?')
	str = str.replace(/؛/g,'\u002C')
	str = str.replace(/،/g,',')
	str = str.replace(/؛/g,';')
	str = str.replace(/۔/g,'.')
	str = str.replace(/ـ/g,'')

	
	
	str = str.replace(/௰/g,'(x10)')
	str = str.replace(/௱/g,'(x100)')
	str = str.replace(/௲/g,'(x1000)')
	str = str.replace(/௺/g,'<number sign>')
	str = str.replace(/௹/g,'<rupee sign>')
	str = str.replace(/௳/g,'<day sign>')
	str = str.replace(/௴/g,'<month sign>')
	str = str.replace(/௵/g,'<year sign>')


	// add markup for ambiguous cases
	str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
	str = str.replace(/\|/g,'</span><span class=alt>')
	str = str.replace(/\{/g,'</span><span class=altlast>')
	str = str.replace(/\]/g,'</span></span>')
	str = str.replace(/¶/g,'')


	return str.trim()
	}





function transcribetoISO (str) {
    str = str.normalize('NFC')
    
    str = str.replace(/ء/g, "’")
    str = str.replace(/آ/g, "ā")
    str = str.replace(/أ/g, "ᵃ")
    str = str.replace(/ؤ/g, "ʷ")
    str = str.replace(/إ/g, "ₐ")
    str = str.replace(/ئ/g, "ʸ")
    str = str.replace(/ا/g, "ˡ")
    str = str.replace(/ب/g, "b")
    str = str.replace(/ة/g, "ẗ")
    str = str.replace(/ت/g, "t")
    str = str.replace(/ث/g, "ṯ")
    str = str.replace(/ج/g, "ǧ")
    str = str.replace(/ح/g, "ḥ")
    str = str.replace(/خ/g, "ẖ")
    str = str.replace(/د/g, "d")
    str = str.replace(/ذ/g, "ḏ")
    str = str.replace(/ر/g, "r")
    str = str.replace(/ز/g, "z")
    str = str.replace(/س/g, "s")
    str = str.replace(/ش/g, "š")
    str = str.replace(/ص/g, "ṣ")
    str = str.replace(/ض/g, "ḍ")
    str = str.replace(/ط/g, "ṭ")
    str = str.replace(/ظ/g, "ẓ")
    str = str.replace(/ع/g, "ʻ")
    str = str.replace(/غ/g, "ġ")
    str = str.replace(/ف/g, "f")
    str = str.replace(/ق/g, "q")
    str = str.replace(/ك/g, "k")
    str = str.replace(/ل/g, "l")
    str = str.replace(/م/g, "m")
    str = str.replace(/ن/g, "n")
    str = str.replace(/ه/g, "h")
    str = str.replace(/و/g, "w")
    str = str.replace(/ى/g, "ỳ")
    str = str.replace(/ي/g, "y")
    str = str.replace(/ٱ/g, "’")

    // vowels
    str = str.replace(/\u064E/g, "a")
    str = str.replace(/\u064F/g, "u")
    str = str.replace(/\u0650/g, "i")
    str = str.replace(/\u064B/g, "aⁿ")
    str = str.replace(/\u064C/g, "uⁿ")
    str = str.replace(/\u064D/g, "iⁿ")
    str = str.replace(/\u0651/g, "ᵚ")
    str = str.replace(/\u0652/g, "̊")
    str = str.replace(/\u0670/g, "̍")
    str = str.replace(/\u0654/g, "͗")
    str = str.replace(/\u0655/g, "̹")

    // punctuation
    str = str.replace(/ـ/g, "_")
    str = str.replace(/،/g, ",")
    str = str.replace(/۔/g, ".")
    str = str.replace(/؛/g, ";")
    str = str.replace(/؟/g, "?")
    str = str.replace(/٪/g, "%")




			
    return str
}


function transcribetoISOold (chstring) {
					
	chstring = chstring.replace(/ال/g,' al-'); // lam alif
	
	chstring = chstring.replace(/ء/g,'ˈ'); 
	chstring = chstring.replace(/م/g,'m'); 
	chstring = chstring.replace(/\bا/g,'ʾa'); 
	chstring = chstring.replace(/ا/g,'ā'); 
	chstring = chstring.replace(/آ/g,'ʾâ'); 
	chstring = chstring.replace(/أ/g,'a'); 
	chstring = chstring.replace(/إ/g,'i'); 
	chstring = chstring.replace(/ٱ/g,'u'); 
	chstring = chstring.replace(/ب/g,'b'); 
	chstring = chstring.replace(/ت/g,'t'); 
	chstring = chstring.replace(/ث/g,'ṯ'); 
	chstring = chstring.replace(/ج/g,'ǧ'); 
	chstring = chstring.replace(/ح/g,'ḥ');
	chstring = chstring.replace(/خ/g,'ẖ');
	chstring = chstring.replace(/د/g,'d'); 
	chstring = chstring.replace(/ذ/g,'ḏ'); 
	chstring = chstring.replace(/ر/g,'r'); 
	chstring = chstring.replace(/ز/g,'z'); 
	chstring = chstring.replace(/س/g,'s'); 
	chstring = chstring.replace(/ش/g,'š'); 
	chstring = chstring.replace(/ص/g,'ṣ'); 
	chstring = chstring.replace(/ض/g,'ḍ'); 
	chstring = chstring.replace(/ط/g,'ṭ'); 
	chstring = chstring.replace(/ظ/g,'ẓ'); 
	chstring = chstring.replace(/ع/g,'ʿ'); 
	chstring = chstring.replace(/غ/g,'ġ'); 
	chstring = chstring.replace(/ف/g,'f'); 
	chstring = chstring.replace(/ق/g,'q'); 
	chstring = chstring.replace(/ك/g,'k'); 
	chstring = chstring.replace(/ل/g,'l');
	chstring = chstring.replace(/م/g,'m');
	chstring = chstring.replace(/ن/g,'n');
	chstring = chstring.replace(/ه/g,'h');
	chstring = chstring.replace(/و/g,'[w{ū]'); 
	chstring = chstring.replace(/ي/g,'[y{ī]'); 
	chstring = chstring.replace(/ة/g,'ẗ'); 
	chstring = chstring.replace(/ى/g,'ỳ'); 
	
	chstring = chstring.replace(/\u064E/g,'a'); 
	chstring = chstring.replace(/\u064F/g,'u'); 
	chstring = chstring.replace(/\u0650/g,'i'); 
	chstring = chstring.replace(/\u0652/g,''); 
	chstring = chstring.replace(/\u064B/g,'an');  
	chstring = chstring.replace(/\u064C/g,'un'); 
	chstring = chstring.replace(/\u064D/g,'in');
	 
	chstring = chstring.replace(/۱/g,'1'); 
	chstring = chstring.replace(/۲/g,'2'); 
	chstring = chstring.replace(/۳/g,'3'); 
	chstring = chstring.replace(/۴/g,'4'); 
	chstring = chstring.replace(/۵/g,'5'); 
	chstring = chstring.replace(/۶/g,'6');
	chstring = chstring.replace(/۷/g,'7');
	chstring = chstring.replace(/۸/g,'8');
	chstring = chstring.replace(/۹/g,'9');
	chstring = chstring.replace(/۰/g,'0');
	
	chstring = chstring.replace(/٪/g,'%');
	chstring = chstring.replace(/؟/g,'?');
	chstring = chstring.replace(/؛/g,'\u002C');
	chstring = chstring.replace(/،/g,';');

	var re = /(.)\u0651/g
	chstring = chstring.replace(re,'$1$1');  // shadda
	
	
	chstring = chstring.replace(/௰/g,'(x10)');
	chstring = chstring.replace(/௱/g,'(x100)');
	chstring = chstring.replace(/௲/g,'(x1000)');
	chstring = chstring.replace(/௺/g,'<number sign>');
	chstring = chstring.replace(/௹/g,'<rupee sign>');
	chstring = chstring.replace(/௳/g,'<day sign>');
	chstring = chstring.replace(/௴/g,'<month sign>');
	chstring = chstring.replace(/௵/g,'<year sign>');


	// add markup for ambiguous cases
	chstring = chstring.replace(/\[/g,'<span class=alts><span class=altfirst>')
	chstring = chstring.replace(/\|/g,'</span><span class=alt>')
	chstring = chstring.replace(/\{/g,'</span><span class=altlast>')
	chstring = chstring.replace(/\]/g,'</span></span>')
	chstring = chstring.replace(/¶/g,'')


	return chstring;
	}






function inSet (group, ch) {
	if (group.indexOf(ch) > -1) return true
	else { return false }
	}



