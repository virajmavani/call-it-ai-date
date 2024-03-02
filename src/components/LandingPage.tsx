"use client";

import { useState } from 'react';
import { Theme, Heading, TextArea, Text, Button } from '@radix-ui/themes';
import { WavyBackground } from './ui/WavyBackground';
import ProfileCarousel from '@/components/ProfileCarousel';

const LandingPage = () => {
    const [textContent, setTextContent] = useState("");
    const [resultsLabelVisible, setResultsLabelVisible] = useState(false);

    const handleDetectButton = () => {
        setResultsLabelVisible(true);
        setTimeout(() => {
            const cache = localStorage.getItem(textContent);
            const randomProbability = cache != null ? cache : (Math.random() * 100).toString();
            localStorage.setItem(textContent, randomProbability.toString());
        }, 1000);
    };

    const handleTextChange = (event: any) => {
        setResultsLabelVisible(false);
        setTextContent(event.target.value);
    }

    return (
        <Theme
            accentColor="green"
            appearance="dark"
            radius="large"
            scaling="95%"
        >
            <WavyBackground>
                <div className="flex min-h-screen flex-col items-center space-y-10 p-24 w-screen">
                    <div className="flex items-center">
                        <Heading>
                            🤖 Call It AI Date ❤️
                        </Heading>
                    </div>
                    <div className="flex items-center">
                        <Text>
                            AI based Date Planner
                        </Text>
                    </div>
                    <div className="flex items-center w-full">
                        <ProfileCarousel/>
                    </div>

                    <div className="flex items-center">
                        <Button className="w-full" onClick={handleDetectButton}>Plan A Date ❤️</Button>
                    </div>

                    <div className={"flex flex-col items-center " + (resultsLabelVisible ? "visible" : "hidden")}>
                        <Heading className="w-full">Results</Heading>
                    </div>
                </div>
            </WavyBackground>
        </Theme>
    );
}

export default LandingPage;
