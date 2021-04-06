const { Usr } = require("../db/models");

exports.USRCreate = async (req, res, next) => {
  const { password } = req.body;
  const saltRounds = 10;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log("exports.USRCreate -> hashedPassword", hashedPassword);
    req.body.password = hashedPassword;
    await Usr.create(req.body);
    res.json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};


exports.USRList = async (req, res) => {
  try {
    const USRs = await Usr.findAll();
    res.json(USRs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.USRUpdate = (req, res) => {
  const { USRId } = req.params;
  const foundUSR = Usr.find((usr) => usr.id === +USRId);
  if (foundUSR) {
    for (const key in req.body) foundUSR[key] = req.body[key];
    res.status(204).end();
  } else {
    res.status(404).json({ message: "USR not found" });
  }
};

exports.USRDelete = (req, res) => {
  const { USRId } = req.params;
  const foundUSR = Usr.find((usr) => usr.id === +USRId);
  if (foundUSR) {
    Usr = Usr.filter((usr) => usr.id !== +USRId);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "USR not found" });
  }
};
