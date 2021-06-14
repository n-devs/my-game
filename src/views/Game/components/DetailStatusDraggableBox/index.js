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

function DetailStatusDraggableBox(props) {
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

            if (document.getElementById("detail-status-draggable-header")) {
                  /* if present, the header is where you move the DIV from:*/
                  document.getElementById("detail-status-draggable-header").onmousedown = dragMouseDown;
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
            dispatch({ type: "OPEN_DETAIL_STATUS_SYSTEM_EVENT", payload: false })
      }

      function openUpdateStatusBox() {
            dispatch({ type: "OPEN_UPDATE_STATUS_SYSTEM_EVENT", payload: true })
      }

      function openBaggetBox() {
            dispatch({ type: "OPEN_BAGGET_SYSTEM_EVENT", payload: true })
      }

      const opneDetailSkillBox = (skill) => (e) => {
            dispatch({ type: "OPEN_DETAIL_SKILL_SYSTEM_EVENT", payload: true })

            dispatch({ type: "NAME_SKILL_STATE", payload: skill.name })
            dispatch({ type: "LAVEL_SKILL_STATE", payload: skill.lavel })
            dispatch({ type: "EXP_NOW_SKILL_STATE", payload: skill.expNow })
            dispatch({ type: "EXP_MAX_SKILL_STATE", payload: skill.expMax })
            dispatch({ type: "EXP_UPGRATE_SKILL_STATE", payload: skill.expUpgrate })
            dispatch({ type: "REINFORCEMANT_SKILL_STATE", payload: skill.reinforcement })
            dispatch({ type: "TYPE_SKILL_STATE", payload: skill.type })
            dispatch({ type: "TURN_SKILL_STATE", payload: skill.turn })
            dispatch({ type: "USE_EP_SKILL_STATE", payload: skill.use.ep })
            dispatch({ type: "USE_MP_SKILL_STATE", payload: skill.use.mp })
            dispatch({ type: "DETAIL_SKILL_STATE", payload: skill.detail })
      }

      return (
            <React.Fragment>
                  <Paper id="detail-status-draggable-box" square style={{
                        position: 'fixed',
                        top: 250,
                        left: 200,
                        width: 650,
                        display: system.openDetailStatus === true ? 'block' : 'none'
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
                                    <Paper id="detail-status-draggable-header" square onClick={dragElement(document.getElementById("detail-status-draggable-box"))} style={{
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
                                                <Grid item xs={12} sm={6}><TextTitle>{t("สถานะ")}</TextTitle></Grid>
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
                                    <Grid
                                          container
                                          direction="row"
                                          justify="flex-start"
                                          alignItems="flex-start"
                                          spacing={2}
                                    >
                                          <Grid item xs={12} sm={3}  >

                                                <Avatar variant="rounded" style={{
                                                      width: 100,
                                                      height: 100,
                                                }} >
                                                </Avatar>
                                                <Grid
                                                      container
                                                      direction="column"
                                                      justify="flex-start"
                                                      alignItems="flex-start"
                                                >
                                                      <Grid item xs={12}>{t("ค่าสถานะ")}</Grid>
                                                      <Grid item xs={12}>
                                                            <TextPoint component="span">
                                                                  <Span>{t("สุขภาพ")}:</Span>
                                                                  <Span>{person.status.healthPointStatusDefault}</Span>
                                                            </TextPoint>
                                                      </Grid>
                                                      <Grid item xs={12}>
                                                            <TextPoint component="span">
                                                                  <Span>{t("พลังเวท")}:</Span>
                                                                  <Span>{person.status.magicPointStatusDefault}</Span>
                                                            </TextPoint>
                                                      </Grid>
                                                      <Grid item xs={12}>
                                                            <TextPoint component="span">
                                                                  <Span>{t("พลังกาย")}:</Span>
                                                                  <Span>{person.status.energyPointStatusDefault}</Span>
                                                            </TextPoint>
                                                      </Grid>
                                                      <Grid item xs={12}>
                                                            <TextPoint component="span">
                                                                  <Span>{t("พลังโจมตี")}:</Span>
                                                                  <Span>{person.status.attackPointStatusDefault}</Span>
                                                            </TextPoint>
                                                      </Grid>
                                                      <Grid item xs={12}>
                                                            <TextPoint component="span">
                                                                  <Span>{t("พลังป้องกัน")}:</Span>
                                                                  <Span>{person.status.defensePointStatusDefault}</Span>
                                                            </TextPoint>
                                                      </Grid>
                                                      <Grid item xs={12}>
                                                            <TextPoint component="span">
                                                                  <Span>{t("ความเร็ว")}:</Span>
                                                                  <Span>{person.status.speedPointStatusDefault}</Span>
                                                            </TextPoint>
                                                      </Grid>
                                                      <Grid item xs={12}>
                                                            <TextPoint component="span">
                                                                  <Span>{t("ความฉลาด")}:</Span>
                                                                  <Span>{person.status.intelligencePointStatusDefault}</Span>
                                                            </TextPoint>
                                                      </Grid>
                                                      <Grid item xs={12}>
                                                            <BTN variant="contained" disableElevation onClick={openUpdateStatusBox}>
                                                                  <TextPoint component="span">
                                                                        <Span>{t("แต้มอัพเกรด")}</Span>
                                                                        <Span>{person.pointUpdateStatus}</Span>
                                                                  </TextPoint>
                                                            </BTN>

                                                      </Grid>
                                                </Grid>
                                          </Grid>
                                          <Grid item xs={12} sm={9}>
                                                <Grid
                                                      container
                                                      direction="column"
                                                      justify="flex-start"
                                                      alignItems="flex-start"
                                                      spacing={1}
                                                >
                                                      <Grid item xs={12} style={{
                                                            width: '100%'
                                                      }}>
                                                            <Grid
                                                                  container
                                                                  direction="row"
                                                                  justify="flex-start"
                                                                  alignItems="flex-start"
                                                                  spacing={1}
                                                            >
                                                                  <Grid item xs={12} sm={6}>
                                                                        <TextPoint component="span">
                                                                              <Span>{t("ชื่อ")}</Span>
                                                                              <Span>{person.name}</Span>
                                                                        </TextPoint>
                                                                  </Grid>
                                                                  <Grid item xs={12} sm={6} style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'center',
                                                                  }}>
                                                                        {/* <BTN variant="contained" disableElevation onClick={openDetailStatusBox}>
                                                                              {t("สถานะ")}
                                                                        </BTN> */}
                                                                  </Grid>
                                                            </Grid>

                                                      </Grid>
                                                      <Grid item xs={12} style={{
                                                            position: "relative"
                                                      }} >
                                                            <Span >{t("สุขภาพ")}</Span>
                                                            <Span style={{
                                                                  position: 'absolute',
                                                                  zIndex: '1',
                                                                  top: '17px',
                                                                  left: '46%',
                                                            }}>{person.status.healthPointStatusNow + " / " + person.status.healthPointStatusDefault}</Span>
                                                            <HealthPointProgress variant="determinate" value={person.healthPointProgress} />

                                                      </Grid>
                                                      <Grid item xs={12} style={{
                                                            position: "relative"
                                                      }}  >
                                                            <Span >{t("พลังเวท")}</Span>
                                                            <Span style={{
                                                                  position: 'absolute',
                                                                  zIndex: '1',
                                                                  top: '17px',
                                                                  left: '46%',
                                                            }}>{person.status.magicPointStatusNow + " / " + person.status.magicPointStatusDefault}</Span>
                                                            <MagicPointProgress variant="determinate" value={person.magicPointProgress} />
                                                      </Grid>
                                                      <Grid item xs={12} style={{
                                                            position: "relative"
                                                      }}  >
                                                            <Span >{t("พลังกาย")}</Span>
                                                            <Span style={{
                                                                  position: 'absolute',
                                                                  zIndex: '1',
                                                                  top: '17px',
                                                                  left: '46%',
                                                            }}>{person.status.energyPointStatusNow + " / " + person.status.energyPointStatusDefault}</Span>
                                                            <EnergyPointProgress variant="determinate" value={person.energyPointProgress} />
                                                      </Grid>
                                                      <Grid item xs={12} style={{
                                                            width: '100%'
                                                      }}>
                                                            <SkillTabs value={skillState} onChange={handleSkillChange} aria-label="Skill example">
                                                                  <SkillTab label={t("สกิลโจมตี")} {...a11yProps(0)} />
                                                                  <SkillTab label={t("สกิลป้องกัน")} {...a11yProps(1)} />
                                                                  <SkillTab label={t("สกิลหลบหลีก")} {...a11yProps(2)} />
                                                                  <SkillTab label={t("สกิลเสริมพลัง")} {...a11yProps(3)} />
                                                            </SkillTabs>
                                                            <TabPanel value={skillState} index={0}>
                                                                  {person.skills.map((skill, key) => (
                                                                        <React.Fragment key={key}>
                                                                              {skill.type === "attack" ? (<React.Fragment>

                                                                                    <Grid
                                                                                          container
                                                                                          direction="row"
                                                                                          justify="flex-start"
                                                                                          alignItems="flex-start"
                                                                                    >
                                                                                          <Grid item xs={12} sm={4}>
                                                                                                <BTN
                                                                                                      variant="contained"
                                                                                                      disableElevation
                                                                                                      style={{
                                                                                                            padding: '4px 12px'
                                                                                                      }}
                                                                                                      onClick={opneDetailSkillBox(skill)}
                                                                                                      startIcon={skill.condition === "standas" ? (<LockOpenIcon></LockOpenIcon>) : (<React.Fragment></React.Fragment>)}
                                                                                                >
                                                                                                      <TextPoint component="span">
                                                                                                            <Span>{t(`${skill.name}`)}</Span>
                                                                                                      </TextPoint>
                                                                                                </BTN>
                                                                                          </Grid>
                                                                                    </Grid>
                                                                              </React.Fragment>) : (<React.Fragment></React.Fragment>)}
                                                                        </React.Fragment>
                                                                  ))}
                                                            </TabPanel>
                                                            <TabPanel value={skillState} index={1}>
                                                                  {person.skills.map((skill, key) => (
                                                                        <React.Fragment key={key}>
                                                                              {skill.type === "defense" ? (<React.Fragment>

                                                                                    <Grid
                                                                                          container
                                                                                          direction="row"
                                                                                          justify="flex-start"
                                                                                          alignItems="flex-start"
                                                                                    >
                                                                                          <Grid item xs={12} sm={4}>
                                                                                                <BTN
                                                                                                      variant="contained"
                                                                                                      disableElevation
                                                                                                      style={{
                                                                                                            padding: '4px 12px'
                                                                                                      }}
                                                                                                      onClick={opneDetailSkillBox(skill)}
                                                                                                      startIcon={skill.condition === "standas" ? (<LockOpenIcon></LockOpenIcon>) : (<React.Fragment></React.Fragment>)}
                                                                                                >
                                                                                                      <TextPoint component="span">
                                                                                                            <Span>{t(`${skill.name}`)}</Span>
                                                                                                      </TextPoint>
                                                                                                </BTN>
                                                                                          </Grid>
                                                                                    </Grid>
                                                                              </React.Fragment>) : (<React.Fragment></React.Fragment>)}
                                                                        </React.Fragment>
                                                                  ))}
                                                            </TabPanel>
                                                            <TabPanel value={skillState} index={2}>
                                                                  {person.skills.map((skill, key) => (
                                                                        <React.Fragment key={key}>
                                                                              {skill.type === "parry" ? (<React.Fragment>

                                                                                    <Grid
                                                                                          container
                                                                                          direction="row"
                                                                                          justify="flex-start"
                                                                                          alignItems="flex-start"
                                                                                    >
                                                                                          <Grid item xs={12} sm={4}>
                                                                                                <BTN
                                                                                                      variant="contained"
                                                                                                      disableElevation
                                                                                                      style={{
                                                                                                            padding: '4px 12px'
                                                                                                      }}
                                                                                                      onClick={opneDetailSkillBox(skill)}
                                                                                                      startIcon={skill.condition === "standas" ? (<LockOpenIcon></LockOpenIcon>) : (<React.Fragment></React.Fragment>)}
                                                                                                >
                                                                                                      <TextPoint component="span">
                                                                                                            <Span>{t(`${skill.name}`)}</Span>
                                                                                                      </TextPoint>
                                                                                                </BTN>
                                                                                          </Grid>
                                                                                    </Grid>
                                                                              </React.Fragment>) : (<React.Fragment></React.Fragment>)}
                                                                        </React.Fragment>
                                                                  ))}
                                                            </TabPanel>
                                                            <TabPanel value={skillState} index={3}>
                                                                  {person.skills.map((skill, key) => (
                                                                        <React.Fragment key={key}>
                                                                              {skill.type === "empower" ? (<React.Fragment>

                                                                                    <Grid
                                                                                          container
                                                                                          direction="row"
                                                                                          justify="flex-start"
                                                                                          alignItems="flex-start"
                                                                                    >
                                                                                          <Grid item xs={12} sm={4}>
                                                                                                <BTN
                                                                                                      variant="contained"
                                                                                                      disableElevation
                                                                                                      style={{
                                                                                                            padding: '4px 12px'
                                                                                                      }}
                                                                                                      onClick={opneDetailSkillBox(skill)}
                                                                                                      startIcon={skill.condition === "standas" ? (<LockOpenIcon></LockOpenIcon>) : (<React.Fragment></React.Fragment>)}

                                                                                                >
                                                                                                      <TextPoint component="span">
                                                                                                            <Span>{t(`${skill.name}`)}</Span>
                                                                                                      </TextPoint>
                                                                                                </BTN>
                                                                                          </Grid>
                                                                                    </Grid>
                                                                              </React.Fragment>) : (<React.Fragment></React.Fragment>)}
                                                                        </React.Fragment>
                                                                  ))}
                                                            </TabPanel>

                                                      </Grid>
                                                      <Grid item xs={12} style={{
                                                            width: '100%'
                                                      }}>
                                                            <Grid
                                                                  container
                                                                  direction="row"
                                                                  justify="flex-start"
                                                                  alignItems="center"
                                                            >
                                                                  <Grid item xs={12} sm={6}>
                                                                        <TextPoint component="span">
                                                                              <Span>{t("เงินทั้งหมด")}</Span>
                                                                              <Span>{person.coin}</Span>
                                                                              <Span>{t("coin")}</Span>
                                                                        </TextPoint>
                                                                  </Grid>
                                                                  <Grid item xs={12} sm={6} style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'flex-end',
                                                                        // padding: '0px 16px',
                                                                  }}>
                                                                        <BTN
                                                                              variant="contained"
                                                                              disableElevation
                                                                              onClick={openBaggetBox}>
                                                                              <TextPoint component="span">
                                                                                    <Span>{t("กระเป๋า")}</Span>
                                                                              </TextPoint>
                                                                        </BTN>
                                                                  </Grid>
                                                            </Grid>
                                                      </Grid>

                                                </Grid>
                                          </Grid>
                                    </Grid>

                              </Grid>
                        </Grid>
                  </Paper>
            </React.Fragment>
      )
}

DetailStatusDraggableBox.propTypes = {

}

export default DetailStatusDraggableBox
