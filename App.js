import React, { useEffect, useState, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Section from "./utils/sect/Section.js";
import Division from "./utils/sect/Division.js";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
    const [fontsLoaded] = useFonts({
        "Inter-Thin": require("./fonts/Inter-Thin.ttf"),
        "Inter-ExtraLight": require("./fonts/Inter-ExtraLight.ttf"),
        "Inter-Light": require("./fonts/Inter-Light.ttf"),
        "Inter-Regular": require("./fonts/Inter-Regular.ttf"),
        "Inter-Medium": require("./fonts/Inter-Medium.ttf"),
        "Inter-SemiBold": require("./fonts/Inter-SemiBold.ttf"),
        "Inter-Bold": require("./fonts/Inter-Bold.ttf"),
        "Inter-ExtraBold": require("./fonts/Inter-ExtraBold.ttf"),
        "Inter-Black": require("./fonts/Inter-Black.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#0F0F0F" barStyle="light-content" />
            <View style={styles.body}>
                <Text style={styles.header}>
                    Hello, <Text style={{ fontWeight: "bold" }}>username</Text>!
                </Text>

                <Section
                    label="YOUR HEALTH"
                    slabel="Regular"
                    icon="hand-with-heart"
                >
                    <Division
                        type="DIVISION"
                        status="HEADER"
                        average="TEXT HERE"
                    ></Division>
                </Section>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0f0f0f",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
    texto: {
        color: "white",
        fontFamily: "Inter-Regular",
    },
    body: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "start",
        padding: "10px",
        gap: "10px",
    },
    header: {
        fontFamily: "Inter-Regular",
        fontSize: 30,
        fontWeight: 400,
        lineHeight: 30,
        color: "white",
    },
});
