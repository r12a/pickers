var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Cham WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // line height of text area
	factoryDefaults.language = 'cjm' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Cham WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "◌";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'cjmPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Cham WF" ]


var template = {}
	template.title = 'Eastern Cham'
	template.sample = "ꨢꨯꨮ ꨖꩌꨠꨩ ꨨꨯꨮꨓꨭꩇꨚꨞꨥꨩ ꨓꨯꨮꨧꩌ ꨨꨯꨮꨓꨭꩌ ꨓꨔꨩꨈꨓꨯ ꨀꨩꨨ ꩝ ꨓꨯꨮꨧꩆꨌ ꨢꨯ ꨘꨪꨣꨯꨖꨯ ꨃꨥꩌ ꨥꨩꨕꨫ ꨠꨨꨩꨧꨠꨘꨯ ꩞"
	template.sampleSource = 'https://aksharamukha.appspot.com/describe/Cham'
	template.blocklocation= 'cham'  // block directory
	template.noteslocation = 'cham/cjm' // location of script notes
	template.vocablocation = 'cham/cjm_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'cham'
	template.scriptcode = 'Cham'
	template.fontLocale = "cjm"
	template.hints = true
	template.bicameral = false

	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Cham text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
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
    show.language = "Cham"


var inputAids = []





