import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { GetSlug } from "../../actions/getSlug";

function thisIssue(state) {
  let settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  if (state.posts.length > 0 && state.pointcps.pointCPPosts.length > 0) {
    console.log(state.pointcps.pointCPPosts);
    let lastFive = state.posts.slice(-5).reverse();
    let cItems = lastFive.map((post) => {
      return (
        <div key={post.attributes.title} className="ticrslwrapper">
          <div className="ti-box">
            <Link
              to={{
                pathname: `${GetSlug(post.attributes)}/${post.id}`,
                state: {
                  category: post.attributes.category_id,
                },
              }}
              className="ti-a"
            >
              {/* model */}
              <img src={post.attributes.image} className="circular-image" />
              {/* header */}
              <h2>{post.attributes.title}</h2>
              <p>{post.attributes.author}</p>
            </Link>
          </div>
        </div>
      );
    });

    let pointCpReverse = state.pointcps.pointCPPosts.reverse();
    let mostRecentPcp = pointCpReverse[0];

    console.log(mostRecentPcp);
    return (
      <div className="ticrsl">
        <h1>THIS ISSUE</h1>
        <div className="ticrsl-move-left">
          <Slider {...settings}>
            {cItems}
            <div key={mostRecentPcp.attributes.title} className="ticrslwrapper">
              <div className="ti-box">
                <Link
                  to={{
                    pathname: `/Point-Counterpoint/${mostRecentPcp.id}`,
                    state: {
                      pointcp_id: mostRecentPcp.id,
                    },
                  }}
                  className="ti-a"
                >
                  {/* model */}
                  <img
                    src="/carouselImages/PointCounterPoint.jpg"
                    className="circular-image"
                  />
                  {/* header */}
                  <h2>{mostRecentPcp.attributes.topic}</h2>
                  <p>
                    with {mostRecentPcp.attributes.authorOne} VS.{" "}
                    {mostRecentPcp.attributes.authorTwo}
                  </p>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function mSTP(state) {
  return {
    post: state.posts,
    user: state.user,
    pointcps: state.pcps,
  };
}

export default connect(mSTP)(thisIssue);
