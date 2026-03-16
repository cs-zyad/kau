/**
 * KAU Community Design Tokens
 * Official KAU colors: Deep Green (#1a5c2a) and Gold (#c9a84c)
 */

const theme = {
    colors: {
        // Primary - KAU Deep Green
        primary: {
            50: '#e8f5ec',
            100: '#c5e6cf',
            200: '#9ed5b0',
            300: '#75c490',
            400: '#55b778',
            500: '#34a960',
            600: '#2d9a56',
            700: '#23874a',
            800: '#1a5c2a', // Official KAU Green
            900: '#0f4a1e',
            950: '#082f12',
        },
        // Secondary - KAU Gold
        secondary: {
            50: '#fdf8eb',
            100: '#f9edcc',
            200: '#f1d999',
            300: '#e8c466',
            400: '#d4ad50',
            500: '#c9a84c', // Official KAU Gold
            600: '#b8933c',
            700: '#9a7730',
            800: '#7d5f27',
            900: '#664d20',
            950: '#3b2c12',
        },
        // Neutrals
        neutral: {
            0: '#ffffff',
            50: '#f8f9fa',
            100: '#f1f3f5',
            200: '#e9ecef',
            300: '#dee2e6',
            400: '#ced4da',
            500: '#adb5bd',
            600: '#868e96',
            700: '#495057',
            800: '#343a40',
            900: '#212529',
            950: '#0d1117',
        },
        // Semantic
        success: '#22c55e',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
        // Backgrounds
        background: {
            primary: '#ffffff',
            secondary: '#f8f9fa',
            tertiary: '#f1f3f5',
            dark: '#0d1117',
            darkAlt: '#161b22',
        },
    },
    fonts: {
        arabic: "'Tajawal', 'Segoe UI', sans-serif",
        english: "'Inter', 'Segoe UI', sans-serif",
    },
    fontSizes: {
        xs: '0.75rem',    // 12px
        sm: '0.875rem',   // 14px
        base: '1rem',     // 16px
        md: '1.125rem',   // 18px
        lg: '1.25rem',    // 20px
        xl: '1.5rem',     // 24px
        '2xl': '1.875rem',// 30px
        '3xl': '2.25rem', // 36px
        '4xl': '3rem',    // 48px
        '5xl': '3.75rem', // 60px
    },
    fontWeights: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
    },
    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '6rem',
        '5xl': '8rem',
    },
    borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
        full: '9999px',
    },
    shadows: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        glow: '0 0 20px rgba(26, 92, 42, 0.3)',
        goldGlow: '0 0 20px rgba(201, 168, 76, 0.3)',
    },
    transitions: {
        fast: '150ms ease',
        base: '250ms ease',
        slow: '350ms ease',
        spring: '500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
    },
    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },
    zIndex: {
        dropdown: 100,
        sticky: 200,
        overlay: 300,
        modal: 400,
        toast: 500,
    },
};

export default theme;
