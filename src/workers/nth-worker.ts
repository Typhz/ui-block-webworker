import findNumberPrime from "../utils/findNthNumber";

onmessage = (event: MessageEvent) => {
  const result = findNumberPrime(event.data);
  postMessage(result);
}