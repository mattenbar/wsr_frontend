import React from 'react';

function articleHeaders(props) {
    if (props.category === 1){
        return (
            <>
                <div className="category-show">
                        <div className="category-image">
                            <img
                                src="/carouselImages/CapitolConnections.png"
                                alt=""
                            ></img>
                        </div>
                        <div className="category-header">
                            <h1>CAPITAL CONNECTIONS</h1>
                            <h4 className="tagline">
                                How wealth management firms and sources of
                                private capital drive growth together
                            </h4>
                            <h5>
                                We spotlight private equity, venture capital or
                                SPAC leaders focused on wealth management
                                acquisitions, or executives from wealth
                                management firms owned by sources of private
                                capital. Here’s what to look for – And where to
                                watch out.
                            </h5>
                        </div>
                    </div>
            </>
        );
    } else if (props.category === 2){
        return (
            <>
                <div className="category-show">
                        <div className="category-image">
                            <img
                                src="/carouselImages/DigitalDomains.png"
                                alt=""
                            ></img>
                        </div>
                        <div className="category-header">
                            <h1> THE DIGITAL DOMAIN</h1>
                            <h4 className="tagline">
                                Transformative tech leaders in the wealth
                                management space
                            </h4>
                            <h5>
                                We profile the fintech solutions, strategies and
                                experts who are redefining the how the wealth
                                management industry operates to unlock new
                                growth opportunities
                            </h5>
                        </div>
                    </div>
            </>
        );
    } else if (props.category === 3){
        return (
            <>
                <div className="category-show">
                        <div className="category-image">
                            <img
                                src="/carouselImages/ShoutOuts.png"
                                alt=""
                            ></img>
                        </div>
                        <div className="category-header">
                            <h1>SHOUT OUTS AND PUT DOWNS</h1>
                            <h4 className="tagline"> Readers share their best & worst experiences anonymously</h4>
                            <h5>
                                Each month, wealth management professionals
                                anonymously send us the best and worst examples
                                of leadership, management and mentoring they’ve
                                experienced in the course of their careers.
                            </h5>
                        </div>
                    </div>
            </>
        );
    } else if (props.category === 4){
        return (
            <>
                <div className="category-show">
                        <div className="category-image">
                            <img
                                src="/carouselImages/Beltway&Beyond.png"
                                alt=""
                            ></img>
                        </div>
                        <div className="category-header">
                            <h1>BELTWAY AND BEYOND</h1>
                            <h4 className="tagline">
                                Keeping you up to speed on key regulatory and
                                legislative trends
                            </h4>
                            <h5>
                                Keeping wealth management firms and other
                                industry participants aware of the most
                                important legislative and regulatory trends –
                                And how to stay ahead of the curve.
                            </h5>
                        </div>
                    </div>
            </>
        );
    } else if (props.category === 5){
        return (
            <>
                <div className="category-show">
                            <div className="category-image">
                                <img
                                    src="/carouselImages/PeopleMoves.png"
                                    alt=""
                                ></img>
                            </div>
                            <div className="category-header">
                                <h1>PEOPLE MOVES</h1>
                                <h4 className="tagline">
                                    {" "}
                                    TAGLINE WILL GO HERE
                                </h4>
                                <h5>DESCRIPTOR WILL GO HERE.</h5>
                            </div>
                        </div>
            </>
        );
    } else if (props.category === 6){
        return (
            <>
                <div className="category-show">
                        <div className="category-image">
                            <img
                                src="/carouselImages/NightmareOnCompSt.png"
                                alt=""
                            ></img>
                        </div>
                        <div className="category-header">
                            <h1>NIGHTMARE ON COMPLIANCE ST </h1>
                            <h4 className="tagline">
                                Your biggest compliance worries addressed
                            </h4>
                            <h5>
                                What are the biggest compliance questions that
                                aren’t easily answered and keep you up at night?
                                Industry-leading compliance expert Sander
                                Ressler answers your anonymous questions.
                            </h5>
                        </div>
                    </div>
            </>
        );
    } else if (props.category === 7){
        return (
            <>
                <div className="category-show">
                        <div className="category-image">
                            <img
                                src="/carouselImages/BuyItOrBuildIt.png"
                                alt=""
                            ></img>
                        </div>
                        <div className="category-header">
                            <h1>BUY IT OR BUILD IT?</h1>
                            <h4 className="tagline">
                                What’s best: Proprietary, outsourced or blended
                                solutions?
                            </h4>
                            <h5>
                                Third-party solutions continue to proliferate.
                                Are wealth management leaders better off with
                                proprietary solutions, outside services, or a
                                mix of both? Each month, we’ll speak to a
                                different industry leader on a specific “buy it
                                or build it” dilemma – And how to best address
                                it.
                            </h5>
                        </div>
                    </div>
            </>
        );
    } else if (props.category === 8){
        return (
            <>
                <div className="category-show">
                        <div className="category-image">
                            <img
                                src="/carouselImages/WalletShare.png"
                                alt=""
                            ></img>
                        </div>
                        <div className="category-header">
                            <h1>WALLET SHARE</h1>
                            <h4 className="tagline">
                                Sales, marketing and communications strategies
                                and leaders
                            </h4>
                            <h5>
                                Actionable tips and strategies from sales,
                                marketing and communications leaders on how to
                                stand out from the crowd to generate increased
                                growth.
                            </h5>
                        </div>
                    </div>
            </>
        );
    } else if (props.category === 9){
        return (
            <>
                <div className="category-show">
                        <div className="category-image">
                            <img
                                src="/carouselImages/CryptTales.png"
                                alt=""
                            ></img>
                        </div>
                        <div className="category-header">
                            <h1>CYBERCRYPT TALES</h1>
                            <h4 className="tagline">
                                {" "}
                                Keeping you ahead of the curve on cybersecurity
                            </h4>
                            <h5>
                                Industry-leading cybersecurity expert Sid
                                Yenamandra answers your anonymous questions that
                                are keeping you up at night.
                            </h5>
                        </div>
                    </div>
            </>
        );
    } else if (props.category === 10){
        return (
            <>
                <div className="category-show">
                        <div className="category-image">
                            <img
                                src="/carouselImages/OnTheRise.png"
                                alt=""
                            ></img>
                        </div>
                        <div className="category-header">
                            <h1>ON THE RISE</h1>
                            <h4 className="tagline">
                                Diversity and next gen success stories
                            </h4>
                            <h5>
                                Each month, our “On The Rise” section spotlights
                                a financial advisor or executive who exemplifies
                                how wealth management is being positively
                                transformed through greater diversity – In terms
                                of gender, culture and age.
                            </h5>
                        </div>
                    </div>
            </>
        );
    } else if (props.category === 11){
        return (
            <>
                <div className="category-show">
                        <div className="category-image">
                            <img
                                src="/carouselImages/LettersFromLarry.png"
                                alt=""
                            ></img>
                        </div>
                        <div className="category-header">
                            <h1>Letters from larry</h1>
                            <h4 className="tagline">
                                Key trends defining wealth management
                            </h4>
                            <h5>
                                Larry Roth’s shares his latest thoughts on
                                what’s shaping the wealth management space now
                                and in the future.
                            </h5>
                        </div>
                    </div>
            </>
        );
    } else if (props.category === 12){
        return (
            <>
                <div className="category-show">
                        <div className="category-image">
                            <img
                                src="/carouselImages/DramatisPersonae.png"
                                alt=""
                            ></img>
                        </div>
                        <div className="category-header">
                            <h1>DRAMATIS PERSONAE</h1>
                            <h4 className="tagline">
                                Spotlighting creative and contrarian firms and
                                their leaders
                            </h4>
                            <h5>
                                The most successful stories in wealth management
                                revolve around people and firms willing to stand
                                out with creative – and sometimes contrarian –
                                strategies.
                            </h5>
                        </div>
                    </div>
            </>
        );
    } else if (props.category === 13){
        return (
            <>
                <div className="category-show">
                        <div className="category-image">
                            <img
                                src="/carouselImages/NewsMakersRoundUp.png"
                                alt=""
                            ></img>
                        </div>
                        <div className="category-header">
                            <h1>NEWSMAKERS ROUNDUP</h1>
                            <h4 className="tagline">
                                Top news condensed from top wealth management
                                media outlets
                            </h4>
                            <h5>
                                Notes from Larry: I’ve assembled my personal
                                picks of top news stories from media outlets
                                covering the wealth management space – And why
                                you should care.
                            </h5>
                        </div>
                    </div>
            </>
        );
    } else if (props.category === 14){
        return (
            <>
                <div className="category-show">
                        <div className="category-image">
                            <img
                                src="/carouselImages/Transactions&Trans.png"
                                alt=""
                            ></img>
                        </div>
                        <div className="category-header">
                            <h1>TRANSACTIONS & TRANSITIONS</h1>
                            <h4 className="tagline"> Keep track of industry leaders' moves + deals</h4>
                            <h5>Need help keeping track of who's where and what's happening? Each month, we'll cover the industry's top advisor recruiting moves and M&A deals to keep you up to date and informed.</h5>
                        </div>
                    </div>
            </>
        );
    } else if (props.category === 15){
        return (
            <>
                <div className="category-show">
                        <div className="category-image">
                            <img
                                src="/carouselImages/Cast&Crew.png"
                                alt=""
                            ></img>
                        </div>
                        <div className="category-header">
                            <h1>CAST & CREW</h1>
                            <h4 className="tagline"> TAGLINE WILL GO HERE</h4>
                            <h5>DESCRIPTOR WILL GO HERE.</h5>
                        </div>
                    </div>
            </>
        );
    } else if (props.category === 16){
        return (
            <>
                <div className="category-show">
                        <div className="category-image">
                            <img
                                src="/carouselImages/BizarreIndustryBazaar.png"
                                alt=""
                            ></img>
                        </div>
                        <div className="category-header">
                            <h1>BIZARRE INDUSTRY BAZAAR</h1>
                            <h4 className="tagline">
                                The weirder side of wealth management
                            </h4>
                            <h5>
                                It’s a wild and weird wealth management industry
                                sometimes – We bring you some of the strangest
                                stories, so you don’t have to experience it
                                directly.
                            </h5>
                        </div>
                    </div>
            </>
        );
    } else if (props.category === 17){
        return (
            <>
                <div className="category-show">
                        <div className="category-image">
                            <img
                                src="/carouselImages/InvestmentSolutions&Gatekeepers.png"
                                alt=""
                            ></img>
                        </div>
                        <div className="category-header">
                            <h1> INVESTMENT SOLUTIONS & GATEKEEPERS</h1>
                            <h4 className="tagline">
                                Innovative investment solutions and gatekeepers
                            </h4>
                            <h5>
                                Third-party asset managers need to know what IBD
                                and RIA gatekeepers are seeking. Gatekeepers
                                want to know about third-party asset managers
                                that can drove value for financial advisors. We
                                connect these two vital audiences.
                            </h5>
                        </div>
                    </div>
            </>
        );
    } else if (props.category === 18){
        return (
            <>
                <div className="category-show">
                    <div className="category-image">
                        <img src="/carouselImages/PointCounterPoint.png" alt=""></img>
                    </div>
                    <div className="category-header">
                        <h1>POINT-COUNTERPOINT</h1>
                        <h4 className="tagline">
                            {" "}
                            Two industry leaders enter – One industry leader wins.
                        </h4>
                        <h5>
                            Our readers select the victors by delivering them with the
                            most likes. Select like in the next 30 days for your vote to
                            be counted! We’ll announce the winner at the bottom of next
                            month’s Point Counterpoint story.
                        </h5>
                    </div>
                </div>
            </>
        )
    }
}

export default articleHeaders;