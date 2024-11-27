import React from "react";
import { Link } from "react-router-dom";

export const NewContact = () => (
	<div className="container text-center mt-5">
		<h1>Create New Contact</h1>

		<Link to="/">
			<button className="btn btn-success">Go To Home</button>
		</Link>
	</div>
);
