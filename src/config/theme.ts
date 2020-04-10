import React, { useCallback, useMemo, useState } from "react";

type ProxyObject<T> = { [key in keyof T]: T[key] };

const root = document.querySelector(":root") as Element;

export const changeCssVars = <T>(colors: T) => {
  Object.entries(colors).forEach(([key, color]) =>
    (root as any).style.setProperty(`--${key}`, color)
  );
};

const Proxyfy = <T extends object>(
  object: T,
  callback: (object: T) => void
) => {
  const shallowCopy = { ...object };
  callback(shallowCopy);
  return new Proxy(shallowCopy, {
    set: (obj: T, prop: keyof T, value) => {
      obj[prop] = value;
      callback({ ...obj });
      return true;
    }
  });
};

export const CreateReactiveContext = <T>() =>
  React.createContext<{
    callback: (object: ProxyObject<T>) => any;
    values: ProxyObject<T>;
  }>({
    callback: () => {},
    values: {} as T
  });

const Reactive = <T>(
  initialColors: ProxyObject<T>,
  reaction: (object: ProxyObject<T>) => any
) => {
  const colors = Proxyfy(initialColors, reaction);
  return {
    colors,
    setColors: <T>(newColors: ProxyObject<T>) => {
      Object.entries({ ...colors, ...newColors }).forEach(([key, value]) => {
        (colors as any)[key] = value;
      });
    }
  };
};

export const useReactive = <T>(
  object: ProxyObject<T>,
  callback: (object: ProxyObject<T>) => any = () => {}
): [T, (object: Partial<ProxyObject<T>>) => any] => {
  const mutations = useMemo(() => Reactive(object, callback), []);
  const [stateColors, setStateColors] = useState(mutations.colors);
  const changeColor = useCallback((newColors: T) => {
    mutations.setColors(newColors);
    setStateColors({ ...mutations.colors, ...newColors } as any);
  }, []);

  return [stateColors as any, changeColor as any];
};
