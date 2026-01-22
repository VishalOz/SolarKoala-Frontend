import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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
        <View className="flex-1" style={{ backgroundColor }}>
            {/* Top Section Container - Takes remaining space */}
            <View className="flex-1 justify-between" style={{ paddingTop: insets.top }}>
                {/* Header */}
                <View className="flex-row justify-between items-center px-6 pt-4 z-10">
                    {/* Spacer for centering */}
                    <View className="w-10" />

                    <View className="bg-white/50 px-4 py-2 rounded-full border border-black/5">
                        <Text className="text-sm font-semibold text-[#11181C]">
                            Step {toWord(stepCurrent)}
                        </Text>
                    </View>

                    <TouchableOpacity onPress={onClose} className="p-2 w-10 items-end">
                        <Ionicons name="close" size={24} color="#687076" />
                    </TouchableOpacity>
                </View>

                {/* Image Area */}
                <View className="flex-1 justify-center items-center pb-5">
                    <View 
                        className="w-[75%] aspect-[0.7] max-h-[85%] rounded-[30px] justify-center items-center bg-white/30"
                        style={{ borderColor: accentColor, borderWidth: 1 }}
                    >
                        {imagePlaceholder ? (
                            <Image source={imagePlaceholder} className="w-full h-full" contentFit="contain" />
                        ) : (
                            <Ionicons name="image-outline" size={64} color={accentColor} />
                        )}
                    </View>
                </View>
            </View>

            {/* Bottom Section - Auto height based on content + safe area */}
            <View 
                className="bg-white rounded-t-[32px] pt-10 px-6 justify-end"
                style={{ paddingBottom: Math.max(insets.bottom, 20) }}
            >
                <View className="items-center gap-6">
                    {/* Progress Bar */}
                    <View className="w-[100px] h-1 rounded-sm overflow-hidden">
                        <View className="flex-1 rounded-sm bg-[#E0E0E0]">
                            <View
                                className="h-full rounded-sm"
                                style={{
                                    width: `${(stepCurrent / stepTotal) * 100}%`,
                                    backgroundColor: accentColor
                                }}
                            />
                        </View>
                    </View>

                    {/* Text Content */}
                    <View className="min-h-[80px] justify-center items-center w-full">
                        <Text 
                            className="text-[22px] font-semibold text-[#11181C] text-center leading-[30px]" 
                            numberOfLines={3} 
                            adjustsFontSizeToFit
                        >
                            {description}
                        </Text>
                    </View>

                    {/* Next Button */}
                    <TouchableOpacity
                        className="w-16 h-16 rounded-full justify-center items-center mt-2.5 bg-[#E8E8E8]"
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
