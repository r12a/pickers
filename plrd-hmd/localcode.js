globals.typeAssist = ''
globals.showKeysTranslitToggle = false


window.charCheckerList = [
//{ wrong:"သြော်", right:"ဪ" },
//{ wrong:"သြ", right:"ဩ" },
]





// list of fonts to add to the standard selection
window.fontsuggestions =  
``


function localInitialise () {
    showAlternatives('.x',false); 
    }
	

var _h = {
'995': ['9AC'],

end: {}
}



/*
ipaOrder = [
"p", "b", "t", "d", "ʈ", "ɖ", "c", "ɟ", "k", "ɡ", "q", "ɢ", "ʡ", "ʔ", "ɓ", "ɗ", "ʄ", "ɠ", "ʛ", "t͡s", "d͡z", "t͡ʃ", "d͡ʒ", "ʈ͡ʂ", "ɖ͡ʐ", "t͡ɕ", "d͡ʑ", "ɸ", "β", "f", "v", "θ", "ð", "s", "z", "ʃ", "ʒ", "ʂ", "ʐ", "ɕ", "ʑ", "ç", "ʝ", "x", "ɣ", "χ", "ʁ", "ħ", "ʕ", "h", "ɦ", "m", "ɱ", "n", "ɳ", "ɲ", "ŋ", "ɴ", "ʍ", "w", "ʋ", "ɹ", "l", "ɫ", "ɻ", "j", "ɰ", "ʙ", "ⱱ", "r", "ɾ", "ɽ", "ʀ", "ʜ", "ʢ", "ɬ", "ɮ", "ɺ", "ɭ", "ʎ", "ʟ", "ʘ", "ǀ", "ǃ", "ǁ", "ǂ", "ɥ", "t͡p", "d͡b", "k͡p", "ɡ͡b", "ɧ"

"i", "y", "ɨ", "ʉ", "ɯ", "u", "ɪ", "ʏ", "ʊ", "e", "ø", "ɘ", "ɵ", "ɤ", "o", "ə", "ɛ", "œ", "ɜ", "ɞ", "ʌ", "ɔ", "æ", "ɐ", "a", "ɶ", "ɑ", "ɒ"
]
*/






function showAlternatives (className, state) {
	nodes = document.querySelectorAll(className)
	if (state) state = 'inline-block'
	else state = 'none'
	for (let i=0;i<nodes.length;i++) nodes[i].parentNode.style.display = state
	}


























