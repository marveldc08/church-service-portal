import React, { useState } from 'react';

export const USEMODAL = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const toggle = () => setIsShown(!isShown);
  return {
    isShown,
    toggle,
  };
};

export default USEMODAL