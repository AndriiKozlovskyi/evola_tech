import sharp from 'sharp'
import { readdir } from 'fs/promises'
import { join, basename, extname } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const projectsDir = join(__dirname, '../public/images/projects')

const files = await readdir(projectsDir)
const jpegs = files.filter(f => /\.(jpg|jpeg)$/i.test(f))

for (const file of jpegs) {
  const src = join(projectsDir, file)
  const name = basename(file, extname(file))
  const destWebp = join(projectsDir, `${name}.webp`)

  await sharp(src)
    .resize({ width: 640, withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(destWebp)

  console.log(`✓ ${file} → ${name}.webp`)
}
