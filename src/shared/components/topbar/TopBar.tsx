import { useEffect, useState } from "react";

import { TopbarContainer } from "./topbar.style";

export const TopBar = () => {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <TopbarContainer>
      <div>
        {date.toLocaleDateString()} <span>&nbsp;&nbsp;&nbsp;</span>
        {date.toLocaleTimeString()}
      </div>
      <div></div>
      <div>GIT / EMAIL / SITE / MESSAGE</div>
    </TopbarContainer>
  );
};
