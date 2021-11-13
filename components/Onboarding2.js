import React from 'react';

function App() {
  return (
    <Onboarding2
      illustration2="onboarding-02-illustration2.png"
      title="Find a community"
      desc="Respond to posts by other users and join interests groups"
    />
  );
}

export default App;

function Onboarding2(props) {
  const { illustration2, title, desc } = props;

  return (
    <div className="container-center-horizontal">
      <div className="onboarding2screen">
        <Skip />
        <img className="illustration2" src={illustration2} />
        <div className="titlehelvetica-normal-steel-gray-22px">
          {title}
        </div>
        <p className="deschelvetica-normal-oslo-gray-16px">
          {desc}
        </p>
        <div className="pavigation">
          <div className="rectangle-3"></div>
          <div className="rectangle-2"></div>
          <div className="rectangle-4"></div>
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

.onboarding2 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 812px;
  padding: 60px 16px;
  position: relative;
  width: 375px;
}

.illustration2 {
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
  margin-right: 2.0px;
  margin-top: 52px;
  min-height: 48px;
  text-align: center;
  width: 223px;
}

.pavigation {
  display: flex;
  margin-left: 1.0px;
  margin-top: 54px;
  width: 66px;
}

.rectangle-3 {
  background-color: var(--blue-chalk);
  height: 5px;
  width: 9px;
}

.rectangle-2 {
  background-color: var(--eden);
  height: 5px;
  margin-left: 10px;
  width: 28px;
}

.rectangle-4 {
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