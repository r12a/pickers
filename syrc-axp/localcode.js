globals.showLOCTrans = ''
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
"710": [""],
"712": ["712742", "715", "715742", "72A", "71F", "71F742", "71F330"],
"713": ["71B", "713742", "713330", "725", "720"],
"715": ["715742", "72A", "71F", "71F742", "71F330", "712", "712742"],
"717": ["71873C", "71873F", "718"],
"718": ["717", "71873C", "71873F"],
"719": ["725", "722"],
"720": ["713", "71B", "713742", "713330", "725"],
"721": ["729"],
"722": ["71F", "71F742", "71F330", "728",  "719"],
"723": [""],
"725": ["720", "713", "71B", "713742", "713330",  "722"],
"726": ["72632E"],
"728": ["722", "71F", "71F742", "71F330"],
"729": ["721"],
"712742": ["715", "715742", "72A", "71F", "71F742", "71F330", "712"],
"713330": ["725", "720", "713", "71B", "713742"],
"713742": ["713330", "725", "720", "713", "71B"],
"715742": ["72A", "71F", "71F742", "71F330", "712", "712742", "715"],
"72C742": ["72C"],
"72C": ["72C742"],
"71B": ["713742", "713330", "725", "720", "713"],
"71F742": ["71F330", "71F",  "712", "712742", "715", "715742", "72A", "728"],
"71F330": ["71F", "71F742",  "712", "712742", "715", "715742", "72A", "728"],
"71F": ["71F742", "71F330",  "712", "712742", "715", "715742", "72A", "728"],
"72A": ["71F", "71F742", "71F330", "712", "712742", "715", "715742"],
"72B303": ["72B"],
"72B": ["72B303"],
"71873C": ["71873F", "718", "717"],
"71873F": ["718", "717", "71873C"],
"72632E": ["726"],
"71A": ["71D73C", "71D"],
"71D73C": ["71D", "71A"],
"71D": ["71A", "71D73C"],
end: {}
}


/*
ܐ
ܬ ܬ݂
ܓ ܛ ܓ݂ ܓ̰ ܥ ܠ
ܟ ܟ݂ ܟ̰
ܒ ܒ݂ ܕ ܕ݂ ܪ ܟ ܟ݂ ܟ̰
ܫ ܫ̃
ܕ ܕ݂ ܪ ܟ ܟ݂ ܟ̰
ܢ ܟ ܟ݂ ܟ̰ ܨ
ܘ ܗ ܘܼ ܘܿ
ܦ ܦ̮
ܩ ܡ
ܣ
ܝ ܚ ܝܼ
ܙ ܥ ܢ

*/

var keyboarddef = [
"\u00A7 \u070F \u032E|1 !|2 \u030A \u0702|3 \u0325 \u0703|4 \u0749 \u0704|5 \u2670 \u0705|6 \u2671 \u0708|7 \u070A \u0709|8 » \u070B|9( \u070C|0 )|- « \u070D|= +",
"q \u0729 \u0730 \u064E|w \u0718 \u0733 \u064B|e \u0716 \u0736 \u064F|r \u072A \u073A \u064C|t \u072C \u073D \u0653|y \u071D \u0738 \u0654|u \u071B \u0304 \u0748|i \u0725 \u0705 \u0703|o \u0727 \u0304 \u0745|p \u0726 \u0741 \u032D|[ \u0303|] \u074A",
"a \u0710 \u0731 \u0650|s \u0723 \u0734 \u064D|d \u0715 \u0737|f \u0714 \u073B \u0621|g \u0713 \u073E \u0655|h \u0717 \u0711 \u0670|j \u071B \u0640 \u0748|k \u071F \u0740 \u0704|l \u0720 \u0320 \u0746|; \u071A \u0742 \u2026|' \u071E \u0330|\\ \u0706 :",
"`|z \u0719 \u0732|x \u0728 \u0735|c \u0724 \u0738|v \u072B \u073C|b \u0712 \u073F|n \u0722 \u0739|m \u0721 .|, \u0700 \u060C|.  \u061B|/ \u0707 \u061F"]








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


