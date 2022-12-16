import React from 'react';
import classnames from 'classnames';

function AccordionBody(props) {
  let collapsed = props.collapsed ? '' : 'show'

  return(
    <div
      id={props.itemIds.bodyId}
      class={classnames('accordion-collapse collapse', collapsed)}
      aria-labelledby={props.itemIds.headerId}>

      <div class="accordion-body text-md-start">
        {props.children}
      </div>
    </div>

  )
}

export default AccordionBody