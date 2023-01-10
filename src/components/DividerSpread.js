import React from 'react';
import { Box, Row } from 'native-base';

export const DividerSpread = ({ amount = 20, ...rest }) => {
    return (
        <Row w={'100%'} h={'1px'} {...rest}>
            {Array.apply(null, Array(amount)).map((item, index) => (
                <Box flex={1} mx={'2px'} bg={'black'} key={index} />
            ))}
        </Row>
    );
};
