import './styles/main.css';
import React,{Component} from 'react';
import RectDom from 'react-dom';
//引入路由
import {Router,Route,IndexRoute,Link,browserHistory} from 'react-router';
import RouteApp from './router.js';
import Table from './components/table.js';
import MyForm from './components/form.js';
import Chart from './components/chart.js';
import Carousel from './components/carousel.js'


class App extends Component{
	constructor(props){
		super(props);
		this.state = {background:'green'};
	}
	render(){
		return(
			<Router history={browserHistory}>
				<Route path="/" component={RouteApp}>
					<IndexRoute component={Table}/>
					<Route path="form" component={MyForm}></Route>
					<Route path="table" component={Table}></Route>
					<Route path="chart" component={Chart}></Route>
					<Route path="carousel" component={Carousel}></Route>
				</Route>
			</Router>
		);
	}
}

var body = document.body;
var div = document.createElement("div");
body.appendChild(div);
RectDom.render(<App/>,div);