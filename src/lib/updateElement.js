// import { addEvent, removeEvent } from "./eventManager";
import { createElement } from "./createElement.js";

// function updateAttributes(target, originNewProps, originOldProps) {}

export function updateElement(parentElement, newNode, oldNode, index = 0) {
  const oldElement = parentElement.childNodes[index];

  // 노드 제거 (newNode가 없고 oldNode가 있는 경우)
  if (!newNode && oldNode) {
    oldElement && parentElement.removeChild(oldElement);
    return;
  }

  // 새 노드 추가 (newNode가 있고 oldNode가 없는 경우)
  if (newNode && !oldNode) {
    const newElement = createElement(newNode);
    parentElement.appendChild(newElement);
    return;
  }

  // 텍스트 노드 업데이트
  if (
    ["string", "number"].includes(typeof newNode) &&
    ["string", "number"].includes(typeof oldNode) &&
    newNode !== oldNode
  ) {
    parentElement.replaceChild(createElement(newNode), oldElement);
    return;
  }

  // 노드 교체 (newNode와 oldNode의 타입이 다른 경우)
  if (newNode.type !== oldNode.type) {
    const newElement = createElement(newNode);

    if (oldElement) {
      parentElement.replaceChild(newElement, oldElement);
    } else {
      parentElement.appendChild(newElement);
    }
  }

  // 같은 타입의 노드 업데이트
  const newChildren = newNode.children || [];
  const oldChildren = oldNode.children || [];
  const maxChildrenLength = Math.max(newChildren.length, oldChildren.length);

  for (let i = 0; i < maxChildrenLength; i++) {
    updateElement(oldElement, newChildren[i], oldChildren[i], i);
  }

  while (oldElement.childNodes.length > newChildren.length) {
    oldElement.removeChild(oldElement.lastChild);
  }
}
