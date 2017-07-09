globals.showSimTrans = ''


function localInitialise () {
	}
	

var _h = {
'E81': ['E96', 'ED7'],
'E82': ['E8A'],
'E84': ['E94'],
'E87': ['EC6'],
'EAA': ['EA5'],
'E8A': ['E82'],
'E8D': ['EA2'],
'E94': ['E95', 'E84'],
'E95': ['ED8', 'E94'],
'E96': ['ED7', 'E81'],
'E97': ['EAB', 'EDC', 'EDD'],
'E99': ['EA1', 'E9A'],
'E9A': ['E9B', 'E99'],
'E9B': ['E9A', 'E99'],
'E9C': ['E9D', 'E9E', 'E9F', 'ED6'],
'E9E': ['E9D', 'E9C', 'E9F', 'ED6'],
'E9D': ['E9C', 'E9E', 'E9F', 'ED6'],
'EA1': ['E99', 'E9A'],
'EA2': ['E8D'],
'EA5': ['EAA'],
'EAB': ['EDC', 'EDD', 'E97'],
'EAE': ['EA3'],
'EDC': ['EDD', 'EAB', 'E97'],
'EDD': ['EDC', 'EAB', 'E97'],
'EA3': ['EAE'],
'EB3': ['EB2'],
'EB2': ['EB3'],
'EC6': ['EC6EA5EC6'],
'EC6EA5EC6': ['EC6'],
'ED7': ['E96', 'E81'],
'ED8': ['E95'],
'ED9': ['E97'],
'ED6': ['E9D', 'E9F', 'E9C', 'E9E'],
'ED2': ['ED5', 'ED4'],

end: {}
}






function sendVowelLeft (str) {
	lv = str.match(/ເ|ແ|ໂ|ໃ|ໄ/)
	if (lv == null) return
	
	return lv+str.substr(0,lv.index)+str.substr(lv.index+1)
	}