import React from 'react';
import truncateMiddle from 'truncate-middle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import clsx from 'clsx';
import Dropdown from 'react-bootstrap/Dropdown';
import { ExternalMenu, NavigationMenu } from './Menu';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as LogoWhite } from '../../assets/images/logo-white.svg';
import { Link, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = (props) => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');

  let connectWalletButton = () => {
    if (props.walletAddress) {
      return (
        <button
          className="disconnect-wallet-btn bg-themed py-1 px-2 py-lg-2 px-lg-4"
          onClick={props.disconnectWallet}
        >
          <span
            className={clsx(
              props.theme === 'light' ? 'light-theme-text' : 'span-themed'
            )}
          >
            {truncateMiddle(props.walletAddress, 4, 4, '...')}
          </span>
        </button>
      );
    } else {
      return (
        <button
          className={clsx(
            props.theme === 'light'
              ? 'frontpage-light-wallet-btn'
              : 'bg-themed',
            'connect-wallet-btn',
            'py-1',
            'px-2',
            'py-lg-2',
            'px-lg-4'
          )}
          onClick={props.connecthWallet}
        >
          <span
            className={clsx(
              'connect-wallet-btn d-lg-inline-block',
              props.isFrontPage ? 'text-white' : 'span-themed'
            )}
          >
            <span
              className={clsx(
                'material-icons-round',
                props.isFrontPage ? 'text-white' : 'span-themed'
              )}
            >
              add
            </span>
            Connect to Wallet
          </span>
        </button>
      );
    }
  };

  const CustomToggle = React.forwardRef(({ onClick }, ref) => (
    <a
      href=""
      className="nav-menu-item-link"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <span className="span-themed material-icons-round">more_vert</span>
    </a>
  ));

  const resetActiveTab = () => {
    localStorage.setItem('activeTab', 'swap');
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={12}>
          <Navbar collapseOnSelect expand="lg" className="px-0 menu-wrapper">
            <Navbar.Brand as={Link} to="/" className="col-4 m-0">
              {props.isFrontPage ? (
                <LogoWhite />
              ) : props.theme === 'light' ? (
                <Logo />
              ) : (
                <LogoWhite />
              )}
            </Navbar.Brand>
            <Nav.Item className="ml-auto d-lg-none align-self-lg-end">
              {connectWalletButton()}
            </Nav.Item>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="ml-lg-auto"
            >
              <span
                className={clsx(
                  'material-icons-round',
                  props.isFrontPage ? 'text-white' : 'span-themed'
                )}
              >
                more_vert
              </span>
            </Navbar.Toggle>

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav
                activeKey={location.pathname}
                className="align-items-lg-center w-100"
              >
                <div className="col-lg-6 d-flex flex-lg-row flex-column justify-content-lg-center align-items-center">
                  <Nav.Link
                    className={clsx(
                      splitLocation[1] === 'swap'
                        ? 'menu-item-active'
                        : undefined,
                      'align-self-end align-self-lg-center d-flex align-items-center'
                    )}
                    as={Link}
                    to="swap"
                    onClick={resetActiveTab}
                  >
                    <span
                      className={clsx(
                        props.isFrontPage ? 'text-white' : 'span-themed'
                      )}
                    >
                      Swap
                    </span>
                  </Nav.Link>
                  <Nav.Link
                    className={clsx(
                      splitLocation[1] === 'farms'
                        ? 'menu-item-active'
                        : undefined,
                      'align-self-end align-self-lg-center d-flex align-items-center'
                    )}
                    as={Link}
                    to="farms"
                    onClick={resetActiveTab}
                  >
                    <span
                      className={clsx(
                        props.isFrontPage ? 'text-white' : 'span-themed'
                      )}
                    >
                      Farms
                    </span>
                  </Nav.Link>
                  <Nav.Link
                    className={clsx(
                      splitLocation[1] === 'pools'
                        ? 'menu-item-active'
                        : undefined,
                      'align-self-end align-self-lg-center d-flex align-items-center'
                    )}
                    as={Link}
                    to="pools"
                    onClick={resetActiveTab}
                  >
                    <span
                      className={clsx(
                        props.isFrontPage ? 'text-white' : 'span-themed'
                      )}
                    >
                      Pools
                    </span>
                  </Nav.Link>
                  <Nav.Link
                    className={clsx(
                      splitLocation[1] === 'ponds'
                        ? 'menu-item-active'
                        : undefined,
                      'align-self-end align-self-lg-center d-flex align-items-center'
                    )}
                    as={Link}
                    to="ponds"
                    onClick={resetActiveTab}
                  >
                    <span
                      className={clsx(
                        props.isFrontPage ? 'text-white' : 'span-themed'
                      )}
                    >
                      Ponds
                    </span>
                  </Nav.Link>
                </div>
                <div className="col-lg-6 d-flex flex-column flex-lg-row align-items-end align-items-lg-center">
                  <Nav.Item className="ml-auto">
                    <a
                      className="nav-menu-item-link px-lg-3 align-self-end align-self-lg-center"
                      onClick={props.toggleTheme}
                    >
                      {props.theme === 'light' ? (
                        <span
                          className={clsx(
                            'theme-icon',
                            'material-icons-round',
                            props.isFrontPage ? 'icon-white' : 'span-themed'
                          )}
                        >
                          dark_mode
                        </span>
                      ) : (
                        <span className="theme-icon span-themed material-icons-round">
                          light_mode
                        </span>
                      )}
                    </a>
                  </Nav.Item>

                  <Nav.Item className="d-none d-lg-block align-self-lg-end">
                    {connectWalletButton()}
                  </Nav.Item>
                  <Nav.Item>
                    <div className="d-flex flex-column d-lg-none col p-0">
                      <hr className="w-100" />
                      <a
                        href={
                          'https://plenty-defi.notion.site/Plenty-Docs-004ba25f40b641a3a276b84ebdc44971'
                        }
                        className="align-self-end align-self-lg-center nav-link"
                      >
                        <span
                          className={clsx(
                            props.isFrontPage ? 'text-white' : 'span-themed'
                          )}
                        >
                          Docs
                        </span>
                      </a>
                      <a
                        href={'https://medium.com/plenty-defi'}
                        className="align-self-end align-self-lg-center nav-link"
                      >
                        <span
                          className={clsx(
                            props.isFrontPage ? 'text-white' : 'span-themed'
                          )}
                        >
                          Blog
                        </span>
                      </a>
                      <a
                        href={'https://github.com/Plenty-DeFi'}
                        className="align-self-end align-self-lg-center nav-link"
                      >
                        <span
                          className={clsx(
                            props.isFrontPage ? 'text-white' : 'span-themed'
                          )}
                        >
                          GitHub
                        </span>
                      </a>
                    </div>
                    <NavDropdown
                      className="d-none d-lg-block top"
                      title={
                        <span
                          className={clsx(
                            'material-icons-round',
                            props.isFrontPage ? 'text-white' : 'span-themed'
                          )}
                        >
                          more_vert
                        </span>
                      }
                      id="basic-nav-dropdown"
                    >
                      <ExternalMenu />
                    </NavDropdown>
                  </Nav.Item>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
  // return (
  //     <Container fluid>
  //         <Row>
  //             <Col sm={12} md={12} className={clsx(
  //                 "header-col-center",
  //                 !props.isFrontPage && "border-bottom-themed")}>
  //                 <Navbar className="menu-wrapper">
  //                     <div>
  //                         <div className="logo-section">
  //                             <Link to={"/"}>
  //                                 <Navbar.Brand>
  //                                     <Logo className={clsx(
  //                                         props.isFrontPage ? "logo-frontPage" : "logo")}/>
  //                                 </Navbar.Brand>
  //                             </Link>
  //                         </div>
  //                     </div>
  //
  //                     <ul className="nav-menu-wrapper">
  //                         <NavigationMenu isFrontPage={props.isFrontPage}/>
  //                     </ul>
  //                     <ul className="nav-menu-wrapper">
  //                         <li className="nav-menu-item">
  //                             <a
  //                                 className="nav-menu-item-link"
  //                                 onClick={props.toggleTheme}
  //                             >
  //                                 {
  //                                     props.theme === 'light' ?
  //                                         <span className={clsx(
  //                                             "theme-icon", "material-icons-round",
  //                                             props.isFrontPage ? "icon-white" : "span-themed"
  //                                             )}>dark_mode</span>
  //                                         : <span className="theme-icon span-themed material-icons-round">light_mode</span>
  //
  //                                 }
  //                             </a>
  //                         </li>
  //
  //                         <li className="nav-menu-item">{connectWalletButton()}</li>
  //                         <li className="nav-menu-item">
  //                             <Dropdown>
  //                                 <Dropdown.Toggle
  //                                     as={CustomToggle}
  //                                     id="dropdown-basic"
  //                                 ></Dropdown.Toggle>
  //                                 <Dropdown.Menu className="menu-dropdown">
  //                                     <ExternalMenu/>
  //                                 </Dropdown.Menu>
  //                             </Dropdown>
  //                         </li>
  //                     </ul>
  //                 </Navbar>
  //             </Col>
  //         </Row>
  //     </Container>
  // );
};

export default Header;