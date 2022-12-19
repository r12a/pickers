globals.showRadiceTrans =  ''
globals.showISOTrans = ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false


window.charCheckerList = [
{ wrong:"ব়", right:"র" },
{ wrong:"অা", right:"আ" },
{ wrong:"াে", right:"ো" },
{ wrong:"াৈ", right:"ৈা" },
{ wrong:"\u09DC", right:"ড়" },
{ wrong:"\u09DD", right:"ঢ়" },
{ wrong:"\u09DF", right:"য়" },
//{ wrong:"", right:"" },
]


// list of fonts to add to the standard selection
window.fontsuggestions =  
`Lohit Bangla
SolaimonLipi
`


function localInitialise () {
	}
	

var _h = {
'995': ['9AC'],
'996': ['9A5', '9AC'],
'998': ['9AF', '9B7'],
'999': ['9EC', '9AD'],
'99A': ['9A2'],
'99D': ['9AC'],
'99E': ['98F', '990'],
'99F': ['9A2', '9A29BC'],
'9A1': ['9A19BC', '989', '98A', '9AD'],
'9A2': ['9A29BC', '99F'],
'9A4': ['985', '986', '9E9'],
'9A5': ['996', '98B'],
'9A8': ['9A3', '9B2'],
'9AB': ['9AF', '998'],
'9AC': ['9B0', '99D','9F1','9F0'],
'9AD': ['9A1', '989', '9EC'],
'9AE': ['9B8'],
'9AF': ['9AF9BC', '998', '9B7'],
'9B0': ['9AC', '99D'],
'9B2': ['9A8'],
'9B7': ['9AF', '998'],
'9B8': ['9AE'],
'9B9': ['987','9BD'],
'9BD': ['9B9'],
'9A19BC': ['9A1', '989', '98A'],
'9A29BC': ['9A2', '99F'],
'9AF9BC': ['9AF', '9B7', '998'],
'985': ['986', '9A4'],
'986': ['985', '9A4'],
'987': ['9B9'],
'989': ['98A', '9A1', '9AD'],
'98A': ['989', '9A1', '9AD'],
'98B': ['996','9E0'],
'98F': ['990', '99E'],
'990': ['98F', '99E'],
'993': ['994'],
'994': ['993'],
'9C7': ['9CB', '9CC', '9C8'],
'9C8': ['9C7'],
'9CB': ['9CC', '9C7'],
'9DC': ['9A19BC'],
'9DD': ['9A29BC'],
'9DF': ['9AF9BC'],
'9F1': ['9F0', '9AC', '9B0'],
'9F0': ['9F1', '9AC', '9B0'],
'9F6': ['9F5', '9EF'],
'9F5': ['9F6', '98C'],
'9F7': ['964'],
'964': ['9F7'],
'9C0': ['9D7'],
'9D7': ['9C0'],
'9FA': ['981'],
'981': ['9FA'],
'9E0': ['98B', '9C3'],
'9E1': ['9E2', '98C', '9F5'],
'9E2': ['9E1'],
'98C': ['9E1', '9F5'],
'9F8': ['9A6'],
'9A6': ['9F8'],

end: {}
}



var keyboarddef = [
"§|1 ১|2 ২|3 ৩ ্র|4 ৪ র্|5 ৫ জ্ঞ|6 ৬ ত্র|7 ৭ ক্ষ|8 ৮ শ্র|9 ৯ (|0 ০ )|- ঃ|= ৃ ঋ",
"q ৌ ঔ|w ৈ ঐ|e া আ|r ী ঈ|t ূ ঊ|y ব ভ|u হ ঙ|i গ ঘ|o দ ধ|p জ ঝ|[ ড ঢ|] ় ঞ",
"a ো ও|s ে এ|d ্ অ|f ি ই|g ু উ|h প ফ|j র|k ক খ|l ত থ|; চ ছ|' ট ঠ|\\",
"`|z|x ং ঁ|c ম ণ|v ন|b|n ল|m স শ|, ষ|.|/ য য়"
]






globals.showISOCharMap = ''

var isoCharacterMap = `
a ɑ া
A ɑ আ
b b ব
B bʰ ভ
c c চ
C cʰ ছ
d d দ ʤ জ ɖ ড
D ʤʰ ঝ ɖʰ ঢ dʰ ধ
e e ে
E ẹ এ
g g গ
G gʰ ঘ
h h হ h̽ ঃ
i i ি ī ী
I ị ই ị̄ ঈ
k k ক
K kʰ খ
l l ল
L l̥ ৢ l̥̄ ৣ l̥̣ ঌ l̥̣̄ ৡ
m m ম m̽ ঁ
n n ন ñ ঞ n̈ ণ
N ŋ ঙ ŋ̽ ং
o oʲ ৈ o ো oʷ ৌ
O ɔ̣ অ ọʲ ঐ ọ ও ọʷ ঔ
p p প
P pʰ ফ
r r র ɽ \u{9DC} ɽ̇ \u{9DD}
R r̥ ৃ r̥̄ ৄ r̥̣ ঋ r̥̣̄ ৠ
s ʃ̈ স ʃ শ ʃ̇ ষ
t t ত ʈ ট t̽ ৎ
T ʈʰ ঠ tʰ থ
u u ু ū ূ
U ụ উ ụ̄ ঊ
y ý য ẏ \u{9DF}
0 0 ০
1 1 ১
2 2 ২
3 3 ৩
4 4 ৪
5 5 ৫
6 6 ৬
7 7 ৭
8 8 ৮
9 9 ৯
[ ˑ ় ¶ ॥
. . ।
: ː ৗ
* ͓ ্
" “ « ” »
`






var radiceCharacterMap = `
a a া æ ে æ ্যা
e e ে
i i ি ī ী
o o ো ô ো oĭ ৈ oŭ ৌ
u u ু ū ূ
A ā আ æ এ
E e এ
I i ই ī ঈ
O o ও ô অ oĭ ঐ oŭ ঔ ɔ অ
U u উ ū ঊ
b b ব
B bh ভ
c c চ 
C ch ছ
d d দ ɖ ড
D dh ধ ɖh ঢ
g g গ
G gh ঘ
h h হ ḥ ঃ
j j জ
J jh ঝ
k k ক
K kh খ
l l ল
m m ম ɱ ং
n n ন ñ ঞ ɳ ণ ŋ ঙ
p p প
P ph ফ
r r র ɽ ড় ṛ ৃ
R ɽh ঢ় ṛ ঋ
s s স ʂ ষ ʃ শ
t t ত ṯ ৎ ʈ ট
T th থ ʈh ঠ
v v ব
y y য় y য y̌ য yæ য yæ ্যা
. . ।
* virama ্ ̃ ঁ
`




