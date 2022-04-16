const { google } = require("googleapis");

module.exports.home = function(req,res){
    return res.render('index');
}

module.exports.about = function(req,res){
    return res.render('about');
}
module.exports.initiatives = function(req,res){
    return res.render('initiative-page');
}

module.exports.team = function(req,res){
    return res.render('team');
}

module.exports.contact = function(req,res){
    return res.render('contact');
}

module.exports.events = function(req,res){
    return res.render('events');
}
module.exports.events = function(req,res){
    return res.render('kartavya');
}

module.exports.recruitment = function(req,res){
    return res.render('recruitment');
}

module.exports.submit = async function(req,res){
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
      });
      const client = await auth.getClient();
      const googleSheets = google.sheets({ version: "v4", auth: client });
      const spreadsheetId = `1JGyn-9UHVbObnKlYK4sTtSz3yeARnQBfWWjZwaOF4Qc`;
      const metaData = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId,
      });
      //   console.log(metaData);
      await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Sheet1!A:N",
        valueInputOption: "RAW",
        resource: {
          values: [[
            new Date(), 
            req.body.name,
            req.body.rollNumber,
            req.body.email,
            req.body.phoneNumber,
            req.body.yearOfStudy,
            req.body.course,
            req.body.ques1,
            req.body.ques2,
            req.body.ques3,
            req.body.ques4,
            req.body.ques5,
            req.body.slot1.join(","),
            req.body.slot2.join(","),
        ]],
        },
      });
      return res.redirect('/');
}
