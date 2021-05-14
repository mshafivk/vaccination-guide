import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';
import React from 'react';

const uiTheme = {
  palette: {
    primaryColor: "#c51162",
    secondaryColor:"",
    canvasColor: "#fff"

  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};

const ThemeContainer = (props) => {
    return (
        <ThemeContext.Provider value={getTheme(uiTheme)}>
          {props.children}
        </ThemeContext.Provider>
      )

}

export default  ThemeContainer;