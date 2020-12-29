const setSortBy = (name) => ({
  type: 'SET-SORT_BY',
  payload: name,
});

const setCategory = (catIndex) => ({
  type: 'SET-CATEGORY',
  payload: catIndex,
});
