import React from "react";
import { connect } from "react-redux";

function PointCounterPoint(state) {
    return (
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
    );
}

function mSTP(state) {
    return {
        pointcp: state.pointcp,
        user: state.user,
    };
}

export default connect(mSTP)(PointCounterPoint);
