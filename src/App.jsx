
import Footer from "./component/Footer/Footer";
import RoadMap from "./component/RoadMap/RoadMap";
import Community from "./component/community/Community";
import Faq from "./component/faq/Faq";
import Header from "./component/header/Header"
import Banner from './component/sections/Banner';
import Investor from "./component/sections/investor/Investor";
import Process from "./component/sections/process/Process";
import Statistics from "./component/statistics/Statistics";




function App() {


  return (
    <>
      <Header/>
      <Banner/>
      <Investor/>
      <Process/>
      <Statistics/>
      <RoadMap/>
      <Faq/>
      <Community/>
      <Footer/>
    </>
  )
}

export default App
