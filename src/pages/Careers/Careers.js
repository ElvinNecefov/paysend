import React from 'react';
import "./Careers.css";

import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import BenefitsBlock from '../../components/BenefitsBlock/BenefitsBlock';

import mainImage from "../../assets/images/main_img_306faffdb0.png";
import Rocket from "../../assets/images/Rocket_4b17083aef.svg";
import World from "../../assets/images/Globe_38b4da67ee.svg";
import Rocks from "../../assets/images/Rocks_58f229711e.svg";



const Careers = () => {

    const firstCard = {
        img: Rocket,
        title: "Own your Growth",
        subtitle: "Join one of the fastest growing Fintechs and gain incredible exposure to the business!"
    }

    const secondCard = {
        img: World,
        title: "Shape your Future",
        subtitle: "Learn from team members across the world and find your path to success!"
    }

    const thirdCard = {
        img: Rocks,
        title: "Discover your Potential",
        subtitle: "Flexible work arrangements allow you to build your strengths and discover new ones!"
    }
    return (
        <div className='Main'>
            <div className='CareersSubHeader'>
                <div className='CareersSectionContainer'>
                    <div className='CareersInnerContent'>

                    </div>
                </div>
            </div>
            <Container className='CareersContainer'>
                <Row className='CareersRow'>
                    <Col lg="6" className="LeftBlock">
                        <div className='CareersTitle'>Join Paysend to create money for the future today!</div>
                        <div className='CareersSubTitle'>
                            <div>
                                At Paysend we are building an integrated global payment ecosystem to save time, save money, and serve millions.
                            </div>
                        </div>
                        <Link to="/contacts" className='CareersLinkButton'>See opportunities</Link>
                    </Col>

                    <Col lg="6" className="RightBlock">
                        <img src={mainImage} alt="mainImage" />
                    </Col>
                </Row>
            </Container>

            <div className='BenefitsBlock'>
                <Container className='BenefitsContainer'>
                    <Row className='BenefitsRow'>
                        <BenefitsBlock detail={firstCard} />
                        <BenefitsBlock detail={secondCard} />
                        <BenefitsBlock detail={thirdCard} />
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Careers;