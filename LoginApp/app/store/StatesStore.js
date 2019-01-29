Ext.define('LoginApp.store.StatesStore', {
    extend: 'Ext.data.Store',
    alias: 'store.states',

    data: { items: [
    	{name: 'State 1', value: 'State 1'},
    	{name: 'State 2', value: 'State 2'},
    	{name: 'State 3', value: 'State 3'},
    	{name: 'State 4', value: 'State 4'},
    	{name: 'State 5', value: 'State 5'},
    	{name: 'State 6', value: 'State 6'},
    	{name: 'State 7', value: 'State 7'},
    	{name: 'State 8', value: 'State 8'},
    	{name: 'State 9', value: 'State 9'},
    	{name: 'State 10', value: 'State 10'}
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});