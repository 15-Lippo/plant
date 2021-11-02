import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { tokenFetchingThunk } from '../../redux/slices/tokens/tokens.thunk';
import styles from './tokens.module.scss';
import { connect } from 'react-redux';
import Table from '../../Components/Table/Table';
import Button from '../../Components/Ui/Buttons/Button';
import { PuffLoader } from 'react-spinners';
import { BsSearch } from 'react-icons/bs';
import { FormControl, Image, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useFavoriteToken } from './useTokensPage';
import { TokensSymbol, TokensSymbolHeader } from '../../Components/TokensPage/TokensSymbol';
import { ReactComponent as FavoriteIconGradient } from '../../assets/images/tokens/favorite-icon-fill.svg';

/* TODO
1. Favorite Token
2. Token Search
3. Token symbol
 */
const Tokens = (props) => {
  const [imgPaths, setImgPath] = useState({});

  const loadImageFor = useCallback(
    (token) => {
      // ? if token exists, abort
      if (!!imgPaths[token]) {
        return;
      }

      setImgPath((prev) => ({
        ...prev,
        [token]: {
          ...prev[token],
          loading: true,
        },
      }));

      import(`../../assets/images/tokens/${token}.png`).then((image) => {
        setImgPath((prev) => ({
          ...prev,
          [token]: {
            url: image['default'] ?? image,
            loading: false,
          },
        }));
      });
    },
    [imgPaths],
  );

  useEffect(() => {
    props.tokens.data.forEach((datum) => {
      loadImageFor(datum.symbol_token);
    });
  }, [loadImageFor, props.tokens.data]);

  const positiveOrNegative = (value) => {
    if (Number(value) > 0) {
      return <span className={styles.greenText}>+{value}%</span>;
    } else if (Number(value) < 0) {
      return <span className={styles.redText}>{value}%</span>;
    } else {
      return value;
    }
  };

  const valueFormat = (value) => {
    if (value >= 100) {
      return Math.round(value).toLocaleString('en-US');
    }
    return value.toLocaleString('en-US', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
  };

  const stringSort = useMemo(
    () => (rowA, rowB, columnId) => {
      const a = String(rowA.values[columnId]).toLowerCase();
      const b = String(rowB.values[columnId]).toLowerCase();
      return a.localeCompare(b);
    },
    [],
  );

  const numberSort = useMemo(
    () => (rowA, rowB, columnId) => {
      const a = parseFloat(rowA.values[columnId]);
      const b = parseFloat(rowB.values[columnId]);
      return a > b ? 1 : -1;
    },
    [],
  );

  const { isFavoriteTokens, setIsFavTokens, favoriteTokens, editFavoriteTokenList } =
    useFavoriteToken();

  const columns = useMemo(
    () => [
      {
        Header: (
          <TokensSymbolHeader
            className={styles.favoriteIcon}
            isFavoriteTokens={isFavoriteTokens}
            setIsFavTokens={setIsFavTokens}
          />
        ),
        id: 'favorite',
        accessor: 'symbol_token',
        disableSortBy: true,
        Cell: (row) => (
          <TokensSymbol
            tokenSymbol={row.value}
            className={styles.favoriteIcon}
            favoriteTokens={favoriteTokens}
            editFavoriteTokenList={editFavoriteTokenList}
          />
        ),
      },
      {
        Header: <span className="ml-2">Tokens</span>,
        id: 'token',
        accessor: 'symbol_token',
        sortType: stringSort,
        Cell: (row) => (
          <div className="d-flex pl-2 align-items-center">
            <Image src={imgPaths[row.value]?.url} height={32} width={32} alt={''} />
            <span className="ml-2">{row.value}</span>
          </div>
        ),
        width: 120,
      },
      {
        Header: 'Price',
        accessor: 'token_price',
        sortType: numberSort,
        Cell: (row) => <span>${valueFormat(row.value)}</span>,
      },
      {
        Header: '24H Change',
        accessor: 'price_change_percentage',
        sortType: numberSort,
        Cell: (row) => <span>{positiveOrNegative(valueFormat(row.value))}</span>,
      },
      {
        Header: '24H Volume',
        accessor: 'volume_token',
        sortType: numberSort,
        Cell: (row) => <span>${valueFormat(row.value)}</span>,
      },
      {
        Header: 'Liquidity',
        accessor: 'liquidity',
        sortType: numberSort,
        Cell: (row) => <span>${valueFormat(row.value)}</span>,
      },
      {
        disableSortBy: true,
        Header: '',
        id: 'trade',
        accessor: (x) => (
          <Link to={`/swap?from=${x.symbol_token}`}>
            <Button className={styles.tradeBtn}>Trade</Button>
          </Link>
        ),
        width: 120,
      },
    ],
    [
      isFavoriteTokens,
      setIsFavTokens,
      stringSort,
      numberSort,
      imgPaths,
      favoriteTokens,
      editFavoriteTokenList,
    ],
  );

  useEffect(() => {
    const fetchDataContinuously = () => {
      props.fetchTokensData();
    };

    fetchDataContinuously();
    const backgroundRefresh = setInterval(() => {
      fetchDataContinuously();
    }, 30 * 1000);

    return () => clearInterval(backgroundRefresh);
    //props.fetchTokensData();
  }, []);

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Container fluid className={styles.tokens}>
        <div className="w-100 d-flex justify-content-between px-5">
          <h5 className="font-weight-bolder">Tokens</h5>
          <InputGroup className={styles.searchBar}>
            <span className={styles.iconInside}>
              <BsSearch />
            </span>
            <FormControl
              placeholder="        Search"
              className={`rounded ${styles.placeholder}`}
              value={searchQuery}
              onChange={(ev) => setSearchQuery(ev.target.value)}
            />
          </InputGroup>
        </div>

        {props.tokens.data.length > 0 ? (
          <div>
            <Table searchQuery={searchQuery} data={props.tokens.data} columns={columns} />
          </div>
        ) : (
          <PuffLoader color={'#813CE1'} size={56} />
        )}
      </Container>

      <FavoriteIconGradient />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    tokens: state.tokens.tokensData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTokensData: () => dispatch(tokenFetchingThunk()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tokens);
