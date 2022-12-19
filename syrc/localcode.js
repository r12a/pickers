globals.showLOCTrans = ''
globals.showIPATrans = ''
globals.showTransliteration = ''
globals.showCursive = ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false


window.charCheckerList = [
//{ wrong:"သြော်", right:"ဪ" },
//{ wrong:"သြ", right:"ဩ" },
]


// list of fonts to add to the standard selection
window.fontsuggestions =  
`Assyrian Estrangela
EastSyriacAdiabeneRegular
EastSyriacCtesiphonRegular
EstrangeloAntiochRegular
EstrangeloEdessaRegular`


function localInitialise () {
	}



var _h = {
"710": ["711"],
"711": ["710"],
"712": ["712742", "71F", "71F742", "71F330", "72F", "72D"],
"713": ["71B", "713742", "713330", "725", "720", "714", "71C", "72E"],
"714": ["71C", "72E", "713", "71B", "713742", "713330", "725", "720"],
"715": ["715742", "72A", "716"],
"716": ["715", "715742", "72A"],
"717": ["71873C", "71873F", "723", "71E", "718"],
"718": ["717", "71873C", "71873F", "723", "71E"],
"719": ["725", "722"],
"720": ["714", "71C", "72E", "713", "71B", "713742", "713330", "725"],
"721": ["729"],
"722": ["71F", "71F742", "71F330",  "719"],
"723": ["71E", "718", "717", "71873C", "71873F"],
"725": ["720", "714", "71C", "72E", "713", "71B", "713742", "713330",  "722"],
"726": ["72632E"],
"728": [""],
"729": ["721"],
"712742": ["71F", "71F742", "71F330", "72F", "72D", "712"],
"713330": ["725", "720", "714", "71C", "72E", "713", "71B", "713742"],
"713742": ["713330", "725", "720", "714", "71C", "72E", "713", "71B"],
"715742": ["72A", "716", "715"],
"72C742": ["72C"],
"72C": ["72C742"],
"71B": ["713742", "713330", "725", "720", "714", "71C", "72E", "713"],
"71C": ["72E", "713", "71B", "713742", "713330", "725", "720", "714"],
"72E": ["713", "71B", "713742", "713330", "725", "720", "714", "71C"],
"71F742": ["71F330", "71F",  "72F", "72D", "712", "712742"],
"71F330": ["71F", "71F742",  "72F", "72D", "712", "712742"],
"71F": ["71F742", "71F330",  "72F", "72D", "712", "712742"],
"72F": ["72D", "712", "712742", "71F", "71F742", "71F330"],
"72D": ["712", "712742", "71F", "71F742", "71F330", "72F"],
"72B303": ["72B"],
"72B": ["72B303"],
"71873C": ["71873F", "723", "71E", "718", "717"],
"71873F": ["723", "71E", "718", "717", "71873C"],
"71E": ["718", "717", "71873C", "71873F", "723"],
"72632E": ["726"],
"72A": ["716", "715", "715742"],
"71A": ["71D73C", "71D"],
"71D73C": ["71D", "71A"],
"71D": ["71A", "71D73C"],

end: {}
}


/*

ܐ ܑ
ܬ ܬ݂
ܓ ܛ ܓ݂ ܓ̰ ܥ ܠ ܔ ܜ ܮ
ܟ ܟ݂ ܟ̰
ܒ ܒ݂ ܟ ܟ݂ ܟ̰ ܯ ܭ
ܫ ܫ̃
ܢ ܟ ܟ݂ ܟ̰
ܘ ܗ ܘܼ ܘܿ ܣ ܞ
ܩ ܡ
ܦ ܦ̮
ܕ ܕ݂ ܪ ܖ
ܝ ܚ ܝܼ
ܙ ܥ ܢ
ܨ

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

/*
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
*/


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


