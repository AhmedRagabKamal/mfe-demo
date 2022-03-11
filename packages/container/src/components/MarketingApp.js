import { mount } from "marketing/marketingApp";
import React, { useEffect, useRef } from "react";

export default () => {
  const ref = useRef();

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
