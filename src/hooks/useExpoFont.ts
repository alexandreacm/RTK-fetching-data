import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

export default function useExpoFont() {
    const [isLoadingFont, setIsLoadingFont] = useState(false);

    useEffect(() => {
        async function loadExpoFont() {
            try {

                await Font.loadAsync({
                    montserrat: require("../../assets/fonts/Montserrat-Regular.ttf"),
                    "montserrat-bold": require("../../assets/fonts/Montserrat-Bold.ttf"),
                });

            } catch (error) {
                console.warn(error);
            } finally {
                setIsLoadingFont(true);
            }
        }
        loadExpoFont();
    }, []);




    return isLoadingFont;
}