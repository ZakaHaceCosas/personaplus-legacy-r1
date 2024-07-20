import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Section({ label, slabel, icon, children }) {
    return (
        <View style={styles.section}>
            <View style={styles.flex}>
                <Text style={styles.icon}>{icon}</Text>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.slabel}>{slabel}</Text>
            </View>
            <View>
                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        backgroundColor: "#1A1A1A80",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 5,
        display: "flex",
        width: 410,
        flexDirection: "column",
        alignItems: "flex-start",
    },
    flex: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        gap: "10px",
    },
    label: {
        color: "white",
        fontFamily: "Inter-Bold",
        opacity: 0.5,
        textTransform: "capitalize",
    },
    slabel: {
        color: "white",
        fontFamily: "Inter-Regular",
    },
    icon: {
        color: "white",
        fontFamily: "Inter-Regular",
    },
});
