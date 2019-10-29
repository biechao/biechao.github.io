Vue.component('col-detail', {
	template: [
		    '<div>',
		        '<b>Name:</b> {{rowData.name}}<br/>',
		        '<b>Sender:</b> {{rowData.sender}}<br/>',
		        '<b>comments:</b> {{rowData.name}}<br/>',
		        '<b>backend data:</b> {{backend_data}}<br/>',
		    '</div>'
	].join(""),
	props: {
		rowData: {
			type: Object,
			default: {}
		},
		param: "",
	},
	data:function(){
		return {
			backend_data:""
		}
	},
	methods: {
		callback:function(){
    		this.backend_data= "this is data from backend service";
		}
	}
});
Vue.component('comments', {
	template: [
		    '<div>',
		        '<a href="javascript:void(0)" @click.stop="callback">{{rowData.comments}}</a>',
		    '</div>'
	].join(""),
	props: {
		rowData: {
			type: Object,
			default: {}
		},
		param: "",
	},
	methods: {
        callback(){
            alert("Do anything you want here!");
        }
	}
});

new Vue({
	el:"#app",
	  data:function(){
	    return {
	      param:{
	        columns:[
	          {
	            index:"id",isCheckbox:true
	          },
	          {
	            index:"id",isDetailRow:true
	          },
	          {
	            index:"name",label:"Name",sortable:true,width:30
	          },
	          {
	            index:"sender",label:"Sender",sortable:true,width:30,callback:this.formatSender
	          },
	          {
	            index:"comments",label:"comments",sortable:false,width:38,component_name:"comments"
	          }
	        ],
	        dataSet:[
	          {
	            id:1,name:"aaa",sender:"aaa@domain.com","comments":"this is a test"
	          },
	          {
	            id:2,name:"bbb",sender:"bbb@domain.com","comments":"this is a test"
	          },
	          {
	            id:4,name:"ccc",sender:"ccc@domain.com","comments":"this is a test"
	          }
	          ,{
	            id:4,name:"ddd",sender:"ddd@domain.com","comments":"this is a test"
	          }
	          ,{
	            id:5,name:"eee",sender:"eee@domain.com","comments":"this is a test"
	          }
	          ,{
	            id:6,name:"fff",sender:"fff@domain.com","comments":"this is a test"
	          }
	          ,{
	            id:7,name:"ggg",sender:"ggg@domain.com","comments":"this is a test"
	          }
	          ,{
	            id:9,name:"hhh",sender:"hhh@domain.com","comments":"this is a test"
	          }
	          ,{
	            id:10,name:"iii",sender:"hhh@domain.com","comments":"this is a test"
	          }
	          ,{
	            id:11,name:"jjj",sender:"hhh@domain.com","comments":"this is a test"
	          }
	          ,{
	            id:12,name:"kkk",sender:"hhh@domain.com","comments":"this is a test"
	          }
	          ,{
	            id:13,name:"lll",sender:"hhh@domain.com","comments":"this is a test"
	          }
	          ,{
	            id:14,name:"mmm",sender:"hhh@domain.com","comments":"this is a test"
	          }
	          ,{
	            id:15,name:"nnn",sender:"hhh@domain.com","comments":"this is a test"
	          }
	          ,{
	            id:16,name:"ooo",sender:"hhh@domain.com","comments":"this is a test"
	          }
	          ,{
	            id:17,name:"ppp",sender:"hhh@domain.com","comments":"this is a test"
	          }
	          ,{
	            id:18,name:"qqq",sender:"hhh@domain.com","comments":"this is a test"
	          }
	        ],
	        sortOrder:"asc",
	        sortColumn:"name",
	        height:200,
	        detailRowComponentName:"col-detail",
	        stripe:true  
	      }
	    }
	  },
	methods:{
	    reloadTable:function(){
	      this.local_param.reloadFlag = !this.local_param.reloadFlag;
	    },
	    formatSender:function(cell_value,row){
	      return '<b style="color:red;">'+cell_value+'</b>';
	    }   			
	}
});