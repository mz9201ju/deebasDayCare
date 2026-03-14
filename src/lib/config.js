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
        address: '15219 SE 1st St Bellevue, WA 98007',
        mapUrl:
            'https://www.google.com/maps/place/15219+SE+1st+St,+Bellevue,+WA+98007/@47.6091663,-122.1387439,17z/data=!3m1!4b1!4m6!3m5!1s0x54906c35528478e7:0xb9328b252ea35bf2!8m2!3d47.6091663!4d-122.136169!16s%2Fg%2F11c1zrjvf4?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D',
    },
    seo: {
        siteUrl: 'https://deebasdaycare.com',
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