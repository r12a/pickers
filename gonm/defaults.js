var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Masaram Gondi WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "30"; // vh height of text area
	factoryDefaults.lineheight = "1.4"; // line height of text area
	factoryDefaults.language = 'gon' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Masaram Gondi WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'gonmPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Masaram Gondi WF" ]

// list of fonts to add to the standard selection
window.fontsuggestions =  
``


var template = {}
	template.title = 'Masaram Gondi'
	template.sample = "𑴀𑴟𑴲𑴦𑴽𑴞𑴤𑵄 𑴀𑴟𑴴𑴛𑵅𑴠𑴱𑴝𑴤𑵄 𑴀𑴟𑴴𑴑𑵅𑴒𑴺𑴝𑴤𑵄 𑴀𑴩𑴱𑴩𑵅𑴨𑴛𑴤𑵄 । 𑴀𑴟𑴺𑴌𑴱𑵆𑴜𑴤𑵄 𑴀𑴟𑴱𑴟𑴱𑵆𑴜𑴤𑵄 𑴀𑴟𑴱𑴎𑴤𑴤𑵄 𑴀𑴟𑴲𑵆𑴎𑴤𑴤𑵄 ॥ 𑴥𑵁 𑴠𑵇𑴛𑴳𑴛𑵅𑴥𑴫𑴤𑴴𑴛𑵅𑴠𑴱𑴝𑵀 𑴠𑵇𑴠𑴕𑵅𑴑𑴽𑴠𑴩𑴤𑵀 𑴩𑴲𑴨𑴤𑵄 । 𑴝𑴺𑴩𑴥𑴱𑴤𑴱𑴫 𑴫𑵀𑴢𑴴𑴝𑵅𑴞𑴫𑵅𑴛𑵀 𑴨𑴟𑵅𑴝𑴺 𑴨𑴝𑴛𑴱𑵀 𑴨𑴦𑴤𑵄 ॥"
	template.sampleSource = 'https://aksharamukha.appspot.com/describe/MasaramGondi'
	template.blocklocation= 'gonm'  // block directory
	template.noteslocation = 'gonm/gon' // location of script notes
	template.vocablocation = 'gonm/gon_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'gonm'
	template.scriptcode = 'Gonm'
	template.fontLocale = "gonm"
	template.hints = true
	template.bicameral = false

	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Masaram Gondi text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]





var pulldown = [
{"title":"Devanagari to Gondi", "alt":"Roughly convert Devanagari text to an <em>approximate</em> Masaram Gondi transcription.", "code":"doTranscription('deva2gonm')", "warning":"This only produces an <em>approximation</em> to an IPA transcription. Use it as a base and refine it by hand." },
/*
{"title":"Inuktitut to IPA", "alt":"Convert Inuktitut text to an <em>approximate</em> IPA transcription.", "code":"doTranscription('toIPA')", "warning":"This only produces an <em>approximation</em> to an IPA transcription. Use it as a base and refine it by hand." },

{"title":"Inuktitut to Latin", "alt":"Convert Inuktitut script text to the Latin orthography.", "code":"doTranscription('transcription')", "warning":"The result of this conversion needs to be checked for accuracy."},
*/
]






var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = ""
    show.language = "Masaram Gondi"


var inputAids = []



