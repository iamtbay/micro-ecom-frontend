import FavoriteIcon from "@/app/icons/FavoriteIcon";
import Image from "next/image";

const ImageComponent = () => {
  return (
    <section className="flex flex-col gap-4 max-w-[500px]">
      <div className="relative bg-blue-200">
        <span className="absolute right-2 top-2 rounded-full border-2 p-2 cursor-pointer hover:border-red-200 duration-500">
          <FavoriteIcon />
        </span>
        <Image
          height={500}
          width={500}
          src={"https://placehold.co/200x200"}
          alt="image"
        />
      </div>
      <div className="flex gap-2 justify-between">
        <Image
          height={80}
          width={80}
          src={"https://placehold.co/200x200"}
          alt="image"
        />
        <Image
          height={80}
          width={80}
          src={"https://placehold.co/200x200"}
          alt="image"
        />
        <Image
          height={80}
          width={80}
          src={"https://placehold.co/200x200"}
          alt="image"
        />
        <Image
          height={80}
          width={80}
          src={"https://placehold.co/200x200"}
          alt="image"
        />
      </div>
    </section>
  );
};
export default ImageComponent;
