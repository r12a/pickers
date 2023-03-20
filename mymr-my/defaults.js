var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Serif Myanmar WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "28";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "2.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'my' // language to use for examples
	factoryDefaults.uifont = 'Noto Serif Myanmar WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'burmesePicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Serif Myanmar WF", "Noto Sans Myanmar WF", "Myanmar3 WF", "Tharlon WF" ]


var template = {}
	template.title = 'Burmese character app'
	template.sample = "(၂) လူတိုင်းတွင် မိမိနေထိုင်ရာ တိုင်းပြည်မှ လည်းကောင်း၊ အခြားတိုင်းပြည်မှလည်းကောင်း ထွက်ခွာ သွားပိုင်ခွင့်ရှိသည့်အပြင်၊ မိမိ၏ တိုင်းပြည်သို့ ပြန်လာ ပိုင်ခွင့်လည်းရှိသည်။"
	template.sampleSource = ''
	template.blocklocation= 'mymr'  // block directory
	template.noteslocation = 'mymr/my' // location of script notes
	template.vocablocation = 'mymr/my_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'mymr-my'
	template.scriptcode = 'Mymr'
	template.fontLocale = 'mymr'
	template.hints = true
	
	template.defaultSpace = '\u200B'
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '\u103A'  // § key assignment
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['VIRAMA','\u1039']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Burmese text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
//{"title":"Reverse<br/>translit.", "alt":"Convert Latin transliteration back to Burmese.", "code":"doTranscription('reverse')"},
]



var pulldown = [
{"title":"Split syllables", "alt":"Split the text into syllables.", "code":"add(splitSyllables(getHighlightedText(document.getElementById('output')))); return false;"},

{"title":"Burmese to MLC", "alt":"Convert Burmese text to an MLC Latin transcription.", "code":"doTranscription('toMLC')", "warning":"The results should be checked for accuracy."},

{"title":"Burmese to IPA", "alt":"Convert Burmese text to an <em>approximate</em> IPA transcription.", "code":"doTranscription('toIPA')", "warning":"This only produces an <em>approximation</em> to an IPA transcription. Use it as a base and refine it by hand."},
]




var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'LOC'
    show.kbd = "Burmese"
    show.language = "Burmese"


var inputAids = [
{"title":"Mesher to Burmese", "dataVar":"showMesherTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"Mesher", "type":"palette", "initialCode":"setUpTypeAssist(false, mesherCharacterMap, mesherCharacterMap)", "desc":"Use ASCII characters to type Burmese from the keyboard via the transcription used in Mesher's book."},
]

