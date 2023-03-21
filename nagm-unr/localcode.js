globals.showSimTrans = ''
globals.showTranslit =  ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false


window.charCheckerList = [
//{ wrong:"", right:"" },
]





// list of fonts to add to the standard selection
window.fontsuggestions =  
``


function localInitialise () {
	}
	

var _h = {
end: {}
}




var keyboarddef = [
"§|1 𞓱|2 𞓲|3 𞓳|4 𞓴|5 𞓵|6 𞓶|7 𞓷|8 𞓸|9 𞓹|0 𞓰|- |=",
"q|w 𞓮|e 𞓤|r 𞓣|t 𞓝 𞓩|y 𞓓|u 𞓟|i 𞓚|o 𞓐|p 𞓑|[ |] ] ",
"a 𞓕|s 𞓛|d 𞓜 𞓡|f|g 𞓦 𞓔|h 𞓞 𞓙|j 𞓖 𞓘|k 𞓢|l 𞓒 𞓪|; ; :|' '|\\ \\",
"`|z 𞓫|x 𞓭|c 𞓠|v 𞓬|b 𞓗|n 𞓨 𞓥|m 𞓧|, ,|. .|/"
]
// source: https://github.com/murasu/nag-mundari-keyboards



function toggleShift (node) {
	if (! node.classList.contains('shifted')) {
		lcs = document.querySelectorAll('.lowercase')
		for (let i=0;i<lcs.length;i++) lcs[i].classList.add('hidden')
		ucs = document.querySelectorAll('.uppercase')
		for (let i=0;i<ucs.length;i++) ucs[i].classList.remove('hidden')
		} 
	else {
		lcs = document.querySelectorAll('.lowercase')
		for (let i=0;i<lcs.length;i++) lcs[i].classList.remove('hidden')
		ucs = document.querySelectorAll('.uppercase')
		for (let i=0;i<ucs.length;i++) ucs[i].classList.add('hidden')
		}
	}




