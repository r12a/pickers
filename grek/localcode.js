globals.showNeoTrans =  ''
globals.showIPATrans = ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false


window.charCheckerList = [
//{ wrong:"သြော်", right:"ဪ" },
//{ wrong:"သြ", right:"ဩ" },
]


function localInitialise () {}
	

var _h = {
end: {}
}


var keyboarddef = [
"§|1|2|3|4|5|6|7|8|9|0|-|=",
"q ; :|w ς ΅|e ε Ε|r ρ Ρ|t τ Τ|y υ Υ|u θ Θ|i ι Ι|o ο Ο|p π Π|[ ́|]",
"a α Α|s σ Σ|d δ Δ|f φ Φ|g γ Γ|h η Η|j ξ Ξ|k κ Κ|l λ Λ|; ΄ ¨|'|\\",
"`|z ζ Ζ|x χ Χ|c ψ Ψ|v ω Ω|b β Β|n ν Ν|m μ Μ|, «|. »|/"
]






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

    if (node.classList.contains('shifted')) {
        for (let i=0;i<chars.length;i++) {
            chars[i].textContent = chars[i].textContent.toLowerCase()
            }
		} 
	else {
        for (let i=0;i<chars.length;i++) {
            chars[i].textContent = chars[i].textContent.toUpperCase()
            }
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