// import React from 'react';
// import Root from './navigation/Root';
// import * as eva from '@eva-design/eva';
// import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
// import { default as theme } from './theme/theme.json';
// import { EvaIconsPack } from '@ui-kitten/eva-icons';

// export default function App() {
//     return (
//         <>
//             <IconRegistry icons={EvaIconsPack} />
//             <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
//                 <Root />
//             </ApplicationProvider>
//         </>
//     );
// }

import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Root from './navigation/Root';
import { ThemeContext } from './theme-context';
import { default as themes } from './theme/theme.json';

export default () => {
    const [theme, setTheme] = React.useState('light');

    const toggleTheme = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
    };

    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <ApplicationProvider {...eva} theme={eva[theme]}>
                    <Root />
                </ApplicationProvider>
            </ThemeContext.Provider>
        </>
    );
};
