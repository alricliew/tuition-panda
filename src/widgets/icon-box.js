import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

// faIcon - Font Awesome Icon
// title - Title text
// description - Description text
// cIconColor - icon color. Example: 'text-white'
// cIconBackground - icon background color. Example: 'bg-primary',
// cIconBorderRadius - icon border-radius. Example: 'rounded-0' / rounded-circle
// cIconSize - icon font-size. Example: fs-3
// cIconPadding - icon padding. Example: p-1, p-2,...
// cIconContentSpacing - Spacing between Icon and Content.  Example: 'pe-3 pb-3' (use left and bottom padding to cater for dekstop and mobile view)
// cTitle - Title specific style
// cDescription - Description specific style
// cTitleDescriptionSpacing - Spacing between Title and Description in content. Example: mt-1
// cTop - Top wrapper style
function IconBox(props) {
  return (
      <div className={classnames('icon-box-top', props.cTop)}>
        <div className='icon-box-icon'>
          <span className={classnames('d-inline-block lh-1', props.cIconBackground, props.cIconColor, props.cIconBorderRadius, props.cIconSize, props.cIconPadding)}>
            {/* Layering: https://fontawesome.com/docs/web/use-with/react/style */}
            <span className="fa-layers fa-lg">
              <div style={{color:'transparent'}}>
                <FontAwesomeIcon icon='fa-solid fa-circle' size='lg' />
              </div>
              <div className=''>
                <FontAwesomeIcon icon={props.faIcon} transform="shrink-3" />
              </div>
            </span>
            {/* <FontAwesomeIcon icon={props.faIcon} /> */}
          </span>
        </div>
        <div className={classnames(props.cIconContentSpacing)}></div>
        <div className='icon-box-content'>
          <h3 className={classnames(props.cTitle)}>
            {props.title}
          </h3>
          <div className={classnames(props.cTitleDescriptionSpacing)}></div>
          <p className={classnames(props.cDescription)}>
            {props.description}
          </p>
        </div>
      </div>
  );
}


export default IconBox;
