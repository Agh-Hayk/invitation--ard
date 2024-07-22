import "./assets/index.scss";
// import CalenddarSvg from "./assets/calendar.svg";
// import LoveIcon from "./assets/love.png";
import { Statistic } from "antd";
import HiPage from "./components/HiPage";
import InvitePage from "./components/InvitePage";
import { useState } from "react";
const { Countdown } = Statistic;

const deadline = new Date("2024-08-26T00:00:00").getTime();

function onFinish() {
   console.log("Countdown finished!");
}

function App() {
   const [isHiPage, setIsHiPage] = useState<boolean>(true);

   return (
      <div className="app">
         {isHiPage ? <HiPage setIsHiPage={setIsHiPage} /> : <InvitePage />}

         {/* <div className="header">
            <img src={HeaderImg} alt="main" />
            <h1>
               Նարեկ <br /> <span>և</span> <br /> Իրինա
            </h1>
            <div>
               <p>Հարսանիքին մնացել է․․․</p>
               <Countdown
                  format="D[օր] HH[ժ] mm[ր] ss[վ]"
                  title=""
                  value={deadline}
                  onFinish={onFinish}
                  valueStyle={{
                     fontSize: "50px",
                     fontWeight: "lighter",
                     fontFamily: "Dzeragir",
                     color: "white",
                  }}
               />
            </div>
         </div> */}
         {/* <div className="calendar">
            <div>
               <img src={CalenddarSvg} alt="calendar" />
               <img className="love" src={LoveIcon} alt="love" />
            </div>
         </div>
         <div>
            <h3>Locations</h3>
            <p>Narek exexeci</p>
            <p>Van restoran</p>
         </div>
         <div>
            <h3>Timing</h3>
            <p>Harsi tun - 10:00</p>
            <p>Zaqs - Van restoranum 4:30</p>
            <p>Zal - Van restoran 17:00</p>
         </div> */}
      </div>
   );
}

export default App;
