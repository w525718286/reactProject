import React,{Component} from 'react';
import {Link} from 'react-router';
import Logo from '../imags/logo.png';
import Mail from '../imags/mail.png';
import Rotate from '../imags/rotate.png';
import List from '../imags/list.png';

const ACTIVE = {color:'#ffffff',background:'#2db7f5'};
export default class Chart extends Component{

	constructor(props){
	  super(props);
		this.state = {opacity:1};
	}



  render(){
  	return (

				  <form action="" className ="chartC">
					  <div>
						  dfdfdf	<input type="text"/>
					  </div>


					  <div>
						  what a fucking day
					  </div>
				  </form>

  	);
  }
}
