const Counter = (state ='0' , action ) =>{
  switch (action.type){
    case 'ADDSTATE' : return state = action.url;
  }
  return state
}

export default Counter;