import { cac } from 'cac';
import colors from 'picocolors';
import { LogLevel, createLogger } from 'vite';
import { InlineConfig } from './config';

const cli = cac('electron-sprout-vite');

// global options
interface GlobalCLIOptions {
  '--'?: string[];
  c?: boolean | string;
  config?: string;
  l?: LogLevel;
  logLevel?: LogLevel;
  clearScreen?: boolean;
  d?: boolean | string;
  debug?: boolean | string;
  f?: string;
  filter?: string;
  m?: string;
  mode?: string;
  ignoreConfigWarning?: boolean;
  outDir?: string;
}

function createInlineConfig(
  root: string,
  options: GlobalCLIOptions,
): InlineConfig {
  return {
    root,
    mode: options.mode,
    configFile: options.config,
    logLevel: options.logLevel,
    clearScreen: options.clearScreen,
    ignoreConfigWarning: options.ignoreConfigWarning,
    build: {
      outDir: options.outDir,
    },
  };
}

cli
  .option('-c, --config <file>', `[string] use specified config file`)
  .option('-l, --logLevel <level>', `[string] info | warn | error | silent`)
  .option('--clearScreen', `[boolean] allow/disable clear screen when logging`)
  .option('-d, --debug [feat]', `[string | boolean] show debug logs`)
  .option('-f, --filter <filter>', `[string] filter debug logs`)
  .option('-m, --mode <mode>', `[string] set env mode`)
  .option('--ignoreConfigWarning', `[boolean] ignore config warning`)
  .option('--outDir <dir>', `[string] output directory (default: out)`);

// dev
cli
  .command('[root]', 'start dev server and electron app')
  .alias('serve')
  .alias('dev')
  .action(async (root: string, options: GlobalCLIOptions) => {
    const { createServer } = await import('./server');
    const inlineConfig = createInlineConfig(root, options);

    try {
      await createServer(inlineConfig);
    } catch (e) {
      const error = e as Error;
      createLogger(options.logLevel).error(
        colors.red(
          `error during start dev server and electron app:\n${error.stack}`,
        ),
        { error },
      );
      process.exit(1);
    }
  });

// build
cli
  .command('build [root]', 'build for production')
  .action(async (root: string, options: GlobalCLIOptions) => {
    const { build } = await import('./build');
    const inlineConfig = createInlineConfig(root, options);

    try {
      await build(inlineConfig);
    } catch (e) {
      const error = e as Error;
      createLogger(options.logLevel).error(
        colors.red(`error during build:\n${error.stack}`),
        { error },
      );
      process.exit(1);
    }
  });

// preview
cli
  .command('preview [root]', 'start electron app to preview production build')
  .action(async (root: string, options: GlobalCLIOptions) => {
    const { preview } = await import('./preview');
    const inlineConfig = createInlineConfig(root, options);

    try {
      await preview(inlineConfig);
    } catch (e) {
      const error = e as Error;
      createLogger(options.logLevel).error(
        colors.red(`error during preview electron app:\n${error.stack}`),
        { error },
      );
      process.exit(1);
    }
  });

cli.help();
cli.version(require('../package.json').version);

cli.parse();
