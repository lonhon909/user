import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class Commings extends React.Component{
	
	render(){
		return(
			
			<div className='now_playing'>
				<ul>

					{
						this.props.comming.map(function(item,index){
							
							return(	
								<Link to={'/detail/'+item.id} key={index}>
									<li >
										<div className='now_playing_detali'>
											<div className='now_playing_img'>
												<img src={ item.poster.origin } alt=''/>
											</div>
											<div className='now_playing_message'>
												<div className='film-name'>
													<h3>{ item.name }</h3>
													<span><i className='iconfont'>&#xe6a5;</i></span>
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
		$.get('http://localhost:3001/comming',function(res){
			that.props.getComming(res.data.films)
			console.log(res.data.films)
		})
		
		
		
	}
}
var Comming=connect(
	
	function(state,ownProps){
		
		return {
			comming:state.comming
		}
	},{
		getComming:function(res){
			return {
				type:'GET_COMMING',
				comming:res
			}
			
		}
	}
	
)(Commings)

export default Comming;