Vue.component('children_cont',{
	template: '<ul class="childrenIndex_content">'+
				'<li class="treeContent_item" v-for="classItem in childrenarr">'+
					'<i v-on:click="selectItem(classItem)" class="tree_icon" :class="classItem.checked?\'all_ticked\':\'\'"></i>'+
					'<input type="checkbox" hidden="hidden">'+
					'<span class="">'+
						'<span class="tree_name">{{classItem.name}}</span>'+
					'</span>'+
				'</li>'+
			  '</ul>',
	props: {
	  	childrenarr: {
	  		type:Array,
	  		default:function () {
		        return [];
			}
		}
	},
	methods: {
		selectItem: function(classItem){
  			classItem.checked = !classItem.checked;
  		}
	}
});

var vmParent = new Vue({
  el: '.content',
  data: {
  	classArr: [{
  		name:'A',
  		classarr: [{
  			name: 'AA',
  			hide: true,
  			checked: false,
  			children: [{
  				name: 'AAA',
  				checked: false,
  			},{
  				name: 'AAB',
  				checked: false,
  			}]
  		},
  		{
  			name: 'AB',
  			hide: true,
  			checked: true,
  			children: [{
  				name: 'ABA',
  				checked: false,
  			},{
  				name: 'ABB',
  				checked: true,
  			}]
  		},
  		{
  			name: 'AC',
  			checked: true,
  			hide: true,
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
  			hide: true,
  			checked: true,
  			children: [{
  				name: 'ACA',
  				checked: false,
  			},{
  				name: 'ACB',
  				checked: true,
  			}]
  		},
  		{
  			name: 'BB',
  			checked: true,
  			hide: true,
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
  			hide: true,
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
  			hide: true,
  			checked: true,
  			children: []
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
  			hide: true,
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
  		hide: true,
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
  		name:'F',
  		hide: true,
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
  },
  computed: {
    // 计算属性的 getter
    allSelectedArr: function () {
      var arr = [];
      for (var i =0;i<=this.classArr.length - 1; i++) {
      	var classArr = this.classArr[i].classarr;
      	var childrenArr = [];
      	for (var j = 0;j<=classArr.length - 1; j++) {
      		var flag = true;
      		var indexItem = classArr[j];
      		// this.classArr[i].classarr[j].checked = true;
      		if(!!indexItem.children&&indexItem.children.length>0)
	      		for (var k = 0;k<=indexItem.children.length - 1; k++) {
	      		 	if (!indexItem.children[k].checked){
	      		 		flag = false; 
	      		 		break;
	      		 	}
	      		}
	      	this.classArr[i].classarr[j].checked = flag;
      		childrenArr.push(flag);
      	}
      	arr.push(childrenArr);
      }
      console.log()
      return arr;
    }
  },
  methods: {
  	go2childrenTree: function(classItem) {
  		// body...
  		classItem.hide = !classItem.hide;
  	},
  	selectItem: function(classItem){
  		console.log(classItem);
  		classItem.checked = !classItem.checked;
  		if(!!classItem.children&&classItem.children.length>0)
	  		for (var i = 0;i<=classItem.children.length - 1; i++) {
	  			classItem.children[i].checked = classItem.checked;
	  		}
  	},
  	selectAll: function(){
  		// console.log(this.classArr);
  		for (var i = 0;i<=this.classArr.length - 1;i++) {
  			for (var j = 0;j<=this.classArr[i].classarr.length - 1; j++) {
  				this.classArr[i].classarr[j].checked = true;
  			}
  		}
  	},
  	selectNagative: function(){
  		for (var i = 0;i<=this.classArr.length - 1;i++) {
  			for (var j = 0;j<=this.classArr[i].classarr.length - 1; j++) {
  				this.classArr[i].classarr[j].checked = !this.classArr[i].classarr[j].checked;
  			}
  		}
  	},
  	emptyAllSelect: function(){
  		for (var i = 0;i<=this.classArr.length - 1;i++) {
  			for (var j = 0;j<=this.classArr[i].classarr.length - 1; j++) {
  				this.classArr[i].classarr[j].checked = false;
  			}
  		}
  	},
  	scroll2Tit: function(titName){
  		this.$refs[titName][0].scrollIntoView();
  		scrollBy(0,-44);
  	}
  }
});

