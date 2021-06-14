import React from 'react';
// import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import mapIcon from './icons/map.svg'
import IconButton from '@material-ui/core/IconButton';
import MapIcon from '@material-ui/icons/Map';
import './header.css';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const BTN = styled(Button)({
      fontFamily: `myFirstFont`,
      textTransform: `capitalize`,
      width: `100%`,
      fontSize: `23px`,
      // border: `solid 0px #00000030`
      color: '#fff'
});

function ButtonMap(props) {
      return (<BTN disableElevation >
            <MapIcon fontSize="large" />
      </BTN>)
}

function Header() {
      // const input = useSelector(state => state.Header);

      //Use for all the dispatch actions
      // const dispatch = useDispatch();
      const { t } = useTranslation();

      // const updateName = (event) => {
      //       dispatch({ type: "CHANGE_NAME", payload: event.target.value })
      // }



      return (<header className="header-box header-bg">
            <ButtonMap></ButtonMap>
      </header>)
};

// Header.propTypes = {

// }

export default Header;