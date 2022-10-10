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
    <div className="post w-full h-fit md:h-[260px] p-6 md:p-9 flex flex-col justify-between items-center border border-stroke rounded-[5px]">
      <div className="post-content w-full h-[352px] shrink flex flex-col-reverse md:flex-row justify-between space-y-[16px]">
        <button className="title-description max-w-[480px] h-[140px] flex flex-col text-left shrink space-y-[8px]">
          <div className="title font-bold text-lg max-w-[420px]">{title}</div>
          <div className="description h-full overflow-y-hidden text-body text-base">
            {description}
          </div>
        </button>
        <div className="w-full md:w-[210px] h-[164px] md:h-[140px] my-6 md:py-0 md:pl-[9px] shrink-0 text-right overflow-hidden">
          <Image
            src={imageSrc}
            layout="responsive"
            width={201}
            height={140}
            alt="post image"
          />
        </div>
      </div>
      <div className="post-footer w-full mt-[8px] md:mt-[1px] h-fit md:shrink-0 flex justify-between items-end">
        <div className="author shrink-0 h-[32px] flex flex-wrap items-center space-x-[10px] overflow-hidden">
          <button>
            <User />
          </button>
          <button>
            <div className="name font-bold text-sm">{author}</div>
          </button>
          <div className="name font-normal text-sm text-body">∙</div>
          <div className="name font-normal text-sm text-body">{ago}</div>
        </div>
        <div className="date h-[17px] hidden md:block font-normal text-body text-sm">
          {date}
        </div>
      </div>
    </div>
  );
};
export default Post;
