//UI
import React, { useState } from 'react';
import { View } from 'react-native';
import * as yup from 'yup';
//Image

//Component

//API + Redux

const intitalInput = {
    field1: '',
    field2: '',
};
const inputSchema = yup.object().shape({
    field1: yup.string().required(),
    field2: yup.string().required(),
});
const intitalInput2 = {
    field3: '',
    field4: '',
};
const inputSchema2 = yup.object().shape({
    field3: yup.string().required(),
    field4: yup.string().required(),
});
const NotificationScreen = () => {
    const [cardDetails, setCard] = useState('');
    return <View style={{ flex: 1, backgroundColor: 'white' }}></View>;
};

export default NotificationScreen;
