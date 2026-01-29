/* Author: Chasindu Hashara
Created: 2026-01-21 CH1738 Email Signup Form
Description: Implements the Email Signup Form Layout and client-side validation logic 
Last Update: SolarKoala - 2026-01-21 - CH1738 - Initial implementation
*/

/*import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const EmailSignUpForm = () => {
  // --- STATE MANAGEMENT ---
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // --- VALIDATION LOGIC ---
  useEffect(() => {
    validateForm();
  }, [email, password, confirmPassword, isTermsAccepted]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = { email: '', password: '', confirmPassword: '' };

    // Valid email format
    if (email.length > 0 && !validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Password Length
    if (password.length > 0 && password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    // Password match
    if (confirmPassword.length > 0 && password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    // Required fields
    if (!email || !password || !confirmPassword || !isTermsAccepted) {
      isValid = false;
    }

    setErrors(newErrors);
    setIsFormValid(isValid);
  };

  // --- HANDLERS ---
  const handleSignUp = () => {
    if (isFormValid) {
      console.log('Form Submitted:', { email, password });
      // Add navigation or API logic here
    }
  };

  const handleSignInNavigate = () => {
    // Navigate to sign in
    console.log('Navigate to Sign In');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 24, paddingBottom: 40 }}>
          
          {/* Header Section */
/*<View className="mt-5 mb-7">
  <TouchableOpacity className="mb-5 w-10 h-10 justify-center items-center border border-[#E0E0E0] rounded-lg">
     <Ionicons name="arrow-back" size={24} color="#000" />
  </TouchableOpacity>
  <Text className="text-[28px] font-bold text-[#11181C] mb-2">Sign up</Text>
  
  <View className="flex-row items-center">
    <Text className="text-sm text-[#687076]">Already have an account? </Text>
    <TouchableOpacity onPress={handleSignInNavigate}>
      <Text className="text-sm text-[#008080] font-semibold">Sign in</Text>
    </TouchableOpacity>
  </View>
</View>

{/* Form Fields */
/*<View className="gap-4">
  
  {/* Email Input */
/*<View className="flex-row items-center bg-[#F9F9F9] rounded-xl px-4 h-14 border border-[#EEEEEE]">
  <TextInput
    className="flex-1 text-base text-[#11181C]"
    placeholder="Email Address"
    placeholderTextColor="#666"
    value={email}
    onChangeText={setEmail}
    keyboardType="email-address"
    autoCapitalize="none"
  />
</View>
{errors.email ? <Text className="text-[#D32F2F] text-xs -mt-3 ml-1">{errors.email}</Text> : null}

{/* Password Input */
/*<View className="flex-row items-center bg-[#F9F9F9] rounded-xl px-4 h-14 border border-[#EEEEEE]">
  <TextInput
    className="flex-1 text-base text-[#11181C]"
    placeholder="Password"
    placeholderTextColor="#666"
    value={password}
    onChangeText={setPassword}
    secureTextEntry={!showPassword}
  />
  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
    <Ionicons 
      name={showPassword ? "eye-off" : "eye"} 
      size={20} 
      color="#008080" 
    />
  </TouchableOpacity>
</View>
{errors.password ? <Text className="text-[#D32F2F] text-xs -mt-3 ml-1">{errors.password}</Text> : null}

{/* Confirm Password Input */
/*<View className="flex-row items-center bg-[#F9F9F9] rounded-xl px-4 h-14 border border-[#EEEEEE]">
  <TextInput
    className="flex-1 text-base text-[#11181C]"
    placeholder="Confirm Password"
    placeholderTextColor="#666"
    value={confirmPassword}
    onChangeText={setConfirmPassword}
    secureTextEntry={!showConfirmPassword}
  />
  <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
    <Ionicons 
      name={showConfirmPassword ? "eye-off" : "eye"} 
      size={20} 
      color="#008080" 
    />
  </TouchableOpacity>
</View>
{errors.confirmPassword ? <Text className="text-[#D32F2F] text-xs -mt-3 ml-1">{errors.confirmPassword}</Text> : null}

{/* Terms Checkbox */
/*<View className="flex-row items-center mt-2 mb-2">
  <TouchableOpacity 
    className={`w-6 h-6 border-2 border-[#008080] rounded-md mr-3 justify-center items-center ${isTermsAccepted ? 'bg-[#008080]' : ''}`}
    onPress={() => setIsTermsAccepted(!isTermsAccepted)}
  >
    {isTermsAccepted && <Ionicons name="checkmark" size={16} color="white" />}
  </TouchableOpacity>
  <Text className="text-sm font-semibold text-[#11181C]">
    I agree to terms & conditions
  </Text>
</View>
 
{/* Legal Disclaimer */
/*<Text className="text-xs text-[#687076] leading-[18px] mb-5">
  By continuing, I agree to SolarKoala's <Text className="text-[#008080] font-semibold">Terms of Service</Text>. 
  I also consent to the use of my app usage data... <Text className="text-[#008080] font-semibold">Privacy Policy</Text>.
</Text>

{/* Submit Button */
/*<TouchableOpacity
  className={`py-4 rounded-xl items-center mt-2.5 ${isFormValid ? 'bg-[#008080]' : 'bg-[#A0D1D1] opacity-70'}`}
  onPress={handleSignUp}
  disabled={!isFormValid}
>
  <Text className="text-white text-lg font-semibold">Continue</Text>
</TouchableOpacity>

</View>
</ScrollView>
</KeyboardAvoidingView>
</SafeAreaView>
);
};

export default EmailSignUpForm;
*/