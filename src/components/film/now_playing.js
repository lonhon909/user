import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { Link } from 'react-router-dom';
class NowPlayings extends React.Component{
	
	render(){
		return(
			<div className='now_playing'>
				<ul>

					{
						this.props.nowPlaying.map(function(item,index){
							
							return(	
								<Link to={'/detail/'+item.id} key={index}>
									<li>
										<div className='now_playing_detali'>
											<div className='now_playing_img'>
												<img src={ item.poster.origin } alt=''/>
											</div>
											<div className='now_playing_message'>
												<div className='film-name'>
													<h3>{ item.name }</h3>
													<span>{ item.grade }<i className='iconfont'>&#xe6a5;</i></span>
												</div>
												<div className='film-mess'>
													<p>{ item.intro }</p>
												</div>
												<div className='film-count'>
													<p>{ item.cinemaCount }家电影院上映<span>{ item.watchCount }人购票</span></p>
												</div>
											</div>
										</div>
									</li>
								</Link>
							)
						})
					}
				</ul>
				
			</div>
		)
	}
	
	componentDidMount(){
		
		
		var that=this;
		$.get('http://localhost:3001/now_playing',function(res){
			if(res.status==0){
				that.props.getNow_playing(res.data.films)
			}

		})
		
	}
}
var NowPlaying=connect(
	
	function(state,ownProps){
		
		return {
			nowPlaying:state.nowPlaying
		}
	},{
		getNow_playing:function(res){
			return {
				type:'GET_NOWPLAYING',
				nowPlaying:res
			}
			
		}
	}
	
)(NowPlayings)

export default NowPlaying;