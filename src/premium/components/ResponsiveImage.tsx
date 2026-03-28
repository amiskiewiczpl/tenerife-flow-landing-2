import type { CSSProperties } from 'react'

type SourceDefinition = {
  srcSet: string
  type?: string
  sizes?: string
}

type ResponsiveImageProps = {
  alt: string
  src: string
  srcSet?: string
  sizes?: string
  sources?: SourceDefinition[]
  loading?: 'eager' | 'lazy'
  decoding?: 'sync' | 'async' | 'auto'
  fetchPriority?: 'high' | 'low' | 'auto'
  className?: string
  width?: number
  height?: number
  objectPosition?: CSSProperties['objectPosition']
}

const defaultSizes = '(max-width: 719px) 100vw, (max-width: 1279px) 50vw, 33vw'

export function ResponsiveImage({
  alt,
  src,
  srcSet,
  sizes = defaultSizes,
  sources,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = 'auto',
  className,
  width,
  height,
  objectPosition = 'center center',
}: ResponsiveImageProps) {
  return (
    <picture>
      {sources?.map((source) => (
        <source
          key={`${source.type ?? 'default'}-${source.srcSet}`}
          srcSet={source.srcSet}
          sizes={source.sizes ?? sizes}
          type={source.type}
        />
      ))}
      <img
        className={className}
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        width={width}
        height={height}
        style={{ objectPosition }}
      />
    </picture>
  )
}
