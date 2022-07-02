globals.showSimTrans = ''
globals.showTranslit =  ''
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
"§|1 ຢ ໑|2 ຟ ໒|3 ໂ ໓|4 ຖ ໔|5 ຸ ໌|6 ູ ຼ|7 ຄ ໕|8 ຕ ໖|9 ຈ ໗|0 ຂ ໘|- ຊ ໙|= ໍ ໍ່",
"q ົ ົ້|w ໄ ໐|e ຳ ຳ້|r ພ _|t ະ +|y ິ ິ້|u ີ ີ້|i ຮ ຣ|o ນ ໜ|p ຍ ຽ|[ ບ -|] ລ ຫຼ",
"a ັ ັ້|s ຫ ;|d ກ .|f ດ ,|g ເ :|h ້ ໊|j ່ ໋|k າ !|l ສ ?|; ວ %|' ງ =|\\ “ ”",
"` * /|z ຜ ₭|x ປ (|c ແ ຯ|v ອ x|b ຶ ຶ້|n ື ື້|m ທ ໆ|, ມ ໝ|. ໃ $|/ ຝ )"
]




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




