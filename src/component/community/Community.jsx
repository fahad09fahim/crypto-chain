import character from "../../assets/background/characte.png";
import discordIco from "../../assets/discord.png";
const Community = () => {
  return (
    <div className="m-20">
      <div
        style={{
          backgroundImage: `url(${character})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="p-14 flex items-center flex-col gap-9">
          <p className="text-xl text-colorTwo">BE ONE OF OUR MEMBERS</p>
          <h1 className="text-6xl font-bold">
            Join Our <span className="text-colorOne">Community</span>
          </h1>
          <p className="text-custom-black text-sm">
            we make easy to Discover,invest and manage All your NFT,s At one
            palce
          </p>
          <button className="bg-gradient-to-r from-colorOne to-colorTwo flex text-white items-center py-3 px-6 rounded-lg">
            Discord <img src={discordIco} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
