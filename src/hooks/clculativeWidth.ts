import {RefObject, useEffect, useState} from 'react';

export const useClculativeWidth = (
  parentRef: RefObject<HTMLDivElement>,
  marginX: number,
  cols: number,
  callback?: (nowWidth: number) => void,
) => {
  const [itemWidth, setItemWidth] = useState(200);
  useEffect(() => {
    // 计算单个子元素宽度，根据list的宽度计算
    const countWidth = () => {
      const width = parentRef.current?.offsetWidth;
      if (width) {
        const _width = (width - marginX * (cols + 1)) / cols;
        setItemWidth(_width);
        callback && callback(_width);
      }
    };
    return countWidth();
  });
};
