globals.showNeoTrans =  ''
globals.showIPATrans = ''

function localInitialise () {
	}
	

var _h = {
end: {}
}


var keyboarddef = [
"§ ё Ё|1|2|3 №|4 ;|5 %|6 :|7 ?|8 * ₽|9 (|0 )|- _|= +",
"q й Й|w ц Ц|e у У|r к К|t е Е d|y н Н|u г Г|i ш Ш|o щ Щ|p з З|[ х Х|] ъ Ь",
"a ф Ф|s ы Ы|d в В|f а А|g п П|h р Р|j о О|k л Л|l д Д|; ж Ж|' э Э|\\",
"`|z я Я|x ч Ч|c с С|v м М|b и И|n т Т|m ь Ь|, б Б|. ю Ю|/ . ,"
]



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