// https://youtu.be/lauywdXKEXI

import React, { useEffect } from 'react';
import SectionDefault from '../components/section-default';

import '../custom-theme.scss'

const API_URL = 'http://localhost:3001/api';

async function fetchData() {
  const res = await fetch(API_URL);
  const json = await res.json();
  console.log(json)
}

function API() {

  const [data, setData] = React.useState([])

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='section-wrap'>

      <SectionDefault cPadding={'section-header-p'} cBackground={'bg-overlay-white-green'}>
        <div>
          <h6>Test test test</h6>
          <h1 className='h1-de'>API</h1>
        </div>
      </SectionDefault>

    </div>
  );
}

export default API;
