import ArrowRight from "public/arrow-right.svg";

const Pagination = () => {
  return (
    <div className="w-full flex justify-end">
      <div className="paginatoin flex justify-between items-center space-x-[16px]">
        <button>
          <ArrowRight className="rotate-180" />
        </button>
        <div className="space-x-[6px]">
          <button className="w-[31px] h-[33px] text-sm font-normal bg-transparent rounded-[5px]">
            1
          </button>
          <button className="w-[31px] h-[33px] text-white text-sm font-bold bg-black rounded-[5px]">
            2
          </button>
          <button className="w-[31px] h-[33px] text-sm font-normal bg-transparent rounded-[5px]">
            3
          </button>
          <span className="w-[31px] h-[33px] text-sm font-normal bg-transparent rounded-[5px]">
            ...
          </span>
          <button className="w-[31px] h-[33px] text-sm font-normal bg-transparent rounded-[5px]">
            22
          </button>
        </div>
        <button>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
