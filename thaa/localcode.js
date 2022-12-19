globals.showMLTrans = ''
globals.showTransliteration = ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false


window.charCheckerList = [
//{ wrong:"သြော်", right:"ဪ" },
//{ wrong:"သြ", right:"ဩ" },
]





// list of fonts to add to the standard selection
window.fontsuggestions =  
``


function localInitialise () {
	}



var _h = {
'780': ['799', '79A'],
'799': ['79A', '780'],
'79A': ['780', '799'],
'781': ['782'],
'782': ['781', '78F'],
'783': ['79C', '785'],
'79C': ['785', '783'],
'785': ['783', '79C'],
'787': ['7A2', '7A3'],
'7A2': ['7A3', '787'],
'7A3': ['787', '7A2'],
'788': ['7A5'],
'7A5': ['788'],
'78B': ['78D'],
'78D': ['78B'],
'78C': ['7A1', '7A0'],
'7A1': ['7A0', '78C'],
'7A0': ['78C', '7A1'],
'78E': ['7A4'],
'7A4': ['78E'],
'78F': ['782'],
'790': ['79E', '79F'],
'79E': ['79F', '790'],
'79F': ['790', '79E'],
'795': ['78A'],
'78A': ['795'],


end: {}
}

var keyboarddef = [
"§|1|2|3|4|5|6|7|8|9|0|-|=",
"q ޫ|w ޮ|e ާ /|r ީ :|t ޭ ޤ|y ގ ޜ|u ރ ޣ|i މ ޠ|o ތ ޙ|p ހ|[ ލ|]",
"a ި <|s ު >|d ް . ,|f ަ ،|g ެ \"|h ވ ޥ|j އ ޢ|k ނ ޘ|l ކ ޚ|; ފ ޡ|' اللّٰه ؛ ;|\\",
"`|z ޒ ޖ|x ޑ ޕ|c ސ ޏ|v ޔ ޗ|b ޅ ޟ|n ދ ޛ|m ބ ޝ|, ށ \\|. ޓ ޞ|/ ޯ ؟"
]


var justLatinMap = `
[  ̊ - ∅
a ā
e ē eː ə əː
i ī iː
o ō
ɔ ɔː
u ū uː
d d̪ ḍ d̤ ḏ ʤ ɖ
g ǵ ɡ
h ḥ ḫ
' ʻ
j ɟ
l ḷ ɭ
n n̪ ṇ ɲ ŋ
s š s̺ ṣ ʂ
t t̪ ṭ t̤ ṯ ʧ ʈ
v ʋ
z z̺ ʒ
? ʔ
`


/*
var translitCharacterMap = `
b b ބ
c c ޗ
d d ދ ɖ ޑ
D ð ޛ d̴ ޟ
e ə ަ ə̄ ާ e ެ ē ޭ
f f ފ
g g ގ
h h ހ
H ħ ޙ
i i ި ī ީ
j ɟ ޖ
k k ކ
l ɭ ޅ l ލ
m m މ
n n ނ ɲ ޏ
N ɳ ޱ
o o ޮ ō ޯ
p p ޕ
Q θ ޘ q ޤ
r r ރ
s ʂ ށ s ސ
S ʃ ޝ s̴ ޞ
t t ތ ʈ ޓ
T t̴ ޠ
u u ު ū ޫ
v v ވ
W w ޥ
X x ޚ
y y ޔ
Y ɣ ޣ
z z ޒ
Z ʒ ޜ z̴ ޡ
{ ʿ އ ʕ ޢ
, , ،
; ; ؛
* ͓ ް
`
*/


var mlCharacterMap = `
a a ަ aa ާ
b b ބ
c ch ޗ
d dh ދ d ޑ
D ḏ ޛ d̤ ޟ
e ee ީ e ެ ey ޭ
f f ފ
g g ގ gn ޏ
G ǵ ޣ
h h ހ
H ḥ ޙ ḫ ޚ
i i ި
j j ޖ
k k ކ
l lh ޅ l ލ
m m މ
n n ނ
N ṇ ޱ
o oo ޮ oa ޯ
p p ޕ
Q q ޤ
r r ރ
s sh ށ s ސ
S š ޝ ṣ ޞ
t th ތ t ޓ
T ṯ ޘ t̤ ޠ
u u ު oo ޫ
v v ވ
W w ޥ
y y ޔ
z z ޒ
{ ʻ ޢ
, , ،
; ; ؛
`


globals.showMLTrans = ''

var mlCharacterMap = `
A a އަ aa އާ
a ᵃ ަ ᵃᵃ ާ
b b ބ
c ch ޗ
d d ޑ dh ދ ذ ޛ ض ޟ
e ᵉ ެ ᵉᵉ ީ ᵉʸ ޭ
E e އެ ee އީ ey އޭ
f f ފ
g g ގ gn ޏ
h h ހ ح ޙ خ ޚ
i ⁱ ި
I i އި
j j ޖ
k k ކ
l l ލ lh ޅ
m m މ
n n ނ ṇ ޱ
o ᵒ ޮ ᵒᵃ ޯ ᵒᵒ ޫ
O o އޮ oa އޯ oo އޫ
p p ޕ
q ق ޤ
r r ރ
s s ސ sh ށ ش ޝ ص ޞ
t t ޓ th ތ ث ޘ ط ޠ
u ᵘ ު
U u އު
v v ވ
w و ޥ
y y ޔ
z z ޒ ʒ ޜ ظ ޡ
' ع ޢ غ ޣ
[ - ް - އް
, , ،
; ; ؛
`

function toggleArabic (node, LC, UC) {
    var chars = document.querySelectorAll('.x')

	if (node.classList.contains('shifted')) {
        for (let i=0;i<chars.length;i++) {
			chars[i].style.display='none'
            }
		} 
	else {
        for (let i=0;i<chars.length;i++) {
            chars[i].style.display='inline-block'
            }
		}
	}



