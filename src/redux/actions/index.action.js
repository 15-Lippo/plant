// USER
export const USER_BALANCES_FETCH_START = 'USER_BALANCES_FETCH_START'
export const USER_BALANCES_FETCH_SUCCESSFULL = 'USER_BALANCES_FETCH_SUCCESSFULL'
export const USER_BALANCES_FETCH_FAIL = 'USER_BALANCES_FETCH_FAIL'
export const USER_BALANCES_CLEAR = 'USER_BALANCES_CLEAR'

export const USER_STAKES_FETCH_START = 'USER_STAKES_FETCH_START'
export const USER_STAKES_FETCH_SUCCESSFULL = 'USER_STAKES_FETCH_SUCCESSFULL'
export const USER_STAKES_FETCH_FAILED = 'USER_STAKES_FETCH_FAILED'
export const USER_STAKES_CLEAR = 'USER_STAKES_CLEAR'

export const HARVEST_VALUE_FETCH_START = 'HARVEST_VALUE_FETCH_START'
export const HARVEST_VALUE_FARMS_FETCH_SUCCESSFULL = 'HARVEST_VALUE_FARMS_FETCH_SUCCESSFULL'
export const HARVEST_VALUE_POOLS_FETCH_SUCCESSFULL = 'HARVEST_VALUE_POOLS_FETCH_SUCCESSFULL'
export const HARVEST_VALUE_PONDS_FETCH_SUCCESSFULL = 'HARVEST_VALUE_PONDS_FETCH_SUCCESSFULL'
export const HARVEST_VALUE_FETCH_FAILED = 'HARVEST_VALUE_FETCH_FAILED'
export const HARVEST_VALUE_CLEAR = 'HARVEST_VALUE_CLEAR'


// WALLET
export const WALLET_CONNECT_START = 'WALLET_CONNECT_START'
export const WALLET_CONNECT_SUCCESSFULL = 'WALLET_CONNECT_SUCCESSFULL'
export const WALLET_CONNECT_FAIL = 'WALLET_CONNECT_FAIL'
export const WALLET_DISCONNECT = 'WALLET_DISCONNECT'
export const WALLET_GET_ADDRESS = 'WALLET_GET_ADDRESS' 

// SWAP
export const SWAP_DETAILS_FETCH_START = 'SWAP_DETAILS_FETCH_START'
export const SWAP_DETAILS_FETCH_SUCCESSFULL = 'SWAP_DETAILS_FETCH_SUCCESSFULL'
export const SWAP_DETAILS_FETCH_FAIL = 'SWAP_DETAILS_FETCH_FAIL'
export const SWAP_DETAILS_CLEAR = 'SWAP_DETAILS_CLEAR'

export const SET_SWAP_OUTPUT_DETAILS = 'SET_SWAP_TOKEN_OUTPUT'
export const CLEAR_SWAP_OUTPUT_DETAILS = 'CLEAR_SWAP_TOKEN_OUTPUT'

export const SET_OTHER_TOKEN_ESTIMATE_FOR_ADD_LIQUIDITY = 'SET_OTHER_TOKEN_ESTIMATE_FOR_ADD_LIQUIDITY'
export const CLEAR_OTHER_TOKEN_ESTIMATE_FOR_ADD_LIQUIDITY = 'CLEAR_OTHER_TOKEN_ESTIMATE_FOR_ADD_LIQUIDITY'

export const SET_REMOVE_LIQUIDITY_OUTPUT_DETAILS = 'SET_REMOVE_LIQUIDITY_OUTPUT_DETAILS'
export const CLEAR_REMOVE_LIQUIDITY_OUTPUT_DETAILS = 'CLEAR_REMOVE_LIQUIDITY_OUTPUT_DETAILS'

export const SET_LP_OUTPUT = 'SET_LP_OUTPUT'
export const CLEAR_LP_OUTPUT = 'CLEAR_LP_OUTPUT'

export const INITIATE_SWAP = 'INITIATE_SWAP'
export const SWAP_INJECTED_OPERATION = 'SWAP_INJECTED_OPERATION';
export const SWAP_SUCCESSFULL = 'SWAP_SUCCESSFULL'
export const SWAP_FAILED = 'SWAP_FAILED'
export const CLEAR_SWAP_RESPONSE = 'CLEAR_SWAP_RESPONSE'

export const INITIATE_ADD_LIQUIDITY = 'INITIATE_ADD_LIQUIDITY'
export const ADD_LIQUIDITY_INJECTED_OPERATION = 'ADD_LIQUIDITY_INJECTED_OPERATION'
export const ADD_LIQUIDITY_SUCCESSFULL = 'ADD_LIQUIDITY_SUCCESSFULL'
export const ADD_LIQUIDITY_FAILED = 'ADD_LIQUIDITY_FAILED'
export const CLEAR_ADD_LIQUIDITY_RESPONSE = 'CLEAR_ADD_LIQUIDITY_RESPONSE'

export const INITIATE_REMOVE_LIQUIDITY = 'INITIATE_REMOVE_LIQUIDITY'
export const REMOVE_LIQUIDITY_INJECTED_OPERATION = 'REMOVE_LIQUIDITY_INJECTED_OPERATION'
export const REMOVE_LIQUIDITY_SUCCESSFULL = 'REMOVE_LIQUIDITY_SUCCESSFULL'
export const REMOVE_LIQUIDITY_FAILED = 'REMOVE_LIQUIDITY_FAILED'
export const CLEAR_REMOVE_LIQUIDITY_RESPONSE = 'CLEAR_REMOVE_LIQUIDITY_RESPONSE'

// FARMS

export const OPEN_ACTIVE_FARMS = 'OPEN_ACTIVE_FARMS'
export const OPEN_INACTIVE_FARMS = 'OPEN_INACTIVE_FARMS'

export const HANDLE_STAKE_ON_FARMS_INPUT_VALUE = 'HANDLE_STAKE_ON_FARMS_INPUT_VALUE'

export const SET_FARMS_TO_RENDER = 'SET_FARMS_TO_RENDER'
export const CLEAR_RENDERED_FARMS = 'CLEAR_RENDERED_FARMS'

export const OPEN_FARMS_STAKE_MODAL = 'OPEN_FARMS_STAKE_MODAL'
export const CLOSE_FARMS_STAKE_MODAL = 'CLOSE_FARMS_STAKE_MODAL'

export const OPEN_FARMS_UNSTAKE_MODAL = 'OPEN_FARMS_UNSTAKE_MODAL'
export const CLOSE_FARMS_UNSTAKE_MODAL = 'CLOSE_FARMS_UNSTAKE_MODAL'

export const OPEN_CLOSE_FARMS_MODAL = 'OPEN_CLOSE_FARMS_MODAL'
export const DISMISS_FARMS_SNACKBAR = 'DISMISS_FARMS_SNACKBAR'

export const START_ACTIVE_FARMS_DATA_FETCH = 'START_ACTIVE_FARMS_DATA_FETCH'
export const ACTIVE_FARMS_DATA_FETCH_SUCCESSFULL = 'ACTIVE_FARMS_DATA_FETCH_SUCCESSFULL'
export const ACTIVE_FARMS_DATA_FETCH_FAILED = 'ACTIVE_FARMS_DATA_FETCH_FAILED'
export const CLEAR_ACTIVE_FARMS_DATA = 'CLEAR_ACTIVE_FARMS_DATA'

export const START_INACTIVE_FARMS_DATA_FETCH = 'START_INACTIVE_FARMS_DATA_FETCH'
export const INACTIVE_FARMS_DATA_FETCH_SUCCESSFULL = 'INACTIVE_FARMS_DATA_FETCH_SUCCESSFULL'
export const INACTIVE_FARMS_DATA_FETCH_FAILED = 'INACTIVE_FARMS_DATA_FETCH_FAILED'
export const CLEAR_INACTIVE_FARMS_DATA = 'CLEAR_INACTIVE_FARMS_DATA'

export const INITIATE_STAKING_ON_FARM = 'INITIATE_STAKING_ON_FARM'
export const STAKING_ON_FARM_SUCCESSFULL = 'STAKING_ON_FARM_SUCCESSFULL'
export const PROCESSING_STAKING_ON_FARM = 'PROCESSING_STAKING_ON_FARM'
export const STAKING_ON_FARM_FAILED = 'STAKING_ON_FARM_FAILED'
export const CLEAR_STAKING_ON_FARM_RESPONSE = 'CLEAR_STAKING_ON_FARM_RESPONSE'

export const INITIATE_UNSTAKING_ON_FARM = 'INITIATE_UNSTAKING_ON_FARM'
export const UNSTAKING_ON_FARM_SUCCESSFULL = 'UNSTAKING_ON_FARM_SUCCESSFULL'
export const PROCESSING_UNSTAKING_ON_FARM = 'PROCESSING_UNSTAKING_ON_FARM'
export const UNSTAKING_ON_FARM_FAILED = 'UNSTAKING_ON_FARM_FAILED'
export const CLEAR_UNSTAKING_ON_FARM_RESPONSE = 'CLEAR_UNSTAKING_ON_FARM_RESPONSE'

export const INITIATE_HARVESTING_ON_FARM = 'INITIATE_HARVESTING_ON_FARM'
export const HARVESTING_ON_FARM_SUCCESSFULL = 'HARVESTING_ON_FARM_SUCCESSFULL'
export const HARVESTING_ON_FARM_FAILED = 'HARVESTING_ON_FARM_FAILED'
export const CLEAR_HARVESTING_ON_FARM_RESPONSE = 'CLEAR_HARVESTING_ON_FARM_RESPONSE'

// POOLS

export const OPEN_ACTIVE_POOLS = 'OPEN_ACTIVE_POOLS'
export const OPEN_INACTIVE_POOLS = 'OPEN_INACTIVE_POOLS'

export const SET_POOLS_TO_RENDER = 'SET_POOLS_TO_RENDER'
export const CLEAR_RENDERED_POOLS= 'CLEAR_RENDERED_POOLS'

export const OPEN_POOLS_STAKE_MODAL = 'OPEN_POOLS_STAKE_MODAL'
export const CLOSE_POOLS_STAKE_MODAL = 'CLOSE_POOLS_STAKE_MODAL'

export const OPEN_POOLS_UNSTAKE_MODAL = 'OPEN_POOLS_UNSTAKE_MODAL'
export const CLOSE_POOLS_UNSTAKE_MODAL = 'CLOSE_POOLS_UNSTAKE_MODAL'

export const HANDLE_STAKE_ON_POOLS_INPUT_VALUE = 'HANDLE_STAKE_ON_POOLS_INPUT_VALUE'

export const START_ACTIVE_POOLS_DATA_FETCH = 'START_ACTIVE_POOLS_DATA_FETCH'
export const ACTIVE_POOLS_DATA_FETCH_SUCCESSFULL = 'ACTIVE_POOLS_DATA_FETCH_SUCCESSFULL'
export const ACTIVE_POOLS_DATA_FETCH_FAILED = 'ACTIVE_POOLS_DATA_FETCH_FAILED'
export const CLEAR_ACTIVE_POOLS_DATA = 'CLEAR_ACTIVE_POOLS_DATA'

export const START_INACTIVE_POOLS_DATA_FETCH = 'START_INACTIVE_POOLS_DATA_FETCH'
export const INACTIVE_POOLS_DATA_FETCH_SUCCESSFULL = 'INACTIVE_POOLS_DATA_FETCH_SUCCESSFULL'
export const INACTIVE_POOLS_DATA_FETCH_FAILED = 'INACTIVE_POOLS_DATA_FETCH_FAILED'
export const CLEAR_INACTIVE_POOLS_DATA = 'CLEAR_INACTIVE_POOLS_DATA'

export const INITIATE_STAKING_ON_POOL = 'INITIATE_STAKING_ON_POOL'
export const STAKING_ON_POOL_SUCCESSFULL = 'STAKING_ON_POOL_SUCCESSFULL'
export const PROCESSING_STAKING_ON_POOL = 'PROCESSING_STAKING_ON_POOL'
export const STAKING_ON_POOL_FAILED = 'STAKING_ON_POOL_FAILED'
export const CLEAR_STAKING_ON_POOL_RESPONSE = 'CLEAR_STAKING_ON_POOL_RESPONSE'

export const INITIATE_UNSTAKING_ON_POOL = 'INITIATE_UNSTAKING_ON_POOL'
export const UNSTAKING_ON_POOL_SUCCESSFULL = 'UNSTAKING_ON_POOL_SUCCESSFULL'
export const PROCESSING_UNSTAKING_ON_POOL = 'PROCESSING_UNSTAKING_ON_POOL'
export const UNSTAKING_ON_POOL_FAILED = 'UNSTAKING_ON_POOL_FAILED'
export const CLEAR_UNSTAKING_ON_POOL_RESPONSE = 'CLEAR_UNSTAKING_ON_POOL_RESPONSE'

export const INITIATE_HARVESTING_ON_POOL = 'INITIATE_HARVESTING_ON_POOL'
export const HARVESTING_ON_POOL_SUCCESSFULL = 'HARVESTING_ON_POOL_SUCCESSFULL'
export const HARVESTING_ON_POOL_FAILED = 'HARVESTING_ON_POOL_FAILED'
export const CLEAR_HARVESTING_ON_POOL_RESPONSE = 'CLEAR_HARVESTING_ON_POOL_RESPONSE'

export const OPEN_CLOSE_POOLS_MODAL = 'OPEN_CLOSE_POOLS_MODAL'
export const DISMISS_POOLS_SNACKBAR = 'DISMISS_POOLS_SNACKBAR'

// PONDS

export const OPEN_ACTIVE_PONDS = 'OPEN_ACTIVE_PONDS'
export const OPEN_INACTIVE_PONDS = 'OPEN_INACTIVE_PONDS'

export const SET_PONDS_TO_RENDER = 'SET_PONDS_TO_RENDER'
export const CLEAR_RENDERED_PONDS= 'CLEAR_RENDERED_PONDS'

export const START_ACTIVE_PONDS_DATA_FETCH = 'START_ACTIVE_PONDS_DATA_FETCH'
export const ACTIVE_PONDS_DATA_FETCH_SUCCESSFULL = 'ACTIVE_PONDS_DATA_FETCH_SUCCESSFULL'
export const ACTIVE_PONDS_DATA_FETCH_FAILED = 'ACTIVE_PONDS_DATA_FETCH_FAILED'
export const CLEAR_ACTIVE_PONDS_DATA = 'CLEAR_ACTIVE_PONDS_DATA'

export const START_INACTIVE_PONDS_DATA_FETCH = 'START_INACTIVE_PONDS_DATA_FETCH'
export const INACTIVE_PONDS_DATA_FETCH_SUCCESSFULL = 'INACTIVE_PONDS_DATA_FETCH_SUCCESSFULL'
export const INACTIVE_PONDS_DATA_FETCH_FAILED = 'INACTIVE_PONDS_DATA_FETCH_FAILED'
export const CLEAR_INACTIVE_PONDS_DATA = 'CLEAR_INACTIVE_PONDS_DATA'

export const INITIATE_STAKING_ON_POND = 'INITIATE_STAKING_ON_POND'
export const PROCESSING_STAKING_ON_POND = 'PROCESSING_STAKING_ON_POND'
export const STAKING_ON_POND_SUCCESSFULL = 'STAKING_ON_POND_SUCCESSFULL'
export const STAKING_ON_POND_FAILED = 'STAKING_ON_POND_FAILED'
export const CLEAR_STAKING_ON_POND_RESPONSE = 'CLEAR_STAKING_ON_POND_RESPONSE'

export const INITIATE_UNSTAKING_ON_POND = 'INITIATE_UNSTAKING_ON_POND'
export const PROCESSING_UNSTAKING_ON_POND = 'PROCESSING_UNSTAKING_ON_POND'
export const UNSTAKING_ON_POND_SUCCESSFULL = 'UNSTAKING_ON_POND_SUCCESSFULL'
export const UNSTAKING_ON_POND_FAILED = 'UNSTAKING_ON_POND_FAILED'
export const CLEAR_UNSTAKING_ON_POND_RESPONSE = 'CLEAR_UNSTAKING_ON_POND_RESPONSE'

export const INITIATE_HARVESTING_ON_POND = 'INITIATE_HARVESTING_ON_POND'
export const HARVESTING_ON_POND_SUCCESSFULL = 'HARVESTING_ON_POND_SUCCESSFULL'
export const HARVESTING_ON_POND_FAILED = 'HARVESTING_ON_POND_FAILED'
export const CLEAR_HARVESTING_ON_POND_RESPONSE = 'CLEAR_HARVESTING_ON_POND_RESPONSE'

export const OPEN_CLOSE_PONDS_MODAL = 'OPEN_CLOSE_PONDS_MODAL'
export const DISMISS_PONDS_SNACKBAR = 'DISMISS_PONDS_SNACKBAR'

// PRICE

export const START_FETCHING_TOKENS_PRICE = 'START_FETCHING_TOKENS_PRICE'
export const FETCHING_TOKENS_PRICE_SUCCESSFULL = 'FETCHING_TOKENS_PRICE_SUCCESSFULL'
export const FETCHING_TOKENS_PRICE_FAILED = 'FETCHING_TOKENS_PRICE_FAILED'
export const CLEAR_TOKENS_PRICE_DATA = 'CLEAR_TOKENS_PRICE_DATA'

export const START_FETCHING_LP_TOKENS_PRICE = 'START_FETCHING_LP_TOKENS_PRICE'
export const FETCHING_LP_TOKENS_PRICE_SUCCESSFULL = 'FETCHING_LP_TOKENS_PRICE_SUCCESSFULL'
export const FETCHING_LP_TOKENS_PRICE_FAILED = 'FETCHING_LP_TOKENS_PRICE_FAILED'
export const CLEAR_LP_TOKENS_PRICE_DATA = 'CLEAR_LP_TOKENS_PRICE_DATA'

//HOME

export const HOME_STATS_FETCH = "HOME_STATS_FETCH"
export const HOME_STATS_FETCH_SUCCESS = "HOME_STATS_SUCCESS"
export const HOME_STATS_FETCH_FAILED = "HOME_STATS_FETCH_FAILED"

export const TVL_FETCH = "TVL_FETCH"
export const TVL_FETCH_SUCCESS = "TVL_FETCH_SUCCESS"
export const TVL_FETCH_FAILED = "TVL_FETCH_FAILED"

export const PLENTY_BALANCE_FETCH = "PLENTY_BALANCE_FETCH"
export const PLENTY_BALANCE_FETCH_SUCCESS = "PLENTY_BALANCE_FETCH_SUCCESS"
export const PLENTY_BALANCE_FETCH_FAILED = "PLENTY_BALANCE_FETCH_FAILED"

export const PLENTY_TO_HARVEST_FETCH = "PLENTY_TO_HARVEST_FETCH"
export const PLENTY_TO_HARVEST_FETCH_SUCCESS = "PLENTY_TO_HARVEST_FETCH_SUCCESS"
export const PLENTY_TO_HARVEST_FETCH_FAILED = "PLENTY_TO_HARVEST_FETCH_FAILED"

export const HARVEST_BATCH_FETCH = "HARVEST_BATCH_FETCH"
export const HARVEST_BATCH_FETCH_SUCCESS = "HARVEST_BATCH_FETCH_SUCCESS"
export const HARVEST_BATCH_FETCH_FAILED = "HARVEST_BATCH_FETCH_FAILED"

export const USER_TVL_FETCH = "USER_TVL_FETCH"
export const USER_TVL_FETCH_SUCCESS = "USER_TVL_FETCH_SUCCESS"
export const USER_TVL_FETCH_FAILED = "USER_TVL_FETCH_FAILED"

export const HARVEST_ALL_INITIATION = "HARVEST_ALL_INITIATION"
export const HARVEST_ALL_PROCESSING = "HARVEST_ALL_PROCESSING"
export const HARVEST_ALL_SUCCESS = "HARVEST_ALL_SUCCESS"
export const HARVEST_ALL_FAILED = "HARVEST_ALL_FAILED"