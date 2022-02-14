const gm = require('gm');
const path = require('path');

function cutImage(req, res, ratio, fieldName = null) {
  let files;
  if (!fieldName) {
    files = [req.file];
  } else {
    files = req.files[fieldName];
  }

  const promises = files.map((f) => new Promise((resolve, reject) => {
    let cropValues;
    const p = new Promise((resolveInner, rejectInner) => {
      gm(path.join(__dirname, '../../', f.path))
        .identify((err, value) => {
          let min;
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
  }));

  return Promise.all(promises);
}

module.exports = cutImage;
