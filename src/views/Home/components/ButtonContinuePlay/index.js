import React from 'react';
// import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';

const BTN = styled(Button)({
      fontFamily: `myFirstFont`,
      textTransform: `capitalize`,
      width: `200px`,
      fontSize: `23px`,
      border: `solid 1px #00000030`
})

function ButtonContinuePlay() {
      const { t } = useTranslation();
      const history = useHistory()

      function toLink() {
            history.push("/game")
      }

      return (
            <BTN variant="contained" disableElevation onClick={toLink}>
                  {t("เล่นต่อ")}
            </BTN>)
};

// ButtonContinuePlay.propTypes = {

// }

export default ButtonContinuePlay;