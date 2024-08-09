var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Nastaliq Urdu WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "220"; // px height of text area
	factoryDefaults.lineheight = "2"; // line height of text area
	factoryDefaults.language = 'skr' // language to use for examples
	factoryDefaults.uifont = 'Noto Nastaliq Urdu WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'skrPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Nastaliq Urdu WF", "Scheherazade WF" ]

// list of fonts to add to the standard selection
window.fontsuggestions =  
``


var template = {}
	template.title = 'Saraiki'
	template.sample = "سارے انسان ازادا تے حقوق تے عزت دے اعتبار نال ہکو ڄئے پیدا تھیندن ۔ قدرت ولوں انہاں کوں عقل تے سمجھ عطا تھیندی اے ۔ ہیں کیتے ہک ڋوجھے نال بھرپی داسلوک کرڻا چاہی دا اے ۔"
	template.sampleSource = 'http://efele.net/udhr/d/udhr_skr.html'
	template.blocklocation= 'arab'  // block directory
	template.noteslocation = 'arab/skr' // location of script notes
	template.vocablocation = 'arab/skr_vocab' // location of term database
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'arab-skr'
	template.scriptcode = 'Arab'
	template.fontLocale = "arab"
	template.hints = true
	template.bicameral = false

	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003'], ['IDSP','\u3000']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F'],  
	['RLM','\u200F'], ['LRM','\u200E'], ['ALM','\u061C']]
	template.moreKeys = [['RLI','\u2067'], ['LRI','\u2066'], ['FSI','\u2068'], 
	['PDI','\u2069'], ['RLO','\u202E'], ['LRO','\u202D'], ['PDF','\u202C'], 
	['CGJ','\u034F']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Saraiki text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]





var pulldown = [
//{"title":"Inuktitut to IPA", "alt":"Convert Inuktitut text to an <em>approximate</em> IPA transcription.", "code":"doTranscription('toIPA')", "warning":"This only produces an <em>approximation</em> to an IPA transcription. Use it as a base and refine it by hand." },

//{"title":"Inuktitut to Latin", "alt":"Convert Inuktitut script text to the Latin orthography.", "code":"doTranscription('transcription')", "warning":"The result of this conversion needs to be checked for accuracy."},
]






var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = ""
    show.language = "Sindhi"


var inputAids = []



