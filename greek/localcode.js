globals.showNeoTrans =  ''
globals.showIPATrans = ''

function localInitialise () {
	}
	

var _h = {
end: {}
}


var keyboarddef = [
"§ ё Ё|1|2|3 №|4 ;|5 %|6 :|7 ?|8 * ₽|9 (|0 )|- _|= +",
"q й Й|w ц Ц|e у У|r к К|t е Е d|y н Н|u г Г|i ш Ш|o щ Щ|p з З|[ х Х|] ъ Ь",
"a ф Ф|s ы Ы|d в В|f а А|g п П|h р Р|j о О|k л Л|l д Д|; ж Ж|' э Э|\\",
"`|z я Я|x ч Ч|c с С|v м М|b и И|n т Т|m ь Ь|, б Б|. ю Ю|/ . ,"
]


var justLatinMap = `
a á
A Á
c ç
d ð
D Ð
e é
E É
i í ï ḯ  ı
I Í Ï İ
j ʝ
k k͡s
K K͡S
n ɲ
o ó ô õ ȯ
O Ó Ô Õ Ȯ
p p͡s
P P͡S
q Θ θ
s s̽
y ý ÿ ÿ́ ɣ
Y Ý Ÿ Ɣ
[ ¨ ˊ
`



var translitCharacterMap = `
a a α á ά
A A Α Á Ά
d ð δ
D Ð Δ
e e ε é έ
E E Ε É Έ
f f φ
F F Φ
i ı ι i η í ή ḯ ΐ ï ϊ
I I Ι İ Η Í Ή Ï Ϊ
k k κ k͡s ξ
K K Κ K͡S Ξ
l l λ
L L Λ
m m μ
M M Μ
n n ν
N N Ν
o o ο ȯ ω ô ί ó ό õ ώ
O O Ο Ȯ Ω Ô Ί Ó Ό Õ Ώ
p p π p͡s ψ
P P Π P͡S Ψ
q θ θ
Q Θ Θ
r r ρ
R R Ρ
s s σ s̽ ς
S S Σ
t t τ
T T Τ
v v β
V V Β
x x χ
X X Χ
y ɣ γ y υ ý ύ ÿ ϋ ÿ́ ΰ
Y Ɣ Γ Y Υ Ý Ύ Ÿ Ϋ
z z ζ
Z Z Ζ
[ ˊ \u0301 ¨ \u0308
; ; ·
? ? ;
`



globals.showISOCharMap = ''

var isoCharacterMap = `
a a а â я
A A А Â Я
b b б
B B Б
c c ц č ч
C C Ц Č Ч
d d д
D D Д
e e е è э ë ё
E E Е È Э Ë Ё
f f ф
F F Ф
g g г
G G Г
h h х
H H Х
i i и ī й Ī Й
I I И
k k к
K K К
l l л
L L Л
m m м
M M М
n n н
N N Н
o o о
O O О
p p п
P P П
r r р
R R Р
s s с š ш ŝ щ
S S С Š Ш Ŝ Щ
t t т
T T Т
u u у û ю
U U У Û Ю
v v в
V V В
y y ы
Y Y Ы
z ž ж z з
Z Ž Ж Z З
[ ' ь ' Ь
] " ъ " Ъ
`




function toggleShift (node, LC, UC) {
    var chars = document.querySelectorAll('.c')

    if (node.className =='shifted') {
        for (let i=0;i<chars.length;i++) {
            chars[i].textContent = chars[i].textContent.toLowerCase()
            }
		node.className = 'unshifted'
		} 
	else {
        for (let i=0;i<chars.length;i++) {
            chars[i].textContent = chars[i].textContent.toUpperCase()
            }
		node.className = 'shifted'
		}
	// reinitialise ids to codepoint values of character sequence (with no leading zeros)
	node = document.querySelectorAll( '.c' ); 
	for (var n = 0; n < node.length; n++ ) { 
		content = node[n].textContent
		id=''
		for (i=0;i<content.length;i++) {
			id += convertChar2CP(content[i])
			}
		node[n].id = id
        node[n].dataset.c = 'c'+id
        dec = parseInt(id, 16)
        while (id.length<4) id = '0'+id
        node[n].title = 'U+'+id+': '+charData[content]
		}
	}


function toTitleCase () {
    // convert text area so each word begins with capital letter
    var str = document.getElementById('output').value
    var words = str.split(' ')
    var newwords = []
    for (let i=0;i<words.length;i++) {
        console.log(words[i][0])
        newwords.push(words[i][0].toUpperCase()+words[i].substr(1).toLowerCase())
        console.log(newwords[i])
        }
    document.getElementById('output').value = newwords.join(' ')
    }