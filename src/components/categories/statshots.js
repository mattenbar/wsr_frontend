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
            <h2>MOST FREQUENT FINRA ARBITRATION CLAIMS</h2>
            <h3>Pandemic Or Not, FINRA Arbitration Claims Proceed – Here’s What To Look Out For</h3>

            <p>
              As William Shakespeare wrote in Hamlet, “When sorrows come, they come not single spies but in battalions.”
            </p>
            <p>
              Or as one of my favorite uncles used to say, “You’ve got dumpster fires and camp fires – From the outside looking in, they’re obviously different.  But if you’re actually in the flames, you’re gonna get burned either way.”
            </p>
            <p>
              For wealth management firms and their financial advisors, FINRA arbitration claims have proven to be one of the few consistent features of an otherwise fast-changing industry, especially during the pandemic.
            </p>
            <p>
              As we move into the second half of 2021, it’s worth reviewing the most frequent types of claims to ensure you and your business are as well-prepared as possible for any kinds of compliance supervision fires that might be kindling – Whether they are camp fires or dumpster fires.
            </p>
            <p>
              Sander Ressler is Managing Director of <a href="https://eeoutsourcing.com/" target="_blank">Essential Edge Compliance Outsourcing Services, LLC</a>
            </p>
            <img src="/statshots/Stat Shot_ FinraLogo.jpg" alt="statshot" />
        </div>


    </div>
  )

}

export default Statshots