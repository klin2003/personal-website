export interface ProjectLink {
    type: "GitHub" | "Code" | "Try"
    name: string
    url: string
}

export interface ProjectInfo {
    title: string
    status: string
    
    last_updated: string
    images: any[]

    description: string
    objectives: string[]

    tags: string[]

    links: ProjectLink[]
}

const PROJECTS: ProjectInfo[] = [
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

        description: "Placeholder Description",
        objectives: ["Placeholder Objective"],

        tags: ["Placeholder"],

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

        description: "Placeholder Description",
        objectives: ["Placeholder Objective"],

        tags: ["Placeholder"],

        links: [
            { type: "Try", name: "Placeholder", url: "" }
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

        description: "Placeholder Description",
        objectives: ["Placeholder Objective"],

        tags: ["Placeholder"],

        links: [
            { type: "Try", name: "Placeholder", url: "" }
        ]
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

        description: "Placeholder Description",
        objectives: ["Placeholder Objective"],

        tags: ["Placeholder"],

        links: [
            { type: "Try", name: "Placeholder", url: "" }
        ]
    },
    {
        title: "Time2Learn",
        status: "Plans for Revision",
        
        last_updated: "Feb 11, 2024",
        images: Object.values(
            import.meta.glob(`@assets/project-images/T2L/*.png`, {
                eager: true,
                query: {
                  type: 'url',
                },
            }),
        ),

        description: "Placeholder Description",
        objectives: ["Placeholder Objective"],

        tags: ["Placeholder"],

        links: [
            { type: "Try", name: "Placeholder", url: "" }
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

        description: "Placeholder Description",
        objectives: ["Placeholder Objective"],

        tags: ["Placeholder"],

        links: [
            { type: "Try", name: "Placeholder", url: "" }
        ]
    },
    {
        title: "Graphs in MIPs",
        status: "Completed",
        
        last_updated: "Dec 11, 2022",
        images: Object.values(
            import.meta.glob(`@assets/project-images/Graphs_MIPs/*.png`, {
                eager: true,
                query: {
                  type: 'url',
                },
            }),
        ),

        description: "Placeholder Description",
        objectives: ["Placeholder Objective"],

        tags: ["Placeholder"],

        links: [
            { type: "Try", name: "Placeholder", url: "" }
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

        description: "Placeholder Description",
        objectives: ["Placeholder Objective"],

        tags: ["Placeholder"],

        links: [
            { type: "Try", name: "Placeholder", url: "" }
        ]
    }
]

export default PROJECTS;