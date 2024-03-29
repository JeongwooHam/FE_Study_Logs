export const handlePagination = async (
  page,
  limit,
  take,
  count,
  path,
  defineFunc
) => {
  const totalPage = Math.ceil(count / parseInt(take));
  let startPage = Math.floor((page - 1) / limit) * limit + 1;
  let endPage = parseInt(startPage) + parseInt(limit) - 1;

  if (endPage >= totalPage) endPage = totalPage;
  if (startPage > endPage && endPage < totalPage) {
    startPage = endPage;
    endPage = startPage + limit - 1;
  }

  return {
    PageNation: {
      totalCount: count,
      totalPage,
      currentPage: parseInt(page),
      startPage,
      endPage,
    },
    [path]: defineFunc(parseInt(take)),
  };
};
