export interface ProjectLink {
    type: "GitHub" | "Try"
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

        description: "Placeholder Description",
        tags: ["JavaScript", "React", "Java", "Spring", "Python", "Pandas", "GeoPandas", "MongoDB"],
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

        description: "Placeholder Description",
        tags: ["TypeScript", "Gulp.js", "Wolfie2D"],
        links: [
            { type: "Try", name: "Asphodel", url: "https://asphodel-game.web.app/" }
        ]
    },
    {
        title: "ViewYou",
        status: "Plans for Revision",
        
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
        title: "Time2Learn",
        status: "Completed",
        
        last_updated: "Feb 11, 2024",
        images: Object.values(
            import.meta.glob(`@assets/project-images/T2L/*.png`, {
                eager: true,
                query: {
                  type: 'url',
                },
            }),
        ),
        aspect_ratio: (1920 / 1080),

        description: "Placeholder Description",
        tags: ["JavaScript", "React", "Node.js", "MongoDB"],
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

        description: "Placeholder Description",
        tags: ["C", "GDB"],
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

        description: "Placeholder Description",
        tags: ["MIPS Assembly", "MARS"],
        links: [
            { type: "GitHub", name: "220 MIPs Graphs", url: "https://github.com/klin2003/220-mips-graphs" }
        ]
    },
    {
        title: "Totally Not Crossy Road",
        status: "Completed",
        
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

        description: "A two-day project for my AP Computer Science A high school course where I used Java with the Processing API to create a replica of Crossy Road, based on concepts from class and the official documentation.",
        tags: ["Java", "Processing"],
        links: [
            { type: "GitHub", name: "Totally Not Crossy Road", url: "https://github.com/klin2003/totally-not-crossy-road" }
        ]
    }
]

export default PROJECTS;