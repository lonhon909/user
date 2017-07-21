import { createStore } from 'redux';

import reducer from './reducer.js';
//import $ from 'jquery';

var state={
	title:"卖座电影",
	address:'深圳',
	isShowAside:false,
	slideshow:[],
	homePage:[],
	nowPlaying:[],
	comming:[],
	//当aside显示时body出现阴影效果
	shadown:false,
	//当前地址对应的影院
	cinema:[],
	//详情页
	detailPage:[],
//	首页中的即将上映
	homePageNowPlaying:[],
//	是否显示回到顶部
	isShowGoTop:false,
	gotop:false,
	//登录错误提示显示框
	hint:'',
	//登录手机号或邮箱
	phoneCode:'',
}

var store = createStore(reducer,state);


export default store;
