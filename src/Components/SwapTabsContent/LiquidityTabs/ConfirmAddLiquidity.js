import { Modal } from 'react-bootstrap';
import PuffLoader from 'react-spinners/PuffLoader';

const ConfirmAddLiquidity = (props) => {
  return (
    <Modal
      show={props.showConfirmAddSupply}
      animation={false}
      onHide={props.onHide}
      className="confirm-swap-modal confirm-add-liquidity-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>You will receive</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <div className="swap-content-box-wrapper">
            <div className="swap-content-box">
              <div className="swap-token-select-box">
                <div className="token-selector-balance-wrapper">
                  <button className="token-selector">
                    <img src={props.tokenIn.image} className="button-logo" />
                    <img src={props.tokenOut.image} className="button-logo" />
                  </button>
                </div>

                <div className="token-user-input-wrapper">
                  <p className="lp-token-info-desc">
                    {props.lpTokenAmount.estimatedLpOutput}
                  </p>
                  <p className="lp-token-info-desc">
                    {props.tokenIn.name}/{props.tokenOut.name} LP Tokens
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="swap-detail-wrapper">
            <div className="swap-detail-rates-wrapper flex justify-between">
              <p className="swap-detail-amt-details">Rates</p>
              <div className="token-user-input-wrapper">
                {props.swapData.tokenOutPerTokenIn ? (
                  <p className="swap-detail-amt-details">
                    1 {props.tokenIn.name} ={' '}
                    {props.swapData.tokenOutPerTokenIn.toFixed(10)}{' '}
                    {props.tokenOut.name}
                  </p>
                ) : null}

                {props.swapData.tokenOutPerTokenIn ? (
                  <p className="swap-detail-amt-details">
                    1 {props.tokenOut.name} ={' '}
                    {(1 / props.swapData.tokenOutPerTokenIn).toFixed(10)}{' '}
                    {props.tokenIn.name}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="swap-detail-amt-wrapper">
              <p className="swap-detail-amt-details">
                {props.tokenIn.name} deposited{' '}
              </p>
              <p className="swap-detail-amt-details">
                {props.firstTokenAmount} {props.tokenIn.name}
              </p>
            </div>

            <div className="swap-detail-amt-wrapper">
              <p className="swap-detail-amt-details">
                {props.tokenOut.name} deposited{' '}
              </p>
              <p className="swap-detail-amt-details">
                {props.secondTokenAmount
                  ? props.secondTokenAmount
                  : props.estimatedTokenAmout.otherTokenAmount}{' '}
                {props.tokenOut.name}
              </p>
            </div>

            <div className="swap-detail-amt-wrapper">
              <p className="swap-detail-amt-details">Share of Pool </p>
              <p className="swap-detail-amt-details">
                {(
                  (props.lpTokenAmount.estimatedLpOutput /
                    (props.swapData.lpTokenSupply +
                      props.lpTokenAmount.estimatedLpOutput)) *
                  100
                ).toFixed(5)}{' '}
                %
              </p>
            </div>

            {props.loading ? (
              <button className="swap-content-btn loader-btn">
                <PuffLoader color={'#fff'} size={28} />
              </button>
            ) : (
              <button
                className="swap-content-btn"
                onClick={props.CallConfirmAddLiquidity}
              >
                Confirm Supply
              </button>
            )}
          </div>
        </>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmAddLiquidity;