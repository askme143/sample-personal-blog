import { useEffect, useState } from "react";
import Cookie from "public/cookie.svg";

const CookieWindow = () => {
  const [cookieAllowed, setCookieAllowed] = useState<boolean | undefined>(
    undefined
  );
  const [fadedOut, setFadedOut] = useState<boolean | undefined>(
    cookieAllowed !== undefined ? true : undefined
  );

  useEffect(() => {
    if (fadedOut === undefined || fadedOut) return;

    const timeout = setTimeout(() => {
      setFadedOut(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, [fadedOut]);

  const onClickAccept = () => {
    setCookieAllowed(true);
    setFadedOut(false);
  };

  const onClickDecline = () => {
    setCookieAllowed(false);
    setFadedOut(false);
  };

  return cookieAllowed === undefined || !fadedOut ? (
    <div
      className={`transition-opacity ease-out duration-300 ${
        fadedOut !== undefined ? "opacity-0" : "opacity-100"
      } cookie-container w-fit max-w-[1300px] fixed bottom-[120px] right-[15px] md:right-[40px] lg:right-[90px] flex justify-end z-10`}
    >
      <div className="cookie-window p-[36px] border border-stroke rounded-[5px] bg-white">
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
