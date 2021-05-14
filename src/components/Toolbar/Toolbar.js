import React from 'react';

import { Toolbar } from 'react-native-material-ui';

const toolbar = (props) => (
    <Toolbar
        leftElement="menu"
        centerElement="Vaccination Guide" 
        rightElement={{
            menu: {
                icon: "more-vert",
                labels: ["About Us", "Locate Clinic"]
            }
        }}
        onRightElementPress={ (label) => { console.log(label) }}
      />
)

export default toolbar;