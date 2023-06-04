import webpack from 'webpack';
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';
import { paths } from './config/webpack/path';
import { BuildEnv, BuildMode } from './config/webpack/types/config.types';

function getApiUrl(mode: BuildMode, apiUrl?: string) {
  if (apiUrl) {
    return apiUrl;
  }
  if (mode === 'production') {
    return '/api';
  }
  return 'http://localhost:8000';
}

// eslint-disable-next-line import/no-default-export
export default (env: BuildEnv) => {
  const mode = env?.mode || 'development';
  const PORT = env?.port || 3000;
  const apiUrl = getApiUrl(mode, env?.apiUrl);

  const isDev = mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
    project: 'frontend',
  });

  return config;
};
