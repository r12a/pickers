globals.showLOCTrans = ''
globals.showCursive = ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false


window.charCheckerList = [
//{ wrong:"သြော်", right:"ဪ" },
//{ wrong:"သြ", right:"ဩ" },
]


function localInitialise () {

	}


var _h = {
"710": ["72C", "72C742", "719", "719330", "722"],
"712": ["712742", "71F"],
"713": ["714", "713742", "725", "720"],
"714": ["713742", "725", "720", "713"],
"715": ["715742", "72A", "72B", "72B330"],
"717": ["723", "721", "718", "729"],
"718": ["729", "717", "723", "721"],
"719": ["719330", "722", "710", "72C", "72C742"],
"720": ["713", "714", "713742", "725"],
"721": ["718", "729", "717", "723"],
"722": ["710", "72C", "72C742", "719", "719330"],
"723": ["721", "718", "729", "717"],
"725": ["720", "713", "714", "713742"],
"726": ["726741"],
"728": [""],
"729": ["717", "723", "721", "718"],
"712742": ["71F", "712"],
"713742": ["725", "720", "713", "714"],
"715742": ["72A", "72B", "72B330", "715"],
"719330": ["722", "710", "72C", "72C742", "719"],
"726741": ["726"],
"72C": ["72C742", "719", "719330", "722", "710"],
"72C742": ["719", "719330", "722", "710", "72C"],
"72B330": ["715", "715742", "72A", "72B"],
"72A": ["72B", "72B330", "715", "715742"],
"72B": ["72B330", "715", "715742", "72A"],
"71A": ["71F", "71F742", "71D"],
"71F": ["71F742", "71D", "71A",  "712"],
"71F742": ["71D", "71A", "71F"],
"71D": ["71A", "71F", "71F742"],
"71B": [""],
end: {}
}


/*
ܐ ܬ ܬ݂ ܙ ܙ̰ ܢ
ܫ ܫ̰ ܕ ܕ݂ ܪ
ܝ ܚ ܟ ܟ݂
ܘ ܩ ܗ ܣ ܡ
ܒ ܒ݂ ܟ
ܦ ܦ݁
ܓ ܔ ܓ݂ ܥ ܠ
ܛ
ܨ
ܢ

*/



var keyboarddef = [
"\u00A7 \u070F \u032E|1 !|2 \u030A \u0702|3 \u0325 \u0703|4 \u0749 \u0704|5 \u2670 \u0705|6 \u2671 \u0708|7 \u070A \u0709|8 » \u070B|9( \u070C|0 )|- « \u070D|= +",
"q \u0729 \u0730 \u064E|w \u0718 \u0733 \u064B|e \u0716 \u0736 \u064F|r \u072A \u073A \u064C|t \u072C \u073D \u0653|y \u071D \u0738 \u0654|u \u071B \u0304 \u0748|i \u0725 \u0705 \u0703|o \u0727 \u0304 \u0745|p \u0726 \u0741 \u032D|[ \u0303|] \u074A",
"a \u0710 \u0731 \u0650|s \u0723 \u0734 \u064D|d \u0715 \u0737|f \u0714 \u073B \u0621|g \u0713 \u073E \u0655|h \u0717 \u0711 \u0670|j \u071B \u0640 \u0748|k \u071F \u0740 \u0704|l \u0720 \u0320 \u0746|; \u071A \u0742 \u2026|' \u071E \u0330|\\ \u0706 :",
"`|z \u0719 \u0732|x \u0728 \u0735|c \u0724 \u0738|v \u072B \u073C|b \u0712 \u073F|n \u0722 \u0739|m \u0721 .|, \u0700 \u060C|.  \u061B|/ \u0707 \u061F"]



var rightOnly = new Set(['ܐ', 'ܕ', 'ܗ', 'ܞ', 'ܘ', 'ܙ', 'ܩ', 'ܪ', 'ܨ', 'ܬ'])

var bothJoin = new Set(['ܒ', 'ܓ', 'ܚ', 'ܛ', 'ܝ', 'ܟ', 'ܠ', 'ܡ', 'ܢ', 'ܣ', 'ܤ', 'ܥ', 'ܦ', 'ܫ'])


function event_mouseoverCharXX ()  {
	// overrides the function in shared20/code.js to add shaping forms for all arabic styles
	
	// add cursive forms to table
    if (this.id) {
        var cursive = ''
        var ncr = ''
        if (this.id.length < 5) ncr = String.fromCodePoint('0x'+this.id)
        if (window.rightOnly.has(ncr)) cursive = 'ܝ'+ncr+' '+ncr
        else if (bothJoin.has(ncr)) cursive = ncr+'ܝ'+ncr+'ܝ'+ncr+' '+ncr
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
		this.style.backgroundColor = '#F4630B';
		this.style.color = '#eee'
	
	// highlight similar characters
	if (globals.showShapeHints && _h[this.id]) {
		ptr = this.id
		for (i=0;i<_h[ptr].length;i++) {
			document.getElementById(_h[ptr][i]).style.backgroundColor = '#FFE6B2'
			}
		}
	}



function event_mouseoverCharXX ()  {
	// overrides the function in shared20/code.js to add shaping forms for all arabic styles
	
	// add cursive forms to table
    if (this.id) {
        var cursive = ''
        var ncr = ''
        ncr = this.textContent
        if (window.rightOnly.has(ncr)) cursive = 'ܝ'+ncr+' '+ncr
        else if (bothJoin.has(ncr)) cursive = ncr+'ܝ'+ncr+'ܝ'+ncr+' '+ncr
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
		this.style.backgroundColor = '#F4630B';
		this.style.color = '#eee'
	
	// highlight similar characters
	if (globals.showShapeHints && _h[this.id]) {
		ptr = this.id
		for (i=0;i<_h[ptr].length;i++) {
			document.getElementById(_h[ptr][i]).style.backgroundColor = '#FFE6B2'
			}
		}
	}



globals.showIPATrans = ''

var ipaCharacterMap = `
a a ܲ ɑ ܵ a ܰ a ܱ ɑ ܳ ɑ ܴ a \u0735\u0710\b a \u0732\u0710\b ɑ ܐ
b b ܒ
d d ܕ ð ܕ݂ ʤ ܓ̰
e ɛ ܸ e ܹ ɛ ܶ ɛ ܷ e ܸ e ܶ e ܷ
f f ܦ݂
g g ܓ
h h ܗ ħ ܚ
i i ܼ i ܺ i ܻ ɪ \u0738\u0710\b i ܝܼ ɪ ܸ
j jʰ ܞ
k k ܟ
l l ܠ
m m ܡ
n n ܢ
o o ܿ o ّ o ܘܿ
p p ܦ
q q ܩ
r r ܪ
s s ܣ sˤ ܨ ʃ  ܫ ṡ ܤ
t tˤ ܛ t ܬ ʧ ܟ̃ ʧ ܟ݂
u u ܽ u ܾ u ܘܼ
v v ܒ݂
w w ܘ
x x ܟ݂
y j ܝ ɣ ܓ݂
z z ܙ ʒ ܙ̃ ʒ ܙ̰ ʒ ܫ̰ ʒ ܫ̃
{ ʕ ܥ
} ʔ ܐ
[ ̋ ̈ ʺ ݀ ¶ ܀
, , ،
. . . . ܁ . ܂ . ܊
; ; ؛ ; ܈
: : ܃ : ܄ : ܅ : ܆ : ܇
? ? ؟ ? ܉
`


/*

' ʾ ʔ ʿ ʕe
b b b ḇ w
c c ʔ c ʕ č ʧ
d d d ḏ ð
g g ɡ ḡ ɟ ḡ ʔ ḡ ɣ ḡ j ǧ ʤ
h h h ḥ x
k k cʰ ḵ x
p p pʰ ꝑ f q q
s s s ṣ s š ʃ
t t tʰ t t ṯ θ ṭ t
w w w w u
y y i y e y j
z z z ž ʒ
a ă a a a aw o ay e
i ĭ i î i 
e e ɪ
u û u
o ô u
`
*/