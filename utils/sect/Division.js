import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Division({ type, status, average }) {
    return (
        <View style={styles.division}>
            <Text>el icono va aquí</Text>
            <View style={styles.flex}>
                <Text style={styles.text}>{type}</Text>
                <Text style={styles.text2}>{status}</Text>
                <Text style={styles.text3}>{average}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    division: {
        color: "black",
    },
    flex: {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        gap: "10px",
    },
    text: {
        color: "#C8C8C8",
        fontSize: 10
    },
    text2: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: 500
    },
    text3: {
        color: "#FFF"
    }
});
