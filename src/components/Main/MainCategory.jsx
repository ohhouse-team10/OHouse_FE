import React from "react";
import "../../style/mainCategoryStyle.css";

export default function MainCategory() {
  return (
    <>
      <hr />
      <section className="container home-section home-stories">
        <header className="row home-section__header">
          <p className="col home-section__header__content">오늘의 스토리</p>
        </header>
        <div className="todayStoryBox">
          <div className="imgBox">
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/deals/160135284046634461.jpg?gif=1&w=360&h=360&c=c&q=0.8&webp=1"
              alt=""
            />
            <p>누구나 예쁜 집 살 수 있어!</p>
          </div>
          <div className="imgBox">
            <img
              src="https://img.freepik.com/free-photo/white-wall-living-room-have-sofa-and-decoration-3d-rendering_41470-3282.jpg"
              alt=""
            />
            <p>오늘은 어떻게 집을 꾸밀까?</p>
          </div>
          <div className="imgBox">
            <img
              src="https://www.jangin.com/data/product/b_file_1564962731jgwk7bws9h.jpg"
              alt=""
            />
            <p>내 공간도 예뻤으면 좋겠어</p>
          </div>
          <div className="imgBox">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_uTtjKPR-0TwIMr_wefT1Df6pUoumgm2E-w&usqp=CAU"
              alt=""
            />
            <p>오늘은 어떤 집을 가볼까?</p>
          </div>
        </div>
      </section>
    </>
  );
}
