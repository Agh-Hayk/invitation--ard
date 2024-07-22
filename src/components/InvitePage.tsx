import HeaderImg from "../assets/images/pire.jpg";
import Image2 from "../assets/images/p2.jpg";
import Image3 from "../assets/images/p3.jpg";
import Image4 from "../assets/images/p4.jpg";
import Image5 from "../assets/images/p5.jpg";
import CalenddarSvg from "../assets/images/calendar.svg";
import StarImage from "../assets/images/star.png";
import LoveIcon from "../assets/images/love.png";
import VanImage from "../assets/images/van.svg";
import NarekTime from "../assets/images/nt.svg";
import { Statistic } from "antd";
const { Countdown } = Statistic;

const deadline = new Date("2024-08-26T00:00:00").getTime();

const TIMING_LIST = [
   { title: "Հարսի տուն", time: "10:00" },
   { title: "Պսակադրության արարողություն", time: "15:30" },
   { title: "Հարսանյաց խնջույք", time: "17:00" },
   { title: "Ավարտ", time: "23:00" },
];

const LOCATIONS_LIST = [
   {
      title: "Պսակադրությունը կանցկացվի Նարեկ եկեղեցում",
      img: NarekTime,
      link: "https://maps.app.goo.gl/fQxQdG9EAKyssagV8",
   },
   {
      title: "Տոնական խնջույքը կանցկացվի Վան ռեստորանում",
      img: VanImage,
      link: "https://maps.app.goo.gl/P76bndQkEcXchkMY9",
   },
];

function onFinish() {
   console.log("Countdown finished!");
}

const InvitePage = () => {
   return (
      <div className="invite-page">
         <div className="invite-page-header">
            <video muted autoPlay loop width="100%">
               <source src={"/video/nivideo.mp4"} type="video/mp4" />
               Your browser does not support the video tag.
            </video>
            <h1>
               Նարեկ <br /> <span>💓</span> <br /> Իրինա
            </h1>
         </div>
         <div className="invite-page-calendar">
            <div>
               <img src={CalenddarSvg} alt="calendar" />
               <img className="love" src={LoveIcon} alt="love" />
            </div>
         </div>
         <div className="invite-page-photos">
            <img className="invite-page-photos-one" src={Image2} alt="Image2" />
            <div>
               <img
                  className="invite-page-photos-two"
                  src={Image3}
                  alt="Image3"
               />
               <img
                  className="invite-page-photos-three"
                  src={Image4}
                  alt="Image5"
               />
            </div>
         </div>
         <div className="invite-page-timing">
            <img className="invite-page-timing-bg" src={Image5} alt="img" />
            <h3>Օրվա ծրագիր</h3>
            {TIMING_LIST.map((el) => (
               <div key={el.title}>
                  <h5>{el.time}</h5>
                  <img src={StarImage} alt="star icon" />
                  <p>{el.title}</p>
               </div>
            ))}
         </div>
         <div className="invite-page-locations">
            <h3>Վայրերը</h3>
            {LOCATIONS_LIST.map((el) => (
               <div key={el.title}>
                  <p>{el.title}</p>
                  <img src={el.img} alt="location" />
                  <button
                     onClick={() => {
                        window.open(el.link);
                     }}
                  >
                     Քարտեզ
                  </button>
               </div>
            ))}
         </div>
         <div className="invite-page-timer">
            <h3>Հարսանիքին մնացել է․․․</h3>
            <Countdown
               format="D[օր] HH[ժ] mm[ր] ss[վ]"
               title=""
               value={deadline}
               onFinish={onFinish}
               valueStyle={{
                  fontSize: "50px",
                  fontWeight: "lighter",
                  fontFamily: "Dzeragir",
                  // color: "white",
               }}
            />
         </div>
      </div>
   );
};

export default InvitePage;
