var Reflux = require('reflux');

var ListActions = Reflux.createActions([
    'getItems',
    'postItem',
    'submitEmail'
]);

module.exports = ListActions;