export interface Project {
    name: string;
    description: string[];
    tech: string[];
    link: {
        url: string;
        label: string;
    };
}

export const projects: Project[] = [
    {
        name: "travelbuddy",
        description: [
            "travel planning app for discovering destinations and building trips",
            "oauth, day-by-day itinerary builder, budget tracking, multi-currency conversion",
            "real-time weather, google maps/places api, user reviews, redis caching"
        ],
        tech: ["react", "node.js", "express", "mongodb", "redis"],
        link: {
            url: "https://github.com/sameerfidai/travel-buddy",
            label: "website soon →",
        },
    },
    {
        name: "base explorer",
        description: [
            "blockchain explorer for coinbase's base L2 network",
            "wallet balance lookups, transaction history, real-time eth price data",
        ],
        tech: ["react", "typescript", "python", "web3.py"],
        link: {
            url: "https://base-explorer.vercel.app/",
            label: "website →",
        },
    },
    {
        name: "fivelegflex",
        description: [
            "sports betting props analysis app",
            "real-time data for nba, nfl, mlb, wnba, cfb, mls, and more",
        ],
        tech: ["next.js", "javascript", "python"],
        link: {
            url: "https://fivelegflex.com",
            label: "website →",
        },
    },
    {
        name: "crypto stats",
        description: [
            "real-time cryptocurrency dashboard",
            "market statistics and trends",
        ],
        tech: ["react", "html", "css"],
        link: {
            url: "https://crypto-stats-app.netlify.app/",
            label: "website →",
        },
    },
];
