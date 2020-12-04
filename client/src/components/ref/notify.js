import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, BackHandler, View, ActivityIndicator, Keyboard, Alert } from 'react-native';
import { Text, Button } from 'react-native-elements'
import { metric, colors, font, spacing } from '../../theme';
import { lotties } from '../../assets'
import LottieView from 'lottie-react-native';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash'
export const RefNotify = {
    push: ({ message, time, color }) => { }
}


const Notify = ({ }) => {
    const [listNotify, setListNotify] = useState([])
    const [notify, setNotify] = useState(undefined)
    useEffect(() => {
        // //handle keyboard, timeout
        // if (isLoading) {
        //     Keyboard.dismiss()
        //     timerOut = setTimeout(() => setIsLoading(false), TIME_OUT)
        // } else {
        //     timerOut && clearTimeout(timerOut)
        // }
        // //handle back
        // const backAction = () => {
        //     return isLoading
        // };
        // backHandle = BackHandler.addEventListener("hardwareBackPress", backAction)
        // return () => backHandle && backHandle.remove();
        // setTimeout(() => {
        //     console.log("asdasd", _.drop(listNotify))
        //     if (listNotify.length !== 0) setListNotify(_.drop(listNotify))

        // }, 1000);
    }, [listNotify])

    RefNotify.push = ({ message, time, color }) => {
        // let id = uuidv4()
        // setListNotify(_.concat(listNotify, { id, message, color }))
        // setTimeout(() => {
        //     console.log("RefNotify", id)
        //     setListNotify(_.filter(listNotify, value => value.id !== id))
        // }, time ? time : 1000);
        setNotify({ message, time, color })
        setTimeout(() => {
            setNotify(undefined)
        }, time ? time : 2000);
    }

    // if (listNotify.length === 0) return null
    if (!notify) return null
    return <View
        pointerEvents='none'
        style={styles.ctn}
    >
        {/* <View
            style={styles.ctnNoti}>
            {listNotify.map(value => (
                <View key={value.id} style={styles.ctnRowNoti}>
                    <Text style={styles.txtMessage}>{value.message}</Text>
                </View>
            ))}
        </View> */}
        <View style={styles.ctnNoti}>
            <View style={[styles.ctnRowNoti, { backgroundColor: notify.color ? notify.color : colors.Green }]}>
                <Text style={styles.txtMessage}>{notify.message}</Text>
            </View>
        </View>
    </View >
}

const styles = StyleSheet.create({
    ctn: {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        zIndex: 1000,
        position: 'absolute',
        // backgroundColor: '#000000B3',
        alignItems: 'center'
    },
    ctnNoti: {
        flexDirection: 'column',
        marginTop: metric.marginTopScreen + metric.headerHeight

    },
    ctnRowNoti: {
        paddingVertical: spacing[2],
        paddingHorizontal: spacing[4],
        backgroundColor: colors.Green,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: spacing[3],
        borderRadius: metric.radius
    },
    txtMessage: {
        color: colors.White
    }
})

export default Notify