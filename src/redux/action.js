
export const Counter = "ADDCOUNT";


function addcount(data) {
  return {
      type:Counter,
      payload:data
  }
}

export default addcount