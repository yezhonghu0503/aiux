import Lottie from "lottie-react";
import animationData from "../assets/animate/waves.json";

const lottieForWaves = () => {
  return (
    <div>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: "800px", height: "700px" }}
      />
    </div>
  );
};

export default lottieForWaves;
