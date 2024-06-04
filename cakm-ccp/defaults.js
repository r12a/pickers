var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Chakma WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // line height of text area
	factoryDefaults.language = 'ccp' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Chakma WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'ccpPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Chakma WF" ]

// list of fonts to add to the standard selection
window.fontsuggestions =  
`RibengUni`


var template = {}
	template.title = 'Chakma'
	template.sample = "𑄝𑄬𑄇𑄴 𑄟𑄚𑄪𑄌𑄴 𑄚𑄨𑄢𑄨𑄞𑄨𑄣𑄨 𑄥𑄧𑄁 𑄃𑄨𑄌𑄴𑄎𑄮𑄖𑄴 𑄃𑄳𑄃 𑄃𑄇𑄴𑄇𑄥𑄁 𑄚𑄨𑄚𑄬𑄭 𑄎𑄧𑄚𑄴𑄟𑄚𑄴𑅁 𑄖𑄢𑄢𑄴 𑄃𑄬𑄘 𑄃𑄳𑄃 𑄝𑄪𑄖𑄴𑄙𑄨 𑄃𑄊𑄬; 𑄥𑄬𑄚𑄧𑄖𑄳𑄠𑄴 𑄝𑄬𑄇𑄴𑄅𑄚𑄧𑄢𑄴 𑄃𑄬𑄇𑄴𑄎𑄧𑄚𑄴 𑄃𑄢𑄬𑄇𑄴 𑄎𑄧𑄚𑄧𑄢𑄴 𑄛𑄳𑄢𑄧𑄖𑄨 𑄉𑄧𑄟𑄴 𑄘𑄮𑄣𑄴 𑄌𑄨𑄘𑄳𑄠𑄬 𑄚𑄨𑄚𑄬𑄭 𑄌𑄧𑄣𑄚 𑄅𑄪𑄌𑄨𑄖𑄴𑅁 "
	template.sampleSource = 'https://en.wikipedia.org/wiki/Chakma_language'
	template.blocklocation= 'cakm'  // block directory
	template.noteslocation = 'cakm/ccp' // location of script notes
	template.vocablocation = 'cakm/ccp_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'cakm'
	template.scriptcode = 'Cakm'
	template.fontLocale = "cakm"
	template.hints = true
	template.bicameral = true

	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Chakma text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
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
    show.language = "Chakma"


var inputAids = []



