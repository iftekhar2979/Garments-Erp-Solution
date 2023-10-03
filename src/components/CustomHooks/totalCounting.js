export const totalCount=(state)=>{
    const reduced = Object.values(state);
    const totalQuanity = reduced.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    return totalQuanity
}

export const grandTotalQuantity=(state)=>{
  const totalQuantity = state.reduce((acc, cur) => {
    return acc + cur.totalQuantity;
  }, 0);
  return totalQuantity
}
export const isEmptyObj=function isEmptyObject(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}
