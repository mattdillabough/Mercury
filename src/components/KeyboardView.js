import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

function KeyboardView({ children, ...otherProps }) {
    return (
        // User's keyboard will no longer cover input fields such as on Login/Register screens.
        // Input text fields will automatically move up upon active keyboard
        <KeyboardAvoidingView behavior={(Platform.OS === 'ios') ? "padding" : null} {...otherProps} >
            {children}
        </KeyboardAvoidingView>
    );
}

export default KeyboardView;