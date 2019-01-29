Ext.define('LoginApp.view.Login.LoginForm',{
	extend: 'Ext.form.Panel',
	xtype: 'login-form',
	requires: [
		'LoginApp.view.Login.LoginFormController'
	],

	controller: 'loginForm',

	items:[{
    	region: 'north',
        title: 'Login',
        height: '100',
        width: '100%',
        forceFit: true
	},

		{
			xtype: 'textfield',
			fieldLabel: 'User ID',
			name: 'uid',
			allowBlank: false,
			margin: '20 60 0 0'

		},

		{
			xtype: 'textfield',
			fieldLabel: 'Password',
			name: 'password',
			allowBlank: false,
			inputType: 'password',
			margin: '20 60 0 0'
		},
		
		{
			xtype: 'checkboxfield',
        	fieldLabel: 'Remember Me',
            name: 'rememeber',
            margin: '20 60 0 0'
		},
		
		{
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
					formBind: true,
            		text: 'Login',
            		handler: 'onLoginClick'
        		}
        	]
        }

	]


})