import React from 'react';
import "./Contacts.css";

import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";



const Contacts = () => {
    return (
        <div className='Main'>
            <div className='SectionContacts'>
                <div>
                    <Container className='ContactsContainer'>
                        <Row className='ContactsRow'>
                            <Col lg={12} className='ContactsCol'>

                                <div className='ContactsTitle'>
                                    Talk to our team
                                </div>

                                <p>We are happy to answer any questions you may have.</p>

                                <div className='ContactsButton'>
                                    <Link className='ContactsButtonLink' to="/contacts">Contact us</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <div className='SectionOffices'>
                <div>
                    <Container className='ContactsContainer'>
                        <Row className='SectionOfficesRow'>
                            <Col lg={12} className="SectionOfficesCol">
                                <div className='ContactsTitle'>
                                    Our offices
                                </div>
                                <div className='OfficelParagraph'>
                                    Our team of international fintech experts is constantly working to improve our services by making them even easier and more affordable. The Paysend offices are located in hotspots of global fintech innovation – London and Edinburgh.
                                </div>
                                <ul className='list-type'>
                                    <li>
                                        <figure>
                                            <ins className='bg-icon-96_london'></ins>
                                            <figcaption className='maincopy'>Global HQ
                                                <p className='smallcopy'>20 Garrick Street, London, WC2E 9BT, United Kingdom</p>
                                            </figcaption>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <ins className='bg-icon-96_edinburgh'></ins>
                                            <figcaption className='maincopy'>UK
                                                <p className='smallcopy'>Suite 2, Ground Floor, Orchard Brae House, 30 Queensferry Road, Edinburgh, EH4 2HS, United Kingdom</p>
                                            </figcaption>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 96 96" height="96" width="96"><path fill="#141414" d="M47 2C47 1.44772 47.4477 1 48 1H54C54.5523 1 55 1.44772 55 2V6C55 6.55228 54.5523 7 54 7H49V15H52V12C52 11.4477 52.4477 11 53 11C53.5523 11 54 11.4477 54 12V16V19.8976L58 39.231V35C58 34.4477 58.4477 34 59 34C59.5523 34 60 34.4477 60 35V49V54.3238L62 48.8238V45C62 44.4477 62.4477 44 63 44C63.5523 44 64 44.4477 64 45V48.8238L67.9398 59.6583C67.9796 59.7678 68 59.8834 68 60V71V76H69C69.5523 76 70 76.4477 70 77C70 77.5523 69.5523 78 69 78H68V94C68 94.5523 67.5523 95 67 95C66.4477 95 66 94.5523 66 94V78H60V83V94C60 94.5523 59.5523 95 59 95C58.4477 95 58 94.5523 58 94V84H53.5H48H43H38V94C38 94.5523 37.5523 95 37 95C36.4477 95 36 94.5523 36 94V83V78H30V94C30 94.5523 29.5523 95 29 95C28.4477 95 28 94.5523 28 94V78H27C26.4477 78 26 77.5523 26 77C26 76.4477 26.4477 76 27 76H28V71V60C28 59.8834 28.0204 59.7678 28.0602 59.6583L32 48.8238V45C32 44.4477 32.4477 44 33 44C33.5523 44 34 44.4477 34 45V48.8238L36 54.3238V49V35C36 34.4477 36.4477 34 37 34C37.5523 34 38 34.4477 38 35V39.231L42 19.8976V16V12C42 11.4477 42.4477 11 43 11C43.5523 11 44 11.4477 44 12V15H47V6V2ZM44 17V19H52V17H48H44ZM52.1857 21H43.8143L38.2281 48H43H53H57.7719L52.1857 21ZM58 50H53H43H38V60V70H58V60V50ZM58 72H38V76H42V75C42 74.4477 42.4477 74 43 74C43.5523 74 44 74.4477 44 75V76H47V75C47 74.4477 47.4477 74 48 74C48.5523 74 49 74.4477 49 75V76H52V75C52 74.4477 52.4477 74 53 74C53.5523 74 54 74.4477 54 75V76H58V72ZM60 76V72H63H66V76H60ZM66 70V61H64V70H66ZM62 70H60V61H62V70ZM60.4277 59H63H65.5723L63 51.9262L60.4277 59ZM58 78H53H48H43H38V82H42V81C42 80.4477 42.4477 80 43 80C43.5523 80 44 80.4477 44 81V82H47V81C47 80.4477 47.4477 80 48 80C48.5523 80 49 80.4477 49 81V82H52.5V81C52.5 80.4477 52.9477 80 53.5 80C54.0523 80 54.5 80.4477 54.5 81V82H58V78ZM36 76V72H33H30V76H36ZM30 70H32V61H30V70ZM30.4277 59H33H35.5723L33 51.9262L30.4277 59ZM36 61H34V70H36V61ZM49 5H53V3H49V5ZM48 25C48.5523 25 49 25.4477 49 26V28C49 28.5523 48.5523 29 48 29C47.4477 29 47 28.5523 47 28V26C47 25.4477 47.4477 25 48 25ZM43 42C43.5523 42 44 42.4477 44 43V45C44 45.5523 43.5523 46 43 46C42.4477 46 42 45.5523 42 45V43C42 42.4477 42.4477 42 43 42ZM53 42C53.5523 42 54 42.4477 54 43V45C54 45.5523 53.5523 46 53 46C52.4477 46 52 45.5523 52 45V43C52 42.4477 52.4477 42 53 42ZM33 82C33.5523 82 34 82.4477 34 83V94C34 94.5523 33.5523 95 33 95C32.4477 95 32 94.5523 32 94V83C32 82.4477 32.4477 82 33 82ZM63 82C63.5523 82 64 82.4477 64 83V94C64 94.5523 63.5523 95 63 95C62.4477 95 62 94.5523 62 94V83C62 82.4477 62.4477 82 63 82ZM43 87C43.5523 87 44 87.4477 44 88V94C44 94.5523 43.5523 95 43 95C42.4477 95 42 94.5523 42 94V88C42 87.4477 42.4477 87 43 87ZM48 87C48.5523 87 49 87.4477 49 88V94C49 94.5523 48.5523 95 48 95C47.4477 95 47 94.5523 47 94V88C47 87.4477 47.4477 87 48 87ZM53 87C53.5523 87 54 87.4477 54 88V94C54 94.5523 53.5523 95 53 95C52.4477 95 52 94.5523 52 94V88C52 87.4477 52.4477 87 53 87Z" clip-rule="evenodd" fill-rule="evenodd"></path><path fill="#7633FF" d="M48 54C44.6863 54 42 56.6863 42 60C42 63.3137 44.6863 66 48 66C51.3137 66 54 63.3137 54 60C54 56.6863 51.3137 54 48 54ZM40 60C40 55.5817 43.5817 52 48 52C52.4183 52 56 55.5817 56 60C56 64.4183 52.4183 68 48 68C43.5817 68 40 64.4183 40 60ZM48 56.0503C48.5523 56.0503 49 56.498 49 57.0503V59H51C51.5523 59 52 59.4477 52 60C52 60.5523 51.5523 61 51 61H48C47.4477 61 47 60.5523 47 60V57.0503C47 56.498 47.4477 56.0503 48 56.0503Z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                                            <figcaption  className='maincopy'>Canada
                                                <p className='smallcopy'>400-906, 12 Avenue SW, Calgary, AB, T2R 1K7, Canad</p>
                                            </figcaption>
                                        </figure>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container> 
                </div>
            </div>
        </div>
    )
}

export default Contacts;