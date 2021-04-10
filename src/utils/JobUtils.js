module.exports = {
    remainingDays(job) {
        const daysAmount = (job["total-hours"] / job["daily-hours"]).toFixed();
        const createdDate = new Date(job.created_at);
        const dueDay = createdDate.getDate() + Number(daysAmount);
        const dueDate = createdDate.setDate(dueDay);
        const timeDiffInMs = dueDate - Date.now();
        const dayInMs = 1000 * 60 * 60 * 24;
        const daysDiff = Math.ceil(timeDiffInMs / dayInMs);
        return daysDiff;
    },
    calculateBudget: (job, valueHour) => valueHour * job["total-hours"]
}