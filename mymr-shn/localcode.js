globals.showTranslit =  ''
globals.showMesherTrans =  ''
globals.showISOTrans = ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false


window.charCheckerList = [
//{ wrong:"သြော်", right:"ဪ" },
//{ wrong:"သြ", right:"ဩ" },
]


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
	if (! node.classList.contains('shifted')) {
		document.getElementById(LC).style.display = 'none'
		document.getElementById(UC).style.display = 'block'
		} 
	else {
		document.getElementById(LC).style.display = 'block'
		document.getElementById(UC).style.display = 'none'
		}
	}


