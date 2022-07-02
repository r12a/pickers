globals.showULYTrans = ''
globals.showTransliteration = ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false


window.charCheckerList = [
//{ wrong:"သြော်", right:"ဪ" },
//{ wrong:"သြ", right:"ဩ" },
]


function localInitialise () {

	}


_characterSet = 
"ئا ا ئە ە ب پ ت ج چ خ د ر ز ژ س ش غ ف ق ك گ ڭ ل م ن ھ ئو و ئۇ ۇ ئۆ ۆ ئۈ ۈ ۋ ئې ې ئى ىي ي ٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ ؟ ، ؛"


var _h = {
"62A": ['646'],
"646": ['62A'],
"62F": ['631'],
"631": ['62F'],
"642": ['6CB'],
"698": ['6CB'],
"6CB": ['698','642'],
"643": ['6AD'],
"6AD": ['643'],
"64A": ['6D0','64964A','6266D0'],
"6D0": ['64A','64964A'],
"64964A": ['64A','6D0'],
'626649': ['6266D0'],
'6266D0': ['626649'],
'6266C7': ['626648'],
'626648': ['6266C7'],
"665": ['6D5'],
"6D5": ['665'],
end: {}
}


var keyboarddef = [
"§|1|2|3|4|5|6|7|8|9|0|-|=",
"q چ|w ۋ|e ې|r ر|t ت|y ي|u ۇ|i ڭ|o و|p پ|[|]",
"a ھ|s س|d د ژ|f ا ف|g ە گ|h ى خ|j ق ج|k ك ۆ|l ل لا|; ؛|' » «|\\",
"`|z ز|x ش|c غ|v ۈ|b ب|n ن|m م|, ،|.|/ ئ‍ ؟"
]



var rightOnly = new Set(['ا', 'آ', 'أ', 'إ', 'ٱ', 'ة', 'و', 'ؤ', 'ر', 'ز', 'د', 'ذ', 'ۀ', 'ژ', 'ۋ', 'ئا', 'ئۆ', 'ۆ', 'ئە', 'ە', 'ئۈ', 'ۈ', 'ئو', 'ئۇ', 'ۇ'])

var bothJoin = new Set(['ل', 'ك', 'ع', 'غ', 'ح', 'خ', 'ج', 'ف', 'ق', 'ط', 'ظ', 'ه', 'ي', 'ئ', 'ى', 'م', 'ب', 'ت', 'ث', 'ن', 'ص', 'ض', 'س', 'ش', 'گ', 'ک', 'چ', 'ی', 'پ', 'ڭ', 'ھ', 'ئې', 'ې', 'ئى'])


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



function event_mouseoverCharXXX ()  {
	// overrides the function in shared20/code.js to add shaping forms for all arabic styles
	
	// add cursive forms to table
    if (this.id) {
        var cursive = ''
        var ncr = ''
        ncr = this.textContent
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

var justLatinMap = `
a ɑ
c č
d ʤ
e ë ɛ
n ŋ
o ø ɔ ö
r ʁ ɾ
s ʃ
u ü ʊ
x χ
y ɣ ʏ
z ʒ
{ ʿ ’
`


/*
var translitCharacterMap = `
a a ا
A ’a ئا
b b ب
c č چ
d d د ʤ ج
e e ە ë ې
E ’e ئە ’ë ئې
f f ف
g g گ
h h ھ
i i ى
I ’i ئى
k k ك
l l ل
m m م
n n ن ŋ ڭ
o o و ø ۆ
O ’o ئو ’ø ئۆ
p p پ
q q ق
r r ر ʁ غ
s s س ʃ ش
t t ت
u u ۇ ü ۈ
U ’u ئۇ ’ü ئۈ
w w ۋ
x χ خ
y y ي
z z ز ʒ ژ
{ ʿ ئ
% % ٪
, , ،
; ; ؛
? ? ؟
`
*/



var ulyCharacterMap = `
a a ا
A ’a ئا
b b ب
c ch چ
d d د
e e ە ë ې
E ’e ئە ’ë ئې
f f ف
g g گ gh غ
h h ھ
i i ى
I ’i ئى
j j ج
k k ك
l l ل
m m م
n n ن ng ڭ
o o و ö ۆ
O ’o ئو ’ö ئۆ
p p پ
q q ق
r r ر
s s س sh ش
t t ت
u u ۇ ü ۈ
U ’u ئۇ ’ü ئۈ
w w ۋ
x x خ
y y ي
z z ز zh ژ
' ’ ئ
`