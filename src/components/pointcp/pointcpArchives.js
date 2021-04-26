import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import ArticleHeaders from '../articles/articleHeaders';
import { Link } from 'react-router-dom';
import moment from "moment";

function PointcpArchives(props) {
    useEffect(() => {
      document.title = 'Point-Counterpoint Archives | Wealth Solutions Report';
    });

    const pointcpArticles = useSelector(state => {
        return (state.pcps.pointCPPosts)
    })

    if (pointcpArticles !== undefined) {

        const mappedPointCP = pointcpArticles.map(article => {
            return (
                <div className="pointcpLinksList" key={article.id}>
                    <Link to={{    
                        pathname: `/Point-Counterpoint/${article.id}`,
                        state: {
                            pointcp_id: article.id
                        }
                    }} className="pointcpLinks"> 
                        <li>
                            
                            {/* <span>{article.attributes.titleOne} vs {article.attributes.titleTwo}</span> */}
                            <span>{article.attributes.topic}</span>
                            <span>&nbsp;</span>
                            <span>- {moment
                            .parseZone(article.attributes.created_at)
                            .format("MMMM DD, YYYY")}</span>
                            
                        </li>
                    </Link>
                </div>
            )
        })

        mappedPointCP.reverse()

        return (
            <>
                <ArticleHeaders category={"point-counterpoint"} />
                <div className="archiveContainer">
                    <h1>POINT-COUNTERPOINT ARCHIVES</h1>
                    <div className="pointcpArchives">
                        <ol>
                            {mappedPointCP}
                        </ol>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <ArticleHeaders category={"point-counterpoint"} />
                <div className="pointcpArchives">
                <h1>POINT-COUNTERPOINT LOADING...</h1>
                </div>
            </>
        );
    }
}

export default PointcpArchives;