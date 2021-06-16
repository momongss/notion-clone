import "./SideBar.css";

function SideBar() {
  return (
    <div className="SideBar">
      <div className="user-info">
        <div className="user-icon-wrapper">
          <img src="https://lh3.googleusercontent.com/a-/AOh14GgA7MPUelqyZ6G0FUQy1yCrZ2uINVh6DGRvIf6-MQ=s100" />
        </div>
        <span>태형's Notion</span>
      </div>
      <div className="utils">
        <div className="search">
          <span>빠른 검색</span>
        </div>
        <div className="update">
          <span>모든 업데이트</span>
        </div>
        <div className="settings-member">
          <span>설정과 멤버</span>
        </div>
      </div>
      <div className="docs">
        <div className="docs-section">
          <div className="logo">
            <span>즐겨찾기</span>
          </div>
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

        <div className="docs-section">
          <div className="logo">
            <span>개인 페이지</span>
            <div className="item-hover">
              <div className="add-btn">
                <i class="far fa-plus-square"></i>
              </div>
            </div>
          </div>
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
    </div>
  );
}

export default SideBar;
