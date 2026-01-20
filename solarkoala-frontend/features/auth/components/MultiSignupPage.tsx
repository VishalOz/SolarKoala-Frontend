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

const { width } = Dimensions.get('window');

export const MultiSignupPage = () => {
    const handleGoogleSignup = () => {
        console.log('Google Signup stubbed');
    };

    const handleEmailSignup = () => {
        console.log('Navigate to Email Signup stubbed');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.menuButton}>
                    <Ionicons name="menu-outline" size={28} color="#11181C" />
                </TouchableOpacity>
            </View>

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
                    <Text style={styles.titleTextBold}>Smarter days</Text>
                    <View style={styles.underline} />
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
                                source={{ uri: 'https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png' }}
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
                            <Ionicons name="mail-outline" size={22} color="#11181C" style={styles.socialIcon} />
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
        backgroundColor: '#fff',
    },
    header: {
        paddingHorizontal: 24,
        paddingTop: 10,
        alignItems: 'flex-end',
    },
    menuButton: {
        padding: 8,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 32,
        justifyContent: 'center',
    },
    koalaImage: {
        width: width * 0.7,
        height: width * 0.7,
        marginBottom: 40,
    },
    titleSection: {
        alignItems: 'center',
        marginBottom: 20,
    },
    titleText: {
        fontSize: 32,
        fontWeight: '700',
        color: '#1A1C1E',
    },
    titleTextBold: {
        fontSize: 32,
        fontWeight: '800',
        color: '#1A1C1E',
    },
    underline: {
        height: 3,
        backgroundColor: '#1A1C1E',
        width: '100%',
        marginTop: 4,
    },
    description: {
        fontSize: 18,
        color: '#1A1C1E',
        textAlign: 'center',
        marginBottom: 48,
        lineHeight: 26,
    },
    buttonContainer: {
        width: '100%',
        gap: 16,
    },
    socialButton: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E1E3E5',
        borderRadius: 12,
        paddingVertical: 16,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialIcon: {
        width: 22,
        height: 22,
        marginRight: 12,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1A1C1E',
    },
});

export default MultiSignupPage;
