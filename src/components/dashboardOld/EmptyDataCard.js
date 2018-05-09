import React from "react";
import DataCard from "./DataCard";

const style = {
  blocked: {
    background: "#DDDDDD",
    color: "#DDDDDD"
  }
};

const EmptyDataCard = props => {
  return (
    <DataCard
      title={<span style={style.blocked}>Property Characteristics</span>}
    >
      <span style={style.blocked}>dfjaksldfjakl; fjkla;</span>
      <br />
      <span style={style.blocked}>adsfjkaskldfl;sd</span>
      <br />
      <span style={style.blocked}>asdfjkkasdl;fjal;dfja;ajsd;lf</span>
    </DataCard>
  );
};

export default EmptyDataCard;
