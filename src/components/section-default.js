import React from 'react';
import '../custom-theme.scss'
import classnames from 'classnames';

// Section
// props.cPadding - Section padding. Default: 'py-5'
// props.cBackground - Section bg. Default: ''
// props.cCustom - Section Custom style. Default: ''
function SectionDefault(props) {
  // Join all classes
  // var a = [(props.cCustom || ''), (props.cPadding || 'py-6') , (props.cBackground || '')].filter(String).join(' ')
  var a = (props.cPadding || 'py-6')

  return (
    <section className={classnames(props.cCustom, a, props.cBackground)}>
      <div className='container'>
        {props.children}
      </div>
    </section>

  );
}

export default SectionDefault;
