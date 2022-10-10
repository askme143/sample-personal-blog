import Saas from "public/saas.svg";
import Design from "public/design.svg";
import Development from "public/development.svg";
import Behance from "public/behance.svg";
import Twitter from "public/twitter.svg";
import LinkedIn from "public/linked-in.svg";

import TagButton from "./TagButton";
import ExternalLink from "./ExternalLink";

const LeftSide = () => {
  return (
    <div className="left-side w-40 mr-[60px] hidden lg:flex flex-col space-y-[16px] text-normal text-body">
      <div className="tags w-full space-y-[4px]">
        <TagButton Icon={Saas} text="Saas" />
        <TagButton Icon={Design} text="Design" />
        <TagButton Icon={Development} text="Development" />
      </div>
      <hr className="separator w-full border-t border-stroke" />
      <div className="external-links w-full space-y-[4px]">
        <ExternalLink Icon={Behance} text="behance" />
        <ExternalLink Icon={Twitter} text="Twitter" />
        <ExternalLink Icon={LinkedIn} text="LinkedIn" />
      </div>
    </div>
  );
};

export default LeftSide;
