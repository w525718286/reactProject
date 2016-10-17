import React,{Component} from 'react';
//引入路由
import {Link} from 'react-router';
import Nav from './components/nav.js';



export default class RouteApp extends Component{
	render(){
		return(
			<div>
				<Nav/>
				<div id="rightWrap">
					<div className="std">
						<span>欢迎你,张三</span>
					</div>
					<div>
						{this.props.children}
					</div>

				</div>
			</div>
		);
	}
}
