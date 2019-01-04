globals.showTranslit =  ''
globals.showShapeHints =  ''

function localInitialise () {

	}



var _h = {
'1A601A38': ['1A601A37'],
'1A601A37': ['1A601A38'],
'1A601A36': ['1A601A3E'],
'1A601A3E': ['1A601A36'],
'1A601A48': ['1A601A47', '1A57'],
'1A601A47': ['1A57', '1A601A48'],
'1A601A4B': ['1A6C'],
'1A6C': ['1A601A4B'],
'1A45': ['1A80', '1A90'],
'1A80': ['1A45', '1A90'],
'1A90': ['1A45', '1A90'],
'1A601A40': ['1A601A3F','1A6D'],
'1A601A3F': ['1A601A40','1A6D'],
'1A6D': ['1A601A40','1A601A3F'],
'1A601A43': ['1A53','1A57'],
'1A53': ['1A601A43','1A57'],
'1A57': ['1A53','1A601A43','1A601A47', '1A601A48'],
'1A63': ['1A81', '1A41'],
'1A81': ['1A63', '1A41'],
'1A41': ['1A81', '1A63'],
'1A43': ['1A99','1A49'],
'1A99': ['1A43'],
'1A24': ['1A3C'],
'1A3C': ['1A24'],
'1A49': ['1A43'],
'1A51': ['1A89'],
'1A89': ['1A51'],
'1A4D': ['1A5A'],
'1A5A': ['1A4D'],
'1A54': ['1A48', '1A63'],
'1A5B': ['1A4C', '1A2E'],
'1A2E': ['1A4A', '1A5B'],
'1A4A': ['1A2E', '1A5B', '1A94'],
'1A94': ['1A4A'],
'1A56': ['1A601A43', '1A601A49'],
'1A59': ['1A26'],
'1A26': ['1A59'],
'1A62': ['1A76'],
'1A76': ['1A62'],
'1A83': ['1A2F'],
'1A85': ['1AA7'],
'1AA7': ['1A85'],
end: {}
}


var keyboarddef = [
"§|1 ᩕ ᪁ ᪑|2 ᩏ ᪂ ᪒|3 ᩑ ᪃ ᪓|4 ᨽ ᪄ ᪔|5 ᨳ ᪅ ᪕|6 ᩩ ᩪ ᩐ|7 ᩧ ᪆ ᪖|8 ᨣ ᪇ ᪗|9 ᨲ ᪈ ᪘|0 ᨧ ᪉ ᪙|- ᨡ ᪀ ᪐|= ᨩ ᩛ",
"q ᪧ ᩭ|w ᪩ ᩲ|e ᩣᩴ ᩻|r ᨻ ᨰ ᩚ|t ᨵ ᩡ ᩹|y ᩫ ᩴ ᩸|u ᩦ ᩳ ᩷|i ᩁ ᨱ ᩺|o ᨶ ᪫ ᪪|p ᨿ ᨬ|[ ᨷ ᨮ|] ᩃ ᩓ ᩖ",
"a ᨼ ᩀ|s ᩉ ᨥ|d ᨠ ᨭ|f ᨯ ᩰ ᩒ|g ᩮ ᨫ|h ᩢ ᩶|j ᩠ ᩵ ᩆ|k ᩣ ᩤ ᩇ|l ᩈ ᩔ ᩞ|; ᩅ ᨪ|' ᨦ ᪨ ᩙ|\\ ᨤ ᩘ",
"`|z ᨹ (|x ᨸ )|c ᩯ ᨨ|v ᩋ ᩌ ᩬ|b ᩥ ᩿ ᩍ|n ᩨ ᩼ ᩎ|m ᨴ ?|, ᨾ ᩗ ᩜ|. ᩱ ᩊ ᩄ|/ ᨺ ᩖ ᩂ"
]


function toggleSubjoined (node) {
    // displays or hides the subjoined keys
    var sjs = document.querySelectorAll('.sj')
    console.log(sjs.length)
    if (sjs[0].style.display !== 'inline-block') {
        for (let i=0;i<sjs.length;i++) sjs[i].style.display = 'inline-block'
        node.classList.toggle('subjoined')
        document.getElementById('consonantGrid').style.width = '18em'
        }
    else {
        for (let i=0;i<sjs.length;i++) sjs[i].style.display = 'none'
        node.classList.toggle('subjoined')
        document.getElementById('consonantGrid').style.width = '12em'
        }
    }


var justLatinMap = `
; ̲ ̆ ̃ ̇ ̄ ̽ ᷇ ˖ ͍ ̣ ̥ ̱
' ̥ ̱ ‘ ⁎ ′ ″ ˘ ˟ ˽ ː
[ ¹ ² ³ ⁴ ⁵ ⁶
? ʔ
a á ä ā aː aj aʲ äʲ
e ë ẹ eː ɛ ɛː
i ī ị ị̄ iː
o ò ö ō ọ oː ɔ ɔː ɔːj
u ū ụ ụ̄ uː ɯ ɯ̄ ɯː
c c̱ cʰ c̱ʰ
f f̱
h ẖ
] ʻ
k k̇ ḵ kʰ k̇ʰ ḵʰ
l l̆ ḷ̱ ḻ l̥ₔ lɛː lɯː
m m̽ m̱
n ṅ̽ ṇ̱ ṉ ṉ̃ ṉ̇ ṉ̇̽ ŋ ŋ̄ ɲ ŋ̄
p p̆ p̄ pʰ p̄ʰ ᵽ
r r̆ r̥ₔ rɯː
s ś ṣ ṡ̱
t ṭ ṯ ʨ tʰ ṭʰ ṭ̲ʰ ṯʰ
w w̱
x x
y ȳ
0 0̣
1 1̣
2 2̣
3 3̣
4 4̣
5 5̣
6 6̣
7 7̣
8 8̣
9 9̣
`



var translitCharacterMap = `
? ʔ̯ ᩋ
a a ᩡ á ᩢ ä ᩤ ā ᩣ aʲ ᩱ
e e ᩮ ẹ ᩑ ɛ ᩯ
i i ᩥ ī ᩦ ị ᩍ ị̄ ᩎ
o o ᩰ ọ ᩒ oʲ ᩭ ɔ ᩲ ɔ̂ ᩳ ɔ̈ ᩫ ɔ̱ ᩬ
u u ᩩ ū ᩏ ụ ᩏ ụ̄ ᩐ ɯ ᩧ ɯ̄ ᩨ
[ ¹ ᩵ ² ᩶
b b̯ ᨷ
c c ᨧ c̱ ᨩ
d d̯ ᨯ
f f ᨺ f̱ ᨼ
h h ᩉ ẖ ᩌ
k k ᨠ ḵ ᨣ
l l̆ ᩖ ḷ̱ ᩊ l̥ ᩄ ḻ ᩃ lₔ ᩓ
m m̽ ᩜ m̱ ᨾ
n ṇ̱ ᨱ ṉ ᨶ ɲ̱ ᨬ ŋ̊ ᩴ ŋ̽ ᩙ ŋ̣̽ ᩘ ŋ̱ ᨦ
p p ᨸ p̆ ᩚ p̄ ᨻ pʰ ᨹ p̄ʰ ᨽ ᵽ ᩛ
r r ᩁ r̆ ᩕ r̥ ᩂ
s s ᩈ S ᩔ ś ᩆ ŝ ᨨ ṣ ᩇ ŝ̱ ᨫ ṡ̱ ᨪ
t t ᨲ ṭ ᨭ ṯ ᨴ tʰ ᨳ ṭʰ ᨮ ṭ̲ʰ ᨰ ṯʰ ᨵ
w w̱ ᩅ
x x ᨡ ẋ ᨢ x̱ ᨥ ẋ̱ ᨤ
y y ᩀ ȳ ᨿ
; ˖ ᩠ ˟ ᩺ ˚ ᩼ ʻ ᩻ ˽ ᩿
0 0 ᪀ 0̣ ᪐
1 1 ᪁ 1̣ ᪑
2 2 ᪂ 2̣ ᪒
3 3 ᪃ 3̣ ᪓
4 4 ᪄ 4̣ ᪔
5 5 ᪅ 5̣ ᪕
6 6 ᪆ 6̣ ᪖
7 7 ᪇ 7̣ ᪗
8 8 ᪈ 8̣ ᪘
9 9 ᪉  9̣ ᪙
`




