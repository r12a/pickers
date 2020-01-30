globals.showNeoTrans =  ''
globals.showIPATrans = ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false



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
a â
A Â
c č ɕ
C Č ɕ
e è ë ɛ
E È Ë Ɛ
g ɡ
G Ɡ
i ɨ ĭ ī
I Ɨ Ĭ Ī
j ʲ jᵃ jᵒ jᵘ
J ʲ Jᵃ Jᵒ Jᵘ
l ɫ
L Ɫ
s ŝ š ʂ ʂ̂
S Ŝ Š
t ʦ ʨ
T ʦ ʨ
u û
U Û
z ž ʐ
Z Ž ʐ
`


/*
var translitCharacterMap = `
a a а
A ạ А
b b б
B ḅ Б
d d д
D ḍ Д
e e е ɛ э
E ẹ Е ɛ̣ Э
f f ф
F f̣ Ф
g g г
G g̣ Г
i i и ɨ ы
I ị И ɨ̣ Ы
j jᵘ ю jᵃ я jᵒ ё
J j̣ᵘ Ю j̣ᵃ Я j̣ᵒ Ё
k k к
K ḳ К
l l л
L ḷ Л
m m м
M ṃ М
n n н
N ṇ Н
o o о
O ọ О
p p п
P p̣ П
r r р
R ṛ Р
s s с ʂ ш ʂ̂ щ
S ṣ С ʂ̣ Ш ʂ̣̂ Щ
t t т ʦ ц ʨ ч
T ṭ Т ʦ̣ Ц ʨ̣ Ч
u u у
U ụ У
v v в
V ṿ В
x x х
X x̣ Х
y y й
Y ỵ Й
z ʐ ж z з
Z ʐ̣ Ж ẓ З
[ ' ь ' Ь
] " ъ " Ъ
`
*/


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