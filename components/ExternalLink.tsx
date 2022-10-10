import NewWindow from "public/new-window.svg";

interface ExternalLinkProps {
  Icon: any;
  text: string;
}

const ExternalLink = ({ Icon, text }: ExternalLinkProps) => {
  return (
    <button className="flex w-full h-[52px] p-4 pr-[19px] flex-row items-center justify-between">
      <div className="content flex items-center space-x-[12px]">
        <Icon />
        <div>{text}</div>
      </div>
      <NewWindow className="text-body" />
    </button>
  );
};

export default ExternalLink;
