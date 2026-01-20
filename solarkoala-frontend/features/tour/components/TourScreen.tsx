import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

interface TourScreenProps {
    title: string;
    description: React.ReactNode;
    stepCurrent: number;
    stepTotal: number;
    backgroundColor: string;
    accentColor: string;
    imagePlaceholder?: string;
    onNext: () => void;
    onClose: () => void;
    isLastStep?: boolean;
}

export const TourScreen: React.FC<TourScreenProps> = ({
    title,
    description,
    stepCurrent,
    stepTotal,
    backgroundColor,
    accentColor,
    imagePlaceholder,
    onNext,
    onClose,
    isLastStep = false,
}) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { backgroundColor }]}>

            {/* Top Section Container - Takes remaining space */}
            <View style={[styles.topContainer, { paddingTop: insets.top }]}>
                {/* Header */}
                <View style={styles.header}>
                    {/* Spacer for centering */}
                    <View style={styles.headerSpacer} />

                    <View style={styles.stepBadge}>
                        <Text style={styles.stepText}>Step {toWord(stepCurrent)}</Text>
                    </View>

                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Ionicons name="close" size={24} color="#687076" />
                    </TouchableOpacity>
                </View>

                {/* Image Area */}
                <View style={styles.imageContainer}>
                    <View style={[styles.placeholderBox, { borderColor: accentColor }]}>
                        {imagePlaceholder ? (
                            <Image source={imagePlaceholder} style={styles.image} contentFit="contain" />
                        ) : (
                            <Ionicons name="image-outline" size={64} color={accentColor} />
                        )}
                    </View>
                </View>
            </View>

            {/* Bottom Section - Auto height based on content + safe area */}
            <View style={[styles.bottomSection, { paddingBottom: Math.max(insets.bottom, 20) }]}>
                <View style={styles.bottomContent}>
                    {/* Progress Bar */}
                    <View style={styles.progressContainer}>
                        <View style={[styles.progressBar, { backgroundColor: '#E0E0E0' }]}>
                            <View
                                style={[
                                    styles.progressFill,
                                    {
                                        width: `${(stepCurrent / stepTotal) * 100}%`,
                                        backgroundColor: accentColor
                                    }
                                ]}
                            />
                        </View>
                    </View>

                    {/* Text Content */}
                    <View style={styles.textContainer}>
                        <Text style={styles.description} numberOfLines={3} adjustsFontSizeToFit>
                            {description}
                        </Text>
                    </View>

                    {/* Next Button */}
                    <TouchableOpacity
                        style={[styles.nextButton, { backgroundColor: '#E8E8E8' }]}
                        onPress={onNext}
                    >
                        <Ionicons name="arrow-forward" size={24} color="#11181C" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

// Helper to convert number to word (basic implementation for 1-5)
const toWord = (num: number) => {
    const words = ['One', 'Two', 'Three', 'Four', 'Five'];
    return words[num - 1] || num.toString();
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        flex: 1, // Consumes all available space above the bottom section
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 16, // Additional top padding inside safe area
        zIndex: 10,
    },
    headerSpacer: {
        width: 40,
    },
    stepBadge: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.05)',
    },
    stepText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#11181C',
        fontFamily: Platform.select({ ios: 'System', default: 'Roboto' }),
    },
    closeButton: {
        padding: 8,
        width: 40,
        alignItems: 'flex-end',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
    },
    placeholderBox: {
        width: '75%',
        aspectRatio: 0.7,
        maxHeight: '85%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.3)',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    bottomSection: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingTop: 40,
        paddingHorizontal: 24,
        justifyContent: 'flex-end',
    },
    bottomContent: {
        alignItems: 'center',
        gap: 24,
    },
    progressContainer: {
        width: 100,
        height: 4,
        borderRadius: 2,
        overflow: 'hidden',
    },
    progressBar: {
        flex: 1,
        borderRadius: 2,
    },
    progressFill: {
        height: '100%',
        borderRadius: 2,
    },
    textContainer: {
        minHeight: 80,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    description: {
        fontSize: 22,
        fontWeight: '600',
        color: '#11181C',
        textAlign: 'center',
        lineHeight: 30,
    },
    nextButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
});
