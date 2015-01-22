Ext.define('Touch2Demo.view.configuracaoInicial', {
    extend: 'Ext.form.Panel',
    alias: 'widget.configuracaoInicial',
    config: {
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		ui: 'light',
		title: 'Configura��es',
		items:[
		     {
			xtype: 'button',
			ui: 'back',
			action: 'sincronizacaoInicial',
			iconMask: true,
			iconCls: 'reply'
			//text: 'Lista de Contatos'
		    }
		]
	    },
	    {
		xtype: 'fieldset',
		items: [
		    {
			xtype: 'textfield',
			name: 'ip',
			label: 'Ip para a Sincroniza��o',
			id: 'ip'
		    }
		    
		]
	    },
	    {
		xtype: 'button',
		action: 'salvarIP2',
		ui: 'action',
		text: 'Salvar IP'
	    }
	]
    }
});
