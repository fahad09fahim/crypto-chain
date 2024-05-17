const Faq = () => {
  return (
    <div className="relative mx-auto px-[2rem] md:px-[1rem] lg:mx-[20rem] text-center">
      <h2 className="text-4xl font-medium mb-2  ">FAQ</h2>
      <p className="text-lg text-slate-400">Every thing you need to know about the product and billing</p>
      <div className="mt-4">
        <div className="collapse bg-base-100 border-b-[1px]">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium text-start">
            Is there a free trail available?
          </div>
          <div className="collapse-content">
            <p className="text-neutral-500">Yes, you can try us for 30days. If you want, we'll provide you a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
          </div>
        </div>
        <div className="collapse bg-base-100 border-b-[1px]">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium text-start">
            Can i change my plan later?
          </div>
          <div className="collapse-content">
            <p className="text-neutral-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, omnis perspiciatis quis error possimus magnam illo eos quidem quae itaque..</p>
          </div>
        </div>
        <div className="collapse bg-base-100 border-b-[1px]">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium text-start">
            What is your cancellation policy?
          </div>
          <div className="collapse-content">
            <p className="text-neutral-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, omnis perspiciatis quis error possimus magnam illo eos quidem quae itaque..</p>
          </div>
        </div>
        <div className="collapse bg-base-100 border-b-[1px]">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium text-start">
            How does billing work?
          </div>
          <div className="collapse-content">
            <p className="text-neutral-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, omnis perspiciatis quis error possimus magnam illo eos quidem quae itaque..</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
