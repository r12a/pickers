function localInitialise () {

	}



var _h = {
'1B83': ['1B86', '1B89'],
'1B86': ['1B83', '1B89'],
'1B89': ['1B86', '1B83'],
'1B84': ['1B94', '1BB2'],
'1B87': ['1B90', '1B8C'],
'1B8A': ['1B9E'],
'1B8C': ['1B8D', '1B87'],
'1B8D': ['1B8C'],
'1B8E': ['1B96', '1BB8'],
'1B8F': ['1B93'],
'1B93': ['1B8F'],
'1B94': ['1B8D'],
'1B96': ['1B97', '1B95'],
'1B97': ['1B96', '1B96', '1B95'],
'1B95': ['1B96', '1B96', '1B97', '1BBB'],
'1B91': ['1B98'],
'1B98': ['1B91'],
'1B9C': ['1BB7'],
'1BB7': ['1B9C'],
'1B90': ['1B87', '1B85'],
'1B85': ['1BB3', '1BB6'],
'1BB3': ['1B85', '1BB6'],
'1B9E': ['1B9F', '1BB4'],
'1B9D': ['1BB1'],
'1BAF': ['1B9F', '1B9A'],
'1B9F': ['1BAF', '1B9E'],
'1BB8': ['1B8E'],
'1BB9': ['1BB6', '1BB3', '1B85'],
'1BB6': ['1BB9', '1BB3'],
'1BB2': ['1B8D'],
'1BB4': ['1B9E'],
'1CC3': ['1BB0'],
'1BB0': ['1CC3'],
'1BBB': ['1B95'],

end: {}
}


function showCodepoints () {
	var output = document.getElementById('output')
	showNameDetails(normalise(getHighlightedText(output)), defaults.language, defaults.blocklocation, 'c', document.getElementById('panel') )
	document.querySelector('#panel #title').style.fontFamily = output.style.fontFamily
	output.focus()
	}


