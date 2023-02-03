globals.showTranslit =  ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false


window.charCheckerList = [
//{ wrong:"xxx", right:"xxx" },
{ wrong:"ੲੀ", right:"ਈ" },
{ wrong:"ੲਿ", right:"ਇ" },
{ wrong:"ੲੇ", right:"ਏ" },
{ wrong:"ੳੂ", right:"ਊ" },
{ wrong:"ੳੁ", right:"ਉ" },
{ wrong:"ਅੈ", right:"ਐ" },
{ wrong:"ਅੌ", right:"ਔ" },
{ wrong:"ਅਾ", right:"ਆ" },

{ wrong:"\u0A5E", right:"ਫ਼" },
{ wrong:"\u0A5B", right:"ਜ਼" },
{ wrong:"\u0A36", right:"ਸ਼" },
{ wrong:"\u0A59", right:"ਖ਼" },
{ wrong:"\u0A5A", right:"ਗ਼" },
{ wrong:"\u0A33", right:"ਲ਼" },

{ wrong:"ੁੁ", right:"ੂ" },
]





// list of fonts to add to the standard selection
window.fontsuggestions =  
``


function localInitialise () {

	}



var _h = {
"A05": ['A06','A10','A14','A18'],
"A06": ['A05','A10','A14','A18'],
"A07": ['A08','A0F','A72','A1D','A23'],
"A08": ['A07','A0F','A72','A1D','A23'],
"A09": ['A0A','A13','A73'],
"A0A": ['A09','A13','A73'],
"A0F": ['A08','A07','A72','A1D','A23'],
"A10": ['A06','A05','A14','A18'],
"A13": ['A0A','A09','A73','A74'],
"A14": ['A06','A10','A05','A18'],
"A15": ['A2D'],
"A16": ['A2A','A59','A25','A27','A16A3C'],
"A16A3C": ['A16','A59','A2A','A27'],
"A17": ['A17A3C','A5A','A39'],
"A17A3C": ['A17','A5A','A39'],
"A18": ['A06','A10','A14','A05'],
"A19": ["A1B"],
"A1A": ['A22','A30','A39'],
"A1C": ['A5B','A1CA3C'],
"A1CA3C": ['A5B','A1C'],
"A1D": ['A1E'],
"A1E": ['A1D','A35'],
"A20": ["A30","A28"],
"A21": ["A5C"],
"A22": ["A26","A1A","A2B","A5E","A2BA3C"],
"A23": ["A0F"],
"A24": ['A69'],
"A25": ['A16','A59','A2A','A27','A16A3C'],
"A26": ['A22','A1A'],
"A27": ['A16','A59','A25','A2A','A16A3C'],
"A28": ['A20'],
"A2A": ['A16','A59','A25','A27','A16A3C'],
"A2B": ['A5E','A22','A2BA3C'],
"A2BA3C": ['A5E','A22','A2B'],
"A2C": ['A72','A0F'],
"A2D": ['A15'],
"A2E": ['A36','A38','A38A3C'],
"A2F": ['A27'],
"A30": ['A39','A1A','A20','A17'],
"A32": ['A33','A32A3C'],
"A32A3C": ['A33','A32'],
"A33": ['A32A3C','A32'],
"A35": ['A1E','A1D'],
"A36": ['A38','A2E'],
"A38": ['A36','A2E','A38A3C'],
"A38A3C": ['A36','A2E','A38'],
"A39": ['A30','A1A','A17'],
"A59": ['A16','A2A','A25','A27','A16A3C'],
"A5A": ['A17A3C','A17','A39'],
"A5B": ['A1C','A1CA3C'],
"A5C": ['A21','A69'],
"A5E": ['A2B','A2BA3C','A22'],
"A6B": ['A2A','A2E'],
"A6C": ['A69'],
"A6E": ['A6F'],
"A6F": ['A6E'],
"A69": ['A21','A2D','A6E'],
"A72": ['A08','A0F','A07','A1D','A23'],
"A73": ['A0A','A13','A09'],
"A74": ['A09','A73','A13'],


end: {}
}


var keyboarddef = [
"§|1 ੧ ੳ|2 ੨ ੲ|3 ੩ ੍ਰ|4 ੪ ਖ਼|5 ੫ ਗ਼|6 ੬ ਜ਼|7 ੭ ਫ਼|8 ੮|9 ੯ (|0 ੦ )|- - ਃ|= ੱ ਁ",
"q ੌ ਔ|w ੈ ਐ|e ਾ ਆ|r ੀ ਈ|t ੂ ਊ|y ਬ ਭ|u ਹ ਙ|i ਗ ਘ|o ਦ ਧ|p ਜ ਝ|[ ਡ ਢ|] ਼ ਞ",
"a ੋ ਓ|s ੇ ਏ|d ੍ ਅ|f ਿ ਇ|g ੁ ਉ|h ਪ ਫ|j ਰ ੜ|k ਕ ਖ|l ਤ ਥ|; ਚ ਛ|' ਟ ਠ|\\ ੜ",
"` ੑ ੵ|z ੜ ੜ੍ਹ|x ਂ ੰ|c ਮ ਣ|v ਨ ੴ|b ਵ|n ਲ ਲ਼|m ਸ ਸ਼|, , ॥|. . ।|/ ਯ"
]

