var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Osage WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'osa' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Osage WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'osagePicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Osage WF" ]


var template = {}
	template.title = 'Osage character app'
	template.sample = "𐒻𐓲𐓣𐓤𐓪 𐓰𐓘͘𐓤𐓘 𐓷𐓣͘ 𐓘𐓵𐓟 𐓘𐓬𐓘—𐓤𐓘𐓸𐓘 𐓤𐓯𐓣 𐓘𐓵𐓟 𐓘𐓬𐓘, 𐓪𐓬𐓸𐓘. 𐓏𐓟𐓲’𐓘 𐓷𐓣͘ 𐓣𐓵𐓘𐓬𐓟. 𐓏𐓘𐓲’𐓘 𐓘𐓤𐓸𐓘 “𐒼𐓪𐓰𐓘𐓡𐓘 𐓨𐓘𐓵𐓣͘,” 𐓘𐓤𐓸𐓘. 𐒻𐓲𐓣𐓤𐓪 𐓰𐓘͘𐓤𐓘 𐓘𐓬𐓘, “𐓍𐓣𐓟 𐓵𐓣𐓟 𐓤𐓪𐓰𐓘𐓡𐓘 𐓨𐓘𐓵𐓣͘ 𐓷𐓣𐓩𐓘͘𐓮𐓰𐓘 𐓰𐓛͘ 𐓨𐓣͘𐓤𐓯𐓟,” 𐒻𐓲𐓣𐓤𐓪 𐓰𐓘͘𐓤𐓘 𐓘𐓪𐓘 𐓟𐓤𐓣𐓟 𐓘𐓬𐓘."
	template.sampleSource = ''
	template.blocklocation= 'osge'  // block directory
	template.noteslocation = 'osge/osa' // location of script notes
	template.vocablocation = 'osge/osa_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'osge'
	template.scriptcode = 'Osge'
	template.fontLocale = 'osge'
	template.hints = true
	template.bicameral = true

	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '͘'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Osage text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Osage to IPA", "alt":"Convert Osage text to an <em>approximate</em> IPA transcription.", "code":"doTranscription('toIPA')", "warning":"This only produces an <em>approximation</em> to an IPA transcription. Use it as a base and refine it by hand." },
]




var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = "Osage"
    show.language = "Osage"


var inputAids = []
