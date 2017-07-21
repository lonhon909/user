import React from 'react';
//import { Icon,Grid } from 'antd-mobile';
//import '../iconfont/iconfont.css';
import {connect} from 'react-redux';
//import $ from 'jquery';


class Headers extends React.Component{
	render(){
		
		return (
			<header>
				<div className="header_l">
					<div className='header_icon' onClick={this.props.showAside}>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<p>{ this.props.title }</p>
				</div>
				<div className="header_r">
					<a href="javascript:;">{this.props.address}<i className='iconfont'>&#xe610;</i></a>
					<a href="javascript:;">
						<i className='iconfont'>&#xe606;</i>
					</a>
				</div>
			</header>
		)
	}
}

var Header=connect(
	
	function(state,ownProps){
		return {
			address:state.address,
			title:state.title
		}
	},
	{
		showAside:function(){
			return {
				type:"SHOW_ASIDE",
			}
			
		}
	}
	
)(Headers)


export default Header;