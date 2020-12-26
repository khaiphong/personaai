import React, { useState } from 'react';

import './MyMindfulness.css';
/*
  import MyMindfulness from '../MyMindfulness/MyMindfulness';
  import MyPrajna from '../MyPrajna/MyPrajna">
    <div>
      <p>You clicked {mindfulness} times</p>
      <button onClick={() => setMindfulness(mindfulness + 1)}>
        Click me
      </button>
    </div>
*/


/*
(1) Mindfulness into different buckets:
    Conscience, Justice, MoralValue
    TrueIntention, ThingAsItIs, StrategicPosition
It depends of ActitityToOneness and OnenessToActivity
to know more about oneself via current available
smart phone e.g. plan, execution, alert, gym and personal target
*/
function MyMindfulness () {
  const [mindfulness, setMindfulness] = useState(0); // MyMindfulness
  const [samadhi, setSamadhi] = useState(0); // from MySamadhi
  const [prajna, setPrajna] = useState(0); // from MyPrajna
//  function displayMindfulness() { // inner function
//    console.log(`MyMindfulness is ${mindfulness}, MySamadhi is ${samadhi}, MyPrajna is ${prajna}`);
//  }

  return (
    <header className="myMindfulness">
      <nav className="myMindfulness_navigation">
        <div className="myMindfulness_navigation-items">
          <ul>
            <li><a href="/">Alert will not be more than 70 characters</a></li>
          </ul>
        </div>

        <div>
          <p>You clicked {mindfulness} times</p>
          <button onClick={() => setMindfulness(mindfulness + 1)}>Click me
          </button>
        </div>
        <div>
          <p>You clicked {samadhi} times</p>
          <button onClick={() => setSamadhi(samadhi + 1)}>Click me
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

export default MyMindfulness;
