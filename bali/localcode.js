globals.showTranslit =  ''
globals.extended =  ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false



function checkOrder (chars) {
// check that combining marks are in the right order
	// chars is the content of the text area
	var msg = ''
	var messages = []
    var graphemes = []
    var ptr = -1
    var characterList, cchars
	var virama, nukta, vowel, bindu, gemination, final
	

	// parse the text area into graphemes
    characterList = [...chars]
    for (var c=0;c<characterList.length;c++) {
        if (window.marks && window.marks.has(characterList[c]) && c !== 0) graphemes[ptr] += characterList[c]
        else {
            ptr++
            graphemes[ptr] = characterList[c]
            }
        }

console.log('Graphemes:',graphemes)

	// make sets for the expected character types
	var viramas = new Set(['\u1B44'])
	var nuktas = new Set(['᬴'])
	var vowels = new Set(['ᬾ', 'ᬿ', 'ᭀ', 'ᭃ', 'ᭁ', 'ᬶ', 'ᬷ', 'ᬸ', 'ᬹ', 'ᬺ', 'ᬻ', 'ᬼ', 'ᬽ', 'ᭂ','᭞', 'ᬵ'])
	var finals = new Set(['ᬃ', 'ᬀ', 'ᬁ', 'ᬂ', 'ᬄ'])



	// assign position values to types of mark
	for (i=0;i<graphemes.length;i++) {
		cchars = [... graphemes[i]]
		console.log('cchars',cchars)
		ccstr = ''
		for (c=0;c<cchars.length;c++) {
			if (viramas.has(cchars[c])) ccstr += 'v'
			if (nuktas.has(cchars[c])) ccstr += 'n'
			if (vowels.has(cchars[c])) ccstr += 'V'
			if (finals.has(cchars[c])) ccstr += 'F'
			}

		console.log(graphemes[i], ccstr)


		// APPLY RULES TO FIND PROBLEMS
		if (ccstr.startsWith('v') && ccstr.length > 1) messages.push(`In <a contenteditable="false" target="_blank" href="../../app-analysestring/index.html?chars=${ graphemes[i] }"><bdi lang="ban">${ graphemes[i] }</bdi></a> no combining marks should follow the adeg-adeg.`)
								
		if (ccstr.includes('n') && ! ccstr.startsWith('n')) messages.push(`In <a contenteditable="false" target="_blank" href="../../app-analysestring/index.html?chars=${ graphemes[i] }"><bdi lang="ban">${ graphemes[i] }</bdi></a> the rerekan should come immediately after the base.`)


							
		// go through each mark, checking whether something follows that shouldn't
		for (p=0;p<ccstr.length;p++) {
			slice = ccstr.slice(p+1)
			console.log('SLICE', slice)
			
			// bindi and gemination and finals must come after vowels
			if (ccstr[p] === 'F' && slice.includes('V')) messages.push(`In <a contenteditable="false" target="_blank" href="../../app-analysestring/index.html?chars=${ graphemes[i] }"><bdi lang="ban">${ graphemes[i] }</bdi></a> the vowel sign should precede the syllable-final consonant diacritic.`)
			}
		}


	// remove duplicate messages
    const uniqueSet = new Set(messages)
    messages = [...uniqueSet]

	//concatenate all the messages
	for (i=0;i<messages.length;i++) msg += `\n<tr><td>${ messages[i] }</td></tr>`
	console.log(msg)
	
	return msg
	}




window.charCheckerList = [
//{ wrong:"xxx", right:"xxx" },
{ wrong:"ᬵᬿ", right:"ᭁ" },
{ wrong:"ᬵᬾ", right:"ᭀ" },
{ wrong:"ᬵᭂ", right:"ᭃ" },
{ wrong:"ᬵᬺ", right:"ᬻ" },
{ wrong:"ᬵᬼ", right:"ᬽ" },
]


// list of fonts to add to the standard selection
window.fontsuggestions =  
`Aksara Bali Galang
JG Aksara Bali
Kadiri
Pustaka Bali
Ubud
Vimala
`


function localInitialise () {
	}
	
var _h = {

end: {}
}




var keyboarddef = [
"§|1 ᭑ ᬒᬁ|2 ᭒ ᬣ|3 ᭓ ᬡ|4 ᭔ ᬱ|5 ᭕ ᬰ|6 ᭖|7 ᭗|8 ᭘ᬉ|9 ᭙ ᬏ|0 ᭐ ᬑ|-|=",
"q ᬥ|w ᬯ|e ᬾ ᬿ|r ᬭ|t ᬢ|y ᬬ|u ᬸ ᬹ|i ᬶ ᬷ|o ᭀ ᭁ|p ᬧ|[ ᬃ ᬀ|] ᬂ ᬁ",
"a ᬵ|s ᬲ|d ᬤ|f ᭂ ᭃ|g ᬕ|h ᬳ|j ᬚ|k ᬓ|l ᬮ|; ᬗ|' ᬄ|\\",
"`|z ᬡ|x ᬜ|c ᬘ|v ᬪ|b ᬩ|n ᬦ|m ᬫ|, ᭞ ᭚|. ᭟ ᭛|/ ᭄"
]




var _h = {
'1B29': ['1B171B34', '1B51', '1B17'],
'1B171B34': ['1B51', '1B17', '1B29'],
'1B51': ['1B17', '1B29', '1B171B34'],
'1B17': ['1B29', '1B171B34', '1B51'],
'1B151B34': ['1B15'],
'1B15': ['1B151B34'],
'1B56': ['1B0F'],
'1B0F': ['1B56'],
'1B1B': ['1B10'],
'1B10': ['1B1B'],
'1B12': ['1B53', '1B11'],
'1B53': ['1B11', '1B12'],
'1B11': ['1B12', '1B53'],
'1B0D': ['1B0E', '1B52'],
'1B0E': ['1B52', '1B0D'],
'1B52': ['1B0D', '1B0E'],
'1B2F': ['1B31', '1B271B34', '1B2F1B34', '1B27'],
'1B31': ['1B271B34', '1B2F1B34', '1B27', '1B2F'],
'1B271B34': ['1B2F1B34', '1B27', '1B2F', '1B31'],
'1B2F1B34': ['1B27', '1B2F', '1B31', '1B271B34'],
'1B27': ['1B2F', '1B31', '1B271B34', '1B2F1B34'],
'1B28': ['1B58'],
'1B58': ['1B28'],
'1B131B34': ['1B13'],
'1B13': ['1B131B34'],
'1B331B34': ['1B2E', '1B33'],
'1B2E': ['1B33', '1B331B34'],
'1B33': ['1B331B34', '1B2E'],
'1B1A1B34': ['1B1A'],
'1B1A': ['1B1A1B34'],
'1B32': ['1B18'],
'1B18': ['1B32'],
'1B14': ['1B26'],
'1B26': ['1B14'],
'1B1F': ['1B2C', '1B59', '1B16', '1B20'],
'1B2C': ['1B59', '1B16', '1B20', '1B1F'],
'1B59': ['1B16', '1B20', '1B1F', '1B2C'],
'1B16': ['1B20', '1B1F', '1B2C', '1B59'],
'1B20': ['1B1F', '1B2C', '1B59', '1B16'],
'1B37': ['1B00', '1B01', '1B36'],
'1B00': ['1B01', '1B36', '1B37'],
'1B01': ['1B36', '1B37', '1B00'],
'1B36': ['1B37', '1B00', '1B01'],
'1B40': ['1B3F', '1B41', '1B04', '1B3E'],
'1B3F': ['1B41', '1B04', '1B3E', '1B40'],
'1B41': ['1B04', '1B3E', '1B40', '1B3F'],
'1B04': ['1B3E', '1B40', '1B3F', '1B41'],
'1B3E': ['1B40', '1B3F', '1B41', '1B04'],
'1B41': ['1B3B', '1B43', '1B40', '1B35'],
'1B3B': ['1B43', '1B40', '1B35', '1B41'],
'1B43': ['1B40', '1B35', '1B41', '1B3B'],
'1B40': ['1B35', '1B41', '1B3B', '1B43'],
'1B35': ['1B41', '1B3B', '1B43', '1B40'],
'1B43': ['1B3D', '1B3C', '1B42'],
'1B3D': ['1B3C', '1B42', '1B43'],
'1B3C': ['1B42', '1B43', '1B3D'],
'1B42': ['1B43', '1B3D', '1B3C'],
'1B02': ['1B03'],
'1B03': ['1B02'],
'1B5E': ['1B5F', '1B5E'],
'1B5F': ['1B5E', '1B5E'],
'1B5E': ['1B5E', '1B5F'],
'1B151B34': ['1B30', '1B15'],
'1B30': ['1B15', '1B151B34'],
'1B15': ['1B151B34', '1B30'],
'1B331B34': ['1B33'],
'1B33': ['1B331B34'],
'1B55': ['1B60', '1B54'],
'1B60': ['1B54', '1B55'],
'1B54': ['1B55', '1B60'],
'1B5C': ['1B50'],
'1B50': ['1B5C'],

end: {}
}
	
	
function toggleKawi (node, LC, UC) {
    var chars = document.querySelectorAll('.x')

	if (node.classList.contains('shifted')) {
        for (let i=0;i<chars.length;i++) {
			chars[i].style.display='none'
            }
		} 
	else {
        for (let i=0;i<chars.length;i++) {
            chars[i].style.display='inline-block'
            }
		}
	}




