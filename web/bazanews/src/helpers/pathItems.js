export default function pathItems(filename) {
    const images = require.context('@/assets/');
    return images(`./${filename}`)
}
