

const Statistics = () => {
    return (
        <div className="flex justify-center py-12">
            <div className="grid grid-cols-3 text-center gap-6">
                  <div>
                   <h2 className="text-sm md:text-4xl font-semibold text-colorOne ">3000+</h2>
                   <p className="text-[8px] md:text-xs text-custom-black">Wallet Connect</p>
                  </div>
                  <div>
                   <h2 className="text-sm md:text-4xl font-semibold text-colorOne ">50,000+</h2>
                   <p className="text-[8px] md:text-xs text-custom-black">Collections Indexed every 5 mins.</p>
                  </div>
                  <div>
                  <h2 className="text-sm md:text-4xl font-semibold text-colorOne ">4.7X</h2>
                  <p className="text-[8px] md:text-xs text-custom-black">Difference in Floor & Estimated Value</p>
                  </div>
            </div>
        </div>
    );
};

export default Statistics;