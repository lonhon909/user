import { Accordion, List } from 'antd-mobile';
import React from 'react';

import { connect } from 'react-redux';
import $ from 'jquery';

class Cinemas extends React.Component {

	render() {
		return(
			<div className='AccordionExmple'>
	      		<div className='ospace'></div>
	      		
		        <Accordion defaultActiveKey="0" className="my-accordion">
		        
		          	{
		          		
		          		this.props.cinema.map(function(item,index){
		          			
			          		return (
			          			<Accordion.Panel header={item[0].district.name} key={index}>
					            	<List className="my-list">
						              	<List.Item>
						              		<ul className='cinema_list'>
						              			
												{ 
													item.map(function(value,key){ 
														return (
															<li key={key}>
																<div className='cinema_title'>
																	<div className='cinema_title_top'>
																		<span className='c-name'>{value.name}</span>
																		<span className='c-txt1'>座</span>
																		<span className='c-txt2'>通</span>
																	</div>
																	<div className='cinema_active'>
																		{
																			value.labels.map(function(v,k){
																				if(v.type=='SUNDRY'){
																					return <span className='kele' key={k}>可乐爆米花</span>
																				}else if(v.type=='DISCOUNT'){
																					return <span className='youhui' key={k}>优惠活动</span>
																				}
																			})
																		}
																		
																		
																	</div>
																	<p className='ci_add'>{ value.address }</p>
																	<p className='ci_distance'>距离未知</p>
																</div>
																<div className='cinema_same'>
																	<i className='iconfont'>&#xe6a5;</i>
																</div>
															</li>
														)
													})
												}
											</ul>
						              	</List.Item>
					            	</List>
					          	</Accordion.Panel>
		          			)

		          		})
		          		
		          	}
		          	
		        </Accordion>
      		</div>
		)
	}
	
	
	componentDidMount(){
		
		this.props.changeTitle();
		
		var that=this;	
		$.get('http://localhost:3001/cinema',function(res){			
			that.props.getAllCinemas(res.data.cinemas);
		})
	}
}

var Cinema=connect(
	
	function(state,ownProps){

		return {
			cinema:state.cinema
		}
	},{
		getAllCinemas:function(res){
			return {
				type:"ALL_CINEMAS",
				cinema:res
			}
		},
		changeTitle:function(){
			return {
				type:'CHANGE_TITLE',
				title:'全部影院'
			}
		}
	}
	
)(Cinemas)

export default Cinema;