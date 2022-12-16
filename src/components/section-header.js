import React from 'react';
import '../custom-theme.scss'

function SectionHeader(props) {
  return (
    <section className='container section-header-p bg-overlay-white-green'>
      {props.children}
    </section>

  );
}

export default SectionHeader;
