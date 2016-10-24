import React,{Component,PropTypes} from 'react';
import f1 from '../imags/fj1.png';
import f2 from '../imags/fj2.png';
import f3 from '../imags/fj3.png';
import f4 from '../imags/fj4.png';
import f5 from '../imags/fj5.png';
import '../styles/style.css'

export default class Input extends Component{

	constructor(props){
	  super(props);
		this.state = {opacity:1};
  }
	componentDidMount(){
		var temp =0;

		var count = $('#content li').length;
		$('#content li:not(:first-child)').hide();

		$(".imgNum span").click(function(e){
			var index = $(this).text()-1;
			$('#content li').filter(":visible").fadeOut(500).parent().children().eq(index).fadeIn(1000);
			$(this).addClass('selectItem');
			$(this).siblings().removeClass('selectItem');
		});
		console.log(echarts)

		var time = setInterval(autoMove,1000);


		$('#content li').hover(function(){clearInterval(time)},
			function(){
				time = setInterval(autoMove,1000);
			}
		);


		function autoMove(){

			if(temp > count-1){
				temp =0
			}else{
				temp++;
			}
			$(".imgNum span").eq(temp).click();
		}



		$(".leftBar .childItem:not(:first)").hide();

		$('.title').click(function(){
			$(this).next('ul').slideToggle();
		})
	}
  render(){
  	return (
		  <div className = "content">
			  <div className ="imgBox" id="content" >
				  <ul>
					  <li className="selectP"><img src={f1} alt=""/></li>
					  <li><img src={f2} alt=""/></li>
					  <li><img src={f3} alt=""/></li>
					  <li><img src={f4} alt=""/></li>
					  <li><img src={f5} alt=""/></li>
				  </ul>
				  <div className ="imgNum">
					  <span className="selectItem">1</span>
					  <span>2</span>
					  <span>3</span>
					  <span>4</span>
					  <span>5</span>
				  </div>
			  </div>

		  </div>
  	);
  }
}
