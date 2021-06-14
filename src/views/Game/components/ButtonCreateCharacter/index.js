import React from 'react';
// import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import gameDB from '../../../../db/game';
import { useHistory } from "react-router-dom";
import './style.css'

function ButtonCreateCharacter() {
      const input = useSelector(state => state.inputName);
      const history = useHistory()
      //Use for all the dispatch actions
      const dispatch = useDispatch();
      const { t } = useTranslation();

      function createCharacter() {
            gameDB.character.clear()
            gameDB.character.add({ name: input.name })
            dispatch({ type: "NAME", payload: input.name })
            history.push("/game")

      }



      return (<button id="btn-create-character" onClick={createCharacter}>{t("สร้างตัวละคร")}</button>)
};

// ButtonCreateCharacter.propTypes = {

// }

export default ButtonCreateCharacter;