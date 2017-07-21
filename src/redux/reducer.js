

function reducer(state,action){
	
	switch(action.type){
		//修改标题
		case "CHANGE_TITLE":
			return Object.assign({},state,{
				
				title:action.title
				
			})
		//显示侧边栏
		case "SHOW_ASIDE":
			
			return Object.assign({},state,{
				isShowAside:!(state.isShowAside),
				shadown:!(state.shadown),
				
			})
		//轮播
		case "SLIDE_SHOW":
			return Object.assign({},state,{
				
				slideshow:action.slideShow
				
			})
		//首页数据	
		case 'HOME_PAGE':
			return Object.assign({},state,{
				homePage:action.homePage
			})
		//	正在热播
		case "GET_NOWPLAYING":
			return Object.assign({},state,{
				nowPlaying:action.nowPlaying
			})
		//即将热播	
		case 'GET_COMMING':
			return Object.assign({},state,{
				comming:action.comming
				
			})
		//全部影院	
		case 'ALL_CINEMAS':
			return Object.assign({},state,{

				cinema:(function(n){
					var obj={'宝安区':[],'龙华新区':[],'罗湖区':[],'南山区':[],'福田区':[],'龙岗区':[],'光明新区':[],'坪山新区':[],'盐田区':[]};
					var arr=[];
					for(var i=0;i<n.length;i++){
						for(var key in obj){
							if(n[i].district.name==key){
								obj[key].push(n[i])
							}
						}
					}
					for(var j in obj){
						arr.push(obj[j])
					}
					return arr;
					
				})(action.cinema)
			})
		//详情页	
		case "GET_DETAIL":
			return Object.assign({},state,{
				detailPage:(function(n){
					
					var arr=[];
					arr.push(n)
					return arr;
					
				})(action.detailPage)
				
			})
		//	首页即将热播
		case "JI_JIANG":
		 	return Object.assign({},state,{
		 		homePageNowPlaying:action.homePageNowPlaying
		 	})
		//是否显示回到顶部 	
		case "SHOW_GOTOP":
			return Object.assign({},state,{
				isShowGoTop:!state.isShowGoTop,
				gotop:false
			})
		//点击回到顶部	
		case 'GO_TOP':
			return Object.assign({},state,{
				gotop:action.gotop
			})
		//登录注册提示	
		case "RIGHT_PHONE":
			return Object.assign({},state,{
				hint:action.hint
			})
		case 'PHONE_CODE':
			return Object.assign({},state,{
				phoneCode:action.phoneCode
			})
		default :
			return state;
	}
	
}


export default reducer;