function responseLocals(req, res, next) {
  res.locals = {
    req: {
      title: 'TestEntries v1.0.0'
    }
  };

  next();
};

module.exports = responseLocals;
