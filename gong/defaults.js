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
	template.sample = "𑵮𑵺𑶋 𑵭𑶌𑶉 𑶅𑶊𑵵𑶐 𑶅𑶋𑶉𑵺 𑵽𑶊𑵭 𑵺𑵶𑶍𑶂 𑵮𑶍𑶂𑶋𑵬𑵺 𑵮𑶎𑵳𑶋𑵳𑶐 𑵮𑶊𑵮𑵺𑵶 𑵳𑶐𑵸 𑵡𑶀𑶋 𑵱𑶐𑵳𑶋𑵸𑶊𑶈𑵺𑶐 𑶉𑶊𑶐𑶂𑶋𑵳𑵬𑶊𑶐 𑵬𑶐𑵭 𑵮𑶊𑶐 𑵸𑵺 𑵰𑶎𑶈 𑵱𑶊𑵵𑶋 𑶇𑶊𑶈𑶐 𑶉𑶊𑵬 𑶉𑶌𑵺𑶐𑵱𑶐 𑵮𑶍𑶈𑵰𑶊𑶐𑶂𑶋 𑵮𑵳𑵳𑶐 𑶀𑵱𑶍𑶉𑵺 𑵶𑶊𑵽𑶊𑶐 𑵰𑶊𑶐𑶉 𑶇𑶋𑵱𑶐𑶅𑶈𑶊𑶐𑵺𑵶 𑵱𑶂𑶋𑵳 𑵱𑶊𑵱𑵺 𑵰𑶋𑵬𑶂"
	template.sampleSource = 'https://software.sil.org/downloads/r/narnoor/Narnoor-Font-Sample.pdf'
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



