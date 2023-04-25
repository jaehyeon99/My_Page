import React from "react";

function Good() {
  return (
    <div className="px-20 ">
      <div className="NavBar flex justify-between my-8 ">
        <div className="space-y-3 font-['KCC-Ganpan'] ">
          <h1 className="text-5xl">My Skills & Tools</h1>
          <h2>저는 이런 것들에 자신이 있어요.</h2>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="pt-10">
          <h1 className="text-3xl py-6 font-bold">React Js</h1>
          <div className="space-y-2 text-lg">
            <p>React Js를 사용하여 컴포넌트를 구성할 수 있습니다.</p>
            <p>React Hook을 이용하여 변수를 다룰 수 있습니다. </p>
            <p>데이터를 호출하여 자유롭게 다룰 수 있습니다.</p>
            <p>Tailwind Css를 이용하여 다양한 UI/UX를 구성할 수 있습니다.</p>
          </div>
        </div>
        <div className="pt-10">
          <h1 className="text-3xl py-6 font-bold">Git</h1>
          <div className="space-y-2 text-lg">
            <p>Git을 사용하여 프로젝트 관리를 할 수 있습니다.</p>
            <p>Git 통한 다른 유저들과의 협업을 할 수 있습니다.</p>
            <p>Git을 이용하여 다양한 오픈소스를 이용할 수 있습니다.</p>
          </div>
        </div>
        <div className="pt-10">
          <h1 className="text-3xl py-6 font-bold">Next Js</h1>
          <div className="space-y-2 text-lg">
            <p>Next Js를 이용하여 Server-Side-Rendering 을 할 수 있습니다.</p>
            <p>데이터를 호출하여 자유롭게 다룰 수 있습니다.</p>
            <p>Tailwind Css를 이용하여 다양한 UI/UX를 구성할 수 있습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Good;
