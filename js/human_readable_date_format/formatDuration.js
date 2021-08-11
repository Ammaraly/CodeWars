function formatDuration(seconds) {
    let time = [];
    let intervals = {
        year: 365 * 24 * 60 * 60,
        day: 24 * 60 * 60,
        hour: 60 * 60,
        minute: 60,
    }
    Object.getOwnPropertyNames(intervals).forEach((interval) => {
        if (seconds >= intervals[interval]) {
            let addedInterval = Math.floor(seconds / intervals[interval]);
            time.push(`${addedInterval} ${interval}${addedInterval > 1 ? 's' : ''}`);
            seconds = seconds % intervals[interval];
        }
    });
    if (seconds) time.push(`${seconds} second${seconds > 1 ? 's' : ''}`)
    if (time.length > 2) {
        time = time.splice(0, time.length - 1).join(', ') + " and " + time[time.length - 1];
    } else {
        time = time.join(" and ")
    }
    return time || "now";
}


console.log(formatDuration(3662));