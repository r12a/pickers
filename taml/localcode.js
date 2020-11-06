globals.showISOTrans = ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false



function localInitialise () {
	}
	

var _h = {
'B95': ['BE7', 'B9A', 'BA4', 'BEA', 'BEC', 'BF2', 'BEF', 'B95BCDBB7'],
'B9A': ['B95', 'BE7', 'BA4', 'BEA', 'BEC', 'BF2', 'BEF', 'B95BCDBB7'],
'B9C': ['B90'],
'B9F': ['BB4', 'BAE', 'BF4'],
'BA4': ['BF2'],
'B99': ['BE9', 'BA8'],
'BA3': ['BA9', 'BC8'],
'BA8': ['BFA'],
'BA9': ['BA3', 'BC8'],
'BAE': ['BB4', 'BF4'],
'BB0': ['BBE'],
'BB3': ['BED', 'BCC', 'B94', 'BD7', 'B8A', 'B94'],
'BB2': ['BB8'],
'BB4': ['BAE', 'BF4', 'B9F'],
'BAF': ['BAA'],
'BB7': ['B95BCDBB7'],
'BB8': ['BB2'],
'BB9': ['BF3'],
'BB5': ['BF3'],
'B95BCDBB7': ['B9A', 'BEF'],
'BD0': ['B92', 'B93', 'B94'],
'BF7': ['BED', 'B8E', 'B8F'],
'BF8': ['BC6', 'BCA', 'BCC'],
'BBE': ['B88', 'BCA', 'BCB', 'BEB'],
'BC6': ['BCA', 'BCC', 'BF8'],
'BC7': ['BCB'],
'BC8': ['BA9', 'BA3'],
'BCA': ['BCC', 'BF8', 'BC6'],
'BCB': ['BC7'],
'BCC': ['BCA', 'BC6', 'BF8'],
'B85': ['BEE', 'B86'],
'B86': ['B85', 'BEE'],
'B88': ['BBE'],
'B89': ['B8A'],
'B8A': ['B89'],
'B8E': ['B8F', 'BB3', 'BD7'],
'B8F': ['B8E', 'BB3', 'BD7'],
'B90': ['B9C'],
'B92': ['B93', 'B94', 'BD0'],
'B93': ['BD0', 'B92', 'B94'],
'B94': ['B93', 'B92', 'BD0', 'BB3'],
'BED': ['B8E', 'B8F', 'BB3'],
'BEE': ['B85', 'B86'],
'BEF': ['BEC', 'BF2', 'B95', 'B9A'],
'BEA': ['B9A'],
'BEC': ['BEF', 'B9A'],
'BE7': ['B95', 'BEC', 'BEF'],
'BE8': ['B89'],
'BE9': ['B99'],
'BFA': ['BA8'],
'BF9': ['BEB'],
'BEB': ['BF9'],
'BF2': ['BA4', 'B95'],
'BF3': ['BB5', 'BB9', 'BB7'],
'BF4': ['BAE'],

end: {}
}


var keyboarddef = [
"§|1|2|3|4|5|6|7|8|9|0|-|=",
"q ஆ ஸ ா|w ஈ ஷ ீ|e ஊ ஜ ூ|r ஐ ஹ ை|t ஏ க்ஷ ே|y ள ஸ்ரீ|u ற ஶ|i ன ஈ|o ட [|p ண ]|[ ச {|] ஞ }",
"a அ ௹|s இ ௺ ி|d உ ௸ ு|f ் ஃ ்|g எ ெ|h க|j ப|k ம \"|l த :|; ந|' ய|\\ «",
"`   ௌ|z ஔ ௳|x ஓ ௴ ோ|c ஒ ௵ ொ|v வ ௶|b ங ௷|n ல|m ர|,|.|/ ழ"
]




globals.showIPACharMap = ''

var ipaCharacterMap = `
a ɑː ா
A ɑː ஆ oː ஐ
b b ப β ப
c ɕ ஶ
d ʤ- ஜ ʤ ச ɖ ட d̪ த ð த d ற
e e ெ eː ே
E e எ eː ஏ
f f ஃப f ப
g ɡ க
h h ஹ h க
i i ி iː ீ
I i இ iː ஈ
k k- க kʂ க்ஷ
l l ல ɭ ள
m m ம
n n ன ŋ ங ɲ ஞ ɳ ண n̪ ந
o o ொ oː ோ
O o ஓ
p p- ப
r r ற ɾ ர ɻ ழ ɽ ட
s s ஸ ʂ ஷ ʃ ச s ச ʃ ஶ
t t̪- த ʧ- ச ʈ- ட t ற
u u ு uː ூ
U u உ uː ஊ
v ʋ வ ʌj ை ʌʋ ௌ
V ʌ அ ʌj ஒ ʌʋ ஔ
w ɯ ு
W ɯ உ
x x க
y j ய ɣ க
z z ஃஜ ʒ ச z ஜ
§ 0 ௦ 1 ௧ 2 ௨ 3 ௩ 4 ௪ 5 ௫ 6 ௬ 7 ௭ 8 ௮ 9 ௯
# ? ௺ ? ௰ ? ௱ ? ௲
[ - ஃ ː ௗ
* ͓ ்
! ? ௐ ? ௵ ? ௴ ? ௳
`

globals.showISOCharMap = ''

var isoCharacterMap = `
a a அ ā ா ai ை aw ௌ
A ā ஆ ai ஐ aw ஔ
c c ச
d d ஜ
e e ெ ē ே
E e எ ē ஏ
f f ஃப
h h ஹ
i i ி ī ீ
I i இ ī ஈ
k k க kṣ க்ஷ
l l ல ḷ ள ḻ ழ
m m ம
n ṉ ன ṅ ங ñ ஞ ṇ ண n ந
o o ொ ō ோ
O o ஒ ō ஓ
p p ப
r ṟ ற r ர ṛ ழ
s s ஸ ? ஶ ṣ ஷ
t t த ṭ ட
u u ு ū ூ
U u உ ū ஊ
v v வ
y y ய
z ẓ ழ z ஃஜ
§ 0 ௦ 1 ௧ 2 ௨ 3 ௩ 4 ௪ 5 ௫ 6 ௬ 7 ௭ 8 ௮ 9 ௯
# # ௺ (ten) ௰ (hundred) ௱ (thousand) ௲
[ ˜ ஃ ː ௗ ¶ ॥
, . ।
* ͓ ்
! (om) ௐ (year) ௵ (month) ௴ (day) ௳
`






