import React from 'react';
import "./Navigation.css";

import { Link } from "react-router-dom";

import TransferOut from "../../assets/images/Transfer_out_06610105fe.svg";
import TransferIn from "../../assets/images/Transfer_in_9d13a41c0c.svg";
import Settings from "../../assets/images/settings_1be2c2b427.svg";
import Payout from "../../assets/images/payout_api_445a92017e.svg";
import Payment from "../../assets/images/instant_payment_4efa46028a.svg";

const Navigation = () => {
  return (
    <div className='OverlayNavigation'>
        <nav className='OverlayTabs'>
            <ul className='OverlayMenu'>
                <li><Link>Personal</Link></li>

                <li><Link>Business</Link></li>

                <li><Link>Company</Link></li>
            </ul>
        </nav>

        <div className='TabsContent'>
            <div className='CorrespondNav'>
                <nav>
                    <ul>
                        <li>
                            <ul>
                                <li>
                                    <Link>
                                        <img src={TransferOut} alt="TransferOut" />
                                        <span>Send money</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link>
                                        <img src={TransferIn} alt="TransferIn" />
                                        <span>Request money</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link>
                                        <img src={Settings} alt="Settings" />
                                        <span>Help</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className='CorrespondNav'>
                <nav>
                    <ul>
                        <li>
                            <div className='SubMenuTitleNav'>Enterprise</div>
                            <ul>
                                <li>
                                    <Link>
                                        <img src={Payout} alt="Payout" />
                                        <span>Payout API</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link>
                                        <img src={Payment} alt="Payment" />
                                        <span>Instant account payout</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className='CorrespondNav2'>
                <nav>
                    <ul>
                        <li>
                            <ul>
                                <li><Link><span>Who we are</span></Link></li>

                                <li><Link to="/careers"><span>Careers</span></Link></li>

                                <li><Link><span>News & Blog</span></Link></li>

                                <li><Link to="/partners"><span>For partners</span></Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className='CorrespondNav'>
                <nav>
                    <ul>
                        <li>
                            <ul>
                                <li><Link><span>Log in</span></Link></li>
                                <li><Link><span>Sign up</span></Link></li>
                                <li><Link><span>Account</span></Link></li>
                                <li><Link><span>Get started</span></Link></li>
                                <li><Link><span>Log in</span></Link></li>
                                <li><Link><span>Join today</span></Link></li>
                                <li><Link><span>Get paysend app</span></Link></li>
                                <li><Link><span>Log in</span></Link></li>
                                <li><Link><span>Get started</span></Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        <div className='FixedPanel'>
            <ul className='AuthMenuNav FixedList'>
                <li>
                    <Link className='StylishButton'><span>Get paysend app</span></Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navigation;