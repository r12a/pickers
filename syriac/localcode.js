globals.showLOCTrans = ''
globals.showIPATrans = ''
globals.showTransliteration = ''
globals.showCursive = ''

function localInitialise () {

	}


_characterSet = 
"ئا ا ئە ە ب پ ت ج چ خ د ر ز ژ س ش غ ف ق ك گ ڭ ل م ن ھ ئو و ئۇ ۇ ئۆ ۆ ئۈ ۈ ۋ ئې ې ئى ىي ي ٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ ؟ ، ؛"


var _h = {
'627': ['6F1'],
'622': ['6F1'],
'623': ['6F1', '654'],
'625': ['6F1', '655'],
'671': ['6F1'],
'6F1': ['671', '625', '623', '622', '627'],
'639': ['60F'],
'63A': ['60F'],
'60F': ['639', '63A'],
'657': ['64F'],
'620': ['60E'],
'60E': ['602'],
'66B': ['631'],
'631': ['66B'],
'654': ['626', '624', '623'],
'655': ['625'],
'626': ['654'],
'624': ['654'],

end: {}
}


//var keyboarddef = [
//"§ ܏ ̮|1 ! p|2 ̊܂|3  ̥܃|4  ݉܄|5 ♰ ܅|6 ♱ ܈|7 ܊ ܉|8 > ܋|9 ( ܌|0 )|- < ܍|= +",
//"q ܩ ܰ|w ܘ ܳ|e ܖ ܶ|r ܪ ܺ|t ܬ ܽ|y ܝ ܸ|u ܛ ̄|i ܥ|o ܧ|p ܦ|[|]",
//"a ܐ ܱ|s ܣ ܴ|d ܕ ܷ|f ܔ ܻ|g ܓ ܾ|h ܗ ܑ|j ܛ ـ|k ܟ ݀|l ܠ ݁|; ܚ ̰|' ܞ|\\",
//"`|z ܙ ܲ|x ܨ ܵ|c ܤ ܼ|v ܫ ܿ|b ܒ ܹ|n ܢ ݂|m ܡ ،|, ܀ ؛|. ؟|/ ܇"
//]
/*
var keyboarddef = [
"§ ܏ ̮|1 !|2 ̊ ܂|3 ̥ ܃|4 ݉ ܄|5 ♰ ܅|6 ♱ ܈|7 ܊ ܉|8 > ܋|9( ܌|0 )|- ܍|= +",
"q ܩ ܰ|w ܘ ܳ|e ܖ ܶ|r ܪ ܺ|t ܬ ܽ|y ܝ ܸ|u ܛ ̄|i ܥ|o ܧ|p ܦ|[|]",
"a ܐ ܱ|s ܣ ܴ|d ܕ ܷ|f ܔ ܻ|g ܓ ܾ|h ܗ ܑ|j ܛ ـ|k ܟ ݀|l ܠ ݁|; ܚ ̰|' ܞ|\\",
"`|z ܙ ܲ|x ܨ ܵ|c ܤ ܼ|v ܫ ܿ|b ܒ ܹ|n ܢ ݂|m ܡ ،|, ܀ ؛|. ؟|/ ܇"
]
*/

var keyboarddef = [
"\u00A7 \u070F \u032E|1 !|2 \u030A \u0702|3 \u0325 \u0703|4 \u0749 \u0704|5 \u2670 \u0705|6 \u2671 \u0708|7 \u070A \u0709|8 » \u070B|9( \u070C|0 )|- « \u070D|= +",
"q \u0729 \u0730 \u064E|w \u0718 \u0733 \u064B|e \u0716 \u0736 \u064F|r \u072A \u073A \u064C|t \u072C \u073D \u0653|y \u071D \u0738 \u0654|u \u071B \u0304 \u0748|i \u0725 \u0705 \u0703|o \u0727 \u0304 \u0745|p \u0726 \u0741 \u032D|[ \u0303|] \u074A",
"a \u0710 \u0731 \u0650|s \u0723 \u0734 \u064D|d \u0715 \u0737|f \u0714 \u073B \u0621|g \u0713 \u073E \u0655|h \u0717 \u0711 \u0670|j \u071B \u0640 \u0748|k \u071F \u0740 \u0704|l \u0720 \u0320 \u0746|; \u071A \u0742 \u2026|' \u071E \u0330|\\ \u0706 :",
"`|z \u0719 \u0732|x \u0728 \u0735|c \u0724 \u0738|v \u072B \u073C|b \u0712 \u073F|n \u0722 \u0739|m \u0721 .|, \u0700 \u060C|.  \u061B|/ \u0707 \u061F"]
// source: http://aramaicnt.org/2014/12/27/syriac-keyboard-mac-os-x/

function setLocalButtons () {
	// overrides the function that hides the makeEg and charLink buttons
	
	}

var justLatinMap = `
a å ā ȃ ȧ ḁ ạ ɑ
b ḇ
c č
d ḏ ð ʤ
e ẹ ē ė ɛ
g ǧ ḡ ɡ
h ħ ḥ
i ị ɪ î ï
j jʰ
k ḵ
o ô ȯ
p p̄
s ṡ ṣ š sˤ ʃ
t ṭ ṯ tˤ ʧ
u ụ ů û
x χ
y ɣ
z ẑ ž ʒ
} ʔ ʾ
{ ʕ ʿ
@ θ
`



var translitCharacterMap = `
a a ܲ ā ܵ ȧ ܰ ạ ܱ å ܳ ḁ ܴ
b b ܒ
d d ܕ
e e ܸ ē ܹ ė ܶ ẹ ܷ
g g ܓ
h h ܗ ħ ܚ
i i ܼ ï ܺ ị ܻ
j jʰ ܞ
k k ܟ
l l ܠ
m m ܡ
n n ܢ
o o ܿ ȯ ّ
p p ܦ
q q ܩ
r r ܪ
s s ܣ sˤ ܨ ʃ ܫ ṡ ܤ
t tˤ ܛ t ܬ
u ů ܽ ụ ܾ
w w ܘ
y y ܝ
z z ܙ
{ ʿ ܥ
} ʾ ܐ
[ ̋ ̈ ʺ ݀
, , ،
; ; ؛
? ? ؟
`

var ipaCharacterMap = `
' ʾ ʔ ʿ ʕe
a a a ā ɑ
b b b ḇ w ḇ v
d d d ḏ ð
e e ɛ e e ē e
g g ɡ ḡ ɣ
h h h ḥ ħ
i i ɪ ī i ī e
k k k ḵ x
l l l
m m m
n n n
o ō o
p p p p̄ f
q q q
r r r
s s s ṣ sˤ š ʃ
t t t ṯ θ ṭ tˤ
u ū u
w w w
z z z z ʒ
y y j
`


function applyLowerCase () {
	var output = document.getElementById('output')
	var chars = getHighlightedText(output)
	document.getElementById('transcriptionWrapper').style.display='block'
	document.getElementById('transcription').style.display = 'block'
	document.getElementById('transcription').textContent = chars.toLowerCase()
	output.focus()
	}

var rightOnly = new Set(['\u0715', '\u0717', '\u071E', '\u0718', '\u0719', '\u0728', '\u072A', '\u072C', '\u072F', '\u074D', '\u0716'])

var bothJoin = new Set(['\u0712', '\u0713', '\u071A', '\u071B', '\u071D', '\u071F', '\u0720', '\u0721', '\u0722', '\u0723', '\u0725', '\u0726', '\u0729', '\u072B', '\u0714', '\u071C', '\u072D', '\u072E', '\u074E', '\u074F', '\u0727'])


function event_mouseoverCharx ()  {
	// display character information
	span = document.createElement( 'span' );
	span.setAttribute( 'id', 'charname' );
	charinfo = document.createTextNode( this.title );
	span.appendChild(charinfo);
	var chardata = document.getElementById('chardata');	
	chardata.replaceChild( span, chardata.firstChild );
	
	// highlight this character
	this.style.backgroundColor = '#F4630B';
	this.style.color = '#ddd'

	
	// highlight similar characters
	if (globals.showShapeHints && _h[this.id]) {
		ptr = this.id
		for (i=0;i<_h[ptr].length;i++) {
			document.getElementById(_h[ptr][i]).style.backgroundColor = '#FFE6B2'
			}
		}
	}


function event_mouseoverChar ()  {
	// overrides the function in shared20/code.js to add shaping forms for all syriac styles
	
	// add cursive forms to table
    if (this.id) {
        var ncr = String.fromCodePoint('0x'+this.id)
        if (ncr === '\u0710') ncr = 'ܝ'+ncr+' \u0715'+ncr+' '+ncr
        else if (window.rightOnly.has(ncr)) ncr = 'ܝ'+ncr+' '+ncr
        else if (bothJoin.has(ncr)) ncr = ncr+'ܝ'+ncr+'ܝ'+ncr+' '+ncr
        var cursive = '<span style="font-family:eastern;">'+ncr+'</span> &nbsp; <span style="font-family:estrangela;">'+ncr+'</span> &nbsp; <span style="font-family:serta;">'+ncr+'</span>'
        document.getElementById('cursive').innerHTML = cursive
        }
	
	
	// display character information
	var span = document.createElement( 'span' );
	span.setAttribute( 'id', 'charname' );
	var charinfo = document.createTextNode( this.title );
	span.appendChild(charinfo);
	
	var chardata = document.getElementById('chardata');	
	chardata.replaceChild( span, chardata.firstChild );
	
	// highlight this character
	this.style.backgroundColor = '#CF9'
	this.style.backgroundColor = '#fc6'
	//this.style.backgroundColor = '#FC0'
		this.style.backgroundColor = '#F4630B';
		this.style.color = '#eee'
	
	// highlight similar characters
	if (globals.showShapeHints && _h[this.id]) {
		ptr = this.id
		for (i=0;i<_h[ptr].length;i++) {
			//document.getElementById(_h[ptr][i]).style.backgroundColor = '#E6FFCD'
			document.getElementById(_h[ptr][i]).style.backgroundColor = '#FFE6B2'
			//document.getElementById(_h[ptr][i]).style.backgroundColor = '#FFE680'
			}
		}
	}
	
