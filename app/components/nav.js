import React,{Component} from 'react';
import {Link} from 'react-router';
import Logo from '../imags/logo.png';
import Mail from '../imags/mail.png';
import Rotate from '../imags/rotate.png';
import List from '../imags/list.png';

const ACTIVE = {color:'#ffffff',background:'#2db7f5'};
export default class Nav extends Component{

	constructor(props){
	  super(props);
		this.state = {opacity:1};
	}

	componentDidMount(){
		$('.itemContent:not(:first)').hide();
		$('.navTitle').click(function(){
			$(this).next('ul').slideToggle();
			$(this).next('ul').siblings('ul').slideDown();
		});
	}

  render(){
  	return (
      <nav>
	      <img className="Logo" src= {Logo} alt="logo"/>
	      <li className= "navTitle"><img className="frontIm" src={Mail} alt=""/>导航一 <img src={Rotate} className="backIm" alt=""/></li>
	      <ul className="itemContent">
		      <li><Link to="/table" activeStyle ={ACTIVE}  >表格</Link></li>
		      <li><Link to="/form" activeStyle ={ACTIVE} >表单</Link></li>
		      <li><Link to="/carousel" activeStyle ={ACTIVE} >轮播</Link></li>
		      <li><Link to="/chart" activeStyle ={ACTIVE}>图表</Link></li>
	      </ul>
	      <li className="navTitle"><img  className="frontIm" src={List} alt=""/>导航二<img className="backIm"  src={Rotate} alt=""/></li>
	      <ul className="itemContent">
		      <li><Link to="/ff" activeStyle ={ACTIVE}>首页</Link></li>
		      <li><Link to="/aa" activeStyle ={ACTIVE}>表单</Link></li>
		      <li><Link to="/bb" activeStyle ={ACTIVE}>日历</Link></li>
		      <li><Link to="/cc" activeStyle ={ACTIVE}>图表</Link></li>
	      </ul>
      </nav>

  	);
  }
}
