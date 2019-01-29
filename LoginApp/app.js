/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'LoginApp.Application',

    name: 'LoginApp',

    stores:[
    	'LoginApp.store.Personnel',
    	'LoginApp.store.StatesStore'

    ],

    requires: [
        'LoginApp.*'
    ],

    mainView: 'LoginApp.view.main.Main'

});
