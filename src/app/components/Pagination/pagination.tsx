import { useRouter } from "next/navigation";

interface PaginatonProps {
  totalPages: number;
  currentPage: number;
}
const Pagination: React.FC<PaginatonProps> = ({ totalPages, currentPage }) => {
  const router = useRouter();
  const handlePageChange = (pageNumber: number) => {
    router.push(`?page=${pageNumber}`);
  };
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  return (
    <div className="flex bg-lime-400 rounded-2xl w-full items-center justify-center gap-2">
      {pageNumbers.map((pageNumber) => (
        <span
          className={`cursor-pointer ${
            currentPage == pageNumber ? "font-bold" : "text-gray-500"
          }`}
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </span>
      ))}
    </div>
  );
};
export default Pagination;
