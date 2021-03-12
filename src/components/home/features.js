import React from 'react';

function features(props) {
    return (
        <div className="features">
            <h1>TODAY'S TOP FEATURES</h1>
            <div className="feature-wrapper" >
                <div className="small-square">
                    <img src="mountainStocks.jpg" className="feature-images__small" />
                    <h2>HEADLINE HEADLINE</h2>
                    <p>Author Name / Date Published</p>
                </div>
                <div className="middle-square">
                    <img src="mountainStocks.jpg" className="feature-images__medium" />
                    <h2>HEADLINE HEADLINE HEADLINE HEADLINE</h2>
                    <p>Author Name / Date Published</p>
                </div>
                <div className="small-square">
                    <img src="mountainStocks.jpg" className="feature-images__small" />
                    <h2>HEADLINE HEADLINE</h2>
                    <p>Author Name / Date Published</p>
                </div>
            </div>
        </div>
    );
}

export default features;