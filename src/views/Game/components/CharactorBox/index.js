import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { withStyles, styled } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import {
      useSelector,
      useDispatch
} from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';

const TextPoint = styled(Typography)({
      fontFamily: `myFirstFont`,
      textTransform: `capitalize`,
      width: `200px`,
      fontSize: `23px`,
      // border: `solid 1px #00000030`

});

const TextCoin = styled(Typography)({
      fontFamily: `myFirstFont`,
      textTransform: `capitalize`,
      // width: `200px`,
      fontSize: `small`,
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
            height: 10,
            borderRadius: 0,
            width: 200
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
            height: 10,
            borderRadius: 0,
            width: 200
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
            height: 10,
            borderRadius: 0,
            width: 200
      },
      colorPrimary: {
            backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
      },
      bar: {
            borderRadius: 0,
            backgroundColor: '#ffb122',
      },
}))(LinearProgress);

function Span(props) {

      return <span style={{
            ...props.style,
            padding: 5
      }}>{props.children}</span>
}

Span.propTypes = {
      children: PropTypes.node.isRequired,
      style: PropTypes.object
}

function CharacterBox(props) {
      const person = useSelector(state => state.character);
      const { t } = useTranslation();
      const dispatch = useDispatch();

      function openDetailStatusBox() {
            dispatch({ type: "OPEN_DETAIL_STATUS_SYSTEM_EVENT", payload: true })
      }

      function openBaggetBox() {
            dispatch({ type: "OPEN_BAGGET_SYSTEM_EVENT", payload: true })
      }

      return (
            <React.Fragment>
                  <div style={{
                        position: 'fixed',
                        top: '10px',
                        left: '10px',
                  }}>
                        <Paper style={{
                              // height: 100,
                              width: 300,
                        }}>
                              <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="flex-start"
                                    spacing={2}
                              >
                                    <Grid item xs={12} sm={3} style={{
                                          justifyContent: 'center',
                                          display: 'flex',
                                    }} >
                                          <Avatar variant="rounded" >
                                          </Avatar>
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
                                                                  <BTN variant="contained" disableElevation onClick={openDetailStatusBox}>
                                                                        {t("สถานะ")}
                                                                  </BTN>
                                                            </Grid>
                                                      </Grid>

                                                </Grid>
                                                <Grid item xs={12} >
                                                      <HealthPointProgress variant="determinate" value={person.healthPointProgress} />
                                                </Grid>
                                                <Grid item xs={12} >
                                                      <MagicPointProgress variant="determinate" value={person.magicPointProgress} />
                                                </Grid>
                                                <Grid item xs={12} >
                                                      <EnergyPointProgress variant="determinate" value={person.energyPointProgress} />
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
                                                                  <TextCoin>{t("เงินทั้งหมด")} {person.coin} {t("coin")}</TextCoin>
                                                            </Grid>
                                                            <Grid item xs={12} sm={6} style={{
                                                                  display: 'flex',
                                                                  justifyContent: 'flex-end',
                                                                  // padding: '0px 16px',
                                                            }}>
                                                                  <BTN variant="contained" disableElevation style={{
                                                                            margin: '0px 20px'
                                                                  }} 
                                                                  onClick={openBaggetBox}
                                                                  >
                                                                        {t("กระเป๋า")}
                                                                  </BTN>
                                                            </Grid>
                                                      </Grid>
                                                </Grid>

                                          </Grid>
                                    </Grid>
                              </Grid>
                        </Paper>
                  </div>
            </React.Fragment>
      )
}

// CharacterBox.propTypes = {

// }

export default CharacterBox

