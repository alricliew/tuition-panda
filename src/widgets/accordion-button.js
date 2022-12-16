import React from 'react';
import classnames from 'classnames';

function AccordionButton(props) {
  let collapsed = props.collapsed ? 'collapsed' : ''
  return(
    <button
      className={classnames('accordion-button', collapsed)}
      type="button"
      data-bs-toggle="collapse"
      data-bs-target={`#${props.bodyId}`}
      aria-expanded={props.collapsed}
      aria-controls={props.bodyId}>
      {props.children}
    </button>
  )
}

export default AccordionButton