/**
 * Refactor
 * 1. 하나의 DOM에 여러 이벤트를 할당할 수 있도록 변경해보기
 * - addEvent와 setupEventListeners에서 한 DOM 요소에 하나의 이벤트만 할당할 수 있는 형태다.
 * - Map으로 엘리먼트와 이벤트를 연결해 관리하고 있기 때문이다.
 * - 이벤트 핸들러를 배열로 관리하면 해결할 수 있을 듯 하다.
 */

const eventMap = new Map();

// setupEventListeners를 이용해서 이벤트 함수를 가져와서 한 번에 root에 이벤트를 등록합니다.
export function setupEventListeners(root) {
  eventMap.forEach((_, eventType) => {
    const handlerMap = eventMap.get(eventType);
    root.addEventListener(eventType, (e) => {
      let target = e.target;
      while (target && target !== root.parentNode) {
        if (handlerMap.has(target)) {
          const handler = handlerMap.get(target);
          handler(e);
        }
        target = target.parentNode;
      }
    });
  });
}

// addEvent를 통해 element에 대한 이벤트 함수를 저장합니다.
export function addEvent(element, eventType, handler) {
  if (!eventMap.has(eventType)) {
    eventMap.set(eventType, new Map());
  }

  const handlerMap = eventMap.get(eventType);
  handlerMap.set(element, handler);
}

// removeEvent를 통해 element에 대한 이벤트 함수를 삭제합니다.
// export function removeEvent(element, eventType, handler) {}
