import { Routes, Route } from "react-router-dom";
import About from "../pages/About/About";
import FormData from "../pages/Forms/FormData";
import Home from "../pages/Home/Home";
import HowItWorks from "../pages/HowItWorks/HowItWorks";
const RoutingPath = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/register" element={<FormData />}></Route>\
				<Route path="/works" element={<HowItWorks />}></Route>
			</Routes>
		</div>
	);
};

export default RoutingPath;
