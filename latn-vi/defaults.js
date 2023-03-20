var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Doulos SIL WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'vi' // language to use for examples
	factoryDefaults.uifont = 'Doulos SIL WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "" // type of hint to show alongside characters in the grids


var thisPicker = 'vietnamesePicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Doulos SIL WF" ]


var template = {}
	template.title = 'Vietnamese character app'
	template.sample = "2. Mọi người đều có quyền rời khỏi bất cứ nước nào, kể cả nước mình, cũng như có quyền trở về nước mình."
	template.sampleSource = ''
	template.blocklocation= 'latn'  // block directory
	template.noteslocation = '' // location of script notes
	template.vocablocation = '' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'latn-vi'
	template.scriptcode = 'Latn'
	template.fontLocale = 'latn'
	template.hints = false
	template.bicameral = true

	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]




var controls = [
]



var pulldown = [
{"title":"North Việt to IPA", "alt":"Convert North Vietnamese text to an <em>approximate</em> IPA transcription.", "code":"doTranscription('toIPAN')", "warning":"This only produces an <em>approximation</em> to an IPA transcription. Use it as a base and refine it by hand."},

{"title":"South Việt to IPA", "alt":"Convert South Vietnamese text to an <em>approximate</em> IPA transcription.", "code":"doTranscription('toIPAS')", "warning":"This only produces an <em>approximation</em> to an IPA transcription. Use it as a base and refine it by hand."},
]








var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = false
    show.default = true
    show.latin = 'Latin'
    show.ipa = false
    show.transc = ''
    show.kbd = "Vietnamese"
    show.language = "Vietnamese"


// North V IPA doesn't work !


var inputAids = [
{"title":"Type assist: IPA to South Vietnamese.", 
"desc":"Use an IPA keyboard mapping to type the southern Vietnamese dialect from the keyboard.",
"dataShortTitle":"South", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: IPA to North Vietnamese.", 
"desc":"Use an IPA keyboard mapping to type the northern Vietnamese dialect from the keyboard.",
"dataShortTitle":"North", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
},
]
