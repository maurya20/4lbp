import { Button } from "@mui/material";

export const BlButton = (props) => {
  return (
    <>
      <Button {...props}>{props.children}</Button>
    </>
  );
};
