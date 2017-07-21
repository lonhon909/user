
import React from 'react';

import Lunbo from './lunbo.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import $ from "jquery";
class HomePages extends React.Component{
	
	render(){
		
		
		return (
			<div>
			
				<Lunbo />
				
				<div className='main-nav'>
					<ul className='nav-list'>
					
						{
							this.props.homePage.map(function(item,index){
//								var name=item.name;
								return (
									<Link to={'/detail/'+item.id} key={index}>
										<li key={index}>
											<img src={item.cover.origin}  alt=''/>
											<div className='img-message'>
												<div className='movie-title'>
													<h5>{ item.name }</h5>
													<p><span>{ item.cinemaCount }</span>家影院上映 <span>{ item.watchCount }</span>人购票</p>
												</div>
												<span className='grade'>{ item.grade }</span>
											</div>
										</li>
									</Link>
								)
							})
						}
						
					</ul>
					<div className='more-film'>
						<Link to='/film'>更多热映电影</Link>
					</div>
					<div className='more-film-show'>
						<span>即将上映</span>
					</div>
					
					
					
				</div>
				
				<div className='homePage-comming'>
				
					{
						this.props.homePageNowPlaying.map(function(item,index){
							var day=new Date(item.premiereAt).getDay();
							var month=new Date(item.premiereAt).getMonth();
							return (
								<Link to={'/detail/'+item.id}  key={index}>
									<div className='homePage-comming-li'>
										<img src={ item.cover.origin } />
										<div className='homePage-comming-time'>
											<span>{ item.name }</span>
											<span>{ month }月{ day }日上映 </span>
										</div>
									</div>
								</Link>
							)							
						})						
					}
					
				</div>
				<div className='more-comming-t'>
					<Link to='/film/comming'>更多即将上映电影</Link>
				</div>				
			</div>
		)
	}
	
	
	componentDidMount(){
		//改变title
		this.props.changeTitle()
		
		var that=this;
		$.get('http://localhost:3001/homePage',function(res){
			if(res.status==0){
				that.props.homePAGE(res.data.films);
			}
			
//			console.log(res.data.films)
		})
		
		$.get('http://localhost:3001/comming?count=3',function(response){
			if(response.status==0){
				that.props.jijiang(response.data.films);
			}
			
//			console.log(response.data.films);
		})
		
		
	}
}

var HomePage=connect(
	function(state,ownProps){
//		console.log(state.homePageNowPlaying);
		return {
			homePage:state.homePage,
			homePageNowPlaying:state.homePageNowPlaying
		}
	},
	{
		homePAGE:function(res){
			return {
				type:'HOME_PAGE',
				homePage:res
			}
		},
		change:function(name){
			return {
				type:'CHANGE_TITLE',
				title:name
			}
			
		},
		jijiang:function(res){
			return {
				type:'JI_JIANG',
				homePageNowPlaying:res
			}
		},
		changeTitle:function(){
			return {
				type:'CHANGE_TITLE',
				title:'卖座电影'
			}
		}
		
	}
	
	
	
)(HomePages)

export default HomePage;