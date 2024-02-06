globals.showSimTrans = ''
globals.showTranslit =  ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false


window.charCheckerList = [
//{ wrong:"", right:"" },
]





// list of fonts to add to the standard selection
window.fontsuggestions =  
`Mingzat
Dawa Lepcha
Mainwaring Rong`


function localInitialise () {
	}
	

var _h = {
end: {}
}




var keyboarddef = [
"§|1 𞋱 !|2 𞋲 @|3 𞋳 #|4 𞋴 $|5 𞋵 %|6 𞋶 ^|7 𞋷 &|8 𞋸 *|9 𞋹 (|0 𞋰 )|- -|= =",
"q 𞋮 𞋯|w 𞋒|e 𞋛 𞋧|r 𞋗 𞋡|t 𞋋 𞋌|y 𞋆 𞋩|u 𞋞 𞋪|i 𞋜 𞋥|o 𞋕 𞋖|p 𞋊 𞋇|[ |] ] ",
"a 𞋀 𞋁|s 𞋎 𞋏|d 𞋄|f 𞋍 𞋿|g 𞋅 𞋝|h 𞋚 𞋨|j 𞋐 𞋑|k 𞋔 𞋙|l 𞋈 𞋟|; ; :|' 𞋬 𞋭|\\ \\",
"`|z 𞋣 𞋤|x 𞋫|c 𞋃 𞋠|v 𞋓|b 𞋂|n 𞋉 𞋢|m 𞋘 𞋦|, ,|. .|/"
]
// source: https://www.unicode.org/L2/L2017/17067r-n4787r-wancho.pdf p11



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




