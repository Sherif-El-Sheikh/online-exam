import { useState, useEffect } from 'react';

function useTimer(initialTime: number) {
    // Hold the remaining time
    const [timer, setTimer] = useState(initialTime);

    // Control when the Resend button is disabled
    const [isResendDisabled, setIsResendDisabled] = useState(false);

    useEffect(() => {
        // If the remaining time is greater than zero, start the counter
        if (timer > 0) {
        setIsResendDisabled(true);

        // Create an interval that decreases the timer every second
        const countDown = setInterval(() => {
            setTimer((prev) => {
                // If only 1 second remains, stop the timer and enable the resend button
                if (prev <= 1) {
                    clearInterval(countDown);
                    setIsResendDisabled(false);
                    return 0;
                }

                // Otherwise, decrease the timer by 1
                return prev - 1;
            });
        }, 1000);

        // When Unmount clear countDown
        return () => clearInterval(countDown);
        }

        // If the time expires, change the state
        setIsResendDisabled(false);
    }, [timer]);

    // Function to reset the timer only if the current time is 0
    const resetTimer = (newTime: number) => {
        if (timer === 0) {
        setTimer(newTime);
        }
    };

    return { timer, isResendDisabled, resetTimer };
}

export default useTimer;

