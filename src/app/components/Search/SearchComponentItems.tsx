import Image from "next/image";

const SearchComponentItems = () => {
  return (
    <section className="bg-blue-200 rounded-2xl flex flex-col  w-[75%] md:w-[100%] transition-opacity duration-1000">
      <div className="border-2 rounded-2xl flex gap-2 p-2">
        <section>
          <Image
            height={50}
            width={50}
            alt="product 1"
            src={"https://placehold.co/200x200"}
          />
        </section>
        <section className="flex flex-col justify-center ">
          <p className="text-sm">Brand 1</p>
          <p className="text-sm">Product 1</p>
        </section>
        <section className="flex items-center">
          <p className="text-sm font-bold">113 $</p>
        </section>
      </div>
    </section>
  );
};
export default SearchComponentItems;
