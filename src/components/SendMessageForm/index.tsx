import React, { useState } from 'react';
import { TextInput, View, KeyboardAvoidingView, Alert, Keyboard } from 'react-native'
import { api } from '../../services/api';
import { COLORS } from '../../theme';
import { Button } from '../Button';
import { styles } from './styles';


export function SendMessageForm() {
    const [message, setMessage] = useState('')
    const [sendingMessage, setSendingMessage ] = useState(false)

    async function handleMessageSubmit() {
        const messageFormatted = message.trim()
        
        
        if(messageFormatted.length > 0) {

            
            setSendingMessage(true)
            await api.post('/messages', { message: messageFormatted })
            setMessage('')
            Keyboard.dismiss()
            
            setSendingMessage(false)

        }else {
            Alert.alert('Escreva a mensagem para enviar.')
        }
    }

    return (
        <KeyboardAvoidingView 
        contentContainerStyle={styles.container} 
        behavior='position' enabled 
        >
            <View>
                <TextInput 
                style={styles.input}
                keyboardAppearance="dark"
                placeholder="Qual sua expectativa para o evento?"
                placeholderTextColor={COLORS.GRAY_PRIMARY}
                multiline
                maxLength={140}
                value={message}
                onChangeText={setMessage}
                editable={!sendingMessage}
                />
                <Button
                title="ENVIAR MENSAGEM"
                backgroundColor={COLORS.PINK}
                color={COLORS.WHITE}
                isLoading={sendingMessage}
                onPress={handleMessageSubmit}
                
                />
            </View>
        </KeyboardAvoidingView>
    )
}