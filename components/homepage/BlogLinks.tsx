import { siteMetadata } from '~/data/siteMetadata'
import { Link } from '../Link'
import { Twemoji } from '../Twemoji'
import { useTranslation } from 'next-i18next'

export function BlogLinks() {
  let { t } = useTranslation('common')

  return (
    <div className="flex flex-col space-y-1.5">
      <Link href={siteMetadata.analyticsURL} className="hover:underline">
        <Twemoji emoji="bar-chart" />
        <span data-umami-event="home-link-analytics" className="ml-1.5">
          {t('analytics')}
        </span>
      </Link>
    </div>
  )
}
