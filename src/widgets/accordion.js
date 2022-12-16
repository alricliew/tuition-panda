import React from 'react';
import AccordionItem from './accordion-item';
import AccordionHeader from './accordion-header';
import AccordionBody from './accordion-body';
import AccordionButton from './accordion-button';


// Passing data props to children using cloneElement
// Ref: https://frontarm.com/james-k-nelson/passing-data-props-children/
function createAccordionItem(props) {
  // console.log(props.children )
  let elements = React.Children.toArray(props.children)

  let newElements = null;
  if (elements.length === 1) {
    newElements = React.cloneElement(elements[0])
  }
  else if (elements.length > 0) {
    // Element[0] - Header
    // Element[1] - Body
    newElements = React.Children.map(props.children, child => {
      return React.cloneElement(child)
    })
  }


  return (
    newElements
  )

}

function Accordion(props) {
  return(
    <div class="accordion">
      {createAccordionItem(props)}
    </div>
  )
}

export default Object.assign(Accordion, {
  Button: AccordionButton,
  Item: AccordionItem,
  Header: AccordionHeader,
  Body: AccordionBody,
});