import React from "react";

/* Material UI Components */
import Button from "material-ui/Button";
import Tooltip from "material-ui/Tooltip";

/* Material UI extras */
import MyLocation from "material-ui-icons/MyLocation";
import { blue } from "material-ui/colors";

/* Project Components */
import DashboardHeaderImage from "./DashboardHeaderImage";
import { makeAddressLine } from "../../utils/dataUtils";

const blue500 = blue[500];

const style = {
  base: {
    color: "white",
    backgroundColor: blue500,
    position: "relative",
    padding: "16px 24px 20px 24px"
  },
  addr: {
    margin: "0",
    fontSize: "18px",
    textTransform: "capitalize"
  },
  parcelId: {
    margin: "0",
    paddingTop: "6px",
    fontsize: "13px"
  },
  button: {
    position: "absolute",
    top: "-28px",
    right: "16px"
  }
};

const DashboardHeader = props => {
  const { address, imageUrl } = props;
  let addrLine = "";
  if (typeof address !== "undefined") {
    addrLine = makeAddressLine(address);
  }
  return (
    <div>
      <DashboardHeaderImage imageUrl={imageUrl} address={address} />
      <div style={style.base}>
        <Tooltip title="Zoom to Property">
          <Button fab style={style.button} onClick={props.handlePanToRequest}>
            <MyLocation color="action" />
          </Button>
        </Tooltip>
        <h1 style={style.addr}>{addrLine}</h1>

        <div style={style.parcelId}>
          <Tooltip title="Parcel ID" placement="bottom-start">
            <p style={style.parcelId}>{props.parcelId}</p>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
