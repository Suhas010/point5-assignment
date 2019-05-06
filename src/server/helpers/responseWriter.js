
function ResponseWriter() {}
ResponseWriter.prototype.success = function(res, data) {
  // if(!res) return new Error();
  res.status(200).data(data);
};

module.export = ResponseWriter();
