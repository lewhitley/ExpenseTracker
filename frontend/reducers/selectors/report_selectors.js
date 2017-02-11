const dateCompare = (a, b) => {
  if (a.created_at < b.created_at) {
    return -1;
  } else if (a.created_at > b.created_at) {
    return 1;
  } else {
    return 0;
  }
};

export const reportArray = expenses => {
  let array = Object.keys(expenses).map(key => expenses[key]);
  return array.sort(dateCompare);
};
