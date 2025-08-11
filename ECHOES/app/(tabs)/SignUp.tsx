import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import Svg, { Defs, RadialGradient, Stop, Circle } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

export default function SignUp() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#101010' }}>
    {/* sound waves */}
    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginTop: 160 }}>
        <Image 
        source={require('@/assets/images/soundwaves.png')}
        style={{ opacity: 1.6 }}
        resizeMode="contain"
        position="absolute"
        />
    </View>

    {/* radial gradient overlay */}
    <Svg height={height} width={width} style={StyleSheet.absoluteFill}>
        <Defs>
        <RadialGradient id="grad1" cx="50%" cy="50%" r="50%">
            <Stop offset="0%" stopColor="#7175FF" stopOpacity={0.6} />
            <Stop offset="100%" stopColor="#101010" stopOpacity={1} />
        </RadialGradient>
        </Defs>
        <Circle
        cx={width / 2}
        cy={height / 2.5}
        r={width / 1.5} 
        fill="url(#grad1)"
        />
    </Svg>

    {/* text & button */}
    <View style={{ alignItems: 'flex-start', padding: 15, marginBottom: 150 }}>
        <ThemedText style={styles.title}>Discover Your Echo</ThemedText>
        <TouchableOpacity style={styles.signUpButton}>
        <ThemedText style={styles.signUpText}>Sign Up</ThemedText>
        </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'InterSemiBold',
        fontSize: 50,
        color: 'white',
        lineHeight: 50,
        alignSelf: 'center',
        marginLeft: 10,
        marginBottom: 15,
    },
    signUpButton: {
        backgroundColor: 'white',
        borderRadius: 30,
        alignItems: 'center',
        padding: 15,
        width: '40%',
        marginLeft: 10,
    },
    signUpText: {
        fontFamily: 'InterSemiBold',
        fontSize: 20,
        color: 'black',
    }
});