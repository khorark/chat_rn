/**
 * Created by arkadiy on 11.11.18.
 */
import React, { PureComponent } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Navigation, ComponentEvent } from 'react-native-navigation'
import LinearGradient from 'react-native-linear-gradient'

import { colors } from '../../constants/colors'
import styles from './LoginScreenStyles'
import Indicator from '../../components/Indicator/Indicator'
import LogoIcon from '../../assets/images/LogoIcon'
import NumPad from '../../components/NumPad/NumPad'
import { getValueFromStorage } from '../../helpers/storageHelper'
import { NAVIGATOR_NAME } from '../../constants/navigator'
import { changeScreen } from '../../helpers/navigatorHelper'
import { PIN } from '../../constants/storage'

interface ILoginScreenState {
    pass: string
}

export default class LoginScreen extends PureComponent<ComponentEvent, ILoginScreenState> {
    public state = {
        pass: '',
    }

    private readonly SCREEN_FOR_CHANGE = `${NAVIGATOR_NAME}ChatScreen`
    private readonly SCREEN_FOR_CHECKED = `${NAVIGATOR_NAME}CheckedScreen`
    private readonly LENGTH_PASS_FOR_CHECK = 4

    public componentDidUpdate() {
        if (this.state.pass.length === this.LENGTH_PASS_FOR_CHECK) {
            this.showCheckedModal()
            this.setState({ pass: '' })
        }
    }

    public render() {
        const { pass } = this.state

        return (
            <View style={styles.mainContainer}>
                <LinearGradient colors={[colors.turquoiseapprox, colors.iceCold]} style={styles.lineGDContainer}>
                    <View style={styles.imageContainer}>
                        <LogoIcon width={235} height={69} fill={colors.white} />
                    </View>
                    <View style={styles.centerContainer}>
                        <Indicator length={pass.length} />
                        <NumPad handlePressKey={this.handlePressKey} />
                    </View>
                </LinearGradient>
            </View>
        )
    }

    private handlePressKey = (value: string) =>
        this.setState(state => ({ pass: value === 'del' ? state.pass.slice(0, -1) : state.pass + value }))

    private checkPin = async (pass: string) => {
        const pin = await getValueFromStorage(PIN)
        return pin === pass
    }

    private changeScrenIfChecked = () => changeScreen(this.props.componentId, this.SCREEN_FOR_CHANGE)

    private showCheckedModal = async () => {
        const checked = await this.checkPin(this.state.pass)

        await Navigation.showModal({
            stack: {
                children: [
                    {
                        component: {
                            name: this.SCREEN_FOR_CHECKED,
                            passProps: {
                                checked,
                                acceptCallback: this.changeScrenIfChecked,
                            },
                        },
                    },
                ],
            },
        })
    }
}
