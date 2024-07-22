import { FC } from "react";
import HeaderImg from "../assets/images/p1.jpg";

interface IHiPage {
   setIsHiPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const HiPage: FC<IHiPage> = ({ setIsHiPage }) => {
   return (
      <div className="hi-page">
         <img src={HeaderImg} alt="main" />
         <h1>
            Հրավիրատոմսը <br /> բացելու համար <br />
         </h1>
         <div>
            <p>Սեղմեք կոճակը</p>
            <button
               onClick={() => {
                  setIsHiPage(false);
               }}
            >
               Բացել
            </button>
         </div>
      </div>
   );
};

export default HiPage;
