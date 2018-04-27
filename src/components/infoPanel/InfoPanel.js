import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import {connect} from 'react-redux'
import Close from 'material-ui-icons/Close'
import IconButton from 'material-ui/IconButton'
import { LinearProgress } from 'material-ui/Progress';

import DataSection from '../dashboardOld/DataSection'
import {
  ParcelCharacteristics,
  DwellingCharacteristics,
  AssessmentTable,
  PropertyTaxReductions,
  SalesTable,
  TaxLiens,
  OwnerAddress,
  BuildingCodeViolations,
  TaxDelinquency,
  Foreclosure
} from '../dashboardOld/customModules'
import {parcelDataById} from "../../reducers/dataReducers";
import {closeDisplay} from "../../actions/dataActions";
import EmptyDataCard from "../dashboardOld/EmptyDataCard";


const styles = theme => ({
  paper: {
    margin: '6px',
    width: 480,
    height: '98%',
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 3,
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    position: 'static',
    overflowY: 'auto',
    overflowX: 'hidden',

  },
  flex: {
    flex: 1,
  },
});


const InfoPanel = props => {
  const {
    children,
    classes,
    parcelId,
    isFetching,
    data,
    dataDisplay,
    handleClose
  } = props;

  if (dataDisplay.open) {
    return (
      <Paper className={classes.paper}>
        <AppBar position="static" color={"secondary"}>
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Property Information
            </Typography>
            <IconButton
              aria-owns={dataDisplay.open ? 'menu-appbar' : null}
              aria-haspopup="true"
              onClick={handleClose}
              color="inherit"
            >
              <Close/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>

          {isFetching &&
          <DataSection>
            <LinearProgress color="primary" variant="query"/>
            <EmptyDataCard/>
            <EmptyDataCard/>
            <EmptyDataCard/>
            <EmptyDataCard/>
            <EmptyDataCard/>
          </DataSection>
          }
          {!isFetching && data &&
          <DataSection>
            <ParcelCharacteristics data={data}/>
            <OwnerAddress data={data} parcelId={parcelId}/>

            <DwellingCharacteristics data={data}/>

            <AssessmentTable data={data}/>

            <PropertyTaxReductions data={data}/>

            <SalesTable data={data}/>

            <BuildingCodeViolations data={data}/>

            <TaxLiens data={data}/>

            <TaxDelinquency data={data}/>

            <Foreclosure data={data}/>
          </DataSection>
          }
        </div>
      </Paper>
    )
  } else
    return null
};

const mapStateToProps = state => {
  const {currentParcelId, parcelDataById, dataDisplay} = state;
  const {isFetching, data} = parcelDataById[currentParcelId] || {isFetching: false, data: null};
  return {currentParcelId, isFetching, data, dataDisplay}
}

const mapDispatchToProps = dispatch => {
  return {
    handleClose: () => {
      dispatch(closeDisplay())
    }
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(InfoPanel));