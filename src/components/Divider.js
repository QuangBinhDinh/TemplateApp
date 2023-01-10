import React from 'react';
import { Box, Text } from 'native-base';
import { lightColors } from '../styles/colors';

export const Divider = ({ width = '92%', ...rest }) => (
    <Box h={'1px'} bg={lightColors.DIVIDER_COLOR} w={width} alignSelf={'center'} {...rest}>

    </Box>
)