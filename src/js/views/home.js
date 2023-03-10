import React, {useState, useEffect, useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from '../store/appContext.js'
import { Result } from "parse-github-url";
import { Link } from "react-router-dom"; 
import { Single } from "./single";
import Gamepicker from "../component/gamepicker"
// export const Home = () => (
// 	<div className="text-center mt-5">
// 		<h1>Hello Rigo!</h1>
// 		<p>
// 			<img src={rigoImage} />
// 		</p>
// 		<a href="#" className="btn btn-success">
// 			If you see this green button, bootstrap is working
// 		</a>
// 	</div>
// );



export const Home = (props) => {
	const [value, setValue] = useState(''); // creating state; user text inputs in real time
	//const [result, setResult] = useState([]); // stores what we get back in the array to render to the site

	const {store, actions} = useContext(Context)
	//console.log(store.results)

	// useEffect(() => {
	// 	actions.datafetcher();

	// }, [value]); // triggered not every render cycle, but only when value changes
  
	
	return (
		
		<div className="container">
			<div className="searchBack d-flex-inline"> 
				<Gamepicker/>
					{store.res.map((result, index) => ( // index will include key value
						// <a href="#" key={index}>
							<div className="searchEntry" key={index}>
								<div className="">
									<img src={result.background_image} className="img-thumbnail rounded" />
								</div>
								<div className="">
									{result.name}
								</div>
								<Link to ={`/single/${result.slug}`}>Go to Game!</ Link>
							</div>
						// </a>
					))}
			</div>
		</div>
	)
}