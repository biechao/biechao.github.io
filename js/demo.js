
new Vue({
	el:"#app_local",
	data:function(){
		return{
			local_param:{
			    timeRange: 1   
			}    				
		}
	},
	methods:{
	    customerSelectTimeRange(time_range){
	      console.log(time_range);
	    },    			
	}
});

new Vue({
	el:"#app_local_left",
	data:function(){
		return{
			local_param:{
			    timeRange: 2,
			    dataTimeLabelPosition: 'left'  
			}    				
		}
	},
	methods:{
	    customerSelectTimeRange(time_range){
	      console.log(time_range);
	    },    			
	}
});

new Vue({
	el:"#app_serve",
	data:function(){
		return{
			sever_param:{
				timeRange: 3,
				reloadFlag: false,
				initStart:"2019-09-16 01:43:10",
				initEnd:"2019-09-16 05:43:10",
				useLocalTime:false      
			},    				
		}
	},
	methods:{
	    serverSelectTimeRange(time_range){
	      console.log(time_range);
	    },
	    changeTimeRange(time_range_value){
	      this.sever_param.timeRange = time_range_value;
	      if(time_range_value == 1){
	        this.sever_param.initStart = "2019-09-16 01:43:10";
	        this.sever_param.initEnd = "2019-09-16 05:43:10";
	        this.reloadTimeRange();
	      }else if(time_range_value == 2){
	        this.sever_param.initStart = "2019-09-15 05:43:10";
	        this.sever_param.initEnd = "2019-09-16 05:43:10";
	        this.reloadTimeRange();
	      }else if(time_range_value == 3){
	        this.sever_param.initStart = "2019-09-19 00:00:00";
	        this.sever_param.initEnd = "2019-09-16 05:43:10";
	        this.reloadTimeRange();        
	      }else if(time_range_value == 4){
	        this.sever_param.initStart = "2019-08-16 00:00:00";
	        this.sever_param.initEnd = "2019-09-16 05:43:10";
	        this.reloadTimeRange();        
	      }else if(time_range_value == 5){
	        this.sever_param.initStart = "2019-06-16 00:00:00";
	        this.sever_param.initEnd = "2019-09-16 05:43:10";
	        this.reloadTimeRange();        
	      }
	    }   			
	}
});

new Vue({
	el:"#app_zh_CN",
	data:function(){
		return{
			local_param:{
			    timeRange: 2,
			    locale:"zh_CN"    
			}    				
		}
	},
	methods:{
	    customerSelectTimeRange(time_range){
	      console.log(time_range);
	    },    			
	}
});

new Vue({
	el:"#app_ja_JP",
	data:function(){
		return{
			local_param:{
			    timeRange: 4,
			    locale:"ja_JP"  
			}    				
		}
	},
	methods:{
	    customerSelectTimeRange(time_range){
	      console.log(time_range);
	    },    			
	}
});