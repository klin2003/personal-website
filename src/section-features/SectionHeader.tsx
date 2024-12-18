const SectionHeader = ({ entryNumber, titleLabel, className = '' }: { entryNumber: number, titleLabel: string, className?: string }) => {
    const titleNumber = entryNumber.toString().padStart(2, '0');

    return (
        <div className={className}>
            <div className="section-header fira-code">
                <span className="header-num">{`${titleNumber}| `}</span>
                <span className="header-title">{titleLabel}</span>
            </div>
        </div>
    );
};

export default SectionHeader;