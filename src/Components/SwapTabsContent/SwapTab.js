import SwapDetails from '../SwapDetails';
import ConfirmSwap from './ConfirmSwap';
import { swapTokens } from '../../apis/swap/swap';

const SwapTab = (props) => {
  const callSwapToken = () => {
    props.setLoading(true);
    props.setShowConfirmSwap(true);
  };

  const confirmSwapToken = () => {
    let recepientAddress = props.recepient
      ? props.recepient
      : props.walletAddress;

    console.log(
      props.tokenIn.name,
      props.tokenOut.name,
      props.computedOutDetails.minimum_Out,
      recepientAddress,
      props.firstTokenAmount,
      props.walletAddress
    );
    swapTokens(
      props.tokenIn.name,
      props.tokenOut.name,
      props.computedOutDetails.minimum_Out,
      recepientAddress,
      props.firstTokenAmount,
      props.walletAddress
    ).then((swapResp) => {
      if (swapResp.success) {
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
        <button className="swap-content-btn" onClick={callSwapToken}>
          Swap
        </button>
      );
    } else if (props.firstTokenAmount && !props.tokenOut.name) {
      swapContentButton = (
        <button className="swap-content-btn enter-amount">
          Select a token to swap
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
      <div className="swap-content-box-wrapper">
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
                onChange={(e) => props.setFirstTokenAmount(e.target.value)}
              />
            </div>
            {props.walletAddress ? (
              <div
                className="flex justify-between"
                style={{ flex: '0 0 100%' }}
              >
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
          <span className="material-icons-outlined">south</span>
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
                value={
                  props.tokenOut.name
                    ? props.computedOutDetails.tokenOut_amount
                    : '0.00'
                }
                placeholder="0.0"
              />
            </div>
            {props.walletAddress && props.tokenOut.name ? (
              <div
                className="flex justify-between"
                style={{ flex: '0 0 100%' }}
              >
                <p className="wallet-token-balance">
                  Balance: {props.userBalances[props.tokenOut.name]}
                </p>
                <p className="wallet-token-balance">
                  ~$
                  {props.getTokenPrice.success &&
                  props.computedOutDetails.tokenOut_amount
                    ? (
                        props.computedOutDetails.tokenOut_amount *
                        props.getTokenPrice.tokenPrice[props.tokenOut.name]
                      ).toFixed(5)
                    : '0.00'}
                </p>
              </div>
            ) : null}
          </div>
        </div>
        {props.walletAddress && props.swapData.success ? (
          <p style={{ margin: 0, textAlign: 'right', fontSize: '10px' }}>
            1 {props.tokenIn.name} = {props.swapData.tokenOutPerTokenIn}{' '}
            {props.tokenOut.name}
          </p>
        ) : null}
        {swapContentButton}
        {props.walletAddress &&
        props.firstTokenAmount &&
        props.tokenOut.name ? (
          <SwapDetails
            computedOutDetails={props.computedOutDetails}
            tokenIn={props.tokenIn}
            tokenOut={props.tokenOut}
          />
        ) : null}
      </div>

      <ConfirmSwap
        show={props.showConfirmSwap}
        computedOutDetails={props.computedOutDetails}
        tokenIn={props.tokenIn}
        firstTokenAmount={props.firstTokenAmount}
        tokenOut={props.tokenOut}
        slippage={props.slippage}
        confirmSwapToken={confirmSwapToken}
        onHide={props.handleClose}
      />
    </>
  );
};

export default SwapTab;
