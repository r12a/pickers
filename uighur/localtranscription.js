function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'toULY') { return transcribetoULY(str) }
	}



var vowels = {'\u064E':'a', '\u064F':'u', '\u0650':'i', '\u0652':'sukun', 	'\u064B':'an', '\u064C':'un', '\u064D':'in'}


function transliterate (str) {
	// transliterates uighur text 
	
	
	// add initial space so that beginning of word rules work
	str = '  '+str+'  '

// consonants
str = str.replace(/م/g, "m")
str = str.replace(/ن/g, "n")
str = str.replace(/د/g, "d")
str = str.replace(/ت/g, "t")
str = str.replace(/ب/g, "b")
str = str.replace(/پ/g, "p")
str = str.replace(/ف/g, "f")
str = str.replace(/ق/g, "q")
str = str.replace(/ك/g, "k")
str = str.replace(/ڭ/g, "ŋ")
str = str.replace(/گ/g, "g")
str = str.replace(/غ/g, "ḥ")
str = str.replace(/ھ/g, "h")
str = str.replace(/خ/g, "x")
str = str.replace(/چ/g, "č")
str = str.replace(/ج/g, "j")
str = str.replace(/ژ/g, "ž")
str = str.replace(/ز/g, "z")
str = str.replace(/س/g, "s")
str = str.replace(/ش/g, "š")
str = str.replace(/ر/g, "r")
str = str.replace(/ل/g, "l")
str = str.replace(/ئ/g, "’")

str = str.replace(/ي/g, "y")
str = str.replace(/ۋ/g, "w")

// vowels
str = str.replace(/ا/g, "a")
str = str.replace(/ە/g, "e")
str = str.replace(/ې/g, "ë")
str = str.replace(/ى/g, "i")
str = str.replace(/ۆ/g, "ö")
str = str.replace(/و/g, "o")
str = str.replace(/ۇ/g, "u")
str = str.replace(/ۈ/g, "ü")

// punctuation
str = str.replace(/٪/g, "%")
str = str.replace(/؟/g, "?")
str = str.replace(/؛/g, ";")
str = str.replace(/،/g, ",")



	return str.trim()
	}





function transcribetoULY (str) {
    str = str.normalize('NFC')
    
str = str.replace(/م/g, "m")
str = str.replace(/ن/g, "n")
str = str.replace(/د/g, "d")
str = str.replace(/ت/g, "t")
str = str.replace(/ب/g, "b")
str = str.replace(/پ/g, "p")
str = str.replace(/ف/g, "f")
str = str.replace(/ق/g, "q")
str = str.replace(/ك/g, "k")
str = str.replace(/ڭ/g, "ng")
str = str.replace(/گ/g, "g")
str = str.replace(/غ/g, "gh")
str = str.replace(/ھ/g, "h")
str = str.replace(/خ/g, "x")
str = str.replace(/چ/g, "ch")
str = str.replace(/ج/g, "j")
str = str.replace(/ژ/g, "zh")
str = str.replace(/ز/g, "z")
str = str.replace(/س/g, "s")
str = str.replace(/ش/g, "sh")
str = str.replace(/ر/g, "r")
str = str.replace(/ل/g, "l")
str = str.replace(/ئ/g, "")

str = str.replace(/ي/g, "y")
str = str.replace(/ۋ/g, "w")



    // vowels
str = str.replace(/ا/g, "a")
str = str.replace(/ە/g, "e")
str = str.replace(/ې/g, "ë")
str = str.replace(/ى/g, "i")
str = str.replace(/ۆ/g, "ö")
str = str.replace(/و/g, "o")
str = str.replace(/ۇ/g, "u")
str = str.replace(/ۈ/g, "ü")

str = str.replace(/ئا/g, "a")
str = str.replace(/ئە/g, "e")
str = str.replace(/ئې/g, "ë")
str = str.replace(/ئى/g, "i")
str = str.replace(/ئۆ/g, "ö")
str = str.replace(/ئو/g, "o")
str = str.replace(/ئۇ/g, "u")
str = str.replace(/ئۈ/g, "ü")


    // punctuation
str = str.replace(/٪/g, "%")
str = str.replace(/؟/g, "?")
str = str.replace(/؛/g, ";")
str = str.replace(/،/g, ",")





			
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



