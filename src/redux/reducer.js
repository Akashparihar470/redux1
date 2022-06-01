
import addcount, { Counter } from "./action"
import { store } from "./store"

function reducer(store,addcount) {
  switch(addcount.type){
      case Counter:
          return {...store, count: store.count+addcount.payload}
      default:
          return store    
  }
}

export default reducer