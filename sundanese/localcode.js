globals.showTranslit =  ''


function localInitialise () {

	}



var _h = {
'1B83': ['1B86', '1B89'],
'1B86': ['1B83', '1B89'],
'1B89': ['1B86', '1B83'],
'1B84': ['1B94', '1BB2'],
'1B87': ['1B90', '1B8C'],
'1B8A': ['1B9E'],
'1B8C': ['1B8D', '1B87'],
'1B8D': ['1B8C'],
'1B8E': ['1B96', '1BB8'],
'1B8F': ['1B93'],
'1B93': ['1B8F'],
'1B94': ['1B8D'],
'1B96': ['1B97', '1B95'],
'1B97': ['1B96', '1B96', '1B95'],
'1B95': ['1B96', '1B96', '1B97', '1BBB'],
'1B91': ['1B98'],
'1B98': ['1B91'],
'1B9C': ['1BB7'],
'1BB7': ['1B9C'],
'1B90': ['1B87', '1B85'],
'1B85': ['1BB3', '1BB6'],
'1BB3': ['1B85', '1BB6'],
'1B9E': ['1B9F', '1BB4'],
'1B9D': ['1BB1'],
'1BAF': ['1B9F', '1B9A'],
'1B9F': ['1BAF', '1B9E'],
'1BB8': ['1B8E'],
'1BB9': ['1BB6', '1BB3', '1B85'],
'1BB6': ['1BB9', '1BB3'],
'1BB2': ['1B8D'],
'1BB4': ['1B9E'],
'1CC3': ['1BB0'],
'1BB0': ['1CC3'],
'1BBB': ['1B95'],

end: {}
}


var keyboarddef = [
"§|1 ᮱|2 ᮲|3 ᮳|4 ᮴|5 ᮵|6 ᮶|7 ᮷|8 ᮸|9 ᮹|0 ᮰|-|=",
"q ᮋ ᮁ|w ᮝ|e ᮨ ᮈ|r ᮛ ᮢ|t ᮒ|y ᮚ ᮡ|u ᮥ ᮅ|i ᮤ ᮄ|o ᮧ ᮇ|p ᮕ|[ ᮦ ᮆ|]",
"a ᮃ|s ᮞ ᮯ|d ᮓ|f ᮖ|g ᮌ ᮍ|h ᮠ ᮂ|j ᮏ ᮑ|k ᮊ ᮮ|l ᮜ ᮣ|; ᮪|' ᮩ ᮉ|\\",
"`|z ᮐ|x ᮟ|c ᮎ|v ᮗ|b ᮘ|n ᮔ ᮀ|m ᮙ|,|.|/ \|"
]
// keyboard source: http://watesawal.blogspot.co.uk/p/wacana.html


var justLatinMap = `
a ạ
d ʤ
e é ẹ́ ə ə̣
g ɡ
h ẖ h̽
i ị
k k̽ k͜s
l l̆ l̥
m m̆ m̽
n ŋ ŋ̽ ɲ
o ọ
r r̆ r̥ r̽
s š
t ʧ
u ụ
v ɤ ɤ̣
w w̆
x ˣ ͓
y y̆
`



var translitCharacterMap = `
a ạ ᮃ
b b ᮘ
d d ᮓ ʤ ᮏ
e é ᮦ ə ᮨ ẹ́ ᮆ ə̣ ᮈ
f f ᮖ
g g ᮌ
h h ᮠ h̽ ᮂ ẖ ᮮ
i i ᮤ ị ᮄ
k k ᮊ k̽ ᮾ
l l ᮜ l̆ ᮣ l̥ ᮼ
m m ᮙ m̆ ᮬ m̽ ᮿ
n n ᮔ ŋ ᮍ ɲ ᮑ ŋ̽ ᮀ
o o ᮧ ọ ᮇ
p p ᮕ
q q ᮋ
r r ᮛ r̆ ᮢ r̽ ᮁ r̥ ᮻ
s s ᮞ š ᮯ
t t ᮒ ʧ ᮎ
u u ᮥ ụ ᮅ
v v ᮗ ɤ̣ ᮉ ɤ ᮩ
w w ᮝ w̆ ᮭ
y y ᮚ y̆ ᮡ
z z ᮐ
0 0 ᮰
1 1 ᮱
2 2 ᮲
3 3 ᮳
4 4 ᮴
5 5 ᮵
6 6 ᮶
7 7 ᮷
8 8 ᮸
9 9 ᮹
* ͓ \u1BAB
\\ ˣ ᮪
`





