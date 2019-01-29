Ext.define('LoginApp.view.Registration.RegistrationFormController',{
	extend: 'Ext.app.ViewController',
	alias: 'controller.registrationForm',

	requires: [
		'LoginApp.store.Personnel',
		'LoginApp.model.Personnel'
	],

	onRegisterClick: function() {

		var registrationForm = this.getView().getForm(),
		values = registrationForm.getValues();

		if (!registrationForm.isDirty()) {
			Ext.Msg.alert('Status', 'No new data to create.');
			return;
		}
		else if (!registrationForm.isValid()) {
			Ext.Msg.alert('Status', 'Invalid/Garbage data entered.');
			return;
		}
		else if (values.password !== values.rePwd) {
			Ext.Msg.alert('Status', 'Passwords do not match');
			return;
		}

		var store = Ext.getStore('personnelStoreId');

		var record = Ext.create('LoginApp.model.Personnel', {
			name: values.fName.trim().toUpperCase() + " " + values.lName.trim().toUpperCase(),
			uid: values.uid.trim(),
			email: values.email,
			password: values.password,
			state: values.state,
			company: values.company,
			birthDate: values.birthDate
		});

		var recordIndex = store.findBy(
		    function(record, id){
		        if(record.get('uid') === values.uid){
		              return true;
		        }
		        return false;
		    }
		);

		if(recordIndex != -1){
		    Ext.Msg.alert('Status', 'A user already exists with this username.');
			return;
		}

		store.add(record);
		store.sync();
		registrationForm.reset();
		Ext.Msg.alert('Status', 'Registration Successful.');
	},

	onPasswordChange: function(textfield) {
 		var password = textfield.getValue();
		var re = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
		if (!re.test(password)) {
			textfield.passValid = false;
		}
		else {
			textfield.passValid = true;
		}
	},
	
	onVerifyPasswordChange: function(textfield) {
		var verifyPass = textfield.getValue();
		var passField = Ext.getCmp("pass").getValue().trim();
		if(verifyPass === passField) {
			textfield.verify = true;
		}else {
			textfield.verify = false;
		}
	}

})