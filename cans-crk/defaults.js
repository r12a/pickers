var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Canadian Aboriginal WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "35";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'crk' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Canadian Aboriginal WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'crkPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Plains Cree character app'
	template.sample = "ᐁᐏᐊᒋᒧᐢᑖᑕᑯᐠ ᐁᑭ ᐃᑖᐸᐦᑕᒫᐣ ᐁᐏᑕᒪᑯᐏᔭᕽ ᐁᑐᑫ ᑕᐣᓯ ᓂᑲᐣ ᐁᐏᐊᑕᔨᐢᐸᔨᐠ ᐊᓄᐦᐨ ᑭᒥᔭᐢᑲᒧᐸᔨᑭ ᐅᒪ ᑲᒥᔪᐢᑲᒥ ᐏᑭᑎᒪᑭᓇᑯᐏᓯᐤ ᐊᔨᓯᔨᓂᐤ ᐊᐦᐳ ᑲᑯᓯᐟ ᑭᑕᒥᔺᔭᐤ᙮"
	template.blocklocation= '/scripts/cans/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'cans-crk'
	template.scriptcode = 'Cans'



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Cree text to a Latin transliteration.", "code":"doTranscription('transliterate')"},


{"title":"Make<br/>vocab", "alt":"Expand to create a line for a vocab file.", "code":`_output=document.getElementById('output'); 
input=getHighlightedText(_output).split('|'); 
if (! hasHighlight(_output)) _output.value=''; 

ipa = transcribetoIPA(input[0]);
ipa = '';
latin = transcribetoLatin(input[0]);
notes = input[3]? input[3] : ''; 

if (ipa !== latin) ipa += ' (' + latin + ')';

add(getVocab(input[0], input[1], notes, ipa));
vocab2Example(getHighlightedText(document.getElementById('output')));
_output.focus();`},

]



var pulldown = [
{"title":"Transcribe<br>to IPA", "alt":"Convert Cree text to an approximate IPA transcription.", "code":"doTranscription('toIPA');"},

{"title":"Transcribe<br>to Latin", "alt":"Convert Cree text to the Latin orthography.", "code":"doTranscription('toLatin');"},

{"title":"Reverse transcription", "alt":"Convert Latin transliterated text to Cree.", "code":"transcribe(getHighlightedText(document.getElementById('output')), 'revTransliterate')"},

{"title":"Vocab to<br>Example", "alt":"Convert a vocab sequence to example markup.", "code":"vocab2Example(getHighlightedText(document.getElementById('output')))"},
]




var inputAids = [
{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Tifinagh from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},
]

