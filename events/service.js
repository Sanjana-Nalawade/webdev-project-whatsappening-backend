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


    const getTodayEvents = (req, res) =>
        dao.getTodayEvents().then(events => res.json(events))

    const getLatestPosts = (req, res) =>
        dao.getLatestPosts()
            .then(events => res.json(events));


    const fetchEventById = (req, res) =>
        dao.fetchEventById(req.params.id)
            .then(event => res.json(event));


    app.get("/event/:id/fetch", fetchEventById);
    app.get("/event", getAllEvents);
    app.post("/event", createEvent);
    app.get("/event/:searchString", searchEventByKeywords);
    app.get("/event/:uid/:eid/like", likeEvent);
    app.get("/event/:uid/:eid/dislike", dislikeEvent);
    app.get("/event/today", getTodayEvents);
    app.get("/latestposts", getLatestPosts);
}
