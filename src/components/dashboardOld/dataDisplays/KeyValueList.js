import React from "react";
import { withStyles } from "material-ui/styles";

const styles = theme => ({});

const KeyValueList = props => {
  const { data } = props;
  const style = {
    listStyle: "none",
    margin: "0 0 0 0",
    padding: "0"
  };

  return (
    <ul className="kv-list" style={style}>
      {Object.keys(data).map(key => (
        <KeyValuePair key={key.toString()} field={key} val={data[key]} />
      ))}
    </ul>
  );
};

const KeyValuePair = props => {
  const listStyle = {
    padding: "8px 0"
  };

  return (
    <li style={listStyle} className="kv-pair">
      <dl style={{ margin: "0" }}>
        <KeyValueKey field={props.field} />
        <KeyValueValue key={props.field} val={props.val} />
      </dl>
    </li>
  );
};

const KeyValueKey = props => {
  const style = {
    paddingLeft: "",
    fontSize: "14px"
  };
  return (
    <dt style={style} className="kv-key">
      {props.field}
    </dt>
  );
};

const KeyValueValue = props => {
  const style = {
    paddingLeft: "",
    marginLeft: "0",
    fontSize: "14px",
    color: "dimgray"
  };

  return (
    <dd style={style} className="kv-val">
      {props.val}
    </dd>
  );
};

export default withStyles(styles)(KeyValueList);
