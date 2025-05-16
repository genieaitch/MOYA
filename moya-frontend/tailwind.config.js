/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
          doosan: {
            primary: '#131230', // 두산 베어스 메인 컬러
            secondary: '#1D1D1B', // 두산 서브 컬러
          },
          samsung: {
            primary: '#0066B3', // 삼성 라이온즈 메인 컬러
            secondary: '#B3DAFE', // 삼성 서브 컬러
          },
          lg: {
            primary: '#C30452', // LG 트윈스 메인 컬러
            secondary: '#000000', // LG 서브 컬러
          },
          kt: {
            primary: '#000000', // KT 위즈 메인 컬러
            secondary: '#E30613', // KT 서브 컬러
          },
          ssg: {
            primary: '#CE0E2D', // SSG 랜더스 메인 컬러
            secondary: '#FFFFFF', // SSG 서브 컬러
          },
          kiwoom: {
            primary: '#820024', // 키움 히어로즈 메인 컬러
            secondary: '#FFFFFF', // 키움 서브 컬러
          },
          nc: {
            primary: '#315288', // NC 다이노스 메인 컬러
            secondary: '#BCCEE3', // NC 서브 컬러
          },
          hanwha: {
            primary: '#FF6600', // 한화 이글스 메인 컬러
            secondary: '#000000', // 한화 서브 컬러
          },
          lotte: {
            primary: '#002856', // 롯데 자이언츠 메인 컬러
            secondary: '#C4161C', // 롯데 서브 컬러
          },
          kia: {
            primary: '#EA0029', // KIA 타이거즈 메인 컬러
            secondary: '#FFFFFF', // KIA 서브 컬러
          },
        }
      },
    },
  plugins: [],
}
