const RightSide = () => {
  return (
    <div className="right-side w-40 ml-[60px] hidden lg:flex flex-col space-y-[31px]">
      <div className="search-guide w-full h-[53px] rounded-[5px] p-[17px] flex items-center justify-between border border-stroke text-sm text-body">
        <div>Search Posts</div>
        <div className="w-[31px] h-[21px] rounded-[5px] border border-stroke text-center">
          ⌘S
        </div>
      </div>
      <div className="search-guide w-full h-[247px] rounded-[5px] border border-stroke space-y-[16px] p-6">
        <div className="projects-title text-base font-bold h-[19px]">
          Projects
        </div>
        <hr className="border-t border-stroke" />
        <div className="projects flex flex-col space-y-[9px] font-normal text-body text-base">
          <a href="#">Codewell</a>
          <a href="#">Spense</a>
          <a href="#">YelpCamp</a>
          <a href="#">Google Algorithms</a>
        </div>
      </div>
    </div>
  );
};
export default RightSide;
