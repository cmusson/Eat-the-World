const Event = require('./model');


exports.getFoodImage = async (req, res) => {
  try {
    const events = await Event.find();
    const sortedEvents = events.sort((a,b) => a.date - b.date);
    res.json(sortedEvents);
    res.status(200).send(sortedEvents);
    res.end();
  } catch (error) {
    res.status(500).send(error); 
  }
};

exports.getFoodInfo = async (req, res) => {
    try {
      const events = await Event.find();
      const sortedEvents = events.sort((a,b) => a.date - b.date);
      res.json(sortedEvents);
      res.status(200).send(sortedEvents);
      res.end();
    } catch (error) {
      res.status(500).send(error); 
    }
  };