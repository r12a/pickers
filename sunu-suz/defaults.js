var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Sunuwar WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'suz' // language to use for examples
	factoryDefaults.uifont = 'Sunuwar WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'sunuPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Sunuwar WF" ]


var template = {}
	template.title = 'Sunuwar'
	template.sample = "𑯃:𑯄𑯃 𑯊𑯂𑯁𑯘𑯃, 𑯆𑯑̍𑯃̃𑯌𑯖 𑯎𑯖𑯍𑯖𑯎𑯑𑯒𑯃 𑯘𑯖𑯐𑯑 𑯀𑯂̃:𑯜𑯑 𑯅𑯁𑯘𑯃 𑯒𑯖𑯄𑯊𑯃 𑯘𑯖𑯐𑯑 𑯇𑯂. 𑯇𑯂 𑯇𑯑𑯀𑯂 𑯆𑯑̍𑯃̃𑯌𑯇𑯃 𑯎𑯂𑯠𑯜𑯑𑯍𑯑𑯐𑯂 𑯔𑯖𑯎𑯐𑯂𑯆𑯖𑯐𑯃 𑯒𑯖𑯄𑯊𑯃𑯘𑯖𑯐𑯑 𑯒𑯑𑯃𑯍𑯃𑯇𑯃."
	template.sampleSource = 'https://www.devkumarsunuwar.com.np/iwsadmin/imagine-filemanager/uploads/media/Hamso_Katik%202078%20(Final).pdf'
	template.blocklocation= 'sunu'  // block directory
	template.noteslocation = 'sunu/suz' // location of script notes
	template.vocablocation = 'sunu/suz_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'sunu-suz'
	template.scriptcode = 'Sunu'
	template.fontLocale = 'sunu-suz'
	template.hints = true
	template.bicameral = false

	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Sunuwar text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]




var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = "Mukdum"
    show.language = "Sunuwar"


var inputAids = []




var pulldown = [
]

