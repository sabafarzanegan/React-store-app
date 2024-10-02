export type customUrlParam = {
  pageNumber: Number;
  search: string;
  pathname: string;
};

export const costumUrl = ({
  pageNumber,
  search,
  pathname,
}: customUrlParam): string => {
  const searchParams = new URLSearchParams(search);
  searchParams.set("page", pageNumber.toString());
  return `${pathname}?${searchParams.toString()}`;
};

type prevOrNextUrl = {
  currentPage: number;
  pageCount: number;
  search: string;
  pathname: string;
};

export const nextOrPrevUrl = ({
  currentPage,
  pageCount,
  search,
  pathname,
}: prevOrNextUrl): { prevUrl: string; nextUrl: string } => {
  let prevPage = currentPage - 1;
  if (prevPage < 1) prevPage = pageCount;
  const prevUrl = costumUrl({ pageNumber: prevPage, search, pathname });
  let nextpage = currentPage + 1;
  if (nextpage > pageCount) nextpage = 1;
  const nextUrl = costumUrl({ pageNumber: nextpage, search, pathname });
  return { prevUrl, nextUrl };
};
