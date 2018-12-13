

function localInitialise () {
	document.getElementById('keyboard').style.display = 'block'
	}
	

var _h = {

end: {}
}



var keyboarddef = [
"§|1 1|2 2|3 3|4 4|5 5|6 6|7 7|8 8|9 9 ‹|0 0 ›|- « »|= ‘ \u0300",
"q q Q|w w W|e e E|r r R|t t T|y y Y|u u U|i ı I|o o O|p p P|[ “ \u0328|] ” \u0328\u0300",
"a a A|s s S|d d D|f f F|g g G|h h H|j j J|k k K|l l L|; Ł ł|' ’|\\",
"`|z z Z|x x X|c c C|v v V|b b B|n n N|m m M|, ;|. . :|/ Ɂ ɂ"
]


/*  FOR KEYBOARDS WITH DIFFERENT CHARS ON SHIFT LEVEL
var keyboardUC = [
"§|1|2|3|4|5|6|7|8|9|0|-|=",
"q|w|e|r|t උ|y|u|i|o|p|[|]",
"a ඒ ඌ ඖ|s|d ො ඎ ෲ|f|g|h|j|k|l|;|'|\\",
"`|z|x|c|v|b|n|m|,|.|/"
]

var keyboarddef = [
",1|,2|,3|,4|,5|,6|,7|,8|‹,9|›,0|«,»|‘,̀",
"Q,q|W,w|E,e|R,r|T,t|Y,y|U,u|I,ı|O,o|P,p|“,̨|”,̨̀",
"A,a|S,s|D,d|F,f|G,g|H,h|J,j|K,k|L,l|Ł,ł|,’",
"Z,z|X,x|C,c|V,v|B,b|N,n|M,m|,;|.,:|Ɂ,ɂ"
]

var keyboardguide = [
"1,2,3,4,5,6,7,8,9,0,-,=",
"q,w,e,r,t,y,u,i,o,p,[,],",
"a,s,d,f,g,h,j,k,l,;,',\\",
"z,x,c,v,b,n,m,,.,/,"
]

var keyboardRowOffset = ['5px','20px','30px','50px']
*/


var justLatinMap = `
i ı I
l ł Ł
? ɂ Ɂ
( ‹ «
) › »
= ̀
[ ̨
] ̨̀
`

var translitCharacterMap = `
i i ı
I I I
l l ł
L L Ł
/ / ɂ
? ? Ɂ
( ( ‹
) ( ›
- « - - -
_ _ » _ _
= = ̀
{ { ̨ { {
} } ̨̀ } }
`







