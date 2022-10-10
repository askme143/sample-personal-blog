import { useState } from "react";
import Cookie from "public/cookie.svg";

const CookieWindow = () => {
  const [cookieAllowed, setCookieAllowed] = useState<boolean | undefined>(
    undefined
  );

  const onClickAccept = () => {
    setCookieAllowed(true);
  };

  const onClickDecline = () => {
    setCookieAllowed(false);
  };

  return cookieAllowed === undefined ? (
    <div className="cookie-container w-full max-w-[1300px] px-[20px] fixed top-[641px] flex justify-end z-10">
      <div className="cookie-window p-[36px]  border border-stroke rounded-[5px] bg-white">
        <div className="title-description w-[326px] grow-0">
          <div className="title flex items-center">
            <Cookie className="w-6 h-6" />
            <div className="font-bold text-base ml-4">Cookie Sttings</div>
          </div>
          <div className="description text-base mt-[6px]">
            <p className="text-body">
              We use cookies, some of them are essential others are optional.{" "}
              <a className="font-bold underline text-black">Learn more</a>
            </p>
          </div>
        </div>
        <div className="buttons text-sm space-x-[12px] mt-[18px]">
          <button
            className="py-[16px] px-[21px] rounded-[5px] bg-black text-white font-bold"
            onClick={onClickAccept}
          >
            Accept All Cookies
          </button>
          <button
            className="py-[16px] px-[46px] rounded-[5px] border border-stroke"
            onClick={onClickDecline}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
export default CookieWindow;
