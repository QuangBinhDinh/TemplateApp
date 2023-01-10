import { useEffect, useState } from "react";

export const ScrollDirection = {
  up: "up",
  down: "down",
  begin: "begin"
}

const defaultFunc = () => { }
/**
 * Hook dùng để detect scroll direction, gọi callback. 
 *  Made by binhchili 
 * @param {function} onScrollUp callback khi scroll up
 * @param {function} onScrollDown callback khi scroll down 
 * @param {number} scrollThreshold threshold - khoảng cách giữa 2 vị trí scroll để trigger hook này 
 * @returns 
 */
export const useScrollDirection = (onScrollUp = defaultFunc, onScrollDown = defaultFunc, scrollThreshold = 6) => {

  const [scrollDir, setScrollDir] = useState(ScrollDirection.begin);
  const [scrollY, setScrollY] = useState(0);

  const onScrollY = (event) => {
    let offsetY = event.nativeEvent.contentOffset.y;

    if (Math.abs(offsetY - scrollY) >= scrollThreshold && scrollY >= 0 && offsetY >= 0) {
      if (offsetY > scrollY) {
        setScrollDir(ScrollDirection.down);
        onScrollDown();
      }
      else if (offsetY < scrollY) setScrollDir(ScrollDirection.up)
      setScrollY(offsetY);
    }

  }

  return { scrollDir, onScrollY };
};