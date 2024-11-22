import SearchComponentItems from "./SearchComponentItems";

const SearchComponent = () => {
  return (
    <div
      className="
        p-4 z-50
        absolute top-[110%] z-90909909123
        w-[150%] sm:w-[200%] md:w-[300%]
        rounded-3xl flex flex-col 
        justify-center items-center
        bg-gray-200
        gap-2"
    >
      <p className="text-sm">
        <span className="font-bold italic ">5 </span>items found
      </p>
      <SearchComponentItems />
      <SearchComponentItems />
      <SearchComponentItems />
    </div>
  );
};
export default SearchComponent;
