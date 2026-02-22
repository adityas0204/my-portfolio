const SeamlessMarquee = ({ text }) => {
  return (
    <div className="animate-scroller whitespace-nowrap flex">
      <div>
        <span className="pr-6 md:pr-20">{text}</span>
      </div>
      <div>
        <span className="pr-6 md:pr-20">{text}</span>
      </div>
    </div>
  );
};

export default SeamlessMarquee;