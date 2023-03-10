var plist = [
    { tag:'adlm', name:'Adlam', url:'adlm/index.html' },
    { tag:'arab', name:'Arabic', url:'arab-ar/index.html' },
    { tag:'arab', name:'Hausa', url:'arab-ha/index.html' },
    { tag:'arab', name:'Kashmiri', url:'arab-ks/index.html' },
    { tag:'arab', name:'Persian', url:'arab-fa/index.html' },
    { tag:'arab', name:'Uighur', url:'arab-ug/index.html' },
    { tag:'arab', name:'Urdu', url:'arab-ur/index.html' },
    { tag:'arab', name:'Pan-African&nbsp;Arabic', url:'arab-afr/index.html' },
    { tag:'arab', name:'All&nbsp;Arabic', url:'arab-all/index.html' },
    { tag:'armi', name:'Aramaic', url:'armi/index.html' },
    { tag:'armn', name:'Armenian', url:'armn/index.html' },
    { tag:'bali', name:'Balinese', url:'bali/index.html' },
    { tag:'bamu', name:'Bamum', url:'bamu/index.html' },
    { tag:'bass', name:'Bassa Vah', url:'bass/index.html' },
    { tag:'batk', name:'Batak', url:'batk/index.html' },
    { tag:'beng', name:'Bengali', url:'beng/index.html' },
    { tag:'bugi', name:'Buginese', url:'bugi/index.html' },
    { tag:'buhd', name:'Buhid', url:'buhd/index.html' },
    { tag:'cans', name:'Eastern Canadian Inuktitut', url:'cans-ike/index.html' },
    { tag:'cans', name:'Plains Cree', url:'cans-crk/index.html' },
    { tag:'cans', name:'All&nbsp;UCAS', url:'cans/index.html' },
    { tag:'cher', name:'Cherokee', url:'cher/index.html' },
    { tag:'cyrl', name:'Mongolian', url:'cyrl-mn/index.html' },
    { tag:'cyrl', name:'Russian', url:'cyrl-ru/index.html' },
    { tag:'cyrl', name:'Ukrainian', url:'cyrl-uk/index.html' },
    { tag:'cyrl', name:'All Cyrillic', url:'cyrl-all/index.html' },
    { tag:'deva', name:'Hindi', url:'deva-hi/index.html' },
    { tag:'deva', name:'Kashmiri', url:'deva-ks/index.html' },
    { tag:'deva', name:'All Devanagari', url:'deva-all/index.html' },
    { tag:'egyp', name:'Egyptian&nbsp;hieroglyphs', url:'egyptian/index.html' },
    { tag:'elym', name:'Elymaic', url:'elym/index.html' },
    { tag:'ethi', name:'All Ethiopic', url:'ethi/index.html' },
    { tag:'ethi', name:'Amharic', url:'ethi-am/index.html' },
    { tag:'geor', name:'Modern Georgian', url:'geor-ka/index.html' },
    { tag:'geor', name:'Khutsuri', url:'geok-ka/index.html' },
    { tag:'geor', name:'All Georgian', url:'geor-all/index.html' },
    { tag:'glag', name:'Glagolitic', url:'glag/index.html' },
    { tag:'goth', name:'Gothic', url:'goth/index.html' },
    { tag:'grek', name:'Modern Greek', url:'grek/index.html' },
    { tag:'gujr', name:'Gujarati', url:'gujr/index.html' },
    { tag:'guru', name:'Gurmukhi', url:'guru/index.html' },
    { tag:'hano', name:'Hanunoo', url:'hano/index.html' },
    { tag:'hani', name:'Chinese', url:'hani/index.html' },
    { tag:'hatr', name:'Hatran', url:'hatr/index.html' },
    { tag:'hebr', name:'Hebrew', url:'hebr/index.html' },
    { tag:'jpan', name:'Japanese', url:'jpan/index.html' },
    { tag:'java', name:'Javanese', url:'java/index.html' },
    { tag:'kali', name:'Kayah Li', url:'kali/index.html' },
    { tag:'khmr', name:'Khmer', url:'khmr/index.html' },
    { tag:'laoo', name:'Lao', url:'lao/index.html' },
    { tag:'lana', name:'Northern&nbsp;Thai', url:'lana-nod/index.html' },
    { tag:'lana', name:'Tai&nbsp;Khün', url:'lana-kkh/index.html' },
    { tag:'latn', name:'Latin&nbsp;&amp;&nbsp;diacritics', url:'latn-all/index.html' },
    { tag:'latn', name:'Bamanan', url:'latn-bm/index.html' },
    { tag:'latn', name:'Fula', url:'latn-ff/index.html' },
    { tag:'latn', name:'Hausa', url:'latn-ha/index.html' },
    { tag:'latn', name:'IPA&nbsp;standard&nbsp;chart', url:'ipa/index.html' },
    { tag:'latn', name:'IPA&nbsp;by&nbsp;place', url:'ipa2/index.html' },
    { tag:'latn', name:'IPA&nbsp;by&nbsp;type', url:'ipa3/index.html' },
    { tag:'latn', name:'Old&nbsp;English', url:'latn-ang/index.html' },
    { tag:'latn', name:'Old&nbsp;Norse', url:'latn-non/index.html' },
    { tag:'latn', name:'Tłı̨chǫ&nbsp;(Dogrib)', url:'latn-dgr/index.html' },
    { tag:'latn', name:'Vietnamese', url:'latn-vi/index.html' },
    { tag:'latn', name:'Vietnamese', url:'latn-vi/index.html' },
    { tag:'latn', name:'Wolof', url:'latn-wo/index.html' },
    { tag:'limb', name:'Limbu', url:'limb-lif/index.html' },
    { tag:'lisu', name:'Lisu (Fraser script)', url:'lisu/index.html' },
    { tag:'lyci', name:'Lycian', url:'lyci/index.html' },
    { tag:'lydi', name:'Lydian', url:'lydi/index.html' },
    { tag:'maka', name:'Makasar', url:'maka/index.html' },
    { tag:'mlym', name:'Malayalam', url:'mlym/index.html' },
    { tag:'mand', name:'Mandaic', url:'mand/index.html' },
    { tag:'mend', name:'Mende Kikakui', url:'mend/index.html' },
    { tag:'mong', name:'Mongolian', url:'mong-mn/index.html' },
    { tag:'mymr', name:'Burmese', url:'mymr-my/index.html' },
    { tag:'mymr', name:'Shan', url:'mymr-shn/index.html' },
    { tag:'nbat', name:'Nabataean', url:'nbat/index.html' },
    { tag:'newa', name:'Newa', url:'newa/index.html' },
    { tag:'nkoo', name:"N'Ko", url:'nko/index.html' },
    { tag:'olck', name:'Santali', url:'olck/index.html' },
    { tag:'orya', name:'Odia (Oriya)', url:'orya/index.html' },
    { tag:'osge', name:'Osage', url:'osge/index.html' },
    { tag:'palm', name:'Palmyrene', url:'palm/index.html' },
    { tag:'phli', name:'Pahlavi', url:'phli/index.html' },
    { tag:'plrd', name:'All&nbsp;Miao&nbsp;(Pollard)', url:'plrd/index.html' },
    { tag:'plrd', name:'A-Hmao', url:'plrd-hmd/index.html' },
    { tag:'prti', name:'Parthian', url:'prti/index.html' },
    { tag:'phnx', name:'Phoenician', url:'phnx/index.html' },
    { tag:'rjng', name:'Rejang', url:'rjng/index.html' },
    { tag:'rohg', name:'Hanifi Rohingya', url:'rohg/index.html' },
    { tag:'runr', name:'All Runic', url:'runr/index.html' },
    { tag:'runr', name:'Anglo-Saxon Runes', url:'runr-ang/index.html' },
    { tag:'talu', name:'New&nbsp;Tai&nbsp;Lue', url:'talu/index.html' },
    { tag:'sinh', name:'Sinhala', url:'sinh/index.html' },
    { tag:'sund', name:'Sundanese', url:'sund/index.html' },
    { tag:'sunu', name:'Sunuwar', url:'sunu-suz/index.html' },
    { tag:'syrc', name:'Assyrian&nbsp;Neo-Aramaic', url:'syrc-aii/index.html' },
    { tag:'syrc', name:'Syriac', url:'syrc/index.html' },
    { tag:'syrc', name:'Turoyo', url:'syrc-tru/index.html' },
    { tag:'tagb', name:'Tagbanwa', url:'tagb/index.html' },
    { tag:'tale', name:'Tai&nbsp;Le', url:'tale/index.html' },
    { tag:'tavt', name:'Tai&nbsp;Viet', url:'tavt/index.html' },
    { tag:'taml', name:'Tamil', url:'taml/index.html' },
    { tag:'telu', name:'Telugu', url:'telu/index.html' },
    { tag:'tfng', name:'Neo-tifinagh', url:'tfng-zgh/index.html' },
    { tag:'tfng', name:'All Tifinagh ', url:'tfng-all/index.html' },
    { tag:'thaa', name:'Thaana', url:'thaa/index.html' },
    { tag:'thai', name:'Thai', url:'thai/index.html' },
    { tag:'tibt', name:'Tibetan', url:'tibt/index.html' },
    { tag:'ugar', name:'Ugaritic', url:'ugar/index.html' },
    { tag:'vaii', name:'Vai', url:'vai/index.html' },
    { tag:'yezi', name:'Yezidi', url:'yezi' },
]



var plistByRegion = {
	'A':[
			['Adlam', 'adlm/index.html'],
			['A-Hmao','plrd-hmd/index.html'],
			['Amharic','ethi-am/index.html'],
			['• <i>Arabic</i> ['],
				['All', 'arab-all/index.html'],
				['Modern Standard', 'arab-ar/index.html'],
				['Pan-African', 'arab-afr/index.html'],
				['Hausa', 'arab-ha/index.html'],
				['Kashmiri', 'arab-ks/index.html'],
				['Persian', 'arab-fa/index.html'],
				['Uighur', 'arab-ug/index.html'],
				['Urdu', 'arab-ur/index.html'],
				[']'],
			['Aramaic (Imperial)','armi/index.html'],
			['Armenian','armn/index.html'],
			['Assyrian&nbsp;Neo-Aramaic', 'syrc-aii/index.html'],
			],
	'B':[
			['Balinese', 'bali/index.html'],
			['Bamanan', 'latn-bm/index.html'],
			['Bamum', 'bamu/index.html'],
			['Bassa Vah', 'bass/index.html'],
			['Batak', 'batk/index.html'],
			['Bengali', 'beng/index.html'],
			['Buginese', 'bugi/index.html'],
			['Buhid', 'buhd/index.html'],
			['Burmese', 'mymr-my/index.html'],
			],
	'C':[
			['Cherokee', 'cher/index.html'],
			['Chinese', 'hani/index.html'],
			['Cree (Plains)', 'cans-crk/index.html'],
			['• <i>Cyrillic</i> ['],
				['All', 'cyrl-all/index.html'],
				['Mongolian', 'cyrl-mn/index.html'],
				['Russian', 'cyrl-ru/index.html'],
				['Ukrainian', 'cyrl-uk/index.html'],
				[']'],
			],
	'D':[
			['<i>Devanagari</i> ['],
				['All', 'deva-all/index.html'],
				['Hindi', 'deva-hi/index.html'],
				['Kashmiri', 'deva-ks/index.html'],
				[']'],
			['Dhivehi', 'thaa/index.html'],
			['Dogrib', 'latn-dgr/index.html'],
			],
	'E':[
			['Egyptian&nbsp;hieroglyphs', 'egyptian/index.html'],
			['Elymaic', 'elym/index.html'],
			['• <i>Ethiopic</i> ['],
				['All', 'ethi/index.html'],
				['Amharic', 'ethi-am/index.html'],
				[']'],
			  ],
	'F':[
			['Fraser script', 'lisu/index.html'],
			['Fula', 'latn-ff/index.html'],
			],
	'G':[
			['<i>Georgian</i> ['],
				['All', 'geor-all/index.html'],
				['Modern', 'geor-ka/index.html'],
				['Khutsuri', 'geok-ka/index.html'],
				[']'],
			['Glagolitic', 'glag/index.html'],
			['Gothic', 'goth/index.html'],
			['Greek (Modern)', 'grek/index.html'],
			['Gujarati', 'gujr/index.html'],
			['Gurmukhi', 'guru/index.html'],
			],
	'H':[
			['Hanifi Rohingya', 'rohg/index.html'],
			['Hanunoo', 'hano/index.html'],
			['Hatran', 'hatr/index.html'],
			['• <i>Hausa</i> ['],
				['Arabic','arab-ha/index.html'],
				['Boko', 'latn-ha/index.html'],
				[']'],
			['Hebrew', 'hebr/index.html'],
			['Hindi', 'deva-hi/index.html'],
			],
	'I':[
			['Inuktitut (Eastern Canadian)', 'cans-ike/index.html'],
			['IPA', 'ipa/index.html'],
			['IPA2', 'ipa2/index.html'],
			['IPA3', 'ipa3/index.html'],
			],
	'J':[
			['Japanese', 'jpan/index.html'],
			['Javanese', 'java/index.html'],
			],
	'K':[
			['<i>Kashmiri</i> ['],
				['Arabic','arab-ks/index.html'],
				['Devanagari', 'deva-ks/index.html'],
				[']'],
			['Kayah Li', 'kali/index.html'],
			['Khmer', 'khmr/index.html'],
			['Khutsuri', 'geok-ka/index.html'],
			],
	'L':[
			['<i>Lanna</i> ['],
				['Northern&nbsp;Thai', 'lana-nod/index.html'],
				['Tai&nbsp;Khün', 'lana-kkh/index.html'],
				[']'],
			['Lao', 'lao/index.html'],
			['• <i>Latin</i> ['],
				['All Latin & diacritics','latn-all/index.html'],
				['Pan-African','latn-afr/index.html'],
				['Bamanan','latn-bm/index.html'],
				['Fula','latn-ff/index.html'],
				['Hausa','latn-ha/index.html'],
				['Old English','latn-ang/index.html'],
				['Old Norse','latn-non/index.html'],
				['Tłı̨chǫ','latn-dgr/index.html'],
				['Vietnamese','latn-vi/index.html'],
				['Wolof','latn-wo/index.html'],
				[']'],
			['Limbu', 'limb-lif/index.html'],
			['Lisu (Fraser script)', 'lisu/index.html'],
			['Lycian', 'lyci/index.html'],
			['Lydian', 'lydi/index.html'],
			],
	'M':[
			['Makasar', 'maka/index.html'],
			['Malayalam', 'mlym/index.html'],
			['Mandaic', 'mand/index.html'],
			['Mende Kikakui', 'mend/index.html'],
			['• <i>Mongolian (Halh)</i> ['],
				['Cyrl', 'cyrl-mn/index.html'],
				['Mong', 'mong-mn/index.html'],
				[']'],
			['• <i>Myanmar</i> ['],
				['Burmese', 'mymr-my/index.html'],
				['Shan', 'mymr-shn/index.html'],
				[']'],
			['• <i>Miao</i> ['],
				['All','plrd-all/index.html'],
				['A-Hmao','plrd-hmd/index.html'],
				[']'],
			],
	'N':[
			['Nabataean', 'nbat/index.html'],
			['N’Ko', 'nko/index.html'],
			['Neo-tifinagh', 'tfng-ber/index.html'],
			['New&nbsp;Tai&nbsp;Lü', 'talu/index.html'],
			['Newa', 'newa/index.html'],
			['Northern&nbsp;Thai', 'lana-nod/index.html'],
			],
	'O':[
			['Odia (Oriya)', 'orya/index.html'],
			['Ol Chiki', 'olck/index.html'],
			['Old English', 'latn-ang/index.html'],
			['Old Norse', 'latn-non/index.html'],
			['Osage', 'osge/index.html'],
			],
	'P':[
			['Palmyrene', 'palm/index.html'],
			['Persian','arab-fa/index.html'],
			['Phoenician', 'phnx/index.html'],
			['Pahlavi', 'phli/index.html'],
			['Parthian', 'prti/index.html'],
			['• <i>Pollard&nbsp;script</i> ['],
				['All','plrd-all/index.html'],
				['A-Hmao','plrd-hmd/index.html'],
				[']'],
			],
	'R':[
			['Rejang', 'rjng/index.html'],
			['Rohingya (Hanifi)', 'rohg/index.html'],
			['• <i>Runic</i> ['],
				['All','runr/index.html'],
				['Anglo-Saxon','runr-ang/index.html'],
				['Tolkien','runr-en/index.html'],
				[']'],
			['Russian', 'cyrl-ru/index.html'],
			],
	'S':[
			['Santali', 'olck/index.html'],
			['Shan', 'mymr-shn/index.html'],
			['Sinhala', 'sinh/index.html'],
			['Sundanese', 'sund/index.html'],
			['Sunuwar', 'sunu-suz/index.html'],
			['• <i>Syriac</i> ['],
				['Syriac', 'syrc/index.html'],
				['Assyrian&nbsp;Neo-Aramaic', 'syrc-aii/index.html'],
				['Turoyo', 'syrc-tru/index.html'],
				[']'],
			],
	'T':[
			['Tagbanwa', 'tagb/index.html'],
			['Tai&nbsp;Le', 'tale/index.html'],
			['Tai&nbsp;Khün', 'lana-kkh/index.html'],
			['• <i>Tai Tham</i> ['],
				['Northern&nbsp;Thai', 'lana-nod/index.html'],
				['Tai&nbsp;Khün', 'lana-kkh/index.html'],
				[']'],
			['Tai&nbsp;Viet', 'tavt/index.html'],
			['Tamil', 'taml/index.html'],
			['Telugu', 'telu/index.html'],
			['Thaana', 'thaa/index.html'],
			['Thai', 'thai/index.html'],
			['Tibetan', 'tibt/index.html'],
			['• <i>Tifinagh</i> ['],
				['All', 'tfng-all/index.html'],
				['Neo-tifinagh', 'tfng-zgh/index.html'],
				[']'],
			['Tłı̨chǫ&nbsp;(Dogrib)', 'latn-dgr/index.html'],
			['Turoyo', 'syrc-tru/index.html'],
			],
	'U':[
			['<i>UCAS</i> ['],
				['All', 'cans/index.html'],
				['Eastern Canadian Inuktitut', 'cans-ike/index.html'],
				['Plains Cree', 'cans-crk/index.html'],
				[']'],
			['Ugaritic', 'ugar/index.html'],
			['Uighur','arab-ug/index.html'],
			['Ukrainian', 'cyrl-uk/index.html'],
			['Urdu','arab-ur/index.html'],
			],
	'V':[
			['Vai', 'vai/index.html'],
			['Vietnamese', 'latn-vi/index.html'],
			],
	'W':[
			['<i>Wolof</i> ['],
				['Latin', 'latn-wo/index.html'],
				['Garay', 'gara-wo/index.html'],
				[']'],
			],
	'Y':[
			['Yezidi', 'yezi/index.html'],
			],
	}
