export interface ProjectLink {
    type: "GitHub" | "Try" | "Resource"
    name: string
    url: string
}

export interface ProjectInfo {
    title: string
    status: string
    
    last_updated: string
    images: any[]
    aspect_ratio: number

    description: string
    tags: string[]
    links: ProjectLink[]
}

const PROJECTS: ProjectInfo[] = [
    {
        title: "Lobos Client",
        status: "Plans for Revision",
        
        last_updated: "Feb 6, 2025",
        images: Object.values(
            import.meta.glob(`@assets/project-images/LobosClient/*.png`, {
                eager: true,
                query: {
                  type: 'url',
                },
            }),
        ),
        aspect_ratio: (1920 / 1080),

        description: "Senior design project completed as a team of four, focusing on analyzing and visualizing political data. Python was used to preprocess Census data through Pandas, with further analysis done through libraries such as PyEI and GerryChain. Check out the project via the attached link and feel free to reach out with any questions!",
        tags: ["JavaScript", "React", "Leaflet", "MongoDB", "Java", "Spring", "Python", "Pandas"],
        links: [
            { type: "Try", name: "Lobos Client", url: "https://lobos-client.vercel.app/" }
        ]
    },
    {
        title: "Asphodel Game",
        status: "Plans for Revision",
        
        last_updated: "Jul 3, 2024",
        images: Object.values(
            import.meta.glob(`@assets/project-images/Asphodel/*.png`, {
                eager: true,
                query: {
                  type: 'url',
                },
            }),
        ),
        aspect_ratio: (1500 / 1000),

        description: "A browser game built as a team of three for our 2D Game Development course. Developed with TypeScript using a custom engine, Wolfie2D, and bundled with Gulp.js, then served via Firebase. Play with a friend in this immersive local 2-player adventure through the attached link!",
        tags: ["TypeScript", "Gulp.js", "Wolfie2D", "Firebase"],
        links: [
            { type: "Try", name: "Asphodel", url: "https://asphodel-game.web.app/" },
            { type: "Resource", name: "Wolfie2D", url: "https://zgrandison.github.io/" }
        ]
    },
    {
        title: "ViewYou",
        status: "Archived",
        
        last_updated: "Mar 13, 2024",
        images: Object.values(
            import.meta.glob(`@assets/project-images/ViewYou/*.png`, {
                eager: true,
                query: {
                  type: 'url',
                },
            }),
        ),
        aspect_ratio: (1920 / 1080),

        description: "Placeholder Description",
        tags: ["JavaScript", "React", "Node.js", "Express.js", "Python", "Flask", "DeepFace", "OpenAI"],
        links: []
    },
    {
        title: "Minecraft Bingo",
        status: "Plans for Revision",
        
        last_updated: "Oct 29, 2023",
        images: Object.values(
            import.meta.glob(`@assets/project-images/MCBingo/*.png`, {
                eager: true,
                query: {
                  type: 'url',
                },
            }),
        ),
        aspect_ratio: (1920 / 1080),

        description: "Placeholder Description",
        tags: ["Java", "SpigotMC"],
        links: []
    },
    {
        title: "Fake Stack Overflow",
        status: "Plans for Revision",
        
        last_updated: "Dec 22, 2023",
        images: Object.values(
            import.meta.glob(`@assets/project-images/FakeSO/*.png`, {
                eager: true,
                query: {
                  type: 'url',
                },
            }),
        ),
        aspect_ratio: (1920 / 1080),

        description: "Placeholder Description",
        tags: ["JavaScript", "React", "Node.js", "Express.js", "bcrypt", "MongoDB"],
        links: []
    },
    {
        title: "C Memory Allocator",
        status: "Completed",
        
        last_updated: "Apr 05, 2023",
        images: Object.values(
            import.meta.glob(`@assets/project-images/MemoryAllocator/*.png`, {
                eager: true,
                query: {
                  type: 'url',
                },
            }),
        ),
        aspect_ratio: (1920 / 1080),

        description: "A custom dynamic memory allocator in C, replicating malloc(), free(), and realloc(). This project utilizes quick lists for efficient small block management, headers/footers for tracking, and coalescing to reduce fragmentation. A deep dive into memory management and systems programming. Check out the attached GitHub repo for more information!",
        tags: ["C", "GDB", "Valgrind"],
        links: [
            { type: "GitHub", name: "320 Memory Allocator", url: "https://github.com/klin2003/320-memory-allocator" }
        ]
    },
    {
        title: "Graphs in MIPS",
        status: "Completed",
        
        last_updated: "Dec 11, 2022",
        images: Object.values(
            import.meta.glob(`@assets/project-images/Graphs_MIPS/*.png`, {
                eager: true,
                query: {
                  type: 'url',
                },
            }),
        ),
        aspect_ratio: (1920 / 1080),

        description: "This project builds a simple graph-based social network in MIPS assembly, with nodes as people and relationships as edges. It allows you to add people, find users by name, manage relationships, and query for distant friends. This project explores memory management, data structures, and graph traversal in low-level programming. Check out the GitHub repo for more details!",
        tags: ["MIPS", "Assembly", "MARS"],
        links: [
            { type: "GitHub", name: "220 MIPs Graphs", url: "https://github.com/klin2003/220-mips-graphs" }
        ]
    },
    {
        title: "Totally Not Crossy Road",
        status: "Archived",
        
        last_updated: "Jun 14, 2020",
        images: Object.values(
            import.meta.glob(`@assets/project-images/TNCR/*.png`, {
                eager: true,
                query: {
                  type: 'url',
                },
            }),
        ),
        aspect_ratio: (800 / 800),

        description: "Two-day project for my AP Computer Science A high school course where Java and Processing API were used to create a replica of Crossy Road. Our ultimate goal was to combine concepts discussed in class with official documentation to create a replica of an existing game. Try the game out by downloading it from the attached GitHub repo!",
        tags: ["Java", "Processing"],
        links: [
            { type: "GitHub", name: "Totally Not Crossy Road", url: "https://github.com/klin2003/totally-not-crossy-road" },
            { type: "Resource", name: "Processing API", url: "https://processing.org/" }
        ]
    }
]

export default PROJECTS;