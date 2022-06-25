import Router, { useRouter } from 'next/router'

const Logo = ({ height }) => (
  <svg height={height} viewBox='0 0 70 70' fill='none'>
    <circle cx='35' cy='35' r='35' fill='currentColor' />
  </svg>
)

const Vercel = ({ height = 20 }) => (
  <svg height={height} viewBox='0 0 283 64' fill='none'>
    <path
      fill='currentColor'
      d='M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z'
    />
  </svg>
)

export default {
  projectLink: 'https://github.com/shuding/cobe',
  docsRepositoryBase: 'https://github.com/shuding/cobe/blob/main/website',
  search: true,
  titleSuffix: '',
  unstable_flexsearch: true,
  unstable_faviconGlyph: '⚫️',
  floatTOC: true,
  logo: () => {
    const { route } = useRouter()
    return (
      <>
        <Logo height={18} />
        {route === '/' ? null : (
          <span
            className='mx-2 font-extrabold hidden md:inline select-none'
            title='COBE'
            style={{ whiteSpace: 'nowrap' }}
          >
            COBE
          </span>
        )}
      </>
    )
  },
  head: ({ title, meta }) => {
    const ogImage =
      'https://repository-images.githubusercontent.com/429536908/62a4e686-8613-4b45-b7bb-fa35b558ae8e'

    return (
      <>
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta httpEquiv='Content-Language' content='en' />
        <meta
          name='description'
          content={meta.description || 'A 5kB WebGL globe library.'}
        />
        <meta
          name='og:description'
          content={meta.description || 'A 5kB WebGL globe library.'}
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@shuding_' />
        <meta name='twitter:image' content={ogImage} />
        <meta name='og:title' content={title ? title + ' – COBE' : 'COBE'} />
        <meta name='og:image' content={ogImage} />
        <meta name='apple-mobile-web-app-title' content='COBE' />
      </>
    )
  },
  footerText: ({ locale }) => {
    return (
      <p className='no-underline text-current font-semibold'>
        Made by{' '}
        <a
          href='https://twitter.com/shuding_'
          target='_blank'
          rel='noopener'
          className='no-underline font-semibold'
        >
          @shuding_
        </a>
        , deployed on{' '}
        <a
          href='https://vercel.com/?utm_source=cobe'
          target='_blank'
          rel='noopener'
          className='no-underline font-semibold'
        >
          Vercel
        </a>
        .
      </p>
    )
  },
  footerEditLink: () => {
    const { route } = useRouter()
    if (route.includes('/showcases/')) {
      return null
    }
    return 'Edit this page on GitHub'
  },
  gitTimestamp: false,
}
