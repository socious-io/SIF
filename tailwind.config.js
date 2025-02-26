/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      Base: { White: '#ffffff', Black: '#000000' },
      'Gray-light-mode': {
        25: '#fcfcfd',
        50: '#f9fafb',
        100: '#f2f4f7',
        200: '#eaecf0',
        300: '#d0d5dd',
        400: '#98a2b3',
        500: '#667085',
        600: '#475467',
        700: '#344054',
        800: '#182230',
        900: '#101828',
        950: '#0c111d',
      },
      'Gray (dark mode)': {
        25: '#fafafa',
        50: '#f5f5f6',
        100: '#f0f1f1',
        200: '#ececed',
        300: '#cecfd2',
        400: '#94969c',
        500: '#85888e',
        600: '#61646c',
        700: '#333741',
        800: '#1f242f',
        900: '#161b26',
        950: '#0c111d',
      },
      Brand: {
        25: '#f9fbfb',
        50: '#f3f6f6',
        100: '#e6eded',
        200: '#ccdbda',
        300: '#99b7b5',
        400: '#669290',
        500: '#336e6b',
        600: '#004a46',
        700: '#003b38',
        800: '#002c2a',
        900: '#001e1c',
        950: '#001615',
        // 950: '#181615',
      },
      Burgundy: {
        25: '#fdfafb',
        50: '#fbf5f6',
        100: '#f7ebed',
        200: '#efd6da',
        300: '#dfacb5',
        400: '#d08390',
        500: '#c0596b',
        600: '#b03046',
        700: '#8d2638',
        800: '#6a1d2a',
        //  800: '#46131c',
        950: '#350e15',
      },
      Sail: {
        25: '#fefdfd',
        50: '#fdfbfa',
        100: '#fbf7f5',
        200: '#f7f0ec',
        300: '#f3e8e2',
        400: '#efe1d9',
        500: '#ebd9cf',
        600: '#bcaea6',
        700: '#8d827c',
        800: '#5e5753',
        900: '#2f2b29',
        950: '#181615',
      },
      Error: {
        25: '#fffbfa',
        50: '#fef3f2',
        100: '#fee4e2',
        200: '#fecdca',
        300: '#fda29b',
        400: '#f97066',
        500: '#f04438',
        600: '#d92d20',
        700: '#b42318',
        800: '#912018',
        900: '#7a271a',
        950: '#55160c',
      },
      Warning: {
        25: '#fffcf5',
        50: '#fffaeb',
        100: '#fef0c7',
        200: '#fedf89',
        300: '#fec84b',
        400: '#fdb022',
        500: '#f79009',
        600: '#dc6803',
        700: '#b54708',
        800: '#93370d',
        900: '#7a2e0e',
        950: '#4e1d09',
      },
      Success: {
        25: '#f6fef9',
        50: '#ecfdf3',
        100: '#dcfae6',
        200: '#abefc6',
        300: '#75e0a7',
        400: '#47cd89',
        500: '#17b26a',
        600: '#079455',
        700: '#067647',
        800: '#085d3a',
        900: '#074d31',
        950: '#053321',
      },
      'Gray blue': {
        25: '#fcfcfd',
        50: '#f8f9fc',
        100: '#eaecf5',
        200: '#d5d9eb',
        300: '#b3b8db',
        400: '#717bbc',
        500: '#4e5ba6',
        600: '#3e4784',
        700: '#363f72',
        800: '#293056',
        900: '#101323',
        950: '#0d0f1c',
      },
      Wild_blue: {
        100: '#eaf0f9',
        500: '#a1b2d9',
      },
      Dark_vanilla: {
        100: '#f2f4ec',
        500: '#c0c6a0',
      },
      Apricot: {
        100: '#fcf3e5',
      },
      'Gray cool': {
        25: '#fcfcfd',
        50: '#f9f9fb',
        100: '#eff1f5',
        200: '#dcdfea',
        300: '#b9c0d4',
        400: '#7d89b0',
        500: '#5d6b98',
        600: '#4a5578',
        700: '#404968',
        800: '#30374f',
        900: '#111322',
        950: '#0e101b',
      },
      'Gray modern': {
        25: '#fcfcfd',
        50: '#f8fafc',
        100: '#eef2f6',
        200: '#e3e8ef',
        300: '#cdd5df',
        400: '#9aa4b2',
        500: '#697586',
        600: '#4b5565',
        700: '#364152',
        800: '#202939',
        900: '#121926',
        950: '#0d121c',
      },
      'Gray neutral': {
        25: '#fcfcfd',
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d2d6db',
        400: '#9da4ae',
        500: '#6c737f',
        600: '#4d5761',
        700: '#384250',
        800: '#1f2a37',
        900: '#111927',
        950: '#0d121c',
      },
      'Gray iron': {
        25: '#fcfcfc',
        50: '#fafafa',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d1d1d6',
        400: '#a0a0ab',
        500: '#70707b',
        600: '#51525c',
        700: '#3f3f46',
        800: '#26272b',
        900: '#1a1a1e',
        950: '#131316',
      },
      'Gray true': {
        25: '#fcfcfc',
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d6d6d6',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#424242',
        800: '#292929',
        900: '#141414',
        950: '#0f0f0f',
      },
      'Gray warm': {
        25: '#fdfdfc',
        50: '#fafaf9',
        100: '#f5f5f4',
        200: '#e7e5e4',
        300: '#d7d3d0',
        400: '#a9a29d',
        500: '#79716b',
        600: '#57534e',
        700: '#44403c',
        800: '#292524',
        900: '#1c1917',
        950: '#171412',
      },
      Moss: {
        25: '#fafdf7',
        50: '#f5fbee',
        100: '#e6f4d7',
        200: '#ceeab0',
        300: '#acdc79',
        400: '#86cb3c',
        500: '#669f2a',
        600: '#4f7a21',
        700: '#3f621a',
        800: '#335015',
        900: '#2b4212',
        950: '#1a280b',
      },
      'Green light': {
        25: '#fafef5',
        50: '#f3fee7',
        100: '#e3fbcc',
        200: '#d0f8ab',
        300: '#a6ef67',
        400: '#85e13a',
        500: '#66c61c',
        600: '#4ca30d',
        700: '#3b7c0f',
        800: '#326212',
        900: '#2b5314',
        950: '#15290a',
      },
      Green: {
        25: '#f6fef9',
        50: '#edfcf2',
        100: '#d3f8df',
        200: '#aaf0c4',
        300: '#73e2a3',
        400: '#3ccb7f',
        500: '#16b364',
        600: '#099250',
        700: '#087443',
        800: '#095c37',
        900: '#084c2e',
        950: '#052e1c',
      },
      Teal: {
        25: '#f6fefc',
        50: '#f0fdf9',
        100: '#ccfbef',
        200: '#99f6e0',
        300: '#5fe9d0',
        400: '#2ed3b7',
        500: '#15b79e',
        600: '#0e9384',
        700: '#107569',
        800: '#125d56',
        900: '#134e48',
        950: '#0a2926',
      },
      Cyan: {
        25: '#f5feff',
        50: '#ecfdff',
        100: '#cff9fe',
        200: '#a5f0fc',
        300: '#67e3f9',
        400: '#22ccee',
        500: '#06aed4',
        600: '#088ab2',
        700: '#0e7090',
        800: '#155b75',
        900: '#164c63',
        950: '#0d2d3a',
      },
      'Blue light': {
        25: '#f5fbff',
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#b9e6fe',
        300: '#7cd4fd',
        400: '#36bffa',
        500: '#0ba5ec',
        600: '#0086c9',
        700: '#026aa2',
        800: '#065986',
        900: '#0b4a6f',
        950: '#062c41',
      },
      Blue: {
        25: '#f5faff',
        50: '#eff8ff',
        100: '#d1e9ff',
        200: '#b2ddff',
        300: '#84caff',
        400: '#53b1fd',
        500: '#2e90fa',
        600: '#1570ef',
        700: '#175cd3',
        800: '#1849a9',
        900: '#194185',
        950: '#102a56',
      },
      'Blue dark': {
        25: '#f5f8ff',
        50: '#eff4ff',
        100: '#d1e0ff',
        200: '#b2ccff',
        300: '#84adff',
        400: '#528bff',
        500: '#2970ff',
        600: '#155eef',
        700: '#004eeb',
        800: '#0040c1',
        900: '#00359e',
        950: '#002266',
      },
      Indigo: {
        25: '#f5f8ff',
        50: '#eef4ff',
        100: '#e0eaff',
        200: '#c7d7fe',
        300: '#a4bcfd',
        400: '#8098f9',
        500: '#6172f3',
        600: '#444ce7',
        700: '#3538cd',
        800: '#2d31a6',
        900: '#2d3282',
        950: '#1f235b',
      },
      Violet: {
        25: '#fbfaff',
        50: '#f5f3ff',
        100: '#ece9fe',
        200: '#ddd6fe',
        300: '#c3b5fd',
        400: '#a48afb',
        500: '#875bf7',
        600: '#7839ee',
        700: '#6927da',
        800: '#5720b7',
        900: '#491c96',
        950: '#2e125e',
      },
      Purple: {
        25: '#fafaff',
        50: '#f4f3ff',
        100: '#ebe9fe',
        200: '#d9d6fe',
        300: '#bdb4fe',
        400: '#9b8afb',
        500: '#7a5af8',
        600: '#6938ef',
        700: '#5925dc',
        800: '#4a1fb8',
        900: '#3e1c96',
        950: '#27115f',
      },
      Fuchsia: {
        25: '#fefaff',
        50: '#fdf4ff',
        100: '#fbe8ff',
        200: '#f6d0fe',
        300: '#eeaafd',
        400: '#e478fa',
        500: '#d444f1',
        600: '#ba24d5',
        700: '#9f1ab1',
        800: '#821890',
        900: '#6f1877',
        950: '#47104c',
      },
      Pink: {
        25: '#fef6fb',
        50: '#fdf2fa',
        100: '#fce7f6',
        200: '#fcceee',
        300: '#faa7e0',
        400: '#f670c7',
        500: '#ee46bc',
        600: '#dd2590',
        700: '#c11574',
        800: '#9e165f',
        900: '#851651',
        950: '#4e0d30',
      },
      Rosé: {
        25: '#fff5f6',
        50: '#fff1f3',
        100: '#ffe4e8',
        200: '#fecdd6',
        300: '#fea3b4',
        400: '#fd6f8e',
        500: '#f63d68',
        600: '#e31b54',
        700: '#c01048',
        800: '#a11043',
        900: '#89123e',
        950: '#510b24',
      },
      'Orange dark': {
        25: '#fff9f5',
        50: '#fff4ed',
        100: '#ffe6d5',
        200: '#ffd6ae',
        300: '#ff9c66',
        400: '#ff692e',
        500: '#ff4405',
        600: '#e62e05',
        700: '#bc1b06',
        800: '#97180c',
        900: '#771a0d',
        950: '#57130a',
      },
      Orange: {
        25: '#fefaf5',
        50: '#fef6ee',
        100: '#fdead7',
        200: '#f9dbaf',
        300: '#f7b27a',
        400: '#f38744',
        500: '#ef6820',
        600: '#e04f16',
        700: '#b93815',
        800: '#932f19',
        900: '#772917',
        950: '#511c10',
      },
      Yellow: {
        25: '#fefdf0',
        50: '#fefbe8',
        100: '#fef7c3',
        200: '#feee95',
        300: '#fde272',
        400: '#fac515',
        500: '#eaaa08',
        600: '#ca8504',
        700: '#a15c07',
        800: '#854a0e',
        900: '#713b12',
        950: '#542c0d',
      },
      tertiary: {
        600: '#445568',
      },
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
    },
    fontFamily: { inter: 'Inter' },
    boxShadow: {
      xs: '0px 1px 2px 0px rgba(16,24,40,0.05)',
      sm: '0px 1px 2px 0px rgba(16,24,40,0.06), 0px 1px 3px 0px rgba(16,24,40,0.1)',
      md: '0px 2px 4px -2px rgba(16,24,40,0.06), 0px 4px 8px -2px rgba(16,24,40,0.1)',
      lg: '0px 4px 6px -2px rgba(16,24,40,0.03), 0px 12px 16px -4px rgba(16,24,40,0.08)',
      xl: '0px 8px 8px -4px rgba(16,24,40,0.03), 0px 20px 24px -4px rgba(16,24,40,0.08)',
      '2xl': '0px 24px 48px -12px rgba(16,24,40,0.18)',
      '3xl': '0px 32px 64px -12px rgba(16,24,40,0.14)',
      'Focus rings/ring-brand': '0px 0px 0px 4px rgba(51,110,107,0.24)',
      'Focus rings/ring-brand-shadow-xs': '0px 0px 0px 4px rgba(51,110,107,0.24), 0px 1px 2px 0px rgba(16,24,40,0.05)',
      'Focus rings/ring-brand-shadow-sm':
        '0px 0px 0px 4px rgba(51,110,107,0.24), 0px 1px 2px 0px rgba(16,24,40,0.06), 0px 1px 3px 0px rgba(16,24,40,0.1)',
      'Focus rings/ring-gray': '0px 0px 0px 4px rgba(152,162,179,0.14)',
      'Focus rings/ring-gray-shadow-xs': '0px 0px 0px 4px rgba(152,162,179,0.14), 0px 1px 2px 0px rgba(16,24,40,0.05)',
      'Focus rings/ring-gray-shadow-sm':
        '0px 0px 0px 4px rgba(152,162,179,0.14), 0px 1px 2px 0px rgba(16,24,40,0.06), 0px 1px 3px 0px rgba(16,24,40,0.1)',
      'Focus rings/ring-gray-secondary': '0px 0px 0px 4px rgba(152,162,179,0.2)',
      'Focus rings/ring-error': '0px 0px 0px 4px rgba(240,68,56,0.24)',
      'Focus rings/ring-error-shadow-xs': '0px 0px 0px 4px rgba(240,68,56,0.24), 0px 1px 2px 0px rgba(16,24,40,0.05)',
      'Shadows/shadow-xs': '0px 1px 2px 0px rgba(16,24,40,0.05)',
      'Shadows/shadow-sm': '0px 1px 2px 0px rgba(16,24,40,0.06), 0px 1px 3px 0px rgba(16,24,40,0.1)',
      'Shadows/shadow-md': '0px 2px 4px -2px rgba(16,24,40,0.06), 0px 4px 8px -2px rgba(16,24,40,0.1)',
      'Shadows/shadow-lg': '0px 4px 6px -2px rgba(16,24,40,0.03), 0px 12px 16px -4px rgba(16,24,40,0.08)',
      'Shadows/shadow-xl': '0px 8px 8px -4px rgba(16,24,40,0.03), 0px 20px 24px -4px rgba(16,24,40,0.08)',
      'Shadows/shadow-2xl': '0px 24px 48px -12px rgba(16,24,40,0.18)',
      'Shadows/shadow-3xl': '0px 32px 64px -12px rgba(16,24,40,0.14)',
    },
    borderRadius: {
      none: '0',
      xxs: '0.125rem',
      xs: '0.25rem',
      sm: '0.375rem',
      default: '0.5rem',
      lg: '0.625rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.25rem',
      '4xl': '1.5rem',
      full: '9999px',
    },

    extend: {
      spacing: {
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
        '6xl': '48px',
        '7xl': '64px',
        '8xl': '80px',
        '9xl': '96px',
        '10xl': '128px',
        '11xl': '160px',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
