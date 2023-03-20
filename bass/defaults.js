var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Bassah Vah WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'bsq' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Bassah Vah WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'bassPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Bassah Vah WF" ]

 
var template = {}
	template.title = 'Bassa Vah character app'
	template.sample = "𖫞𖫫𖫰 𖫐𖫭𖫱𖫐-𖫗𖫭𖫰𖫞𖫭𖫰 𖫑𖫫𖫱 𖫔𖫬𖫱𖫞𖫬𖫱𖫭𖫱𖫐-𖫕𖫭𖫰  𖫔𖫪𖫰𖫐𖫬𖫲𖫐, 𖫞𖫫𖫰𖫬𖫱 𖫕𖫨𖫲𖫐𖫪𖫳𖫐-𖫕𖫪𖫱 𖫒𖫫𖫰𖫭𖫰𖫐 𖫛𖫩𖫰𖫞𖫩𖫰𖫬𖫲 𖫔𖫬𖫰𖫭𖫱𖫐-𖫛𖫨𖫲𖫐𖫵"
	template.sampleSource = ''
	template.blocklocation= 'bass'  // block directory
	template.noteslocation = 'bass/bsq' // location of script notes
	template.vocablocation = 'bass/bsq_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'bass'
	template.scriptcode = 'Bass'
	template.fontLocale = 'bass'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Bassah Vah text to a Latin transliteration.", "code":"doTranscription('transliterate')"},


//{"title":"Make<br/>vocab", "alt":"Create an entry for a vocab file.", 

//"code":`_output=document.getElementById('output'); 
//input=replaceSlash(getHighlightedText(_output),'|').split('|'); 
//if (! hasHighlight(_output)) _output.value=''; 

//term = input[0];
//meaning = input[1];
//ipa = input[2]? input[2] : '';
//alt = input[3]? input[3] : '';
//notes = input[4]? input[4] : '';

//add(getVocabWithAlt(term, meaning, ipa, notes, alt));
//vocab2Example(getHighlightedText(document.getElementById('output')));
//_output.focus();`},
]



var pulldown = [

]







var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = ""
    show.language = "Bassa"


var inputAids = []


