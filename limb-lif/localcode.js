globals.showSimTrans = ''
globals.showTranslit =  ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false


window.charCheckerList = [
//{ wrong:"", right:"" },
{ wrong:"ᤠᤣ", right:"ᤥ" },
{ wrong:"ᤠᤤ", right:"ᤦ" },
{ wrong:"ᤣᤣ", right:"ᤤ" },
]





// list of fonts to add to the standard selection
window.fontsuggestions =  
`Namdhinggo SIL`


function localInitialise () {
	}
	

var _h = {
end: {}
}




var keyboarddef = [
"§|1 𑯱|2 𑯲|3 𑯳|4 𑯴|5 𑯵|6 𑯶|7 𑯷|8 𑯸|9 𑯹|0 𑯰|- |=",
"q 𑯞 𑯟|w 𑯓|e 𑯂|r 𑯄|t 𑯁 𑯘|y 𑯔|u 𑯅|i 𑯃|o 𑯑|p 𑯉|[ |] ] ",
"a 𑯈 𑯖|s 𑯒 𑯜|d 𑯀 𑯗|f 𑯙|g 𑯊|h 𑯋|j 𑯏|k 𑯆 𑯛|l 𑯐|; ; :|' '|\\ \\",
"`|z ̃ ̍|x ́ ̀|c 𑯌 𑯝|v 𑯠|b 𑯎 𑯕|n 𑯍 𑯚|m 𑯇|, ,|. .|/"
]
// source: https://www.devkumarsunuwar.com.np/iwsadmin/imagine-filemanager/uploads/media/First%20Hamso_monthly-Magazine-Sawan-Edition_2078.pdf



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




