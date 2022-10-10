interface TagButtonProps {
  Icon: (props: any) => JSX.Element;
  text: string;
}

const TagButton = ({ Icon, text }: TagButtonProps) => {
  return (
    <button className="flex w-full h-[47px] p-4 flex-row items-center space-x-[12px]">
      <Icon />
      <div>{text}</div>
    </button>
  );
};
export default TagButton;
