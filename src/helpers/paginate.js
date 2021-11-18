const paginate = (paylooad, queryName, total, limit, page) => {
  const pageNum = page || 0;
  const output = { pageInfo: { total: 0, currentPage: 0, totalPages: 0 } };

  output[queryName] = [];
  if (paylooad.length) {
    output[queryName] = paylooad;
    output.pageInfo.total = total;
    output.pageInfo.currentPage = pageNum || 1;
    output.pageInfo.totalPages = Math.ceil(total / limit);
  }

  return output;
};

module.exports = paginate;
