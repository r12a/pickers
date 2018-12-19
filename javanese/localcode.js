globals.showTranslit =  ''


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


function toggleShift (node, LC, UC) {
	if (node.className =='unshifted') {
		document.getElementById(LC).style.display = 'none'
		document.getElementById(UC).style.display = 'block'
		node.className = 'shifted'
		} 
	else {
		document.getElementById(LC).style.display = 'block'
		document.getElementById(UC).style.display = 'none'
		node.className = 'unshifted'
		}
	}


var keyboarddef = [
"§ ꧊ ꧋|1 ꧑|2 ꧒ ꧏ|3 ꧓ ꧆|4 ꧔ ꧞|5 ꧕ ꧟|6 ꧖|7 ꧗|8 ꧘|9 ꧙|0 ꧐|-|=",
"q ꦼ ꦅ|w ꦮ ꧀ꦮ|e ꦌ ꦺ|r ꦫ ꦿ ꦬ|t ꦠ ꦡ|y ꦪ ꦾ|u ꦈ ꦸ ꦹ|i ꦆ ꦶ|o ꦎ ꦺꦴ ꦵ|p ꦥ ꦦ|[ ꧌|] ꧍",
"a ꦄ ꦴ|s ꦱ ꦯ ꦰ|d ꦢ ꦣ|f ꦩ ꦽ|g ꦒ ꦓ|h ꦲ ꦃ|j ꦗ ꦘ ꦙ|k ꦏ ꦑ ꦐ|l ꦭ ꧀ꦭ|; ꦛ ꦜ|' ꦝ ꦞ|\\",
"`|z ꦚ ꦂ|x ꦔ ꦁ ꦀ|c ꦕ ꦖ|v ꦊ ꦋ|b ꦧ ꦨ|n ꦤ ꦟ|m ꦩ ꦳|, ꧈ ꧇|. ꧉|/ ꧀"
]

var keyboardUC = [
"§|1|2|3|4|5||6 ꧃|7 ꧄|8 ꧅|9|0|-|=",
"q ꦄꦼ|w|e ꦍ ꦻ|r|t උ|y|u|i ꦇ ꦷ|o|p|[ ꧁|] ꧂",
"a ꦄꦴ|s|d|f|g|h|j|k|l|;|'|\\",
"`|z|x|c|v|b|n|m|,|.|/"
]


function event_toggleKbdShift () {
    if (this.classList.contains('shiftKeyOn')) {
        makeKeyboard(keyboarddef, keyboardLCGuide)
        }
    else makeKeyboard(keyboardUC, keyboardUCGuide)
    }



var justLatinMap = `
d ɖ ʤ Ḓ Ḏ
e ẹ ə ɛ
h h̽ ʰ
i ī ị ị̂ ị̄
j ʲ J̱
l l̥ ŀ̥
m m̽
n ŋ ŋ̽ ɲ Ñ
o ȯ ọ ɔ ∅
r r̆ ṙ r̥ r̥̆ r̽
s S̱
t ʧ ʈ ᵗ Ṯ
u ū ụ
v ɤ
y y̆
[ ° ² ¶ ̣ ͓
: ː
`



var translitCharacterMap = `
a aʲ ꦻ
A ạ ꦄ
b b ꦧ
B B ꦨ
C C ꦖ
d d ꦢ ʤ ꦗ ɖ ꦝ
D Ḏ ꦣ Ḓ ꦞ
e e ꦺ ə ꦼ
E ẹ ꦌ
g g ꦒ
G G ꦓ
h h ꦲ h̽ ꦃ
i i ꦶ ī ꦷ
I ị ꦆ ị̄ ꦇ ị̂ ꦅ
J J̱ ꦙ
k k ꦏ
K K ꦑ
l l ꦭ
L l̥ ꦊ ŀ̥ ꦋ
m m ꦩ m̽ ꦀ
n n ꦤ ŋ ꦔ ɲ ꦚ ŋ̽ ꦁ
N Ñ ꦘ N ꦟ
o ȯ ꦵ
O ọ ꦎ
p p ꦥ
P P ꦦ
q q ꦐ
r r ꦫ r̥̆ ꦽ r̽ ꦂ
R ṙ ꦬ r̥ ꦉ
s s ꦱ
S S ꦯ S̱ ꦰ
t t ꦠ ʧ ꦕ ʈ ꦛ
T T ꦡ Ṯ ꦜ
u u ꦸ ū ꦹ
U ụ ꦈ
w w ꦮ
y y ꦪ y̆ ꦾ r̆ ꦿ.
0 0 ꧐
1 1 ꧑
2 2 ꧒
3 3 ꧓
4 4 ꧔
5 5 ꧕
6 6 ꧖
7 7 ꧗
8 8 ꧘
9 9 ꧙
# <ᵗ ꧁ ᵗ> ꧂ <ʰ ꧅ [ʰ ꧄ {ʰ ꧃ ° ꧆
, , ꧈
. . ꧉
: ː ꦴ : ꧇
* ͓ ꧀
& ² ꧏ
| | ꧊ ¶ ꧋
( ( ꧌
) ) ꧍
= ₓ \u200C ₊ \u200D
] ␣ \u200B
/ ̣ ꦳
`



