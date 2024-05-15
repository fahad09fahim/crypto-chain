import "./Investor.css"
import bitgo from "../../../assets/iconInvestor/bit.png";
import coinBase from "../../../assets/iconInvestor/coin.png";
import trust from "../../../assets/iconInvestor/trust.png";
import meta from "../../../assets/iconInvestor/meta.png";

const Investor = () => {
    return (
        <div id="investor-bg" className="relative mt-24 px-15 md:px-20 flex flex-col">
            <div>
             <h2 className="text-xl md:text-3xl  font-bold text-center">Powered By Amazing Investors</h2>
            </div>
            <div className="grid grid-cols-4 place-items-center mt-10">
              <div className="flex items-center gap-1 text-xs md:text-lg font-bold text-colorOne">
                <img className="h-5 md:h-10 w-5 md:w-10 " src={bitgo} alt="" />
                <h2>BitGo</h2>
              </div>
              <div className="flex items-center gap-1 text-xs md:text-lg font-bold text-colorOne">
                <img className="h-5 md:h-10 w-5 md:w-10 " src={coinBase} alt="" />
                <h2>Coin Base</h2>
              </div>
              <div className="flex items-center gap-1 text-xs md:text-lg font-bold text-colorOne">
                <img className="h-5 md:h-10 w-5 md:w-10 " src={trust} alt="" />
                <h2>Trust wallet</h2>
              </div>
              <div className="flex items-center gap-1 text-xs md:text-lg font-bold text-colorOne">
                <img className="h-5 md:h-10 w-5 md:w-10 " src={meta} alt="" />
                <h2>Meta Musk</h2>
              </div>
            </div>
        </div>
    );
};

export default Investor;