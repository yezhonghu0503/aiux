import LottieForWaves from "../../../lottie/waves";
import styles from "./Home.module.css";
const firstPage: React.FC = () => {
  return (
    <>
      <div className="w-[90%] flex justify-between mt-[100px]">
        <div className="w-[50%] mt-[50px] flex flex-col items-center">
          <p style={{ fontFamily: "BlackOpsOne" }} className="text-[76px]">
            THE FUTURE IS
            <div>
              WHAT <div className="inline text-[#e3db4b]">YOU SEE</div>
            </div>
          </p>
          <p className="text-left w-[50%]">
            USAI is an innovative AI integration and experience platform
            designed to provide users with opportunities to interact with
            various AI models.
          </p>
          <div className="w-[50%] mt-[150px]">
            <div className={styles.button}>
              <div className={styles.glitch}></div>
              <div className={styles.text} data-text="TRY IT NOW">
                TRY IT NOW
              </div>
              <span className={styles.platform}>R25</span>
            </div>
          </div>
        </div>
        <LottieForWaves />
      </div>
    </>
  );
};

export default firstPage;
