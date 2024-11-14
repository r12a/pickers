var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Kanchenjunga WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // line height of text area
	factoryDefaults.language = 'bap' // language to use for examples
	factoryDefaults.uifont = 'Kanchenjunga WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'kraiPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Kanchenjunga WF" ]

// list of fonts to add to the standard selection
window.fontsuggestions =  
``


var template = {}
	template.title = 'Kirat Rai'
	template.sample = "𖵢𖵣𖵈𖵜𖵀𖵛𖵤 𖵃𖵑𖵥𖵖𖵣𖵃𖵩 𖵃𖵢𖵣𖵈𖵞𖵣𖵅𖵤𖵛 𖵛𖵤𖵖𖵫𖵝𖵩𖵆𖵬𖵜𖵣𖵈-𖵔𖵣𖵞𖵤𖵠𖵣𖵃𖵩 𖵃𖵩 𖵝𖵥𖵗𖵞𖵣𖵔𖵣 𖵙𖵧𖵈𖵟𖵣-𖵙𖵥𖵠𖵥𖵢𖵩𖵖 𖵢𖵩𖵈𖵅𖵣𖵛𖵔𖵣 𖵜𖵈𖵅𖵣𖵖 𖵖𖵈 𖵃𖵧𖵖𖵅𖵣𖵛𖵉𖵤 𖵗𖵩𖵜𖵣𖵄𖵞𖵣 𖵛𖵥𖵛𖵣𖵅𖵣𖵝𖵫𖵛𖵣𖵃𖵩 𖵠𖵣𖵖𖵀 𖵔𖵥𖵈𖵔𖵣 𖵉𖵥𖵈𖵢𖵣𖵈-𖵛𖵣 𖵛𖵥𖵛𖵣 𖵞𖵤𖵠𖵣𖵃𖵩 𖵜𖵣𖵃𖵣𖵃𖵮"
	template.sampleSource = 'https://sikkim.gov.in/uploads/SikkimHerald/Kirat_Rai_Herald-_40_0_20241030.pdf p1'
	template.blocklocation= 'krai'  // block directory
	template.noteslocation = 'krai/bap' // location of script notes
	template.vocablocation = 'krai/bap_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'krai'
	template.scriptcode = 'krai'
	template.fontLocale = "krai"
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

	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert XXXX text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]





var pulldown = [
{"title":"Inuktitut to IPA", "alt":"Convert Inuktitut text to an <em>approximate</em> IPA transcription.", "code":"doTranscription('toIPA')", "warning":"This only produces an <em>approximation</em> to an IPA transcription. Use it as a base and refine it by hand." },

{"title":"Inuktitut to Latin", "alt":"Convert Inuktitut script text to the Latin orthography.", "code":"doTranscription('transcription')", "warning":"The result of this conversion needs to be checked for accuracy."},
]






var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = ""
    show.language = "Inuktitut"


var inputAids = []



