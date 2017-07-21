import React from 'react';
import {connect} from 'react-redux';

import {  NavLink  } from 'react-router-dom';

class Asides extends React.Component {
	
	render(){
		
		return (
			<div className='aside'>
				<ul>
					<li onClick={ this.props.change }>
						<NavLink to='/'>首页</NavLink>
						<i className='iconfont' >&#xe6a5;</i>
					</li>
					<li onClick={ this.props.change}>
						<NavLink to='/film'>影片</NavLink>
						<i className='iconfont'>&#xe6a5;</i>
					</li>
					<li onClick={ this.props.change}>
						<NavLink to='/cinema'>影院</NavLink>
						<i className='iconfont'>&#xe6a5;</i>
					</li>
					<li onClick={ this.props.change }>
						<NavLink to='/shop'>商城</NavLink>
						<i className='iconfont'>&#xe6a5;</i>
					</li>
					<li onClick={ this.props.change }>
						<NavLink to='/register'>演出</NavLink>
						<i className='iconfont'>&#xe6a5;</i>
					</li>
					<li onClick={ this.props.change }>
						<NavLink to='/wode'>我的</NavLink>
						<i className='iconfont'>&#xe6a5;</i>
					</li>
					<li onClick={ this.props.change }>
						<NavLink to='/test'>卖座卡</NavLink>
						<i className='iconfont'>&#xe6a5;</i>
					</li>
				</ul>
			</div>
		)
	}
	
}

var Aside=connect(
	
	function(state,ownProps){
		
		return {
			
		}
	},
	{
		change:function(){
			
			return {
				type:'SHOW_ASIDE',
			}
		}
	}
	
)(Asides)


export default Aside;