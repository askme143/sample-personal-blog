import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <footer className="footer w-full mt-[80px] flex flex-col items-center relative">
      <Newsletter />
      <div className="footer-text w-full px-[20px] lg:px-[90px] mt-[56px] mb-[40px] flex flex-col  md:flex-row items-center justify-between space-y-[24px] md:space-y-0">
        <div className="font-bold text-base text-center">Jessica Davidson</div>
        <div className="text-base text-center">
          © 2021 Jessica Davidson, All Rights Reserved
        </div>
        <div className="space-x-[24px] text-center">
          <a>LinkedIn</a>
          <a>Twitter</a>
        </div>
      </div>
      <div className="footer-bg absolute w-full h-[275px] bg-[#F6CA45] bottom-0 -z-10"></div>
    </footer>
  );
};
export default Footer;
