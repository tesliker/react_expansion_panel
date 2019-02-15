import { Component } from 'react';
import ReactDOM from 'react-dom';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

class ExpansionPanelBlock extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }
  render() {
    const styles = {
      root: {
        width: '100%',
      },
      heading: {
        fontSize: 15,
        fontWeight: 'normal',
      },
    };
    let expansionPanelSettings = {};
    const pdbConfig = drupalSettings.pdb.configuration;
    if (pdbConfig !== undefined) {
      for (var configId in pdbConfig) {
        console.log(configId)
        if (pdbConfig[configId].panel_details_1 !== undefined) {
          expansionPanelSettings = pdbConfig[configId];
        }
      }
    }
    if (expansionPanelSettings.length <= 0) {
      return false;
    }
    return (
      <div style={styles.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
            <Typography style={styles.heading}>{expansionPanelSettings.panel_summary_1}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              {expansionPanelSettings.panel_details_1}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
            <Typography style={styles.heading}>{expansionPanelSettings.panel_summary_2}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              {expansionPanelSettings.panel_details_2}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
            <Typography style={styles.heading}>{expansionPanelSettings.panel_summary_3}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              {expansionPanelSettings.panel_details_3}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
  );
  }
}

export default ExpansionPanelBlock;

const wrapper = document.getElementById("expansion-panel");
wrapper ? ReactDOM.render(<ExpansionPanelBlock />, wrapper) : false;
