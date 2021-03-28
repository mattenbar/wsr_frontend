import React from "react";
import { connect } from "react-redux";

function PointCounterPoint(state) {
    return (
        <div className="pointcpContainer">
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
            <div class="pointContainer1">
                <div class="pointcp1">
                    <div className="pointTop">
                        <div className="pointHeaderLeft">
                            <img src="https://i.imgur.com/smiMYKy.jpg" alt="image1" className="pointcpImage"/>
                        </div>
                        <div className="pointHeaderRight">
                            <div className="pointbottom">
                            <h1>PERSON A STORY TITLE</h1>
                            <h2>JOHN DOE</h2>
                            <h3>December 1, 2020</h3>
                            </div>
                        </div>
                    </div>
                    <div className="pointcpContent">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim a nulla cursus luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare purus in metus euismod, id pretium enim tincidunt. Duis suscipit ipsum pellentesque elit pretium faucibus. Cras a enim pretium, vehicula diam eget, posuere massa. Donec vulputate tincidunt purus, non bibendum enim mattis id. Donec ultrices leo vel erat volutpat ultrices. Nunc vel erat consequat, porta ligula in, dictum orci. Aliquam finibus metus in porta finibus. Praesent nec nulla sit amet mauris placerat blandit id in sapien. Cras odio mi, congue at odio a, mollis iaculis purus. Nunc rutrum congue mi.
                        </p>
                        
                    </div>
                    <div className="pointVote1">
                        <div className="pv1">
                            <h2>VOTE FOR JOHN &nbsp;&nbsp;</h2>
                            <img src='/boxGloveLeft.png' className="boxGlove"/>
                        </div>
                    </div>
                </div>
            
                <div class="pointcp2">
                    <div className="pointTop2">
                        <div className="pointHeaderRight">
                            <div className="pointbottom2">
                            <h1>PERSON B STORY TITLE</h1>
                            <h2>JOHN DOE</h2>
                            <h3>December 1, 2020</h3>
                            </div>
                        </div>
                        <div className="pointHeaderLeft">
                            <img src="https://i.imgur.com/3gt9XQP.jpg" alt="image1" className="pointcpImage"/>
                        </div>
                    </div>
                    <div className="pointcpContent">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim a nulla cursus luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare purus in metus euismod, id pretium enim tincidunt. Duis suscipit ipsum pellentesque elit pretium faucibus. Cras a enim pretium, vehicula diam eget, posuere massa. Donec vulputate tincidunt purus, non bibendum enim mattis id. Donec ultrices leo vel erat volutpat ultrices. Nunc vel erat consequat, porta ligula in, dictum orci. Aliquam finibus metus in porta finibus. Praesent nec nulla sit amet mauris placerat blandit id in sapien. Cras odio mi, congue at odio a, mollis iaculis purus. Nunc rutrum congue mi.
                        </p>
                        
                    </div>
                    <div className="pointVote2">
                        <div className="pv2">
                            <h2>VOTE FOR JOHN &nbsp;&nbsp;</h2>
                            <img src='/boxGloveLeft.png' className="boxGlove"/>
                        </div>
                    </div>
                </div>
            
            </div>
            <div className="countdown" >
                <div className="countdownText" >
                    <h2>VOTING ENDS IN 28 DAYS</h2>
                </div>
            </div>
            <div class="pointContainer2">
                <div class="pointcp3">
                    <div className="pointTop">
                        <div className="pointHeaderLeft">
                            <img src="https://i.imgur.com/3gt9XQP.jpg" alt="image1" className="pointcpImage"/>
                        </div>
                        <div className="pointHeaderRight">
                            <div className="pointbottom">
                            <h1>PERSON C STORY TITLE</h1>
                            <h2>JOHN DOE</h2>
                            <h3>December 1, 2020</h3>
                            </div>
                        </div>
                    </div>
                    <div className="pointcpContent">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim a nulla cursus luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare purus in metus euismod, id pretium enim tincidunt. Duis suscipit ipsum pellentesque elit pretium faucibus. Cras a enim pretium, vehicula diam eget, posuere massa. Donec vulputate tincidunt purus, non bibendum enim mattis id. Donec ultrices leo vel erat volutpat ultrices. Nunc vel erat consequat, porta ligula in, dictum orci. Aliquam finibus metus in porta finibus. Praesent nec nulla sit amet mauris placerat blandit id in sapien. Cras odio mi, congue at odio a, mollis iaculis purus. Nunc rutrum congue mi.
                        </p>
                        
                    </div>
                    {/* <div className="pointVote">
                        <h2>VOTE FOR JOHN &nbsp;&nbsp;<i className="far fa-thumbs-up fa-1x"></i></h2>
                        
                    </div> */}
                </div>
            
                <div class="pointcp4">
                    <div className="pointTop2">
                        <div className="pointHeaderRight">
                            <div className="pointbottom2">
                            <h1>PERSON D STORY TITLE</h1>
                            <h2>JOHN DOE</h2>
                            <h3>December 1, 2020</h3>
                            </div>
                        </div>
                        <div className="pointHeaderLeft">
                            <img src="https://i.imgur.com/smiMYKy.jpg" alt="image1" className="pointcpImage"/>
                        </div>
                    </div>
                    <div className="pointcpContent">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim a nulla cursus luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare purus in metus euismod, id pretium enim tincidunt. Duis suscipit ipsum pellentesque elit pretium faucibus. Cras a enim pretium, vehicula diam eget, posuere massa. Donec vulputate tincidunt purus, non bibendum enim mattis id. Donec ultrices leo vel erat volutpat ultrices. Nunc vel erat consequat, porta ligula in, dictum orci. Aliquam finibus metus in porta finibus. Praesent nec nulla sit amet mauris placerat blandit id in sapien. Cras odio mi, congue at odio a, mollis iaculis purus. Nunc rutrum congue mi.
                        </p>
                        
                    </div>
                    
                </div>
            </div>
            <div className="winner" >
                <img className="trophyImg" src="/trophy.png" />
                <div className="trophyHeaders" >
                    <h2>WINNER</h2>
                    <h1>JOHN DOE</h1>
                </div>
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
