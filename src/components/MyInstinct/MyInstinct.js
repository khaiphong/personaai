import React, { useState } from 'react';

import './MyInstinct.css';
/*
  import MyMindfulness from '../MyMindfulness/MyMindfulness';
  import MySamadhi from '../MySamadhi/MySamadhi'
  import MyPrajna from '../MyPrajna/MyPrajna'
*/

/*
(2) PurityMindfulness to activate and sharpen available Instinct including Wu-Nien coming from different buckets:
PrajnaTIP_Sound, from different angles contributed by religions,
mystic traditions, siddhis, PrajnaTIP_Kindness
*/
function MyInstinct () {
  const [mindfulness, setMindfulness] = useState(0); // MyMindfulness
  const [samadhi, setSamadhi] = useState(0); // from MySamadhi
  const [prajna, setPrajna] = useState(0); // from MyPrajna
  function displayMindfulness() { // inner function
    console.log(`MyMindfulness is ${mindfulness}, MySamadhi is ${samadhi}, MyPrajna is ${prajna}`);
  }

  return (
    <header className="myInstinct">
      <nav className="myInstinct_navigation">
        <div className="myInstinct_navigation-items">
          <ul>
            <li><a href="/">Alert will not be more than 70 characters</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default MyInstinct;
