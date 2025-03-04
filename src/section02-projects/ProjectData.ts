export interface ProjectLink {
    type: "GitHub" | "Try" | "Resource" | "Download" | "Other"
    title ?: string
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

        description: "ViewYou is a 48-hour hackathon project built as a team of 4 to help users ace interviews through behavioral questions. It generates tailored prompts based on a job title and records responses in a virtual interview setup. Using OpenAI, the tool evaluates both spoken answers and body language, applying the STAR interview method for a structured review.",
        tags: ["JavaScript", "React", "Node.js", "Express.js", "Python", "Flask", "DeepFace", "OpenAI"],
        links: [
            { type: "GitHub", name: "Frontend", url: "https://github.com/yemoeaung1/frontend" },
            { type: "GitHub", name: "Backend", url: "https://github.com/klin4042/cewit-2024-backend" },
            { type: "Other", title: "DevPost", name: "ViewYou", url: "https://devpost.com/software/viewyou" }
        ]
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

        description: "Using the Minecraft Development Plugin for IntelliJ with Bukkit and Spigot, I created a Bingo plugin for Minecraft. Players form teams of any size and compete by searching for items throughout the world. To keep things engaging, players vote on modifications during the game, adding unique twists and extra flair to the experience.",
        tags: ["Java", "SpigotMC"],
        links: [
            { type: "Resource", name: "Spigot MC", url: "https://www.spigotmc.org/" },
            { type: "Resource", name: "Minecraft Development Plugin", url: "https://plugins.jetbrains.com/plugin/8327-minecraft-development" }
            // { type: "Download", name: "Bingo.jar", url: `/personal-website/Bingo.jar` }
        ]
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