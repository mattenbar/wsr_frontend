import React, {useEffect} from 'react';

function Partners(props) {
    useEffect(() => {
      document.title = 'Partners | Wealth Solutions Report';
    });

    return (
        <div className="board">
            <div className="board-header">
                <h1>PARTNERS</h1>
            </div>
            <div className="partners-container">
                <img src="/PartnersImages/AdvisorGroup.jpg" alt="partner"  />
                
                <img src="/PartnersImages/AngelesWealth.jpg" alt="partner"  />
                
                <img src="/PartnersImages/Berkshire.png" alt="partner"  />
                
                <img src="/PartnersImages/Bridgemark.jpg" alt="partner"  />
                
                <img src="/PartnersImages/Cais.jpg" alt="partner"  />
                
                <img src="/PartnersImages/Cetera.jpg" alt="partner"  />
                
                <img src="/PartnersImages/ClarkCapital.jpg" alt="partner"  />
                
                <img src="/PartnersImages/Entreda.jpg" alt="partner"  />
                
                <img src="/PartnersImages/FSI-New.png" alt="partner"  />
                
                <img src="/PartnersImages/MeritLIfeLogo-New.jpg" alt="partner"  />
                
                <img src="/PartnersImages/Oysterllc.jpg" alt="partner"  />
                
                <img src="/PartnersImages/UCLA.jpg" alt="partner"  />
                
            </div>
        </div>
    );
}

export default Partners;