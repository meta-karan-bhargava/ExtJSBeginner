Ext.define('LoginApp.model.Personnel', {
    extend: 'Ext.data.Model',
    fields: [
        {
        	name: 'name',
        	type: 'string'
        },
        {
        	name: 'uid',
        	type: 'string'
        },
        {
        	name: 'password',
        	type: 'string'
        },
        {
        	name: 'email',
        	type: 'string'
        },
        {
        	name: 'state',
        	type: 'string'
        },
        {
        	name: 'company',
        	type: 'string'
        },
        {
        	name: 'birthDate',
        	type: 'date'
        }
    ]
});
