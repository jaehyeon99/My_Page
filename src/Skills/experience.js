import React from "react";

function Experience() {
  return (
    <div className="px-20">
      <div className="NavBar flex justify-between my-8 font-['KCC-Ganpan']  ">
        <div className="space-y-3">
          <h1 className="text-5xl">My Skills & Tools</h1>
          <h2>저는 이런 것들을 프로젝트에 적용시켜 본 경험이 있습니다.</h2>
        </div>
      </div>
      <div>
        <div className="">
          <div className="pt-10">
            <h1 className="text-3xl py-6 font-bold">Typescript</h1>
            <div className="space-y-2 text-lg">
              <p>
                TypeScript를 프로젝트에 적용하여 각 변수들의 Type을 선언한
                경험이 있습니다.
              </p>
            </div>
          </div>
          <div className="pt-10">
            <h1 className="text-3xl py-6 font-bold">Recoil</h1>
            <div className="space-y-2 text-lg">
              <p>
                Recoil을 사용하여 전역 상태 관리를 프로젝트에 적용시켜 본 경험이
                있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
