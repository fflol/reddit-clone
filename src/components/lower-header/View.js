import React from 'react'

// import react-bootstrap component
import { Nav, Tooltip, OverlayTrigger } from 'react-bootstrap'

// import icons
import { MdReorder, MdViewAgenda } from "react-icons/md";
import { GoThreeBars } from "react-icons/go";

// import redux components
import { connect } from 'react-redux'

// import actions
import { chooseView } from '../../actions/actions'

// import css
import './View.css'


// conponent
const View = ({ view, chooseView }) => {

  const handleSelect = (eventKey) => {
    chooseView(eventKey)
  }

  const cardColorClass = view === 'card' ? 'text-primary' : 'light-blue'
  const classicColorClass = view === 'classic' ? 'text-primary' : 'light-blue'
  const compactColorClass = view === 'compact' ? 'text-primary' : 'light-blue'

  
  return (
    <div className='d-flex align-items-center view-container'>

      <span className='view-title'>VIEW</span>

      <Nav.Link eventKey='card' onSelect={handleSelect} className='p-0'>
        <OverlayTrigger placement='top' overlay={<Tooltip>Card</Tooltip>}>
          <MdViewAgenda className={`${cardColorClass} card-icon`} />
        </OverlayTrigger>
      </Nav.Link>

      <Nav.Link eventKey='classic' onSelect={handleSelect} className='p-0'>
        <OverlayTrigger placement='top' overlay={<Tooltip>Classic</Tooltip>}>
          <GoThreeBars className={`${classicColorClass} filter-icons`} />
        </OverlayTrigger>
      </Nav.Link>

      <Nav.Link eventKey='compact' onSelect={handleSelect} className='p-0'>
        <OverlayTrigger placement='top' overlay={<Tooltip>Compact</Tooltip>}>
          <MdReorder className={`${compactColorClass} filter-icons`} />
        </OverlayTrigger>
      </Nav.Link>

    </div>
  );
}



const mapStateToProps = (state) => {
  return {
    view: state.view
  }
}

export default connect(mapStateToProps, { chooseView })(View)