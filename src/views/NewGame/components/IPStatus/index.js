import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
      useSelector,
      useDispatch
} from 'react-redux';
import { styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Grid from '@material-ui/core/Grid';

const TextPoint = styled(Typography)({
      fontFamily: `myFirstFont`,
      // textTransform: `capitalize`,
      width: `200px`,
      fontSize: `23px`,
      // border: `solid 1px #00000030`

})

const InputPoint = styled(Input)({
      fontFamily: `myFirstFont`,
      // textTransform: `capitalize`,
      width: `200px`,
      fontSize: `23px`,

      '@global': {
            // You should target [class*="MuiButton-root"] instead if you nest themes.
            '.MuiInputLabel-root': {
                  fontFamily: 'myFirstFont',
                  // fontSize: `23px`,
            },
            '.MuiInputBase-input': {
                  fontFamily: 'myFirstFont',
                  fontSize: `23px`,
                  textAlign: 'center',
            }
      }
      // border: `solid 1px #00000030`

})


function Span(props) {

      return <span style={{
            padding: 5
      }}>{props.children}</span>
}

Span.propTypes = {
      children: PropTypes.node.isRequired,
}

function UpdateIntelligencePoint() {
      const person = useSelector(state => state.character);
      const dispatch = useDispatch();
      // const { t } = useTranslation();

      const handleClickUpdateIntelligencePointAdd = () => {

            if (person.newPointUpdateStatus === 0) {
                  dispatch({ type: "NEW_POINT_UPDATE_STATUS", payload: 0 })
            } else {
                  dispatch({ type: "NEW_POINT_UPDATE_STATUS", payload: person.newPointUpdateStatus - 1 })
                  dispatch({ type: "INTELLIGENCE_POINT_STATUS_STATE", payload: person.status.intelligencePointStatusState + 1 })
            }

      };

      const handleClickUpdateIntelligencePointRemove = () => {
            if (person.status.intelligencePointStatusState === 0) {
                  dispatch({ type: "INTELLIGENCE_POINT_STATUS_STATE", payload: 0 })
            } else {
                  dispatch({ type: "NEW_POINT_UPDATE_STATUS", payload: person.newPointUpdateStatus + 1 })
                  dispatch({ type: "INTELLIGENCE_POINT_STATUS_STATE", payload: person.status.intelligencePointStatusState - 1 })
            }

      };

      const handleMouseDownRemove = (event) => {
            event.preventDefault();
      };

      const handleMouseDownAdd = (event) => {
            event.preventDefault();
      };

      return (<FormControl >
            {/* <InputLabel htmlFor="speed-point">{t("????????????")}</InputLabel> */}
            <InputPoint
                  id="speed-point"
                  value={person.status.intelligencePointStatusState}
                  startAdornment={
                        <InputAdornment position="start">
                              <IconButton
                                    aria-label="toggle remove visibility"
                                    onClick={handleClickUpdateIntelligencePointRemove}
                                    onMouseDown={handleMouseDownRemove}
                                    edge="start"
                              >
                                    <RemoveIcon />
                              </IconButton>
                        </InputAdornment>
                  }
                  endAdornment={
                        <InputAdornment position="end">
                              <IconButton
                                    aria-label="toggle add visibility"
                                    onClick={handleClickUpdateIntelligencePointAdd}
                                    onMouseDown={handleMouseDownAdd}
                                    edge="end"
                              >
                                    <AddIcon />
                              </IconButton>
                        </InputAdornment>
                  }
            />
      </FormControl>)
}

function IPStatus() {
      const person = useSelector(state => state.character);

      //Use for all the dispatch actions
      const { t } = useTranslation();

      return (
            <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={3}
            >
                  <Grid item xs={12} sm={6}>
                        <TextPoint variant="h1" component="h2">
                              <Span>{t("????????????????????????")}</Span>
                              <Span>{person.status.newIntelligencePointStatusDefault}</Span>
                              <Span>{t("????????????")}</Span>
                        </TextPoint>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                        <UpdateIntelligencePoint></UpdateIntelligencePoint>
                  </Grid>

            </Grid>)
};

// IPStatus.propTypes = {

// }

export default IPStatus;