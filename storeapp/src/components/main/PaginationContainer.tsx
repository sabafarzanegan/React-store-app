import { costumUrl, nextOrPrevUrl } from "@/lib/CustomUrlParam";
import { productRespobseWithParams } from "@/lib/Types";
import { useLoaderData, useLocation } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

function PaginationContainer() {
  const { meta } = useLoaderData() as productRespobseWithParams;
  const { pageCount, page } = meta.pagination;
  const { search, pathname } = useLocation();
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  const renderPagination = pages.map((pageNumber) => {
    const isActive = pageNumber === page;
    const url = costumUrl({ pageNumber, search, pathname });
    return (
      <PaginationItem>
        <PaginationLink to={url} isActive={isActive}>
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    );
  });
  const { nextUrl, prevUrl } = nextOrPrevUrl({
    currentPage: page,
    pageCount,
    search,
    pathname,
  });
  if (pageCount < 2) return null;
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationNext to={nextUrl} />
        </PaginationItem>
        {renderPagination}
        <PaginationItem>
          <PaginationPrevious to={prevUrl} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationContainer;
