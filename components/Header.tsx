import Email from "public/email.svg";
import Menu from "public/menu.svg";

const Header = () => {
  return (
    <header className="nav-bar w-full h-[24px] lg:h-[49px] max-w-[1260px] flex flex-row items-center justify-between">
      <button className="logo font-bold text-base text-black">
        <h3>Jessica Davidson</h3>
      </button>
      <div className="nav-menu h-[39px] hidden lg:flex flex-row items-center font-normal text-base text-body space-x-[14px]">
        <button className="h-full p-[10px]">Writings</button>
        <button className="h-full p-[10px]">Awards</button>
        <button className="h-full p-[10px]">Sponsor</button>
      </div>
      <div className="nav-items h-full hidden lg:flex flex-row space-x-[24px]">
        <div className="h-full flex items-center rounded-[5px] bg-[#F3F5F7] pl-[24px] text-body">
          <Email className="text-body"></Email>
          <input
            type={"text"}
            placeholder="john@example.com"
            className="bg-transparent mx-[12px] text-sm outline-none"
          ></input>
        </div>
        <button className="bg-black text-white text-sm w-[155px] h-full rounded-[5px]">
          <div>Create New Post</div>
        </button>
      </div>
      <button className="nav-btn w-6 h-6 p-auto lg:hidden">
        <Menu />
      </button>
    </header>
  );
};

export default Header;
