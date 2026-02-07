export default function myImageLoader({ src, width, quality }: { src: string, width: number, quality?: number }) {
  if (process.env.NEXT_PUBLIC_CDN_URL) {
    return `${process.env.NEXT_PUBLIC_CDN_URL}${src}?w=${width}&q=${quality || 75}`
  }
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`
}
