/* 
Author: Dinura Sasmitha
Created: 2026-01-20 - DS0043 - Multi Signup Screen UI
Description: Implements the Multi-Signup selection screen with Google and Email options.
Last Update: SolarKoala - 2026-01-20 - DS0043 - Initial creation
*/

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export const MultiSignupPage = () => {
    const handleGoogleSignup = () => {
        console.log('Google Signup stubbed');
    };

    const handleEmailSignup = () => {
        console.log('Navigate to Email Signup stubbed');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                {/* Koala Image */}
                <Image
                    source={require('../../../public/assets/kolala1.jpg')}
                    style={styles.koalaImage}
                    resizeMode="contain"
                />

                {/* Title Section */}
                <View style={styles.titleSection}>
                    <Text style={styles.titleText}>A step Closer to</Text>
                    <View style={styles.boldTitleContainer}>
                        <Text style={styles.titleTextBold}>Smarter days</Text>
                        <View style={styles.underline} />
                    </View>
                </View>

                {/* Description */}
                <Text style={styles.description}>
                    Create an account & take a step toward self care
                </Text>

                {/* Action Buttons */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.socialButton}
                        onPress={handleGoogleSignup}
                        activeOpacity={0.7}
                    >
                        <View style={styles.buttonContent}>
                            <Image
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png' }}
                                style={styles.socialIcon}
                            />
                            <Text style={styles.buttonText}>Sign up with Google</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.socialButton}
                        onPress={handleEmailSignup}
                        activeOpacity={0.7}
                    >
                        <View style={styles.buttonContent}>
                            <Ionicons name="mail-outline" size={22} color="#000" style={styles.socialIcon} />
                            <Text style={styles.buttonText}>Sign up with Email</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF9F6',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingBottom: 40,
        justifyContent: 'center', // Center content vertically now that header is gone
    },
    koalaImage: {
        width: width * 0.75,
        height: height * 0.35,
        marginBottom: 40,
    },
    titleSection: {
        alignItems: 'center',
        marginBottom: 16,
    },
    titleText: {
        fontSize: 34,
        fontWeight: '800',
        color: '#0D1E2D',
        letterSpacing: -0.5,
    },
    boldTitleContainer: {
        alignItems: 'center',
    },
    titleTextBold: {
        fontSize: 34,
        fontWeight: '800',
        color: '#0D1E2D',
        letterSpacing: -0.5,
    },
    underline: {
        height: 2,
        backgroundColor: '#0D1E2D',
        width: '100%',
        marginTop: 4,
    },
    description: {
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
        marginBottom: 48,
        lineHeight: 26,
        paddingHorizontal: 20,
    },
    buttonContainer: {
        width: '100%',
        gap: 16,
    },
    socialButton: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E8EAED',
        borderRadius: 12,
        height: 64,
        justifyContent: 'center',
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.03,
        shadowRadius: 10,
        elevation: 1,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialIcon: {
        width: 24,
        height: 24,
        marginRight: 16,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000',
    },
});

export default MultiSignupPage;
