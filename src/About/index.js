import React from "react";

function About() {
  return (
    <div className="px-20 ">
      <div className="pt-40 space-y-10 ">
        <div className="text-white font-['TheJamsil5Bold']">
          <h1 className="text-5xl leading-relaxed">
            새로운 것에 <span className="text-[#ffe176]"> "도전" </span>
            하고 <br /> 배우기 위해
            <span className="text-[#ffe176]"> "노력" </span> 하는
            <br />
            개발자 박재현 입니다.
          </h1>
        </div>
        <div className="text-white text-lg space-y-10">
          <div>
            <p>" 후회 없는 삶을 살지 말자 " </p>
            <p>라는 말을 인생의 가치관으로 생각하고</p>
            <p>
              후회하지 않기 위해서 새롭게 해보고 싶은 것 새로운 것에 도전하려고
              합니다.
            </p>
            <p>그 과정 속에서 실패도 존재하지만, 실패에 좌절하지 않고</p>
            <p>실패를 통해서 더 성장하기 위해서 노력합니다.</p>
          </div>
          <div>
            <p>
              그 결과 군 전역 후 스타트업에서 프론트엔드 개발자로 근무를 했고 그
              경험을 바탕으로{" "}
            </p>
            <p>
              2022 예비창업패키지에 선정되어 많은 것을 배우고 느낄 수
              있었습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
