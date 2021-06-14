import React from 'react';
// import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useHistory } from "react-router-dom";
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const BTN = styled(Button)({
      fontFamily: `myFirstFont`,
      textTransform: `capitalize`,
      width: `200px`,
      fontSize: `23px`,
      border: `solid 1px #00000030`
});

function ButtonLoadSave() {
      const { t } = useTranslation();
      const history = useHistory()

      function toLink() {
            history.push("/load-save")
      }

      return (<BTN variant="contained" disableElevation onClick={toLink}>
            {t("โหลดเซฟ")}
      </BTN>)
};

// ButtonLoadSave.propTypes = {

// }

export default ButtonLoadSave;