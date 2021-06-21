import { backEnd } from "./backEndDemo.js";

class Api {
  constructor() {}

  async getRootChildren() {
    return await backEnd.getRootChildren();
  }

  async getNodeChildren(nodeId) {
    return await backEnd.getNodeChildren(nodeId);
  }

  async getNodeContent(nodeId) {
    return await backEnd.getNodeContent(nodeId);
  }

  getSubTree(treeId) {
    //
  }

  createNode() {
    //
  }

  removeNode(treeId) {
    //
  }

  moveNode(id, destId) {
    //
  }

  updateNode(nodeId, node) {
    //
  }
}

const api = new Api();
export { api };
