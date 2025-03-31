export function normalizeVNode(vNode) {
  if (typeof vNode === "boolean" || vNode === null || vNode === undefined) {
    return "";
  }

  if (typeof vNode === "number" || typeof vNode === "string") {
    return `${vNode}`;
  }

  return vNode;
}
