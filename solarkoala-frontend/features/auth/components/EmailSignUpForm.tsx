/* Author: Chasindu Hashara
Created: 2026-01-21 CH1738 Email Signup Form
Description: Implements the Email Signup Form Layout and client-side validation logic 
Last Update: SolarKoala - 2026-01-21 - CH1738 - Initial implementation
*/

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
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
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.content}>
          
          {/* Header Section */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton}>
               <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.title}>Sign up</Text>
            
            <View style={styles.signInContainer}>
              <Text style={styles.signInText}>Already have an account? </Text>
              <TouchableOpacity onPress={handleSignInNavigate}>
                <Text style={styles.signInLink}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Form Fields */}
          <View style={styles.form}>
            
            {/* Email Input */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="#666"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

            {/* Password Input */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
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
            {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

            {/* Confirm Password Input */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
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
            {errors.confirmPassword ? <Text style={styles.errorText}>{errors.confirmPassword}</Text> : null}

            {/* Terms Checkbox */}
            <View style={styles.termsRow}>
              <TouchableOpacity 
                style={[styles.checkbox, isTermsAccepted && styles.checkboxChecked]}
                onPress={() => setIsTermsAccepted(!isTermsAccepted)}
              >
                {isTermsAccepted && <Ionicons name="checkmark" size={16} color="white" />}
              </TouchableOpacity>
              <Text style={styles.termsText}>
                I agree to terms & conditions
              </Text>
            </View>
            
            {/* Legal Disclaimer */}
            <Text style={styles.disclaimerText}>
              By continuing, I agree to SolarKoala's <Text style={styles.linkTextSmall}>Terms of Service</Text>. 
              I also consent to the use of my app usage data... <Text style={styles.linkTextSmall}>Privacy Policy</Text>.
            </Text>

            {/* Submit Button */}
            <TouchableOpacity 
              style={[styles.submitButton, !isFormValid && styles.buttonDisabled]}
              onPress={handleSignUp}
              disabled={!isFormValid}
            >
              <Text style={styles.submitButtonText}>Continue</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  header: {
    marginTop: 20,
    marginBottom: 30,
  },
  backButton: {
    marginBottom: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#11181C',
    marginBottom: 8,
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
    color: '#008080', // Using SolarKoala Teal
    fontWeight: '600',
  },
  form: {
    gap: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#11181C',
  },
  errorText: {
    color: '#D32F2F',
    fontSize: 12,
    marginTop: -12,
    marginLeft: 4,
  },
  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#008080',
    borderRadius: 6,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#008080',
  },
  termsText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#11181C',
  },
  disclaimerText: {
    fontSize: 12,
    color: '#687076',
    lineHeight: 18,
    marginBottom: 20,
  },
  linkTextSmall: {
    color: '#008080',
    fontWeight: '600',
  },
  submitButton: {
    backgroundColor: '#008080', // SolarKoala Teal
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: '#A0D1D1',
    opacity: 0.7,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default EmailSignUpForm;