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
    {language: 'English', songs; 1003},
    {language: 'Spanish', songs: 667},
    {language: 'Portugese', songs: 18},
    {language: 'Japanese', songs: 22},
    {language: 'Mandarin', songs: 108},
];

function LanguageCard({ data }) {

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
      },
    languageBar: {
        backgroundColor: 'white',
        borderRadius: 20, 
    }
});