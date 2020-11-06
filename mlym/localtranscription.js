function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'toISO') { return maptolatn(str) }
	if (direction == 'toIPA') { return maptoipa(str) }
	if (direction == 'toMalayalam') { return transcribetomalayalam(str) }
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

str = str.replace(/।/g, ".")
str = str.replace(/॥/g, "¶")
str = str.replace(/ം/g, "m̽")
str = str.replace(/ഃ/g, "h̽")
str = str.replace(/അ/g, "ạ̄")
str = str.replace(/ആ/g, "ậ")
str = str.replace(/ഇ/g, "ị")
str = str.replace(/ഈ/g, "ị̄")
str = str.replace(/ഉ/g, "ụ")
str = str.replace(/ഊ/g, "ụ̄")
str = str.replace(/ഋ/g, "r̥̣")
str = str.replace(/ഌ/g, "l̥̣")
str = str.replace(/എ/g, "ẹ")
str = str.replace(/ഏ/g, "ẹ̄")
str = str.replace(/ഐ/g, "ạʲ")
str = str.replace(/ഒ/g, "ọ")
str = str.replace(/ഓ/g, "ọ̄")
str = str.replace(/ഔ/g, "ạʷ")
str = str.replace(/ക/g, "k")
str = str.replace(/ഖ/g, "kʰ")
str = str.replace(/ഗ/g, "g")
str = str.replace(/ഘ/g, "gʰ")
str = str.replace(/ങ/g, "ŋ")
str = str.replace(/ച/g, "c")
str = str.replace(/ഛ/g, "cʰ")
str = str.replace(/ജ/g, "j")
str = str.replace(/ഝ/g, "jʰ")
str = str.replace(/ഞ/g, "ɲ")
str = str.replace(/ട/g, "ʈ")
str = str.replace(/ഠ/g, "ʈʰ")
str = str.replace(/ഡ/g, "ɖ")
str = str.replace(/ഢ/g, "ɖʰ")
str = str.replace(/ണ/g, "ɳ")
str = str.replace(/ത/g, "t")
str = str.replace(/ഥ/g, "tʰ")
str = str.replace(/ദ/g, "d")
str = str.replace(/ധ/g, "dʰ")
str = str.replace(/ന/g, "n")
str = str.replace(/പ/g, "p")
str = str.replace(/ഫ/g, "pʰ")
str = str.replace(/ബ/g, "b")
str = str.replace(/ഭ/g, "bʰ")
str = str.replace(/മ/g, "m")
str = str.replace(/യ/g, "y")
str = str.replace(/ര/g, "r")
str = str.replace(/റ/g, "ṙ")
str = str.replace(/ല/g, "l")
str = str.replace(/ള/g, "ɭ")
str = str.replace(/ഴ/g, "ɻ")
str = str.replace(/വ/g, "ʋ")
str = str.replace(/ശ/g, "ʃ")
str = str.replace(/ഷ/g, "ʂ")
str = str.replace(/സ/g, "s")
str = str.replace(/ഹ/g, "h")
str = str.replace(/ാ/g, "ā")
str = str.replace(/ി/g, "i")
str = str.replace(/ീ/g, "ī")
str = str.replace(/ു/g, "u")
str = str.replace(/ൂ/g, "ū")
str = str.replace(/ൃ/g, "r̥")
str = str.replace(/ൄ/g, "r̥̄")
str = str.replace(/െ/g, "e")
str = str.replace(/േ/g, "ē")
str = str.replace(/ൈ/g, "aʲ")
str = str.replace(/ൊ/g, "o")
str = str.replace(/ോ/g, "ō")
str = str.replace(/ൌ/g, "ȧʷ")
str = str.replace(/്/g, "͓")
str = str.replace(/ൗ/g, "aʷ")
str = str.replace(/ൠ/g, "r̥̣̄")
str = str.replace(/ൡ/g, "l̥̣̄")
str = str.replace(/ൢ/g, "l̥")
str = str.replace(/ൣ/g, "l̥̄")
str = str.replace(/൦/g, "0")
str = str.replace(/൧/g, "1")
str = str.replace(/൨/g, "2")
str = str.replace(/൩/g, "3")
str = str.replace(/൪/g, "4")
str = str.replace(/൫/g, "5")
str = str.replace(/൬/g, "6")
str = str.replace(/൭/g, "7")
str = str.replace(/൮/g, "8")
str = str.replace(/൯/g, "9")
str = str.replace(/൰/g, "{10}")
str = str.replace(/൱/g, "{100}")
str = str.replace(/൲/g, "{1000}")
str = str.replace(/൳/g, "¼")
str = str.replace(/൴/g, "½")
str = str.replace(/൵/g, "¾")
str = str.replace(/ൺ/g, "ɳ̽")
str = str.replace(/ൻ/g, "n̽")
str = str.replace(/ർ/g, "r̽")
str = str.replace(/ൽ/g, "l̽")
str = str.replace(/ൾ/g, "ɭ̽")
str = str.replace(/ൿ/g, "k̽")

return str.trim()
}
*/



function inSet (group, ch) {
	if (group.indexOf(ch) > -1) return true
	else { return false }
	}



function transcribetomalayalam (chstring) {
	chstring = normalise(chstring)+' '

	// build the output from the map array
    	var output = ''; var latin = ''; var ch;
		for (var i=0; i<chstring.length-1; i++) {
			latin = chstring.charAt(i);
		
			ch = map[latin];
			if (ch) { if (ch !='null') {output += ch;} }
			else { output += latin; }
			}
	return output;
	}
	
function dotranscription (chstring, direction) {
	if (direction == 'tolatin') {
		output = maptolatn(chstring);
		}
	else if (direction == 'toipa') {
		output = maptoipa(chstring);
		}
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
	return output;
	}
	
	
var map = {
a:'null',
A:'അ', 
ā:'ാ', 
Ā:'ആ', 
ï:'ൈ', 
Ï:'ഐ', 
ü:'ൌ', 
Ü:'ഔ', 
e:'െ', 
E:'എ', 
ē:'േ',
Ē:'ഏ',
i:'ി', 
I:'ഇ', 
ī:'ീ', 
Ī:'ഈ', 
o:'ൊ', 
O:'ഒ', 
ō:'ോ', 
Ō:'ഓ', 
ŭ:'ു്', 
u:'ു', 
U:'ഉ', 
ū:'ൂ', 
Ū:'ഊ', 
ŗ:'ൃ', 
Ŗ:'ഋ',  

p:'പ', 
t:'ത', 
ṭ:'ട', 
c:'ച', 
k:'ക',
q:'क़',
b:'ബ', 
d:'ദ', 
ḍ:'ഡ', 
j:'ജ', 
g:'ഗ', 
P:'ഫ', 
T:'ഥ', 
Ṭ:'ഠ', 
C:'ഛ', 
K:'ഖ', 
B:'ഭ', 
D:'ധ', 
Ḍ:'ഢ', 
J:'ഝ', 
G:'ഘ', 
ṯ:'റ', // t uscore

v:'വ', 
s:'സ', 
ś:'ശ', 
z:'ज़',
ṣ:'ഷ', 
Ḵ:'ख़',
ǥ:'ग़',
h:'ഹ', 
ḥ:'ഃ', 
m:'മ', 
ṃ:'ം', 
n:'ന', 
f:'फ़',
ṇ:'ണ', 
ñ:'ഞ', 
ṅ:'ങ', 

r:'ര', 
ṛ:'ड़', 
Ṛ:'ढ़',
ṟ:'റ',  // r uscore
l:'ല',
ḷ:'ള',
ḻ:'ഴ',
y:'യ', 

1:'ൿ', // chillus
2:'ൻ',
3:'ൺ',
4:'ൻ',
5:'ൺ',

candrabindu: 'ँ',
µ:'null', // was colon separator for disambiguation
virama:'്'

}

function normalise (chstring) {
	// converts two or more letters per transcription unit into single units corresponding
	// to the map list above; converts t units to independent vowels
	
	// replace all two character sequences
	chstring = chstring.replace(/ph/g,'P');
	chstring = chstring.replace(/th/g,'T');
	chstring = chstring.replace(/ṭh/g,'Ṭ');
	chstring = chstring.replace(/ch/g,'C');
	chstring = chstring.replace(/kh/g,'K');
	chstring = chstring.replace(/bh/g,'B');
	chstring = chstring.replace(/dh/g,'D');
	chstring = chstring.replace(/ḍh/g,'Ḍ');
	chstring = chstring.replace(/jh/g,'J');
	chstring = chstring.replace(/gh/g,'G');
	chstring = chstring.replace(/ṛh/g,'Ṛ'); // r dot
	chstring = chstring.replace(/r̥/g,'ŗ');
	chstring = chstring.replace(/ai/g,'ï');
	chstring = chstring.replace(/au/g,'ü');
	chstring = chstring.replace(/:/g,'µ'); 
	chstring = chstring.replace(/k\^/g,'1'); // chillus
	chstring = chstring.replace(/n\^/g,'2');
	chstring = chstring.replace(/l\^/g,'4');
	chstring = chstring.replace(/ṇ\^/g,'3'); // n dot below
	chstring = chstring.replace(/ḷ\^/g,'5'); // l dot below

	// check for and convert independent vowels
	var vowels = { 'a':'', 'ā':'', 'e':'', 'ē':'', 'i':'',
		'ī':'', 'o':'', 'ō':'', 'ï':'', 'ü':'', 'ŭ':'',
		'u':'', 'ū':'', 'ŗ':'' };
	var chillus = { '1':'', '2':'', '3':'', '4':'', '5':'' }

	var output = '';
	for (i=0; i<chstring.length; i++) {
		if (chstring.charAt(i) in vowels) {
			if (i==0 || chstring.charAt(i-1) in vowels || chstring.charAt(i-1) == ' ' || chstring.charAt(i-1) == ':' || chstring.charAt(i-1) in chillus) {
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
	'm':'', 'ṃ':'', 'n':'', 'ṇ':'', 'ñ':'',
	'ṅ':'', 'r':'', 'Ṛ':'', 'ṛ':'', 'ṟ':'', 'l':'', 
	'ḷ':'', 'ḻ':'', 'y':'' 
	};

	var withConjuncts = ''; var ch='';
	for (var i=0; i<output.length; i++) {
		ch = output.charAt(i);
		if (i>0 && ch in consonants && output.charAt(i-1) in consonants) {
			withConjuncts += '്'+ch;
			}
		else { withConjuncts += ch; }
		}
	
	return withConjuncts;
	}


function maptolatn (chstring) {
	chstring += '  '
	var consonants = { 
	'ക':'', 'ഖ':'', 'ഗ':'', 'ഘ':'', 'ങ':'', 'ച':'',
	'ഛ':'', 'ജ':'', 'ഝ':'', 'ഞ':'', 'ട':'', 'ഠ':'', 
	'ഡ':'', 'ഢ':'', 'ണ':'', 'ത':'', 'ഥ':'', 
	'ദ':'', 'ധ':'', 'ന':'', 'പ':'', 'ഫ':'', 
	'ബ':'', 'ഭ':'', 'മ':'', 'യ':'', 'ര':'', 'ല':'',
	'വ':'', 'ശ':'', 'ഷ':'', 'സ':'', 
	'ഹ':'', 'ള':'', 'ക്ഷ':'', 'ഴ':'', 'റ':'',
	'ൺ':'', 'ൻ':'', 'ർ':'', 'ൽ':'', 'ൾ':'', 'ൿ':'', 'ഃ':'', 'ം':'' 
	}; 
	var nonfinals = { 
	'ക':'', 'ഖ':'', 'ഗ':'', 'ഘ':'', 'ങ':'', 'ച':'',
	'ഛ':'', 'ജ':'', 'ഝ':'', 'ഞ':'', 'ട':'', 'ഠ':'', 
	'ഡ':'', 'ഢ':'', 'ണ':'', 'ത':'', 'ഥ':'', 
	'ദ':'', 'ധ':'', 'ന':'', 'പ':'', 'ഫ':'', 
	'ബ':'', 'ഭ':'', 'മ':'', 'യ':'', 'ര':'', 'ല':'',
	'വ':'', 'ശ':'', 'ഷ':'', 'സ':'', 
	'ഹ':'', 'ള':'', 'ക്ഷ':'', 'ഴ':'', 'റ':'' 
	}; 
	var indvowels = { 
	'അ':'', 'ആ':'', 'ഇ':'', 'ഈ':'', 'ഉ':'', 'ഊ':'',
	'ഋ':'', 'എ':'', 'ഏ':'', 'ഐ':'', 'ഒ':'', 'ഓ':'', 
	'ഔ':'' 
	}; 
	
	var withConjuncts = ''; var ch='';
	for (var i=0; i<chstring.length-1; i++) {
		ch = chstring.charAt(i);
		if (i<chstring.length-1 && ch in nonfinals && (chstring.charAt(i+1) in consonants || chstring.charAt(i+1) in indvowels || chstring.charAt(i+1) == ' ')) {
			withConjuncts += ch+'a';
			}
		else { withConjuncts += ch; }
		}

	chstring = withConjuncts;
	chstring = chstring.replace(/അ/g,'a'); 
	chstring = chstring.replace(/ാ/g,'ā'); 
	chstring = chstring.replace(/ആ/g,'ā'); 
	chstring = chstring.replace(/ൈ/g,'ai'); 
	chstring = chstring.replace(/ഐ/g,'ai'); 
	chstring = chstring.replace(/ൌ/g,'au'); 
	chstring = chstring.replace(/ഔ/g,'au'); 
	chstring = chstring.replace(/ൗ/g,'au'); 
	chstring = chstring.replace(/െ/g,'e'); 
	chstring = chstring.replace(/എ/g,'e'); 
	chstring = chstring.replace(/േ/g,'ē');
	chstring = chstring.replace(/ഏ/g,'ē');
	chstring = chstring.replace(/ി/g,'i'); 
	chstring = chstring.replace(/ഇ/g,'i'); 
	chstring = chstring.replace(/ീ/g,'ī'); 
	chstring = chstring.replace(/ഈ/g,'ī'); 
	chstring = chstring.replace(/ൊ/g,'o'); 
	chstring = chstring.replace(/ഒ/g,'o'); 
	chstring = chstring.replace(/ോ/g,'ō'); 
	chstring = chstring.replace(/ഓ/g,'ō'); 
	chstring = chstring.replace(/ു്/g,'ŭ'); 
	chstring = chstring.replace(/ു/g,'u'); 
	chstring = chstring.replace(/ഉ/g,'u'); 
	chstring = chstring.replace(/ൂ/g,'ū'); 
	chstring = chstring.replace(/ഊ/g,'ū'); 
	chstring = chstring.replace(/ൃ/g,'r̥'); 
	chstring = chstring.replace(/ഋ/g,'r̥');  

	chstring = chstring.replace(/പ/g,'p'); 
	chstring = chstring.replace(/ത/g,'t'); 
	chstring = chstring.replace(/ട/g,'ṭ'); 
	chstring = chstring.replace(/ച/g,'c'); 
	chstring = chstring.replace(/ക/g,'k');
	chstring = chstring.replace(/क़/g,'q');
	chstring = chstring.replace(/ബ/g,'b'); 
	chstring = chstring.replace(/ദ/g,'d'); 
	chstring = chstring.replace(/ഡ/g,'ḍ'); // d dot below
	chstring = chstring.replace(/ജ/g,'j'); 
	chstring = chstring.replace(/ഗ/g,'g'); 
	chstring = chstring.replace(/ഫ/g,'ph'); 
	chstring = chstring.replace(/ഥ/g,'th'); 
	chstring = chstring.replace(/ഠ/g,'ṭh'); 
	chstring = chstring.replace(/ഛ/g,'ch'); 
	chstring = chstring.replace(/ഖ/g,'kh'); 
	chstring = chstring.replace(/ഭ/g,'bh'); 
	chstring = chstring.replace(/ധ/g,'dh'); 
	chstring = chstring.replace(/ഢ/g,'ḍh'); // d dot below
	chstring = chstring.replace(/ഝ/g,'jh'); 
	chstring = chstring.replace(/ഘ/g,'gh'); 
	chstring = chstring.replace(/റ്റ/g,'ṯṯ'); // t uscore

	chstring = chstring.replace(/വ/g,'v'); 
	chstring = chstring.replace(/സ/g,'s'); 
	chstring = chstring.replace(/ശ/g,'ś'); 
	chstring = chstring.replace(/ज़/g,'z');
	chstring = chstring.replace(/ഷ/g,'ṣ'); 
	chstring = chstring.replace(/ख़/g,'Ḵ');
	chstring = chstring.replace(/ग़/g,'ǥ');
	chstring = chstring.replace(/ഹ/g,'h'); 
	chstring = chstring.replace(/ഃ/g,'ḥ'); 
	chstring = chstring.replace(/മ/g,'m'); 
	chstring = chstring.replace(/ം/g,'ṃ'); 
	chstring = chstring.replace(/ന/g,'n'); 
	chstring = chstring.replace(/फ़/g,'f');
	chstring = chstring.replace(/ണ/g,'ṇ'); 
	chstring = chstring.replace(/ഞ/g,'ñ'); 
	chstring = chstring.replace(/ങ/g,'ṅ'); 

	chstring = chstring.replace(/ര/g,'r'); 
	chstring = chstring.replace(/ड़/g,'ṛ'); 
	chstring = chstring.replace(/ढ़/g,'Ṛ');
	chstring = chstring.replace(/റ/g,'ṟ');  // r uscore
	chstring = chstring.replace(/ല/g,'l');
	chstring = chstring.replace(/ള/g,'ḷ');
	chstring = chstring.replace(/ഴ/g,'ḻ');
	chstring = chstring.replace(/യ/g,'y'); 

	chstring = chstring.replace(/ൺ/g,'ṇ^'); // chillus
	chstring = chstring.replace(/ൻ/g,'n^');
	chstring = chstring.replace(/ർ/g,'r^');
	chstring = chstring.replace(/ൽ/g,'l^');
	chstring = chstring.replace(/ൾ/g,'ḷ^');
	chstring = chstring.replace(/ൿ/g,'k^');
	
	chstring = chstring.replace(/൦/g,'0');
	chstring = chstring.replace(/൧/g,'1');
	chstring = chstring.replace(/൨/g,'2');
	chstring = chstring.replace(/൩/g,'3');
	chstring = chstring.replace(/൪/g,'4');
	chstring = chstring.replace(/൫/g,'5');
	chstring = chstring.replace(/൬/g,'6');
	chstring = chstring.replace(/൭/g,'7');
	chstring = chstring.replace(/൮/g,'8');
	chstring = chstring.replace(/൯/g,'9');


//candrabindu = 'ँ',
//chstring = chstring.replace(/null/g,'µ'); // was colon separator for disambiguation
//virama:'്';

	// remove the viramas
	chstring = chstring.replace(/്/g,'');


	return chstring.trim();
	}




function maptoipa (chstring) {
	chstring += '  '
	var consonants = { 
	'ക':'', 'ഖ':'', 'ഗ':'', 'ഘ':'', 'ങ':'', 'ച':'',
	'ഛ':'', 'ജ':'', 'ഝ':'', 'ഞ':'', 'ട':'', 'ഠ':'', 
	'ഡ':'', 'ഢ':'', 'ണ':'', 'ത':'', 'ഥ':'', 
	'ദ':'', 'ധ':'', 'ന':'', 'പ':'', 'ഫ':'', 
	'ബ':'', 'ഭ':'', 'മ':'', 'യ':'', 'ര':'', 'ല':'',
	'വ':'', 'ശ':'', 'ഷ':'', 'സ':'', 
	'ഹ':'', 'ള':'', 'ക്ഷ':'', 'ഴ':'', 'റ':'',
	'ൺ':'', 'ൻ':'', 'ർ':'', 'ൽ':'', 'ൾ':'', 'ൿ':'', 'ഃ':'', 'ം':'' 
	}; 
	var nonfinals = { 
	'ക':'', 'ഖ':'', 'ഗ':'', 'ഘ':'', 'ങ':'', 'ച':'',
	'ഛ':'', 'ജ':'', 'ഝ':'', 'ഞ':'', 'ട':'', 'ഠ':'', 
	'ഡ':'', 'ഢ':'', 'ണ':'', 'ത':'', 'ഥ':'', 
	'ദ':'', 'ധ':'', 'ന':'', 'പ':'', 'ഫ':'', 
	'ബ':'', 'ഭ':'', 'മ':'', 'യ':'', 'ര':'', 'ല':'',
	'വ':'', 'ശ':'', 'ഷ':'', 'സ':'', 
	'ഹ':'', 'ള':'', 'ക്ഷ':'', 'ഴ':'', 'റ':'' 
	}; 
	var indvowels = { 
	'അ':'', 'ആ':'', 'ഇ':'', 'ഈ':'', 'ഉ':'', 'ഊ':'',
	'ഋ':'', 'എ':'', 'ഏ':'', 'ഐ':'', 'ഒ':'', 'ഓ':'', 
	'ഔ':'' 
	}; 
	
	var withConjuncts = ''; var ch='';
	// add a vowels where inherent vowel used
	for (var i=0; i<chstring.length-1; i++) {
		ch = chstring.charAt(i);
		if (i<chstring.length-1 && ch in nonfinals && (chstring.charAt(i+1) in consonants || chstring.charAt(i+1) in indvowels ) && chstring.charAt(i+1) != ' ') {
			withConjuncts += ch+'a';
			}
		else { withConjuncts += ch; }
		}

	chstring = withConjuncts;
	chstring = chstring.replace(/അ/g,'a'); 
	chstring = chstring.replace(/ാ/g,'aː'); 
	chstring = chstring.replace(/ആ/g,'aː'); 
	chstring = chstring.replace(/ൈ/g,'ai̯'); 
	chstring = chstring.replace(/ഐ/g,'ai̯'); 
	chstring = chstring.replace(/ൌ/g,'au̯'); 
	chstring = chstring.replace(/ഔ/g,'au̯'); 
	chstring = chstring.replace(/ൗ/g,'au̯'); 
	chstring = chstring.replace(/െ/g,'e'); 
	chstring = chstring.replace(/എ/g,'e'); 
	chstring = chstring.replace(/േ/g,'eː');
	chstring = chstring.replace(/ഏ/g,'eː');
	chstring = chstring.replace(/ി/g,'i'); 
	chstring = chstring.replace(/ഇ/g,'i'); 
	chstring = chstring.replace(/ീ/g,'iː'); 
	chstring = chstring.replace(/ഈ/g,'iː'); 
	chstring = chstring.replace(/ൊ/g,'o'); 
	chstring = chstring.replace(/ഒ/g,'o'); 
	chstring = chstring.replace(/ോ/g,'oː'); 
	chstring = chstring.replace(/ഓ/g,'oː'); 
	chstring = chstring.replace(/ു്/g,'ə'); 
	chstring = chstring.replace(/ു/g,'u'); 
	chstring = chstring.replace(/ഉ/g,'u'); 
	chstring = chstring.replace(/ൂ/g,'uː'); 
	chstring = chstring.replace(/ഊ/g,'uː'); 
	chstring = chstring.replace(/ൃ/g,'rɨ'); 
	chstring = chstring.replace(/ഋ/g,'rɨ');  

	chstring = chstring.replace(/പ/g,'p'); 
	chstring = chstring.replace(/ത/g,'t̪'); 
	chstring = chstring.replace(/ട/g,'ʈ'); 
	chstring = chstring.replace(/ച/g,'ʧ'); 
	chstring = chstring.replace(/ക/g,'k');
	chstring = chstring.replace(/ബ/g,'b'); 
	chstring = chstring.replace(/ദ/g,'d̪'); 
	chstring = chstring.replace(/ഡ/g,'ɖ'); // d dot below
	chstring = chstring.replace(/ജ/g,'ʤ'); 
	chstring = chstring.replace(/ഗ/g,'g'); 
	chstring = chstring.replace(/ഫ/g,'pʰ'); 
	chstring = chstring.replace(/ഥ/g,'t̪ʰ'); 
	chstring = chstring.replace(/ഠ/g,'ʈʰ'); 
	chstring = chstring.replace(/ഛ/g,'ʧʰ'); 
	chstring = chstring.replace(/ഖ/g,'kʰ'); 
	chstring = chstring.replace(/ഭ/g,'bʰ'); 
	chstring = chstring.replace(/ധ/g,'d̪ʰ'); 
	chstring = chstring.replace(/ഢ/g,'ɖʰ'); // d dot below
	chstring = chstring.replace(/ഝ/g,'ʤʰ'); 
	chstring = chstring.replace(/ഘ/g,'gʰ'); 
	chstring = chstring.replace(/റ്റ/g,'ṯṯ'); // t uscore

	chstring = chstring.replace(/വ/g,'ʋ'); 
	chstring = chstring.replace(/സ/g,'s'); 
	chstring = chstring.replace(/ശ/g,'ɕ'); 
	chstring = chstring.replace(/ഷ/g,'ʃ'); 
	chstring = chstring.replace(/ഹ/g,'h'); 
	chstring = chstring.replace(/ഃ/g,'ɦ'); 
	chstring = chstring.replace(/മ/g,'m'); 
	chstring = chstring.replace(/ം/g,'m'); 
	chstring = chstring.replace(/ന/g,'n'); 
	chstring = chstring.replace(/फ़/g,'f');
	chstring = chstring.replace(/ണ/g,'ɳ'); 
	chstring = chstring.replace(/ഞ/g,'ɲ'); 
	chstring = chstring.replace(/ങ/g,'ŋ'); 


	chstring = chstring.replace(/ര/g,'r̪'); 
	chstring = chstring.replace(/റ്റ/g,'tt');  
	chstring = chstring.replace(/റ/g,'r');  // r uscore
	chstring = chstring.replace(/ല/g,'l');
	chstring = chstring.replace(/ള/g,'ɭ');
	chstring = chstring.replace(/ഴ/g,'ɹ');
	chstring = chstring.replace(/യ/g,'j'); 

	chstring = chstring.replace(/ൺ/g,'n'); // chillus
	chstring = chstring.replace(/ൻ/g,'n');
	chstring = chstring.replace(/ർ/g,'r');
	chstring = chstring.replace(/ൽ/g,'l');
	chstring = chstring.replace(/ൾ/g,'ɭ');
	chstring = chstring.replace(/ൿ/g,'k');
	
	chstring = chstring.replace(/൦/g,'0');
	chstring = chstring.replace(/൧/g,'1');
	chstring = chstring.replace(/൨/g,'2');
	chstring = chstring.replace(/൩/g,'3');
	chstring = chstring.replace(/൪/g,'4');
	chstring = chstring.replace(/൫/g,'5');
	chstring = chstring.replace(/൬/g,'6');
	chstring = chstring.replace(/൭/g,'7');
	chstring = chstring.replace(/൮/g,'8');
	chstring = chstring.replace(/൯/g,'9');


	//var candrabindu = 'ँ'
	//chstring = chstring.replace(/null/g,'µ'); // was colon separator for disambiguation
	//virama:'്';

	// remove the viramas
	chstring = chstring.replace(/്/g,'');


	return chstring.trim()
	}
