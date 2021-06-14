import React from 'react';
// import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';
import './style.css'

function InputName() {
      const input = useSelector(state => state.inputName);

      //Use for all the dispatch actions
      const dispatch = useDispatch();
      const { t } = useTranslation();

      const updateName = (event) => {
            dispatch({ type: "CHANGE_NAME", payload: event.target.value })
      }



      return (<input id="input-name" onChange={updateName} value={input.name} placeholder={t("ชื่อตัวละคร")} />)
};

// InputName.propTypes = {

// }

export default InputName;