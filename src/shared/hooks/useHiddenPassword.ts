import { useState } from 'react';

export const useHiddenPassword = () => {
  const [show, setShow] = useState(false);

  const handleToggleShowPassword = () => setShow(!show);

  return { passwordIsShow: show, handleToggleShowPassword };
};
