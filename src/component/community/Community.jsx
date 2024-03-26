import character from "../../assets/background/characte.png";
import discordIco from "../../assets/discord.png";
const Community = () => {
  return (
    <div className="m-5 md:m-10 lg:m-20">
      <div
        style={{
          backgroundImage: `url(${character})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="p-5 md:p-14 flex items-center flex-col gap-4 md:gap-9">
          <p className="text-lg md:text-xl text-colorTwo">BE ONE OF OUR MEMBERS</p>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
            Join Our <span className="text-colorOne">Community</span>
          </h1>
          <p className="text-custom-black text-sm text-center">
            we make easy to Discover,invest and manage All your NFT,s At one
            palce
          </p>
          <button className="bg-gradient-to-r from-colorOne to-colorTwo flex text-white items-center py-1 md:py-3 px-2 md:px-6 rounded-lg">
            Discord <img src={discordIco} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
