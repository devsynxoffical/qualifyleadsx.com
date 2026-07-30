import { siteContent } from '../../data/content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function PromoBar() {
  return (
    <div className="bg-[#f5ebe0] py-4">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-center text-sm font-medium text-text sm:text-left sm:text-base">
          {siteContent.promo.text}
        </p>
        <Button href={siteContent.brand.ctaUrl} variant="secondary" className="shrink-0 !text-xs">
          {siteContent.promo.button}
        </Button>
      </Container>
    </div>
  )
}
