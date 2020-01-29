globals.showLOCTrans = ''
globals.showTransliteration = ''
globals.showIPATrans = ''
globals.typeAssist = ''
globals.showKeysTranslitToggle = false

function localInitialise () {

	}


_characterSet = 
"ئا ا ئە ە ب پ ت ج چ خ د ر ز ژ س ش غ ف ق ك گ ڭ ل م ن ھ ئو و ئۇ ۇ ئۆ ۆ ئۈ ۈ ۋ ئې ې ئى ىي ي ٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ ؟ ، ؛"


var _h = {
'627': ['661'],
'622': ['661'],
'623': ['661', '654'],
'625': ['661', '655'],
'671': ['661'],
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
"§ ذ ّ|1 ١|2 ٢|3 ٣|4 ٤|5 ٥|6 ٦|7 ٧|8 ٨|9 ٩|0 ٠|- «|= »",
"q ض َ ‘|w ص ً ’|e ث ُ “|r ق ٌ ”|t ف لإ ڤ|y غ إ|u ع ‘ ە|i ه ÷|o خ ×|p ح ؛|[ ج < چ|] د >",
"a ش ِ |s س ٍ ے|d ي ]\ ی|f ب [\ پ|g ل لأ ٓ|h ا أ ٰ|j ت ـ ٹ|k ن ، ں|l م /|; ك : گ|' ط \" …|\\",
"` ٫ ٬|z ئ ~|x ء ْ|c ؤ } ڈ|v ر { ڑ|b لا لآ ژ|n ى آ|m ة ’|, و|.  ز|/ ظ ؟"
]



function setLocalButtons () {
	// overrides the function that hides the makeEg and charLink buttons
	
	}


var rightOnly = new Set(['ا', 'آ', 'أ', 'إ', 'ٱ', 'ة', 'و', 'ؤ', 'ر', 'ز', 'د', 'ذ'])

var bothJoin = new Set(['ل', 'ك', 'ع', 'غ', 'ح', 'خ', 'ج', 'ف', 'ق', 'ط', 'ظ', 'ه', 'ي', 'ئ', 'ى', 'م', 'ب', 'ت', 'ث', 'ن', 'ص', 'ض', 'س', 'ش'])





var ipaCharacterMap = `
a ɑː ا ɑ ة a ى ɑt ة ʔɑː آ
A a َ an ً
b b ب
d d د dˤ ض ðˤ ظ ð ذ
f f ف f ڢ
h h ہ ħ ح
i iː ي
I i ِ in ٍ
j j ي
k k ك
l l ل
m m م
n n ن
q q ق q ڧ
r r ر
s s س sˤ ص ʃ ش
t t ت tˤ ط
u uː و
U u ُ un ٌ
w w و
x x خ
y ɣ غ
z z ز ʒ ج
@ θ ث
{ ʕ ع
} ʔ ء
[ ° ْ ᵚ ّ
§ 0 ٠ 1 ١ 2 ٢ 3 ٣ 4 ٤ 5 ٥ 6 ٦ 7 ٧ 8 ٨ 9 ٩
; ; ؛
_ _ ـ
, , ،
. . ۔
? ? ؟
% % ٪
`


