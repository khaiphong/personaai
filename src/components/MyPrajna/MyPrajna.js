import React, { useState } from 'react';

import './MyPrajna.css';
/*
  import MyMindfulness from '../MyMindfulness/MyMindfulness';
  import MySamadhi from '../MySamadhi/MySamadhi">
*/

function MyPrajna () {
  const [prajna, setPrajna] = useState(0); // from MyPrajna
  const [mindfulness, setMindfulness] = useState(0); // MyMindfulness
  const [samadhi, setSamadhi] = useState(0); // from MySamadhi

  return (
    <header className="myPrajna">
      <nav className="myPrajna_navigation">
        <div className="myPrajna_navigation-items">
          <ul>
            <li><a href="/">Alert will not be more than 70 characters</a></li>
          </ul>
        </div>

        <div>
          <p>You clicked {prajna} times</p>
          <button onClick={() => setPrajna(prajna + 1)}>Click me
          </button>
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
      </nav>
    </header>
  );
}

export default MyPrajna;

