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
  FlatList
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { userInfo, popularPlaylists } from '@/data/userData';

export default function UserSettings() {
    const router = useRouter();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity
            style={styles.closeButton}
            onPress={() => router.push('/(tabs)/UserProfile')}
            >
                <MaterialIcons name="close" size={30} color="white"/>
            </TouchableOpacity>

            <View style={styles.section}>
                <ThemedText style={styles.headerTitle}>Account Settings</ThemedText>
                <View style={styles.settingsCard}>
                    <TouchableOpacity>
                        <ThemedText style={styles.settingsText}>Account & Profile</ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ThemedText style={styles.settingsText}>Music & Review Preferences</ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ThemedText style={styles.settingsText}>Payments & Subscriptions</ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ThemedText style={styles.settingsText}>Notifications & Privacy</ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ThemedText style={styles.settingsText}>App Preferences</ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ThemedText style={styles.settingsText}>Help & Support</ThemedText>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: '#101010'
    },
    closeButton: {
        position: 'absolute',
        padding: 30, 
    },
    section: {
        marginTop: 50,
        padding: 10,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'InterBold',
        padding: 20,
    },
    settingsCard: {
        backgroundColor: '#1F1F1F',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10, 
        margin: 10, 
        width: '90%',
    },
    settingsText: {
        fontFamily: 'InterMedium',
        fontSize: 20,
        color: 'white',
        padding: 10,
    },
});