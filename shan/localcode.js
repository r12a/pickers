globals.showTranslit =  ''
globals.showMesherTrans =  ''
globals.showISOTrans = ''


function localInitialise () {
	}
	

var _h = {

end: {}
}





var keyboarddef = [
"§|1 ႑|2 ႒|3 ႓|4 ႔|5 ႕|6 ႖|7 ႗|8 ႘|9 ႙|0 ႐|-|=",
"q ၸ ဢ|w တ ၻ|e ၼ|r မ ႞|t ဢ ြ|y ပ ၿ|u ၵ ၷ|i င ရ|o ဝ သ|p ႁ ႀ|[|]",
"a ေ ဵ|s ႄ ႅ|d ိ ီ|f ် ႂ်|g ွ ႂ|h ႉ ံ|j ႇ ႆ|k ု|l ူ ႊ|; ႈ း|'|\\",
"`|z ၽ|x ထ ၻ|c ၶ|v လ|b ယ ျ|n ၺ ႟|m ၢ ႃ|, ၊|. ။|/"
]



function toggleShift (node, LC, UC) {
	if (node.className ==='unshifted') {
		document.getElementById(LC).style.display = 'none'
		document.getElementById(UC).style.display = 'block'
		node.className = 'shifted'
		} 
	else {
		document.getElementById(LC).style.display = 'block'
		document.getElementById(UC).style.display = 'none'
		node.className = 'unshifted'
		}
	}


var justLatinMap = `
a ǟ ā aː æ æ̈ a͡i a͡u
e ë
i ī iː
o ɔ
u ū uː
' ‘
c cʰ
g ɡ
k kʰ
n ñ ṅ ɲ ŋ
p pʰ
r r̆
s ʃ
t ʨ tʰ tʰ
w w̆
y y̆
? ʔ
O θ
`



var translitCharacterMap = `
a a ႃ ā ၢ æ ႄ æ̇ ႅ aʲ ႆ
b b ၿ
c c ၸ
d d ၻ
e e ေ ė ဵ
f f ၾ
g g ၷ
h h ႁ
i i ိ ī ီ
k k ၵ kʰ ၶ
l l လ
m m မ
n n ၼ ŋ င ɲ ၺ
o o ႟ ɔ ွ
p p ပ pʰ ၽ
Q θ ႀ
r r ရ r̆ ြ
s s သ
t t တ tʰ ထ
u u ု ū ူ
w w ဝ w̆ ႂ
y y ယ y̆ ျ
z z ၹ
} ʔ ဢ
§ 0̣ ႐ 1̣ ႑ 2̣ ႒ 3̣ ႓ 4̣ ႔ 5̣ ႕ 6̣ ႖ 7̣ ႗ 8̣ ႘ 9̣ ႙
± 0̤ ၀ 1̤ ၁ 2̤ ၂ 3̤ ၃ 4̤ ၄ 5̤ ၅ 6̤ ၆ 7̤ ၇ 8̤ ၈ 9̤ ၉
, , ၊
. . ။
* ͓ ္
^ ² ႇ ³ ႈ ⁴ း ⁵ ႉ ⁶ ႊ
\\ ˣ ်
`




