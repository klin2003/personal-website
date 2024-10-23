import SectionHeader from "../section-features/SectionHeader";

export default function ToolsPage(props: any) {
    return (
        <div id="tools" className="flex flex-row items-center">
            <SectionHeader className="tools" entryNumber={3} titleLabel={(props.width > 1200) ? "Tools (WIP)" : ""} />
        </div>
    );
}