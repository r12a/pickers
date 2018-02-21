
globals.keyboard = ''

function localInitialise () {
	}
	

var _h = {

end: {}
}



var keyboarddef = [
"§|1 ɨ ǃ ɴ|2 ø ˈ ‖|3 ɜ ɹ ɻ|4 ɾ $ ɽ|5 ɫ ˌ ʟ|6 ɐ ̯ ɓ|7 ɤ ɶ ˠ|8 ɵ * ɞ|9 œ ( ɠ|0 ̥ ) ̊|- - ‿ ͡|= ̩ + ǂ",
"q q ɒ ̝|w w ʍ ʷ|e e ɛ ɘ|r r ʁ ʀ|t t θ ʈ|y y ʏ ̞|u u ʊ ɦ|i i ɪ ̟|o o ɔ ʘ|p p ʋ ɸ|[ [ æ ɗ|] ] ʉ ̪",
"a a ɑ ̠|s s ʃ ʂ|d d ð ɖ|f f ɱ ɟ|g ɡ ɣ ɢ|h h ɥ ʰ|j j ɲ ʝ|k k ɬ ɮ|l l ʎ ɭ|; ; ː ̈|' ʲ ə ɚ|\\ # ̃ ̰",
"`|z z ʒ ʐ|x x χ ħ|c c ç ɕ|v v ʌ ʑ|b b β ʙ|n n ŋ ɳ|m m ɯ ɰ|, , ̆  ʼ|. . → ̤|/ / ʔ ʕ"
]


/*
var keyboarddef = [
"ɨ,ǃ,ɴ|ø,ˈ,‖|ɜ,ɹ,ɻ|ɾ,$,ɽ|ɫ,ˌ,ʟ|ɐ,̯,ɓ|ɤ,ɶ,ˠ|ɵ,*,ɞ|œ,(,ɠ|̥,),̊|-,‿,͡|̩,+,ǂ",
"q,ɒ,̝|w,ʍ,ʷ|e,ɛ,ɘ|r,ʁ,ʀ|t,θ,ʈ|y,ʏ,̞|u,ʊ,ɦ|i,ɪ,̟|o,ɔ,ʘ|p,ʋ,ɸ|[,æ,ɗ|],ʉ,̪",
"a,ɑ,̠|s,ʃ,ʂ|d,ð,ɖ|f,ɱ,ɟ|ɡ,ɣ,ɢ|h,ɥ,ʰ|j,ɲ,ʝ|k,ɬ,ɮ|l,ʎ,ɭ|;,ː,̈|ʲ,ə,ɚ|#,̃,̰",
"z,ʒ,ʐ|x,χ,ħ|c,ç,ɕ|v,ʌ,ʑ|b,β,ʙ|n,ŋ,ɳ|m,ɯ,ɰ|,̆,ʼ|.,→,̤|/,ʔ,ʕ",
]

var keyboardguide = [
"1,2,3,4,5,6,7,8,9,0,-,=,,,",
"q,w,e,r,t,y,u,i,o,p,[,],,,",
"a,s,d,f,g,h,j,k,l,;,',\\,,,",
"z,x,c,v,b,n,m,,.,/,,,,,"
]

var keyboardRowOffset = ['5px','20px','30px','50px']
*/

// overwrite standard function to make background white (for vowels)
function event_mouseoutChar ()  {
	// unhighlight this character
	this.style.backgroundColor = 'white'
		this.style.color = '#666'
	
	// unhighlight similar characters
	if (_h[this.id]) {
		ptr = this.id
		for (i=0;i<_h[ptr].length;i++) {
			document.getElementById(_h[ptr][i]).style.backgroundColor = 'white'
			}
		}
	}


function clearHighlights () {
	// called when a character is clicked on - removes any highlighting added by shape
	
	nodelist = document.querySelectorAll('.c')
	for (var i=0;i<nodelist.length;i++) {
		nodelist[i].style.backgroundColor = 'white'
		}
	}
