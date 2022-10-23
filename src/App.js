import { useState } from "react";
import Sidebar from "./components/Sidebar";
import "./styles/styling.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
	const [open, setOpen] = useState(true);
	return (
		<Router>
			<div className="app flex">
				<Sidebar open={open} setOpen={setOpen} />
				<div className="flex-1 h-screen">
					<div className="p-7 text-4xl font-bold">Home</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
