var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Serif Ahom WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "30"; // vh height of text area
	factoryDefaults.lineheight = "2"; // line height of text area
	factoryDefaults.language = 'aho' // language to use for examples
	factoryDefaults.uifont = 'Noto Serif Ahom WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'ahomPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Serif Ahom WF" ]

// list of fonts to add to the standard selection
window.fontsuggestions =  
``


var template = {}
	template.title = 'Ahom'
	template.sample = "𑜊𑜦𑜧 𑜔𑜉𑜫𑜉𑜡 𑜑𑜦𑜧𑜄𑜤𑜆𑜫𑜆𑜘𑜈𑜡 𑜄𑜦𑜧𑜏𑜪 𑜑𑜦𑜧𑜄𑜪𑜤 𑜄𑜌𑜡𑜕𑜄𑜦𑜡 𑜒𑜡𑜑 𑜼 𑜄𑜦𑜧𑜏𑜐𑜫𑜋 𑜊𑜦𑜡 𑜃𑜣𑜍𑜦𑜡𑜔𑜦𑜡 𑜒𑜦𑜧𑜈𑜪 𑜈𑜡𑜓𑜣 𑜉𑜑𑜡𑜏𑜉𑜃𑜦𑜡 𑜽"
	template.sampleSource = 'Aksharamukha : Script Converter https://aksharamukha.appspot.com/describe/Ahom'
	template.blocklocation= 'ahom'  // block directory
	template.noteslocation = 'ahom/aho' // location of script notes
	template.vocablocation = 'ahom/aho_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'ahom'
	template.scriptcode = 'Ahom'
	template.fontLocale = "ahom"
	template.hints = true
	template.bicameral = true

	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Ahom text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]





var pulldown = [
/*
{"title":"Inuktitut to IPA", "alt":"Convert Inuktitut text to an <em>approximate</em> IPA transcription.", "code":"doTranscription('toIPA')", "warning":"This only produces an <em>approximation</em> to an IPA transcription. Use it as a base and refine it by hand." },

{"title":"Inuktitut to Latin", "alt":"Convert Inuktitut script text to the Latin orthography.", "code":"doTranscription('transcription')", "warning":"The result of this conversion needs to be checked for accuracy."},
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
    show.language = "Ahom"


var inputAids = []



