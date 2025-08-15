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
import { BackgroundGlow, Section} from '@/app/(tabs)/HomePage';
import { MaterialIcons } from '@expo/vector-icons';

const recommendedSongs = [
    {id: '1', title: 'Other People', image: require('@/assets/images/CLAIRO-VIBES.png')},
    {id: '2', title: 'PASSENGER', image: require('@/assets/images/Magdalena-Bay.png')},
    {id: '3', title: 'Carolina', image: require('@/assets/images/GYM.png')},
]

export default function TrySomethingNew() {
    
    return (
        <View style={{ flex: 1, backgroundColor: '#121212' }}>
        <BackgroundGlow colors={['#5B60F6', '#BD7CBE', '#BBBE7C']}/>
            <ScrollView style={styles.container}>
                <ThemedText style={styles.headerTitle}>Try Something New</ThemedText>

                <Section data={recommendedSongs}/> 

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 }, 
    headerTitle: {
        fontSize: 24,
        fontFamily: 'interBold',
        color: 'white',
        padding: 30,
      },
});