globals.showTranslit =  ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false


window.charCheckerList = [
//{ wrong:"သြော်", right:"ဪ" },
//{ wrong:"သြ", right:"ဩ" },
]


function localInitialise () {

	}



var _h = {
'A85': ['A90', 'A86', 'A93', 'A94', 'A9A', 'AB8', 'AB0', 'AE8'],
'A86': ['A85', 'A90', 'A93', 'A94', 'A9A', 'AB8', 'AB0', 'AE8'],
'A87': ['A88', 'A98', 'AA7', 'AA6', 'AEC'],
'A88': ['A87', 'A98', 'AA7', 'AA6', 'AEC'],
'A89': ['A8A', 'AE9'],
'A8F': ['A90', 'A94', 'A85', 'A93', 'A9A', 'AB8', 'AB0', 'AE8'],
'A90': ['A94', 'A8F', 'A93', 'A85', 'A9A', 'AB8', 'AB0', 'AE8'],
'A94': ['A8F', 'A90', 'A93', 'A85', 'A9A', 'AB8', 'AB0', 'AE8'],
'A8B': ['AE0'],
'A95': ['AAB'],
'A98': ['AA7', 'A87', 'A88'],
'A99': ['AA1', 'ABD'],
'AA1': ['A99', 'ABD'],
'AA5': ['AAA', 'AAF', 'AEB'],
'AA6': ['AEC', 'A87', 'AA7'],
'AA7': ['A87', 'A88'],
'AAA': ['A9A', 'AA5', 'AAE', 'AAF'],
'AAB': ['A95', 'A99'],
'AAC': ['A96'],
'A96': ['AAC'],
'AAE': ['AAA', 'AAF', 'AEB'],
'AB0': ['AE8', 'A9A', 'A85'],
'AB6': ['AB8', 'AE8', 'AB0'],
'AB8': ['AB6', 'A85'],
'A8C': ['AE1'],
'ACB': ['AC9'],
'AC9': ['ACB'],
'AEF': ['AA6'],
'AEB': ['AAA', 'AAF', 'AAE'],
'AEC': ['AA6'],
'AE7': ['AB5'],
'AB5': ['AE7'],
'AE8': ['AB0', 'A9A'],
'ABD': ['AA1', 'A99'],
'AF1': ['AE9'],
'A8A': ['A89', 'AE9'],
'A9F': ['AA2'],
'AA2': ['A9F'],

end: {}
}



var keyboarddef = [
"§|1 ૧ ઍ|2 ૨ ૅ|3 ૩ ્ર|4 ૪ ર્|5 ૫ જ્ઞ|6 ૬ ત્ર|7 ૭ ક્ષ|8 ૮ શ્ર|9 ૯ (|0 ૦ )|- ઃ|= ૃ ઋ",
"q ૌ ઔ|w ૈ ઐ|e ા આ|r ી ઈ|t ૂ ઊ|y બ ભ|u હ ઙ|i ગ ઘ|o દ ધ|p જ ઝ|[ ડ ઢ|] ઼ ઞ",
"a ો ઓ|s ે એ|d ્ અ|f િ ઇ|g ુ ઉ|h પ ફ|j ર|k ક ખ|l ત થ|; ચ છ|' ટ ઠ|\\ ૉ ઑ",
"`|z|x ં ઁ|c મ ણ|v ન|b વ|n લ ળ|m સ શ|, ષ|. ।|/ ય"
]


var justLatinMap = `
a ạ̄ æ æ̣ ä ɑ
c ɕ
d ɖ ʤ
e ẹ ə əʲ əʷ ə̣ ə̣ʲ ə̣ʷ ɛ
h ʰ h̽ ɦ
i ɨ ī ị ị̄
l ɭ l̥ l̥̄ l̥̣ l̥̣̄ ḷ
n ɲ ɳ ñ ŋ
o ọ ɔ ɔ̣
r r̥ r̥̄ r̥̣ r̥̣̄ ru
s ʃ ṣ
t ʈ ʧ
u ū ụ ụ̄
v ʋ
[ ¶ ˜ ̣ ͓
`


/*
var translitCharacterMap = `
a æ ૅ
A ạ̄ આ æ̣ ઍ
b b બ
B bʰ ભ
c c ચ cʰ છ ɕ શ
d d દ ʤ જ ʤʰ ઝ ɖ ડ ʤ͓ɲ જ્ઞ
D dʰ ધ ɖʰ ઢ
e ə ા e ે əʲ ૈ əʷ ૌ
E ə̣ અ ẹ એ ə̣ʲ ઐ ə̣ʷ ઔ
f f ફ
g g ગ
G gʰ ઘ
h h હ h̽ ઃ
i i િ ī ી
I ị ઇ ị̄ ઈ
k k ક k͓ʃ ક્ષ
K kʰ ખ
l l લ ɭ ળ
L l̥ ૢ l̥̄ ૣ l̥̣ ઌ l̥̣̄ ૡ
m m મ
n n ન ɲ ઞ ɳ ણ
N ŋ ઙ
o o ો ɔ ૉ
O ọ ઓ ɔ̣ ઑ
p p પ
r r ર
R r̥ ૃ r̥̄ ૄ r̥̣ ઋ r̥̣̄ ૠ
s s સ ʃ ષ
t t ત ʈ ટ
T tʰ થ ʈʰ ઠ
u u ુ ū ૂ
U ụ ઉ ụ̄ ઊ
v ʋ વ
y y ય
0 0 ૦
1 1 ૧
2 2 ૨
3 3 ૩
4 4 ૪
5 5 ૫
6 6 ૬
7 7 ૭
8 8 ૮
9 9 ૯
[ ˜ ં
/ ̣ ઼
| ¶ ॥
. . ।
* ͓ ્
`
*/



