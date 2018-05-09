import React from "react";

import Card, { CardHeader, CardContent } from "material-ui/Card";

const style = {
  backgroundColor: "#eaeaea"
};

const DataSection = props => {
  return <div style={style}>{props.children}</div>;
};

export default DataSection;
