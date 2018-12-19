function localInitialise () {
	}

globals.showWylieTrans = ''
globals.showTranslit =  ''

var _h = {
'F40': ['F69', 'F6B'],
'F42': ['F43'],
'F45': ['F59'],
'F46': ['F5A'],
'F47': ['F5B', 'F5F'],
'F49': ['F23', 'F85', 'FD1'],
'F4F': ['F51', 'F67', 'F4A'],
'F50': ['F4B'],
'F51': ['F4F', 'F4C'],
'F53': ['F5E', 'F4E'],
'F54': ['F58', 'F56F39'],
'F55': ['F55F39'],
'F56': ['F56F39'],
'F59': ['F45'],
'F5A': ['F46'],
'F5B': ['F47', 'F5C'],
'F5D': ['F63', 'FBA'],
'F5E': ['F53'],
'F5F': ['F47'],
'F60': ['F63', 'F71', 'F02', 'F03'],
'F61': ['F68', 'FBB'],
'F62': ['F6A', 'F6C'],
'F63': ['F60', 'F78', 'F79'],
'F64': ['F65', 'F69'],
'F67': ['F4F', 'F51', 'F43', 'F4D', 'F52', 'F57', 'F5C'],
'F68': ['F61', 'FBB', 'F01', 'F00'],
'F4A': ['F4F', 'F4A'],
'F4B': ['F50'],
'F4C': ['F51', 'F4A'],
'F4E': ['F53'],
'F65': ['F64'],
'F55F39': ['F55'],
'F56F39': ['F56'],
'F72': ['F73', 'F80'],
'F74': ['F75'],
'F71': ['F73', 'F81', 'F77', 'F79', 'FB0'],
'F80': ['F78', 'F81', 'F76', 'F77', 'F79', 'F72'],
'FB2': ['F76', 'F77'],
'FB1': ['F24'],
'F24': ['FB1'],
'F27': ['F38'],
'F00': ['F68', 'F00'],
'F7C': ['F00'],
'F23': ['F49', 'F85'],
'F7F': ['F14', 'F02'],
'F14': ['F7F', 'F03'],
'F02': ['F7F', 'F60', 'F74', 'F82'],
'F03': ['F14', 'F60', 'F74'],
'F75': ['F71', 'F74'],
'F78': ['F80', 'FB3'],
'F73': ['F71', 'F72'],
'F81': ['F71', 'F80'],
'F76': ['FB2', 'F80'],
'F77': ['F71', 'FB2', 'F80'],
'F79': ['F71', 'FB3', 'F80'],
'F43': ['F42FB7'],
'F52': ['F51FB7'],
'F4D': ['F4CFB7'],
'F57': ['F56FB7'],
'F5C': ['F5BFB7'],
'F69': ['F40FB5'],
'FB0': ['F71'],
'F6A': ['F62', 'F6C'],
'FBA': ['F5D'],
'FBB': ['F61'],
'F6C': ['F62', 'F6A'],

end: {}
}


var keyboarddef = [
"१|ऍ,२|ॅ,३|्र,४|र्,५|ज्ञ,६|त्र,७|क्ष,८|श्र,९|(,०|),-|ः,ृ|ऋ",
"|औ,ै|ऐ,ा|आ,ी|ई,ू|ऊ,ब|भ,ह|ङ,ग|घ,द|ध,ज|झ,ड|ढ,ड|ञ",
"|ओ,े|ए,्|अ,ि|इ,ु|उ,प|फ,र|ऱ,क|ख,त|थ,च|छ,ट|ठ,ॉ|ऑ",
"ॊ|ऒ,ॆ|ऎ,ं|ँ,म|ण,न|ऩ,व|ऴ,ल|ळ,स|श, |ष,.|।,य|य़"
]


function toggleShift (node) {
    var chars = document.querySelectorAll('.x')

    if (node.className =='unshifted') {
        for (let i=0;i<chars.length;i++) {
            if (chars[i].id === 'translitvowels') chars[i].style.display = 'block'
            else chars[i].style.display = 'inline-block'
            }
		node.className = 'shifted'
		} 
	else {
        for (let i=0;i<chars.length;i++) {
            chars[i].style.display = 'none'
            }
		node.className = 'unshifted'
		}
	}


var justLatinMap = `
a à ā ạ ạ̰ à̰
b b̰
d ʣ ʣ̰ ʤ ʤ̰ d̰ ɖ ɖ̰ d̪ʱ
e ē
g g̰
h ʰ ḥ h̰ h̽
i ī ï ï̄
k k̰
l ḷ ḹ l̥ l̥̄ l̰
m ṃ m̰ m̽ m̽̇
n n̰ ŋ ŋ̰ ɲ ɲ̰ ɳ ɳ̰
o ō
p p̰
r r̄ ṛ r̥ r̥̄ r̰ r̰̄ ṝ ɽ
s s̰ ʂ̰ ʃ ʃ̰ ʂ ˢ
t t̰ ʦ ʦ̰ ʧ ʧ̰ ʈ ʈ̰ ᵗ
u ū
w w̰ w̰̄
y y̰ ȳ̰
z z̰ ʒ ʒ̰
[ ¯ ː ˖ — ‖ • ␣
/ ̣
* ͓
`



var translitCharacterMap = `
a à འ ạ ཨ
A à̰ ྰ ạ̰ ྸ à ཱ
b b བ
B b̰ ྦ bʰ བྷ b̰ʰ ྦྷ
d d ད ʤ ཇ ʣ ཛ
D ʣ̰ ྫ d̰ ྡ ʤ̰ ྗ ɖ ཌ ɖ̰ ྜ ɖʰ ཌྷ dʰ དྷ ʣʰ ཛྷ ɖ̰ʰ ྜྷ d̰ʰ ྡྷ ʣ̰ʰ ྫྷ
e e ེ
E ē ཻ
f f ཕ༹
g g ག
G g̰ ྒ gʰ གྷ g̰ʰ ྒྷ
h h ཧ
H h̰ ྷ h̽ ཿ
i i ི
I ï ྀ ī ཱི ï̄ ཱྀ
k k ཀ kʰ ཁ
K k̰ ྐ k̰ʰ ྑ kˢ ཀྵ k̰ˢ ྐྵ
l l ལ
L l̰ ླ l̥ ླྀ l̥̄ ླཱྀ
m m མ
M m̰ ྨ m̽ ཾ m̽̇ ྃ
n n ན ŋ ང ɲ ཉ
N n̰ ྣ ŋ̰ ྔ ɲ̰ ྙ ɳ ཎ ɳ̰ ྞ
o o ོ
O ō ཽ
p p པ pʰ ཕ
P p̰ ྤ p̰ʰ ྥ
Q q ཫ
r r ར
R r̰ ྲ ɽ ཬ r̄ ཪ r̰̄ ྼ r̥ ྲྀ r̥̄ ྲཱྀ
s ʃ ཤ s ས
S ʃ̰ ྵ s̰ ྶ ʂ ཥ ʂ̰ ྴ
t t ཏ ʧ ཅ ʧʰ ཆ tʰ ཐ ʦ ཙ ʦʰ ཚ
T t̰ ྟ ʧ̰ ྕ ʧ̰ʰ ྖ t̰ʰ ྠ ʦ̰ ྩ ʦ̰ʰ ྪ ʈ ཊ ʈʰ ཋ ʈ̰ ྚ ʈ̰ʰ ྛ
u u ུ
U ū ཱུ
v v བ༹
w w ཝ
W w̰ ྭ w̰̄ ྺ
y y ཡ
Y y̰ ྱ ȳ̰ ྻ
z ʒ ཞ z ཟ
Z ʒ̰ ྮ z̰ ྯ
0 0 ༠
1 1 ༡
2 2 ༢
3 3 ༣
4 4 ༤
5 5 ༥
6 6 ༦
7 7 ༧
8 8 ༨
9 9 ༩
# ᵗ> ༄ > ༅
[ • ༉
: ː ྅
' ¯ ༌
* ͓ ྄
& ˖ ༴
| | ། ‖ ༎ — ༈
( [ ༺ { ༼
) ] ༻ } ༽
/ ̣ ༹
] ␣ ་
`


var wylieCharacterMap = `
b b བ bh བྷ
c c ཅ ch ཆ
d d ད ḍ ཌ dh དྷ ḍh ཌྷ dz ཛ dzh ཛྷ
j j ཇ
f f ཕ༹
g g ག gh གྷ
h h ཧ
k k ཀ kh ཁ kṣ ཀྵ
l l ལ
m m མ
n n ན ṇ ཎ ng ང ny ཉ
p p པ ph ཕ
r r ར rr ཬ
s s ས ṣ ཥ sh ཤ
t t ཏ ṭ ཊ ṭh ཋ th ཐ ts ཙ tsh ཚ
v v བ༹
w w ཝ
y y ཡ
z z ཟ zh ཞ
B b ྦ bh ྦྷ
C c ྕ ch ྖ
D d ྡ ḍ ྜ dh ྡྷ ḍh ྜྷ dz ྫ dzh ྫྷ
J j ྗ
G g ྒ gh ྒྷ
H h ྷ
K k ྐ kh ྑ kṣ ྐྵ
L l ླ l-i ླྀ
M m ྨ
N n ྣ ṇ ྞ ng ྔ ny ྙ
P p ྤ ph ྥ
R r ྲ rr ཫ r-i ྲྀ
S s ྶ ṣ ྵ sh ྴ
T t ྟ ṭ ྚ ṭh ྛ th ྠ ts ྩ tsh ྪ
W w ྭ
Y y ྱ
Z z ྯ zh ྮ
a ā ཱ a ཨ -a འ ai ཻ au ཽ
e e ེ
i i ི ī ཱི -i ྀ -ī ཱྀ
o o ོ
u u ུ ū ཱུ
0 0 ༠
1 1 ༡
2 2 ༢
3 3 ༣
4 4 ༤
5 5 ༥
6 6 ༦
7 7 ༧
8 8 ༨
9 9 ༩ 
`


