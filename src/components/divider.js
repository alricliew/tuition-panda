import React from 'react';
import '../custom-theme.scss'

// Divider
// props.cTop - Top div's style. Default: 'd-flex justify-content-md-start justify-content-center py-4'
// props.cDividerMargin - Top div's style. Default: py-2
// props.cDividerWidth - Inner Span's style. Default: 50px
// props.cDividerHeight - Inner Span's style. Default: 3px
function Divider(props) {
  return (
    <div className={`divider-top
                    ${props.cTop || 'd-flex justify-content-md-start justify-content-center'}
                    ${props.cDividerMargin || 'py-2'}`}>
      <span className={`divider-separator
                      ${props.cDividerWidth || 'wp-50'}
                      ${props.cDividerHeight || 'hp-3'}`}></span>
    </div>

  );
}

export default Divider;
