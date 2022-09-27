import React from 'react';
import "./BenefitsBlock.css";

import { Container, Row, Col } from 'reactstrap';

const BenefitsBlock = (props) => {
  return (
    <div>
            <Col className="BenefitsCol">
                <img src={props.detail.img} alt="BenefitsImage" />

                <div className='BenefitsTitle'>
                    <span>
                        {props.detail.title}
                    </span>
                </div>

                <div className='BenefitsSubTitle'>
                    <span>
                        {props.detail.subtitle}
                    </span>
                </div>
            </Col>
    </div>
  )
}

export default BenefitsBlock;