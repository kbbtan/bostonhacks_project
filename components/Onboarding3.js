import React from 'react';

function App() {
  return (
    <Onboarding3
      illustration3="onboarding-03-illustration3.png"
      connectWithHealthc="Connect with healthcare professionals"
      startAPrivateConv="Start a private conversation anonymously with our dedicated healthcare team"
      buttontext="Sign up"
      buttontext2="Log in"
      termsOfService="Terms of Service"
    />
  );
}

export default App;

function Onboarding3(props) {
  const { illustration3, connectWithHealthc, startAPrivateConv, buttontext, buttontext2, termsOfService } = props;

  return (
    <div className="container-center-horizontal">
      <div className="onboarding3screen">
        <div className="flex-col">
          <img className="illustration3" src={illustration3} />
          <div
            className="connect-with-healthchelvetica-normal-steel-gray-22px"
          >
            {connectWithHealthc}
          </div>
          <p
            className="start-a-private-convhelvetica-normal-oslo-gray-16px"
          >
            {startAPrivateConv}
          </p>
          <div className="pavigation">
            <div className="rectangle-3"></div>
            <div className="rectangle-4"></div>
            <div className="rectangle-2"></div>
          </div>
        </div>
        <div className="flex-row">
          <div className="signup-button">
            <div
              className="button-texttimes-roman-normal-white-16px"
            >
              {buttontext}
            </div>
          </div>
          <div className="overlap-groupborder-0-5px-eden">
            <div
              className="button-text-1helvetica-normal-eden-16px"
            >
              {buttontext2}
            </div>
          </div>
        </div>
        <div
          className="terms-of-serviceavenir-normal-steel-teal-15px"
        >
          {termsOfService}
        </div>
      </div>
    </div>
  );
}

.onboarding3 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 812px;
  padding: 116px 0;
  width: 375px;
}

.flex-col {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin-left: 1.0px;
  min-height: 481px;
  width: 260px;
}

.illustration3 {
  height: 260px;
  width: 260px;
}

.connect-with-healthc {
  letter-spacing: 0;
  line-height: 32px;
  margin-right: 1px;
  margin-top: 30px;
  min-height: 64px;
  text-align: center;
  width: 237px;
}

.start-a-private-conv {
  letter-spacing: 0;
  line-height: 24px;
  margin-right: 1px;
  margin-top: 20px;
  min-height: 72px;
  text-align: center;
  width: 237px;
}

.pavigation {
  align-self: center;
  display: flex;
  margin-top: 30px;
  width: 66px;
}

.rectangle-3 {
  background-color: var(--blue-chalk);
  height: 5px;
  width: 9px;
}

.rectangle-4 {
  background-color: var(--blue-chalk);
  height: 5px;
  margin-left: 10px;
  width: 9px;
}

.rectangle-2 {
  background-color: var(--eden);
  height: 5px;
  margin-left: 10px;
  width: 28px;
}

.flex-row {
  align-items: flex-start;
  display: flex;
  margin-top: 82px;
  min-width: 335px;
}

.signup-button {
  align-items: flex-start;
  background-color: var(--eden);
  display: flex;
  height: 50px;
  min-width: 160px;
  padding: 13px 51px;
}

.button-text {
  letter-spacing: 0;
  line-height: 19px;
  min-height: 18px;
  min-width: 57px;
  text-align: center;
  white-space: nowrap;
}

.overlap-group {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 51px;
  margin-left: 14px;
  margin-top: -0.5px;
  min-width: 161px;
  padding: 13.0px 57.0px;
}

.button-text-1 {
  letter-spacing: 0;
  line-height: 19px;
  min-height: 19px;
  min-width: 46px;
  text-align: center;
  white-space: nowrap;
}

.terms-of-service {
  font-weight: 500;
  letter-spacing: 0;
  line-height: 20px;
  margin-left: 1.0px;
  margin-top: 30px;
  min-height: 20px;
  min-width: 116px;
  text-align: center;
  white-space: nowrap;
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
