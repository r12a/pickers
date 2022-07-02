globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false


window.charCheckerList = [
//{ wrong:"သြော်", right:"ဪ" },
//{ wrong:"သြ", right:"ဩ" },
]


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
"§|1|2|3|4|5|6|7|8|9|0|- |=",
"q 𐓦 𐒾|w 𐓷 𐓏|e 𐓟 𐒷|r 𐓲 𐓊|t 𐓵 𐓍|y 𐓻 𐓓|u 𐓶 𐓎|i 𐓣 𐒻|o 𐓪 𐓂|p 𐓬 𐓄|[|]",
"a 𐓘 𐒰|s 𐓮 𐓆|d 𐓰 𐓈|f ͘|g 𐓢 𐒺|h 𐓡 𐒹|j 𐓛 𐒳|k 𐓤 𐒼|l 𐓧 𐒿|;|\'|\\",
"`|z 𐓺 𐓒|x 𐓸 𐓐|c 𐓝 𐒵|v 𐓯 𐓇|b 𐓜 𐒴|n 𐓩 𐓁|m 𐓨 𐓀|,|.|/"
]






function toggleShift (node, LC, UC) {
    var chars = document.querySelectorAll('.c')

	if (node.classList.contains('shifted')) {
        for (let i=0;i<chars.length;i++) {
            if (chars[i].dataset.lc) chars[i].textContent = chars[i].dataset.lc
            else chars[i].textContent = chars[i].textContent.toLowerCase()
            }
		} 
	else {
        for (let i=0;i<chars.length;i++) {
            if (chars[i].dataset.uc) chars[i].textContent = chars[i].dataset.uc
            else chars[i].textContent = chars[i].textContent.toUpperCase()
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


