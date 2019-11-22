import { request } from "./request";

export function getHomeMultidata() {
  return request({
    url:'home/multidata'
  });
}
export function getHomeGoods(param) {
  return request({
    url:'home/data',
    param
  });
}
