// NOTE - these event codes must match what is in public/config/trigger.js
const eventCodes = {
	'test_connect': 16,
  'open_task': 15,
	'fixate': {
		'start': 1,
		'stop':2
	},
	'close': {
		'start': 3,
		'stop': 4
	},
	'tap_ins': {
		'start': 5,
		'stop': 6
	},
	'tap_lead': {
		'start': 7,
		'stop': 8
	},
	'stretch_neck_left': {
		'start': 9,
		'stop': 10
	},
	'stretch_neck_right': {
		'start': 11,
		'stop': 12
	},
	'rest': {
		'start': 13,
		'stop': 14
	}
}

// this is module.exports isntead of just exports as it is also imported into the electron app
module.exports = {
	eventCodes
}
