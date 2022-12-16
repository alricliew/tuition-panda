import React, { useState, useEffect, useRef } from 'react';
import { db } from "../js/firebase"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import SectionDefault from '../components/section-default';
import * as myConst from "../js/const";


// Get a list of cities from your database
async function getCities() {
  const citiesCol = collection(db, myConst.TEST_TEST);
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());

  return cityList;
}


function TestDb() {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  // const ref = app.firestore().collection('test')
  // console.log( ref )

 async function getItems() {
    setLoading(true);

    let list = await getCities(db)
    // console.log(list)
    setItems(list)
    setLoading(false)

  }

  useEffect(() => {
    getItems();
  }, []);

  if (loading){
    return <h2>Loading ...</h2>
  }
  else
    return (
      <div className='section-wrap'>

        <SectionDefault cPadding={'section-header-p'} cBackground={'bg-overlay-white-green'}>
          <div>
            <h6>Test Database</h6>
            <h1 className='h1-de'>Test Database</h1>
          </div>
        </SectionDefault>

        <SectionDefault >
          <div>

          </div>
        </SectionDefault>

        <SectionDefault>
          {
            items.map((item) => (
              <div key={item.name}>
                <h2>{item.name}</h2>
                <p>{item.desc}</p>
              </div>
            ))
          }

        </SectionDefault>
      </div>
    );
}

export default TestDb;
