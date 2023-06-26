import timeline from '@/app/data/timeline.json';

const Timeline = () => {
    const timelineElements = timeline.map((data, index) => {
        return (
            <div className="timeline" key={index}>
                <div className="timeline__data">
                    <h3>{data.title}</h3>
                    <span>
                        <i className="uil uil-calendar-alt" />
                        {data.date}
                    </span>
                </div>
                <div className="timeline__separator">
                    <div className="timeline__circle" />
                    <div className="timeline__line" />
                </div>
                <div className="timeline__empty" />
            </div>
        );
    });

    return <>{timelineElements}</>;
};

export default Timeline;
