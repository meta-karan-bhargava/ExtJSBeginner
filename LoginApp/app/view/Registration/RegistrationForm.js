Ext.define('LoginApp.view.Registration.RegistrationForm',{
	extend: 'Ext.form.Panel',
	xtype: 'registration-form',
	requires: [
		'LoginApp.view.Registration.RegistrationFormController'
	],

	controller: 'registrationForm',
	scrollable: true,
	border: 1,

	items:[{
    	region: 'north',
        title: 'Register',
        height: '100',
        width: '100%',
        forceFit: true
	},{
        xtype:'fieldset',
        columnWidth: 0.5,
        title: 'User Info',
        defaultType: 'textfield',
        defaults: {anchor: '100%', allowBlank:false, msgTarget: 'under',labelAlign: 'right'},
        layout: 'anchor',
        items :[{
            fieldLabel: 'User ID',
            name: 'uid',
            emptyText: 'User ID'
        }, {
            fieldLabel: 'Password',
            name: 'password',
            id: 'pass',
            emptyText: 'Password',
			inputType: 'password',
			passValid: true,
			listeners : {
		     change: 'onPasswordChange'       
		   },
		   validator: function(){	
			   if(!this.passValid)
				   return 'Password should be min 8 characters in length. It should contain atleast one upper-case alphabet, atleast one lower-case alphabet, atleast one digit and atleast one symbol(#,?,!,@,$,%,^,&,*,-).';
			   else
				   return true;
			   }
        }, {
            fieldLabel: 'Verify Password',
            name: 'rePwd',
            id: 'rePwd',
            emptyText: 'Re-enter Password',
			inputType: 'password',
			verify: true,
			minLength: 8,
			listeners: {
				change: 'onVerifyPasswordChange'
			},
			validator: function() {
				if(!this.verify)
					return 'Passwords do not match.';
				else
					return true;
			}
        }]
    },{
        xtype:'fieldset',
        columnWidth: 0.5,
        title: 'Contact Information',
        defaultType: 'textfield',
        defaults: {anchor: '100%', xtype: 'textfield', msgTarget: 'under', labelAlign: 'right'},
        layout: 'anchor',
        items :[{
            fieldLabel: 'First Name',
            name: 'fName',
            emptyText: 'First Name',
			allowBlank: false
        }, {
            fieldLabel: 'Last Name',
            name: 'lName',
            emptyText: 'Last Name',
			allowBlank: false
        }, {
            fieldLabel: 'Company',
            name: 'company',
            emptyText: 'Company'
        }, {
			fieldLabel: 'Email',
			name: 'email',
			emptyText: 'Email',
			vtype: 'email',
			allowBlank: false
        }, {
            fieldLabel: 'State',
            xtype: 'combobox',
            name: 'state',
            emptyText: 'Choose State',
            store: {
                type: 'states'
            },
            queryMode: 'local',
            displayField: 'name',
            valueField: 'value',
        }, {
            fieldLabel: 'Date of Birth',
            name: 'birthDate',
            xtype: 'datefield',
            emptyText: 'Date of Birth',
            maxValue: new Date(),
            format: 'd-m-Y'
        }]
    }, {
		xtype: 'toolbar',
		flex: 1,
        style: {
            background: 'white'
          },
        dock: 'top',
        ui: 'footer',
        layout: {
            pack: 'end',
            type: 'hbox'
        },
		items:[
			{
				xtype: 'button',
        		text: 'Register',
        		formBind: true,
        		handler: 'onRegisterClick'
    		},
    		{
    			xtype: 'button',
        		text: 'Login',
        		handler: function (btn, evt) {
        			Ext.getCmp('app-main').getLayout().setActiveItem(1);

        		}
    		}
    	]
    }

	]


})