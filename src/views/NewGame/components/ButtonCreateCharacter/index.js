import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import gameDB from '../../../../db/game';
import { useHistory } from "react-router-dom";
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const BTN = styled(Button)({
      fontFamily: `myFirstFont`,
      textTransform: `capitalize`,
      width: `200px`,
      fontSize: `23px`,
      border: `solid 1px #00000030`
});

const TextPoint = styled(Typography)({
      fontFamily: `myFirstFont`,
      // textTransform: `capitalize`,
      width: `200px`,
      fontSize: `23px`,
      // border: `solid 1px #00000030`

});

const TextTitle = styled(Typography)({
      fontFamily: `myFirstFont`,
      // textTransform: `capitalize`,
      // width: `200px`,
      fontSize: `23px`,
      // border: `solid 1px #00000030`

});

function Span(props) {

      return <span style={{
            padding: 5
      }}>{props.children}</span>
}

Span.propTypes = {
      children: PropTypes.node.isRequired,
}

function Alert(props) {
      return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
});



function ButtonCreateCharacter() {
      const [noti, setNoti] = React.useState(false);
      const [openStatus, setOpenStatus] = React.useState(false);

      const person = useSelector(state => state.character);
      const history = useHistory()
      //Use for all the dispatch actions
      const dispatch = useDispatch();
      const { t } = useTranslation();

      function createCharacter() {
            if (person.newName !== null) {



                  dispatch({ type: "NAME", payload: person.newName })
                  dispatch({ type: "NEW_NAME", payload: null })

                  dispatch({ type: "POINT_UPDATE_STATUS", payload: person.newPointUpdateStatus})

                  dispatch({ type: "HEALTH_POINT_STATUS_DEFAULT", payload: person.status.newHealthPointStatusDefault + person.status.healthPointStatusState })
                  dispatch({ type: "MAGIC_POINT_STATUS_DEFAULT", payload: person.status.newMagicPointStatusDefault + person.status.magicPointStatusState })
                  dispatch({ type: "ENERGY_POINT_STATUS_DEFAULT", payload: person.status.newEnergyPointStatusDefault + person.status.energyPointStatusState })
                  dispatch({ type: "ATTACK_POINT_STATUS_DEFAULT", payload: person.status.newAttackPointStatusDefault + person.status.attackPointStatusState })
                  dispatch({ type: "DEFENSE_POINT_STATUS_DEFAULT", payload: person.status.newDefensePointStatusDefault + person.status.defensePointStatusState })
                  dispatch({ type: "SPEED_POINT_STATUS_DEFAULT", payload: person.status.newSpeedPointStatusDefault + person.status.speedPointStatusState })
                  dispatch({ type: "INTELLIGENCE_POINT_STATUS_DEFAULT", payload: person.status.newIntelligencePointStatusDefault + person.status.intelligencePointStatusState })

                  dispatch({ type: "HEALTH_POINT_STATUS_NOW", payload: person.status.newHealthPointStatusDefault + person.status.healthPointStatusState })
                  dispatch({ type: "MAGIC_POINT_STATUS_NOW", payload: person.status.newMagicPointStatusDefault + person.status.magicPointStatusState })
                  dispatch({ type: "ENERGY_POINT_STATUS_NOW", payload: person.status.newEnergyPointStatusDefault + person.status.energyPointStatusState })

                  dispatch({ type: "HEALTH_POINT_STATUS_STATE", payload: person.status.healthPointStatusState - person.status.healthPointStatusState })
                  dispatch({ type: "MAGIC_POINT_STATUS_STATE", payload: person.status.magicPointStatusState - person.status.magicPointStatusState })
                  dispatch({ type: "ENERGY_POINT_STATUS_STATE", payload: person.status.energyPointStatusState - person.status.energyPointStatusState })
                  dispatch({ type: "ATTACK_POINT_STATUS_STATE", payload: person.status.attackPointStatusState - person.status.attackPointStatusState })
                  dispatch({ type: "DEFENSE_POINT_STATUS_STATE", payload: person.status.defensePointStatusState - person.status.defensePointStatusState })
                  dispatch({ type: "SPEED_POINT_STATUS_STATE", payload: person.status.speedPointStatusState - person.status.speedPointStatusState })
                  dispatch({ type: "INTELLIGENCE_POINT_STATUS_STATE", payload: person.status.intelligencePointStatusState - person.status.intelligencePointStatusState })

                  dispatch({ type: "HEALTH_POINT_PROGRESS", payload: ((person.status.newHealthPointStatusDefault + person.status.healthPointStatusState) * 100) / (person.status.newHealthPointStatusDefault + person.status.healthPointStatusState) })
                  dispatch({ type: "MAGIC_POINT_PROGRESS", payload: ((person.status.newMagicPointStatusDefault + person.status.magicPointStatusState) * 100) / (person.status.newMagicPointStatusDefault + person.status.magicPointStatusState) })
                  dispatch({ type: "ENERGY_POINT_PROGRESS", payload: ((person.status.newEnergyPointStatusDefault + person.status.energyPointStatusState) * 100) / (person.status.newEnergyPointStatusDefault + person.status.energyPointStatusState) })

                  setOpenStatus(true)
            } else {
                  setNoti(true)
            }


      }

      const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
                  return;
            }

            setNoti(false);
      };

      const handleStartGame = () => {

            gameDB.character.clear()
            gameDB.character.add({ ...person })

            setOpenStatus(false)

            history.push("/game")
      };


      return (
            <React.Fragment>
                  {/* Start Button Create  Character*/}
                  <BTN variant="contained" disableElevation onClick={createCharacter}>
                        {t("สร้างตัวละคร")}
                  </BTN>
                  {/* End Button Create  Character*/}

                  {/* Start Noti Name */}
                  <Snackbar open={noti} autoHideDuration={6000} onClose={handleClose}>
                        <Alert severity="error" onClose={handleClose}>{t("คุณยังไม่ได้กรอกชื่อ")}</Alert>
                  </Snackbar>
                  {/* End Noti Name */}

                  {/* Start Dialog Status Character*/}
                  <Dialog
                        // style={{
                        //       width: 800
                        // }}
                        fullWidth={true}
                        maxWidth="md"
                        open={openStatus}
                        TransitionComponent={Transition}
                        keepMounted
                        //   onClose={handleClose}
                        aria-labelledby="alert-dialog-status-character-title"
                        aria-describedby="alert-dialog-status-character-description"
                  >
                        <DialogTitle id="alert-dialog-status-character-title"><TextTitle variant="h1" component="h2">{t("สถานะ")}</TextTitle></DialogTitle>
                        <DialogContent>
                              <DialogContentText id="alert-dialog-status-character-description">
                                    <Grid
                                          container
                                          direction="row"
                                          justify="center"
                                          alignItems="center"
                                    >
                                          <Grid item xs={12} sm={4}>
                                                <Grid
                                                      container
                                                      direction="column"
                                                      justify="center"
                                                      alignItems="center"
                                                >
                                                      <Grid item xs={12} >
                                                            <Avatar variant="rounded" style={{
                                                                  width: 180,
                                                                  height: 180,
                                                            }}></Avatar>
                                                      </Grid>
                                                </Grid>
                                          </Grid>
                                          <Grid item xs={12} sm={8}>
                                                <Grid
                                                      container
                                                      direction="column"
                                                      justify="flex-start"
                                                      alignItems="flex-start"
                                                >
                                                      <Grid item xs={12} >
                                                            <TextPoint variant="h1" component="h2">
                                                                  <Span>{t("ชื่อ")}</Span>
                                                                  <Span>{person.name}</Span>
                                                            </TextPoint>
                                                      </Grid>
                                                      <Grid item xs={12} >
                                                            <Grid
                                                                  container
                                                                  direction="row"
                                                                  justify="flex-start"
                                                                  alignItems="flex-start"
                                                            >
                                                                  <Grid item xs={12} sm={6}>
                                                                        <Grid
                                                                              container
                                                                              direction="column"
                                                                              justify="center"
                                                                              alignItems="center"
                                                                        >
                                                                              <Grid item xs={12}>
                                                                                    <TextPoint variant="h1" component="h2">
                                                                                          <Span>{t("สุขภาพ")}</Span>
                                                                                          <Span>{person.status.healthPointStatusDefault}</Span>
                                                                                          <Span>{t("แต้ม")}</Span>
                                                                                    </TextPoint>
                                                                              </Grid>
                                                                              <Grid item xs={12}>
                                                                                    <TextPoint variant="h1" component="h2">
                                                                                          <Span>{t("พลังเวท")}</Span>
                                                                                          <Span>{person.status.magicPointStatusDefault}</Span>
                                                                                          <Span>{t("แต้ม")}</Span>
                                                                                    </TextPoint>
                                                                              </Grid>
                                                                              <Grid item xs={12}>
                                                                                    <TextPoint variant="h1" component="h2">
                                                                                          <Span>{t("พลังงาน")}</Span>
                                                                                          <Span>{person.status.energyPointStatusDefault}</Span>
                                                                                          <Span>{t("แต้ม")}</Span>
                                                                                    </TextPoint>
                                                                              </Grid>
                                                                              <Grid item xs={12}>
                                                                                    <TextPoint variant="h1" component="h2">
                                                                                          <Span>{t("ความเร็ว")}</Span>
                                                                                          <Span>{person.status.speedPointStatusDefault}</Span>
                                                                                          <Span>{t("แต้ม")}</Span>
                                                                                    </TextPoint>
                                                                              </Grid>
                                                                        </Grid>
                                                                  </Grid>
                                                                  <Grid item xs={12} sm={6}>
                                                                        <Grid
                                                                              container
                                                                              direction="column"
                                                                              justify="center"
                                                                              alignItems="center"
                                                                        >
                                                                              <Grid item xs={12}>
                                                                                    <TextPoint variant="h1" component="h2">
                                                                                          <Span>{t("ความฉลาด")}</Span>
                                                                                          <Span>{person.status.intelligencePointStatusDefault}</Span>
                                                                                          <Span>{t("แต้ม")}</Span>
                                                                                    </TextPoint>
                                                                              </Grid>
                                                                              <Grid item xs={12}>
                                                                                    <TextPoint variant="h1" component="h2">
                                                                                          <Span>{t("พลังป้องกัน")}</Span>
                                                                                          <Span>{person.status.defensePointStatusDefault}</Span>
                                                                                          <Span>{t("แต้ม")}</Span>
                                                                                    </TextPoint>
                                                                              </Grid>
                                                                              <Grid item xs={12}>
                                                                                    <TextPoint variant="h1" component="h2">
                                                                                          <Span>{t("พลังโจมตี")}</Span>
                                                                                          <Span>{person.status.attackPointStatusDefault}</Span>
                                                                                          <Span>{t("แต้ม")}</Span>
                                                                                    </TextPoint>
                                                                              </Grid>
                                                                        </Grid>
                                                                  </Grid>
                                                            </Grid>
                                                      </Grid>
                                                </Grid>

                                          </Grid>
                                    </Grid>
                              </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                              <BTN variant="contained" disableElevation onClick={handleStartGame} >
                                    {t("เริ่มเกม")}
                              </BTN>
                        </DialogActions>
                  </Dialog>
                  {/* End Dialog Status Character*/}
            </React.Fragment>
      )
};

// ButtonCreateCharacter.propTypes = {

// }

export default ButtonCreateCharacter;