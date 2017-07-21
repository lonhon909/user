import React from "react";
import { Carousel } from 'antd-mobile';

import { connect } from 'react-redux';
import $ from 'jquery';
class LunBos extends React.Component{
		
  	render() {
	    return (
	    	<div className='lunbo'>
	    		<div className='ospace'></div>
	    		<Carousel className="my-carousel"
		          	autoplay={true}
		          	infinite
		          	selectedIndex={1}
		          	swipeSpeed={35}
		          	dots={false}>
			       
			   		{
			   			this.props.slideShow.map(function(item,index){
			   				return (
			   					<img src={ item.imageUrl } key={index} alt=''/>
			   				)
			   			})
			   		}
		      	</Carousel>
	    	</div>	      	
	    )
  	}
  	
	componentDidMount(){
		var that=this;
		$.get('http://localhost:3001/lunbo/',function(res){
//			console.log(res);
			if(res.status==0){
				that.props.slideshow(res.data.billboards);
			}
		}, 'json')
	}
}

var Lunbo = connect(
	function(state,ownProps){
//		console.log(state.slideshow);
		return{
			slideShow:state.slideshow
		}
		
	},{
		slideshow:function(res){
			return {
				type:"SLIDE_SHOW",
				slideShow:res
			}
		}
	}
	
)(LunBos)

export default Lunbo;
