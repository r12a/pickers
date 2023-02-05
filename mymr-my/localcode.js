globals.showTranslit =  ''
globals.showMesherTrans =  ''
globals.showISOTrans = ''
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
	var ccstr = ''
	

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
	var viramas = new Set(['\u1039'])
	var asats = new Set(['\u103A'])
	var medials = new Set(['ျ', 'ြ', 'ွ', 'ှ'])
	var vowels = new Set(['ေ', 'ိ', 'ီ', 'ု', 'ူ', 'ဲ', 'ာ', 'ါ'])
	var bindi = new Set(['ံ'])
	var tones = new Set(['့', 'း'])
	
	const LEFTVOWEL = 'l'
	const TOPVOWEL = 't'
	const BOTTOMVOWEL = 'b'
	const RIGHTVOWEL = 'r'
	
	const DTONE = 'd'
	const VTONE = 'x'

	var leftvowels = new Set(['ေ'])
	var highvowels = new Set(['ိ', 'ီ', 'ဲ'])
	var lowvowels = new Set(['ု', 'ူ'])
	var rightvowels = new Set(['ာ', 'ါ'])

	var yamedials = new Set(['ျ'])
	var ramedials = new Set(['ြ'])
	var wamedials = new Set(['ွ'])
	var hamedials = new Set(['ှ'])


	// assign position values to types of mark
	for (i=0;i<graphemes.length;i++) {
		virama = asat = medial = vowel = bindu = tone = 0
		cchars = [... graphemes[i]]
		console.log('cchars',cchars)
		ccstr = ''
		for (c=0;c<cchars.length;c++) {
			if (viramas.has(cchars[c])) ccstr += 'v'
			if (asats.has(cchars[c])) ccstr += 'a'
			if (medials.has(cchars[c])) ccstr += 'M'
			if (vowels.has(cchars[c])) ccstr += 'V'
			if (bindi.has(cchars[c])) ccstr += 'B'
			if (tones.has(cchars[c])) ccstr += 'T'
			
			if (leftvowels.has(cchars[c])) ccstr += 'l'
			if (highvowels.has(cchars[c])) ccstr += 't'
			if (lowvowels.has(cchars[c])) ccstr += 'b'
			if (rightvowels.has(cchars[c])) ccstr += 'r'
			
			if (yamedials.has(cchars[c])) ccstr += 'y'
			if (ramedials.has(cchars[c])) ccstr += 'x'
			if (wamedials.has(cchars[c])) ccstr += 'w'
			if (hamedials.has(cchars[c])) ccstr += 'h'
			}

		console.log(graphemes[i], ccstr)


		// APPLY RULES TO FIND PROBLEMS
		if (ccstr.startsWith('v') && ccstr.length > 1) messages.push(`In <a contenteditable="false" target="_blank" href="../../app-analysestring/index.html?chars=${ graphemes[i] }"><bdi lang="my">${ graphemes[i] }</bdi></a> no combining marks should follow the virama.`)
			
		if (ccstr.startsWith('a') && ccstr.length > 1  && ccstr[1] !== 'T') messages.push(`In <a contenteditable="false" target="_blank" href="../../app-analysestring/index.html?chars=${ graphemes[i] }"><bdi lang="my">${ graphemes[i] }</bdi></a> only tone marks should follow the asat.`)
			
		if (ccstr.startsWith(DTONE) && ccstr.length > 1  && ccstr[1] === 'T') messages.push(`In <a contenteditable="false" target="_blank" href="../../app-analysestring/index.html?chars=${ graphemes[i] }"><bdi lang="my">${ graphemes[i] }</bdi></a> only tone marks should follow the asat.`)
		
		// go through each mark, checking whether something follows that shouldn't
		for (p=0;p<ccstr.length;p++) {
			slice = ccstr.slice(p+1)
			console.log('SLICE', slice)
			
			if (ccstr[p] === 'V' && slice.includes('M')) messages.push(`In <a contenteditable="false" target="_blank" href="../../app-analysestring/index.html?chars=${ graphemes[i] }"><bdi lang="my">${ graphemes[i] }</bdi></a> the medial consonant should precede the vowel.`)
		
			// vowel order
			if (ccstr[p] === 'b' && (slice.includes('t') || slice.includes('l'))) messages.push(`In <a contenteditable="false" target="_blank" href="../../app-analysestring/index.html?chars=${ graphemes[i] }"><bdi lang="my">${ graphemes[i] }</bdi></a> the order of vowel sign marks should be left, above, below, right.`)
			if (ccstr[p] === 't' && (slice.includes('l'))) messages.push(`In <a contenteditable="false" target="_blank" href="../../app-analysestring/index.html?chars=${ graphemes[i] }"><bdi lang="my">${ graphemes[i] }</bdi></a> the order of vowel sign marks should be left, above, below, right.`)
			if (ccstr[p] === 'r' && (slice.includes('l') || slice.includes('t') || slice.includes('b'))) messages.push(`In <a contenteditable="false" target="_blank" href="../../app-analysestring/index.html?chars=${ graphemes[i] }"><bdi lang="my">${ graphemes[i] }</bdi></a> the order of vowel sign marks should be left, above, below, right.`)

			
			// medial order
			if (ccstr[p] === 'h' && (slice.includes('y') || slice.includes('x') || slice.includes('w'))) messages.push(`In <a contenteditable="false" target="_blank" href="../../app-analysestring/index.html?chars=${ graphemes[i] }"><bdi lang="my">${ graphemes[i] }</bdi></a> the order of medial characters should be YA, RA, WA, HA.`)
			if (ccstr[p] === 'w' && (slice.includes('y') || slice.includes('x'))) messages.push(`In <a contenteditable="false" target="_blank" href="../../app-analysestring/index.html?chars=${ graphemes[i] }"><bdi lang="my">${ graphemes[i] }</bdi></a> the order of medial characters should be YA, RA, WA, HA.`)
			if (ccstr[p] === 'x' && (slice.includes('y'))) messages.push(`In <a contenteditable="false" target="_blank" href="../../app-analysestring/index.html?chars=${ graphemes[i] }"><bdi lang="my">${ graphemes[i] }</bdi></a> the order of medial characters should be YA, RA, WA, HA.`)
			}
			
			if (ccstr[p] === 'B' && (slice.includes('V') || slice.includes('M'))) messages.push(`In <a contenteditable="false" target="_blank" href="../../app-analysestring/index.html?chars=${ graphemes[i] }"><bdi lang="my">${ graphemes[i] }</bdi></a> the bindu should come after the other combining marks.`)

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
{ wrong:"သြော်", right:"ဪ" },
{ wrong:"သြ", right:"ဩ" },
]


// list of fonts to add to the standard selection
window.fontsuggestions =  
`GreatHorKham Yangon
Padauk
Padauk Book
`


function localInitialise () {
	}
	

var _h = {
'1021': ['1012', '1001'],
'1023': ['1000', '100F'],
'1024': ['1000'],
'1025': ['1026', '1009', '100D', '104C'],
'1026': ['1025', '1009', '100D', '104C'],
'1027': ['104F'],
'1029': ['103C', '101E', '102A'],
'102A': ['1029', '103C', '101E', '1031', '103A'],
'1000': ['1023', '100F'],
'1001': ['1006'],
'1002': ['1000'],
'1003': ['100E', '101A'],
'1004': ['103A', '1004103A1039'],
'1005': ['102E', '1008'],
'1006': ['1001', '101D'],
'1008': ['1005', '103B'],
'100A': ['1009'],
'1009': ['100A', '1025'],
'100B': ['100C', '1044','1020'],
'100C': ['100B', '1044'],
'100D': ['1025', '104C'],
'100E': ['1003', '1015'],
'100F': ['1000'],
'1010': ['101D', '1011', '102C'],
'1011': ['1010', '101D'],
'1012': ['1021'],
'1015': ['101A', '101F', '100E'],
'1018': ['1041', '102C', '101E'],
'1019': ['1013'],
'1013': ['1019'],
'101A': ['1003', '1015', '102C', '101F', '101A103A'],
'101D': ['1040', '102D', '103D', '1010', '1013'],
'101E': ['103F', '102C', '1018', '100A', '1029', '102A'],
'103F': ['101E', '1018', '102C', '102A'],
'101F': ['101A', '1015', '102C', '101A103A'],
'103A': ['1031102C103A','101A103A','104C'],
'103B': ['1008'],
'103C': ['1029', '102A'],
'103D': ['1037', '101D'],
'103E': ['102F'],
'1039101C': ['101C'],
'101C': ['1039101C'],
'1031': ['102A', '1031102C', '1031102B', '1031102C103A', '1031102B103A'],
'102D': ['1036', '102D102F'],
'1031102C': ['1031', '102C', '1031102C103A'],
'1031102B': ['1031', '102B', '1031102B103A'],
'1031102C103A': ['1031', '102C', '1031102C','103A'],
'1031102B103A': ['1031', '102B', '1031102B'],
'102D102F': ['102D', '102F'],
'101A103A': ['101A', '103A'],
'102F': ['103E', '1030', '104E'],
'1030': ['102F'],
'102C': ['102A', '1018', '1031102C'],
'102B': ['1031102B'],
'1036': ['102D', '102E'],
'1037': ['103D'],
'104C': ['100D', '103A'],
'101B': ['104D'],
'104D': ['101B'],
'104E': ['1044'],
'104F': ['1027'],
'1044': ['104E'],
'1041': ['101E'],
'1043': ['1025'],
'1051': ['1050', '1040'],
'1050': ['1051', '1040'],
'1040': ['101D', '1050', '1051'],
'1020': ['100B', '100C'],

end: {}
}





var keyboarddef = [
"§ ၐ ဎ|1 ၁ ဍ|2 ၂ ၒ|3 ၃ ဋ|4 ၄ ၓ|5 ၅ ၔ|6 ၆ ၕ|7 ၇ ရ|8 ၈|9 ၉|0 ၀|-|=",
"q ဆ ဈ|w တ ဝ|e န ဣ|r မ ၎|t အ ဤ|y ပ ၌|u က ဥ|i င ၍|o သ ဿ|p စ ဏ|[ ဟ ဧ|] ဩ ဪ",
"a ေ ဗ|s ျ ှ|d ိ ီ|f ် ္|g ါ ွ|h ့ ံ|j ြ ဲ|k ု ဒ|l ူ ဓ|; း ဂ|'|\\ ၏ ၑ",
"`|z ဖ ဇ|x ထ ဌ|c ခ ဃ|v လ ဠ|b ဘ ယ|n ည ဉ|m ာ ဦ|, ၊|. ။|/"
]





var mlcCharacterMap = `
a a ာ a: ား ai ယ်‌ ai: ဲ ai. ဲ့ au ော်‌ au: ော au. ော့
A a အ
u u ူ u: ူး u. ု ui ို ui: ိုး ui. ို့
i i ီ i: ီး i. ိ
e e ေ e: ေး e. ေ့ 
b b ဗ bb ဗ္ဗ
B bh ဘ bbh ဗ္ဘ
c c စ cc စ္စ
C hc ဆ chc စ္ဆ
d d ဍ d ဒ dd ဍ္ဍ dd ဒ္ဒ
D dh ဎ dh ဓ ddh ဍ္ဎ
g g ဂ gg ဂ္ဂ ggh ဂ္ဃ g င်္ဂ
G gh ဃ
h h ဟ h- ှ
j j ဇ jj ဇ္ဇ
J jh ဈ jjh ဇ္ဈ
k k က kk က္က
K hk ခ khk က္ခ
l l လ l ဠ ll လ္လ
m m မ mb မ္ဗ mbh မ္ဘ mm မ္မ mp မ္ပ
n n န n ဏ ng င ny ည nd ဏ္ဍ nd န္ဒ ndh န္ဓ ng င်္ဂ nht န္ထ nn န္န
N nt န္တ nyc ဉ္စ nyj ဉ္ဇ
p p ပ pp ပ္ပ
P hp ဖ
r r ရ -r- ြ
s s သ ss ဿ
t t တ t ဋ tt တ္တ tt ဋ္ဋ
T ht ထ ht ဌ htht ထ္ထ tht ဋ္ဌ
w w ဝ -w- ွ
y y ယ -y- ျ
; asat ် virama ္
`



var mesherCharacterMap = `
a a ာ a ါ ai ို au ော au ေါ
e e ဲ e ယ် e အည် ei ေ ei- ိ ə အ
i ɪ အ i ိ i ီ
o o ို o- ု ɔ  ော ɔ ေါ
u u ု u ူ
A a အ
E e အ ei ဧ
I i ဣ i ဤ
O ɔ ဩ ɔ ဪ
U u ဥ u ဦ
b b ဗ b ဘ b ပ b ဖ
c ch ချ ch ခြ
d d ဒ d ဓ d ဍ d ဎ d တ d ထ dh သ
g g ဂ g ဃ g က g ခ
h h ဟ ʰ ှ
j j ကျ j ကြ ʝ ချ ʝ ခြ ʝ ဂျ ʝ ဂြ ʝ ကျ ʝ ကြ
k k က kh খ
K hk ခ
l l လ
L hl လှ
m m မ
M hm မှ
n n န n ဏ ny ည ny ဉ ng င ng င်္
N hn နှ hny ညှ hng ငှ
p p ပ
P hp ဖ hp ဘ
r r ရ
s s စ sh ရှ sh လျှ
S hs ဆ
t t တ t ဋ t ဌ th သ th ဿ
T ht ထ
v v ဗ v ဗွ
w w ဝ w ွ
W hw ဝှ
y y ယ y ရ y ြ y ျ
z z ဇ z စ z စျ z ဈ z ဆ
; asat ် virama ္
' ့ ့ း း
| -' အ် -' က် -' စ် -' တ် -' ပ် -n ံ -n မ် -n န် -n ဉ် -n င်
`








function findShapeOLD (shapelist, extrashapes, show) { 
	// highlights characters that contain a given shape
	// shapelist: string, comma-separated list of ids
	// status: boolean, indicates whether to highlight or remove highlighting

	var shapelistarray = shapelist.split(',')
	var extrashapesarray = extrashapes.split(',')

	clearHighlights()

	if (show) {
		for (var i=0;i<shapelistarray.length;i++) { //alert(document.getElementById(shapelistarray[i]).textContent)
			document.getElementById(shapelistarray[i]).style.backgroundColor = '#FFE6B2'
			}
		}
	else {
		for (var i=0;i<shapelistarray.length;i++) {
			document.getElementById(shapelistarray[i]).style.backgroundColor = 'transparent'
			}
		}
	
	var extras = ''
	for (i=0;i<extrashapesarray.length;i++) {
		extras += '<span class=c onclick="add(\''+extrashapesarray[i]+'\')">'+extrashapesarray[i]+'</span> '
		document.getElementById('extrashapes').style.fontFamily = document.getElementById('uiFont').value
		document.getElementById('extrashapes').style.fontSize = defaults.uisize+'px'
		}
	document.getElementById('extrashapes').innerHTML = extras
	}


function splitSyllables (str) {
	// str is myanmar text
	// produces a version of the string with spaces separating syllables except for conjuncts
	// conjuncts are separated by virama
	consonants = {'အ':'','က':'','ခ':'','ဂ':'','ဃ':'','င':'','စ':'','ဆ':'','ဇ':'','ဈ':'','ည':'','ဉ':'','ဋ':'','ဌ':'','ဍ':'','ဎ':'','ဏ':'','တ':'','ထ':'','ဒ':'','ဓ':'','န':'','ပ':'','ဖ':'','ဗ':'','ဘ':'','မ':'','ယ':'','ရ':'','လ':'','ဝ':'','သ':'','ဿ':'','ဟ':'','ဠ':'','ၐ':'','ၑ':'' }
	indvowels = { 'ဣ':'','ဤ':'','ဥ':'','ဦ':'','ဧ':'','ဩ':'','ဪ':'','၌':'','၍':'','၎':'','၏':'','၊':'','။':''}
	str = ' '+str+' '
	var out = ''
	for (p=0;p<str.length;p++) {
		if (str[p] in consonants || str[p] in indvowels) {
			if (str[p+1] != '\u103A' && str[p+1] != '\u1039' && str[p+1] != '\u1037') out += ' '+str[p]
			else out += str[p]
			}
		else out += str[p]
		}
	out = out.replace(/\u1039 /g,'\u1039')
	
	// split away non-Burmese or dandas
	return out.trim()
	}

function splitSyllables (str) {
	// str is myanmar text
	// produces a version of the string with spaces separating syllables except for conjuncts
	// conjuncts are separated by virama
	var consonants = {'အ':'','က':'','ခ':'','ဂ':'','ဃ':'','င':'','စ':'','ဆ':'','ဇ':'','ဈ':'','ည':'','ဉ':'','ဋ':'','ဌ':'','ဍ':'','ဎ':'','ဏ':'','တ':'','ထ':'','ဒ':'','ဓ':'','န':'','ပ':'','ဖ':'','ဗ':'','ဘ':'','မ':'','ယ':'','ရ':'','လ':'','ဝ':'','သ':'','ဿ':'','ဟ':'','ဠ':'','ၐ':'','ၑ':'' }
	var indvowels = { 'ဣ':'','ဤ':'','ဥ':'','ဦ':'','ဧ':'','ဩ':'','ဪ':'','၌':'','၍':'','၎':'','၏':'','၊':'','။':''}
	var str = ' '+str+' '
	var out = ''
	for (p=0;p<str.length;p++) {
		if (str[p] in consonants || str[p] in indvowels) {
			if (str[p+1] != '\u103A' && str[p+1] != '\u1039' && str[p+1] != '\u1037') out += ' '+str[p]
			else out += str[p]
			}
		else out += str[p]
		}
	out = ' '+out.replace(/\u1039 /g,'\u1039')
	
	// split away non-Burmese or dandas or numbers
	out2 = ''
	var reLetter = /[က-ဿ၌-ႏႚ-႟]/
	for (p=1;p<out.length;p++) { //console.log(out[p],out[p].match(reLetter))
		if (! out[p].match(reLetter) && out[p-1].match(reLetter) && out[p] != ' ') {
			out2 += ' '+out[p]
			}
		else out2 += out[p]
		}
	return out2.trim()
	}