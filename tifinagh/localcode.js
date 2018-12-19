globals.showNeoTrans =  ''
globals.showIPATrans = ''

function localInitialise () {
	}
	

var _h = {
'2D3B': ['2D53'],
'2D53': ['2D3B'],
'2D57': ['2D42'],
'2D42': ['2D57'],
'2D5D': ['2D4B'],
'2D4B': ['2D5D'],
'2D63': ['2D65'],
'2D65': ['2D63'],
'2D61': ['2D6F'],
'2D6F': ['2D61'],
'2D62': ['2D49'],
'2D49': ['2D62'],
'2D47': ['2D3D'],
'2D3D': ['2D47'],
'2D50': ['2D4C', '2D5C'],
'2D4C': ['2D50', '2D5C'],
'2D5C': ['2D4C', '2D50'],
'2D4D': ['2D4F'],
'2D4F': ['2D4D', '2D64', '2D51'],
'2D64': ['2D4F'],
'2D5A': ['2D55', '2D41'],
'2D55': ['2D5A'],
'2D51': ['2D4F'],

end: {}
}

var justLatinMap = `
a æ
b β
c ç
d dˁ ð ðˁ ʤ ʤ̇
e ə ė
g ɡ ɢ
h ḣ ḧ ħ
j ʝ
k k̇
l ɫ
n ŋ ɲ
q q̇ θ
r rˤ ʁ ʁ̇ ʁ̈
s sˁ ʃ
t tˁ ʧ
u ʊ
w ʷ
x χ χ̇
y ɣ
z zˁ ż ʒ ʒ̇ ʒ̈
{ ʕ
[  ͓ • ₊ ₓ
`



var translitCharacterMap = `
a a ⴰ
b b ⴱ β ⴲ
c ç ⴿ
d d ⴷ ð ⴸ dˁ ⴹ ðˁ ⴺ ʤ ⴵ ʤ̇ ⴶ
e e ⴻ ė ⵦ
f f ⴼ
g g ⴳ
h h ⵀ ħ ⵃ ḣ ⵁ ḧ ⵂ
i i ⵉ
j ʝ ⴴ
k k ⴽ k̇ ⴾ
l l ⵍ
m m ⵎ
n n ⵏ ɲ ⵐ ŋ ⵑ
o o ⵧ
p p ⵒ
q q ⵇ q̇ ⵈ
Q θ ⵝ
r r ⵔ rˤ ⵕ ʁ ⵖ ʁ̇ ⵗ ʁ̈ ⵘ
s s ⵙ sˁ ⵚ ʃ ⵛ
t t ⵜ tˁ ⵟ ʧ ⵞ
u u ⵓ
v v ⵠ
w w ⵡ ʷ ⵯ
x χ ⵅ χ̇ ⵆ
y y ⵢ
z ʒ ⵊ z ⵣ zˁ ⵥ ʒ̇ ⵋ ʒ̈ ⵌ ż ⵤ
{ ʕ ⵄ
.  •  ⵰
* ͓ ⵿
= ₓ \u200C ₊ \u200D
`

var ipaCharacterMap = `
a æ ⴰ
b b ⴱ β ⴲ
c ç ⴿ
d d ⴷ ð ⴸ dˁ ⴹ ðˁ ⴺ ʤ ⴶ
e ə ⴻ ɛ ⵄ
f f ⴼ
g g ⴳ
h h ⵀ h ⵁ h ⵂ ħ ⵃ
i i ⵉ
j j ⵢ ʝ ⴵ
k k ⴽ k ⴾ
l l ⵍ
m m ⵎ
n n ⵏ ŋ ⵑ ɲ ⵐ
p p ⵒ
q q ⵇ q ⵈ θ ⵝ
r r ⵔ rˤ ⵕ ʁ ⵖ ʁ ⵗ ʁ ⵘ
s s ⵙ sˁ ⵚ ʃ ⵛ
t t ⵜ tˁ ⵟ ʧ ⵞ
u ʊ ⵓ
v v ⵠ
w w ⵡ
x χ ⵅ χ ⵆ
z z ⵣ z ⵤ zˁ ⵥ ʒ ⵊ ʒ ⵋ ʒ ⵌ
`


var keyboarddef = [
"§ ⵰|1 & ́|2 ⵒ ~|3 \"|4 ' {|5 ( [|6 - \||7 ⵤ|8 _ \\|9 « - ^|0 » @|- ) ]|= }",
"q ⴰ ⴶ|w ⵣ ⵥ|e ⴻ ⵗ|r ⵔ ⵕ|t ⵜ ⵟ|y ⵢ ⵂ|u ⵓ ⵌ|i ⵉ ⵘ|o ⵄ ⵝ|p ⵃ ⵞ|[ ⵯ ⵠ|]| $ £ ¤",
"a ⵇ ⵈ|s ⵙ ⵚ|d ⴷ ⴹ|f ⴼ ⴵ|g ⴳ ⴳⵯ|h ⵀ ⵁ|j ⵊ ⵋ|k ⴽ ⴽⵯ|l ⵍ ⴸ|; ⵎ ⴺ|' ⵑ %|\\ *",
"` < >|z ⵡ ⴾ|x ⵅ ⵆ|c ⵛ ⴿ|v ⵖ ⴴ|b ⴱ ⴲ|n ⵏ ⵐ|m , ?|, ; .|. : /|/ ! §"
]
