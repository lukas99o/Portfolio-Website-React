import { useState, useEffect } from "react";

function UseKeySequenceDetector(targetSequence = '1337', callback) {
    const [keySequence, setKeySequence] = useState('');

    useEffect(() => {
        function handleKeyPress(event) {
            const updatedSequence = keySequence + event.key;
            if (targetSequence.startsWith(updatedSequence)) {
                setKeySequence(updatedSequence);
                if (updatedSequence === targetSequence) {
                    callback();
                    setKeySequence('');
                }
            } else {
                setKeySequence('')
            }
        }

        window.addEventListener('keypress', handleKeyPress);
        return () => window.removeEventListener('keypress', handleKeyPress);
    }, [keySequence, targetSequence, callback]);

    return keySequence;
}

export default UseKeySequenceDetector;