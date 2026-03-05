import { useEffect } from 'react'
import { SITE } from '../lib/config'

function upsertMeta(attrName, attrValue, content) {
  let node = document.head.querySelector(`meta[${attrName}="${attrValue}"]`)
  if (!node) {
    node = document.createElement('meta')
    node.setAttribute(attrName, attrValue)
    document.head.appendChild(node)
  }
  node.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let node = document.head.querySelector(`link[rel="${rel}"]`)
  if (!node) {
    node = document.createElement('link')
    node.setAttribute('rel', rel)
    document.head.appendChild(node)
  }
  node.setAttribute('href', href)
}

export default function Seo({ title, description, path = '/', jsonLd }) {
  useEffect(() => {
    const finalTitle = title ? `${title} | ${SITE.name}` : SITE.seo.defaultTitle
    const finalDescription = description || SITE.seo.description
    const canonical = `${SITE.seo.siteUrl}${path}`

    document.title = finalTitle
    upsertMeta('name', 'description', finalDescription)
    upsertMeta('name', 'keywords', SITE.seo.keywords.join(', '))
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large')
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:title', finalTitle)
    upsertMeta('property', 'og:description', finalDescription)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:image', `${SITE.seo.siteUrl}${SITE.seo.defaultImage}`)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', finalTitle)
    upsertMeta('name', 'twitter:description', finalDescription)
    upsertMeta('name', 'twitter:image', `${SITE.seo.siteUrl}${SITE.seo.defaultImage}`)
    upsertLink('canonical', canonical)

    let script
    if (jsonLd) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }

    return () => {
      if (script?.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [description, jsonLd, path, title])

  return null
}