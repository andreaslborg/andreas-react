import styles from "../style";
import { arrowUp, andreas } from "../assets";

const GetStarted = () => {
return (
    <div className={`${styles.flexCenter} w-[300px] h-[300px] rounded-full bg-blue-gradient p-[2px] shadow-lg`}>
        <div className={`${styles.flexCenter} flex-col bg-primary w-[300px] h-[300px] rounded-full`}>
            <div className={`${styles.flexStart} flex-row`}>
                <img src={andreas} className="w-[100%] h-[100%] rounded-full object-contain flex-row" alt="arrow" />
        </div>
    </div>
    </div>
)
}

export default GetStarted