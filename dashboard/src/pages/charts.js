import React from 'react';
import Timeline from '../components/Chart';
import {ThemeProvider} from 'styled-components'
import{ theme } from '../components/Chart/styles/themes';
const Charts = () => {
    return (
        <ThemeProvider theme={theme}>
            <Timeline />
        </ThemeProvider>
    )
}

export default Charts

