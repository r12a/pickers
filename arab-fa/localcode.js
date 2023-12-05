globals.showLOCTrans = ''
globals.showIPATrans = ''
globals.showTransliteration = ''
globals.typeAssist = ''
globals.showKeysTranslitToggle = false


window.charCheckerList = [
{ wrong:"ۀ", right:"هٔ" },
{ wrong:"ۂ", right:"هٔ" },
{ wrong:"ئ", right:"یٔ" },
{ wrong:"ࢨ", right:"یٔ" },
{ wrong:"ي", right:"ی" },
{ wrong:"ى", right:"ی" },
{ wrong:"ہ", right:"ه" },
{ wrong:"ە", right:"ه" },
{ wrong:"ۃ", right:"ة" },
{ wrong:"ك", right:"ک" },
]


// list of fonts to add to the standard selection
window.fontsuggestions =  
`Farisi
IranNastaliq`




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
'6F1': ['625', '623', '622', '627'],
'60F': ['639', '63A'],
'657': ['64F'],
'620': ['60E'],
'60E': ['602'],
'66B': ['631'],
'654': ['626', '624', '623'],
'655': ['625'],
'626': ['654'],
'624': ['654'],

end: {}
}



var keyboarddef = [
"§ ÷|1 ۱ !|2 ۲ ٬|3 ۳ ٫|4 ۴ ﷼|5 ۵ ٪|6 ۶ ×|7 ۷ ،|8 ۸ *|9 ۹ )|0 ۰ (|-|=",
"q ض ْ|w ص ٌ|e ث ٍ|r ق ً|t ف ُ|y غ ِ|u ع َ|i ه ّ|o خ ]|p ح [|[ ج }|] چ {",
"a ش  ؤ|s س ئ|d ی ي|f ب إ|g ل أ|h ا آ|j ت ة|k ن «|l م »|; ک :|' گ ؛|\\",
"`|z ظ ك|x ط ٓ|c ز ژ|v ر ٰ|b ذ|n د ٔ|m پ ء|, و|. . |/ ؟"
]

var justLatinMap = `
a ɑ ɑ͑ ɑ̄ ā á æ ɑ ɑː ɒː
c č
d ʤ
e ē ɛ
ɡ ɢ
h ħ h͑ ḥ
i ī iː
n ⁿ
o oː ɔ
s ʃ ŝ ṡ š s̱
t t̂ ẗ ʧ
u ū uː
w w͑ ᵚ
x χ
y ɣ y͑
z ż ʒ ẑ ž ẓ
{ ʔ̇ ʿ
} ʔ ˓
0 0̣
1 1̣
2 2̣
3 3̣
4 4̣
5 5̣
6 6̣
7 7̣
8 8̣
9 9̣
`


/*
var translitCharacterMap = `
a ɑ ا ɑ͑ أ ɑ̄ آ 
A a َ aⁿ ً
b b ب
c č چ
d d د
D ʤ ج
f f ف
g g گ
h h ه ħ ح h͑ ۀ
I i ِ iⁿ ٍ
k k ک
l l ل
m m م
n n ن
p p پ
q q ق
r r ر
s s س ʃ ش ŝ ص ṡ ث
t t ت t̂ ط ẗ ة
U u ُ uⁿ ٌ
v v و
w w͑ ؤ ᵚ ّ
x x خ
y y ی y͑ ئ ɣ غ
z z ز ż ذ ʒ ژ ẑ ض ž ظ
{ ʔ̇ ع
} ʔ ء
* ͓ ْ
0 0̣ ۰
1 1̣ ۱
2 2̣ ۲
3 3̣ ۳
4 4̣ ۴
5 5̣ ۵
6 6̣ ۶
7 7̣ ۷
8 8̣ ۸
9 9̣ ۹
; ; ؛
_ _ ـ
, , ،
. . ۔
? ? ؟
% % ٪
`
*/

var unCharacterMap = `
' ʼ ا ʼ ؤ ʼ ع
b b ب
c č چ
d d د
f f ف
g g گ
h h ح h ه
j j ج
k k ک
l l ل
m m م
n n ن
p p پ
q q ق q غ
r r ر
s s س s ث s ص š ش
t t ت t ط
v v و
x x خ
y y ی
z z ذ z ز z ض z ظ ž ژ
a ā ا an ً a َ
e e ی e ه
i i ی in ٍ
o o ِ
u u و un ٌ u ُ
[ ° ْ ᵚ ّ 
`


var ipaCharacterMap = `
b b ب
d d د dˤ ض ðˤ ظ ð ذ
f f ف f ڢ
h h ہ ħ ح
j j ي
k k ك
l l ل
m m م
n n ن
q q ق q ڧ
r r ر
s s س sˤ ص ʃ ش
t t ت tˤ ط
w w و
x x خ
z z ز ʒ ج
O θ ث
y ɣ غ
? ʕ ع ʔ ء
a ɑː ا ɑ ى ɑ ة ɑt ة ʔɑː آ a َ an ً
i iː ي i ِ in ٍ
u uː و u ُ un ٌ
[ ᵚ ّ ° ْ 
`



var rightOnly = new Set(['ا', 'آ', 'أ', 'إ', 'ٱ', 'ة', 'و', 'ؤ', 'ر', 'ز', 'د', 'ذ', 'ۀ', 'ژ'])

var bothJoin = new Set(['ل', 'ك', 'ع', 'غ', 'ح', 'خ', 'ج', 'ف', 'ق', 'ط', 'ظ', 'ه', 'ي', 'ئ', 'ى', 'م', 'ب', 'ت', 'ث', 'ن', 'ص', 'ض', 'س', 'ش', 'گ', 'ک', 'چ', 'ی', 'پ'])


function event_mouseoverCharXXX ()  {
	// overrides the function in shared20/code.js to add shaping forms for all arabic styles
	
	// add cursive forms to table
    if (this.id) {
        var cursive = ''
        var ncr = ''
        if (this.id.length < 5) ncr = String.fromCodePoint('0x'+this.id)
        if (window.rightOnly.has(ncr)) cursive = 'ـ'+ncr+' '+ncr
        else if (bothJoin.has(ncr)) cursive = ncr+'ـ'+ncr+'ـ'+ncr+' '+ncr
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
