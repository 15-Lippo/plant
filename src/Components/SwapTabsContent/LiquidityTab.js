import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import AddLiquidity from './LiquidityTabs/AddLiquidity';
import RemoveLiquidity from './LiquidityTabs/RemoveLiquidity';

const LiquidityTab = (props) => {
  return (
    <>
      <div className="swap-content-box-wrapper">
        <div className="add-liquidity-tip">
          When you add liquidity, you will receive pool tokens representing your
          position. These tokens automatically earn fees proportional to your
          share of the pool, and can be redeemed at any time.
        </div>
        <Tabs defaultActiveKey="add" className="liquidity-container-tab">
          <Tab eventKey="add" title="Add">
            <AddLiquidity {...props} />
          </Tab>
          <Tab eventKey="remove" title="Remove">
            <RemoveLiquidity {...props} />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default LiquidityTab;
