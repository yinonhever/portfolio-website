const works = [
    {
        id: "github-timeline-app",
        title: "Github Timeline App",
        featured: true,
        featuredText:
            `
                An app that allows users to submit a Github username and generates a graphical timeline
                and a yearly chart of the user's repositories, with a unique, well-structured and animated
                design. Users can also view the history of all their valid searches, which is saved into
                their browser's storage.
            `,
        mainImg: "/images/github-timeline/desktop-with-timeline.png",
        description:
            `
                This app allows users to submit a Github username and generate a
                graphical timeline of the user's repositories, as well as a chart tallying the number of
                repositories per year. The app, fetcching data from the Github API, creates a
                well-structured graphical display of the data, with unique design and animations. Users can
                also view the history of all their valid searches, which is saved into their browser's storage.
            `,
        url: "https://github-timeline-iota.vercel.app/",
        githubUrl: "https://github.com/yinonhever/github-timeline",
        gallery: [
            {
                title: "Desktop version",
                items: [
                    {
                        type: "desktop",
                        src: "/images/github-timeline/desktop-with-timeline.png",
                        caption: "Desktop – with timeline"
                    },
                    {
                        type: "desktop",
                        src: "/images/github-timeline/desktop-with-chart.png",
                        caption: "Desktop – with chart"
                    },
                    {
                        type: "desktop",
                        src: "/images/github-timeline/desktop-initial.png",
                        caption: "Desktop – initial"
                    },
                    {
                        type: "desktop",
                        src: "/images/github-timeline/desktop-error-1.png",
                        caption: "Desktop – error"
                    },
                    {
                        type: "desktop",
                        src: "/images/github-timeline/desktop-error-2.png",
                        caption: "Desktop – error"
                    },
                    {
                        type: "desktop",
                        src: "/images/github-timeline/desktop-error-3.png",
                        caption: "Desktop – error"
                    },
                    {
                        type: "desktop",
                        src: "/images/github-timeline/desktop-history.png",
                        caption: "Desktop – search history"
                    }
                ]
            },
            {
                title: "Tablet version",
                items: [
                    {
                        type: "tablet",
                        src: "/images/github-timeline/tablet-with-timeline.png",
                        caption: "Tablet – with timeline"
                    },
                    {
                        type: "tablet",
                        src: "/images/github-timeline/tablet-with-chart.png",
                        caption: "Tablet – with chart"
                    },
                    {
                        type: "tablet",
                        src: "/images/github-timeline/tablet-initial.png",
                        caption: "Tablet – initial"
                    }
                ]
            },
            {
                title: "Mobile version",
                items: [
                    {
                        type: "mobile",
                        src: "/images/github-timeline/mobile-with-timeline.png",
                        caption: "Mobile – with timeline"
                    },
                    {
                        type: "mobile",
                        src: "/images/github-timeline/mobile-with-chart.png",
                        caption: "Mobile – with chart"
                    },
                    {
                        type: "mobile",
                        src: "/images/github-timeline/mobile-initial.png",
                        caption: "Mobile – initial"
                    }
                ]
            }
        ]
    },
    {
        id: "where-in-the-world",
        title: "Where in the World?",
        featured: true,
        featuredText:
            `
                An app that displays information on all of the world's countries, allowing users to
                search for countries by name and filter them by region, and view a page with detailed information
                by clicking on a country's card. The user can also switch the website's theme between 
                Dark and Light mode.
            `,
        mainImg: "/images/where-in-the-world/desktop-home.png",
        description:
            `
                An app that displays information on all of the world's countries, fetching data from
                the REST Countries API. On the website's homepage users can search for countries by name, as well as filter countries by
                their region. By clicking on a country's card, users can view a page with detailed information about 
                the country. The user can also switch the website's theme between Dark and Light mode.
            `,
        url: "https://where-in-the-world-olive.vercel.app/",
        githubUrl: "https://github.com/yinonhever/where-in-the-world",
        gallery: [
            {
                title: "Desktop version",
                items: [
                    {
                        type: "desktop",
                        src: "/images/where-in-the-world/desktop-home.png",
                        caption: "Desktop – Home page (Dark)"
                    },
                    {
                        type: "desktop",
                        src: "/images/where-in-the-world/desktop-home-light.png",
                        caption: "Desktop – Home page (Light)"
                    },
                    {
                        type: "desktop",
                        src: "/images/where-in-the-world/desktop-detail.png",
                        caption: "Desktop – Detail page (Dark)"
                    },
                    {
                        type: "desktop",
                        src: "/images/where-in-the-world/desktop-detail-light.png",
                        caption: "Desktop – Detail page (Light)"
                    }
                ]
            },
            {
                title: "Tablet version",
                items: [
                    {
                        type: "tablet",
                        src: "/images/where-in-the-world/tablet-home.png",
                        caption: "Tablet – Home page (Dark)"
                    },
                    {
                        type: "tablet",
                        src: "/images/where-in-the-world/tablet-home-light.png",
                        caption: "Tablet – Home page (Light)"
                    },
                    {
                        type: "tablet",
                        src: "/images/where-in-the-world/tablet-detail.png",
                        caption: "Tablet – Detail page (Dark)"
                    },
                    {
                        type: "tablet",
                        src: "/images/where-in-the-world/tablet-detail-light.png",
                        caption: "Tablet – Detail page (Light)"
                    }
                ]
            },
            {
                title: "Mobile version",
                items: [
                    {
                        type: "mobile",
                        src: "/images/where-in-the-world/mobile-home.png",
                        caption: "Mobile – Home page (Dark)"
                    },
                    {
                        type: "mobile",
                        src: "/images/where-in-the-world/mobile-home-light.png",
                        caption: "Mobile – Home page (Light)"
                    },
                    {
                        type: "mobile",
                        src: "/images/where-in-the-world/mobile-detail.png",
                        caption: "Mobile – Detail page (Dark)"
                    },
                    {
                        type: "mobile",
                        src: "/images/where-in-the-world/mobile-detail-light.png",
                        caption: "Mobile – Detail page (Light)"
                    }
                ]
            }
        ]
    },
    {
        id: "rock-paper-scissors-lizard-spock",
        title: "Rock, Paper, Scissors, Lizard, Spock",
        featured: true,
        featuredText:
            `
                An extended version of the classic Rock, Paper, Scissors game. With a unique design and
                interface, and beautiful animations and transitions that highlight every step of the
                game, this app turns this rather simple game into a fun, even addictive experience.
            `,
        mainImg: "/images/rock-paper-scissors/desktop-initial.png",
        description:
            `
                An extended version of the classic Rock, Paper, Scissors game. With a unique design and
                interface, and beautiful animations and transitions that highlight every step of the
                game, this app turns this rather simple game into a fun, even addictive experience. The user's
                total score is retained even after refreshing the browser.
            `,
        url: "https://rock-paper-scissors-two.vercel.app/",
        githubUrl: "https://github.com/yinonhever/rock-paper-scissors",
        gallery: [
            {
                title: "Desktop version",
                items: [
                    {
                        type: "desktop",
                        src: "/images/rock-paper-scissors/desktop-initial.png",
                        caption: "Desktop – game start"
                    },
                    {
                        type: "desktop",
                        src: "/images/rock-paper-scissors/desktop-play.png",
                        caption: "Desktop – game finish"
                    }
                ]
            },
            {
                title: "Tablet version",
                items: [
                    {
                        type: "tablet",
                        src: "/images/rock-paper-scissors/tablet-initial.png",
                        caption: "Tablet – game start"
                    },
                    {
                        type: "tablet",
                        src: "/images/rock-paper-scissors/tablet-play.png",
                        caption: "Tablet – game finish"
                    }
                ]
            },
            {
                title: "Mobile version",
                items: [
                    {
                        type: "mobile",
                        src: "/images/rock-paper-scissors/mobile-initial.png",
                        caption: "Mobile – game start"
                    },
                    {
                        type: "mobile",
                        src: "/images/rock-paper-scissors/mobile-play.png",
                        caption: "Mobile – game finish"
                    }
                ]
            }
        ]
    },
    {
        id: "scoot",
        title: "Scoot Website",
        featured: true,
        featuredText:
            `
                A beautiful four-page website for a mock company called Scoot, including a wide
                variety of complex design features, decorative elements and background patterns, a unique
                layout, and a lot of fully-responsive small details.
            `,
        mainImg: "/images/scoot/desktop-home.png",
        description:
            `
                A beautiful four-page website for a mock company called Scoot. This website includes a wide
                variety of complex design features, decorative elements and background patterns, a unique
                layout, and a lot of small details that change drastically between different screen sizes, which 
                I made completely responsive.
            `,
        url: "https://scoot-lake.now.sh/",
        githubUrl: "https://github.com/yinonhever/scoot",
        gallery: [
            {
                title: "Desktop version",
                items: [
                    {
                        type: "desktop",
                        src: "/images/scoot/desktop-home.png",
                        caption: "Desktop – Home page"
                    },
                    {
                        type: "desktop",
                        src: "/images/scoot/desktop-about.png",
                        caption: "Desktop – About page"
                    },
                    {
                        type: "desktop",
                        src: "/images/scoot/desktop-careers.png",
                        caption: "Desktop – Careers page"
                    },
                    {
                        type: "desktop",
                        src: "/images/scoot/desktop-locations.png",
                        caption: "Desktop – Locations page"
                    }
                ]
            },
            {
                title: "Tablet version",
                items: [
                    {
                        type: "tablet",
                        src: "/images/scoot/tablet-home.png",
                        caption: "Tablet – Home page"
                    },
                    {
                        type: "tablet",
                        src: "/images/scoot/tablet-about.png",
                        caption: "Tablet – About page"
                    },
                    {
                        type: "tablet",
                        src: "/images/scoot/tablet-careers.png",
                        caption: "Tablet – Careers page"
                    },
                    {
                        type: "tablet",
                        src: "/images/scoot/tablet-locations.png",
                        caption: "Tablet – Locations page"
                    }
                ]
            },
            {
                title: "Mobile version",
                items: [
                    {
                        type: "mobile",
                        src: "/images/scoot/mobile-home.png",
                        caption: "Mobile – Home page"
                    },
                    {
                        type: "mobile",
                        src: "/images/scoot/mobile-about.png",
                        caption: "Mobile – About page"
                    },
                    {
                        type: "mobile",
                        src: "/images/scoot/mobile-careers.png",
                        caption: "Mobile – Careers page"
                    },
                    {
                        type: "mobile",
                        src: "/images/scoot/mobile-locations.png",
                        caption: "Mobile – Locations page"
                    }
                ]
            }
        ]
    },
    {
        id: "myteam",
        title: "Myteam Website",
        featured: false,
        featuredText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        mainImg: "/images/myteam/desktop-home.png",
        description:
            `
                This three-page website includes a quiet complex layout, with a lot of transformations between
                different screen sizes. Among its highlights are an animated mobile menu, a testimonial section,
                the directors' cards with animated switching content, and a responsive contact page with
                full form validation.
            `,
        url: "https://myteam-nu.vercel.app/",
        githubUrl: "https://github.com/yinonhever/myteam",
        gallery: [
            {
                title: "Desktop version",
                items: [
                    {
                        type: "desktop",
                        src: "/images/myteam/desktop-home.png",
                        caption: "Desktop – Home page"
                    },
                    {
                        type: "desktop",
                        src: "/images/myteam/desktop-about.png",
                        caption: "Desktop – About page"
                    },
                    {
                        type: "desktop",
                        src: "/images/myteam/desktop-contact.png",
                        caption: "Desktop – Contact page"
                    }
                ]
            },
            {
                title: "Tablet version",
                items: [
                    {
                        type: "tablet",
                        src: "/images/myteam/tablet-home.png",
                        caption: "Tablet – Home page"
                    },
                    {
                        type: "tablet",
                        src: "/images/myteam/tablet-about.png",
                        caption: "Tablet – About page"
                    },
                    {
                        type: "tablet",
                        src: "/images/myteam/tablet-contact.png",
                        caption: "Tablet – Contact page"
                    }
                ]
            },
            {
                title: "Mobile version",
                items: [
                    {
                        type: "mobile",
                        src: "/images/myteam/mobile-home.png",
                        caption: "Mobile – Home page"
                    },
                    {
                        type: "mobile",
                        src: "/images/myteam/mobile-about.png",
                        caption: "Mobile – About page"
                    },
                    {
                        type: "mobile",
                        src: "/images/myteam/mobile-contact.png",
                        caption: "Mobile – Contact page"
                    }
                ]
            }
        ]
    },
    {
        id: "dine",
        title: "Dine Website",
        mainImg: "/images/dine/desktop-home.png",
        description:
            `  
                A two-page website for a demo restaurant called Dine. The Home page includes a wide variety
                of complex, beautifully designed sections, including a slider with switching content.
                The Booking page includes a fully-validated reservation form, including validation
                for the date and time entered by the user.
            `,
        url: "https://dine-henna.now.sh/",
        githubUrl: "https://github.com/yinonhever/dine",
        gallery: [
            {
                title: "Desktop version",
                items: [
                    {
                        type: "desktop",
                        src: "/images/dine/desktop-home.png",
                        caption: "Desktop – Home page"
                    },
                    {
                        type: "desktop",
                        src: "/images/dine/desktop-booking.png",
                        caption: "Desktop – Booking page"
                    }
                ]
            },
            {
                title: "Tablet version",
                items: [
                    {
                        type: "tablet",
                        src: "/images/dine/tablet-home.png",
                        caption: "Tablet – Home page"
                    },
                    {
                        type: "tablet",
                        src: "/images/dine/tablet-booking.png",
                        caption: "Tablet – Booking page"
                    }
                ]
            },
            {
                title: "Mobile version",
                items: [
                    {
                        type: "mobile",
                        src: "/images/dine/mobile-home.png",
                        caption: "Mobile – Home page"
                    },
                    {
                        type: "mobile",
                        src: "/images/dine/mobile-booking.png",
                        caption: "Mobile – Booking page"
                    }
                ]
            }
        ]
    },
    {
        id: "url-shortening",
        title: "URL Shortening Landing Page",
        mainImg: "/images/shortly/desktop-initial.png",
        description: "A landing page for a mock company called Shortly, which manages shortened links for business clients. This page also serves as a functional web app, allowing users to generate shortened URLs, copy them to their clipboard, and keep the list of their shortened URLs even after refreshing the browser.",
        url: "https://shortly-bay.vercel.app/",
        githubUrl: "https://github.com/yinonhever/shortly",
        gallery: [
            {
                title: "Desktop version",
                items: [
                    {
                        type: "desktop",
                        src: "/images/shortly/desktop-initial.png",
                        caption: "Desktop – initial"
                    },
                    {
                        type: "desktop",
                        src: "/images/shortly/desktop-active.png",
                        caption: "Desktop – active"
                    }
                ]
            },
            {
                title: "Tablet version",
                items: [
                    {
                        type: "tablet",
                        src: "/images/shortly/tablet-initial.png",
                        caption: "Tablet – initial"
                    },
                    {
                        type: "tablet",
                        src: "/images/shortly/tablet-active.png",
                        caption: "Tablet – active"
                    }
                ]
            },
            {
                title: "Mobile version",
                items: [
                    {
                        type: "mobile",
                        src: "/images/shortly/mobile-initial.png",
                        caption: "Mobile – initial"
                    },
                    {
                        type: "mobile",
                        src: "/images/shortly/mobile-active.png",
                        caption: "Mobile – active"
                    }
                ]
            }
        ]
    },
    {
        id: "job-listings",
        title: "Job Listings with Filtering",
        mainImg: "/images/job-listings/desktop.png",
        description:
            `
                This page includes a beautifully-designed, fully-responsive set of demo job listings, with 
                each listing including a list of its categories (the role, the level, and the required
                languages and tools). Users can dynamically filter the job listings by category.
            `,
        url: "https://job-listings-alpha.vercel.app/",
        githubUrl: "https://github.com/yinonhever/job-listings",
        gallery: [
            {
                title: "Desktop version",
                items: [
                    {
                        type: "desktop",
                        src: "/images/job-listings/desktop.png",
                        caption: "Desktop – initial"
                    },
                    {
                        type: "desktop",
                        src: "/images/job-listings/desktop-filtered.png",
                        caption: "Desktop – filtered"
                    }
                ]
            },
            {
                title: "Tablet version",
                items: [
                    {
                        type: "tablet",
                        src: "/images/job-listings/tablet.png",
                        caption: "Tablet – initial"
                    },
                    {
                        type: "tablet",
                        src: "/images/job-listings/tablet-filtered.png",
                        caption: "Tablet – filtered"
                    }
                ]
            },
            {
                title: "Mobile version",
                items: [
                    {
                        type: "mobile",
                        src: "/images/job-listings/mobile.png",
                        caption: "Mobile – initial"
                    },
                    {
                        type: "mobile",
                        src: "/images/job-listings/mobile-filtered.png",
                        caption: "Mobile – filtered"
                    }
                ]
            }
        ]
    },
    {
        id: "manage",
        title: "Manage Landing Page",
        mainImg: "/images/manage/desktop.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        url: "https://manage-ten.now.sh/",
        githubUrl: "https://github.com/yinonhever/manage",
        gallery: [
            {
                title: "Desktop version",
                items: [
                    {
                        type: "desktop",
                        src: "/images/manage/desktop.png",
                        caption: "Desktop"
                    }
                ]
            },
            {
                title: "Tablet version",
                items: [
                    {
                        type: "tablet",
                        src: "/images/manage/tablet.png",
                        caption: "Tablet"
                    }
                ]
            },
            {
                title: "Mobile version",
                items: [
                    {
                        type: "mobile",
                        src: "/images/manage/mobile.png",
                        caption: "Mobile"
                    }
                ]
            }
        ]
    },
    {
        id: "easybank",
        title: "Easybank Landing Page",
        mainImg: "/images/easybank/desktop.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        url: "https://easybank-landing-page-pearl.vercel.app/",
        githubUrl: "https://github.com/yinonhever/easybank-landing-page",
        gallery: [
            {
                title: "Desktop version",
                items: [
                    {
                        type: "desktop",
                        src: "/images/easybank/desktop.png",
                        caption: "Desktop"
                    }
                ]
            },
            {
                title: "Tablet version",
                items: [
                    {
                        type: "tablet",
                        src: "/images/easybank/tablet.png",
                        caption: "Tablet"
                    }
                ]
            },
            {
                title: "Mobile version",
                items: [
                    {
                        type: "mobile",
                        src: "/images/easybank/mobile.png",
                        caption: "Mobile"
                    }
                ]
            }
        ]
    },
    {
        id: "chat-app-illustration",
        title: "Chat App Illustration",
        mainImg: "/images/chat-app-illustration/desktop.png",
        description:
            `
                This mockup of a chat app's interface is built entirely from scratch with CSS, complete
                with various common features of a chat app and accompained by background patterns. Beautiful
                loading animations are applied to the chat's elements. This mockup is completely responsive
                to any change in the screen's width or the browser's font size.
           `,
        url: "https://chat-app-illustration.vercel.app/",
        githubUrl: "https://github.com/yinonhever/chat-app-illustration",
        gallery: [
            {
                title: "Desktop version",
                items: [
                    {
                        type: "desktop",
                        src: "/images/chat-app-illustration/desktop.png",
                        caption: "Desktop"
                    }
                ]
            },
            {
                title: "Tablet version",
                items: [
                    {
                        type: "tablet",
                        src: "/images/chat-app-illustration/tablet.png",
                        caption: "Tablet"
                    },
                ]
            },
            {
                title: "Mobile version",
                items: [
                    {
                        type: "mobile",
                        src: "/images/chat-app-illustration/mobile.png",
                        caption: "Mobile"
                    }
                ]
            }
        ]
    },
    {
        id: "social-media-dashboard",
        title: "Social Media Dashboard",
        mainImg: "/images/dashboard/desktop-dark.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        url: "https://dashboard-silk.vercel.app/",
        githubUrl: "https://github.com/yinonhever/dashboard",
        gallery: [
            {
                title: "Desktop version",
                items: [
                    {
                        type: "desktop",
                        src: "/images/dashboard/desktop-dark.png",
                        caption: "Desktop (Dark)"
                    },
                    {
                        type: "desktop",
                        src: "/images/dashboard/desktop-light.png",
                        caption: "Desktop (Light)"
                    }
                ]
            },
            {
                title: "Tablet version",
                items: [
                    {
                        type: "tablet",
                        src: "/images/dashboard/tablet-dark.png",
                        caption: "Tablet (Dark)"
                    },
                    {
                        type: "tablet",
                        src: "/images/dashboard/tablet-light.png",
                        caption: "Tablet (Light)"
                    }
                ]
            },
            {
                title: "Mobile version",
                items: [
                    {
                        type: "mobile",
                        src: "/images/dashboard/mobile-dark.png",
                        caption: "Mobile (Dark)"
                    },
                    {
                        type: "mobile",
                        src: "/images/dashboard/mobile-light.png",
                        caption: "Mobile (Light)"
                    }
                ]
            }
        ]
    },
    {
        id: "bookmark",
        title: "Bookmark Landing Page",
        mainImg: "/images/bookmark/desktop.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        url: "https://bookmark-landing-page-sigma.now.sh/",
        githubUrl: "https://github.com/yinonhever/bookmark",
        gallery: [
            {
                title: "Desktop version",
                items: [
                    {
                        type: "desktop",
                        src: "/images/bookmark/desktop.png",
                        caption: "Desktop"
                    }
                ]
            },
            {
                title: "Tablet version",
                items: [
                    {
                        type: "tablet",
                        src: "/images/bookmark/tablet.png",
                        caption: "Tablet"
                    }
                ]
            },
            {
                title: "Mobile version",
                items: [
                    {
                        type: "mobile",
                        src: "/images/bookmark/mobile.png",
                        caption: "Mobile"
                    }
                ]
            }
        ]
    }
];

export default works;