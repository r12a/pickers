globals.showTranslit =  ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false


function localInitialise () {

	}


function displayDBInfo (cp, block, lang, direction, showAll) { 
	// displays information about cp from db
	// cp: a unicode character, or sequence of unicode characters
	// block: 
	// lang: the BCP47 language tag for the context
	// direction: either rtl or ltr or ''
	// showAll: boolean, if true shows all db entries for every character; otherwise, shows only entries that start with the character

	//var chars = []
	//convertStr2DecArray(cp, chars)
	var chars = [...cp]

	var out = '<span style="display:flex; flex-direction:column;">'
	//console.log(spreadsheetRows)
	
	for (let i=0;i<chars.length;i++) {
		//out += buildDBInfoLine(chars[i], true)
		if (han[chars[i]]) {
			var hex = chars[i].codePointAt(0).toString(16).toUpperCase()
			while (hex.length<0) hex = '0'+hex
			out += '<span class="dbCharContainer"><span class="dbCharItem">'+chars[i]+'</span>'
			out += '<span class="dbCharSubContainer" style="display:flex;flex-direction:column;"><span class="dbCharInfo"><span><em>yomi</em> '+han[chars[i]].jk.toLowerCase()+' '+han[chars[i]].jo+'</span><span><em>def.</em>  <span class="ipa">'+han[chars[i]].def+'</span></span></span><span class="dbCharName">U+'+hex+': IDEOGRAPHIC CHARACTER</span></span></span>'
			}
		
		else out += buildDBInfoLine(chars[i], true, cp, i, showAll)
		}
	
	out += '</span>'


	return out.trim()
	}





function toggleDirectionality () {
	// switch the direction of the input box between vertical and horizontal
	if (document.getElementById('output').style.writingMode === 'vertical-rl') document.getElementById('output').style.writingMode = 'horizontal-tb' 
	else document.getElementById('output').style.writingMode = 'vertical-rl' 
	}






var _h = {

end: {}
}


var keyboarddef = [
]









