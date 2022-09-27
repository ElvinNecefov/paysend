import React from 'react';
import "./Header.css";

import { Link } from "react-router-dom";
// import { BiMenu } from 'react-icons/bi';

import Logo from "../../../src/logo.svg";
import TransferOut from "../../assets/images/Transfer_out_06610105fe.svg";
import TransferIn from "../../assets/images/Transfer_in_9d13a41c0c.svg";
import Settings from "../../assets/images/settings_1be2c2b427.svg";
import Payout from "../../assets/images/payout_api_445a92017e.svg";
import Payment from "../../assets/images/instant_payment_4efa46028a.svg";
import HamburgerMenu from "../../assets/images/hamburger-menu-svgrepo-com.svg";

const Header = () => {
  return (
    <div className='noSpinner'>
        <div className='HeaderContainer'>
            <div className='FlexPanel'>
                <Link className='LogoLink'>
                    <img src={Logo} alt="Logo" />
                </Link>
                <div className='TopMenuWrapper'>
                    <ul className='TopMenu'>
                        <li>
                            <Link>Personal</Link>
                            <nav>
                                <ul>
                                    <li>
                                        <ul>
                                            <li>
                                                <Link className='sendMoney'>
                                                    <img src={TransferOut} alt="TransferOut" />
                                                    <span>Send money</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='sendMoney'>
                                                    <img src={TransferIn} alt="TransferIn" />
                                                    <span>Request money</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='sendMoney'>
                                                    <img src={Settings} style={{width: "24px", height: "24px"}} alt="TransferIn" />
                                                    <span>Help</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </li>

                        <li>
                            <Link>Business</Link>
                            <nav>
                                <ul>
                                    <li>
                                        <div className='SubMenuTitle'>Enterprise</div>
                                        <ul>
                                            <li>
                                                <Link className='sendMoney'>
                                                    <img src={Payout} alt="Payout" />
                                                    <span>Payout API</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='sendMoney'>
                                                    <img src={Payment} alt="Payment" />
                                                    <span>Instant account payout</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </li>

                        <li><Link>Company</Link>
                            <nav>
                                <ul>
                                    <li>
                                        <ul>
                                            <li>
                                                <Link className='sendMoney'>
                                                    <span>Who we are</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/careers" className='sendMoney'>
                                                    <span>Careers</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='sendMoney'>
                                                    <span>News & Blog</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/partners" className='sendMoney'>
                                                    <span>For partners</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </li>
                    </ul>
                </div>

                <div className='AuthWrapper'>
                    <ul className='AuthMenu'>
                        <li>
                            <Link className='GetPaysend'>
                                <span>Get paysend app</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <span className='ToggleModal'>
                    <button type='button' className='CommonButton'>
                        <span className='ButtonIcon'>
                            <svg>
                                <img src={HamburgerMenu} alt="" />
                            </svg>
                        </span>
                    </button>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Header;