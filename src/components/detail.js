import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import {Link} from 'react-router-dom';
class Details extends React.Component{
	

	render(){
		
		return (
			
				
				<div className='detail'>
					<div className='ospace'></div>
					
					{	
						
						this.props.detailPage.map(function(item,index){
							var day=new Date(item.premiereAt).getDay();
							var month=new Date(item.premiereAt).getMonth();
							return (
								<div className='detail-play' key={index}>
									<div className='detail-img'>
										<img src={item.cover.origin} alt=''/>
									</div>
									<div className='detail-title'>
										<h3>影片简介</h3>
										<p className='detail_p'>导&emsp;&emsp;演：{ item.director }</p>
										<p className='detail_p'>主&emsp;&emsp;演：{ 
											item.actors.map(function(value,key){
												
												return (
													<span key={key}>{ value.name }|</span>
												)
											})
										}</p>
										<p className='detail_p'>地区语言：{ item.nation }( { item.language } )</p>
										<p className='detail_p'>类&emsp;&emsp;型：{ item.category }</p>
										<p className='detail_p'>上映时间：{ month }月{ day }日上映</p>
										<p className='detail_p_last'>{ item.synopsis }</p>
									</div>
									<div className='detail-tickect'>
										<Link to="/">立即购票</Link>
									</div>
								</div>
							)
							
						})
						
					}
				
				</div>
				
			
			
		)
	}
	
	componentDidMount(){
		
		var that=this;
		var id=this.props.location.pathname.match(/\d{4}/g).join('');
		
//		console.log(id);
		$.get('http://localhost:3001/detail/?id='+id,function(res){
			
			if(res.status==0){
				//将数据传递到reducer
				that.props.getDetail(res.data.film);
				
				//修改title
				that.props.changeTitle(res.data.film.name);
			}
			



		})
	}
}

var Detail=connect(
	
	function(state,ownProps){
		
		return {
			detailPage:state.detailPage
		}
	},{
		getDetail:function(res){
			
			return {
				type:"GET_DETAIL",
				detailPage:res
			}
			
		},
		changeTitle:function(name){
			return {
				type:'CHANGE_TITLE',
				title:name
			}
		}
	}
	
)(Details)

export default Detail;
