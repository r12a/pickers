 


function localInitialise () {}



var _h = {
'531': ['54D'],
"544": ['54D'],
"561": ['57A'],
'56F': ['587','576'],
"574": ['57D','FB13','FB14','FB15','FB17','57E'],
"574576": ['574',"57E576"],
"574565": ['574'],
"57456B": ['574',"57456D"],
"57456D": ['574',"57456B"],
"57E576": ['574','574576'],
'576': ['587','56F','57D'],
"57A": ['561'],
"57D": ['574','576','587','56F','57E'],
"57E": ['574','57D','FB16'],
'57F': ['583'],
'583': ['57F'],
'587': ['56F','576','57D'],
'57C': ['572', '580', '564', '56B', '578'],
'578': ['572', '580', '564', '56B', '57C'],
'572': ['564', '578'],
'580': ['56B', '57C', '578'],
'56B': ['580', '570', '578'],
'564': ['572', '578'],
'570': ['56B', '578'],
'548': ['54C'],
'54C': ['548'],
'535': ['567', '537'],
'565': ['567', '537'],
'567': ['535', '565'],
'537': ['565', '535'],
'536': ['541', '549'],
'549': ['541', '536'],
'541': ['536', '549'],
'53A': ['56E'],
'56A': ['56E'],
'56E': ['53A', '56A'],
'53F': ['54E'],
'54E': ['53F'],
'53E': ['543'],
'543': ['53E'],
'573': ['56E', '571'],
'545': ['551'],
'551': ['545'],
'540': ['577'],
'577': ['540'],
'54F': ['556'],
'556': ['54F'],
'FB13': ['574','576'],
'FB14': ['574','565'],
'FB15': ['574','56B'],
'FB17': ['574','56D'],
'FB16': ['57E','576'],
'2019':['55A'],
'55A':['2019'],

end: {}
}





var keyboarddef = [
"§ ՝ ՜|1 ։ …|2 ձ Ձ|3 յ Յ|4 ՛ ★|5 , –|6 - —|7 . և|8 « (|9 » )|0 օ Օ|- ռ Ռ|= ժ Ժ",
"q խ Խ|w վ Վ|e է Է|r ր Ր|t դ Դ|y ե Ե|u ը Ը|i ի Ի|o ո Ո|p բ Բ|[ չ Չ|] ջ Ջ",
"a ա Ա|s ս Ս|d տ Տ|f ֆ Ֆ|g կ Կ|h հ Հ|j ճ Ճ|k ք Ք|l լ Լ|; թ Թ|' փ Փ|\\ ՚ ՞",
"` ՝ ՜|z զ Զ|x ց Ց|c գ Գ|v ւ Ւ|b պ Պ|n ն Ն|m մ Մ|, շ Շ|. ղ Ղ|/ ծ Ծ"
]






function toggleShift (node, LC, UC) {
    var chars = document.querySelectorAll('.c')

    if (node.className =='shifted') {
        for (let i=0;i<chars.length;i++) {
            if (chars[i].dataset.lc) chars[i].textContent = chars[i].dataset.lc
            else chars[i].textContent = chars[i].textContent.toLowerCase()
            }
		node.className = 'unshifted'
		} 
	else {
        for (let i=0;i<chars.length;i++) {
            if (chars[i].dataset.uc) chars[i].textContent = chars[i].dataset.uc
            else chars[i].textContent = chars[i].textContent.toUpperCase()
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





globals.showISOCharMap = ''

var isoCharacterMap = `
a a ա
A A Ա
b b բ
B B Բ
d d դ dz ձ dž ջ
D D Դ Dz Ձ Dž Ջ
e e ե ē է ë ը ew և
E E Ե Ē Է Ë Ը
f f ֆ
F F Ֆ
g g գ
G G Գ
h h հ
H H Հ
i i ի
I I Ի
j j յ
J J Յ
k k կ k’ ք
K K Կ K’ Ք
l l լ
L L Լ
m m մ mn ﬓ me ﬔ mi ﬕ mx ﬗ
M M Մ
n n ն
N N Ն
o o ո o օ
O O Ո O Օ
p p պ p’ փ
P P Պ P’ Փ
r ṙ ղ r ռ r’ ր
R Ṙ Ղ R Ռ R’ Ր
s š շ s ս
S Š Շ S Ս
t t’ թ ts ծ tš ճ tš’ չ t տ ts’ ց
T T’ Թ Ts’ Ծ Tš Ճ Tš’ Չ T Տ Ts’ Ց
v v վ vn ﬖ
V V Վ
w w ւ
W W Ւ
x x խ
X X Խ
z z զ ž ժ
Z Z Զ Ž Ժ
, , ,
. . ։
; ; ՝
: : ․
? ? ՞
! ! ՜ ! ՛
`


