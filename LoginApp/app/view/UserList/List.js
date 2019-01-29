/**
 * This view is an example list of people.
 */
Ext.define('LoginApp.view.UserList.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'LoginApp.store.Personnel'
    ],

    title: 'User List',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        { text: 'Company', dataIndex: 'company', flex: 1 },
        { xtype: 'datecolumn', text: 'DOB', dataIndex: 'birthDate', flex: 1, format: 'd-M-Y' }
    ]
});
