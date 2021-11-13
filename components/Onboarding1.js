import React from 'react';

function App() {
  return (
    <Start
      illustration1="start-illustration1.png"
      text="Share your journey"
      textDetailYourS="Detail your struggles and successes anonymously"
    />
  );
}

export default App;

function Start(props) {
  const { illustration1, text, textDetailYourS } = props;

  return (
    <div className="container-center-horizontal">
      <div className="onboarding1screen">
        <Skip />
        <img className="illustration1" src={illustration1} />
        <div className="titlehelvetica-normal-steel-gray-22px">
          {text}
        </div>
        <p className="deschelvetica-normal-oslo-gray-16px">
          {textDetailYourS}
        </p>
        <div className="pavigation">
          <div className="rectangle-2"></div>
          <div className="rectangle"></div>
          <div className="rectangle"></div>
        </div>
      </div>
    </div>
  );
}


function Skip() {
  return (
    <div className="next">
      <div className="next-1helvetica-normal-oslo-gray-14px">
        Next
      </div>
    </div>
  );
}

.onboarding1 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 812px;
  padding: 60px 16px;
  position: relative;
  width: 375px;
}

.illustration1 {
  height: 260px;
  margin-left: 1.0px;
  margin-top: 12px;
  width: 260px;
}

.title {
  letter-spacing: 0;
  line-height: 32px;
  margin-right: 1.0px;
  margin-top: 34px;
  min-height: 32px;
  text-align: center;
  white-space: nowrap;
  width: 216px;
}

.desc {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 52px;
  min-height: 48px;
  text-align: center;
  width: 215px;
}

.pavigation {
  display: flex;
  margin-left: 1.0px;
  margin-top: 54px;
  width: 66px;
}

.rectangle-2 {
  background-color: var(--eden);
  height: 5px;
  width: 28px;
}

.rectangle {
  background-color: var(--blue-chalk);
  height: 5px;
  margin-left: 10px;
  width: 9px;
}

.next {
  align-self: flex-end;
  display: flex;
  height: 40px;
  width: 45px;
}

.next-1 {
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  margin-left: 7px;
  margin-top: 8px;
  text-align: center;
  white-space: nowrap;
  width: 31px;
}

.screen a {
  display: contents;
  text-decoration: none;
}

.container-center-horizontal {
  display: flex;
  flex-direction: row;
  justify-content: center;
  pointer-events: none;
  width: 100%;
}

.container-center-horizontal > * {
  flex-shrink: 0;
  pointer-events: auto;
}
