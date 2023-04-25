import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const txt = "안녕하세요! 저는 프론트엔드 개발자 박재현입니다.";
  const [Text, setText] = useState("");
  const [Count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(Text + txt[Count]);
      setCount(Count + 1);
    }, 100);
    if (Count === txt.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  return (
    <div className="px-20 space-y-72">
      <div className="NavBar flex justify-between my-8 font-['KCC-Ganpan'] text-white">
        <div>
          <h1 className="text-3xl">P J H ' s Portfolio </h1>
        </div>
        {/*<div className="flex space-x-5 text-xl">*/}
        {/*  <p className="underline underline-offset-8">About</p>*/}
        {/*  <Link to="/Skills">Skills</Link>*/}
        {/*  <p>Works</p>*/}
        {/*  <p>Contact</p>*/}
        {/*</div>*/}
      </div>

      <div className="text-white  space-y-8 font-['TheJamsil5Bold']">
        <div className="text-6xl space-y-4">
          <h1>W E L C O M E</h1>
          <h1>T O</h1>
          <h1> M Y P O R T F O L I O</h1>
        </div>
        <div className="text-xl">
          <p>{Text}</p>
        </div>
      </div>
    </div>
  );
}
export default Home;
