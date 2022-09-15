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
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/deals/160135284046634461.jpg?gif=1&w=360&h=360&c=c&q=0.8&webp=1"
              alt=""
            />
            <p>누구나 예쁜 집 살 수 있어!</p>
          </div>
          <div className="imgBox">
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/deals/160135284046634461.jpg?gif=1&w=360&h=360&c=c&q=0.8&webp=1"
              alt=""
            />
            <p>누구나 예쁜 집 살 수 있어!</p>
          </div>
          <div className="imgBox">
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/deals/160135284046634461.jpg?gif=1&w=360&h=360&c=c&q=0.8&webp=1"
              alt=""
            />
            <p>누구나 예쁜 집 살 수 있어!</p>
          </div>
        </div>
      </section>
    </>
  );
}
