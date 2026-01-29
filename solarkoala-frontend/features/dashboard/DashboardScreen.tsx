/*
Author: Vishal Sudasinghe
Created: 2026-01-23 - SK005 - Dashboard screen UI
Description: Dashboard screen with all the navigation options
Last Update: Vishal Sudasinghe - 2026-01-23 - SK005 - Initial creation of dashboard screen
*/

/*import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function DashboardScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('home');
  const [timeUnit, setTimeUnit] = useState('Daily');
  const [energyUnit, setEnergyUnit] = useState('kWh');
  const username = 'User Name';

  const handleNavigation = (screen: string) => {
    setActiveTab(screen);
    console.log(`Navigating to ${screen}`);
  };

  // Mock chart data for weekly consumption
  const weeklyData = [
    { day: 'Mon', usage: 60, lastWeek: 40 },
    { day: 'Tue', usage: 40, lastWeek: 50 },
    { day: 'Wed', usage: 70, lastWeek: 35 },
    { day: 'Thu', usage: 50, lastWeek: 45 },
    { day: 'Fri', usage: 55, lastWeek: 60 },
    { day: 'Sat', usage: 75, lastWeek: 50 },
    { day: 'Sun', usage: 65, lastWeek: 30 },
  ];

  return (
    <View className="flex-1 dark:bg-slate-900 bg-white">
      <ScrollView 
        scrollEnabled={true}
        className="flex-1"
        showsVerticalScrollIndicator={false}
      >
        {/* Header with Username and Notification */
/*<View className="px-6 pt-16 pb-8 flex-row items-center justify-between">
  <View className="flex-row items-center gap-4">
    <Image
      source={require('@/assets/images/icon.png')}
      className="h-12 w-12 rounded-full"
      resizeMode="cover"
    />
    <View>
      <Text className="text-xs text-gray-500 dark:text-gray-400">Welcome back.</Text>
      <Text className="text-2xl font-bold text-gray-900 dark:text-white">{username}</Text>
    </View>
  </View>
  <TouchableOpacity>
    <Ionicons name="notifications" size={24} color="#0ea5e9" />
  </TouchableOpacity>
</View>

{/* Main Energy Display Card */
/*<View className="px-6 pb-8">
  <View className="bg-gray-50 dark:bg-slate-800 rounded-3xl p-6 shadow-sm items-center justify-center py-10">
    <View className="flex-row items-center justify-between w-full mb-6">
      <Text className="text-xl font-semibold text-gray-400">3.8</Text>
      <View className="items-center">
        <Text className="text-5xl font-bold text-cyan-500">7.4</Text>
        <Text className="text-sm text-gray-500 mt-1">Solar</Text>
      </View>
      <Text className="text-xl font-semibold text-gray-400">7.2</Text>
    </View>

    {/* Time and Energy Unit Selectors */
/*<View className="flex-row items-center justify-between w-full mt-6 gap-4">
  <TouchableOpacity 
    onPress={() => setTimeUnit('Daily')}
    className={`flex-1 py-2 px-4 rounded-full border ${timeUnit === 'Daily' ? 'bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600' : 'border-gray-300 dark:border-slate-600'}`}
  >
    <Text className={`text-center text-sm font-medium ${timeUnit === 'Daily' ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>
      Daily
    </Text>
  </TouchableOpacity>
  
  {/* Solar Panel Icon */
/*<Image
  source={require('@/public/assets/solar.png')}
  className="h-16 w-16"
  resizeMode="contain"
/>

<TouchableOpacity 
  onPress={() => setEnergyUnit('kWh')}
  className={`flex-1 py-2 px-4 rounded-full border ${energyUnit === 'kWh' ? 'bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600' : 'border-gray-300 dark:border-slate-600'}`}
>
  <Text className={`text-center text-sm font-medium ${energyUnit === 'kWh' ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>
    kWh
  </Text>
</TouchableOpacity>
</View>
</View>
</View>

{/* Battery Status Card */
/*/<View className="mx-6 mb-8">
  <View className="rounded-3xl bg-gray-50 dark:bg-slate-800 p-6 shadow-sm">
    <View className="flex-row items-center justify-between">
      <View>
        <Text className="text-sm font-medium text-gray-600 dark:text-gray-400">Battery Status</Text>
        <Text className="text-xs text-gray-500 dark:text-gray-500 mt-1">Normal</Text>
      </View>
      <View className="flex-row items-center gap-3">
        <View className="h-10 w-6 rounded-sm border-2 border-green-500 p-1 justify-center">
          <View className="flex-1 bg-green-500 rounded-xs" style={{ height: '85%' }} />
        </View>
        <View>
          <Text className="text-lg font-bold text-gray-900 dark:text-white">85%</Text>
          <Text className="text-xs text-green-500 font-semibold">Charging</Text>
        </View>
      </View>
    </View>
  </View>
</View>

{/* Electricity Consumed Pattern */
/*<View className="mx-6 mb-8">
  <View className="flex-row items-center justify-between mb-4">
    <View>
      <Text className="text-sm font-semibold text-gray-900 dark:text-white">Electricity Consumed Pattern</Text>
      <Text className="text-xs text-gray-500 dark:text-gray-400 mt-1">This Week +5%</Text>
    </View>
    <TouchableOpacity className="border border-gray-300 dark:border-slate-600 rounded-full px-4 py-2">
      <Text className="text-sm font-medium text-gray-700 dark:text-gray-300">Weekly</Text>
    </TouchableOpacity>
  </View>

  {/* Bar Chart */
/*<View className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6">
  <View className="flex-row items-flex-end justify-between h-40 gap-1">
    {weeklyData.map((item, index) => (
      <View key={index} className="flex-1 items-center gap-2">
        {/* Current week bar (teal) */
/*<View className="w-full flex-row items-flex-end justify-center gap-px h-full">
  <View 
    className="flex-1 bg-cyan-500 rounded-t-sm"
    style={{ height: `${(item.usage / 75) * 100}%` }}
  />
  {/* Last week bar (orange) */
/*<View
  className="flex-1 bg-orange-300 rounded-t-sm"
  style={{ height: `${(item.lastWeek / 75) * 100}%` }}
/>
</View>
</View>
))}
</View>

{/* Day labels */
/*<View className="flex-row items-center justify-between mt-4">
  {weeklyData.map((item, index) => (
    <Text key={index} className="text-xs text-gray-500 dark:text-gray-400 flex-1 text-center">
      {item.day}
    </Text>
  ))}
</View>
</View>
</View>

{/* Spacing for bottom navigation */
/*<View className="h-24" />
</ScrollView>

{/* Bottom Navigation Bar */
/*<View className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-slate-900">
  <View className="flex-row items-center justify-around px-4 py-4">
    {/* Home */
/*<TouchableOpacity
  onPress={() => handleNavigation('home')}
  className="flex items-center justify-center"
>
  <MaterialCommunityIcons
    name="star-four-points"
    size={24}
    color={activeTab === 'home' ? '#0ea5e9' : '#9ca3af'}
  />
</TouchableOpacity>

{/* Wallet/Savings */
/*<TouchableOpacity
  onPress={() => handleNavigation('wallet')}
  className="flex items-center justify-center"
>
  <MaterialCommunityIcons
    name="wallet-plus"
    size={24}
    color={activeTab === 'wallet' ? '#0ea5e9' : '#9ca3af'}
  />
</TouchableOpacity>

{/* Profile */
/*<TouchableOpacity
  onPress={() => handleNavigation('profile')}
  className="flex items-center justify-center"
>
  <Ionicons
    name="person-circle"
    size={28}
    color={activeTab === 'profile' ? '#0ea5e9' : '#9ca3af'}
  />
</TouchableOpacity>

{/* Analytics */
/*<TouchableOpacity
  onPress={() => handleNavigation('analytics')}
  className="flex items-center justify-center"
>
  <MaterialCommunityIcons
    name="chart-line"
    size={24}
    color={activeTab === 'analytics' ? '#0ea5e9' : '#9ca3af'}
  />
</TouchableOpacity>

{/* Menu */
/*<TouchableOpacity
  onPress={() => handleNavigation('menu')}
  className="flex items-center justify-center"
>
  <Ionicons
    name="menu"
    size={24}
    color={activeTab === 'menu' ? '#0ea5e9' : '#9ca3af'}
  />
</TouchableOpacity>
</View>
</View>
</View>
);
}
*/