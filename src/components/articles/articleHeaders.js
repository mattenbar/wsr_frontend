import React from "react";
import {Link} from 'react-router-dom'

function articleHeaders(props) {
    switch (props.category) {
        case 1:
            return (
                <>
                    <div className="category-show">
                        <div className="category-image">
                            <Link to={"/Capital-Connections"}>
                                <img
                                    src="/carouselImages/CapitolConnections.png"
                                    alt=""
                                ></img>
                            </Link>
                        </div>
                        <div className="category-header">
                            <Link to={"/Capital-Connections"}>
                                <h1>CAPITAL CONNECTIONS</h1>
                            </Link>
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
        case 2:
            return (
                <>
                    <div className="category-show">
                        <div className="category-image">
                            <Link to={"/The-Digital-Domain"}>
                                <img
                                    src="/carouselImages/DigitalDomains.png"
                                    alt=""
                                ></img>
                            </Link>
                        </div>
                        <div className="category-header">
                            <Link to={"/The-Digital-Domain"}>
                                <h1> THE DIGITAL DOMAIN</h1>
                            </Link>
                            <h4 className="tagline">
                                Transformative tech leaders in the wealth
                                management space
                            </h4>
                            <h5>
                                We profile the fintech solutions, strategies and
                                experts who are redefining the how the wealth
                                management industry operates to unlock new
                                growth opportunities.
                            </h5>
                        </div>
                    </div>
                </>
            );
        case 3:
            return (
                <>
                    <div className="category-show">
                        <div className="category-image">
                            <Link to={"/Shout-Outs-And-Put-Downs"}>
                                <img
                                    src="/carouselImages/ShoutOuts.png"
                                    alt=""
                                ></img>
                            </Link>
                        </div>
                        <div className="category-header">
                            <Link to={"/Shout-Outs-And-Put-Downs"}>
                                <h1>SHOUT OUTS AND PUT DOWNS</h1>
                            </Link>
                            <h4 className="tagline">
                                {" "}
                                Readers share their best & worst experiences
                                anonymously
                            </h4>
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
        case 4:
            return (
                <>
                    <div className="category-show">
                        <div className="category-image">
                            <Link to={"/Beltway-And-Beyond"}>
                                <img
                                    src="/carouselImages/Beltway&Beyond.png"
                                    alt=""
                                ></img>
                            </Link>
                        </div>
                        <div className="category-header">
                            <Link to={"/Beltway-And-Beyond"}>
                                <h1>BELTWAY AND BEYOND</h1>
                            </Link>
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
        case 5:
            return (
                <>
                    <div className="category-show">
                        <div className="category-image">
                            <Link to={"/People-Moves"}>
                                <img
                                    src="/carouselImages/PeopleMoves.png"
                                    alt=""
                                ></img>
                            </Link>
                        </div>
                        <div className="category-header">
                            <Link to={"/People-Moves"}>
                                <h1>PEOPLE MOVES</h1>
                            </Link>
                            <h4 className="tagline">TAGLINE WILL GO HERE</h4>
                            <h5>DESCRIPTOR WILL GO HERE.</h5>
                        </div>
                    </div>
                </>
            );
        case 6:
            return (
                <>
                    <div className="category-show">
                        <div className="category-image">
                            <Link to={"/Nightmare-On-Compliance-St"}>
                                <img
                                    src="/carouselImages/NightmareOnCompSt.png"
                                    alt=""
                                ></img>
                            </Link>
                        </div>
                        <div className="category-header">
                            <Link to={"/Nightmare-On-Compliance-St"}>
                                <h1>NIGHTMARE ON COMPLIANCE ST </h1>
                            </Link>
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
        case 7:
            return (
                <>
                    <div className="category-show">
                        <div className="category-image">
                            <Link to={"/Buy-It-Or-Build-It"}>
                                <img
                                    src="/carouselImages/BuyItOrBuildIt.png"
                                    alt=""
                                ></img>
                            </Link>
                        </div>
                        <div className="category-header">
                            <Link to={"/Buy-It-Or-Build-It"}>
                                <h1>BUY IT OR BUILD IT?</h1>
                            </Link>
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
        case 8:
            return (
                <>
                    <div className="category-show">
                        <div className="category-image">
                            <Link to={"/Wallet-Share"}>
                                <img
                                    src="/carouselImages/WalletShare.png"
                                    alt=""
                                ></img>
                            </Link>
                        </div>
                        <div className="category-header">
                            <Link to={"/Wallet-Share"}>
                                <h1>WALLET SHARE</h1>
                            </Link>
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
        case 9:
            return (
                <>
                    <div className="category-show">
                        <div className="category-image">
                            <Link to={"/CyberCrypt-Tales"}>
                                <img
                                    src="/carouselImages/CryptTales.png"
                                    alt=""
                                ></img>
                            </Link>
                        </div>
                        <div className="category-header">
                            <Link to={"/CyberCrypt-Tales"}>
                                <h1>CYBERCRYPT TALES</h1>
                            </Link>
                            <h4 className="tagline">
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
        case 10:
            return (
                <>
                    <div className="category-show">
                        <div className="category-image">
                            <Link to={"/On-The-Rise"}>
                                <img
                                    src="/carouselImages/OnTheRise.png"
                                    alt=""
                                ></img>
                            </Link>
                        </div>
                        <div className="category-header">
                            <Link to={"/On-The-Rise"}>
                                <h1>ON THE RISE</h1>
                            </Link>
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
        case 11:
            return (
                <>
                    <div className="category-show">
                        <div className="category-image">
                            <Link to={"/Letters-From-Larry"}>
                                <img
                                    src="/carouselImages/LettersFromLarry.png"
                                    alt=""
                                ></img>
                            </Link>
                        </div>
                        <div className="category-header">
                            <Link to={"/Letters-From-Larry"}>
                                <h1>Letters from larry</h1>
                            </Link>
                            <h4 className="tagline">
                                Key trends defining wealth management
                            </h4>
                            <h5>
                                Larry Roth shares his latest thoughts on
                                what’s shaping the wealth management space now
                                and in the future.
                            </h5>
                        </div>
                    </div>
                </>
            );
        case 12:
            return (
                <>
                    <div className="category-show">
                        <div className="category-image">
                            <Link to={"/Dramatis-Personae"}>
                                <img
                                    src="/carouselImages/DramatisPersonae.png"
                                    alt=""
                                ></img>
                            </Link>
                        </div>
                        <div className="category-header">
                            <Link to={"/Dramatis-Personae"}>
                                <h1>DRAMATIS PERSONAE</h1>
                            </Link>
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
        case 13:
            return (
                <>
                    <div className="category-show">
                        <div className="category-image">
                            <Link to={"/NewsMakers-Roundup"}>
                                <img
                                    src="/carouselImages/NewsMakersRoundUp.png"
                                    alt=""
                                ></img>
                            </Link>
                        </div>
                        <div className="category-header">
                            <Link to={"/NewsMakers-Roundup"}>
                                <h1>NEWSMAKERS ROUNDUP</h1>
                            </Link>
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
        case 14:
            return (
                <>
                    <div className="category-show">
                        <div className="category-image">
                            <Link to={"/Transactions-And-Transitions"}>
                                <img
                                    src="/carouselImages/Transactions&Trans.png"
                                    alt=""
                                ></img>
                            </Link>
                        </div>
                        <div className="category-header">
                            <Link to={"/Transactions-And-Transitions"}>
                                <h1>TRANSACTIONS & TRANSITIONS</h1>
                            </Link>
                            <h4 className="tagline">
                                {" "}
                                Keep track of industry leaders' moves & deals
                            </h4>
                            <h5>
                                Need help keeping track of who's where and
                                what's happening? Each month, we'll cover the
                                industry's top advisor recruiting moves and M&A
                                deals to keep you up to date and informed.
                            </h5>
                        </div>
                    </div>
                </>
            );
        case 15:
            return (
                <>
                    <div className="category-show">
                        <div className="category-image">
                            <Link to={"/Cast-And-Crew"}>
                                <img
                                    src="/carouselImages/Cast&Crew.png"
                                    alt=""
                                ></img>
                            </Link>
                        </div>
                        <div className="category-header">
                            <Link to={"/Cast-And-Crew"}>
                                <h1>CAST & CREW</h1>
                            </Link>
                            <h4 className="tagline"> TAGLINE WILL GO HERE</h4>
                            <h5>DESCRIPTOR WILL GO HERE.</h5>
                        </div>
                    </div>
                </>
            );
        case 16:
            return (
                <>
                    <div className="category-show">
                        <div className="category-image">
                            <Link to={"/Bizarre-Industry-Bazaar"}>
                                <img
                                    src="/carouselImages/BizarreIndustryBazaar.png"
                                    alt=""
                                ></img>
                            </Link>
                        </div>
                        <div className="category-header">
                            <Link to={"/Bizarre-Industry-Bazaar"}>
                                <h1>BIZARRE INDUSTRY BAZAAR</h1>
                            </Link>
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
        case 17:
            return (
                <>
                    <div className="category-show">
                        <div className="category-image">
                            <Link to={"/Investment-Solutions-and-Gatekeepers"}>
                                <img
                                    src="/carouselImages/InvestmentSolutions&Gatekeepers.png"
                                    alt=""
                                ></img>
                            </Link>
                        </div>
                        <div className="category-header">
                            <Link to={"/Investment-Solutions-and-Gatekeepers"}>
                                <h1> INVESTMENT SOLUTIONS & GATEKEEPERS</h1>
                            </Link>
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
        case 18:
            return (
                <>
                    <div className="category-show">
                        <div className="category-image">
                            <Link to={"/Words-In-Edgewise"}>
                                <img
                                    src="/carouselImages/WordsInEdgewise.png"
                                    alt=""
                                ></img>
                            </Link>
                        </div>
                        <div className="category-header">
                            <Link to={"/Words-In-Edgewise"}>
                                <h1>Words In Edgewise</h1>
                            </Link>
                            <h4 className="tagline">
                                Words in edgewise from wealth management leaders
                            </h4>
                            <h5>Get the best techniques & advice on a variety of subjects from across the wealth management industry.</h5>
                        </div>
                    </div>
                </>
            );
        case 19:
            return (
              <>
                  <div className="category-show">
                      <div className="category-image">
                          <Link to={"/Noteworthy-Notes"}>
                              <img
                                src="/carouselImages/NoteworthyNotes.png"
                                alt=""
                              ></img>
                          </Link>
                      </div>
                      <div className="category-header">
                          <Link to={"/Noteworthy-Notes"}>
                              <h1>NOTEWORTHY NOTES</h1>
                          </Link>
                          <h4 className="tagline">
                              Noteworthy analysis on investing, the markets and the economy
                          </h4>
                          <h5>
                              Latest research on investing, the markets and the economy
                          </h5>
                      </div>
                  </div>
              </>
            );
        case 20:
            return (
              <>
                  <div className="category-show">
                      <div className="category-image">
                          <Link to={"/Health-And-Wealth"}>
                              <img
                                src="/carouselImages/HealthAndWealth.png"
                                alt=""
                              ></img>
                          </Link>
                      </div>
                      <div className="category-header">
                          <Link to={"/Health-And-Wealth"}>
                              <h1>HEALTH & WEALTH</h1>
                          </Link>
                          <h4 className="tagline">
                              The intersection of health, wellness and financial advice
                          </h4>
                          <h5>
                              The intersection of health, wellness and financial advice
                          </h5>
                      </div>
                  </div>
              </>
            );
        case 21:
            return (
              <>
                  <div className="category-show">
                      <div className="category-image">
                          <Link to={"/Upmarket"}>
                              <img
                                src="/carouselImages/Upmarket.png"
                                alt=""
                              ></img>
                          </Link>
                      </div>
                      <div className="category-header">
                          <Link to={"/Upmarket"}>
                              <h1>UPMARKET</h1>
                          </Link>
                          <h4 className="tagline">
                              Strategies and insights for aggressively growing your business
                          </h4>
                          <h5>
                              How to grow your business more effectively
                          </h5>
                      </div>
                  </div>
              </>
            );

        case "point-counterpoint":
            return (
                <>
                    <div className="category-show">
                        <div className="category-image">
                            <Link to={"/Point-Counterpoint"}>
                                <img
                                    src="/carouselImages/PointCounterPoint.jpg"
                                    alt="point cp logo"
                                ></img>
                            </Link>
                        </div>
                        <div className="category-header">
                            <Link to={"/Point-Counterpoint"}>
                            <h1>POINT-COUNTERPOINT</h1></Link>
                            <h4 className="tagline">
                                Two industry leaders enter – One industry leader
                                wins.
                            </h4>
                            <h5>
                                Our readers select the victors by delivering
                                them with the most likes. Select like in the
                                next 30 days for your vote to be counted! We’ll
                                announce the winner at the bottom of next
                                month’s Point Counterpoint story.
                            </h5>
                        </div>
                    </div>
                </>
            );

        default:
            return <div>something went wrong in articleHeaders.js</div>;
    }
}

export default articleHeaders;
