const SectionHeader = ({ entryNumber, titleLabel }: { entryNumber: number, titleLabel: string }) => {
    const titleNumber = entryNumber.toString().padStart(2, '0');

    return (
        <div className="fira-code text-4xl font-400">
            <span className="text-[#FF5733]">{`${titleNumber}| `}</span>
            <span className="">{titleLabel}</span>
        </div>
    );
};

export default SectionHeader;