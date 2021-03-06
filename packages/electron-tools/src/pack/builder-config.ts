import { isArray, mergeWith } from 'lodash';
import { cliLog } from '@modern-js/electron-log';
import { readConfig } from '../config';
import { baseConfig } from './builder.base.config';

// objValue is baseConfig
// srcValue is userConfig
const customizer = (objValue: any, srcValue: any) => {
  if (isArray(objValue)) {
    const userObjects: any[] = [];
    const coreObjects: any[] = [];
    const others: any[] = [];
    (srcValue || []).forEach((each: any) => {
      if (typeof each === 'object') {
        userObjects.push(each);
      } else {
        others.push(each);
      }
    });
    (objValue || []).forEach((each: any) => {
      if (typeof each === 'object') {
        coreObjects.push(each);
      } else {
        others.push(each);
      }
    });
    return [...userObjects, ...coreObjects, ...others];
  }
};

// combine userConfig and defaultConfig
// platform: [win32, win64, mac]
const config = (options: { cwd: string; platform: string }) => {
  const { cwd, platform } = options;
  const userConfig = readConfig(cwd);
  const mergedConfig = mergeWith(
    baseConfig,
    userConfig.builder || {},
    customizer,
  );

  const getConfigByPlatform = () => {
    switch (platform) {
      case 'win32':
        return mergedConfig.winConfig;
      case 'win64':
        return mergedConfig.win64Config;
      case 'mac':
        return mergedConfig.macConfig;
      default:
        return mergedConfig.linuxConfig || {};
    }
  };

  const builderConfig = {
    ...mergedConfig.baseConfig,
    ...getConfigByPlatform(),
  };
  cliLog.info(
    'final config:',
    JSON.stringify(builderConfig, (key, val) => val, 2),
  );
  return builderConfig;
};
export default config({
  cwd: process.cwd(),
  platform: process.env.PLATFORM || 'mac',
});
