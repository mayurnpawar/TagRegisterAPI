// var AWS = require('aws-sdk');
// var mysql = require('mysql');
//AWS.config.update({region: 'us-east-1'},{endpoint: "email.us-east-1.amazonaws.com"});
// var connection = mysql.createConnection ({ host : 'tagenrollment.ct1owwaytgp7.us-east-1.rds.amazonaws.com',
// user : 'tagenrollment',
// password : 'tagenrollment',
// database : 'tagenrollment' });
var port = process.env.PORT || 80;

var express = require('express');
//var bodyParser = require('body-parser');
//var sqs = new AWS.SQS();
var app = express();
app.use(bodyParser.json());

//Content Type in Header POSTMAN
//Content-Type: application/json

//REQUEST to Push Message
// {
//     "MDN": "6464645623",
//     "FirstName": "Mayur",
//     "LastName": "Pawar",
//     "Email": "mayurnpawar@gmail.com",
//     "TagsDetails": [
//         {
//             "TagName": "TestTag1",
//             "TagDescription": "TestDescription1",
//             "Status": "InActive"
//         },
//         {
//             "TagName": "TestTag2",
//             "TagDescription": "TestDescription2",
//             "Status": "InActive"
//         },
//         {
//             "TagName": "TestTag3",
//             "TagDescription": "TestDescription3",
//             "Status": "InActive"
//         }
//     ]
// }

// app.post('/pushmessage',(req,res)=>{
//       if(req.body == "")
//       {
//         res.status(400).send("Bad Request");
//         return;
//       }
//       var stringObject = JSON.stringify(req.body);
//       var params = {
//         DelaySeconds: 10,
//         MessageAttributes: {
//          "MessageType": {
//            DataType: "String",
//            StringValue: "JSON"
//           }
//         },
//         MessageBody: stringObject,
//         QueueUrl: "https://sqs.us-east-1.amazonaws.com/430577438468/TagRegisQueue"
//        };

//        sqs.sendMessage(params, function(err, ReturnData) {
//          if (err)
//          {
//          console.log(err, err.stack); // an error occurred
//          }
//          else
//          {
//           console.log('Message sent to Queue')
//           console.log(ReturnData);
//           res.send(ReturnData);
//           // successful response
//          }
//        });
// });

// {
// "TagID":10,
// "MDN":"6464645623",
// "Status":"Active"
// }
// app.post('/RegisterTags',(req,res)=>{
//   if(req.body == "")
//   {
//     res.status(400).send("Bad Request");
//     return;
//   }

//   var TagData = JSON.parse(JSON.stringify(req.body));
//   console.log(TagData);
//   var query = 'CALL tagenrollment.sp_update_TagEnrollment("'+TagData.MDN+'",'+TagData.TagID+',"'+TagData.Status+'");';
//   console.log(query);
//   connection.connect();
//   connection.query(query,
//   function(err, rows)
//   {
//     if (err)
//     {
//     console.log(err);  // Show the Error or Log the error in DB
//     }
//     else
//     {
//       console.log('Tag Enrollment Data updated');
//       connection.end();
//       res.send(rows);
//     }
//   });
// });

// app.get('/GetTag/:MDN',(req,res)=>{
//   // if(!req.parms)
//   // {
//   //   res.status(400).send("Bad Request : Please pass MDN to get all tags");
//   //   return;
//   // }
//   //console.log(req.params.MDN);
//   var query = 'CALL tagenrollment.sp_Get_TagEnrollmentWithMDN("'+req.params.MDN+'");';
//   console.log(query);
//   connection.connect();
//   connection.query(query,
//   function(err, rows)
//   {
//     if (err)
//     {
//     console.log(err);  // Show the Error or Log the error in DB
//     }
//     else
//     {
//       console.log('Tag Details');
//       connection.end();
//       res.send(rows);
//     }
//   });
// });

app.get('/Error',(req,res)=>{
res.send( {
  Error : 'This is bad Error'
}
)
});

app.get('/',(req,res)=>{
res.send('This is Home page');
});

app.listen(port);
