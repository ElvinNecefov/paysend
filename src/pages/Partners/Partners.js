import React from 'react';
import "./Partners.css";

import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

import handShake from "../../assets/images/handshake_48_0df0efb9ea.svg";
import plant from "../../assets/images/plant_48_6b0bd44fd5.svg";
import globus from "../../assets/images/globe_48_f26304f56f.svg";

const Partners = () => {
    return (
        <div className='Main'>
            <div className='SectionPartners'>
                <Container className='SectionContainer'>
                    <Row>
                        <Col lg={12}>
                            <h1 className='PartnersHeader'>
                                Become a Paysend payout partner bank
                            </h1>
                            <p className='PartnersParagraph'>Join our fast-growing card-to-card remittance network and help people to experience a new way to transfer money across the globe</p>
                            <ul className='PartnersList'>
                                <li>
                                    <img src={handShake} alt="Image1" />
                                    <h2 className='PartnersHeader2'>Become our partner to settle all inbound Paysend transfers into your country</h2>
                                    <p className='PartnersParagraph2'>We only are looking for one partner bank per country</p>
                                </li>
                                <li>
                                    <img src={plant} alt="Image2" />
                                    <h2 className='PartnersHeader2'>Enhance your business growth by partnering with us</h2>
                                    <p className='PartnersParagraph2'>Digital remittances so far represent only 5% of a $700B worldwide money transfer volume, and are rapidly expanding with an annual growth rate more than 30%</p>
                                    <ul className='PartnersList2'>
                                        <li>
                                            <p className='PartnersParagraph2'>Enter the fast-expanding card-to-card cross-border remittance market</p>
                                        </li>

                                        <li>
                                            <p className='PartnersParagraph2'>Open a new revenue stream from payout transaction settlement fees</p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <img src={globus} alt="Image3" />
                                    <h2 className='PartnersHeader2'>Become a part of our fast-growing global family</h2>
                                    <p className='PartnersParagraph2'>Paysend is a highly popular service with a significant customer base</p>
                                    <ul className='PartnersList2'>
                                        <li>
                                            <p className='PartnersParagraph2'>150+ countries</p>
                                        </li>

                                        <li>
                                            <p className='PartnersParagraph2'>7M+ customers</p>
                                        </li>
                                    </ul>
                                    <div className='PartnersDivText'>
                                        We are looking for banks interested in becoming our partners in the destination countries to help us develop major international remittance corridors. The applying bank should be able to deliver funds to recipient cards domestically.
                                    </div>
                                </li>
                            </ul>
                            <div className='PartnersButton'>
                                <Link to="/contacts" className='PartnersLinkButton'>Сontact us</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    )
}

export default Partners;