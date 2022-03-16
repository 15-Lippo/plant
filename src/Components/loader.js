import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';
//import { PuffLoader } from 'react-spinners';
import { ReactComponent as SuccessImg } from '../assets/images/status.svg';
import { ReactComponent as ErrorImg } from '../assets/images/errorImg.svg';
import '../assets/scss/animation.scss';
import useMediaQuery from '../hooks/mediaQuery';

const Loader = (props) => {
  const isMobile = useMediaQuery('(max-width: 991px)');

  const closeFlashMessage = () => {
    props.setLoaderMessage({});
  };
  // if (props.loading) {
  //   return (
  //     <div className="loading-data-wrapper">
  //       <PuffLoader color="var(--theme-primary-1)" size={36} />
  //     </div>
  //   );
  // }

  if (props.loaderMessage.type) {
    return (
      <div
        className={clsx(
          'loader-message-wrapper',
          props.loaderMessage.type,
          isMobile
            ? 'bottomToTopFadeInAnimation-4-floater'
            : 'rightToLeftFadeInAnimation-4-floater',
        )}
      >
        {props.loaderMessage.type === 'success' ? (
          props.tokenIn ? (
            <div className="d-flex ">
              <div>
                <SuccessImg />
              </div>
              <div className="floater-text">
                <span className="status-text">
                  Swap of {props.firstTokenAmount} {props.tokenIn} for {props.secondTokenAmount}{' '}
                  {props.tokenOut}{' '}
                </span>
                <div className="view-tezos">
                  View on tezos{' '}
                  <span className=" material-icons-round launch-icon-flash">launch</span>
                </div>
              </div>
              <div className="ml-auto">
                <span
                  className=" material-icons-round "
                  onClick={closeFlashMessage}
                  style={{ cursor: 'pointer' }}
                >
                  close
                </span>
              </div>
            </div>
          ) : (
            <div className="flex flex-row">
              <div>
                <SuccessImg />
              </div>
              <div className="ml-3">
                <span className="status-text">Swap of 2 wUSDC for 2.293 USDC.e </span>
                <div className="view-tezos">
                  View on tezos{' '}
                  <span className="ml-3 material-icons-round launch-icon-flash">launch</span>
                </div>
              </div>
              <div className="ml-auto">
                <span
                  className="material-icons-round ml-3"
                  onClick={closeFlashMessage}
                  style={{ cursor: 'pointer' }}
                >
                  close
                </span>
              </div>
            </div>
          )
        ) : (
          <>
            <div className="flex flex-row">
              <div>
                <ErrorImg />
              </div>
              <div className="floater-text">
                <span className="status-text">Tranaction Failed</span>
                <div className="view-tezos">
                  View on tezos{' '}
                  <span className="material-icons-round launch-icon-flash">launch</span>
                </div>
              </div>
              <div className="ml-auto">
                <span
                  className="material-icons-round "
                  onClick={closeFlashMessage}
                  style={{ cursor: 'pointer' }}
                >
                  close
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default Loader;

Loader.propTypes = {
  loaderMessage: PropTypes.object,
  loading: PropTypes.bool,
  tokenIn: PropTypes.any,
  firstTokenAmount: PropTypes.any,
  tokenOut: PropTypes.any,
  secondTokenAmount: PropTypes.any,
  setLoaderMessage: PropTypes.func,
};
