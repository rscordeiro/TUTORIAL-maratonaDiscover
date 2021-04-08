let data = {
        name: "Roberto",
        avatar: "https://github.com/rscordeiro.png",
        "monthly-budget": 3000,
        "days-per-week": 5,
        "hours-per-day": 5,
        "vacation-per-year": 4,
        "value-hours": 75
    };

    module.exports = {
        get() {
            return data;
        },
        update(newData){
            data = newData;
        }
    }