import React from 'react';

import { connect } from 'react-redux';

class Registers extends React.Component {
	
	render(){
		
		return (
			<div className='register_success'>
				<div className='ospace'></div>
				<div className='register_logo'>
					<img src={'https://pic.maizuo.com/usr/default/maizuomoren66.jpg'} alt=''/>
					<div className='register_username'>
						<p>手机用户:{ this.props.phoneCode }</p>
						<span>ID:1234567890123</span>
						<a href='#'>退出</a>
					</div>
				</div>
				<ul className='register_list'>
					<li className='teshu_li'>
						<div className='buxiangzhao'></div>
						<span className='film_ticket'>影票订单</span>
						<div className='count_ticket'>
							<span>0</span>张
							<i className='iconfont'>&#xe6a5;</i>
						</div>
					</li>
					<li>
						<div className='buxiangzhao'></div>
						<span className='film_ticket'>影票待付订单</span>
						<div className='count_ticket'>
							<span>0</span>张
							<i className='iconfont'>&#xe6a5;</i>
						</div>
					</li>
					<li className='teshu_li'>
						<div className='buxiangzhao'></div>
						<span className='film_ticket'>商城订单</span>
						<div className='count_ticket'>
							
							<i className='iconfont'>&#xe6a5;</i>
						</div>
					</li>
					<li className='show_order'>
						<div className='buxiangzhao'></div>
						<span className='film_ticket'>演出订单</span>
						<div className='count_ticket'>
							
							<i className='iconfont'>&#xe6a5;</i>
						</div>
					</li>
					<li>
						<div className='buxiangzhao'></div>
						<span className='film_ticket'>我的现金券</span>
						<div className='count_ticket'>
							<span>0</span>张
							<i className='iconfont'>&#xe6a5;</i>
						</div>
					</li>
					<li className='s-underline'>
						<div className='buxiangzhao'></div>
						<span className='film_ticket'>账户余额</span>
						<div className='count_ticket'>
							<span>0</span>张
							<i className='iconfont'>&#xe6a5;</i>
						</div>
					</li>
					<li className='s-underline'>
						<div className='buxiangzhao'></div>
						<span className='film_ticket'>我的卖座卡</span>
						<div className='count_ticket'>
							<span>0</span>张
							<i className='iconfont'>&#xe6a5;</i>
						</div>
					</li>
					<li className='teshu_li'>
						<div className='buxiangzhao'></div>
						<span className='film_ticket'>设置</span>
						<div className='count_ticket'>
							
							<i className='iconfont'>&#xe6a5;</i>
						</div>
					</li>
				</ul>
			</div>
		)
	}
	
	componentDidMount(){
		
		this.props.changeTitle();
		
	}
}

var Register=connect(
	
	function(state,ownprops){
//		console.log(state.phoneCode);
		return {
			phoneCode:state.phoneCode
		}
	},{
		changeTitle:function(){
			return {
				type:'CHANGE_TITLE',
				title:'我的'
			}
		}
	}
	
)(Registers)


export default Register;