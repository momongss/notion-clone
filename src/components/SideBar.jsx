import "./SideBar.css";

function SideBar() {
  return (
    <div className="SideBar">
      <div className="user-info">태형's Notion</div>
      <div className="utils">
        <div className="search">빠른 검색</div>
        <div className="update">모든 업데이트</div>
        <div className="settings-member">설정과 멤버</div>
      </div>
      <div className="bookmarks">
        <div className="logo">즐겨찾기</div>
        <div className="list">
          <div className="item">
            <div className="item-main">
              <div className="toggle-btn">
                <i class="fas fa-caret-right"></i>
              </div>
              <div className="icon"></div>
              <div className="title">면접</div>
            </div>
            <div className="item-hover">
              <div className="more-btn">
                <i class="fas fa-ellipsis-h"></i>
              </div>
              <div className="add-btn">
                <i class="far fa-plus-square"></i>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-main">
              <div className="toggle-btn">
                <i class="fas fa-caret-right"></i>
              </div>
              <div className="icon"></div>
              <div className="title">작업 프로세스 ✨✨</div>
            </div>
            <div className="item-hover">
              <div className="more-btn">
                <i class="fas fa-ellipsis-h"></i>
              </div>
              <div className="add-btn">
                <i class="far fa-plus-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
