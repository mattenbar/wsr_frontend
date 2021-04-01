import React from 'react';
import {useSelector} from 'react-redux';
import ArticleHeaders from '../articles/articleHeaders';

function PointcpArchives(props) {

    const pointcpArticles = useSelector(state => {
        return (state.pcps.pointCPPosts)
    })

    if (pointcpArticles !== undefined) {

        const mappedPointCP = pointcpArticles.map(article => {
            return (
                <div>
                    <li>{article.attributes.titleOne} vs {article.attributes.titleTwo}</li>
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