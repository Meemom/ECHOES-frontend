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
  FlatList,
  TextInput, 
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Defs, RadialGradient, Stop, Circle } from 'react-native-svg';
import { useRouter } from 'expo-router';
import { BackgroundGlow } from './HomePage';
import { MaterialIcons } from '@expo/vector-icons';

export default function SearchPage() {
    return (
        <View style={{ flex: 1, backgroundColor: '#121212' }}>
            <BackgroundGlow colors={['#D062FF', '#44E7E7', 'white']}/>
            <ScrollView style={styles.container}>
                <View style={[styles.searchBar, { flexDirection: 'row', margin: 30 }]}>
                    <TouchableOpacity>
                        <MaterialIcons name="search" size={20} color="black" style={{ marginRight: 10 }}/>
                    </TouchableOpacity>
                    <TextInput 
                    placeholder='Search up a song!'/>
                </View>


            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    searchBar: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: '80%',
        alignSelf: 'center',
        padding: 10,
    }

});