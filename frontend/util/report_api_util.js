export const fetchReport = (params, success) => {
  $.ajax({
    datatype: 'json',
    url: `/api/expenses`,
    type: 'GET',
    data: {filter: params},
    success
  });
};
