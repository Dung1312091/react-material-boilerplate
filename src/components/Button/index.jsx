import React, { memo } from "react";
import ButtonMaterial from "@material-ui/core/Button";
const Button = memo(({ active = false, className, ...rest }) => {
  return <ButtonMaterial variant="contained">Default</ButtonMaterial>;
});

export default Button;
