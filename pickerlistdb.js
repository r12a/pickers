var plist = [
    { tag:'adlm', name:'Adlam', url:'adlm/' },
    { tag:'arab', name:'Arabic', url:'arab-ar/' },
    { tag:'arab', name:'Hausa', url:'arab-ha/' },
    { tag:'arab', name:'Kashmiri', url:'arab-ks/' },
    { tag:'arab', name:'Persian', url:'arab-fa/' },
    { tag:'arab', name:'Uighur', url:'arab-ug/' },
    { tag:'arab', name:'Urdu', url:'arab-ur/' },
    { tag:'arab', name:'Pan-African&nbsp;Arabic', url:'arab-afr/' },
    { tag:'arab', name:'All&nbsp;Arabic', url:'arab-all/' },
    { tag:'armi', name:'Aramaic', url:'armi/' },
    { tag:'armn', name:'Armenian', url:'armn/' },
    { tag:'bali', name:'Balinese', url:'bali/' },
    { tag:'bamu', name:'Bamum', url:'bamu/' },
    { tag:'bass', name:'Bassa Vah', url:'bass/' },
    { tag:'batk', name:'Batak', url:'batk/' },
    { tag:'beng', name:'Bengali', url:'beng/' },
    { tag:'bugi', name:'Buginese', url:'bugi/' },
    { tag:'buhd', name:'Buhid', url:'buhd/' },
    { tag:'cans', name:'Eastern Canadian Inuktitut', url:'cans-ike/' },
    { tag:'cans', name:'Plains Cree', url:'cans-crk/' },
    { tag:'cans', name:'All&nbsp;UCAS', url:'cans/' },
    { tag:'cher', name:'Cherokee', url:'cher/' },
    { tag:'cyrl', name:'Russian', url:'cyrl-ru/' },
    { tag:'cyrl', name:'All Cyrillic', url:'cyrl/' },
    { tag:'deva', name:'Hindi', url:'deva-hi/' },
    { tag:'deva', name:'Kashmiri', url:'deva-ks/' },
    { tag:'deva', name:'All Devanagari', url:'deva-all/' },
    { tag:'egyp', name:'Egyptian&nbsp;hieroglyphs', url:'egyptian/' },
    { tag:'elym', name:'Elymaic', url:'elym/' },
    { tag:'ethi', name:'All Ethiopic', url:'ethi/' },
    { tag:'geor', name:'Modern Georgian', url:'geor-ka/' },
    { tag:'geor', name:'Khutsuri', url:'geok-ka/' },
    { tag:'geor', name:'All Georgian', url:'geor-all/' },
    { tag:'glag', name:'Glagolitic', url:'glag/' },
    { tag:'glag', name:'Gothic', url:'goth/' },
    { tag:'grek', name:'Modern Greek', url:'grek/' },
    { tag:'gujr', name:'Gujarati', url:'gujr/' },
    { tag:'guru', name:'Gurmukhi', url:'guru/' },
    { tag:'hano', name:'Hanunoo', url:'hano/' },
    { tag:'hani', name:'Chinese', url:'hani/' },
    { tag:'hatr', name:'Hatran', url:'hatr/' },
    { tag:'hebr', name:'Hebrew', url:'hebr/' },
    { tag:'latn', name:'Latin&nbsp;&amp;&nbsp;diacritics', url:'latn-all/' },
    { tag:'latn', name:'Hausa', url:'latn-ha/' },
    { tag:'latn', name:'IPA&nbsp;standard&nbsp;chart', url:'ipa/' },
    { tag:'latn', name:'IPA&nbsp;by&nbsp;place', url:'ipa2/' },
    { tag:'latn', name:'IPA&nbsp;by&nbsp;type', url:'ipa3/' },
    { tag:'jpan', name:'Japanese', url:'jpan/' },
    { tag:'java', name:'Javanese', url:'java/' },
    { tag:'khmr', name:'Khmer', url:'khmr/' },
    { tag:'laoo', name:'Lao', url:'lao/' },
    { tag:'lana', name:'Northern&nbsp;Thai', url:'lana-nod/' },
    { tag:'lana', name:'Tai&nbsp;Khün', url:'lana-kkh/' },
    { tag:'latn', name:'Old&nbsp;English', url:'latn-ang/' },
    { tag:'latn', name:'Old&nbsp;Norse', url:'latn-non/' },
    { tag:'latn', name:'Tłı̨chǫ&nbsp;(Dogrib)', url:'latn-dgr/' },
    { tag:'latn', name:'Vietnamese', url:'latn-vi/' },
    { tag:'latn', name:'Pan-African Latin', url:'latn-afr/' },
    { tag:'lisu', name:'Lisu (Fraser script)', url:'lisu/' },
    { tag:'lyci', name:'Lycian', url:'lyci/' },
    { tag:'lydi', name:'Lydian', url:'lydi/' },
    { tag:'maka', name:'Makasar', url:'maka/' },
    { tag:'mlym', name:'Malayalam', url:'mlym/' },
    { tag:'mand', name:'Mandaic', url:'mand/' },
    { tag:'mend', name:'Mende Kikakui', url:'mend/' },
    { tag:'mong', name:'Mongolian', url:'mong-mn/' },
    { tag:'mymr', name:'Burmese', url:'mymr-my/' },
    { tag:'mymr', name:'Shan', url:'mymr-shn/' },
    { tag:'nbat', name:'Nabataean', url:'nbat/' },
    { tag:'newa', name:'Newa', url:'newa/' },
    { tag:'nkoo', name:"N'Ko", url:'nko/' },
    { tag:'olck', name:'Santali', url:'olck/' },
    { tag:'orya', name:'Odia (Oriya)', url:'orya/' },
    { tag:'osge', name:'Osage', url:'osge/' },
    { tag:'palm', name:'Palmyrene', url:'palm/' },
    { tag:'phli', name:'Pahlavi', url:'phli/' },
    { tag:'plrd', name:'All&nbsp;Miao&nbsp;(Pollard)', url:'plrd/' },
    { tag:'plrd', name:'A-Hmao', url:'plrd-hmd/' },
    { tag:'prti', name:'Parthian', url:'prti/' },
    { tag:'phnx', name:'Phoenician', url:'phnx/' },
    { tag:'rjng', name:'Rejang', url:'rjng/' },
    { tag:'rohg', name:'Hanifi Rohingya', url:'rohg/' },
    { tag:'runr', name:'All Runic', url:'runr/' },
    { tag:'runr', name:'Anglo-Saxon Runes', url:'runr-ang/' },
    { tag:'talu', name:'New&nbsp;Tai&nbsp;Lue', url:'talu/' },
    { tag:'sinh', name:'Sinhala', url:'sinh/' },
    { tag:'sund', name:'Sundanese', url:'sund/' },
    { tag:'syrc', name:'Assyrian&nbsp;Neo-Aramaic', url:'syrc-aii/' },
    { tag:'syrc', name:'Syriac', url:'syrc/' },
    { tag:'syrc', name:'Turoyo', url:'syrc-tru/' },
    { tag:'tagb', name:'Tagbanwa', url:'tagb/' },
    { tag:'tale', name:'Tai&nbsp;Le', url:'tale/' },
    { tag:'tavt', name:'Tai&nbsp;Viet', url:'tavt/' },
    { tag:'taml', name:'Tamil', url:'taml/' },
    { tag:'telu', name:'Telugu', url:'telu/' },
    { tag:'tfng', name:'Neo-tifinagh', url:'tfng-ber/' },
    { tag:'tfng', name:'All Tifinagh ', url:'tfng-all/' },
    { tag:'thaa', name:'Thaana', url:'thaa/' },
    { tag:'thai', name:'Thai', url:'thai/' },
    { tag:'tibt', name:'Tibetan', url:'tibt/' },
    { tag:'ugar', name:'Ugaritic', url:'ugar/' },
    { tag:'vaii', name:'Vai', url:'vai/' },
    { tag:'yezi', name:'Yezidi', url:'yezi' },
]



var plistByRegion = {
	'A':[
			['Adlam', 'adlm/'],
			['<i>Arabic</i>','arab-all/'],
				['['],
				['Modern Standard', 'arab-ar/'],
				['Pan-African', 'arab-afr/'],
				[']'],
			['Aramaic (Imperial)','armi/'],
			['Armenian','armn/'],
			['Assyrian&nbsp;Neo-Aramaic', 'syrc-aii/'],
			],
	'B':[
			['Balinese', 'bali/'],
			['Bamum', 'bamu/'],
			['Bassa Vah', 'bass/'],
			['Batak', 'batk/'],
			['Bengali', 'beng/'],
			['Buginese', 'bugi/'],
			['Buhid', 'buhd/'],
			['Burmese', 'mymr-my/'],
			],
	'C':[
			['Cherokee', 'cher/'],
			['Chinese', 'hani/'],
			['Cree (Plains)', 'cans-crk/'],
			['<i>Cyrillic</i>','cyrl-all'],
				['['],
				['Russian', 'cyrl-ru/'],
				[']'],
			],
	'D':[
			['<i>Devanagari</i>', 'deva-all/'],
				['['],
				['Hindi', 'deva-hi/'],
				['Kashmiri', 'deva-ks/'],
				[']'],
				],
	'E':[
			['Egyptian&nbsp;hieroglyphs', 'egyptian/'],
			['Elymaic', 'elym/'],
			['<i>Ethiopic</i>', 'ethi/'],
			  ],
	'G':[
			['<i>Georgian</i>', 'geor-all/'],
				['['],
				['Modern', 'geor-ka/'],
				['Khutsuri', 'geok-ka/'],
				[']'],
			['Glagolitic', 'glag/'],
			['Gothic', 'goth/'],
			['Greek (Modern)', 'grek/'],
			['Gujarati', 'gujr/'],
			['Gurmukhi', 'guru/'],
			],
	'H':[
			['Hanifi Rohingya', 'rohg/'],
			['Hanunoo', 'hano/'],
			['Hatran', 'hatr/'],
			['• <i>Hausa</i> ['],
				['Arabic','arab-ha/'],
				['Boko', 'latn-ha/'],
				[']'],
			['Hebrew', 'hebr/'],
			['Hindi', 'deva-hi/'],
			],
	'I':[
			['Inuktitut (Eastern Canadian)', 'cans-ike/'],
			['IPA', 'ipa/'],
			['IPA2', 'ipa2/'],
			['IPA3', 'ipa3/'],
			],
	'J':[
			['Japanese', 'jpan/'],
			['Javanese', 'java/'],
			],
	'K':[
			['<i>Kashmiri</i> ['],
				['Arabic','arab-ks/'],
				['Devanagari', 'deva-ks/'],
				[']'],
			['Khmer', 'khmr/'],
			['Khutsuri', 'geok-ka/'],
			],
	'L':[
			['Lao', 'lao/'],
			['<i>Latin & diacritics</i>','latn-all/'],
				['['],
				['Pan-African','latn-afr/'],
				[']'],
			['Lisu (Fraser script)', 'lisu/'],
			['Lycian', 'lyci/'],
			['Lydian', 'lydi/'],
			],
	'M':[
			['Makasar', 'maka/'],
			['Malayalam', 'mlym/'],
			['Mandaic', 'mand/'],
			['Mende Kikakui', 'mend/'],
			['Mongolian (Halh)', 'mong-mn/'],
			['• <i>Myanmar</i> ['],
				['Burmese', 'mymr-my/'],
				['Shan', 'mymr-shn/'],
				[']'],
			['<i>Miao</i>','plrd-all/'],
				['['],
				['A-Hmao','plrd-hmd/'],
				[']'],
			],
	'N':[
			['Nabataean', 'nbat/'],
			['N’Ko', 'nko/'],
			['Neo-tifinagh', 'tfng-ber/'],
			['New&nbsp;Tai&nbsp;Lü', 'talu/'],
			['Newa', 'newa/'],
			['Northern&nbsp;Thai', 'lana-nod/'],
			],
	'O':[
			['Odia (Oriya)', 'orya/'],
			['Ol Chiki', 'olck/'],
			['Old English', 'latn-ang/'],
			['Old Norse', 'latn-non/'],
			['Osage', 'osge/'],
			],
	'P':[
			['Palmyrene', 'palm/'],
			['Persian','arab-fa/'],
			['Phoenician', 'phnx/'],
			['Pahlavi', 'phli/'],
			['Parthian', 'prti/'],
			['Pollard&nbsp;script', 'plrd-all/'],
			],
	'R':[
			['Rejang', 'rjng/'],
			['Rohingya (Hanifi)', 'rohg/'],
			['<i>Runic</i>','runr/'],
				['['],
				['Anglo-Saxon Runes','runr-ang/'],
				[']'],
			['Russian', 'cyrl-ru/'],
			],
	'S':[
			['Santali', 'olck/'],
			['Shan', 'mymr-shn/'],
			['Sinhala', 'sinh/'],
			['Sundanese', 'sund/'],
			['• <i>Syriac</i> ['],
				['Syriac', 'syrc/'],
				['Assyrian&nbsp;Neo-Aramaic', 'syrc-aii/'],
				['Turoyo', 'syrc-tru/'],
				[']'],
			],
	'T':[
			['Tagbanwa', 'tagb/'],
			['Tai&nbsp;Le', 'tale/'],
			['Tai&nbsp;Khün', 'lana-kkh/'],
			['• <i>Tai Tham</i> ['],
				['Northern&nbsp;Thai', 'lana-nod/'],
				['Tai&nbsp;Khün', 'lana-kkh/'],
				[']'],
			['Tai&nbsp;Viet', 'tavt/'],
			['Tamil', 'taml/'],
			['Telugu', 'telu/'],
			['Thaana/Dhivehi', 'thaa/'],
			['Thai', 'thai/'],
			['Tibetan', 'tibt/'],
			['<i>Tifinagh</i>', 'tfng-all/'],
				['['],
				['Neo-tifinagh', 'tfng-ber/'],
				[']'],
			['Tłı̨chǫ&nbsp;(Dogrib)', 'latn-dgr/'],
			['Turoyo', 'syrc-tru/'],
			],
	'U':[
			['<i>UCAS</i>', 'cans/'],
				['['],
				['Eastern Canadian Inuktitut', 'cans-ike/'],
				['Plains Cree', 'cans-crk/'],
				[']'],
			['Ugaritic', 'ugar/'],
			['Uighur','arab-ug/'],
			['Urdu','arab-ur/'],
			],
	'V':[
			['Vai', 'vai/'],
			['Vietnamese', 'latn-vi/'],
			],
	'Y':[
			['Yezidi', 'yezi/'],
			],
	}
