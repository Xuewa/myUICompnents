// (function($) {
// "use strict";

	var vm = new Vue({
	  el: '.treeIndex_list',
	  data: {
	  	classArr: [{
	  		name:'A',
	  		classarr: [{
	  			name: 'AA',
	  			checked: false,
	  			children: [{
	  				name: 'AAA',
	  				checked: true,
	  			},{
	  				name: 'AAB',
	  				checked: true,
	  			}]
	  		},
	  		{
	  			name: 'AB',
	  			checked: true,
	  			children: [{
	  				name: 'ABA',
	  				checked: true,
	  			},{
	  				name: 'ABB',
	  				checked: true,
	  			}]
	  		},
	  		{
	  			name: 'AC',
	  			checked: true,
	  			children: [{
	  				name: 'ACA',
	  				checked: true,
	  			},{
	  				name: 'ACB',
	  				checked: true,
	  			}]
	  		}]
	  	},{
	  		name:'B',
	  		classarr: [{
	  			name: 'BA',
	  			checked: true,
	  			children: [{
	  				name: 'ACA',
	  				checked: true,
	  			},{
	  				name: 'ACB',
	  				checked: true,
	  			}]
	  		},
	  		{
	  			name: 'BB',
	  			checked: true,
	  			children: [{
	  				name: 'ACA',
	  				checked: true,
	  			},{
	  				name: 'ACB',
	  				checked: true,
	  			}]
	  		},
	  		{
	  			name: 'BC',
	  			checked: true,
	  			children: [{
	  				name: 'ACA',
	  				checked: true,
	  			},{
	  				name: 'ACB',
	  				checked: true,
	  			}]
	  		}]
	  	},{
	  		name:'C',
	  		classarr: [{
	  			name: 'CA',
	  			checked: true
	  		},
	  		{
	  			name: 'CB',
	  			checked: true
	  		},
	  		{
	  			name: 'CC',
	  			checked: true
	  		}]
	  	},{
	  		name:'D',
	  		classarr: [{
	  			name: 'CA',
	  			checked: true
	  		},
	  		{
	  			name: 'CB',
	  			checked: true
	  		},
	  		{
	  			name: 'CC',
	  			checked: true
	  		}]
	  	},{
	  		name:'E',
	  		classarr: [{
	  			name: 'CA',
	  			checked: true
	  		},
	  		{
	  			name: 'CB',
	  			checked: true
	  		},
	  		{
	  			name: 'CC',
	  			checked: true
	  		}]
	  	}]
	  }
	})
// });