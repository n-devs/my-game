import React from 'react';
// import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const Input = styled(TextField)({
      fontFamily: `myFirstFont`,
      // textTransform: `capitalize`,
      width: `200px`,
      fontSize: `23px`,
      // border: `solid 1px #00000030`
      '@global': {
            // You should target [class*="MuiButton-root"] instead if you nest themes.
            '.MuiInputLabel-root': {
                  fontFamily: 'myFirstFont',
                  // fontSize: `23px`,
            },
            '.MuiInputBase-input': {
                  fontFamily: 'myFirstFont',
                  fontSize: `20px`,
            }
      }
})


function InputName() {
      const person = useSelector(state => state.character);

      //Use for all the dispatch actions
      const dispatch = useDispatch();
      const { t } = useTranslation();

      const updateName = (event) => {
            dispatch({ type: "NEW_NAME", payload: event.target.value })
      }



      return (<Input variant="outlined" onChange={updateName} value={person.newName} label={t("ชื่อตัวละคร")} />)
};

// InputName.propTypes = {

// }

export default InputName;