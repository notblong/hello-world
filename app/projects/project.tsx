export default function Projects({
  name,
  description,
  link,
  backgroundImageUrl,
}: {
  name: string;
  description: string;
  link: string;
  backgroundImageUrl: string;
}) {
	const backgroundImage =`/images/${backgroundImageUrl}`
  return (
    <>
      <div
        className="relative max-w-full rounded-lg"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "9rem",
        }}
      >
        <div
          className="rounded-lg border text-card-foreground shadow-sm relative flex flex-col lg:flex-row max-w-full mx-auto bg-white bg-opacity-75"
          data-v0-t="card"
        >
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="grow"></div>
          <div className="p-6 flex flex-col items-center lg:flex-row lg:items-start lg:justify-between">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 mt-4 lg:mt-0 self-end lg:self-auto lg:ml-auto mb-4">
              <a href={link} target="_blank">
                View More Details
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
