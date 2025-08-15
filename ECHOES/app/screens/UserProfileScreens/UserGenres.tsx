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
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { MaterialIcons } from '@expo/vector-icons';
import { userInfo, popularPlaylists } from '@/data/userData';
import { userConcerts } from '@/data/concertData';

function genreCard() { 
    return (

    ); 
}

export default function UserGenres() {
    return (
        <ScrollView style={[styles.container, { backgroundColor: '#101010' }]}>
            <View style={{ padding: 20 }}>
                <ThemedText style={styles.headerTitle}>{userInfo.username} has listened to
                    <ThemedText style={[styles.headerTitle, { color: '#FF9EDF' }]}>{' ' + userInfo.genres + ' '}</ThemedText>
                Genres:</ThemedText>
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
});