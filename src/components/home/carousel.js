import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function carousel(props) {
    let settings = {
        arrows: true,
        // prevArrow:"<img class='a-left control-c prev slick-prev' src='carouselImages/arrow-left.png'>",
        // nextArrow:"<img class='a-right control-c next slick-next' src='carouselImages/arrow-right.png'>",
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
                    slidesToScroll: 1
                }
                },
                {
                breakpoint: 1008,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
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
            
                <div className="carousel-wrapper" >
                    <div className="box">
                        <a href="/point-counterpoint" className="crsltop">
                            {/* model */}
                            <img src="carouselImages/PointCounterPoint.png" class="top-carousel-model" />
                            {/* header */}
                            <h2>POINT-COUNTERPOINT</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="capital-connections" className="crsltop">
                            <img src="carouselImages/CapitolConnections.png" class="top-carousel-model" />
                            {/* header */}
                            <h2>CAPITAL CONNECTIONS</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="/digital-domains" className="crsltop">
                            <img src="carouselImages/DigitalDomains.png" class="top-carousel-model" />
                            {/* header */}
                            <h2>DIGITAL DOMAINS</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="/shout-outs-and-put-downs" className="crsltop">
                            <img src="carouselImages/ShoutOuts.png" class="top-carousel-model" />
                            {/* header */}
                            <h2>SHOUT-OUTS & PUT DOWNS</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        <a href="beltway-and-beyond" className="crsltop">
                            <img src="carouselImages/Beltway&Beyond.png" class="top-carousel-model" />
                            {/* model */}
                            {/* header */}
                            <h2>BELTWAY AND BEYOND</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="/lawyer-land" className="crsltop">
                            <img src="carouselImages/LawyerLand.png" class="top-carousel-model" />
                            {/* header */}
                            <h2>LAWYER LAND</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="/nightmare-on-compliance-st" className="crsltop">
                            <img src="carouselImages/NightmareOnCompSt.png" class="top-carousel-model" />
                            {/* header */}
                            <h2>NIGHTMARE ON COMPLIANCE ST</h2>
                        </a>
                    </div>
                </div>
                
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="/buy-it-or-build-it" className="crsltop">
                            <img src="carouselImages/BuyItOrBuildIt.png" class="top-carousel-model" />
                            {/* header */}
                            <h2>BUY IT OR BUILD IT?</h2>
                        </a>
                    </div>
                </div>
                
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="/wallet-share" className="crsltop" >
                            <img src="carouselImages/WalletShare.png" class="top-carousel-model" />
                            {/* header */}
                            <h2>WALLET SHARE</h2>
                        </a>
                    </div>
                </div>

                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="family-feuds" className="crsltop">
                            <img src="carouselImages/FamilyFeuds.png" class="top-carousel-model" />
                            {/* header */}
                            <h2>FAMILY FEUDS</h2>
                        </a>
                    </div>
                </div>

                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="/product-strategies" className="crsltop">
                            <img src="carouselImages/ProductStrategies.png" class="top-carousel-model" />
                            {/* header */}
                            <h2>PRODUCT STRATEGIES</h2>
                        </a>
                    </div>
                </div>

                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="/letters-from-larry" className="crsltop">
                            <img src="carouselImages/LettersFromLarry.png" class="top-carousel-model" />
                            {/* header */}
                            <h2>LETTERS FROM LARRY</h2>
                        </a>
                    </div>
                </div>

                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="/noteworthy-notes" className="crsltop">
                            <img src="carouselImages/NoteworthyNotes.png" class="top-carousel-model" />
                            {/* header */}
                            <h2>NOTEWORTHY NOTES</h2>
                        </a>
                    </div>
                </div>

                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="/newsmakers-roundup" className="crsltop">
                            <img src="carouselImages/NewsMakersRoundUp.png" class="top-carousel-model" />
                            {/* header */}
                            <h2>NEWSMAKERS ROUNDUP</h2>
                        </a>
                    </div>
                </div>

                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="/transactions-and-transitions" className="crsltop">
                            <img src="carouselImages/Transactions&Trans.png" class="top-carousel-model" />
                            {/* header */}
                            <h2>TRANSACTIONS AND TRANSITIONS</h2>
                        </a>
                    </div>
                </div>

                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="/from-our-partners" className="crsltop">
                            <img src="carouselImages/FromOurPartners.png" class="top-carousel-model" />
                            {/* header */}
                            <h2>FROM OUR PARTNERS</h2>
                        </a>
                    </div>
                </div>
            
            </Slider>
        </div>
    );
}

export default carousel;