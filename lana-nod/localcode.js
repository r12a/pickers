globals.showTranslit =  ''
globals.showShapeHints =  ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false


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
    if (sjs[0].style.display !== 'inline-block') {
        for (let i=0;i<sjs.length;i++) sjs[i].style.display = 'inline-block'
        document.getElementById('consonantGrid').style.width = '16em'
        }
    else {
        for (let i=0;i<sjs.length;i++) sjs[i].style.display = 'none'
        document.getElementById('consonantGrid').style.width = '12em'
        }
    }


