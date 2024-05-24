import { useState, useEffect } from 'react';

function useKeySequenceDetector(targetSequence = '1337', callback) {
    const [keySequence, setKeySequence] = useState('');

    useEffect(() => {
        const handleKeyPress = (event) => {
            const newKeySequence = keySequence + event.key;
            if (newKeySequence === targetSequence) {
                callback();
                setKeySequence('');
            } else if (targetSequence.startsWith(newKeySequence)) {
                setKeySequence(newKeySequence);
            } else {
                setKeySequence('');
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [keySequence, targetSequence, callback]); 

    return keySequence;
}

export default useKeySequenceDetector;
