import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import $ from 'jquery';
class WoDes extends React.Component{
	
	render(){
		return(
			<div>
				<div className='ospace'></div>
				<section>
					<form action=''>
						<div className='username'>
							<input type='text' placeholder='输入手机号/邮箱' ref='txt1'/>
							<div className='input_k'></div>
						</div>
						<div className='password'>
							<input type='password' placeholder='输入密码/验证码' ref='txt2'/>
							<div className='input_k'></div>
						</div>
						
						<div className='hint'>
							<span>{ this.props.hint }</span>
						</div>
						
						
						<div className='register' onClick={this.isregister.bind(this)}>登录</div>
					</form>
				</section>
			</div>
				
		)
	}
	
	isregister(){
		var username=this.refs.txt1.value;
		var password=this.refs.txt2.value;
		var that=this;
		var pattern1= /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/;
		var pattern2= /^[0-9]*[A-Za-zd]*([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
		var pattern3= /^[\d\D]{6,18}$/;
		
		if(pattern1.test(username) || pattern2.test(username)){
			
			if(pattern3.test(password)){

				$.get('http://localhost:3001/reg?username='+username+'&password='+password,function(res){
					if(res.msg=='登录成功'){
						alert('登录成功');
						//将登录的账号存入store
						that.props.phoneCode(username);
						//页面跳转到登录成功页面
						window.location.href='http://localhost:3000/#/register';
					}else if(res.msg=='请输入正确的手机号或密码'){
						that.props.enterRightPhone('输入正确的手机号或密码')
					}else if(res.msg=='注册成功'){
						alert('注册成功');
						//将登录的账号存入store
						that.props.phoneCode(username);
						//页面跳转到登录成功页面
						window.location.href='http://localhost:3000/#/register';
					}else{
						that.props.enterRightPhone('网络异常')
					}
					
				})
			}else{
				this.props.enterRightPhone('密码长度6-18位')
			}
		}else{
			this.props.enterRightPhone('请输入正确的账号')
		}
	}
	
	
	componentDidMount(){
		this.props.changeTitle();
	}
}

var WoDe=connect(
	function(state,ownProps){
		return {
			hint:state.hint
		}
	},{
		changeTitle:function(){
			return {
				type:'CHANGE_TITLE',
				title:'登录'
			}
		},
		enterRightPhone:function(rightPhone){
			return {
				type:'RIGHT_PHONE',
				hint:rightPhone
			}
		},
		phoneCode:function(num){
			return {
				type:'PHONE_CODE',
				phoneCode:num
			}
		}
		
	}
	
)(WoDes)


export default WoDe;