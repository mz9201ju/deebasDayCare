import { API } from '../lib/config'

export async function fetchReviews() {
  const response = await fetch(API.reviewsEndpoint)
  if (!response.ok) {
    throw new Error('Failed to load reviews')
  }

  const data = await response.json()
  if (!data.ok || !Array.isArray(data.reviews)) {
    return []
  }

  return data.reviews
}

export async function createReview(payload) {
  const response = await fetch(API.reviewsEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error('Failed to save review')
  }

  const data = await response.json()
  if (!data.ok || !data.review) {
    throw new Error('Invalid review response')
  }

  return data.review
}
