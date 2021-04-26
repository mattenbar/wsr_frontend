import React, {useEffect} from 'react'

function Statshots() {
  useEffect(() => {
    document.title = 'Statshots | Wealth Solutions Report';
  });

  return (
    <div className="board">
        <div className="board-header">
            <h1>STATSHOTS</h1>
        </div>
        <div className="statshots-container">
            <h2>Financial Advisors’ ESG Perspectives</h2>
            <h3>WSJ Survey of Financial Advisor Readers:  Consensus on climate change’s reality and its risks, but not much else</h3>

            <p>
              From megafires to polar vortexes to increasingly damaging hurricanes, climate change has unquestionably catapulted to top of mind status for many Americans.
            </p>
            <p>
              With the intensification of climate change-driven disasters has come a calibration of opinions across the industry on ESG-related issues.
            </p>
            <p>
              For this week’s Earth Day issue, WSJ conducted a survey of our financial advisor readers to provide an update of where the wealth management space stands today on ESG, and the results are…interesting:
              <ul>
                <li>The vast majority of financial advisors agree that climate change is real.</li>
                <li>A very clear majority agree that climate change represents a significant future economic risk to our country and investors.</li>
                <li>Similarly, the overwhelming majority of financial advisors believe traditional mutual fund and ETF product structures are capable of delivering everything their clients need by way of ESG investing.</li>
              </ul>
             </p>
            <p>
              However, there is no clear consensus on whether more ESG-focused investment solutions can help address climate change, or if mass affluent retail investors currently enjoy sufficient access to high quality ESG investments.
            </p>
            <p>
              Similarly, our survey respondents on whether the wealth management industry would be helped by more real asset investment opportunities in renewable energy in the form of retail alts that are accessible to everyday investors.
            </p>
            <p>
              Ultimately, these survey results potentially speak to a perceived lack of true impact that the present landscape of ESG investing solutions for the masses offer – And some confusion about how to better align ESG goals with investing that truly drives impact and value for investors.
            </p>
            <img src="/statshots/Stat Shot_ PieChart.jpg" alt="statshot" />
            <p>
              <strong>
                James Miller is Contributing Editor & Research Analyst at Wealth Solutions Report.  He can be reached via email at <a href="mailto:ContributingEd@wealthsolutionsreport.com">ContributingEd@wealthsolutionsreport.com</a>
              </strong>
            </p>
          </div>


    </div>
  )

}

export default Statshots