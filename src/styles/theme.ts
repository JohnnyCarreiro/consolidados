const defaultTheme = {
  colors:{
      gray_100: '#00000F',
      gray_200: '#121820',
      gray_300: '#253040',
      gray_400: '#374860',
      gray_500: '#4a5f80',
      gray_600: '#6e7f99',
      gray_700: '#929fb3',
      gray_900: '#b7bfcc',
      gray_1000: '#dbdfe6',
      white: '#F7FAFF',

      main:'#7029E1',
      primary: '#fdac53',
      secondary: '#4791ff',

      alert: '#b07028',
      danger: '#ff6177',
      success:'#6cfd7e',

  },
  texts:{
    main_title:'700 3rem/4.25rem Montserrat, sans-serif',//h1
    title:'700 2rem/3.5rem Montserrat, sans-serif',//h2
    sub_title:'600 1.5rem/3rem Montserrat, sans-serif',//h3
    main_text:'400 1rem/1.5rem Montserrat, sans-serif',//p, a ...
    main_strong:'600 1rem/1.5rem Montserrat, sans-serif',//strong
    small_text:'300 0.875rem/1.3125rem Montserrat, sans-serif'//p, a, small ..
  }
}

export type ThemeType = typeof defaultTheme
export default defaultTheme

// brown: '#b07028',
// light: '#7c2eca',
// pruple: '#7131b0',
// main: '#fdac53',
// secondary: '#4791ff',
// dark: '#205bb2',
// light: '#ccc524',
// dark: '#b2ad29',
