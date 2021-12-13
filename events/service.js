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

    app.get("/event", getAllEvents);
    app.post("/event", createEvent);
    app.get("/event/:searchString", searchEventByKeywords);
}
