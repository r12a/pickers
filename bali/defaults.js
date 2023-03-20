var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Vimala WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "2"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ban' // language to use for examples
	factoryDefaults.uifont = 'Vimala WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'balinesePicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Vimala WF", "Aksara Bali WF", "Noto Serif Balinese WF", "Noto Sans Balinese WF" ]


var template = {}
	template.title = 'Balinese character app'
	template.sample = "ᬫᬓᬲᬫᬶᬫᬦᬸᬲᬦᬾᬓᬳᭂᬫ᭄ᬩᬲᬶᬦ᭄ᬫᬳᬃᬤᬶᬓᬮᬦ᭄ᬧᬢᭂᬄᬲᬚ᭄ᬭᭀᬦᬶᬂᬓᬳᬦᬦ᭄ᬮᬦ᭄ᬓ᭄ᬯᬲ᭟"
	template.sampleSource = ''
	template.blocklocation= 'bali'  // block directory
	template.noteslocation = 'bali/ban' // location of script notes
	template.vocablocation = 'bali/ban_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'bali'
	template.scriptcode = 'Bali'
	template.fontLocale = 'bali'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '\u1B44'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Balinese text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},

]



var pulldown = [
{"title":"Make vocab", "alt":"Create an entry for a vocab file.", 

"code":`_output=document.getElementById('output'); 
input=replaceSlash(getHighlightedText(_output),'|').split('|'); 
if (! hasHighlight(_output)) _output.value=''; 

term = input[0];
meaning = input[1];
ipa = input[2]? input[2] : '';
alt = input[3]? input[3] : '';
notes = input[4]? input[4] : '';

add(getVocabWithAlt(term, meaning, ipa, notes, alt));
vocab2Example(getHighlightedText(document.getElementById('output')));
_output.focus();`},

{"title":"Balinese to LOC", "alt":"Convert Balinese text to a Library of Congress Latin transcription.", "code":"doTranscription('toLatin')"},
]






var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'LOC'
    show.kbd = "Balinese"
    show.language = "Balinese"


var inputAids = []



