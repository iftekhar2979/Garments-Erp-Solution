export const totalCount=(state)=>{
    const reduced = Object.values(state);
    const totalQuanity = reduced.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    return totalQuanity
<<<<<<< HEAD
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
=======
}
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
