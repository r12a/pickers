globals.showTranslit =  ''


function localInitialise () {
	}
	
var _h = {

end: {}
}




var keyboarddef = [
"§|1 ᭑ ᬒᬁ|2 ᭒ ᬣ|3 ᭓ ᬡ|4 ᭔ ᬱ|5 ᭕ ᬰ|6 ᭖|7 ᭗|8 ᭘ᬉ|9 ᭙ ᬏ|0 ᭐ ᬑ|-|=",
"q ᬥ|w ᬯ|e ᬾ ᬿ|r ᬭ|t ᬢ|y ᬬ|u ᬸ ᬹ|i ᬶ ᬷ|o ᭀ ᭁ|p ᬧ|[ ᬃ ᬀ|] ᬂ ᬁ",
"a ᬵ|s ᬲ|d ᬤ|f ᭂ ᭃ|g ᬕ|h ᬳ|j ᬚ|k ᬓ|l ᬮ|; ᬗ|' ᬄ|\\",
"`|z ᬡ|x ᬜ|c ᬘ|v ᬪ|b ᬩ|n ᬦ|m ᬫ|, ᭞ ᭚|. ᭟ ᭛|/ ᭄"
]


var justLatinMap = `
a ɑ̄ ɑ̣̄ ạ
b b̂
c ĉ
d d̂ ʤ ʤ̇ Ḋ
e ə ə̄ ẹ ɛ
g ĝ
h h̽ ħ
i ī ị ị̄
j ʲ
l l̥ l̥̄ l̥̣ l̥̣̄
m m̽
n ŋ ŋ̇̽ ŋ̽ ɲ n̂
o ọ ɔ ∅
p p̂ ᵖ>
r r̥ r̥̄ r̥̣ r̥̣̄ r̽ ʳ>
s ŝ ṡ̂
t t̂ ṫ̂
u ū ụ ụ̄
w ʷ
y ɣ
: ː
{ ʕ
[ °  ̣
*  ͓
`



var translitCharacterMap = `
a ɑ̄ ᬵ aʲ ᬿ aʷ ᭁ
A ạ ᬅ ɑ̣̄ ᬆ ạʲ ᬐ ạʷ ᬒ
b b ᬩ
B b̂ ᬪ
c c ᬘ
C ĉ ᬙ
d ʤ ᬚ d ᬤ
D ʤ̇ ᬛ D ᬟ Ḋ ᬠ d̂ ᬥ
e e ᬾ ə  ᭂ ə̄ ᭃ
E ẹ ᬏ
g g ᬕ
G ĝ ᬖ
h h ᬳ h̽ ᬄ
i i ᬶ ī ᬷ
I ị ᬇ ị̄ ᬈ
k k ᬓ
K K ᬔ
l l ᬮ
L l̥̣ ᬍ l̥̣̄ ᬎ l̥ ᬼ l̥̄ ᬽ
m m ᬫ m̽ ᬀ
n ŋ ᬗ ɲ ᬜ n ᬦ ŋ̇̽ ᬂ ŋ̽ ᬁ
N n̂ ᬡ
o o ᭀ
O ọ ᬑ
p p ᬧ
P p̂ ᬨ
r r ᬭ r̽ ᬃ
R r̥̣ ᬋ r̥̣̄ ᬌ r̥ ᬺ r̥̄ ᬻ
s s ᬱ
S ŝ ᬰ ṡ̂ ᬲ
t t ᬢ
T T ᬞ t̂ ᬝ ṫ̂ ᬣ
u u ᬸ ū ᬹ
U ụ ᬉ ụ̄ ᬊ
w w ᬯ
y y ᬬ
0 0 ᭐
1 1 ᭑
2 2 ᭒
3 3 ᭓
4 4 ᭔
5 5 ᭕
6 6 ᭖
7 7 ᭗
8 8 ᭘
9 9 ᭙
# ᵖ> ᭚ ʳ> ᭛ ° ᭜
, , ᭞
. . ᭟
: : ᭝
* ͓ ᭄
- - ᭠
/ ̣ ᬴
`
