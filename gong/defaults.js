var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Gunjala Gondi WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "30"; // vh height of text area
	factoryDefaults.lineheight = "1.4"; // line height of text area
	factoryDefaults.language = 'gon' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Gunjala Gondi WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'gongPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Gunjala Gondi WF", "Narnoor WF" ]

// list of fonts to add to the standard selection
window.fontsuggestions =  
``


var template = {}
	template.title = 'Gunjala Gondi'
	template.sample = "𑵺𑶊 𑵳𑶓𑶂𑶗𑵸𑵵 𑵭𑶊𑵳𑶄 𑵠𑵭 𑵶𑶓𑶉𑶗𑵽𑶋𑵺 𑵰𑶈𑶍𑶄𑶗𑵰 𑵠𑵺𑶋 𑵠𑵭𑶐𑵺𑵵 𑵮𑶇𑶗𑵱𑶐 𑵰𑶊𑵬𑶗𑵰. 𑵶𑶋𑵬𑵺𑶗𑵳𑶍𑵺 𑶉𑶍𑵽𑶋 𑵱𑶋𑵬𑶗𑵭𑵱 𑵰𑶕𑵸𑶗𑵱𑶋𑵳𑶐, 𑵠𑵸 𑵺𑶌𑵱𑶍𑵺 𑵱𑶊𑵮𑶊𑶂𑶕𑵳. 𑵳𑶊𑵺 𑶅𑶐𑶈𑶗𑵰𑵳𑶐 𑶉𑶎𑶂𑶗𑵱𑶋𑵳𑶐 𑵠𑵸 𑵺𑶌𑵱𑶍𑵺 𑵮𑵻𑶋 𑵱𑶌𑶕𑵳. 𑶉𑵰𑶗𑵸𑶋𑵺𑵵 𑵰𑶍𑵱𑶐 𑵭𑶊𑵵𑶐 𑵶𑶋𑵬𑵺𑶐 𑵡𑶕𑵸𑶍."
	template.sampleSource = 'https://fonts.google.com/noto/specimen/Noto+Sans+Gunjala+Gondi'
	template.blocklocation= 'gong'  // block directory
	template.noteslocation = 'gong/wsg' // location of script notes
	template.vocablocation = 'gong/wsg_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'gong'
	template.scriptcode = 'Gong'
	template.fontLocale = "gong"
	template.hints = true
	template.bicameral = false

	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Gunjala Gondi text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]





var pulldown = [
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
    show.language = "Gunjala Gondi"


var inputAids = []



