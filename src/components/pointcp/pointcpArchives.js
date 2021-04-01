import React from 'react';
import {useSelector} from 'react-redux';
import ArticleHeaders from '../articles/articleHeaders';
import { Link } from 'react-router-dom';

function PointcpArchives(props) {

    const pointcpArticles = useSelector(state => {
        return (state.pcps.pointCPPosts)
    })

    if (pointcpArticles !== undefined) {

        const mappedPointCP = pointcpArticles.map(article => {
            return (
                <div>
                    <Link to={{    
                        pathname: `/Point-Counterpoint/${article.id}`,
                        state: {
                            pointcp_id: article.id
                        }
                    }} className="pointcpLinks"> 
                        <li>{article.attributes.titleOne} vs {article.attributes.titleTwo}</li>
                    </Link>
                </div>
            )
        })

        return (
            <>
                <ArticleHeaders category={"point-counterpoint"} />
                <h1>POINT-COUNTERPOINT ARCHIVES</h1>
                <div className="pointcpArchives">
                    <ul>
                        {mappedPointCP}
                    </ul>
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