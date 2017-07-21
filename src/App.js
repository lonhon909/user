import React, {Component} from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
//引入Header
import Header from './components/header.js';
import Aside from './components/aside.js';
import HomePage from './components/homePage.js';
import WoDe from './components/wode.js';
import Film from './components/film.js';
import Cinema from './components/cinema.js';
import Shop from './components/shop.js';
import Detail from './components/detail.js';
import Register from './components/register.js';
import Test from './components/aaaaa.js';
//引入动画
import ReactANI from 'react-addons-css-transition-group';
import { HashRouter as Router,  Route } from 'react-router-dom'; 

class Apps extends Component {
	render() {
		
		return(
			<Router>
				<div className="app">
					
			       <Header />
			       {/*动画 ReactANI*/}
			       <ReactANI transitionName="fade"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={300}>
			       		{ this.props.isShowAside?<Aside />:''}		
			       </ReactANI>
			       
			       
			       <Route exact path="/" component={HomePage}/>
			       <Route path="/film" component={Film}/>
			       <Route path="/cinema" component={Cinema}/>
			       <Route path="/shop" component={ Shop } />
			       <Route path="/wode" component={WoDe}/>
			       <Route path="/detail" component={Detail}/>
			       <Route path="/test" component={Test}/>
			       <Route path="/register" component={Register}/>
					{this.props.shadown?<div id='shadown' onClick={this.props.showAside}></div>:''}
					
					
					{ this.props.isShowGoTop?<div  className='gotop' onClick={this.props.gotopooo}>
						<i className='iconfont'>&#xe602;</i>
					</div>:'' }
					
			    </div>
		    </Router>
		)
		
		
	}
	
	componentDidMount(){
		var onOff=false;
		var that=this;
		$(window).scroll(function(){
			
			if($(window).scrollTop()>=230){
				if(onOff==false){
					onOff=true;	
					that.props.showGoTop()
					
				}			
			}else if($(window).scrollTop()<230){
				if(onOff==true){
					onOff=false;
					that.props.showGoTop()
				}
			}
		})
		
	}
}	
var App=connect(
	function(state,ownprops){
		return {
			isShowAside:state.isShowAside,
			shadown:state.shadown,
			isShowGoTop:state.isShowGoTop,
			gotop:state.gotop
		}
	},{
		showAside:function(){
			return {
				type:'SHOW_ASIDE'
			}
		},
		showGoTop:function(){
			return {
				type:'SHOW_GOTOP',
			}
		},
		gotopooo:function(){
			
			$('html,body').animate({scrollTop:0},500);

			$(window).scrollTop(0);
			return {
				type:'GO_TOP',
				gotop:true
			}
		}
	}
		
)(Apps)


export default App;