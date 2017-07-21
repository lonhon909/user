import React from 'react';
import { HashRouter as Router ,Route ,NavLink} from 'react-router-dom';

import Comming from './film/comming.js';
import NowPlaying from './film/now_playing';
import { connect } from 'react-redux';

class Films extends React.Component{
	
	render(){
		return(
			<Router>
				<div className='film'>
					<div className='ospace'></div>
					<div className='filmNav'>
						<div className='filmSelect'>
							<NavLink exact activeClassName='current_show' to='/film' >正在热映</NavLink>
							<NavLink activeClassName='current_show' to='/film/comming' >即将上映</NavLink>
						</div>
						
						<Route exact path="/film" component={NowPlaying}/>
						<Route path='/film/comming' component={Comming}/>
					</div>
				</div>
			</Router>
		)
	}
	
	//改变title
	componentDidMount(){
		
		this.props.changeTitle()
		
	}
	
}

var Film=connect(
	
	function(state,ownProps){
		return {
			Now_playing:state.Now_playing,
		}
	},{
		changeTitle:function(){
			return {
				type:'CHANGE_TITLE',
				title:'卖座电影'
			}
		}
	}
)(Films)

export default Film;