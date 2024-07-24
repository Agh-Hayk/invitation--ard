// import HeaderImg from "../assets/images/pire.jpg";
import Image2 from "../assets/images/p2.jpg";
import Image3 from "../assets/images/p3.jpg";
import Image4 from "../assets/images/p4.jpg";
import Image5 from "../assets/images/p5.jpg";
import CalenddarSvg from "../assets/images/calendar.svg";
import StarImage from "../assets/images/star.png";
import TelegramImg from "../assets/images/telegram.png";
import CarImage from "../assets/images/car.png";
import AvartImage from "../assets/images/avart.svg";
import PsakadrutyunImage from "../assets/images/psakadrutyun.svg";
import SrahImage from "../assets/images/srah.svg";
import LoveIcon from "../assets/images/love.png";
import VanImage from "../assets/images/van.svg";
import NarekTime from "../assets/images/nt.svg";
import Loc1 from "../assets/images/loc1.svg";
import Loc2 from "../assets/images/loc2.svg";
import { Statistic } from "antd";
const { Countdown } = Statistic;

const deadline = new Date("2024-08-26T00:00:00").getTime();

const TIMING_LIST = [
   { title: "Հարսի տուն", time: "10:00", image: CarImage },
   {
      title: "Պսակադրության արարողություն",
      time: "15:30",
      image: PsakadrutyunImage,
   },
   { title: "Հարսանյաց խնջույք", time: "17:00", image: SrahImage },
   { title: "Ավարտ", time: "23:00", image: AvartImage },
];

const LOCATIONS_LIST = [
   {
      title: "Պսակադրությունը կանցկացվի Նարեկ եկեղեցում",
      img: NarekTime,
      link: "https://maps.app.goo.gl/fQxQdG9EAKyssagV8",
      icon: Loc1,
   },
   {
      title: "Տոնական խնջույքը կանցկացվի Վան ռեստորանում",
      img: VanImage,
      link: "https://maps.app.goo.gl/P76bndQkEcXchkMY9",
      icon: Loc2,
   },
];

function onFinish() {
   console.log("Countdown finished!");
}

const InvitePage = () => {
   return (
      <div className="invite-page">
         <div className="invite-page-header">
            {/* <video width="100%" height="auto">
               <source src={"v1.mp4"} type="video/mp4" />
               Your browser does not support the video tag.
            </video> */}
            <video width="100%" height="auto" autoPlay loop muted>
               <source src={"/video/v2.mp4"} type="video/mp4" />
               Your browser does not support the video tag.
            </video>
            <h1>
               Նարեկ <br />{" "}
               <img style={{ width: "135px" }} src={AvartImage} alt="img" />
               <br /> Իրինա
            </h1>
         </div>

         <div className="invite-page-calendar">
            <h3>Հարգելի՛ հյուրեր</h3>
            <p>
               Մեր կյանքում գեղեցիկ իրադարձություն է սպասվում։ Մենք ընտանիք ենք
               կազմում և հրավիրում ենք Ձեզ կիսելու մեր կյանքի այդ լուսավոր օրը։
            </p>
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
                  <img src={el.image} alt="star icon" />
                  <h5>{el.time}</h5>
                  <p>{el.title}</p>
               </div>
            ))}
         </div>
         <div className="invite-page-locations">
            <h3>Վայրերը</h3>
            {LOCATIONS_LIST.map((el) => (
               <div key={el.title}>
                  <img
                     className="invite-page-locations-icon"
                     src={el.icon}
                     alt="location"
                  />
                  <p>{el.title}</p>
                  <img
                     className="invite-page-locations-bg"
                     src={el.img}
                     alt="location"
                  />
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

         <div className="invite-page-telegram">
            <img src={TelegramImg} alt="telegram" />
            <h3>Հարսանեկան նկարներ</h3>
            <p>
               Հարգելի՛ հյուրեր։ Մենք Telegram-ում բացել ենք խումբ, որտեղ Դուք
               կարող եք ավելացնել հարսանիքի ժամանակ արված լուսանկարները և
               վիդեոները: Եկեք այս կարևոր օրը կիսվենք երջանիկ պահերով։
            </p>
            <button
               onClick={() => {
                  window.open("https://t.me/+1pzt4MXN87FiMGRi");
               }}
            >
               Միանալ խմբին
            </button>
         </div>

         <div className="invite-page-timer">
            <h3>Հարսանիքին մնացել է․․․</h3>
            <Countdown
               format="D[օր] HH[ժ] mm[ր] ss[վ]"
               title=""
               value={deadline}
               onFinish={onFinish}
               valueStyle={{
                  fontSize: "44px",
                  fontWeight: "lighter",
                  fontFamily: "Dzeragir",
                  textAlign: "center",
                  // color: "white",
               }}
            />
         </div>
         <form className="invite-page-form" action="">
            <h3>Invite</h3>
            <p>Խնդրում ենք լրացնել ստորև ներկայացված հարցաթերթիկը։</p>
            <div className="invite-page-form-wrapper">
               <div className="invite-page-form-wrapper-item1">
                  <p>Գրեք Ձեր Անուն Ազգանունը</p>
                  <input type="text" />
               </div>
               <div className="invite-page-form-wrapper-item2">
                  <p>Կկարողանա՞ք ներկա գտնվել միջոցառմանը</p>
                  <div>
                     <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                     />
                     <label>Այո, իհարկե</label>
                  </div>

                  <div>
                     <input
                        type="radio"
                        id="css"
                        name="fav_language"
                        value="CSS"
                     />
                     <label>Ցավոք, ոչ</label>
                  </div>
                  <div>
                     <input
                        type="radio"
                        id="javascript"
                        name="fav_language"
                        value="JavaScript"
                     />
                     <label>Կտեղեկացնեմ ավելի ուշ</label>
                  </div>
               </div>
               <div className="invite-page-form-wrapper-item2">
                  <p>Ի՞նչ խմիչք եք նախընտրում</p>
                  <div>
                     <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                     />
                     <label>Օղի</label>
                  </div>

                  <div>
                     <input
                        type="radio"
                        id="css"
                        name="fav_language"
                        value="CSS"
                     />
                     <label>Կոնյակ</label>
                  </div>

                  <div>
                     <input
                        type="radio"
                        id="javascript"
                        name="fav_language"
                        value="JavaScript"
                     />
                     <label>Գինի</label>
                  </div>
                  <div>
                     <input
                        type="radio"
                        id="javascript"
                        name="fav_language"
                        value="JavaScript"
                     />
                     <label>Կոկտեյլներ</label>
                  </div>
               </div>
               <div className="invite-page-form-wrapper-item1">
                  <p>Գրեք Ձեր նախընտրած երգը </p>
                  <input type="text" />
               </div>
            </div>

            <button
               onClick={() => {
                  window.open("https://t.me/+1pzt4MXN87FiMGRi");
               }}
            >
               Ուղարկել
            </button>
         </form>
      </div>
   );
};

export default InvitePage;
