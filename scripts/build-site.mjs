import { spawn } from 'node:child_process';
import { cp, mkdir, rm, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repositoryRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const webSplatterRoot = join(repositoryRoot, 'vendor', 'WebSplatter');
const releaseOutput = join(webSplatterRoot, 'dist-release');
const siteOutput = join(repositoryRoot, '_site');

const rootFiles = [
  '.nojekyll',
  'CITATION.cff',
  'LICENSE',
  'favicon.svg',
  'index.html',
  'styles.css',
];
const rootDirectories = ['assets', 'css', 'js'];

async function requirePath(path, description) {
  try {
    await stat(path);
  } catch {
    throw new Error(`${description} is missing: ${path}`);
  }
}

function run(command, args, cwd) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd, stdio: 'inherit' });
    child.on('error', reject);
    child.on('exit', (code, signal) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} failed with ${signal ? `signal ${signal}` : `exit code ${code}`}`));
    });
  });
}

await requirePath(join(webSplatterRoot, 'package.json'), 'Initialized WebSplatter submodule');
await requirePath(join(webSplatterRoot, 'node_modules'), 'Installed WebSplatter dependencies');
await run('npm', ['run', 'build:release'], webSplatterRoot);
await requirePath(join(releaseOutput, 'index.html'), 'WebSplatter release build');

await rm(siteOutput, { recursive: true, force: true });
await mkdir(siteOutput, { recursive: true });

for (const file of rootFiles) {
  await cp(join(repositoryRoot, file), join(siteOutput, file));
}
for (const directory of rootDirectories) {
  await cp(join(repositoryRoot, directory), join(siteOutput, directory), { recursive: true });
}

const demoOutput = join(siteOutput, 'demo');
await cp(releaseOutput, demoOutput, { recursive: true });
await cp(
  join(repositoryRoot, 'demo', 'scenes'),
  join(demoOutput, 'scenes'),
  { recursive: true },
);

await requirePath(join(siteOutput, 'index.html'), 'Project page entry point');
await requirePath(join(demoOutput, 'index.html'), 'Demo entry point');
await requirePath(
  join(demoOutput, 'scenes', 'van_gogh_room', 'van_gogh_room_spz.glb'),
  'Default Van Gogh Room model',
);

console.log(`Assembled GitHub Pages artifact at ${siteOutput}`);
