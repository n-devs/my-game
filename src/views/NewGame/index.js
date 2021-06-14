import React from 'react';
import InputName from './components/InputName';
import ButtonCreateCharacter from './components/ButtonCreateCharacter';
import PointStatus from './components/PointStatus';
import HPStatus from './components/HPStatus';
import MPStatus from './components/MPStatus';
import EPStatus from './components/EPStatus';
import APStatus from './components/APStatus';
import DPStatus from './components/DPStatus';
import SPStatus from './components/SPStatus';
import IPStatus from './components/IPStatus';
import Grid from '@material-ui/core/Grid';
// import { useSelector, useDispatch } from 'react-redux';
// import { useHistory } from "react-router-dom";

function NewGameView() {
      // const person = useSelector(state => state.character);
      // const history = useHistory()
      // React.useEffect(() => {
      //       if (person.name !== null) {
      //             history.push("/game")
      //       }
      // });

      return (
            <div className="containner">
                  <div className="layout">
                        <div className="layout-btn">
                              <InputName />
                        </div>
                        <Grid
                              container
                              direction="column"
                              justify="center"
                              alignItems="center"
                              spacing={3}
                        >
                              <Grid item xs={12}>
                                    <PointStatus></PointStatus>
                              </Grid>
                              <Grid item xs={12}>
                                    <HPStatus></HPStatus>
                              </Grid>
                              <Grid item xs={12}>
                                    <MPStatus></MPStatus>
                              </Grid>
                              <Grid item xs={12}>
                                    <EPStatus></EPStatus>
                              </Grid>
                              <Grid item xs={12}>
                                    <APStatus></APStatus>
                              </Grid>
                              <Grid item xs={12}>
                                    <DPStatus></DPStatus>
                              </Grid>
                              <Grid item xs={12}>
                                    <SPStatus></SPStatus>
                              </Grid>
                              <Grid item xs={12}>
                                    <IPStatus></IPStatus>
                              </Grid>
                        </Grid>
                        <div className="layout-btn">
                              <ButtonCreateCharacter />
                        </div>

                  </div>
            </div>)
}

export default NewGameView;