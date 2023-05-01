export const WithdrawMoney = amount => {
    return (dispatch) => {
        dispatch({
            type: 'Withdraw',
            payload: amount
        })
        
      };
};

export const depositeMoney = amount => {
  return (dispatch) => {
    dispatch({
        type: 'deposite',
        payload: amount
    })
  };
};

