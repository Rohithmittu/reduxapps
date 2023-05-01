import React from "react";
import { useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
import { actionCreaters } from "./state/index";
import { bindActionCreators } from "redux";

const Shop = () => {
  const dispatch = useDispatch();
  const {WithdrawMoney , depositeMoney  } = bindActionCreators(actionCreaters,dispatch);
  return (
    <div className='container'>
      <h2>deposite/withdraw Money</h2>
      <button
        className='btn btn-primary mx-3'
        onClick={() => {
          WithdrawMoney(100);
        }}>
        -
      </button>
      Update Balance
      <button
        className='btn btn-primary mx-3'
        onClick={() => {
          depositeMoney(100);
        }}>
        +
      </button>
      {/* <button
        className='btn btn-primary mx-3'
        onClick={() => {
          dispatch(actionCreaters.WithdrawMoney(100));
        }}>
        -
      </button>
      Update Balance
      <button
        className='btn btn-primary mx-3'
        onClick={() => {
          dispatch(actionCreaters.depositeMoney(100));
        }}>
        +
      </button> */}
    </div>
  );
};

export default Shop;
