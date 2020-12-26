import React from 'react';

import './MyCompassion.css';
/*
  Compassion buckets: Kindness, Empathy
  It depends on from ActitityToOneness and OnenessToActivity
*/
function init() {
  var samadhi = 'myPrajna'; // level of myPrajna
  var prajna = 'myPrajna'; // level of myPrajna
  var mindfulness = 'myMindfulness'; // level of myMindfulness
  function displayStatus() { // inner function
    console.log(samadhi + ' ' + mindfulness + ' ' + prajna); // variable declared in the parent function
  }
  displayStatus();
}
init();
/*
  Compassion is derived from rated mindfulness, samadhi, prajna
  from ActitityToOneness and OnenessToActivity
  It is activated with PrajnaTIPs
*/
function MyCompassion() {
  return (
    <header className="myCompassion">
      <nav className="myCompassion_navigation">
        <div className="myCompassion_navigation-items">
          <ul>
            <li><a href="/">Alert more than 70 characters</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Compassion;