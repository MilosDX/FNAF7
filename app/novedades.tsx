
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Constants from 'expo-constants';

export default function NovedadesScreen() {
    const router = useRouter();
    const [selectedType, setSelectedType] = useState();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={24} color="#92acc9" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Registrar Novedad</Text>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardAvoidingView}
            >
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.form}>
                        <View style={styles.fieldGroup}>
                            <Text style={styles.label}>Tipo de Novedad</Text>
                            <View style={styles.pickerContainer}>
                                <Picker
                                    selectedValue={selectedType}
                                    onValueChange={(itemValue) => setSelectedType(itemValue)}
                                    style={styles.picker}
                                    dropdownIconColor="#92acc9"
                                >
                                    <Picker.Item label="Seleccionar tipo" value="null" color="#9ca3af"/>
                                    <Picker.Item label="Actividad Sospechosa" value="sospechosa" />
                                    <Picker.Item label="Puerta Abierta" value="puerta" />
                                    <Picker.Item label="Falla de Equipo" value="equipo" />
                                    <Picker.Item label="Accidente" value="accidente" />
                                    <Picker.Item label="Vandalismo" value="vandalismo" />
                                    <Picker.Item label="Intrusión" value="intrusion" />
                                </Picker>
                            </View>
                        </View>

                        <View style={styles.fieldGroup}>
                            <Text style={styles.label}>Ubicación Automática (GPS)</Text>
                            <View style={styles.locationInputContainer}>
                                <MaterialIcons name="location-on" size={24} color="#92acc9" style={styles.locationIcon} />
                                <TextInput
                                    style={styles.locationInput}
                                    value="Lat: 19.432, Lon: -99.133"
                                    editable={false}
                                />
                            </View>
                        </View>

                        <View style={styles.fieldGroup}>
                            <Text style={styles.label}>Descripción de la Novedad</Text>
                            <TextInput
                                style={styles.textArea}
                                multiline
                                placeholder="Sea claro y detallado. Incluya personas, objetos y acciones observadas."
                                placeholderTextColor="#9ca3af"
                            />
                        </View>

                        <TouchableOpacity style={styles.attachButton}>
                            <MaterialIcons name="photo-camera" size={20} color="#e5e7eb" />
                            <Text style={styles.attachButtonText}>Adjuntar Foto/Video</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.sendButton} onPress={() => router.back()}>
                    <Text style={styles.sendButtonText}>Enviar Reporte</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101922',
        paddingTop: Constants.statusBarHeight,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#233548',
    },
    backButton: {
        position: 'absolute',
        left: 16,
        top: 16,
        zIndex: 1,
        padding: 5
    },
    headerTitle: {
        flex: 1,
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    scrollContent: {
        padding: 16,
        paddingBottom: 100, // Space for footer button
    },
    form: {
        gap: 24,
    },
    fieldGroup: {
        gap: 8,
    },
    label: {
        color: '#92acc9',
        fontSize: 14,
        fontWeight: '500',
    },
    pickerContainer: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#233548',
        backgroundColor: '#192633',
        height: 56,
        justifyContent: 'center',
    },
    picker: {
        color: '#ffffff',
    },
    locationInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(35, 53, 72, 0.5)',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#233548',
        height: 56,
    },
    locationIcon: {
        paddingLeft: 12,
    },
    locationInput: {
        flex: 1,
        color: '#92acc9',
        paddingHorizontal: 12,
        fontSize: 16,
    },
    textArea: {
        backgroundColor: '#192633',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#233548',
        minHeight: 144,
        color: '#ffffff',
        padding: 12,
        fontSize: 16,
        textAlignVertical: 'top',
    },
    attachButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        borderRadius: 8,
        backgroundColor: 'rgba(56, 73, 92, 0.5)',
        gap: 8,
    },
    attachButtonText: {
        color: '#e5e7eb',
        fontSize: 16,
        fontWeight: 'bold',
    },
    footer: {
        padding: 16,
        paddingBottom: 24, // Safe area padding
        borderTopWidth: 1,
        borderTopColor: '#233548',
        backgroundColor: '#101922',
    },
    sendButton: {
        height: 56,
        borderRadius: 8,
        backgroundColor: '#137cec',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sendButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
