import React from 'react';

function createAccordionHeaderBody(props) {
  // console.log(props.collapsed)
  let elements = React.Children.toArray(props.children)
  let newElements = null;
  if (elements.length === 1) {
    newElements = React.cloneElement(elements[0])
  }
  else if (elements.length > 0) {
    // Generate a pair of 8 random alphanumeric Id for each Accordion Item
    let itemIds = {
      headerId : makeid(8), // Generate 8 random alphanumeric char
      bodyId : makeid(8), // Generate 8 random alphanumeric char,
    }
    // Element[0] - Header
    // Element[1] - Body
    newElements = React.Children.map(props.children, child => {
      return React.cloneElement(child, {itemIds, collapsed : props.collapsed || props.collapsed === undefined ? true : false})
    })
  }
  return (
    newElements
  )

}

function AccordionItem(props) {
  return(
    <div className="accordion-item">
      {createAccordionHeaderBody(props)}
    </div>
  )
}

// Generate Alphabetic Only String
function makeid(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

export default AccordionItem