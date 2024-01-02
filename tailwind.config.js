module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    //definimos los colres que queremos usar 
    // colors: {
    //   background: {
    //     primary: 'var(--bg-background-primary)',
    //     secondary: 'var(--bg-background-secondary)',
    //     tertiary: 'var(--bg-background-tertiary)',
    //   },
      

    //   gray: {
    //    300: '#D1D5DB',
    //    800:'#1F2937',
	  //   900:'#111827'
    //   },
    //   white:'#fff',
	
    // }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
