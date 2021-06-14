import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonContinuePlay from './components/ButtonContinuePlay';
import ButtonNewGame from './components/ButtonNewGame';
import ButtonLoadSave from './components/ButtonLoadSave';
import ButtonSetting from './components/ButtonSetting';
import { useSelector, useDispatch } from 'react-redux';
import gameDB from '../../db/game';

function HomeView(props) {
      const person = useSelector(state => state.character);

      const dispatch = useDispatch();

      React.useEffect(() => {
            const character = gameDB.character.where("name").startsWithIgnoreCase('').toArray();

            character.then(data => {
                  console.log(data);
                  if (data.length === 0) {
                        dispatch({ type: "NAME", payload: null })
                  } else {
                        dispatch({ type: "NAME", payload: data[0].name });
                        dispatch({ type: "NEW_NAME", payload: data[0].newName });
                        dispatch({ type: "POINT_UPDATE_STATUS", payload: data[0].pointUpdateStatus });
                        dispatch({ type: "HEALTH_POINT_PROGRESS", payload: data[0].healthPointProgress });
                        dispatch({ type: "MAGIC_POINT_PROGRESS", payload: data[0].magicPointProgress });
                        dispatch({ type: "ENERGY_POINT_PROGRESS", payload: data[0].energyPointProgress });

                        //   status
                        dispatch({ type: "HEALTH_POINT_STATUS_STATE", payload: data[0].status.healthPointStatusState });
                        dispatch({ type: "HEALTH_POINT_STATUS_NOW", payload: data[0].status.healthPointStatusNow });
                        dispatch({ type: "HEALTH_POINT_STATUS_DEFAULT", payload: data[0].status.healthPointStatusDefault });

                        dispatch({ type: "MAGIC_POINT_STATUS_STATE", payload: data[0].status.magicPointStatusState });
                        dispatch({ type: "MAGIC_POINT_STATUS_NOW", payload: data[0].status.magicPointStatusNow });
                        dispatch({ type: "MAGIC_POINT_STATUS_DEFAULT", payload: data[0].status.magicPointStatusDefault });

                        dispatch({ type: "ENERGY_POINT_STATUS_STATE", payload: data[0].status.energyPointStatusState });
                        dispatch({ type: "ENERGY_POINT_STATUS_NOW", payload: data[0].status.energyPointStatusNow });
                        dispatch({ type: "ENERGY_POINT_STATUS_DEFAULT", payload: data[0].status.energyPointStatusDefault });

                        dispatch({ type: "ATTACK_POINT_STATUS_STATE", payload: data[0].status.attackPointStatusState });
                        dispatch({ type: "ATTACK_POINT_STATUS_DEFAULT", payload: data[0].status.attackPointStatusDefault });

                        dispatch({ type: "DEFENSE_POINT_STATUS_STATE", payload: data[0].status.defensePointStatusState });
                        dispatch({ type: "DEFENSE_POINT_STATUS_DEFAULT", payload: data[0].status.defensePointStatusDefault });

                        dispatch({ type: "SPEED_POINT_STATUS_STATE", payload: data[0].status.speedPointStatusState });
                        dispatch({ type: "SPEED_POINT_STATUS_DEFAULT", payload: data[0].status.speedPointStatusDefault });

                        dispatch({ type: "INTELLIGENCE_POINT_STATUS_STATE", payload: data[0].status.intelligencePointStatusState });
                        dispatch({ type: "INTELLIGENCE_POINT_STATUS_DEFAULT", payload: data[0].status.intelligencePointStatusDefault });
                  }

            })


      }, [dispatch]);


      return (
            <React.Fragment>
                  <CssBaseline />
                  <Container fixed style={{
                        height: `100%`,
                        width: `100%`,
                        display: `flex`,
                        justifyContent: `center`,
                  }
                  }>
                        <div style={{
                              display: `flex`,
                              alignItems: `center`,
                              justifyContent: `center`,
                        }}>

                              <Grid
                                    container
                                    direction="column"
                                    justify="center"
                                    alignItems="center"
                              // style={{
                              //       height: `100%`
                              // }}
                              >
                                    {person.name !== null ? (<React.Fragment>
                                          <Grid item xs={12}>
                                                <ButtonContinuePlay />
                                          </Grid>
                                    </React.Fragment>) : (<React.Fragment></React.Fragment>)}
                                    <Grid item xs={12}>
                                          <ButtonNewGame />
                                    </Grid>
                                    <Grid item xs={12}>
                                          <ButtonLoadSave />
                                    </Grid>
                                    <Grid item xs={12}>
                                          <ButtonSetting />
                                    </Grid>
                              </Grid>
                        </div>
                  </Container>
            </React.Fragment>
      )
}

export default HomeView;