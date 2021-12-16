import React, { useMemo, useState } from 'react';
import styles from '../../assets/scss/tokens.module.scss';
import Table from '../../Components/Table/Table';
import Button from '../../Components/Ui/Buttons/Button';
import { PuffLoader } from 'react-spinners';
import { BsSearch } from 'react-icons/bs';
import { Container, FormControl, InputGroup } from 'react-bootstrap';
import { createSearchParams, Link } from 'react-router-dom';
import { useFavoriteToken } from '../../hooks/useFavoriteToken';
import { TokensSymbol, TokensSymbolHeader } from '../../Components/TokensPage/TokensSymbol';
import { ReactComponent as FavoriteIconGradient } from '../../assets/images/tokens/favorite-icon-fill.svg';

import { useLazyImages, useTableNumberUtils } from '../../hooks/usePlentyTableHooks';
import TokenAvatar from '../../Components/Ui/TokenAvatar/TokenAvatar';
import { isActiveFarm } from '../../config/utils';
import { useGetLiquidityQuery } from '../../redux/queries/analytics/analyticsQueries';

const LiquidityPage = () => {
  const { data = [], isLoading, error } = useGetLiquidityQuery({ pollingInterval: 3_000 });

  const { imgPaths } = useLazyImages({ data, page: 'liquidity' });

  const { isOnlyFavTokens, setIsOnlyFavTokens, favoriteTokens, editFavoriteTokenList } =
    useFavoriteToken('liquidity');

  const { positiveOrNegative, valueFormat, stringSort, numberSort } = useTableNumberUtils();

  // ? Move to React Table filter later
  const finalData = useMemo(() => {
    if (isOnlyFavTokens) {
      return data?.filter((datum) => favoriteTokens.includes(datum.pool_contract)) ?? [];
    }

    return data;
  }, [favoriteTokens, isOnlyFavTokens, data]);

  const columns = useMemo(
    () => [
      {
        Header: (
          <TokensSymbolHeader
            className={styles.favoriteIcon}
            isOnlyFavTokens={isOnlyFavTokens}
            setIsOnlyFavTokens={setIsOnlyFavTokens}
          />
        ),
        id: 'favorite',
        accessor: 'pool_contract',
        disableSortBy: true,
        Cell: (row) => {
          return (
            <TokensSymbol
              tokenSymbol={row.value}
              className={styles.favoriteIcon}
              favoriteTokens={favoriteTokens}
              editFavoriteTokenList={editFavoriteTokenList}
            />
          );
        },
      },
      {
        Header: <span className="ml-2">Name</span>,
        id: 'token',
        accessor: 'token1',
        sortType: stringSort,
        Cell: (row) => {
          const { token1, token2 } = row.row.original;
          return (
            <div className="d-flex pl-2 align-items-center">
              <TokenAvatar imgPath1={imgPaths[token1]} imgPath2={imgPaths[token2]} />
              <span className="ml-2 mr-4">
                {token1} / {token2}
              </span>
            </div>
          );
        },
        width: 120,
      },
      {
        Header: 'Liquidity',
        accessor: 'total_liquidity',
        sortType: numberSort,
        Cell: (row) => <span title={row.value}>{valueFormat(row.value)}</span>,
      },
      {
        Header: '24h Volume',
        accessor: '24h_volume',
        sortType: numberSort,
        Cell: (row) => <span>{valueFormat(row.value)}</span>,
      },
      {
        Header: '24h Fees',
        accessor: '24h_fee',
        sortType: numberSort,
        Cell: (row) => (
          <span>{positiveOrNegative(valueFormat(row.value, { percentChange: true }))}</span>
        ),
      },
      {
        Header: 'LP APR',
        accessor: 'APR',
        sortType: numberSort,
        Cell: (row) => <span>{valueFormat(row.value)}</span>,
      },
      {
        Header: 'Farm',
        accessor: 'pool_contract',
        sortType: numberSort,
        Cell: (row) => (isActiveFarm(row.value) ? <span>Active</span> : null),
      },
      {
        disableSortBy: true,
        Header: '',
        id: 'trade',
        accessor: (x) => (
          <div className="d-flex">
            <Link
              style={{ textDecoration: 'none' }}
              to={{
                pathname: '/liquidity',
                search: `?${createSearchParams({
                  tokenA: x.token1,
                  tokenB: x.token2,
                })}`,
              }}
            >
              <Button color="primary" isIconBtn startIcon="add" iconBtnType="square" size="large" />
            </Link>

            <Link
              className="ml-2"
              style={{ textDecoration: 'none' }}
              to={{
                pathname: '/swap',
                search: `?${createSearchParams({
                  from: x.token1,
                  to: x.token2,
                })}`,
              }}
            >
              <Button
                color="default"
                isIconBtn
                startIcon="swap_vert"
                iconBtnType="square"
                size="large"
              />
            </Link>
          </div>
        ),
        width: 120,
      },
    ],
    [
      isOnlyFavTokens,
      setIsOnlyFavTokens,
      stringSort,
      numberSort,
      favoriteTokens,
      editFavoriteTokenList,
      imgPaths,
    ],
  );

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Container fluid className={styles.tokens}>
        <div className="w-100 d-flex justify-content-between px-5 align-items-center">
          <h5 className="font-weight-bolder">Liquidity Pools</h5>
          <InputGroup className={styles.searchBar}>
            <InputGroup.Prepend>
              <InputGroup.Text className={`${styles.searchIcon} border-right-0`}>
                <BsSearch />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Search"
              className={`shadow-none border-left-0 ${styles.searchBox}`}
              value={searchQuery}
              onChange={(ev) => setSearchQuery(ev.target.value)}
            />
          </InputGroup>
        </div>

        {data.length > 0 && (
          <div>
            <Table searchQuery={searchQuery} data={finalData} columns={columns} />
          </div>
        )}

        {data.length === 0 && (isLoading || error) && (
          <div className="d-flex justify-content-between w-100" style={{ height: 800 }}>
            <div className="m-auto">
              {error ? <div>Something went wrong</div> : <PuffLoader color={'#813CE1'} size={56} />}
            </div>
          </div>
        )}
      </Container>

      <FavoriteIconGradient />
    </>
  );
};

export default LiquidityPage;
