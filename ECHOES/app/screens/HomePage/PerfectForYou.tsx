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
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Defs, RadialGradient, Stop, Circle } from 'react-native-svg';
import { BackgroundGlow } from '@/app/(tabs)/HomePage';

export default function PerfectForYou() {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#121212' }}>
            <BackgroundGlow colors={['#5B60F6', '#BD7CBE', '#BBBE7C']}/>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    
});