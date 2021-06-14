import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'react-i18next';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { styled, withStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';

const TextPoint = styled(Typography)({
      fontFamily: `myFirstFont`,
      textTransform: `capitalize`,
      // width: `200px`,
      // fontSize: `23px`,
      // border: `solid 1px #00000030`

});

const TextTitle = styled(Typography)({
      fontFamily: `myFirstFont`,
      // textTransform: `capitalize`,
      // width: `200px`,
      // fontSize: `23px`,
      // border: `solid 1px #00000030`

});

const BTN = styled(Button)({
      fontFamily: `myFirstFont`,
      textTransform: `capitalize`,
      // width: `200px`,
      // fontSize: `23px`,
      padding: 0,
      border: `solid 1px #00000030`
});

const HealthPointProgress = withStyles((theme) => ({
      root: {
            height: 20,
            borderRadius: 0,
            width: 450
      },
      colorPrimary: {
            backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
      },
      bar: {
            borderRadius: 0,
            backgroundColor: '#ff5722',
      },
}))(LinearProgress);

const MagicPointProgress = withStyles((theme) => ({
      root: {
            height: 20,
            borderRadius: 0,
            width: 450
      },
      colorPrimary: {
            backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
      },
      bar: {
            borderRadius: 0,
            backgroundColor: '#228fff',
      },
}))(LinearProgress);

const EnergyPointProgress = withStyles((theme) => ({
      root: {
            height: 20,
            borderRadius: 0,
            width: 450
      },
      colorPrimary: {
            backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
      },
      bar: {
            borderRadius: 0,
            backgroundColor: '#ffb122',
      },
}))(LinearProgress);

const SkillTabs = withStyles({
      root: {
            borderBottom: '1px solid #e8e8e8',
      },
      indicator: {
            backgroundColor: '#1890ff',
      },
})(Tabs);

const SkillTab = withStyles((theme) => ({
      root: {
            textTransform: 'none',
            minWidth: 72,
            fontWeight: theme.typography.fontWeightRegular,
            marginRight: theme.spacing(4),
            fontFamily: 'myFirstFont',
            '&:hover': {
                  color: '#40a9ff',
                  opacity: 1,
            },
            '&$selected': {
                  color: '#1890ff',
                  fontWeight: theme.typography.fontWeightMedium,
            },
            '&:focus': {
                  color: '#40a9ff',
            },
      },
      selected: {},
}))((props) => <Tab disableRipple {...props} />);

function Span(props) {

      return <span style={{
            padding: 5,
            ...props.style
      }}>{props.children}</span>
}

Span.propTypes = {
      children: PropTypes.node.isRequired,
      style: PropTypes.object
}

function TabPanel(props) {
      const { children, value, index, ...other } = props;

      return (
            <div
                  role="tabpanel"
                  hidden={value !== index}
                  id={`scrollable-auto-tabpanel-${index}`}
                  aria-labelledby={`scrollable-auto-tab-${index}`}
                  {...other}
            >
                  {value === index && (
                        <Box p={3} style={{
                              border: 'solid 1px #0000003d',
                              borderRadius: '5px',
                              background: 'darkgray',
                        }}>
                              <Typography>{children}</Typography>
                        </Box>
                  )}
            </div>
      );
}

TabPanel.propTypes = {
      children: PropTypes.node,
      index: PropTypes.any.isRequired,
      value: PropTypes.any.isRequired,
};

function a11yProps(index) {
      return {
            id: `scrollable-auto-tab-${index}`,
            'aria-controls': `scrollable-auto-tabpanel-${index}`,
      };
}

function BaggetDraggableBox(props) {
      const { t } = useTranslation();
      const system = useSelector(state => state.systemEvent);
      const person = useSelector(state => state.character);
      const dispatch = useDispatch();
      const [skillState, setSkillState] = React.useState(0);

      const handleSkillChange = (event, newValue) => {
            setSkillState(newValue);
      };

      const dragElement = (elmnt) => (e) => {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

            if (document.getElementById("bagget-draggable-header")) {
                  /* if present, the header is where you move the DIV from:*/
                  document.getElementById("bagget-draggable-header").onmousedown = dragMouseDown;
            } else {
                  /* otherwise, move the DIV from anywhere inside the DIV:*/
                  elmnt.onmousedown = dragMouseDown;
            }

            function dragMouseDown(e) {
                  e = e || window.event;
                  e.preventDefault();
                  // get the mouse cursor position at startup:
                  pos3 = e.clientX;
                  pos4 = e.clientY;
                  document.onmouseup = closeDragElement;
                  // call a function whenever the cursor moves:
                  document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                  e = e || window.event;
                  e.preventDefault();
                  // calculate the new cursor position:
                  pos1 = pos3 - e.clientX;
                  pos2 = pos4 - e.clientY;
                  pos3 = e.clientX;
                  pos4 = e.clientY;
                  // set the element's new position:
                  elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                  elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {
                  /* stop moving when mouse button is released:*/
                  document.onmouseup = null;
                  document.onmousemove = null;
            }
      }

      function closeDetailStatusBox() {
            dispatch({ type: "OPEN_BAGGET_SYSTEM_EVENT", payload: false })
      }

      return (
            <React.Fragment>
                  <Paper id="bagget-draggable-box" square style={{
                        position: 'fixed',
                        top: 250,
                        left: 200,
                        width: 650,
                        display: system.openBagget === true ? 'block' : 'none'
                  }}>
                        <Grid
                              container
                              direction="column"
                              justify="center"
                              alignItems="center"
                              style={{
                                    width: '100%',
                              }}

                        >
                              <Grid item xs={12} style={{
                                    width: '100%',
                              }}>
                                    <Paper id="bagget-draggable-header" square onClick={dragElement(document.getElementById("bagget-draggable-box"))} style={{
                                          padding: '0px 10px',
                                          background: 'darkgray',
                                          cursor: 'move'
                                    }}>
                                          <Grid
                                                container
                                                direction="row"
                                                justify="flex-start"
                                                alignItems="flex-start"


                                          >
                                                <Grid item xs={12} sm={6}><TextTitle>{t("กระเป๋า")}</TextTitle></Grid>
                                                <Grid item xs={12} sm={6} style={{
                                                      justifyContent: 'flex-end',
                                                      display: 'flex',
                                                }}>
                                                      <IconButton aria-label="close" size="small" onClick={closeDetailStatusBox}>
                                                            <CloseIcon fontSize="inherit" />
                                                      </IconButton>
                                                </Grid>
                                          </Grid>
                                    </Paper>
                              </Grid>
                              <Grid item xs={12} style={{
                                    width: '100%',
                                    padding: 10
                              }}>
                            
                              </Grid>
                        </Grid>
                  </Paper>
            </React.Fragment>
      )
}

BaggetDraggableBox.propTypes = {

}

export default BaggetDraggableBox
