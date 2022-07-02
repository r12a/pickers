globals.showISOTrans = ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false


window.charCheckerList = [
//{ wrong:"သြော်", right:"ဪ" },
//{ wrong:"သြ", right:"ဩ" },
]


function localInitialise () {
	}
	

var _h = {
'D15': ['D7F', 'D15D4DD37'],
'D18': ['D2B','D32'],
'D19': ['D12'],
'D1A': ['D1B', 'D2A'],
'D1B': ['D39', 'D0E'],
'D1E': ['D61'],
'D20': ['D66', 'D3E'],
'D21': ['D22'],
'D22': ['D21'],
'D23': ['D1E', 'D7A'],
'D24': ['D1D'],
'D25': ['D2B'],
'D26': ['D2D', 'D05', 'D6B'],
'D27': ['D2F', 'D70'],
'D28': ['D71', 'D69', 'D38', 'D57'],
'D2A': ['D1A', 'D0E', 'D0F', 'D10'],
'D2B': ['D39', 'D18'],
'D2D': ['D26', 'D6B'],
'D2E': ['D25', 'D67'],
'D2F': ['D27'],
'D30': ['D7C', 'D6A', 'D1D'],
'D35': ['D6E', 'D68', 'D31'],
'D36': ['D7E', 'D17'],
'D39': ['D2B', 'D0E'],
'D33': ['D12'],
'D15D4DD37': ['D15'],
'D31': ['D35', 'D68', 'D6E'],
'D05': ['D06', 'D26'],
'D08': ['D57'],
'D0B': ['D60'],
'D32': ['D18'],
'D0E': ['D0F', 'D10', 'D2A'],
'D0F': ['D0E', 'D2A'],
'D10': ['D0E', 'D46'],
'D12': ['D13', 'D14', 'D33'],
'D13': ['D12', 'D3E'],
'D14': ['D12', 'D57'],
'D3E': ['D4A', 'D13'],
'D3F': ['D40'],
'D40': ['D3F'],
'D41': ['D42', 'D43'],
'D42': ['D41', 'D43'],
'D43': ['D41', 'D42'],
'D46': ['D4A', 'D48', 'D4C', 'D10', 'D6D', 'D16'],
'D47': ['D4B'],
'D48': ['D46', 'D4A', 'D4C', 'D10', 'D6D'],
'D4A': ['D46', 'D3E', 'D48', 'D10', 'D6D'],
'D4B': ['D47', 'D3E'],
'D57': ['D4C', 'D08', 'D0A', 'D14'],
'D4C': ['D46', 'D57', 'D6D', 'D10', 'D48'],
'D7A': ['D23', 'D1E'],
'D0A': ['D4C', 'D57'],
'D7B': ['D75', 'D7C'],
'D7E': ['D36'],
'D7F': ['D15', 'D15D4DD37'],
'D6D': ['D46', 'D09'],
'D6E': ['D35'],
'D6F': ['D7B'],
'D6A': ['D7C'],
'D6B': ['D26', 'D2D'],
'D6C': ['D71', 'D28'],
'D68': ['D31', 'D35'],
'D69': ['D71', 'D28'],
'D66': ['D20'],
'D70': ['D27'],
'D71': ['D6C', 'D28', 'D69'],
'D75': ['D7B'],
'D60': ['D0B'],
'D0C': ['D61', 'D1E'],
'D61': ['D0C', 'D1E'],
'D44': ['D43'],
'D79': ['D72'],
'D72': ['D79'],

end: {}
}


var justLatinMap = `
a ā aʲ aʷ ai̯ au̯ ȧʷ ạ̄ ạʲ ạʷ ậ
c ɕ
d ɖ ḍ
e ē ẹ ẹ̄
h ʰ h̽ ɦ ḥ
i ī ị ị̄
j ɟ
k k̽
l l̽ ḷ ḻ ɭ ɭ̽
L l̥ l̥̄ l̥̣ l̥̣̄
m m̽ ṃ
n n̽ ñ ŋ ṅ ṇ ɲ ɳ ɳ̽
o ō ọ ọ̄
r r̽ ṙ ṟ ɻ
R r̥ r̥̄ r̥̣ r̥̣̄ riː rɨ
s ś ṣ ʂ ʃ
t ṭ ʈ ʧ ʧʰ ̽
u ū ụ ụ̄
v ʋ
! {1000} {100} {10} ¼ ½ ¾
[ ¶
* ͓
`


/*
var translitCharacterMap = `
a ā ാ aʲ ൈ aʷ ൗ ȧʷ ൌ
A ạ̄ അ ậ ആ ạʲ ഐ ạʷ ഔ
b b ബ
B bʰ ഭ
c c ച
C cʰ ഛ
d d ദ ɖ ഡ
D dʰ ധ ɖʰ ഢ
e e െ ē േ
E ẹ എ ẹ̄ ഏ
g g ഗ
G gʰ ഘ
h h ഹ h̽ ഃ
i i ി ī ീ
I ị ഇ ị̄ ഈ
j j ജ
J jʰ ഝ
k k ക
K kʰ ഖ k̽ ൿ
l l ല ɭ ള
L l̽ ൽ ɭ̽ ൾ l̥ ൢ l̥̄ ൣ l̥̣ ഌ l̥̣̄ ൡ
m m മ m̽ ം
n n ന ɲ ഞ ɳ ണ
N ŋ ങ ɳ̽ ൺ n̽ ൻ
o o ൊ ō ോ
O ọ ഒ ọ̄ ഓ
p p പ
P pʰ ഫ
r r ര ṙ റ ɻ ഴ
R r̽ ർ r̥ ൃ r̥̄ ൄ r̥̣ ഋ r̥̣̄ ൠ
s s സ ʃ ശ ʂ ഷ
t t ത ʈ ട
T tʰ ഥ ʈʰ ഠ
u u ു ū ൂ
U ụ ഉ ụ̄ ഊ
v ʋ വ
y y യ
§ {10} ൰ {100} ൱ {1000} ൲ ¼ ൳ ½ ൴ ¾ ൵
0 0 ൦
1 1 ൧
2 2 ൨
3 3 ൩
4 4 ൪
5 5 ൫
6 6 ൬
7 7 ൭
8 8 ൮
9 9 ൯
| ¶ ॥
. . ।
* ͓ ്
`
*/

globals.showISOCharMap = ''

var isoCharacterMap = `
a ā ാ ai ൈ au ൗ au ൌ ai \u{D47}\u{D3E} au \u{D46}\u{D57}
A a അ ai ഐ au ഔ
b b ബ
B bh ഭ
c c ച
C ch ഛ
d d ദ ḍ ഡ
D dh ധ ḍh ഢ
e e െ ē േ
E e എ ē ഏ
g g ഗ
G gh ഘ
h h ഹ ḥ ഃ
i i ി ī ീ
I i ഇ ī ഈ
j j ജ
J jh ഝ
k k ക
K kh ഖ k^ ൿ
l l ല ḷ ള ḻ ഴ
L l^ ൽ ḷ^ ൾ l̥ ൢ l̥̄ ൣ l̥̣ ഌ l̥̣̄ ൡ
m m മ ṃ ം
n n ന ñ ഞ ṇ ണ
N ṅ ങ ṇ^ ൺ n^ ൻ
o o ൊ ō ോ ō \u{D46}\u{D3E}
O o ഒ ō ഓ
p p പ
P ph ഫ
r r ര ṟ റ
R r^ ർ r̥ ൃ r̥̄ ൄ r̥̣ ഋ r̥̣̄ ൠ
s s സ ś ശ ṣ ഷ
t t ത ṭ ട ṯṯ റ്റ
T th ഥ ṭh ഠ
u u ു ū ൂ
U u ഉ ū ഊ
v v വ
y y യ
0 0 ൦
1 1 ൧
2 2 ൨
3 3 ൩
4 4 ൪
5 5 ൫
6 6 ൬
7 7 ൭
8 8 ൮
9 9 ൯
[ ¶ ॥
. . ।
* ͓ ്
`



