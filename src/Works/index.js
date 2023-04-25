import React from "react";
import Brand from "./brand";

function Works() {
  return (
    <div className="px-20">
      <div className="NavBar flex justify-between my-8 font-['KCC-Ganpan']">
        <div className="space-y-3">
          <h1 className="text-5xl">Projects & careers</h1>
          <h2>프로젝트 경험 </h2>
        </div>
      </div>
      <div className="space-y-10 font-['Pretendard-Regular']">
        <div className="grid grid-cols-2 space-x-5">
          <div className="flex justify-center">
            <div className=" border-[1px] rounded-lg shadow-xl w-full">
              <div className="px-4 py-4">
                <h1 className="text-lg font-bold text-center font-['KCC-Ganpan']">
                  e-commerce 플랫폼 BrandU 제작 및 관리
                </h1>
              </div>
              <div className="text-center">
                <img src="/img/BrandU.png" />
              </div>
              <div className="py-6 gap-5 grid grid-cols-2 px-5">
                <p className="text-base"> ✔ 주요 기능</p>
                <p>
                  상품 결제 기능, 상품 찜하기 및 장바구니 담기 기능, 커뮤니티 글
                  올리기 좋아요 기능 ,3D 렌더링 기능
                </p>
                <p className="text-base"> ✔ GitHub</p>
                <p>https://github.com/BrandU1/WebClient</p>
                <p className="text-base"> ✔ URL</p>
                <p>https://brandu.shop/</p>
                <p className="text-base"> ✔ Frontend</p>
                <p>Next js , Recoil, Tailwind Css</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className=" border-[1px] rounded-lg shadow-xl w-full">
              <div className="px-4 py-4">
                <h1 className="text-lg font-bold text-center font-['KCC-Ganpan']">
                  한양대학교 ERICA 산업디자인학과 졸업전시페이지 제작 외주
                </h1>
              </div>
              <div>
                <div>
                  <img src="/img/Graduate.png" />
                </div>
                <div className="py-6 gap-5 grid grid-cols-2 px-5">
                  <p className="text-base"> ✔ 주요 기능</p>
                  <p>좋아요 기능, 오늘의 방문자 수 확인, 반응형 웹으로 제작</p>
                  <p className="text-base"> ✔ GitHub</p>
                  <p>https://github.com/jaehyeon99/hyid2022</p>
                  <p className="text-base"> ✔ URL</p>
                  <p>https://hyidegreeshow.com/</p>
                  <p className="text-base"> ✔ Frontend</p>
                  <p>Next js, Tailwind Css</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
