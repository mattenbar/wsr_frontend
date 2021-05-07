import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux";
import {API_URL} from "../../apiConstants";
import StatshotEditForm from "../articles/statshotEditForm";
import { withRouter } from "react-router";

function Statshots(props) {
  useEffect(() => {
    document.title = 'Statshots | Wealth Solutions Report';
  });

  const user = useSelector(state => {
    return (state.user.user)
  })

  let admin

  if (user !== undefined) {
    admin = user.admin
  }

  const [statshot, setStatshot] = useState([]);
  const [inEditMode, setInEditMode] = useState(false)

  useEffect(() => {
    fetch(API_URL + `/statshots_latest`)
      .then((res) => res.json())
      .then((data) => {
        setStatshot(data.statshot.data);
      });
    // eslint-disable-next-line
  }, []);

  const handleOnClick = () => {
    setInEditMode(true)
  }

  const handleOnBack = () => {
    setInEditMode(false)
  }



  if (!statshot || statshot.attributes === undefined) {
    return (
      (
        <div>
          <h1>LOADING...</h1>
        </div>
      )
    );
  } else {
    return (
      <>
        <meta name="image" property="og:image" content={statshot.attributes.image}></meta>
        <div className="board">
          <div className="board-header">
            <h1>STATSHOTS</h1>
          </div>
        </div>
        { inEditMode === false &&
          <div className="statshots-container">
            <p dangerouslySetInnerHTML={{ __html: statshot.attributes.content }}></p>
            <img src={statshot.attributes.image}/>
            { admin === true &&
            <div>
              <button onClick={handleOnClick} className="adminButtons">EDIT STATSHOT</button>
            </div>
            }
          </div>
        }
        { inEditMode === true && admin === true &&
          <div>
            <StatshotEditForm setInEditMode={setInEditMode} statshot={statshot} />
            <button onClick={handleOnBack} className="adminButtons">BACK TO STATSHOT</button>
          </div>
        }
      </>
    );
  }
}

export default withRouter(Statshots);
