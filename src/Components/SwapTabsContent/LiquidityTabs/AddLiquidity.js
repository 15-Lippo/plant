import {
  estimateOtherToken,
  addLiquidity,
  lpTokenOutput,
} from '../../../apis/swap/swap';
import { useState } from 'react';

import ConfirmAddLiquidity from './ConfirmAddLiquidity';

const AddLiquidity = (props) => {
  const [estimatedTokenAmout, setEstimatedTokenAmout] = useState(0);
  const [lpTokenAmount, setLpTokenAmount] = useState({});

  const handleLiquidityInput = (input) => {
    const estimatedTokenAmout = estimateOtherToken(
      input,
      props.swapData.tokenIn_supply,
      props.swapData.tokenOut_supply
    );
    setEstimatedTokenAmout(estimatedTokenAmout);
  };
  const confirmAddLiquidity = () => {
    props.setLoading(true);
    props.setShowConfirmAddSupply(true);
    const lpTokenAmount = lpTokenOutput(
      props.firstTokenAmount,
      props.computedOutDetails.tokenOut_amount,
      props.swapData.tokenIn_supply,
      props.swapData.tokenOut_supply,
      props.swapData.lpTokenSupply
    );
    setLpTokenAmount(lpTokenAmount);
  };

  const CallConfirmAddLiquidity = () => {
    addLiquidity(
      props.tokenIn.name,
      props.tokenOut.name,
      props.firstTokenAmount,
      estimatedTokenAmout.otherTokenAmount,
      props.walletAddress
    ).then((data) => {
      if (data.success) {
        props.setLoading(false);
        props.handleLoaderMessage('success', 'Transaction confirmed');
      } else {
        props.setLoading(false);
        props.handleLoaderMessage('error', 'Transaction failed');
      }
    });
  };

  let swapContentButton = (
    <button className="swap-content-btn" onClick={props.connecthWallet}>
      <span className="material-icons-outlined">add</span> Connect Wallet
    </button>
  );

  if (props.walletAddress) {
    if (props.tokenOut.name && props.firstTokenAmount) {
      swapContentButton = (
        <button className="swap-content-btn" onClick={confirmAddLiquidity}>
          Add Liquidity
        </button>
      );
    } else if (props.firstTokenAmount && !props.tokenOut.name) {
      swapContentButton = (
        <button className="swap-content-btn enter-amount">
          Select a token to add
        </button>
      );
    } else {
      swapContentButton = (
        <button className="swap-content-btn enter-amount">
          Enter an amount
        </button>
      );
    }
  }
  return (
    <>
      <div className="swap-content-box">
        <div className="swap-token-select-box">
          <div className="token-selector-balance-wrapper">
            <button
              className="token-selector"
              onClick={() => props.handleTokenType('tokenIn')}
            >
              <img src={props.tokenIn.image} className="button-logo" />
              {props.tokenIn.name}{' '}
              <span className="material-icons-outlined">expand_more</span>
            </button>
          </div>

          <div className="token-user-input-wrapper">
            <input
              type="text"
              className="token-user-input"
              placeholder="0.0"
              onChange={(e) => {
                props.setFirstTokenAmount(e.target.value);
                handleLiquidityInput(e.target.value);
              }}
            />
          </div>
          {props.walletAddress ? (
            <div className="flex justify-between" style={{ flex: '0 0 100%' }}>
              <p className="wallet-token-balance">
                Balance: {props.userBalances[props.tokenIn.name]}
              </p>
              <p className="wallet-token-balance">
                ~$
                {props.getTokenPrice.success && props.firstTokenAmount
                  ? (
                      props.firstTokenAmount *
                      props.getTokenPrice.tokenPrice[props.tokenIn.name]
                    ).toFixed(5)
                  : '0.00'}
              </p>
            </div>
          ) : null}
        </div>
      </div>

      <div className="swap-arrow-center">
        <span className="material-icons-outlined">add</span>
      </div>

      <div className="swap-content-box">
        <div className="swap-token-select-box">
          <div className="token-selector-balance-wrapper">
            {props.tokenOut.name ? (
              <button
                className="token-selector"
                onClick={() => props.handleTokenType('tokenOut')}
              >
                <img src={props.tokenOut.image} className="button-logo" />
                {props.tokenOut.name}{' '}
                <span className="material-icons-outlined">expand_more</span>
              </button>
            ) : (
              <button
                className="token-selector not-selected"
                onClick={() => props.handleTokenType('tokenOut')}
              >
                Select a token{' '}
                <span className="material-icons-outlined">expand_more</span>
              </button>
            )}
          </div>

          <div className="token-user-input-wrapper">
            <input
              type="text"
              className="token-user-input"
              placeholder="0.0"
              value={estimatedTokenAmout.otherTokenAmount}
            />
          </div>
          {props.walletAddress && props.tokenOut.name ? (
            <div className="flex justify-between" style={{ flex: '0 0 100%' }}>
              <p className="wallet-token-balance">
                Balance: {props.userBalances[props.tokenOut.name]}
              </p>
              <p className="wallet-token-balance">
                ~$
                {props.getTokenPrice.success &&
                estimatedTokenAmout.otherTokenAmount
                  ? (
                      estimatedTokenAmout.otherTokenAmount *
                      props.getTokenPrice.tokenPrice[props.tokenOut.name]
                    ).toFixed(5)
                  : '0.00'}
              </p>
            </div>
          ) : null}
        </div>
      </div>
      {swapContentButton}
      <ConfirmAddLiquidity
        {...props}
        CallConfirmAddLiquidity={CallConfirmAddLiquidity}
        lpTokenAmount={lpTokenAmount}
      />
    </>
  );
};

export default AddLiquidity;
