import React from "react";
import { Link } from "react-router-dom";

export const EditContact = () => (
	<div className="text-center mt-5">
		<h1>Edit Contact</h1>

		<Link to="/">
			<button className="btn btn-success">Go To Home</button>
		</Link>
	</div>
);