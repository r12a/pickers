globals.showTranslit =  ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false


window.charCheckerList = [
//{ wrong:"သြော်", right:"ဪ" },
//{ wrong:"သြ", right:"ဩ" },
]


// list of fonts to add to the standard selection
window.fontsuggestions =  
``


function localInitialise () {
	}



var _h = {
"2026": ["7F6", "7F7", "7E5", "7CC"],
"7D4": ["7C3", "7D37ED", "7D3"],
"7C3": ["7D37ED", "7D3", "7D4"],
"7D37ED": ["7D3", "7D4", "7C3"],
"7D3": ["7D4", "7C3", "7D37ED"],
"7E5": ["7D57ED", "7D5",  "7CC", "2026", "7F6"],
"7D57ED": ["7D5", "7E5"],
"7D5": ["7E5", "7D57ED"],
"7E4": ["7E3", "7C2", "7DE7EB", "7DE7ED", "7E47ED", "7DE"],
"7E3": ["7C2", "7DE7EB", "7DE7ED", "7E47ED", "7DE", "7E4"],
"7C2": ["7DE7EB", "7DE7ED", "7E47ED", "7DE", "7E4", "7E3"],
"7DE7EB": ["7DE7ED", "7E47ED", "7DE", "7E4", "7E3", "7C2"],
"7DE7ED": ["7E47ED", "7DE", "7E4", "7E3", "7C2", "7DE7EB"],
"7E47ED": ["7DE", "7E4", "7E3", "7C2", "7DE7EB", "7DE7ED"],
"7DE": ["7E4", "7E3", "7C2", "7DE7EB", "7DE7ED", "7E47ED"],
"7D87ED": ["7D8"],
"7D8": ["7D87ED"],
"7D67ED": ["7D67F3", "7D6"],
"7D67F3": ["7D6", "7D67ED"],
"7D6": ["7D67ED", "7D67F3"],
"7E1": ["7CD", "7C7", "7C8", "7DC7F3", "7DC7ED", "7DC7EB", "7E17ED", "7DC"],
"7CD": ["7C7", "7C8", "7DC7F3", "7DC7ED", "7DC7EB", "7E17ED", "7DC", "7E1"],
"7C7": ["7C8", "7DC7F3", "7DC7ED", "7DC7EB", "7E17ED", "7DC", "7E1", "7CD"],
"7C8": ["7DC7F3", "7DC7ED", "7DC7EB", "7E17ED", "7DC", "7E1", "7CD", "7C7"],
"7DC7F3": ["7DC7ED", "7DC7EB", "7E17ED", "7DC", "7E1", "7CD", "7C7", "7C8"],
"7DC7ED": ["7DC7EB", "7E17ED", "7DC", "7E1", "7CD", "7C7", "7C8", "7DC7F3"],
"7DC7EB": ["7E17ED", "7DC", "7E1", "7CD", "7C7", "7C8", "7DC7F3", "7DC7ED"],
"7E17ED": ["7DC", "7E1", "7CD", "7C7", "7C8", "7DC7F3", "7DC7ED", "7DC7EB"],
"7DC": ["7E1", "7CD", "7C7", "7C8", "7DC7F3", "7DC7ED", "7DC7EB", "7E17ED"],
"7DD7ED": ["7DD"],
"7DD": ["7DD7ED"],
"7CB": ["7CF", "7C0", "7DB7F3", "7DB7EB", "7DB7ED", "7CB7F3", "7DB"],
"7CF": ["7C0", "7DB7F3", "7DB7EB", "7DB7ED", "7CB7F3", "7DB", "7CB"],
"7C0": ["7DB7F3", "7DB7EB", "7DB7ED", "7CB7F3", "7DB", "7CB", "7CF"],
"7DB7F3": ["7DB7EB", "7DB7ED", "7CB7F3", "7DB", "7CB", "7CF", "7C0"],
"7DB7EB": ["7DB7ED", "7CB7F3", "7DB", "7CB", "7CF", "7C0", "7DB7F3"],
"7DB7ED": ["7CB7F3", "7DB", "7CB", "7CF", "7C0", "7DB7F3", "7DB7EB"],
"7CB7F3": ["7DB", "7CB", "7CF", "7C0", "7DB7F3", "7DB7EB", "7DB7ED"],
"7DB": ["7CB", "7CF", "7C0", "7DB7F3", "7DB7EB", "7DB7ED", "7CB7F3"],
"7E0": ["7D9", "7DA", "7C1", "7EA", "7D7", "7D97F3", "7D77ED", "7D97ED", "7CA7F3", "7CA"],
"7D9": ["7DA", "7C1", "7EA", "7D7", "7D97F3", "7D77ED", "7D97ED", "7CA7F3", "7CA", "7E0"],
"7DA": ["7C1", "7EA", "7D7", "7D97F3", "7D77ED", "7D97ED", "7CA7F3", "7CA", "7E0", "7D9",  "7CE7F3"],
"7C1": ["7EA", "7D7", "7D97F3", "7D77ED", "7D97ED", "7CA7F3", "7CA", "7E0", "7D9", "7DA"],
"7EA": ["7D7", "7D97F3", "7D77ED", "7D97ED", "7CA7F3", "7CA", "7E0", "7D9", "7DA", "7C1"],
"7D7": ["7D97F3", "7D77ED", "7D97ED", "7CA7F3", "7CA", "7E0", "7D9", "7DA", "7C1", "7EA"],
"7D97F3": ["7D77ED", "7D97ED", "7CA7F3", "7CA", "7E0", "7D9", "7DA", "7C1", "7EA", "7D7"],
"7D77ED": ["7D97ED", "7CA7F3", "7CA", "7E0", "7D9", "7DA", "7C1", "7EA", "7D7", "7D97F3"],
"7D97ED": ["7CA7F3", "7CA", "7E0", "7D9", "7DA", "7C1", "7EA", "7D7", "7D97F3", "7D77ED"],
"7CA7F3": ["7CA", "7E0", "7D9", "7DA", "7C1", "7EA", "7D7", "7D97F3", "7D77ED", "7D97ED"],
"7CA": ["7E0", "7D9", "7DA", "7C1", "7EA", "7D7", "7D97F3", "7D77ED", "7D97ED", "7CA7F3"],
"7E7": ["7E2", "7E27ED", "7E67ED", "7E6"],
"7E2": ["7E27ED", "7E67ED", "7E6", "7E7"],
"7E27ED": ["7E67ED", "7E6", "7E7", "7E2"],
"7E67ED": ["7E6", "7E7", "7E2", "7E27ED"],
"7E6": ["7E7", "7E2", "7E27ED", "7E67ED"],
"7D2": ["7C9", "7D0", "7DF7ED", "7DF"],
"7C9": ["7D0", "7DF7ED", "7DF", "7D2"],
"7D0": ["7DF7ED", "7DF", "7D2", "7C9"],
"7DF7ED": ["7DF", "7D2", "7C9", "7D0"],
"7DF": ["7D2", "7C9", "7D0", "7DF7ED"],
"7CE7F3": ["7CE", "7DA"],
"7CE": ["7DA", "7CE7F3"],
"7F6": ["7F7", "7E5", "7CC", "2026"],
"7F7": ["7E5", "7CC", "2026", "7F6"],
"7CC": ["2026", "7F6", "7F7", "7E5"],

end: {}
}




var keyboarddef = [
"§ ߑ ߬|1 ߁ ߹|2 ߂|3 ߃ ߰|4 ߄|5 ߅ ߳|6 ߆ ߮|7 ߇|8 ߈|9 ߉|0 ߀|-|=",
"q|w ߥ|e ߍ ߋ|r ߙ ߚ|t ߕ|y ߦ|u ߎ|i ߌ|o ߐ ߏ|p ߔ|[|]",
"a ߊ|s ߛ|d ߘ|f ߝ|g ߜ|h ߤ|j ߖ|k ߞ|l ߟ|;|'|\\",
"`|z|x|c ߗ|v|b ߓ|n ߣ ߒ|m ߡ|, ߸ ߱|. ߯|/ ߶"
]


/*
SHAPE LIST

ߓ ߔ ߃ ߓ߭
ߕ ߥ ߕ߭
ߞ ߤ ߣ ߂  ߞ߫ ߞ߭ ߤ߭
ߘ ߘ߭
ߖ ߖ߭ ߖ߳
ߜ ߡ ߍ ߇ ߈ ߜ߳ ߜ߭ ߜ߫ ߡ߭
ߝ ߝ߭
ߛ ߋ ߏ ߀ ߛ߳ ߛ߫ ߛ߭ ߋ߳
ߊ ߠ ߙ ߚ ߁ ߪ ߗ ߙ߳ ߗ߭ ߙ߭ ߊ߳
ߦ ߧ ߢ ߢ߭ ߦ߭
ߟ ߒ ߉ ߐ ߟ߭
ߎ ߚ ߎ߳
߶ ߷ ߥ ߌ
*/

