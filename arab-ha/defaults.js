var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Alkalami WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "50";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "2"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ha' // language to use for examples
	factoryDefaults.uifont = 'Alkalami Light WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "32";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'hausaaPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Hausa (ajami) character app'
	template.sample = "رَایُوَا بَبَّنْ رَبُو نَا ، غُنْ مَسَاٻِى دُونْ شِدَیْنَا ، تَرْسَشِنْ أَیْكِى نَ ٻَرْنَا ، فَیْ دَ ٻُویٜ سِڟَیْدَ سُنَّا ، شِبِ أَللَّهْ بَادَكَنْغَرَا بَا"
	template.sampleSource = 'A verse from Aljiyu Namangi, Imfiraji, Part 3 (Verse 3), Omniglot http://www.omniglot.com/writing/hausa.htm'
    template.blocklocation= '/scripts/arabic/block'  // blocklocation to use for examples
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'hausaa'
	template.scriptcode = 'Arab'
	template.cursive = true




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert ajami text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
{"title":"Transl<br/>++", "alt":"Convert ajami text to a latin transliteration with vowels and other changes.", "code":"doTranscription('translitPlus')"},
]



var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Hausa text.", "code":"doTranscription('revTransliterate')"},
]







var inputAids = [
{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character"},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"makePalette(''); window.latinOnly=false;makeKbdEventList(translitCharacterMap);", "desc":"Use ASCII characters to type Hausa from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"window.latinOnly=true;makePalette(justLatinMap);makeKbdEventList(justLatinMap);", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(translitCharacterMap);makeKbdEventList(translitCharacterMap);", "desc":"Use ASCII characters to type Hausa from the keyboard via reverse transliteration."},
]

