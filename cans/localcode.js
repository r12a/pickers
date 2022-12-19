globals.typeAssist = ''
globals.showKeysTranslitToggle = false





// list of fonts to add to the standard selection
window.fontsuggestions =  
``



function localInitialise () {
	}
	

var _h = {
end: {}
}


function toggleShift (node, LC, UC) {
    var chars = document.querySelectorAll('.c')

    if (node.className =='unshifted') {
        for (let i=0;i<chars.length;i++) {
            chars[i].textContent = chars[i].textContent.toLowerCase()
            }
		node.className = 'shifted'
		} 
	else {
        for (let i=0;i<chars.length;i++) {
            chars[i].textContent = chars[i].textContent.toUpperCase()
            }
		node.className = 'unshifted'
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


function unsetCase () {
    // set case button back to default
    // used when selecting a new orange character
    document.getElementById('shiftToggle').className = 'shifted'
    }


