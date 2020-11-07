globals.typeAssist = ''
globals.showKeysTranslitToggle = false



function localInitialise () {
	}



var _h = {
'531': ['54D'],
"544": ['54D'],
"561": ['57A'],
'56F': ['587','576'],
"574": ['57D','574576','574565','57456B','57E576','57456D','57E'],
"574576": ['574',"57E576"],
"574565": ['574'],
"57456B": ['574',"57456D"],
"57456D": ['574',"57456B"],
"57E576": ['574','574576'],
'576': ['587','56F','57D'],
"57A": ['561'],
"57D": ['574','576','587','56F','57E'],
"57E": ['574','57D'],
'57F': ['583'],
'583': ['57F'],
'587': ['56F','576','57D'],
'57C': ['572', '580', '564', '56B', '578'],
'578': ['572', '580', '564', '56B', '57C'],
'572': ['564', '578'],
'580': ['56B', '57C', '578'],
'56B': ['580', '570', '578'],
'564': ['572', '578'],
'570': ['56B', '578'],
'548': ['54C'],
'54C': ['548'],
'535': ['567', '537'],
'565': ['567', '537'],
'567': ['535', '565'],
'537': ['565', '535'],
'536': ['541', '549'],
'549': ['541', '536'],
'541': ['536', '549'],
'53A': ['56E'],
'56A': ['56E'],
'56E': ['53A', '56A'],
'53F': ['54E'],
'54E': ['53F'],
'53E': ['543'],
'543': ['53E'],
'573': ['56E', '571'],
'545': ['551'],
'551': ['545'],
'540': ['577'],
'577': ['540'],
'54F': ['556'],
'556': ['54F'],


end: {}
}




var keyboarddef = [
"§|1 ᏣᎳᎩ Ꮁ|2 ᎣᏏᏲ Ꮗ|3 ᏩᏙ Ꮷ|4 Ꮩ Ꮀ|5 Ꮶ Ꮉ|6 Ꮬ Ꮭ|7 Ꮛ Ꮱ|8 Ꮦ Ꮊ|9 Ꮢ (|0 Ꮔ )|- Ꮏ Ꮌ|= Ᏻ Ꮍ",
"q Ꭺ Ꮖ|w Ꮃ Ꮻ|e Ꭱ Ꮳ|r Ꮫ Ꮟ|t Ꮤ Ꮨ|y Ꮿ Ᏺ|u Ꭴ Ꭽ|i Ꭲ Ᏹ|o Ꭳ Ꮼ|p Ꮑ Ꮺ|[ Ꮥ Ꮡ|] Ꮆ Ꮴ",
"a Ꭰ Ꮜ|s Ꮝ Ꮞ|d Ꮧ Ꮠ|f Ꭹ Ꮘ|g Ꭶ Ꮵ|h Ꭿ Ꮂ|j Ꮪ Ꭻ|k Ꮈ Ꭷ|l Ꮅ Ꭾ|; Ꮸ Ꮰ|' |\\ Ꮹ Ꮾ",
"` Ꮚ|z Ꭼ Ꮓ|x Ᏼ Ꮽ|c Ꮣ Ꮯ|v Ꭵ Ꮮ|b Ꭸ Ᏸ|n Ꮎ Ꮋ|m Ꮕ Ꮇ|, Ꮲ|. Ꮄ|/ Ꮒ Ꮙ"
]


var keyboardUC = [
"§|1 ꮳꮃꭹ ꮁ|2 ꭳꮟᏺ ꮗ|3 ꮹꮩ ꮷ|4 ꮩ ꮀ|5 ꮶ ꮉ|6 ꮬ ꮭ|7 ꮛ ꮱ|8 ꮦ ꮊ|9 ꮢ (|0 ꮔ )|- ꮏ ꮌ|= ᏻ ꮍ", 
"q ꭺ ꮖ|w ꮃ ꮻ|e ꭱ ꮳ|r ꮫ ꮟ|t ꮤ ꮨ|y ꮿ ᏺ|u ꭴ ꭽ|i ꭲ ᏹ|o ꭳ ꮼ|p ꮑ ꮺ|[ ꮥ ꮡ|] ꮆ ꮴ", 
"a ꭰ ꮜ|s ꮝ ꮞ|d ꮧ ꮠ|f ꭹ ꮘ|g ꭶ ꮵ|h ꭿ ꮂ|j ꮪ ꭻ|k ꮈ ꭷ|l ꮅ ꭾ|; ꮸ ꮰ|' |\\ ꮹ ꮾ", 
"` ꮚ|z ꭼ ꮓ|x ᏼ ꮽ|c ꮣ ꮯ|v ꭵ ꮮ|b ꭸ ᏸ|n ꮎ ꮋ|m ꮕ ꮇ|, ꮲ|. ꮄ|/ ꮒ ꮙ" 
]



function event_toggleKbdShift () {
    if (this.classList.contains('shiftKeyOn')) {
        makeKeyboard(keyboarddef, keyboardLCGuide)
        }
    else makeKeyboard(keyboardUC, keyboardUCGuide)
    }




function toggleShift (node) {
    var chars = document.querySelectorAll('.c')

	if (node.classList.contains('shifted')) {
        for (let i=0;i<chars.length;i++) {
            if (chars[i].dataset.uc) chars[i].textContent = chars[i].dataset.uc
            else chars[i].textContent = chars[i].textContent.toUpperCase()
            }
		} 
	else {
        for (let i=0;i<chars.length;i++) {
            if (chars[i].dataset.lc) chars[i].textContent = chars[i].dataset.lc
            else chars[i].textContent = chars[i].textContent.toLowerCase()
            }
		}
	// reinitialise ids to codepoint values of character sequence (with no leading zeros)
	node = document.querySelectorAll( '.c' ); 
	for (var n = 0; n < node.length; n++ ) { 
		content = node[n].textContent
		id=''
		for (i=0;i<content.length;i++) {
			id += convertChar2CP(content[i])
			}
		node[n].id = id
        node[n].dataset.c = 'c'+id
        dec = parseInt(id, 16)
        while (id.length<4) id = '0'+id
        node[n].title = 'U+'+id+': '+charData[content]
		}
	}

function toggleTables (node) {
	if (! node.classList.contains('shifted')) {
		document.getElementById('traditional').style.display = 'block'
		document.getElementById('phonetic').style.display = 'none'
		} 
	else {
		document.getElementById('traditional').style.display = 'none'
		document.getElementById('phonetic').style.display = 'block'
		}
	}



