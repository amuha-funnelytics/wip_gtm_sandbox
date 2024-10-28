import { babel } from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';

const config = {
  input: 'src/index.js',
  output: {
    dir: 'output',
    format: 'es'
  },
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    replace({
      preventAssignment: true,
      values: {
        [/`{{([^}]*)}}`/g]: '{{$1}}',
      },
    }),
  ],
};

export default config;