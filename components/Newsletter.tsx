import Image from "components/Image";

const Newsletter = () => {
  return (
    <div className="announcement w-[820px] h-[321px] max-w-full pt-14 pl-14 flex justify-between items-center bg-black rounded-[5px]">
      <div className="left-side w-full h-full max-w-[301px] flex flex-col space-y-[16px]">
        <div className="title-description h-fit flex flex-col shrink space-y-[8px]">
          <div className="title max-w-[420px] h-fit font-bold text-[18px] text-white">
            Want to stay up to date with my project Codewell?
          </div>
          <div className="description w-full h-fit text-[#ADADAD] text-base font-normal">
            Receive non-frequent emails about my startup Codewell, you can
            unsubscribe any time.
          </div>
        </div>
        <input
          type={"text"}
          placeholder="john@example.com"
          className="email bg-white px-[24px] py-[16px] outline-none rounded-[5px] text-body text-sm"
        />
      </div>

      <div className="w-[421px] h-[265px] ml-4 shrink">
        <Image
          src="/newsletter-image.png"
          width={421}
          height={265}
          alt="newsletter image"
        />
      </div>
    </div>
  );
};
export default Newsletter;
