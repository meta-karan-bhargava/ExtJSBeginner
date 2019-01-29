Ext.define('LoginApp.view.Login.LoginFormController',{
	extend: 'Ext.app.ViewController',
	alias: 'controller.loginForm',

	requires: [
		'LoginApp.store.Personnel',
		'LoginApp.model.Personnel'
	],

	onLoginClick: function() {

		var loginForm = this.getView().getForm(),
		values = loginForm.getValues();

		if (!loginForm.isDirty()) {
			Ext.Msg.alert('Status', 'Enter login Details.');
			return;
		}
			else if (!loginForm.isValid()) {
			Ext.Msg.alert('Status', 'Invalid data.');
			return;
		}

		var store = Ext.getStore('personnelStoreId');

		var recordIndex = store.findBy(
		    function(record, id){
		        if(record.get('uid') === values.uid.trim()) {
		              return true;  // a record with this data exists
		        }
		        return false;  // there is no record in the store with this data
		    }
		);

		if(recordIndex != -1){
		    Ext.Msg.alert('Status', 'SuccessFul Login.');
			loginForm.reset();
			Ext.getCmp('app-main').getLayout().setActiveItem(2);
		}
		else{
			Ext.Msg.alert('Status', 'No user exist for given data.');
		}
	}


})