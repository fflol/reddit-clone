import React from 'react'

// import react-bootstrap component
import { Tooltip, OverlayTrigger } from 'react-bootstrap'

// import redux components
import { connect } from 'react-redux'

// import actions
import { chooseView } from '../../../actions/actions'

import * as Styled from './viewStyle'
// import css
// import './View.css'


// conponent
const View = ({ view, chooseView }) => {

  const handleSelect = (eventKey) => {
    chooseView(eventKey)
  }
  
  return (
    <Styled.Container>

      <Styled.TitleSpan>VIEW</Styled.TitleSpan>

      <Styled.NavLink eventKey='card' onSelect={handleSelect}>
        <OverlayTrigger placement='top' overlay={<Tooltip>Card</Tooltip>}>
          {view === 'card' ? <Styled.IconCardActivated /> : <Styled.IconCardInactivated />}
        </OverlayTrigger>
      </Styled.NavLink>

      <Styled.NavLink eventKey='classic' onSelect={handleSelect}>
        <OverlayTrigger placement='top' overlay={<Tooltip>Classic</Tooltip>}>
          {view === 'classic' ? <Styled.IconClassicActivated /> : <Styled.IconClassicInactivated />}
        </OverlayTrigger>
      </Styled.NavLink>

      <Styled.NavLink eventKey='compact' onSelect={handleSelect}>
        <OverlayTrigger placement='top' overlay={<Tooltip>Compact</Tooltip>}>
          {view === 'compact' ? <Styled.IconCompactActivated /> : <Styled.IconCompactInactivated />}
        </OverlayTrigger>
      </Styled.NavLink>

    </Styled.Container>
  );
}



const mapStateToProps = (state) => {
  return {
    view: state.view
  }
}

export default connect(mapStateToProps, { chooseView })(View)