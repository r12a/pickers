function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'transcription') { return transcription(str) }
	//if (direction == 'toISO') { return dotranscription(str, 'tolatin') }
	if (direction == 'toISO') { return transcribeToISO(str) }
	if (direction == 'toIPA') { return transcribeToIPA(str) }
	if (direction == 'fromISO') { return dotranscription(str, 'fromlatin') }
	}



function transliterate (str) {
str += ' '

str = str.replace(/க்ஷ/g, "k͓ʂ")
str = str.replace(/।/g, ".")
str = str.replace(/॥/g, "¶")
str = str.replace(/ஃ/g, "ˑ")
str = str.replace(/அ/g, "ʌ̣")
str = str.replace(/ஆ/g, "ɑː̣")
str = str.replace(/இ/g, "ị")
str = str.replace(/ஈ/g, "ị̄")
str = str.replace(/உ/g, "ụ")
str = str.replace(/ஊ/g, "ụ̄")
str = str.replace(/எ/g, "ẹ")
str = str.replace(/ஏ/g, "ẹ̄")
str = str.replace(/ஐ/g, "ʌ̣ʲ")
str = str.replace(/ஒ/g, "ọ")
str = str.replace(/ஓ/g, "ọ̄")
str = str.replace(/ஔ/g, "ʌ̣ʷ")
str = str.replace(/க/g, "k")
str = str.replace(/ங/g, "ŋ")
str = str.replace(/ச/g, "c")
str = str.replace(/ஜ/g, "ʤ")
str = str.replace(/ஞ/g, "ɲ")
str = str.replace(/ட/g, "ʈ")
str = str.replace(/ண/g, "ɳ")
str = str.replace(/த/g, "t")
str = str.replace(/ந/g, "ṅ")
str = str.replace(/ன/g, "n")
str = str.replace(/ப/g, "p")
str = str.replace(/ம/g, "m")
str = str.replace(/ய/g, "y")
str = str.replace(/ர/g, "ɾ")
str = str.replace(/ற/g, "r")
str = str.replace(/ல/g, "l")
str = str.replace(/ள/g, "ɭ")
str = str.replace(/ழ/g, "ɻ")
str = str.replace(/வ/g, "ʋ")
str = str.replace(/ஶ/g, "ʃ")
str = str.replace(/ஷ/g, "ʂ")
str = str.replace(/ஸ/g, "s")
str = str.replace(/ஹ/g, "h")
str = str.replace(/ா/g, "ɑː")
str = str.replace(/ி/g, "i")
str = str.replace(/ீ/g, "ī")
str = str.replace(/ு/g, "u")
str = str.replace(/ூ/g, "ū")
str = str.replace(/ெ/g, "e")
str = str.replace(/ே/g, "ē")
str = str.replace(/ை/g, "ʌʲ")
str = str.replace(/ொ/g, "o")
str = str.replace(/ோ/g, "ō")
str = str.replace(/ௌ/g, "ʌʷ")
str = str.replace(/்/g, "")
str = str.replace(/ௗ/g, "ː")

return str.trim()
}






function transcription (str) {

var consonants = new Set(['க', 'ங', 'ச', 'ஞ', 'ட', 'ண','த', 'ந', 'ப', 'ம', 'ய', 'ர','ல', 'வ', 'ழ', 'ள', 'ற','ன', 'ஶ', 'ஜ', 'ஷ', 'ஸ', 'ஹ'])
var indvowels = new Set(['அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ','எ', 'ஏ', 'ஐ', 'ஒ', 'ஓ', 'ஔ'])

str = str.normalize('NFC')+' '

str = str.replace(/ஃப/g, "f")
str = str.replace(/ஃஜ/g, "z")


// add inherent vowels
var withConjuncts = ''
for (let i=0; i<str.length; i++) {
	if (i<str.length-1 && consonants.has(str[i]) && (consonants.has(str[i+1]) || indvowels.has(str[i+1]) || str[i+1] === ' '))  withConjuncts += str[i]+'a'
	else  withConjuncts += str[i]
	}
str=withConjuncts


str = transliterate(str)

return str.trim()
}




function transcribeToISO (str) {

var consonants = new Set(['க', 'ங', 'ச', 'ஞ', 'ட', 'ண','த', 'ந', 'ப', 'ம', 'ய', 'ர','ல', 'வ', 'ழ', 'ள', 'ற','ன', 'ஶ', 'ஜ', 'ஷ', 'ஸ', 'ஹ'])
var indvowels = new Set(['அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ','எ', 'ஏ', 'ஐ', 'ஒ', 'ஓ', 'ஔ'])

str = str.normalize('NFC')+' '

str = str.replace(/ஃப/g, "f")
str = str.replace(/ஃஜ/g, "z")


// add inherent vowels
var withConjuncts = ''
for (let i=0; i<str.length; i++) {
	if (i<str.length-1 && consonants.has(str[i]) && (consonants.has(str[i+1]) || indvowels.has(str[i+1]) || str[i+1] === ' '))  withConjuncts += str[i]+'a'
	else  withConjuncts += str[i]
	}
str=withConjuncts

str = str.replace(/க்ஷ/g, "kṣ")
str = str.replace(/ஃஜ/g, "z")
str = str.replace(/ஃப/g, "f")
str = str.replace(/।/g, ".")
str = str.replace(/॥/g, "¶")
str = str.replace(/ஃ/g, "˜")
str = str.replace(/அ/g, "a")
str = str.replace(/ஆ/g, "ā")
str = str.replace(/இ/g, "i")
str = str.replace(/ஈ/g, "ī")
str = str.replace(/உ/g, "u")
str = str.replace(/ஊ/g, "ū")
str = str.replace(/எ/g, "e")
str = str.replace(/ஏ/g, "ē")
str = str.replace(/ஐ/g, "ai")
str = str.replace(/ஒ/g, "o")
str = str.replace(/ஓ/g, "ō")
str = str.replace(/ஔ/g, "aw")
str = str.replace(/க/g, "k")
str = str.replace(/ங/g, "ṅ")
str = str.replace(/ச/g, "c")
str = str.replace(/ஜ/g, "d")
str = str.replace(/ஞ/g, "ñ")
str = str.replace(/ட/g, "ṭ")
str = str.replace(/ண/g, "ṇ")
str = str.replace(/த/g, "t")
str = str.replace(/ந/g, "n")
str = str.replace(/ன/g, "ṉ")
str = str.replace(/ப/g, "p")
str = str.replace(/ம/g, "m")
str = str.replace(/ய/g, "y")
str = str.replace(/ர/g, "r")
str = str.replace(/ற/g, "ṟ")
str = str.replace(/ல/g, "l")
str = str.replace(/ள/g, "ḷ")
str = str.replace(/ழ/g, "ḻ")
str = str.replace(/ழ/g, "ṛ")
str = str.replace(/ழ/g, "ẓ")
str = str.replace(/வ/g, "v")
str = str.replace(/ஶ/g, "?")
str = str.replace(/ஷ/g, "ṣ")
str = str.replace(/ஸ/g, "s")
str = str.replace(/ஹ/g, "h")
str = str.replace(/ா/g, "ā")
str = str.replace(/ி/g, "i")
str = str.replace(/ீ/g, "ī")
str = str.replace(/ு/g, "u")
str = str.replace(/ூ/g, "ū")
str = str.replace(/ெ/g, "e")
str = str.replace(/ே/g, "ē")
str = str.replace(/ை/g, "ai")
str = str.replace(/ொ/g, "o")
str = str.replace(/ோ/g, "ō")
str = str.replace(/ௌ/g, "aw")
str = str.replace(/்/g, "")
str = str.replace(/ௐ/g, "(om)")
str = str.replace(/ௗ/g, "ː")
str = str.replace(/௦/g, "0")
str = str.replace(/௧/g, "1")
str = str.replace(/௨/g, "2")
str = str.replace(/௩/g, "3")
str = str.replace(/௪/g, "4")
str = str.replace(/௫/g, "5")
str = str.replace(/௬/g, "6")
str = str.replace(/௭/g, "7")
str = str.replace(/௮/g, "8")
str = str.replace(/௯/g, "9")
str = str.replace(/௰/g, "(ten)")
str = str.replace(/௱/g, "(hundred)")
str = str.replace(/௲/g, "(thousand)")
str = str.replace(/௳/g, "(day)")
str = str.replace(/௴/g, "(month)")
str = str.replace(/௵/g, "(year)")
str = str.replace(/௺/g, "#")

console.log(str)

// add markup for ambiguous cases
str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
str = str.replace(/\|/g,'</span><span class=alt>')
str = str.replace(/\{/g,'</span><span class=altlast>')
str = str.replace(/\]/g,'</span></span>')

return str.trim()
}



/*
function transcribeToIPA (str) {

var consonants = new Set(['க', 'ங', 'ச', 'ஞ', 'ட', 'ண','த', 'ந', 'ப', 'ம', 'ய', 'ர','ல', 'வ', 'ழ', 'ள', 'ற','ன', 'ஶ', 'ஜ', 'ஷ', 'ஸ', 'ஹ'])
var indvowels = new Set(['அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ','எ', 'ஏ', 'ஐ', 'ஒ', 'ஓ', 'ஔ'])

str = str.normalize('NFC')+' '

str = str.replace(/ஃப/g, "f")
str = str.replace(/ஃஜ/g, "z")


// add inherent vowels
var withConjuncts = ''
for (let i=0; i<str.length; i++) {
	if (i<str.length-1 && consonants.has(str[i]) && (consonants.has(str[i+1]) || indvowels.has(str[i+1])))  withConjuncts += str[i]+'a'
	else  withConjuncts += str[i]
	}
str=withConjuncts

str = str.replace(/க்ஷ/g, "kʂ")
str = str.replace(/ஃஜ/g, "z")
str = str.replace(/ஃப/g, "f")
str = str.replace(/।/g, "")
str = str.replace(/॥/g, "")
str = str.replace(/ஃ/g, "-")
str = str.replace(/அ/g, "ʌ")
str = str.replace(/ஆ/g, "ɑː")
str = str.replace(/இ/g, "i")
str = str.replace(/ஈ/g, "iː")
str = str.replace(/உ/g, "[u{ɯ]")
str = str.replace(/ஊ/g, "uː")
str = str.replace(/எ/g, "e")
str = str.replace(/ஏ/g, "eː")
str = str.replace(/ஐ/g, "oː")
str = str.replace(/ஒ/g, "ʌj")
str = str.replace(/ஓ/g, "o")
str = str.replace(/ஔ/g, "ʌʋ")
str = str.replace(/க/g, "[k-{ɡ{x{ɣ{h]")
str = str.replace(/ங/g, "ŋ")
str = str.replace(/ச/g, "[ʧ-{ʤ{ʃ{s{ʒ]")
str = str.replace(/ஜ/g, "[ʤ-{z]")
str = str.replace(/ஞ/g, "ɲ")
str = str.replace(/ட/g, "[ʈ-{ɖ{ɽ]")
str = str.replace(/ண/g, "ɳ")
str = str.replace(/த/g, "[t̪-{d̪{ð]")
str = str.replace(/ந/g, "n̪")
str = str.replace(/ன/g, "n")
str = str.replace(/ப/g, "[p-{b{β{f]")
str = str.replace(/ம/g, "m")
str = str.replace(/ய/g, "j")
str = str.replace(/ர/g, "ɾ")
str = str.replace(/ற/g, "[r{t{d]")
str = str.replace(/ல/g, "l")
str = str.replace(/ள/g, "ɭ")
str = str.replace(/ழ/g, "ɻ")
str = str.replace(/வ/g, "ʋ")
str = str.replace(/ஶ/g, "[ɕ{ʃ]")
str = str.replace(/ஷ/g, "ʂ")
str = str.replace(/ஸ/g, "s")
str = str.replace(/ஹ/g, "h")
str = str.replace(/ா/g, "ɑː")
str = str.replace(/ி/g, "i")
str = str.replace(/ீ/g, "iː")
str = str.replace(/ு/g, "[u{ɯ]")
str = str.replace(/ூ/g, "uː")
str = str.replace(/ெ/g, "e")
str = str.replace(/ே/g, "eː")
str = str.replace(/ை/g, "ʌj")
str = str.replace(/ொ/g, "o")
str = str.replace(/ோ/g, "oː")
str = str.replace(/ௌ/g, "ʌʋ")
str = str.replace(/்/g, "")
str = str.replace(/ௐ/g, "")
str = str.replace(/ௗ/g, "")
str = str.replace(/௦/g, "")
str = str.replace(/௧/g, "")
str = str.replace(/௨/g, "")
str = str.replace(/௩/g, "")
str = str.replace(/௪/g, "")
str = str.replace(/௫/g, "")
str = str.replace(/௬/g, "")
str = str.replace(/௭/g, "")
str = str.replace(/௮/g, "")
str = str.replace(/௯/g, "")
str = str.replace(/௰/g, "")
str = str.replace(/௱/g, "")
str = str.replace(/௲/g, "")
str = str.replace(/௳/g, "")
str = str.replace(/௴/g, "")
str = str.replace(/௵/g, "")
str = str.replace(/௹/g, "")
str = str.replace(/௺/g, "")

console.log(str)

// add markup for ambiguous cases
str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
str = str.replace(/\|/g,'</span><span class=alt>')
str = str.replace(/\{/g,'</span><span class=altlast>')
str = str.replace(/\]/g,'</span></span>')

return str.trim()
}



*/





function inSet (group, ch) {
	if (group.indexOf(ch) > -1) return true
	else { return false }
	}

function dotranscription (chstring, direction) {
chstring = chstring.normalize('NFC')+' '
	if (direction == 'tolatin') {
		output = maptolatn(chstring);
		}
//	else if (direction == 'toipa') {
//		output = maptoipa(chstring);
//		}
	else { 
		chstring = normalise(chstring); 

		// build the output from the map array
    		var output = ''; var latin = ''; var ch;
		for (var i=0; i<chstring.length-1; i++) {
			latin = chstring.charAt(i);
		
			ch = map[latin];
			if (ch) { if (ch !='null') {output += ch;} }
			else { output += latin; }
			}
		}
	return output.trim()
	} 
	
	
var map = {
a:'null',
A:'அ', 
ā:'ா', 
Ā:'ஆ', 
ï:'ை', 
Ï:'ஐ', 
ü:'ௌ', 
Ü:'ஔ', 
e:'ெ', 
E:'எ', 
ē:'ே',
Ē:'ஏ',
i:'ி', 
I:'இ', 
ī:'ீ', 
Ī:'ஈ', 
o:'ொ', 
O:'ஒ', 
ō:'ோ', 
Ō:'ஓ', 
u:'ு', 
U:'உ', 
ū:'ூ', 
Ū:'ஊ', 

c:'ச',
f:'ஃப',
h:'ஹ', 
j:'ஜ', 
k:'க',
l:'ல',
ḷ:'ள',
ḻ:'ழ',
m:'ம', 
n:'ந', 
ṉ:'ன', 
ṇ:'ண', 
ñ:'ஞ', 
ṅ:'ங', 
p:'ப', 
r:'ர', 
ṟ:'ற',  // r uscore
s:'ஸ', 
ś:'ஶ', 
ṣ:'ஷ', 
t:'த', 
ṭ:'ட', 
v:'வ', 
y:'ய', 
z:'ஃஜ',


//candrabindu: 'ँ',
//µ:'null', // was colon separator for disambiguation
//virama:'്'

}

function normalise (chstring) {
	// converts two or more letters per transcription unit into single units corresponding
	// to the map list above; converts t units to independent vowels
	
	// replace all two character sequences
	chstring = chstring.replace(/ai/g,'ï');
	chstring = chstring.replace(/au/g,'ü');

	// check for and convert independent vowels
	var vowels = { 'a':'', 'ā':'', 'e':'', 'ē':'', 'i':'',
		'ī':'', 'o':'', 'ō':'', 'ï':'', 'ü':'', 'ŭ':'',
		'u':'', 'ū':'', 'ŗ':'' };

	var output = '';
	for (i=0; i<chstring.length; i++) {
		if (chstring.charAt(i) in vowels) {
			if (i==0 || chstring.charAt(i-1) in vowels || chstring.charAt(i-1) == ' ' ) {
				output += chstring.charAt(i).toUpperCase();   
				}
			else { output += chstring.charAt(i); }
			}
		else { output += chstring.charAt(i); }
		}
		
	// handle conjuncts by putting a virama between them
	var consonants = { 
	'p':'', 't':'', 'ṭ':'', 'c':'', 'k':'', 'q':'',
	'b':'', 'd':'', 'ḍ':'', 'j':'', 'g':'', 'ṯ':'', 
	'P':'', 'T':'', 'Ṭ':'', 'C':'', 'K':'', 
	'B':'', 'D':'', 'Ḍ':'', 'J':'', 'G':'', 
	'v':'', 's':'', 'z':'', 'f':'', 'Ḵ':'', 'ǥ':'',
	'ś':'', 'ṣ':'', 'ḷ':'', 'h':'', 
	'm':'', 'ṃ':'', 'n':'', 'ṉ':'', 'ṇ':'', 'ñ':'',
	'ṅ':'', 'r':'', 'Ṛ':'', 'ṛ':'', 'ṟ':'', 'l':'', 
	'ḷ':'', 'ḻ':'', 'y':'', 'f':'', 'z':'' 
	};

	var withConjuncts = ''; var ch='';
	for (var i=0; i<output.length; i++) {
		ch = output.charAt(i);
		if (i>0 && ch in consonants && (output.charAt(i+1) in consonants || output.charAt(i+1) == ' ')) {
			withConjuncts += ch+'்';
			}
		else { withConjuncts += ch; }
		}
	
	return withConjuncts;
	}

/*
function maptolatn (chstring) {
					
	var consonants = { 
	'க':'', 'ங':'', 'ச':'', 'ஞ':'', 'ட':'', 'ண':'',
	'த':'', 'ந':'', 'ப':'', 'ம':'', 'ய':'', 'ர':'', 
	'ல':'', 'வ':'', 'ழ':'', 'ள':'', 'ற':'', 
	'ன':'', 'ஶ':'', 'ஜ':'', 'ஷ':'', 'ஸ':'', 
	'ஹ':''
	}; 
	var indvowels = { 
	'அ':'', 'ஆ':'', 'இ':'', 'ஈ':'', 'உ':'', 'ஊ':'',
	'எ':'', 'ஏ':'', 'ஐ':'', 'ஒ':'', 'ஓ':'', 'ஔ':'' 
	}; 
	
	// add inherent vowels
	var withConjuncts = ''; var ch='';
	for (var i=0; i<chstring.length-1; i++) {
		ch = chstring.charAt(i);
		if (i<chstring.length-1 && chstring.charAt(i) in consonants && (chstring.charAt(i+1) in consonants || chstring.charAt(i+1) in indvowels)) {
			withConjuncts += ch+'a';
			}
		else { withConjuncts += ch; }
		}

	chstring = withConjuncts;
	chstring = chstring.replace(/ஃப/g,'f'); 
	chstring = chstring.replace(/ஃஜ/g,'z'); 
	chstring = chstring.replace(/அ/g,'a'); 
	chstring = chstring.replace(/ா/g,'ā'); 
	chstring = chstring.replace(/ஆ/g,'ā'); 
	chstring = chstring.replace(/ை/g,'ai'); 
	chstring = chstring.replace(/ஐ/g,'ai'); 
	chstring = chstring.replace(/ௌ/g,'au'); 
	chstring = chstring.replace(/ஔ/g,'au'); 
	chstring = chstring.replace(/ெ/g,'e'); 
	chstring = chstring.replace(/எ/g,'e'); 
	chstring = chstring.replace(/ே/g,'ē');
	chstring = chstring.replace(/ஏ/g,'ē');
	chstring = chstring.replace(/ி/g,'i'); 
	chstring = chstring.replace(/இ/g,'i'); 
	chstring = chstring.replace(/ீ/g,'ī'); 
	chstring = chstring.replace(/ஈ/g,'ī'); 
	chstring = chstring.replace(/ொ/g,'o'); 
	chstring = chstring.replace(/ஒ/g,'o'); 
	chstring = chstring.replace(/ோ/g,'ō'); 
	chstring = chstring.replace(/ஓ/g,'ō'); 
	chstring = chstring.replace(/ு/g,'u'); 
	chstring = chstring.replace(/உ/g,'u'); 
	chstring = chstring.replace(/ூ/g,'ū'); 
	chstring = chstring.replace(/ஊ/g,'ū'); 

	chstring = chstring.replace(/ச/g,'c'); 
	chstring = chstring.replace(/ஹ/g,'h'); 
	chstring = chstring.replace(/ஜ/g,'j'); 
	chstring = chstring.replace(/க/g,'k');
	chstring = chstring.replace(/ல/g,'l');
	chstring = chstring.replace(/ள/g,'ḷ');
	chstring = chstring.replace(/ழ/g,'ḻ');
	chstring = chstring.replace(/ம/g,'m'); 
	chstring = chstring.replace(/ந/g,'n'); 
	chstring = chstring.replace(/ன/g,'ṉ'); 
	chstring = chstring.replace(/ண/g,'ṇ'); 
	chstring = chstring.replace(/ஞ/g,'ñ'); 
	chstring = chstring.replace(/ங/g,'ṅ'); 
	chstring = chstring.replace(/ப/g,'p'); 
	chstring = chstring.replace(/ர/g,'r'); 
	chstring = chstring.replace(/ற/g,'ṟ');  // r uscore
	chstring = chstring.replace(/ஸ/g,'s'); 
	chstring = chstring.replace(/ஶ/g,'ś'); 
	chstring = chstring.replace(/ஷ/g,'ṣ'); 
	chstring = chstring.replace(/த/g,'t'); 
	chstring = chstring.replace(/ட/g,'ṭ'); 
	chstring = chstring.replace(/வ/g,'v'); 
	chstring = chstring.replace(/ய/g,'y'); 

	chstring = chstring.replace(/௦/g,'0');
	chstring = chstring.replace(/௧/g,'1');
	chstring = chstring.replace(/௨/g,'2');
	chstring = chstring.replace(/௩/g,'3');
	chstring = chstring.replace(/௪/g,'4');
	chstring = chstring.replace(/௫/g,'5');
	chstring = chstring.replace(/௬/g,'6');
	chstring = chstring.replace(/௭/g,'7');
	chstring = chstring.replace(/௮/g,'8');
	chstring = chstring.replace(/௯/g,'9');

	chstring = chstring.replace(/௰/g,'(x10)');
	chstring = chstring.replace(/௱/g,'(x100)');
	chstring = chstring.replace(/௲/g,'(x1000)');
	chstring = chstring.replace(/௺/g,'<number sign>');
	chstring = chstring.replace(/௹/g,'<rupee sign>');
	chstring = chstring.replace(/௳/g,'<day sign>');
	chstring = chstring.replace(/௴/g,'<month sign>');
	chstring = chstring.replace(/௵/g,'<year sign>');


candrabindu = 'ँ',
chstring = chstring.replace(/null/g,'µ'); // was colon separator for disambiguation
virama:'്';

	// remove the viramas
	chstring = chstring.replace(/்/g,'');


	return chstring;
	}
*/