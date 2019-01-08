import React from 'react'
import Svg, { Path } from 'react-native-svg'

const SuccessIcon = props => (
    <Svg width={52} height={52} viewBox="0 0 52 52" {...props}>
        <Path
            fill="#FFF"
            d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm14.495 17.329l-16 18a1.997 1.997 0 0 1-2.745.233l-10-8a2 2 0 0 1 2.499-3.124l8.517 6.813L37.505 14.67a2.001 2.001 0 0 1 2.99 2.659z"
        />
    </Svg>
)

export default SuccessIcon
