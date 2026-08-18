import type { Config } from 'tailwindcss';
export default { content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'], theme:{extend:{colors:{ink:'#07111f',blue:'#216dff',line:'#dce5f1'},boxShadow:{soft:'0 20px 50px rgba(7,17,31,.10)'}}}, plugins:[] } satisfies Config;
