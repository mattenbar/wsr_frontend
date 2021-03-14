import React from 'react';

function features(props) {
    return (
        <div className="features">
            <h1>TODAY'S TOP FEATURES</h1>
            <div className="feature-wrapper" >
                <div className="small-square">
                    <a href="#" >
                        <img src="mountainStocks.jpg" className="feature-images__small" />
                        <h2>HEADLINE HEADLINE</h2>
                        <p>Author Name / Date Published</p>
                    </a>
                </div>
                <div className="middle-square">
                    <a href="#" >
                        <img src="mountainStocks.jpg" className="feature-images__medium" />
                        <h2>HEADLINE HEADLINE HEADLINE HEADLINE</h2>
                        <p>Author Name / Date Published</p>
                    </a>
                </div>
                <div className="small-square">
                    <a href="#" >
                        <img src="mountainStocks.jpg" className="feature-images__small" />
                        <h2>HEADLINE HEADLINE</h2>
                        <p>Author Name / Date Published</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default features;