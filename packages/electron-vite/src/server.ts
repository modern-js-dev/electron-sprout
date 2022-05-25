import { spawn } from 'child_process';
import {
  createServer as ViteCreateServer,
  build as viteBuild,
  createLogger,
} from 'vite';
import colors from 'picocolors';
import { InlineConfig, resolveConfig } from './config';
import { ensureElectronEntryFile, getElectronPath } from './utils';

export async function createServer(
  inlineConfig: InlineConfig = {},
): Promise<void> {
  const config = await resolveConfig(inlineConfig, 'serve', 'development');
  if (config.config) {
    const logger = createLogger(inlineConfig.logLevel);

    const mainViteConfig = config.config?.main;
    if (mainViteConfig) {
      await viteBuild(mainViteConfig);

      logger.info(
        colors.green(`\nbuild the electron main process successfully`),
      );
    }

    const preloadViteConfig = config.config?.preload;
    if (preloadViteConfig) {
      logger.info(colors.gray(`\n-----\n`));
      await viteBuild(preloadViteConfig);

      logger.info(
        colors.green(`\nbuild the electron preload files successfully`),
      );
    }

    const rendererViteConfig = config.config?.renderer;
    if (rendererViteConfig) {
      logger.info(colors.gray(`\n-----\n`));

      const server = await ViteCreateServer(rendererViteConfig);

      if (!server.httpServer) {
        throw new Error('HTTP server not available');
      }

      await server.listen();

      const conf = server.config.server;

      const protocol = conf.https ? 'https:' : 'http:';
      const host = conf.host || 'localhost';
      const { port } = conf;
      process.env.ELECTRON_RENDERER_URL = `${protocol}//${host}:${port}`;

      const slogger = server.config.logger;

      slogger.info(
        colors.green(
          `dev server running for the electron renderer process at:\n`,
        ),
        {
          clear: !slogger.hasWarned,
        },
      );

      server.printUrls();
    }

    ensureElectronEntryFile(inlineConfig.root);

    const electronPath = getElectronPath();

    const ps = spawn(electronPath, ['.']);
    ps.stdout.on('data', chunk => {
      chunk.toString().trim() && logger.info(chunk.toString());
    });
    ps.stderr.on('data', chunk => {
      chunk.toString().trim() && logger.error(chunk.toString());
    });
    ps.on('close', process.exit);

    logger.info(colors.green(`\nstart electron app...`));
  }
}
