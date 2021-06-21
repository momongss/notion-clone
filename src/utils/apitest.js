import { api } from "./api.js";

(async () => {
  const root = await api.getRootChildren();
  console.log(root);
  for (const node of root) {
    const children = await api.getNodeChildren(node.id);
    console.log(children);
  }
})();
