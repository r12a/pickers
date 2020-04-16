var plist = [
    { tag:'adlm', name:'Adlam', url:'adlm/' },
    { tag:'arab', name:'Arabic', url:'arabic/' },
    { tag:'arab', name:'All&nbsp;Arabic', url:'arabicblock/' },
    { tag:'syrc', name:'Assyrian&nbsp;Neo-Aramaic', url:'syrc-aii/' },
    { tag:'armn', name:'Armenian', url:'armenian/' },
    { tag:'bali', name:'Balinese', url:'balinese/' },
    { tag:'bass', name:'Bassa Vah', url:'bass/' },
    { tag:'beng', name:'Bengali', url:'bengali/' },
    { tag:'bugi', name:'Buginese', url:'buginese/' },
    { tag:'mymr', name:'Burmese', url:'burmese/' },
    { tag:'cher', name:'Cherokee', url:'cherokee/' },
    { tag:'hani', name:'Chinese', url:'hani/' },
    { tag:'cyrl', name:'All Cyrillic', url:'cyrillic/' },
    { tag:'deva', name:'All Devanagari', url:'devanagari/' },
    { tag:'egyp', name:'Egyptian&nbsp;hieroglyphs', url:'egyptian/' },
    { tag:'ethi', name:'All Ethiopic', url:'ethiopic/' },
    { tag:'geor', name:'Georgian', url:'geor-ka/' },
    { tag:'geor', name:'Khutsuri', url:'geok-ka/' },
    { tag:'geor', name:'All Georgian', url:'georgian/' },
    { tag:'grek', name:'Modern Greek', url:'greek/' },
    { tag:'gujr', name:'Gujarati', url:'gujarati/' },
    { tag:'guru', name:'Gurmukhi', url:'gurmukhi/' },
    { tag:'arab', name:'Hausa (ajami)', url:'arab-ha/' },
    { tag:'latn', name:'Hausa (boko)', url:'latn-ha/' },
    { tag:'hebr', name:'Hebrew', url:'hebrew/' },
    { tag:'deva', name:'Hindi', url:'deva-hi/' },
    { tag:'latn', name:'IPA', url:'ipa/' },
    { tag:'latn', name:'IPA&nbsp;2', url:'ipa2/' },
    { tag:'latn', name:'IPA&nbsp;3', url:'ipa3/' },
    { tag:'jpan', name:'Japanese', url:'jpan/' },
    { tag:'java', name:'Javanese', url:'javanese/' },
    { tag:'deva', name:'Kashmiri&nbsp;(deva)', url:'deva-ks/' },
    { tag:'arab', name:'Kashmiri&nbsp;(arab)', url:'arab-ks/' },
    { tag:'khmr', name:'Khmer', url:'khmer/' },
    { tag:'laoo', name:'Lao', url:'lao/' },
    { tag:'latn', name:'Latin&nbsp;&amp;&nbsp;diacritics', url:'latin/' },
    { tag:'lisu', name:'Lisu (Fraser script)', url:'lisu/' },
    { tag:'maka', name:'Makasar', url:'makasar/' },
    { tag:'mlym', name:'Malayalam', url:'malayalam/' },
    { tag:'mand', name:'Mandaic', url:'mandaic/' },
    { tag:'mong', name:'Mongolian', url:'mongolian/' },
    { tag:'tfng', name:'Neo-tifinagh', url:'neotifinagh/' },
    { tag:'talu', name:'New&nbsp;Tai&nbsp;Lue', url:'newtailue/' },
    { tag:'nkoo', name:"N'Ko", url:'nko/' },
    { tag:'lana', name:'Northern&nbsp;Thai', url:'lana-nod/' },
    { tag:'latn', name:'Old&nbsp;English', url:'oldenglish/' },
    { tag:'latn', name:'Old&nbsp;Norse', url:'oldnorse/' },
    { tag:'latn', name:'Pan-African Latin', url:'latn-afr/' },
    { tag:'arab', name:'Pan-African Ajami', url:'arab-afr/' },
    { tag:'arab', name:'Persian', url:'persian/' },
    { tag:'runr', name:'Runic', url:'runic/' },
    { tag:'cyrl', name:'Russian', url:'russian/' },
    { tag:'mymr', name:'Shan', url:'shan/' },
    { tag:'sinh', name:'Sinhala', url:'sinhala/' },
    { tag:'sund', name:'Sundanese', url:'sundanese/' },
    { tag:'syrc', name:'Syriac', url:'syriac/' },
    { tag:'lana', name:'Tai&nbsp;Khün', url:'lana-kkh/' },
    { tag:'tale', name:'Tai&nbsp;Le', url:'taile/' },
    { tag:'tavt', name:'Tai&nbsp;Viet', url:'taiviet/' },
    { tag:'taml', name:'Tamil', url:'tamil/' },
    { tag:'telu', name:'Telugu', url:'telu/' },
    { tag:'thaa', name:'Thaana', url:'thaana/' },
    { tag:'thai', name:'Thai', url:'thai/' },
    { tag:'tibt', name:'Tibetan', url:'tibetan/' },
    { tag:'tfng', name:'All Tifinagh ', url:'tifinagh/' },
    { tag:'latn', name:'Tłı̨chǫ&nbsp;(Dogrib)', url:'tlicho/' },
    { tag:'syrc', name:'Turoyo', url:'syrc-tru/' },
    { tag:'arab', name:'Uighur', url:'uighur/' },
    { tag:'arab', name:'Urdu', url:'arab-ur/' },
    { tag:'vaii', name:'Vai', url:'vai/' },
    { tag:'latn', name:'Vietnamese', url:'vietnamese/' },
]



var plistByRegion = {
	'Africa':[
			  ['Adlam', 'adlm/'],
			  ['Bassa Vah', 'bass/'],
			  ['Egyptian&nbsp;hieroglyphs', 'egyptian/'],
			  ['All Ethiopic', 'ethiopic/'],
			  ['Hausa (boko)', 'latn-ha/'],
			  ['Hausa (ajami)', 'arab-ha/'],
			  ["N’Ko", 'nko/'],
			  ['Neo-tifinagh', 'neotifinagh/'],
			  ['Pan-African&nbsp;Latin', 'latn-afr/'],
			  ['Pan-African&nbsp;Ajami', 'arab-afr/'],
			  ['All Tifinagh', 'tifinagh/'],
			  ['Vai', 'vai/']
			  ],
	'Europe':[
			  ['Armenian','armenian/'],
			  ['All Cyrillic', 'cyrillic/'],
			  ['Georgian', 'geor-ka/'],
			  ['Khutsuri', 'geok-ka/'],
			  ['All Georgian', 'georgian/'],
			  ['Modern Greek', 'greek/'],
			  ['IPA', 'ipa/'],
			  ['IPA&nbsp;2', 'ipa2/'],
			  ['IPA&nbsp;3', 'ipa3/'],
			  ['Latin&nbsp;&amp;&nbsp;diacritics', 'latin/'],
			  ['Old&nbsp;English', 'oldenglish/'],
			  ['Old&nbsp;Norse', 'oldnorse/'],
			  ['Runic', 'runic/'],
			  ['Russian', 'russian/'],
			  ],
	'West&nbsp;Asia':[
			  ['Arabic','arabic/'],
			  ['All Arabic','arabicblock/'],
			  ['Assyrian&nbsp;Neo-Aramaic', 'syrc-aii/'],
			  ['Hebrew', 'hebrew/'],
			  ['Mandaic', 'mandaic/'],
			  ['Persian', 'persian/'],
			  ['Turoyo', 'syrc-tru/'],
			  ['Syriac', 'syriac/']
			  ],
	'Central&nbsp;Asia':[
			  ['Tibetan', 'tibetan/'],
			  ['Uighur', 'uighur/']
			  ],
	'East&nbsp;Asia':[
			    ['Chinese', 'hani/'],
			    ['Japanese', 'jpan/'],
			    ['Lisu (Fraser script)', 'lisu/'],
			    ['Mongolian', 'mongolian/']
			    ],
	'South&nbsp;Asia':[
			  ['Bengali', 'bengali/'],
			  ['All Devanagari', 'devanagari/'],
			  ['Gujarati', 'gujarati/'],
			  ['Gurmukhi', 'gurmukhi/'],
			  ['Hindi', 'deva-hi/'],
			  ['Kashmiri&nbsp;(arab)', 'arab-ks/'],
			  ['Kashmiri&nbsp;(deva)', 'deva-ks/'],
			  ['Malayalam', 'malayalam'],
			  ['Sinhala', 'sinhala/'],
			  ['Tamil', 'tamil/'],
			  ['Telugu', 'telu/'],
			  ['Thaana/Dhivehi', 'thaana/'],
			  ['Urdu', 'arab-ur/']
			  ],
	'SE&nbsp;Asia':[
			   ['Burmese', 'burmese/'],
			   ['Khmer', 'khmer/'],
			   ['Lao', 'lao/'],
			   ['New&nbsp;Tai&nbsp;Lü', 'newtailue/'],
			   ['Northern&nbsp;Thai', 'lana-nod/'],
			   ['Shan', 'shan/'],
			   ['Tai&nbsp;Khün', 'lana-kkh/'],
			   ['Tai&nbsp;Le', 'taile/'],
			   ['Tai&nbsp;Viet', 'taiviet/'],
			   ['Thai', 'thai/'],
			   ['Vietnamese', 'vietnamese/']
			   ],
	'MSE Asia':[
			   ['Balinese', 'balinese/'],
			   ['Buginese', 'buginese/'],
			   ['Javanese', 'javanese/'],
			   ['Makasar', 'makasar/'],
			   ['Sundanese', 'sundanese/']
			   ],
	'Americas':[
				['Cherokee', 'cherokee/'],
			    ['Tłı̨chǫ&nbsp;(Dogrib)', 'tlicho/']
			    ]
	}
