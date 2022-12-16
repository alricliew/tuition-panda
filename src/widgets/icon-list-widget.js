import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

// col - Items created. Default: 0
// start - Array of Starting value. Default : [0,0,0,0]
// spacing - Array of duration of the counts . Default : [1,1,1,1] (seconds)
function IconList(props) {
  return (
      <ul className='m-0 p-0'>
        {createIconList(props)}
      </ul>

  );
}

function createIconList(props) {
  // console.log(props.cLink)
  var list = props.cText.map((item, index) => {

    if(props.cLink[index]){
      return(
        <li className={classnames('icon-list-item', props.cGapSpacing, props.cFontSize, props.cFontWeight)} key={index.toString()}>
          <a className='icon-list-item-link' href={props.cLink[index]}>
            <span className={classnames('icon-list-item-icon', props.cIconColor,props.cIconFontSize)}><FontAwesomeIcon icon={props.cIcon[index]}/></span>
            <span className={classnames('icon-list-item-text', props.cTextColor,props.cTextFontSize, props.cSpacing)}>{item}</span>
          </a>
        </li>
      )
    }
    else {
      return(
        <li className={classnames('icon-list-item', props.cGapSpacing, props.cFontSize, props.cFontWeight)} key={index.toString()}>
          <span className={classnames('icon-list-item-icon', props.cIconColor,props.cIconFontSize)}><FontAwesomeIcon icon={props.cIcon[index]}/></span>
          <span className={classnames('icon-list-item-text', props.cTextColor,props.cTextFontSize, props.cSpacing)}>{item}</span>
        </li>
      )
    }
  })

  return list

  // return(
  //   props.cText.map((item, index) => (
  //     <li className={classnames('icon-list-item', props.cGapSpacing, props.cFontSize, props.cFontWeight)}>
  //       <Link to={props.cLink}>
  //         <span className={classnames('icon-list-item-icon', props.cIconColor,props.cIconFontSize)}><FontAwesomeIcon icon={props.cIcon[index]}/></span>
  //         <span className={classnames('icon-list-item-text', props.cTextColor,props.cTextFontSize, props.cSpacing)}>{item}</span>
  //       </Link>
  //     </li>
  //   ))
  // )

}


export default IconList;
