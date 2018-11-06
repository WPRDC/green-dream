import React from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {closeAboutDialog} from "../actions/dataActions";

const AboutDialog = props => {
  const {aboutDialogOpen, handleClose} = props;
  return (
    <div>
      <Dialog
        open={aboutDialogOpen}
        onClose={handleClose}
      >
        <DialogTitle>{"About Urban Greenprint"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p>
              To better inform land use decisions and ownership considerations ALT is developing an intersectional
              analysis of parcel status of the Greater Pittsburgh Region, with a focus on key regional initiatives.
              Urban greening is a multi-benefit solution to many of the issues facing the region, such as landslides,
              water management and combined sewer overflows; which have arisen from inappropriate development and poor
              and aging infrastructure. This “Urban Greenprint” will emphasize greenspaces as solutions, recognizing
              that all forms of urban greening can positively contribute to the overall health and benefit of the area.
              The Greenprint will guide ALT, policy makers, and the community on the best uses of parcels to improve
              comprehensive regional planning and decision-making.
            </p>
            <ul>
              <li>The Urban Greenprint project is a full partnership between <a
                href="https://alleghenylandtrust.org/"> Allegheny Land Trust</a> and <a href="https://wprdc.org">the
                Western Pennsylvania Regional Data Center</a>.</li>
              <li>We (ALT and WPRDC) have worked together to obtain the datasets for this project</li>
              <li>This is now a "living" project which will update and evolve over time. You can view the code and submit issues at <a href="https://github.com/WPRDC/green-dream">the Github Repository</a>.</li>
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = state => {
  const {aboutDialogOpen} = state;
  return {aboutDialogOpen}
};

const mapDispatchToProps = dispatch => {
  return {
    handleClose: () => dispatch(closeAboutDialog())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutDialog);