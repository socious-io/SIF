import Button from 'src/modules/General/components/Button';

export const Projects = () => {
  return (
    <div className="p-8 relative flex flex-col items-center">
      <div className="w-full bg-Brand-800 text-Base-White rounded-3xl flex flex-col items-center gap-6 p-[6rem]">
        Make your impact Vote and donate
        <span>Give everyone the chance to make a difference</span>
        <div className="flex items-center gap-3 mt-6">
          <Button color="inherit" customStyle="text-Gray-light-mode-700 min-w-[9.25rem]">
            Learn more
          </Button>
          <Button color="primary" customStyle="min-w-[9.25rem]">
            Explore
          </Button>
        </div>
      </div>
      <img src="/images/line-pattern.png" className="absolute bottom-0 left-0" />
      <div className="flex flex-col gap-8 max-w-[60rem] rounded-xl shadow-xl overflow-hidden absolute bottom-[-85%]">
        <img src="/images/explorer-cover.png" alt="Explorer" />
        Round 1: Empowering Change Makers
        <div className="text-sm">
          <span className="font-medium">Proposal submission period: </span>
          2024/01/01 - 2024/01/14
        </div>
        <div className="text-sm">
          <span className="font-medium">Voting Period: </span>
          2024/01/15 - 2024/01/29
        </div>
        <div className="text-sm">
          <span className="font-medium">Voting results announced: </span>
          2024/02/07
        </div>
        <p>
          Thanks to our generous sponsors and partners, we have reached a matching pool of $50,000.Every donation made
          to participating projects will be matched using the quadratic funding formula, amplifying the impact of your
          contributions.By voting and donating, you can help these innovative initiatives gain visibility, secure
          funding, and scale their impact.
        </p>
      </div>
    </div>
  );
};
