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
	}
