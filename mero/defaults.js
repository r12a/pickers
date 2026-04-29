var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Meroitic WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "30"; // vh height of text area
	factoryDefaults.lineheight = "1.4"; // line height of text area
	factoryDefaults.language = 'xmr' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Meroitic WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "32";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'xmrPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Meroitic WF" ]

// list of fonts to add to the standard selection
window.fontsuggestions =  
`Aegyptus`


var template = {}
	template.title = 'Meroitic'
	template.sample = `𐦥𐦣𐦯:𐦥𐦡𐦴𐦪𐦤𐦢𐦪𐦳𐦡𐦬𐦢:𐦳𐦫𐦢:𐦨𐦡𐦴𐦫𐦫𐦢𐦳𐦣:𐦴𐦨𐦡𐦤𐦡𐦳𐦣𐦥𐦢:𐦤𐦢𐦳𐦫𐦡𐦲𐦤𐦡:𐦵𐦫𐦢𐦲𐦡𐦬𐦢 𐦵𐦫𐦢𐦲𐦡𐦬𐦣𐦥𐦢𐦲 𐦷𐦢𐦡𐦫𐦤𐦡:𐦵𐦷𐦭𐦡𐦬𐦢 𐦵𐦷𐦭𐦡𐦬𐦣𐦥𐦢 𐦯𐦣𐦯𐦣𐦪𐦵𐦡𐦬𐦦 𐦤𐦡𐦴𐦨𐦷𐦡𐦬𐦣𐦥𐦢𐦭𐦫𐦧 𐦭𐦪𐦲𐦡𐦯𐦣𐦤𐦡 𐦤𐦡𐦴𐦨𐦷𐦡𐦬𐦣𐦥𐦢𐦧𐦡 𐦫𐦢𐦵:𐦠𐦷𐦦𐦡𐦢𐦯 𐦱𐦳𐦴𐦢𐦲𐦬𐦤𐦡 𐦴𐦨𐦷𐦡𐦬𐦣𐦥𐦢:`
	template.sampleSource = 'https://www.omniglot.com/writing/meroitic.htm'
	template.blocklocation= 'merc'  // block directory
	template.noteslocation = 'merc/xmr' // location of script notes
	template.vocablocation = 'merc/xmr_terms' // location of term database
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'template'
	template.scriptcode = 'Mero'
	template.fontLocale = "mero"
	template.hints = true
	template.bicameral = false

	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Meroitic text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]





var pulldown = [
/*
{"title":"Meroitic to IPA", "alt":"Convert Inuktitut text to an <em>approximate</em> IPA transcription.", "code":"doTranscription('toIPA')", "warning":"This only produces an <em>approximation</em> to an IPA transcription. Use it as a base and refine it by hand." },

{"title":"Meroitic to Latin", "alt":"Convert Inuktitut script text to the Latin orthography.", "code":"doTranscription('transcription')", "warning":"The result of this conversion needs to be checked for accuracy."},
*/
]






var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = ""
    show.language = "Meroitic"


var inputAids = []



