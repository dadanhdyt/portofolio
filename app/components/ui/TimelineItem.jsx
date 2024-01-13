export default function TimelineItem({ children, title, end }) {
    return (
        <div className="flex">
            <div className="mr-4 flex flex-col items-center">
                <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-400">
                       { end == false ? <svg
                            viewBox="0 0 24 24"
                            className="w-6 h-6 text-primary-400 icon-bold"
                            astro-icon="tabler:arrow-down"
                        >
                            <g
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="icon-tabler"
                            >
                                <path d="M12 5v14M18 13l-6 6M6 13l6 6" />
                            </g>
                        </svg> :   <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-primary-400 icon-bold"
                        astro-icon="tabler:check"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m5 12 5 5L20 7"
                        />
                      </svg>}
                    </div>
                </div>
                <div className="h-full w-px bg-text-500" />
            </div>
            {end == false ? <div className="pt-1 pb-8">
                <p className="mb-2 text-xl font-medium text-text-500">
                    {title}
                </p>
                <p>
                    {children}
                </p>
            </div> : <div className="pt-1">
                <p className="mb-2 text-xl font-medium text-text-500">
                    <span>Insyaalah Super Developer!</span>
                </p>
                <p className="text-gray-700" />
            </div>}
        </div>
    )
}