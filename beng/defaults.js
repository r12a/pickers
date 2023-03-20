var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Serif Bengali WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'bn' // language to use for examples
	factoryDefaults.uifont = 'Noto Serif Bengali WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'bengaliPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Bengali WF", "Noto Serif Bengali WF" ]


var template = {}
	template.title = 'Bengali'
	template.sample = "২. প্রত্যেকের‌ই নিজ দেশ সহ যে কোন দেশ পরিত্যাগ এবং স্বদেশে প্রত্যাবর্তনের অধিকার রয়েছে।"
	template.sampleSource = ''
	template.blocklocation= 'beng'  // block directory
	template.noteslocation = 'beng/bn' // location of script notes
	template.vocablocation = 'beng/bn_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'beng'
	template.scriptcode = 'Beng'
	template.fontLocale = 'beng'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003'] ]
	template.defaultInvisible = '\u09CD'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Bengali text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},

]



var pulldown = [

//{"title":"Bengali<br/>to IPA", "alt":"Convert Bengali text to a very approximate IPA transcription.", "code":"doTranscription('toIPA')", "warning":"This only produces an APPROXIMATION to an IPA transcription. Use it as a base and refine it by hand."},

{"title":"Bengali to IPA", "alt":"Convert Bengali text to a very approximate IPA transcription.", "code":"doTranscription('transcription')", "warning":"This only produces an <em>approximation</em> to an IPA transcription. Use it as a base and refine it by hand."},

{"title":"Bengali to ISO", "alt":"Convert Bengali text to an ISO 15919 Latin transcription.", "code":"doTranscription('toISO')"},

//{"title":"ISO 15919<br/>to Bengali", "alt":"Convert ISO 15919 Latin transcription to Bengali.", "code":"doTranscription('toBeng')"},

{"title":"Bengali to Radice", "alt":"Convert Bengali text to the Latin transcription used by Radice.", "code":"doTranscription('toRadice')"},

//{"title":"Radice<br/>to Bengali", "alt":"Convert Radice Latin transcription to Bengali.", "code":"doTranscription('rtoBeng')"},
// THE FORMER ALL NEED UPDATING

//{"title":"Find vocab", "alt":"Search for examples containing the highlighted text", "code":"openVocabWindow('/scripts/bengali/bn_vocab')"},
]





var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'ISO'
    show.kbd = "Bengali"
    show.language = "Bengali"



var inputAids = [

{"title":"Type assist: Radice transcription to Bengali.", 
"desc":"Use a  mapping from the transcription used by Radice to type Bengali from the keyboard.",
"dataShortTitle":"Radice", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.radice);setUpTypeAssist(false, mapstring, mapstring)"
},

]



