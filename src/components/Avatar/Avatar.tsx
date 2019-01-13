import React, { memo } from 'react'
import { Image } from 'react-native'

interface IProps {
    id?: number
    size: number
}

const Avatar = ({ id = 0, size }: IProps) => (
    <Image
        source={require('../../assets/images/ava/ava.png')}
        style={{ width: size, height: size, borderRadius: size / 2 }}
    />
)

export default memo(Avatar)
