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

    description: string

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

        description: "Placeholder Description",

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

        description: "Placeholder Description",

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

        description: "Placeholder Description",

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

        description: "Placeholder Description",

        links: []
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

        description: "Placeholder Description",

        links: [
            { type: "GitHub", name: "320 Memory Allocator", url: "https://github.com/klin2003/320-memory-allocator" }
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

        description: "Placeholder Description",

        links: [
            { type: "GitHub", name: "Totally Not Crossy Road", url: "https://github.com/klin2003/totally-not-crossy-road" }
        ]
    }
]

export default PROJECTS;