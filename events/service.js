const dao = require('./dao')

module.exports = (app) => {

    const getAllEvents = (req, res) =>
        dao.getAllEvents()
            .then(events => res.json(events));

    const createEvent = (req, res) =>
        dao.createEvent(req.body)
            .then((createEvent) => res.json(createEvent));

    const searchEventByKeywords = (req, res) => {
        dao.searchEventByKeywords(req.params.searchString).then(results => res.json(results));
    }

    const getTodayEvents = (req, res) =>
        dao.getTodayEvents().then(events => res.json(events))

    const getLatestPosts = (req, res) =>
        dao.getLatestPosts()
            .then(events => res.json(events));

    app.get("/event", getAllEvents);
    app.post("/event", createEvent);
    app.get("/event/:searchString", searchEventByKeywords);
    app.get("/event/today", getTodayEvents);
    app.get("/latestposts", getLatestPosts);
}
