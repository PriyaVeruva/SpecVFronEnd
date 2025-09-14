import Lottie from "lottie-react";
import eyeAnimation from "../assets/Login.json";

const LottieData = () => {
	return <Lottie animationData={eyeAnimation} loop={true} autoplay={true} />;
};

export default LottieData;
