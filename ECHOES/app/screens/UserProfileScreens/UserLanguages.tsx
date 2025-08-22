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

// fake language data
const languageData = [
    {language: 'English', songs: 1003},
    {language: 'Spanish', songs: 667},
    {language: 'Portugese', songs: 18},
    {language: 'Japanese', songs: 22},
    {language: 'Mandarin', songs: 108},
];

// total songs
const totalSongs = languageData.reduce((sum, item) => sum + item.songs, 0);

function LanguageCard({ data }) {
    const percentage = (data.songs / totalSongs) * 100;

    return (
        <View style={styles.card}>
            <ThemedText style={styles.label}>
                {data.language} ({data.songs})
            </ThemedText>
            <View style={styles.barBackground}>
                <View style={[styles.barFill, { width: `${percentage}%` }]} />
            </View>
        </View>
    );
}

export default function UserLanguages() {
    return (
        <ScrollView style={[styles.container, { backgroundColor: '#101010' }]}> 
            <ThemedText style={styles.headerTitle}>Top Languages in Your Library</ThemedText>

            <View>
                {languageData.map((item, index) => (
                    <LanguageCard key={index} data={item}/>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    headerTitle: {
        fontFamily: 'InterBold',
        fontSize: 30,
        color: 'white',
        lineHeight: 30,
        padding: 20, 
      },
    card: {
        marginBottom: 15,
    },
    label: {
        marginBottom: 5,
        fontFamily: 'interBold',
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        padding: 15, 
    },
    barBackground: {
        height: 20,
        backgroundColor: '#eee',
        borderRadius: 10,
        overflow: 'hidden',
        width: '90%',
        alignSelf: 'center',
    },
    barFill: {
        height: '100%',
        backgroundColor: '#5B60F6',
        borderRadius: 10,
    },
});