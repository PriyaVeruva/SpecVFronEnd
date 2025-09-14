import { stepsToFollow } from "./data";
import "./HowItWorks.css";

const HowItWorks = () => {
	return (
		<section className="works_wrapper">
			<h1 className="works_title">Your Journey in 4 Simple Steps</h1>
			<p>
				Follow these quick steps to register, start your checkups,
				and deliver quality eye care with ease.
			</p>

			<div className="works_container">
				{stepsToFollow.map((ele, i) => (
					<div key={i} className="sub_section">
						<div className="step_number">{i + 1}</div>
						<img
							src={ele.image}
							alt={ele.header}
							className="step_image"
						/>
						<h2 className="step_header">{ele.header}</h2>
						<p className="step_text">{ele.subHeader}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default HowItWorks;
