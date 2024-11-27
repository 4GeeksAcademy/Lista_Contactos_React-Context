import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom"; 

export const Home = () => (
	<div className="container text-center mt-5">
		<h1>Home</h1>
		<div className="gap-2">
			<Link to="/newContact">
				<button className="btn btn-success col-md-2">Create New Contact</button>
			</Link>

			<Link to="/editContact">
				<button className="btn btn-success col-md-2">Edit Contact</button>
			</Link>
		</div>		
	</div>
);
