import Image, { StaticImageData } from "next/image";

type PostProps = {
  image: StaticImageData;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  avatar: string;
};

export default function PostCard(props: PostProps) {
  const { image, title, description, category, author, date, avatar } = props;

  return (
    <div className="bg-[#00113A] rounded-2xl overflow-hidden shadow-md w-full flex flex-col">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="w-full h-40 object-cover"
      />

      <div className="p-5 flex flex-col grow">
        <span className="bg-blue-600 text-xs font-semibold uppercase px-3 py-1 rounded-full w-fit mb-3">
          {category}
        </span>

        <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
        <p className="text-[13px] text-white/70 mb-4 grow">{description}</p>

        <div className="border-t border-white/10 pt-4 flex items-center gap-3">
          <Image
            src={avatar}
            alt={author}
            width={8}
            height={8}
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-sm font-semibold uppercase">{author}</p>
            <p className="text-xs text-white/60">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
