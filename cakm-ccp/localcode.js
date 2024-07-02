globals.showTranslit =  ''
globals.typeAssist = ''
globals.showKeysTranslitToggle = true





window.charCheckerList = [
//{ wrong:"", right:"" },
]




function localInitialise () {
	}
	




var _h = {
end: {}
}





var keyboarddef = [
"§|1 𑄷 !|2 𑄸 @|3 𑄹 #|4 𑄺 𑅇|5 𑄻 %|6 𑄼 𑅀|7 𑄽 𑄀|8 𑄾 *|9 𑄿 (|0 𑄶 )|- - _|== ;",
"q 𑄋 𑄁|w 𑄡 𑄠|e 𑄓 𑄔|r 𑄛 𑄜|t 𑄑 𑄒|y 𑄌 𑄍|u 𑄎 𑄏|i 𑄦 𑄐|o 𑄉 𑄊|p 𑄤 𑄅|[ {|] }|` 𑅂 𑄂",
"a 𑄭 𑄱|s 𑄪 𑄫|d 𑄨 𑄩|f 𑄧 𑄃|g 𑄳 𑅁|h 𑄝 𑄞|j 𑄇 𑄈|k 𑄖 𑄗|l 𑄘 𑄙|; 𑄴 𑅅|' ' \"|\\ \\",
"`|z 𑄄 𑅆|x 𑄮 𑄯|c 𑄬 𑄰|v 𑄢 𑄣|b 𑄚 𑄕|n 𑄥 𑄲|m 𑄟 𑄆|, , <|. . >|/ 𑅄 𑅃"]
// source: https://keymanweb.com/#ccp-cakm-bd,Keyboard_easy_chakma






function toggleExtended (node) {
    var chars = document.querySelectorAll('.x')

	if (node.classList.contains('shifted')) {
        for (let i=0;i<chars.length;i++) {
            chars[i].style.display = 'none'
            }
		document.getElementById('translitvowels').style.display = 'none'
		}
    else {
        for (let i=0;i<chars.length;i++) {
            chars[i].style.display = 'inline-block'
            }
		document.getElementById('translitvowels').style.display = 'block'
		} 
	}


function toggleSubjoined (node) {
	if (node.classList.contains('shifted')) {
		document.getElementById('consonantGrid').style.display = 'flex'
		document.getElementById('subjoinedGrid').style.display = 'none'
		}
    else {
		document.getElementById('consonantGrid').style.display = 'none'
		document.getElementById('subjoinedGrid').style.display = 'flex'
		} 
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







