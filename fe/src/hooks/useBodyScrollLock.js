const { useState, useEffect } = require('react');

const useBodyScrollLock = () => {
    const bodyStyle = document.body.style;
    const [lock, setLock] = useState(bodyStyle.overflowY === 'hidden');

    useEffect(() => {
        bodyStyle.overflowY = lock ? 'hidden' : 'auto';
    }, [lock, bodyStyle]);

    const toggle = () => setLock(!lock);

    return [lock, toggle];
};

export default useBodyScrollLock;
