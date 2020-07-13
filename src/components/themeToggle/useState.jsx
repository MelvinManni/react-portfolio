import React from 'react';
import storage from 'local-storage-fallback';

export default function useTheme(
    defaultTheme = { mode: 'light', textZoom: 'normal' }
) {
    const [theme, _setTheme] = React.useState(getInitialTheme);

    function getInitialTheme() {
        const savedTheme = storage.getItem('theme');
        return savedTheme
            ? JSON.parse(savedTheme)
            : defaultTheme;
    }

    React.useEffect(
        () => {
            storage.setItem('theme', JSON.stringify(theme));
        },
        [theme]
    );

    return {
        ...theme,
        setTheme: ({ setTheme, ...theme }) => _setTheme(theme)
    };
}
