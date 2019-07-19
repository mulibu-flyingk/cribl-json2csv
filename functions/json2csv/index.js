const JSONToCSV = require("json2csv").parse;

const { Expression } = C.expr;
const cLogger = C.util.getLogger('func:eval');

exports.name = 'Convert JSON to CSV';
exports.version = '0.1';
exports.disabled = false;
exports.group = 'LC Systems';

let fields2keep = []; // key1, expr1, key2, expr2 ...

exports.init = (opts) => {
  const conf = opts.conf;
  fields2keep = conf.keep;
};


exports.process = (event) => {

  // Convert JSON to CSV data
  const source = [];
  obj = JSON.parse(event._raw);
  source.push(obj);
  const val = JSONToCSV(source, { fields: fields2keep, header: false});
  event._raw = val;

  return event;
};
