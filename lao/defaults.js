var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Serif Lao WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'lo' // language to use for examples
	factoryDefaults.uifont = 'Noto Serif Lao WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u00A0";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'laoPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Serif Lao WF","Noto Sans Lao WF" ]


var template = {}
	template.title = 'Lao character app'
	template.sample = "ຂໍ້ 2. ບຸກຄົນແຕ່ລະຄົນມີສິດທີ່ຈະຈາກປະເທດໃດປະເທດໜື່ງໄປ ນັບທັງປະເທດຂອງຕົນດ້ວຍ ແລະ ກັບຄືນມາໃນປະເທດຂອງຕົນໄດ້."
	template.sampleSource = ''
	template.blocklocation= 'laoo'  // block directory
	template.noteslocation = 'laoo/lo' // location of script notes
	template.vocablocation = 'laoo/lo_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'lao'
	template.scriptcode = 'Laoo'
	template.fontLocale = 'laoo'
	template.hints = true
	
	template.defaultSpace = '\u200B'
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003'], ['IDSP','\u3000']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Lao text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Lao to LOC", "alt":"Convert Lao text to an Library of Congress Latin transcription.", "code":"doTranscription('toLOC')", "warning":"The results should be checked for accuracy."},

{"title":"Split syllables", "alt":"Break text into syllabic units.", "code":"doTranscription('toSyllables')", "warning":"The results should be checked for accuracy."},
]






var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'LOC'
    show.kbd = "Lao"
    show.language = "Lao"


// Simmala not working
var inputAids = [
//{"title":"Type assist: Simmala transcription to Lao.", 
//"desc":"Use a  mapping from the transcription in Simmala's book to type Lao from the keyboard.",
//"dataShortTitle":"Simmala", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.simmala);setUpTypeAssist(false, mapstring, mapstring)"
//},
]

