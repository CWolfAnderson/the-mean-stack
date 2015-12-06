var firebase = require('firebase');

var ref = new Firebase('https://resplendent-heat-7175.firebaseio.com/');

ref.set({'Christoph': 'Hey you!'});
ref.update({'Bobby': 'Cheers!'});