// Centralized app config + content theming
// Change this single file to reskin or rename the site
export const SITE = {
    name: "Deeba's Daycare",
    tagline: 'Early Learning Center',
    hero: {
        title: 'A warm place for little stars ✨',
        subtitle: `At our childcare center, we believe in creating a nurturing and enriching environment where every child is valued, respected, and supported in their journey of growth and development.
        
        Our philosophy is rooted in the understanding that each child is unique, with their own set of strengths, interests, and learning styles.
        `,
    },
    contact: {
        phone: '(206) 331-1792',
        address: '15216 SE 1st St Bellevue, WA 98007',
        mapUrl:
            'https://www.google.com/maps/place/15216+SE+1st+St,+Bellevue,+WA+98007/@47.609577,-122.1388333,17z/data=!3m1!4b1!4m6!3m5!1s0x54906c3548afcb7d:0x5e788931c8bfb046!8m2!3d47.609577!4d-122.1362584!16s%2Fg%2F11snrb2zgl?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D',
    },
    seo: {
        siteUrl: 'https://mz9201ju.github.io/deebasDayCare',
        defaultTitle: "Deeba's Daycare | Bellevue Childcare",
        description:
            "Deeba's Daycare in Bellevue offers toddler care, enrichment classes, and a nurturing early learning environment for families.",
        defaultImage: '/favicon.png',
        keywords: [
            'daycare bellevue',
            'childcare bellevue wa',
            'early learning center',
            'toddler care',
            'preschool activities',
        ],
    },
}


export const NAV = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Reviews', to: '/reviews' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Contact', to: '/contact' },
]

export const API = {
    reviewsEndpoint: 'https://gh-ai-proxy.omer-mnsu.workers.dev/reviews',
}