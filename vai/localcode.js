globals.showTranslit =  ''
globals.typeAssist = ''
globals.showKeysTranslitToggle = false


window.charCheckerList = [
//{ wrong:"သြော်", right:"ဪ" },
//{ wrong:"သြ", right:"ဩ" },
]





// list of fonts to add to the standard selection
window.fontsuggestions =  
``


function localInitialise () {
	}



var _h = {

end: {}
}





var keyboarddef = [
"§|1|2|3|4|5|6|7|8|9|0|-|=",
"q|w|e|r|t|y|u|i|o|p|[|]",
"a|s|d|f|g|h|j|k|l|;|'|\\",
"`|z|x|c|v|b|n|m|,|.|/"
]


/*  FOR KEYBOARDS WITH DIFFERENT CHARS ON SHIFT LEVEL
var keyboardUC = [
"§|1|2|3|4|5|6|7|8|9|0|-|=",
"q|w|e|r|t උ|y|u|i|o|p|[|]",
"a ඒ ඌ ඖ|s|d ො ඎ ෲ|f|g|h|j|k|l|;|'|\\",
"`|z|x|c|v|b|n|m|,|.|/"
]


function event_toggleKbdShift () {
    if (this.classList.contains('shiftKeyOn')) {
        makeKeyboard(keyboarddef, keyboardLCGuide)
        }
    else makeKeyboard(keyboardUC, keyboardUCGuide)
    }
*/


function toggleShift (node, LC, UC) {
    var chars = document.querySelectorAll('.c')

    if (node.className =='unshifted') {
        document.getElementById(LC).style.display = 'none'
        document.getElementById(UC).style.display = 'block'
		node.className = 'shifted'
		} 
	else {
        document.getElementById(LC).style.display = 'flex'
        document.getElementById(UC).style.display = 'none'
		node.className = 'unshifted'
		}
	}


function toggleShift (node, LC, UC) {
    var chars = document.querySelectorAll('.c')

    if (! node.classList.contains('shifted')) {
        document.getElementById(LC).style.display = 'none'
        document.getElementById(UC).style.display = 'flex'
		} 
	else {
        document.getElementById(LC).style.display = 'flex'
        document.getElementById(UC).style.display = 'none'
		}
	}



var justLatinMap = `
a ã ạ ạ̃
b ɓ
d ɗ ð ʤ
e ẽ ẹ ẹ̃
E ɛ ɛ̃ ɛ̣ ɛ̣̃
g gb
i ĩ ị ị̃
k kp
m mɓ mgb
n nɗ nʤ
N ŋg ɲ ŋ ŋ̽
o õ ọ ọ̃
O ɔ ɔ̃ ɔ̣ ɔ̣̃
s ʃ
t ʧ
u ũ ụ ụ̃
z ʒ
@ θ
_ =
`


/*
var translitCharacterMap = `
a a ա
A A Ա 
e e ե ew և ë ը ɛ է
E E Ե Ë Ը Ɛ Է
i i ի
I I Ի 
o o ո ò օ
O O Ո Ò Օ
b b բ
B B Բ 
c ç ծ č չ č̣ ճ c’ ց
C Ç Ծ Č Չ Č̣ Ճ C’ Ց
d d դ
D D Դ
f f ֆ
F F Ֆ
g g գ ġ ղ
G G Գ Ġ Ղ
h h հ
H H Հ
j j ձ ǰ ջ
J J Ձ ǰ Ջ
k k կ k’ ք
K K Կ K’ Ք
l l լ
L L Լ
m m մ mn ﬓ me ﬔ mi ﬕ vn ﬖ mx ﬗ
M M Մ
n n ն
N N Ն
p p պ p’ փ
P P Պ P’ Փ
r r ր ṙ ռ
R R Ր Ṙ Ռ
s s ս š շ
S S Ս Š Շ
t t տ t’ թ
T T Տ T’ Թ
v v վ
V V Վ
w w ւ
W W Ւ
x x խ
X X Խ
y y յ
Y Y Յ
z z զ ž ժ
Z Z Զ Ž Ժ
; , , : ․ * ՝ . ։ “ « ” » ? ՞ ! ՜
`
*/



