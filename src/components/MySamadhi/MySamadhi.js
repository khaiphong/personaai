import React, { useState } from 'react';

import './MySamadhi.css';
/*
  import MyMindfulness from '../MyMindfulness/MyMindfulness';
  import MyPrajna from '../MyPrajna/MyPrajna">
*/

/*
(2) Signed Posts of Cultivable Inner Peace to activate and sharpen
available Instinct including Wu-Nien coming from different buckets:
PrajnaTIP_Sound, from different angles contributed by religions,
mystic traditions, siddhis, PrajnaTIP_Kindness
*/
function MySamadhi () {
  const [samadhi, setSamadhi] = useState(0); // from MySamadhi
  const [mindfulness, setMindfulness] = useState(0); // MyMindfulness
  const [prajna, setPrajna] = useState(0); // from MyPrajna
//  function displaySamadhi() { // inner function
//    console.log(`MySamadhi is ${samadhi}, MyMindfulness is ${mindfulness}, MyPrajna is ${prajna}`);
//  }

  return (
    <header className="mySamadhi">
      <nav className="mySamadhi_navigation">
        <div className="mySamadhi_navigation-items">
          <ul>
            <li><a href="/">Alert will not be more than 70 characters</a></li>
          </ul>
        </div>

        <div>
          <p>You clicked {samadhi} times</p>
          <button onClick={() => setSamadhi(samadhi + 1)}>Click me
          </button>
        </div>
        <div>
          <p>You clicked {mindfulness} times</p>
          <button onClick={() => setMindfulness(mindfulness + 1)}>Click me
          </button>
        </div>
        <div>
          <p>You clicked {prajna} times</p>
          <button onClick={() => setPrajna(prajna + 1)}>Click me
          </button>
        </div>
      </nav>
    </header>
  );
}

export default MySamadhi;
