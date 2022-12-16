import React from 'react';
import AccordionButton from './accordion-button';

function AccordionHeader(props) {
  // console.log(props)

  return(
    <h2 className="accordion-header" id={props.itemIds.headerId}>
      <AccordionButton bodyId={props.itemIds.bodyId} collapsed={props.collapsed}>
        {props.children}
      </AccordionButton>
    </h2>

  )
}

export default AccordionHeader