import { useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header/Header";
import RoutingPath from "./Routes/Routes";
import { useEffect } from "react";
const App = () => {
	const navigate = useNavigate();

	useEffect(() => {
		navigate("/#home");
		setTimeout(() => {
			const el = document.getElementById("home");
			if (el) {
				const yOffset = -80; // offset for sticky header
				const y =
					el.getBoundingClientRect().top +
					window.pageYOffset +
					yOffset;
				window.scrollTo({ top: y, behavior: "smooth" });
			}
		}, 50);
	}, []);

	return (
		<div className="main_container">
			<Header />
			<RoutingPath />
		</div>
	);
};

export default App;
