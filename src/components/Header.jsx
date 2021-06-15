import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="folder-path">
        <div className="path">
          <div className="text">프론트엔드</div>
        </div>
        <div className="path">
          <div className="text">...</div>
        </div>
        <div className="path">
          <div className="text">다이어리</div>
        </div>
        <div className="path">
          <div className="text">요구사항</div>
        </div>
      </div>
      <div className="buttons">
        <div className="share-btn">
          <div className="text">공유</div>
        </div>
        <div className="update-btn">
          <div className="text">업데이트</div>
        </div>
        <div className="bookmark-btn">
          <div className="text">즐겨찾기로 지정된 항목</div>
        </div>
        <div className="more-btn">
          <div className="text">
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
