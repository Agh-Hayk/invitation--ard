import "./assets/index.scss";
import HiPage from "./components/HiPage";
import InvitePage from "./components/InvitePage";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
   const [isHiPage, setIsHiPage] = useState<boolean>(true);

   useEffect(() => {
      AOS.init();
   }, []);

   return (
      <div className="app">
         {isHiPage ? <HiPage setIsHiPage={setIsHiPage} /> : <InvitePage />}
      </div>
   );
}

export default App;
