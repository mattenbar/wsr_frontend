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
            <h2>Healthcare Costs for Independent Financial Advisors – 5 Most Expensive and Least Expensive States</h2>
            <h3>While growth opportunities are significant for independent financial advisors, one of the single largest overhead items for any independent advisor continues to be healthcare for the professional, his or her family members and full-time staff, if any.
              <br/><br/>Thinking of going independent? Bear in mind that the state you live in will determine how costly securing your own healthcare insurance could be.</h3>

            <p>
              TOP 5 MOST EXPENSIVE STATES FOR ADVISORS:
              <ol>
                <li>New York *Northern California</li>
                <li>New Jersey</li>
                <li>Massachusetts</li>
                <li>Texas</li>
                <li>Florida</li>
              </ol>
            </p>

            <p>
              TOP 5 LEAST EXPENSIVE STATES FOR ADVISORS:
              <ol>
                <li>Hawaii</li>
                <li>Alabama</li>
                <li>Michigan</li>
                <li>Idaho</li>
                <li>West Virginia</li>
              </ol>
            </p>

            <p>Source: FSI CoveredAdviser</p>
            <p>*We get it. “Northern California” isn’t a state.</p>
            <p>But due to low costs in Southern California, overall California numbers are not a helpful gauge against reality.</p>
            <p>Northern California, along with New York, are the two most expensive areas of the country for independent financial advisors who need to purchase their own healthcare insurance.</p>

            <img src="/statshots/Stat Shot_ Advise Expense.jpg" alt="statshot" />
        </div>


    </div>
  )

}

export default Statshots