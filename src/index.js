import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// import App from "./App";

function App() {
  return (
    <div className="card  ">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="DP1.png" alt="computer engineer" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Er. Dipesh Paudel</h1>
      <p>
        I am Dipesh Paudel a programmer and a software engineer who loves
        designing and developing websites and web applications using React!
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="HTML/CSS" emoji="😉" color="#123843" />
      <Skill name="JavaScript" emoji="😜" color="#aaa" />
      <Skill name="Tailwind" emoji="😎" color="darkblue" />
      <Skill name="Git and Github" emoji="🔥" color="yellow" />
      <Skill name="React" emoji="😁" color="orangered" />
      <Skill name="Web design" emoji="💖" color="red" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.name} {props.emoji}{" "}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
