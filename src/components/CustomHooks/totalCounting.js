export const totalCount=(state)=>{
    const reduced = Object.values(state);
    const totalQuanity = reduced.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    return totalQuanity
}