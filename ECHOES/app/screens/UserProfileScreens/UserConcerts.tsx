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

export default function UserConcerts() {
  const scrollRef = useRef(null);

  // concert card 
  function concertCard({ data }) {

  }

  return (
      <View style={{ flex: 1, backgroundColor: '#101010', position: 'relative' }}>
      <View
        style={[
          styles.backgroundShape,
          {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }
        ]}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
        <ThemedText style={styles.headerTitle}>
          @{userInfo.username} has been to{' '}
          <ThemedText style={[styles.headerTitle, { color: '#FF9EDF' }]}>{userInfo.concerts}</ThemedText>{' '}
          Concerts
        </ThemedText>
        {/* floating arrow */}
        <TouchableOpacity
                onPress={() => {
                  console.log('arrow pressed');
                  if (scrollRef.current) {
                    scrollRef.current.scrollToEnd({ animated: true });
                  }
                }}
                style={styles.arrowButton}
              >
                <MaterialIcons name="arrow-downward" size={20} color="black" />
          </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: 'InterBold',
    fontSize: 30,
    color: 'white',
    lineHeight: 30,
  },
  backgroundShape: {
    backgroundColor: '#5B60F6',
    width: '100%',
    height: '75%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    height: 700,
  },
  arrowButton: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: '#FF9EDF',
    padding: 10,
    borderRadius: 24,
    zIndex: 9999,       
    elevation: 12,      
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
},
});