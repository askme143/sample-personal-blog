import User from "public/user.svg";
import Image from "components/Image";

interface PostProps {
  title: string;
  description: string;
  author: string;
  ago: string;
  date: string;
  imageSrc: string;
}

const Post = ({
  title,
  description,
  ago,
  date,
  author,
  imageSrc,
}: PostProps) => {
  return (
    <div className="post w-full h-[260px] p-9 flex justify-between items-center border border-stroke rounded-[5px]">
      <div className="left-side w-full h-full max-w-[480px] shrink flex flex-col justify-between space-y-[16px]">
        <button className="title-description h-[140px] flex flex-col text-left shrink space-y-[8px]">
          <div className="title font-bold text-lg max-w-[420px] shrink-0">
            {title}
          </div>
          <div className="description w-full h-full overflow-y-hidden text-body text-base">
            {description}
          </div>
        </button>
        <div className="author shrink-0 flex items-center space-x-[10px]">
          <button>
            <User />
          </button>
          <button>
            <div className="name font-bold text-sm">{author}</div>
          </button>
          <div className="name font-normal text-sm text-body">∙</div>
          <div className="name font-normal text-sm text-body">{ago}</div>
        </div>
      </div>
      <div className="right-side w-[210px] ml-[10px] h-full shrink-0 flex flex-col justify-between items-end">
        <Image
          src={imageSrc}
          width={201}
          height={140}
          alt="post image"
          className="w-[201px] h-[140px]"
        />
        <div className="date font-normal text-body text-sm">{date}</div>
      </div>
    </div>
  );
};
export default Post;
