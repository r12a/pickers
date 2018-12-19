globals.showRevealHints =  ''
globals.showExtended =  ''


function localInitialise () {
	}
	

var _h = {
end: {}
}


function reveal (id) {
    // when an orange key is clicked on, this reveals the related characters
    
    divs = document.querySelectorAll('#reveal div')
    for (let i=0;i<divs.length;i++) divs[i].style.display = 'none'
    document.getElementById(id).style.display='block'
    }

function revealHints (show) {
    // turns on or off the hints for the characters in the selection area
    
    var hints = document.querySelectorAll('#consonants .hint, #reveal .hint')
    if (show) for (let i=0;i<hints.length;i++) hints[i].style.display = 'none'
    else for (let i=0;i<hints.length;i++) hints[i].style.display = 'inline'
    }

function revealExtended (show) {
    // shows or hides extended characters in the selection area
    
    var hints = document.querySelectorAll('#reveal .e')
    if (show) for (let i=0;i<hints.length;i++) hints[i].style.display = 'none'
    else for (let i=0;i<hints.length;i++) hints[i].style.display = 'inline'
    }

var justLatinMap = `
a ä
e ə ɛ
i ɨ
o ɔ
u ʊ
w wə
y yä
b b β
c č
d dʒ
g ǧ ɡ
h ḥ ḫ ʰ
k ḳ
n ñ ŋ ɲ
p pʼ
s ś š
t tʼ tsʼ tʃ
w ʷ
x xʼ
z ž ʒ
' ʾ ʿ
`


