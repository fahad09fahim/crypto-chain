import "./Investor.css"
import bitgo from "../../../assets/iconInvestor/bit.png";
import coinBase from "../../../assets/iconInvestor/coin.png";
import trust from "../../../assets/iconInvestor/trust.png";
import meta from "../../../assets/iconInvestor/meta.png";

const Investor = () => {
    return (
        <div id="investor-bg" className="m-24 flex flex-col">
            <div>
             <h2 className="text-[24px] font-bold text-center">Powered By Amazing Investors</h2>
            </div>
            <div className="flex justify-between items-center mt-10 p-3">
              <div className="flex items-center gap-1 text-lg font-bold text-colorOne">
                <img src={bitgo} alt="" />
                <h2>BitGo</h2>
              </div>
              <div className="flex items-center gap-1 text-lg font-bold text-colorOne">
                <img src={coinBase} alt="" />
                <h2>Coin Base</h2>
              </div>
              <div className="flex items-center gap-1 text-lg font-bold text-colorOne">
                <img src={trust} alt="" />
                <h2>Trust wallet</h2>
              </div>
              <div className="flex items-center gap-1 text-lg font-bold text-colorOne">
                <img src={meta} alt="" />
                <h2>Meta Musk</h2>
              </div>
            </div>
        </div>
    );
};

export default Investor;