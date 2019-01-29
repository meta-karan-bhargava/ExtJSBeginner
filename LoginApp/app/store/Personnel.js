Ext.define('LoginApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',
    storeId: 'personnelStoreId',

    model: 'LoginApp.model.Personnel',

    autoLoad: true,

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
