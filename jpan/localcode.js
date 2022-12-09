globals.showTranslit =  ''
globals.typeAssist = ''
globals.showKeysTranslitToggle = false


function localInitialise () {

	}

function toggleDirectionality () {
	// switch the direction of the input box between vertical and horizontal
	if (document.getElementById('output').style.writingMode === 'vertical-rl') document.getElementById('output').style.writingMode = 'horizontal-tb' 
	else document.getElementById('output').style.writingMode = 'vertical-rl' 
	}




function toggleShift (node) {
    var chars = document.querySelectorAll('.c')

	if (node.classList.contains('shifted')) {
        for (let i=0;i<chars.length;i++) {
            if (chars[i].dataset.lc) chars[i].textContent = chars[i].dataset.lc
            else chars[i].textContent = chars[i].textContent.toLowerCase()
            }
		} 
	else {
        for (let i=0;i<chars.length;i++) {
            if (chars[i].dataset.uc) chars[i].textContent = chars[i].dataset.uc
            else chars[i].textContent = chars[i].textContent.toUpperCase()
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


var _h = {

end: {}
}


var keyboarddef = []



globals.showISOCharMap = ''

var isoCharacterMap = `
a ā ा ai ै au ौ
\\ ' ऽ
`






