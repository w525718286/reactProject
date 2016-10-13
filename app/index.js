import './styles/main.css';
import React,{Component} from 'react';
import RectDom from 'react-dom';

import Nav from './components/nav.js';


class App extends Component{
	render(){
		return(
			<div>
				<Nav/>
			</div>
		);

	}
}

var body = document.body;
var div = document.createElement("div");
body.appendChild(div);
RectDom.render(<App/>,div);