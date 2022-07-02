globals.showAcadTrans = ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false


window.charCheckerList = [
//{ wrong:"သြော်", right:"ဪ" },
//{ wrong:"သြ", right:"ဩ" },
]


function localInitialise () {
	}
	

var keyboarddef = [
"§|1|2|3|4|5|6|7 ₪|8|9 )|0 (|-|=",
"q /|w ׳|e ק|r ר|t א|y ט|u ו וֹ|i ן|o ם|p פ|[ ] }|] [ {",
"a ש שׁ|s ד|d ג „|f כ|g ע|h י|j ח|k ל לֹ|l ך|; ף|' ,|\\ ֿ",
"` ;|z ז|x ס|c ב לֹ|v ה|b נ|n מ|m צ|, ת|. ץ|/ ."
]



var _h = {
'5D1': ['5E0', '5DB', '5D2'],
'5D2': ['5D1', '5E0'],
'5D3': ['5DA', '5D5', '5E8'],
'5D4': ['5D7', '5EA', '5DE'],
'5D5': ['5D6', '5DF', '5F0', '5F1','5C0'],
'5D7': ['5EA', '5D4', '5DE'],
'5D9': ['5F1', '5F2', '5F3', '5F4'],
'5DA': ['5D3', '5DF', '5E8', '5D5'],
'5DB': ['5D1'],
'5DD': ['5E1', '5DE'],
'5DE': ['5DD'],
'5DF': ['5D5', '5F0', '5F1', '5D6', '5D3','5C0'],
'5E0': ['5D1', '5D2'],
'5E1': ['5DD', '5DE'],
'5E2': ['5E6', '5E5'],
'5E3': ['5DA'],
'5E4': ['5DB'],
'5E5': ['5E6', '5E2'],
'5E6': ['5E2', '5E5'],
'5E8': ['5D3', '5DA', '5D5'],
'5EA': ['5D4', '5D7', '5DE'],
'5F0': ['5F1', '5D5', '5DF'],
'5F1': ['5F2', '5F0', '5D5', '5DF', '5D9'],
'5F2': ['5D9'],
'5F3': ['5D9'],
'5F4': ['5F2'],
'5C2': ['5B9', '5BA'],
'5B4': ['5C5'],
'5C0': ['5DF','5D5'],

end: {}
}



var justLatinMap = `
c č
d ʤ
g ǧ
h h̠
r ʁ
s ʃ
t ʦ ʧ
x χ
z ž ʒ
? ʔ
e ɛ
o ɔ
`




function showAlternatives (className, state) {
	nodes = document.querySelectorAll(className)
	if (state) state = 'inline-block'
	else state = 'none'
	for (let i=0;i<nodes.length;i++) nodes[i].parentNode.style.display = state
	}




/*

var translitCharacterMap = `
a a ַ ɑ ָ ă ֲ
d d ד
e e ֵ ɛ ֶ ĕ ֱ
f f פ f̽ ף
g g ג
h h ה
i i ִ
k k ק
l l ל
m m מ m̽ ם
n n נ n̽ ן
o o ֹ ŏ ֳ
r ʁ ר
s s ס ṡ ש
t t ט ʦ צ ʦ̽ ץ ṫ ת
u u ֻ
v v ב v̇ ו
w w װ
x x ח ẋ כ x̽ ך
y y י
z z ז
} ʔ א ʔ̇ ע
: ː ֽ
* ͓ ְ
+ ¨ ״
} ʔ א ʔ̇ ע
/ ̣ ּ ´ ׳ ̎ ׁ ̍ ׂ
= ₓ \u{200C} ₊ \u{200D} ˡʳᵐ \u{200E} ʳˡᵐ \u{200F} ᵃˡᵐ \u{61C} ʳˡⁱ \u{2067} ˡʳⁱ \u{2066} ʳˡᵉ \u{202B} ˡʳᵉ \u{202A} ᵖᵈⁱ \u{2069} ᵖᵈᶠ \u{202C}
`

*/




