globals.showLOCTrans = ''
globals.showIPATrans = ''
globals.showTranslit =  ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = true



function localInitialise () {

	}


var keyboarddef = [
"§|1 ۱|2 ۲|3 ۳|4 ۴|5 ۵|6 ۶|7 ۷ ۖ|8 ۸ ۙ|9 ۹|0 ۰|-|=",
"q ط ظ|w ص ض ً|e ھ ذ َ|r د ڈ ٌ|t ٹ ث|y پ ّ|u ت ۃ|i ب ـ|o  ُج چ|p ح خ ِ|[ ] } َ|] [ { ْ",
"a م ژ ۢ|s و ز|d ر ڑ|f ن ں|g ل ۂ|h ہ ء أ|j ا آ إ|k ک گ|l ی ي|; ؛|' |\\",
"`|z ق|x ف|c ے ۓ|v س|b ش ؤ|n غ ئ|m ع|. ، >|, ۔ <|/ ؟ "
]





_h = {
'627': ['6F1', '622', '623'],
'6F1': ['622', '623', '627'],
'622': ['623', '627', '6F1'],
'623': ['622', '627', '6F1'],
'628': ['67E', '62A', '679', '62B', '600', '601'],
'67E': ['62A', '679', '62B', '628', '600', '601'],
'62A': ['679', '62B', '628', '67E', '600', '601'],
'679': ['62B', '628', '67E', '62A', '600', '601'],
'62B': ['628', '67E', '62A', '679', '600', '601'],
'62C': ['686', '62D', '62E'],
'686': ['62D', '62E', '62C'],
'62D': ['62E', '62C', '686'],
'62E': ['62C', '686', '62D'],
'62F': ['688', '630', '631', '691', '632', '698', '648', '624'],
'688': ['630', '631', '691', '632', '698', '648', '624', '62F'],
'630': ['631', '691', '632', '698', '648', '624', '62F', '688'],
'631': ['691', '632', '698', '648', '624', '62F', '688', '630'],
'691': ['632', '698', '648', '624', '62F', '688', '630', '631'],
'632': ['698', '648', '624', '62F', '688', '630', '631', '691'],
'698': ['648', '624', '62F', '688', '630', '631', '691', '632'],
'648': ['624', '62F', '688', '630', '631', '691', '632', '698'],
'624': ['62F', '688', '630', '631', '691', '632', '698', '648'],
'633': ['634', '635', '636', '6A9', '646', '6BA'],
'634': ['635', '636', '6A9', '646', '6BA', '633'],
'635': ['636', '6A9', '646', '6BA', '633', '634'],
'636': ['6A9', '646', '6BA', '633', '634', '635'],
'6A9': ['646', '6BA', '633', '634', '635', '636', '6AF', '644'],
'646': ['6BA', '633', '634', '635', '636', '6A9'],
'6BA': ['633', '634', '635', '636', '6A9', '646'],
'637': ['638'],
'638': ['637'],
'639': ['63A', '60F'],
'63A': ['639', '60F'],
'60F': ['639', '63A'],
'641': ['642'],
'642': ['641'],
'6AF': ['6A9', '633', '634', '644'],
'644': ['6A9', '6AF', '633', '646', '6BA'],
'6C1': ['6C2', '6C3', '647'],
'6C2': ['6C3', '647', '6C1'],
'6C0': ['6C3', '647', '6C1', '6C2'],
'6C3': ['647', '6C1', '6C2'],
'647': ['6C1', '6C2', '6C3'],
'6CC': ['626'],
'626': ['6CC'],
'6D2': ['6D3'],
'6D3': ['6D2'],
'602': ['60E'],
'60E': ['602'],
'601': ['600'],
'600': ['601'],

end: {}
}


var rightOnly = new Set(['ا', 'و', 'د', 'دھ', 'ڈ', 'ڈھ', 'ذ', 'ر', 'رھ', 'ڑ', 'ڑھ', 'ز', 'ژ', 'ے', 'آ', 'أ', 'ء', 'ؤ', 'ۓ'])

var bothJoin = new Set(['ب', 'بھ', 'پ', 'پھ', 'ت', 'تھ', 'ٹ', 'ٹھ', 'ث', 'ن', 'ج', 'جھ', 'چ', 'چھ', 'ح', 'خ', 'ک', 'کھ', 'گ', 'گھ', 'ل', 'م', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ہ', 'ی', 'ئ', 'ۂ', 'ۃ', 'ں', 'ھ', 'ه'])


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
a ā
b β
d ɖ ʤ ḍ
e ɛ ɛ͑ e͑ ə
g ɡ ǧ g͟h
h ʰ h͑ ḫ
i ɪ͑ ᵢ ī ɪ
k k͟h
n ṇ̃ ⁿ ᵑ ṅ
o ɔ
r ɽ ṛ ʁ
s ŝ ṡ ʃ ṣ š ʂ s̱
t ʈ ṭ t̤
u u͑ ᵘ ū ʊ
w ᵚ
y ɣ
z ż ž ẑ ʒ ẓ ẕ z̤
{ ʿ
} ʾ ʔ
' ‘
: ː
[  ̃◌
* ͓
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
a ɑ ا ɑ͑ أ ɑ̜ إ ɑ̄ آ ɑ̇ ٰ
A a َ aⁿ ً
b b ب
c č چ
d d د ɖ ڈ
D ʤ ج
e ɛ ے ɛ͑ ۓ
E e͑ ۂ
f f ف
g g گ
h ʰ ھ ḫ ہ h͗ ۀ
H h ح
i ɪ͑ ئ
I i ِ iⁿ ٍ ᵢ ٖ
k k ک k̇ ك
l l ل
m m م
n n ن ñ ں ᵑ ٘
p p پ
q q ق
r r ر ɽ ڑ
s s س ʃ ش ṡ ث
S ŝ ص
t t ت ʈ ٹ ẗ ة
T t̂ ط
u u͑ ؤ ᵘ ٗ
U u ُ uⁿ ٌ
v v و
x x خ
y y ی
Y ɣ غ
z z ز ʒ ژ ż ذ
Z ž ظ ẑ ض
{ ʿ ع
} ʾ ء
& ᵚ ّ
* ͓ ْ
' ‘ ٔ
; ; ؛
_ _ ـ
, , ،
. . ۔
? ? ؟
% % ٪
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
`
*/

var locCharacterMap = `
b b ب
B bh بھ
c c چ
C ch چھ
d d د ḍ ڈ
D dh دھ ḍh ڈھ
f f ف
g g گ ǧ غ
G gh گھ g͟h غ
h h ہ h ح
j j ج
J jh جھ
k k ک
K kh کھ k͟h خ
l l ل
m m م
n n ن ṉ ن ṉ ں ṅ ں
p p پ
P ph پھ
q q ق
r r ر ṛ ڑ ṛh ڑھ
s s س s ث s ص ṣ ص s̱ ث š ش sh ش
t t ت t ط t̤ ط ṭ ٹ
T th تھ ṭh ٹھ
v v و
x x خ
y y ی
z z ذ z ز z ض z ظ ẕ ذ z̤ ض ẓ ظ ž ژ zh ژ
' ' ع ' ء
@ ∅ ی ∅ ا ∅ ع ∅ ل ∅ و ∅ ء
a a ا a ہ ā ا ā آ ai ے ai ی ai ای ai ۓ au و au او
e e ے e ی e ای
i i ا i ئ ī ی ī ی ī ای
o o و o او
u u ا ū و ū او
A a َ a اَ a َہ ā ا ā آ ā عَا ai َے ai َی ai اَی ai ۓ au َو au اَو
E e ے e ی e ای e ی
I i اِ ī ی ī ِی ī اِی
O o و o او
U u ُ u اُ u و ū ُو ū اُو ū وٗ ū اوٗ
[ ̃ ں
`



var ipaCharacterMap = `
b b ب β و
B bʰ بھ
c c چ
C cʰ چھ
d d د ɖ ڈ ʤ ج
D dʰ دھ ɖʰ ڈھ ʤʰ جھ
f f ف
g g گ
G gʰ گھ
h h ہ h ح
j j ی
k k ک
K kʰ کھ
l l ل
m m م
n n ن
p p پ
P pʰ پھ
q q ق
r r ر ɽ ڑ ɽʰ ڑھ ʁ غ
s s س s ث s ص ʃ ش
t t ت t ط ʈ ٹ
T tʰ تھ ʈʰ ٹھ
x x خ
z z ذ z ز z ض z ظ ʒ ژ
? ʔ ع
@ ∅ ی ∅ ا ∅ ع ∅ ل ∅ و ∅ ء
e ə ا ɛ ے ɛ ی ɛ ای ɛ ۓ e ے e ی e ای
a ɑː ہ
o ɔ و ɔ او o و o او
i ɪ ائ iː ی iː ای
u ʊ ا uː و uː او
E ə َ ə اَ ɛ َ ɛ َے ɛ َی ɛ اَی ɛ ۓ e ے e ی e ای e ِ
A ɑː َ ɑː ا ɑː آ ɑː عَا
O ɔ َو ɔ اَو o و o او o ُ
I ɪ ِ iː ی iː ِی iː اِی
U ʊ ُ ʊ اُ ʊ و uː ُو uː اُو uː وٗ uː اوٗ
`

