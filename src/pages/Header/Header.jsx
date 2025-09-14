import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { headerSection } from "./data";
import "./Header.css";

const Header = () => {
	const scrollWithOffset = (el) => {
		const yCoordinate =
			el.getBoundingClientRect().top + window.pageYOffset;
		const yOffset = -80;
		window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
	};

	return (
		<div className="header_container">
			<h3>SpecV</h3>
			<div className="elements_section">
				{headerSection.map((ele, i) => {
					const isHashLink = ele.path.includes("#");
					const Component = isHashLink ? HashLink : Link;

					return (
						<Component
							key={i}
							smooth
							to={ele.path}
							scroll={scrollWithOffset}
						>
							{ele.text}
						</Component>
					);
				})}
			</div>
		</div>
	);
};

export default Header;
