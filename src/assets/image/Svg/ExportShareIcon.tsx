import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgComponent = (props: SvgProps) => (
    <Svg
        fill="#2196f3"
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        style={{
            enableBackground: 'new 0 0 612.002 612.002',
        }}
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M122.88 35.289 87.945 70.578v-17.58c-22.091-4.577-39.542.468-52.796 17.271C37.45 35.711 61.056 19.034 87.944 17.93L87.945 0l34.935 35.289z"
        />
        <Path d="M6.908 23.746h35.626A70.073 70.073 0 0 0 30.27 37.561H13.815v62.943h80.603V85.831l13.814-13.579v35.159a6.908 6.908 0 0 1-6.907 6.907H6.908A6.908 6.908 0 0 1 0 107.411V30.653a6.907 6.907 0 0 1 6.908-6.907z" />
    </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
