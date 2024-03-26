import backgroundImg from "../../../assets/background/bgb-1.png";
import walletImg from "../../../assets/processImg/Wallet png.png";
import quantityImg from "../../../assets/processImg/Quantity.png";
import transactionImg from "../../../assets/processImg/Transaction.png";
import recivedImg from "../../../assets/processImg/Recived.png";
const Process = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="pt-4 m-9 md:m-12 lg:m-24 flex justify-center items-center flex-col text-center">
        <h1 className="text-center text-5xl font-bold mb-32">
          {" "}
          How To <span className="text-purple-600">Process</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card w-[350px] md:w-[300px] lg:w-[500px] bg-base-100 group shadow-lg hover:shadow-colorTwo  transition-shadow duration-500">
            <figure>
              <img src={walletImg} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="text-lg font-bold group-hover:text-colorOne ">
                Connect your Wallet
              </h2>
              <p>
                use trust wallet, metamask or any wallet to connect to the App
              </p>
            </div>
          </div>
          <div className="card w-[350px] md:w-[300px] lg:w-[500px] bg-base-100 shadow-lg group hover:shadow-colorTwo transition-shadow duration-500">
            <figure>
              <img src={quantityImg} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="text-lg font-bold group-hover:text-colorOne ">
                Select your quantity
              </h2>
              <p>Upload your NFTs and set a title, description and price.</p>
            </div>
          </div>
          <div className="card w-[350px] md:w-[300px] lg:w-[500px] bg-base-100 shadow-lg group hover:shadow-colorTwo transition-shadow duration-500 flex  items-center">
            <figure>
              <img src={transactionImg} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="text-lg font-bold group-hover:text-colorOne ">
                Confirm transaction
              </h2>
              <p>
                Earn ETH and BIT for all your NFTs that you sell on our
                marketplace.
              </p>
            </div>
          </div>
          <div className="card w-[350px] md:w-[300px] lg:w-[500px] bg-base-100 shadow-lg group hover:shadow-colorTwo transition-shadow duration-500">
            <figure>
              <img src={recivedImg} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="text-lg font-bold group-hover:text-colorOne ">
                Receive your NFTs
              </h2>
              <p>Latin professor at Hampden-Sydney College in Virginia.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
