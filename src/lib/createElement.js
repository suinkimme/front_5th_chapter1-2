// import { addEvent } from "./eventManager";

export function createElement(vNode) {
  // vNode가 null, undefined, boolean 일 경우, 빈 텍스트 노드를 반환합니다.
  if (typeof vNode === "boolean" || vNode === null || vNode === undefined) {
    return document.createTextNode("");
  }

  // vNode가 문자열이나 숫자면 텍스트 노드를 생성하여 반환합니다.
  if (typeof vNode === "string" || typeof vNode === "number") {
    return document.createTextNode(vNode);
  }

  // vNode가 배열이면 DocumentFragment를 생성하고 각 자식에 대해 createElement를 재귀 호출하여 추가합니다.
  if (Array.isArray(vNode)) {
    const fragment = document.createDocumentFragment();
    vNode.forEach((child) => fragment.appendChild(createElement(child)));
    return fragment;
  }

  const element = document.createElement(vNode.type);
  (vNode.children || []).forEach((child) => {
    element.appendChild(createElement(child));
  });

  return element;
}

// function updateAttributes($el, props) {}
