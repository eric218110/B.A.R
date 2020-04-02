import React from "react";
import Button from "@material-ui/core/Button";

interface DemoPros {
  onToggleDark: Function;
}

const Demo: React.FC<DemoPros> = ({ onToggleDark }) => (
  <Button variant="contained" color="default" onClick={onToggleDark()}>
    Toggle Theme Type
  </Button>
);

export default Demo;
