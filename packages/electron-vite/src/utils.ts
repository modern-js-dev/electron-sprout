import * as path from 'path';
import * as fs from 'fs';

export function ensureElectronEntryFile(root = process.cwd()): void {
  const pkg = path.join(root, 'package.json');
  if (fs.existsSync(pkg)) {
    const { main } = require(pkg);
    if (!main) {
      throw new Error(
        'not found an entry point to electorn app, please add main field for your package.json',
      );
    } else {
      const entryPath = path.resolve(root, main);
      if (!fs.existsSync(entryPath)) {
        throw new Error(`not found the electorn app entry file: ${entryPath}`);
      }
    }
  } else {
    throw new Error('no package.json');
  }
}
export function getElectronPath(): string {
  // const electronModulePath = path.resolve(
  //   process.cwd(),
  //   'node_modules',
  //   'electron',
  // );
  // const pathFile = path.join(electronModulePath, 'path.txt');
  // let executablePath;
  // if (fs.existsSync(pathFile)) {
  //   executablePath = fs.readFileSync(pathFile, 'utf-8');
  // }
  // if (executablePath) {
  //   return path.join(electronModulePath, 'dist', executablePath);
  // } else {
  //   throw new Error('Electron uninstall');
  // }
  try {
    const electronBin = require('electron');
    return electronBin;
  } catch (error) {
    throw new Error('Electron uninstall');
  }
}
