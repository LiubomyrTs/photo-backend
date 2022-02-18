const gm = require('gm');
const path = require('path');

function cutImage(req, res, ratio, fieldName = null) {
  let files;
  if (!fieldName) {
    files = [req.file];
  } else {
    files = req.files[fieldName];
  }

  let identified;

  const promises = files.map((f) => new Promise((resolve, reject) => {
    let cropValues;
    const p = new Promise((resolveInner, rejectInner) => {
      gm(path.join(__dirname, '../../', f.path))
        .identify((err, value) => {
          let min;
          if (!value.size) {
            identified = false;
            return;
          }
          if (value.size.height > value.size.width) {
            min = value.size.width;
            cropValues = [min, min / ratio];
          } else {
            min = value.size.height;
            const max = value.size.width;
            cropValues = [max, max / ratio];
          }
          resolveInner();
          if (err) { rejectInner(); }
        });
    });

    if (identified) {
      p.then(() => {
        gm(path.join(__dirname, '../../', f.path))
          .gravity('Center')
          .crop(...cropValues)
          .noProfile()
          .write(path.join(__dirname, '../../', f.path), (err) => {
            if (err) { res.send(500).json({ success: false, msg: 'GM Error' }); reject(); }
            if (!err) { resolve(); }
          });
      });
    }
  }));

  return identified ? Promise.all(promises) : null;
}

module.exports = cutImage;
