import Illustration from "public/illustration.svg";

const Announce = () => {
  return (
    <div className="announcement w-full min-h-[252px] flex justify-between items-end bg-[#F6CA45]">
      <div className="left-side w-full h-fit max-w-[394px] pl-9 py-9 shrink flex flex-col justify-between space-y-[16px]">
        <div className="title-description h-fit flex flex-col shrink space-y-[8px]">
          <div className="title font-bold text-[18px] max-w-[420px] shrink-0">
            Announcing a new platform, Codewell.
          </div>
          <div className="description w-full h-full overflow-y-hidden text-body text-base">
            Codewell is a platform that helps you improve your frontend skills
            by practicing on real world design templates.
          </div>
        </div>

        <div className="buttons shrink-0 w-full flex items-center text-sm">
          <button className="bg-black w-full max-w-[158px] max-px-[21px] py-[16px] rounded-[5px] text-white font-bold">
            Visit Codewell →
          </button>
          <button className="bg-transparent w-full max-w-[117px] max-px-[21px] py-[16px]">
            {" "}
            Learn More
          </button>
        </div>
      </div>

      <Illustration className="shrink-0 hidden md:block" />
    </div>
  );
};
export default Announce;
