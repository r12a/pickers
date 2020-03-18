globals.showLOCTrans = ''
globals.showIPATrans = ''
globals.showTransliteration = ''
globals.showCursive = ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false



function localInitialise () {

	}



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


