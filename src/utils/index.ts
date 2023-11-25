export function deep_JSON<T>(data: T): T {
  return JSON.parse(JSON.stringify(data));
}

type anyFn = (...param: any[]) => any;
// 节流
export const throttle = (func: anyFn, time: number): anyFn => {
  let flag = false;
  return function (self: any, ...arg) {
    if (flag) {
      return;
    }
    flag = true;
    func.apply(self, arg);
    setTimeout(() => {
      flag = false;
    }, time);
  };
};
