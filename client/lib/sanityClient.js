import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'zfe5mimm',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skhQXhRxSOYK3FlMdt9NeE1EaifPfcBfmsP4wulUuYB75Bed9BBZueOuoEWss80NDdX1MhLoC8X06G4EON5AWeGyJG2JeJuNzwxxr5rP9goR7TJcAYyBWT5S3KciEfUvQXb2dVH89uxSWyln81qHUUFoHuOCSkL68FORd6K2WLX5BE1PoAVT',
  useCdn: false,
})
