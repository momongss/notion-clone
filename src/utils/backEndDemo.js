class BackEnd {
  constructor() {
    this.rootChildren = [0, 1, 2, 3];

    this.nodeContent = {
      0: "0000",
      1: "1111",
      2: "2222",
      3: "3333",
      4: "4444",
    };
    this.nodeInfo = {
      0: {
        id: 0,
        title: "아이디어",
        createAt: "2020-01-01",
        updateAt: "2020-05-03",
        icon: "😺",
        children: [4],
        isOpen: false,
      },
      1: {
        id: 1,
        title: "생각",
        createAt: "2020-01-01",
        updateAt: "2020-05-03",
        icon: "✨",
        children: [],
        isOpen: false,
      },
      2: {
        id: 2,
        title: "백엔드",
        createAt: "2020-01-01",
        updateAt: "2020-05-03",
        icon: "🕳",
        children: [],
        isOpen: false,
      },
      3: {
        id: 3,
        title: "취업준비",
        createAt: "2020-01-01",
        updateAt: "2020-05-03",
        icon: "💥",
        children: [],
        isOpen: false,
      },
      4: {
        id: 4,
        title: "취미",
        createAt: "2020-01-01",
        updateAt: "2020-05-03",
        icon: "💥",
        children: [],
        isOpen: false,
      },
    };
  }

  getRootChildren() {
    return this.rootChildren.map((id) => {
      return this.nodeInfo[id];
    });
  }

  getNodeChildren(nodeId) {
    const childrenIdList = this.nodeInfo[nodeId].children;
    return childrenIdList.map((id) => {
      return this.nodeInfo[id];
    });
  }

  getNodeContent(nodeId) {
    const data = {
      title: this.nodeInfo[nodeId].title,
      createAt: this.nodeInfo[nodeId].createAt,
      updateAt: this.nodeInfo[nodeId].updateAt,
      icon: this.nodeInfo[nodeId].icon,
      content: this.nodeContent[nodeId],
    };
    return data;
  }
}

const backEnd = new BackEnd();
export { backEnd };
