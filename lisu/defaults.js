var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Lisu WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'lis' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Lisu WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'lisuPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Lisu WF" ]


var template = {}
	template.title = 'Lisu character app'
	//template.sample = "ꓠꓬꓲꓻꓠꓬꓲ ꓣꓳꓽꓡꓲꓢꓴ ꓫꓵꓽꓐꓴ ꓒꓵꓽꓒꓽ ꓐꓴꓣꓱꓽˍꓔꓬˍꓟ ꓢꓽꓚꓻ ꓛꓲꓻꓐꓶꓻꓔꓯꓸꓣꓱꓽꓐˍꓡˍꓠꓼꓟ꓾ ꓞꓳꓻꓡꓯꓸ ꓐꓴˍꓶꓻꓙꓳˍꓡꓳ꓿ꓟꓬꓽꓠꓬꓲ ꓕꓲꓽꓐꓱꓻꓟˍꓠꓬ꓾"
	template.sample = "ꓞꓳ ꓘꓹ ꓠꓯꓹꓼ ꓢꓲ ꓫꓬ ꓟ ꓙ ꓖꓴ ꓗꓪ ꓟꓬꓱꓽ ꓧꓳꓽ ꓢꓴ ꓠꓬ꓾ ꓞꓳ ꓘꓹ ꓗꓪ ꓟ ꓞꓳ ꓟ ꓐꓴ ꓔꓯ ꓮ ꓡꓲ ꓬꓰ ꓠꓯꓹ ꓟ꓾ ꓟꓬꓱꓽ ꓔꓯ ꓧꓳꓽ ꓪꓴꓸ ꓟꓴ ꓢꓴ ꓬꓲ ꓜꓴꓻ ꓤ (Committee) ꓕꓲ ꓜꓴꓻ ꓢꓲꓺ ꓖꓶ ꓠꓯꓹ ꓡꓳ꓿"
	template.sampleSource = 'http://www.evertype.com/standards/iso10646/pdf/fraser-sample.pdf'
	template.blocklocation= 'lisu'  // block directory
	template.noteslocation = '' // location of script notes
	template.vocablocation = '' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'lisu'
	template.scriptcode = 'Lisu'
	template.fontLocale = 'lisu'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003'], ['IDSP','\u3000']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Lisu text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Translit+", "alt":"Convert to a Latin transliteration but then apply additional phonetic transformations.", "code":"doTranscription('translitplus')", "warning":"Adds IPA tone markers. No inherent vowel added."},
]





var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = "Lisu"
    show.language = "Lisu"


var inputAids = []

