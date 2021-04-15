import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom';


function carousel(props) {
    let settings = {
        arrows: true,
        // prevArrow:"<img className='a-left control-c prev slick-prev' src='carouselImages/arrow-left.png'>",
        // nextArrow:"<img className='a-right control-c next slick-next' src='carouselImages/arrow-right.png'>",
        dots: false,
        infinite: true, 
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
                },
                {
                breakpoint: 880,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
                }

            ]
    }
    return (
        <div className="carousel-top" >
            <Slider {...settings} >
                {/* week one */}
                {/*<div className="carousel-wrapper" >
                        <Link to="/letters-from-larry" className="crsltop">
                            <img src="/carouselImages/LettersFromLarry.png" className="top-carousel-model" alt=""/>
                            <h2>LETTERS FROM LARRY</h2>
                        </Link>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        <Link to="capital-connections" className="crsltop" >
                            <img src="/carouselImages/CapitolConnections.png" className="top-carousel-model" alt=""/>
                            <h2>CAPITAL CONNECTIONS</h2>
                        </Link>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        <Link to="/point-counterpoint" className="crsltop">

                            <img src="/carouselImages/PointCounterPoint.jpg" className="top-carousel-model" alt="point cp logo"/>
                            <h2>POINT-COUNTERPOINT</h2>
                        </Link>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        <Link to="/the-digital-domain" className="crsltop">
                            <img src="/carouselImages/DigitalDomains.png" className="top-carousel-model" alt=""/>
                            <h2>THE DIGITAL DOMAIN</h2>
                        </Link>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        <Link to="/Words-In-Edgewise" className="crsltop">
                            <img src="/carouselImages/WordsInEdgewise.png" className="top-carousel-model" alt=""/>
                            <h2>WORDS IN EDGEWISE</h2>
                        </Link>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        <Link to="/wallet-share" className="crsltop" >
                            <img src="/carouselImages/WalletShare.png" className="top-carousel-model" alt=""/>
                            <h2>WALLET SHARE</h2>
                        </Link>
                    </div>
                </div>*/}


                {/* week two */}

                 <div className="carousel-wrapper" >
                    <div className="box">
                        <Link to="/newsmakers-roundup" className="crsltop">
                            <img src="/carouselImages/NewsMakersRoundUp.png" className="top-carousel-model" alt=""/>
                            <h2>NEWSMAKERS ROUNDUP</h2>
                        </Link>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        <Link to="//Bizarre-Industry-Bazaar" className="crsltop">
                            <img src="/carouselImages/BizarreIndustryBazaar.png" className="top-carousel-model" alt=""/>
                            <h2>BIZARRE INDUSTRY BAZAAR</h2>
                        </Link>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        <Link to="/Investment-Solutions-And-Gatekeepers" className="crsltop">
                            <img src="/carouselImages/InvestmentSolutions&Gatekeepers.png" className="top-carousel-model" alt=""/>
                            <h2>INVESTMENT SOLUTIONS & GATEKEEPERS</h2>
                        </Link>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        <Link to="/On-The-Rise" className="crsltop">
                            <img src="/carouselImages/OnTheRise.png" className="top-carousel-model" alt=""/>
                            <h2>ON THE RISE</h2>
                        </Link>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        <Link to="/noteworthy-notes" className="crsltop" >
                            <img src="/carouselImages/NoteworthyNotes.png" className="top-carousel-model" alt=""/>
                            <h2>NOTEWORTHY NOTES</h2>
                        </Link>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        <Link to="/health-and-wealth" className="crsltop" >
                            <img src="/carouselImages/HealthAndWealth.png" className="top-carousel-model" alt=""/>
                            <h2>HEALTH & WEALTH</h2>
                        </Link>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        <Link to="/upmarket" className="crsltop" >
                            <img src="/carouselImages/Upmarket.png" className="top-carousel-model" alt=""/>
                            <h2>UPMARKET</h2>
                        </Link>
                    </div>
                </div>


                {/* week 3 */}

                
                {/* <div className="carousel-wrapper" >
                    <div className="box">
                        <Link to="/Nightmare-On-Compliance-St" className="crsltop">
                            <img src="/carouselImages/NightmareOnCompSt.png" className="top-carousel-model" alt=""/>
                            <h2>NIGHTMARE ON COMPLIANCE ST</h2>
                        </Link>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        <Link to="/Beltway-And-Beyond" className="crsltop">
                            <img src="/carouselImages/Beltway&Beyond.png" className="top-carousel-model" alt=""/>

                            <h2>BELTWAY & BEYOND</h2>
                        </Link>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        <Link to="/Buy-It-Or-Build-It" className="crsltop">
                            <img src="/carouselImages/BuyItOrBuildIt.png" className="top-carousel-model" alt=""/>
                            <h2>BUY IT OR BUILD IT?</h2>
                        </Link>
                    </div>
                </div> */}


                {/* week 4 */}
                
                
                {/* <div className="carousel-wrapper" >
                    <div className="box">
                        <Link to="/transactions-And-transitions" className="crsltop">
                            <img src="/carouselImages/Transactions&Trans.png" className="top-carousel-model" alt=""/>
                            <h2>TRANSACTIONS & TRANSITIONS</h2>
                        </Link>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        <Link to="/Dramatis-Personae" className="crsltop">
                            <img src="/carouselImages/DramatisPersonae.png" className="top-carousel-model" alt=""/>
                            <h2>DRAMATIS PERSONAE</h2>
                        </Link>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        <Link to="/CyberCrypt-Tales" className="crsltop">
                            <img src="/carouselImages/CryptTales.png" className="top-carousel-model" alt=""/>
                            <h2>CYBERCRRYPT TALES</h2>
                        </Link>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        <Link to="/People-Moves" className="crsltop">
                            <img src="/carouselImages/PeopleMoves.png" className="top-carousel-model" alt=""/>
                            <h2>PEOPLE MOVES</h2>
                        </Link>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        <Link to="/Shout-Outs-And-Put-Downs" className="crsltop">
                            <img src="/carouselImages/ShoutOuts.png" className="top-carousel-model" alt=""/>
                            <h2>SHOUT-OUTS & PUT DOWNS</h2>
                        </Link>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        <Link to="/Cast-And-Crew" className="crsltop">
                            <img src="/carouselImages/Cast&Crew.png" className="top-carousel-model" alt=""/>
                            <h2>CAST & CREW</h2>
                        </Link>
                    </div>
                </div> */}

                
            </Slider>
        </div>
    );
}

export default carousel;