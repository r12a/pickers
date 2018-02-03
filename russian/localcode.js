globals.showNeoTrans =  ''
globals.showIPATrans = ''

function localInitialise () {
	}
	

var _h = {
end: {}
}


var keyboarddef = [
]

var keyboardguide = [
]

var keyboardRowOffset = ['5px','20px','30px','50px']



function toggleShift (node, LC, UC) {
    var chars = document.querySelectorAll('.c')

    if (node.className =='shifted') {
        for (let i=0;i<chars.length;i++) {
            chars[i].textContent = chars[i].textContent.toLowerCase()
            }
		node.className = 'unshifted'
		} 
	else {
        for (let i=0;i<chars.length;i++) {
            chars[i].textContent = chars[i].textContent.toUpperCase()
            }
		node.className = 'shifted'
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


function toTitleCase () {
    // convert text area so each word begins with capital letter
    var str = document.getElementById('output').value
    var words = str.split(' ')
    var newwords = []
    for (let i=0;i<words.length;i++) {
        console.log(words[i][0])
        newwords.push(words[i][0].toUpperCase()+words[i].substr(1).toLowerCase())
        console.log(newwords[i])
        }
    document.getElementById('output').value = newwords.join(' ')
    }