import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  StatusBar,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Button,
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { LinearGradient } from 'expo-linear-gradient';


export default function WelcomePage() {
    const onClick = () => {

    };

    return (
        <LinearGradient
        colors={['#121212', '#3B3B9C']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ flex: 1 }}
        >
        <View>
            <ScrollView>
                <View style={{ flex: 1, alignItems: 'center', paddingTop: 60 }}>
                    <Image source={require('@/assets/images/chandler.jpg')} style={styles.memeImage} />
                    <View style={{ width: 350, alignItems: 'center' }}>
                        <ThemedText style={styles.headerTitle}>Today's Vibe</ThemedText>
                        <TouchableOpacity style={styles.button} onPress={onClick}>
                            <ThemedText style={styles.buttonText}>Continue Listening</ThemedText>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1},
    headerTitle: {
        fontSize: 50,
        fontFamily: 'InterBold',
        color: 'white',
        padding: 20,
    },
    memeImage: {
        width: 350,
        height: 350,
        borderRadius: 20, 
        marginTop: 40,
        marginBottom: 10, 
        alignSelf: 'center',
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 6,
        fontFamily: 'InterBold',
        marginTop: 10,
        width: '60%',
    },
    buttonText: {
        fontFamily: 'InterBold',
        fontSize: 20,
        textAlign: 'center',
        color: '#121212',
    }
});