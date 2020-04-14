import { createMuiTheme } from '@material-ui/core';

const Theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0B4566',
        },
        secondary: {
            main: '#00A4EC',
        },
        text: {
            primary: '#333',
        },
    },
    typography: {
        subtitle1: {
            fontSize: 12,
            fontWeight: 'bold',
        },
        subtitle2: {
            fontSize: 12
        },
        body1: {
            fontSize: 16,
            color: '#0B4566',
        },
    },
    overrides: {
        MuiButton: {
            root: {
                color: '#fff',
                fontSize: 12,
                textTransform: 'initial',
                padding: '8px 16px',
            },
            containedSecondary: {
                backgroundColor: '#00A4EC',
                color: '#fff',
                '&:disabled': {
                    backgroundColor: 'rgb(242, 245, 247)',
                    color: 'rgba(207,219,226)',
                },
                '&:hover': {
                    backgroundColor: '#0076C8',
                },
            },
        },
    }
});

export default Theme;