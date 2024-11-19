
import React, { useRef, useEffect } from "react";

export default function MyComponent() {
  const elementRef = useRef(null);

  useEffect(() => {
    let element = elementRef.current;
    console.log(element);
    if (element) {
      const width = element.offsetWidth;
      const height = element.offsetHeight;
      console.log("Width:", width);
      console.log("Height:", height);
      // element.innerHTML = <div>中国人</div>
    }
    console.log(element);
  }, []);

  return <div ref={elementRef}>Hello World</div>;
}
