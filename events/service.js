const dao = require('./dao')

module.exports = (app) => {

    const getAllEvents = (req, res) =>
        dao.getAllEvents()
            .then(events => res.json(events));

    const createEvent = (req, res) =>
        dao.createEvent(req.body)
            .then((createEvent) => res.json(createEvent));

    const searchEventByKeywords = (req, res) => {
        dao.searchEventByKeywords(req.params.searchString)
            .then(results => res.json(results));
    }

    const likeEvent = (req, res) => {
        dao.likeEvent(req.params.uid, req.params.eid).then(status => res.send(status));
    }

    const dislikeEvent = (req, res) => {
        dao.dislikeEvent(req.params.uid, req.params.eid).then(status => res.send(status));
    }

    app.get("/event", getAllEvents);
    app.post("/event", createEvent);
    app.get("/event/:searchString", searchEventByKeywords);
    app.get("/event/:uid/:eid/like", likeEvent);
    app.get("/event/:uid/:eid/dislike", dislikeEvent);
}
