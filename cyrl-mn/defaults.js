var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Doulos SIL WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'mn' // language to use for examples
	factoryDefaults.uifont = 'Doulos SIL WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'cyrlmnPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Doulos SIL WF" ]


var template = {}
	template.title = 'Mongolian (Cyrillic)'
	template.sample = "Хүн бүр төрж мэндлэхэд эрх чөлөөтэй, адилхан нэр төртэй, ижил эрхтэй байдаг. Оюун ухаан, нандин чанар заяасан хүн гэгч өөр хоорондоо ахан дүүгийн үзэл санаагаар харьцах учиртай."
	template.sampleSource = ''
	template.blocklocation= 'cyrl'  // block directory
	template.noteslocation = 'cyrl/mn' // location of script notes
	template.vocablocation = 'cyrl/mn_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'cyrl-mn'
	template.scriptcode = 'Cyrl'
	template.fontLocale = 'cyrl'
	template.hints = true
	template.bicameral = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Mongolian text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]





var pulldown = [
//{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Mongolian text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},

//{"title":"Translit+", "alt":"Convert to a Latin transliteration but then apply additional phonetic transformations.", "code":"doTranscription('translitPlus')", "warning":"Adds inherent vowels and palatalisation. The result should be checked."},

//{"title":"XXXX to Latin", "alt":"Convert XXXX text to a Latin transcription.", "code":"doTranscription('transcription')"},

//{"title":"XXXX to Latin", "alt":"Convert XXXX script text to the Latin orthography.", "code":"doTranscription('transcription')", "warning":"The result of this conversion needs to be checked for accuracy."},

//{"title":"XXXX to Radice", "alt":"Convert XXXX text to the Latin transcription used by Radice.", "code":"doTranscription('transcription')"},

//{"title":"XXXX<br/>to ISO", "alt":"Convert XXXX text to an ISO 15919 Latin transcription.", "code":"doTranscription('toISO15919')"},

//{"title":"XXXX<br/>to IPA", "alt":"Convert XXX text to an <em>approximate</em> IPA transcription.", "code":"doTranscription('toIPA')", "warning":"This only produces an <em>approximation</em> to an IPA transcription. Use it as a base and refine it by hand." },

//{"title":"XXXX<br/>to IPA", "alt":"Convert XXX text to an <em>approximate</em> IPA transcription.", "code":"doTranscription('toISO15919')", "warning":"Separate syllables with spaces before use! Full transcription requires fully vowelled text! This only produces an APPROXIMATION to an IPA transcription. Use it as a base and refine it by hand." },

//{"title":"ISO to<br/>XXXX", "alt":"Convert an ISO 15919 transcription to XXXX text.", "code":"doTranscription('toDeva')"},
]






var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'LOC'
    show.kbd = "Mongolian"
    show.language = "Mongolian"


var inputAids = []



