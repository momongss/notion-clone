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
        title: "μμ΄λμ΄",
        createAt: "2020-01-01",
        updateAt: "2020-05-03",
        icon: "πΊ",
        children: [4],
        isOpen: false,
      },
      1: {
        id: 1,
        title: "μκ°",
        createAt: "2020-01-01",
        updateAt: "2020-05-03",
        icon: "β¨",
        children: [],
        isOpen: false,
      },
      2: {
        id: 2,
        title: "λ°±μλ",
        createAt: "2020-01-01",
        updateAt: "2020-05-03",
        icon: "π³",
        children: [],
        isOpen: false,
      },
      3: {
        id: 3,
        title: "μ·¨μμ€λΉ",
        createAt: "2020-01-01",
        updateAt: "2020-05-03",
        icon: "π₯",
        children: [],
        isOpen: false,
      },
      4: {
        id: 4,
        title: "μ·¨λ―Έ",
        createAt: "2020-01-01",
        updateAt: "2020-05-03",
        icon: "π₯",
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
