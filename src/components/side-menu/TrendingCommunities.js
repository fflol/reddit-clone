import React, { useEffect } from 'react';

// import components
import SingleCommunity from './SingleCommunity'

// import redux components
import { connect } from 'react-redux'

// import actions
import { asyncFetchTrendingCommunities } from '../../actions/snoowrapActions'

// import css
import * as Styled from './trendingCommunitiesStyle'


// component
const TrendingCommunities = ({ trendingCommunities, asyncFetchTrendingCommunities }) => {

    useEffect(() => {
        asyncFetchTrendingCommunities()
    })

    return (
        <Styled.Card>
            <Styled.H6Title>Trending Communities</Styled.H6Title>
            <Styled.DivContainer>
                {trendingCommunities.map(community =>
                    <SingleCommunity
                        key={community.display_name_prefixed}
                        {...community}
                    />)}
            </Styled.DivContainer>
        </Styled.Card>
    );
}


const mapStateToProps = (state) => {
    return {
        trendingCommunities: state.trendingCommunities,
    }
}

export default connect(mapStateToProps, { asyncFetchTrendingCommunities })(TrendingCommunities)