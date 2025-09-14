import { useNavigate } from "react-router-dom";
import "./Home.css";
import HowItWorks from "../HowItWorks/HowItWorks";
import FormData from "../Forms/FormData";

const Home = () => {
	const navigate = useNavigate();
	return (
		<div className="home_container" id="home">
			<div className="home_section">
				<div className="text_content">
					<h1>Eye Checkups at Your Doorstep</h1>
					<h2>
						Join SpecV and bring eyecare directly to patients
						with your portable kit
					</h2>
					<a href="#register">
						<button>Register as Specialist</button>
					</a>
				</div>

				<div className="video_section">
					<video
						width={"100%"}
						height={"100%"}
						autoPlay
						loop
						playsInline
						muted
					>
						<source
							src="https://static.lenskart.io/video/yt-videos/EyeTest-Square-LK@Home.mp4#t=0.1"
							type="video/mp4"
						/>
					</video>
				</div>
			</div>
			<section id="works">
				<HowItWorks />
			</section>
			<section id="register">
				<FormData />
			</section>
		</div>
	);
};

export default Home;
