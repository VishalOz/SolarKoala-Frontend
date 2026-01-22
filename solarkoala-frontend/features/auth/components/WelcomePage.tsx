/* 
Author: Dinura Sasmitha
Created: 2026-01-19 DS0043 Welcome Screen UI
Description: Implements the Welcome Screen Layout and navigation logic 
Last Update: 2026-01- DS0043 Initial implementation
*/

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';

export const WelcomePage = () => {
  const router = useRouter();
  const handleGetStarted = () => {
    // Navigate to sign up or onboarding
    router.push('/tour');
  };

  const handleSignIn = () => {
    // Navigate to sign in
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Welcome Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.welcomeText}>Welcome to Solar </Text>
          <View style={styles.koalaBox}>
            <Text style={styles.koalaText}>Koala</Text>
          </View>
        </View>

        {/* Tagline */}
        <Text style={styles.tagline}>
          Your intelligent solar partner for a brighter tomorrow
        </Text>

        {/* Logo */}
        <Image
          source={require('../../../public/assets/Logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Get Started Button */}
        <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>

        {/* Sign In Link */}
        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>Already have an account? </Text>
          <TouchableOpacity onPress={handleSignIn}>
            <Text style={styles.signInLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '600',
    color: '#11181C',
  },
  koalaBox: {
    backgroundColor: '#000',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 50,
  },
  koalaText: {
    fontSize: 28,
    fontWeight: '600',
    color: '#fff',
  },
  tagline: {
    fontSize: 16,
    color: '#687076',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 48,
    borderWidth: 2,
    borderColor: '#fff',
  },
  getStartedButton: {
    backgroundColor: 'black',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
  },
  getStartedText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  signInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signInText: {
    fontSize: 14,
    color: '#687076',
  },
  signInLink: {
    fontSize: 14,
    color: '#0a7ea4',
    fontWeight: '600',
  },
});

export default WelcomePage;
