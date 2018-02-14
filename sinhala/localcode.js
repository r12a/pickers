globals.showTransPanel =  ''
globals.showShapeLookup =  ''


function localInitialise () {
	}



var _h = {

end: {}
}


var keyboarddef = [
"§|1|2|3|4|5|6|7|8|9|0|-|=",
"q ු ූ|w අ උ|e ැ ෑ ඇ|r ර ඍ|t එ ඔ ඓ|y හ ශ|u ම ඹ|i ස ෂ|o ද ධ|p ච ඡ|[ ඤ ඥ|] ; :",
"a ් ෟ ේ|s ි ී|d ා ෘ ආ|f ෙ ෆ ෛ|g ට ඨ|h ය ්‍ය|j ව ළු|k න ණ|l ක ඛ|; ත ථ|' . ,|\\ ්‍",
"` ්‍ර ර්‍|z ' \"|x ං ඞ|c ජ ඣ|v ඩ ඪ|b ඉ ඊ|n බ භ|m ප ඵ|, ල ළ|. ග ඝ|/"
]

var keyboardUC = [
"§|1|2|3|4|5|6|7|8|9|0|-|=",
"q|w|e|r|t උ|y|u|i|o|p|[|]",
"a ඒ ඌ ඖ|s|d ො ඎ ෲ|f|g|h|j|k|l|;|'|\\",
"`|z|x|c|v|b|n|m|,|.|/"
]


function event_toggleKbdShift () {
    if (this.classList.contains('shiftKeyOn')) {
        makeKeyboard(keyboarddef, keyboardLCGuide)
        }
    else makeKeyboard(keyboardUC, keyboardUCGuide)
    }
