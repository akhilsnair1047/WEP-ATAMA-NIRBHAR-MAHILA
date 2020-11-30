var express        = require('express'),
    bodyparser     = require('body-parser'),
    mongoose       = require('mongoose'),
    User           = require('./models/userSchema.js'),
    methodOverride = require('method-override'),
    Contact = require('./models/ContactSchema');

var app = express();

mongoose.connect("mongodb://localhost/women_empowerment",{ useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyparser.urlencoded({extended : true}));
app.set("view engine", "ejs");
mongoose.set('useFindAndModify', false);
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"))

// Routes

// 1) Home Route
app.get('/', (req, res) => {
    res.render("index");
});


// 2) Register Route
app.get('/register', (req, res) =>{
    res.render('register');
});

app.post("/register", (req, res) => {
    var firstName = req.body.Fnam,
        lastName  = req.body.Lnam,
        emailId = req.body.email,
        mobileNumber = req.body.num,
        whatsappNumber = req.body.num_wh,
        cityName = req.body.city,
        stateName = req.body.state,
        idea = req.body.idea, 
        file = req.body.file;
    
    var candidateInformation = {
        firstName : firstName, 
        lastName : lastName, emailId : emailId, 
                    mobileNumber : mobileNumber,  whatsappNumber: whatsappNumber, cityName : cityName, 
                    stateName : stateName, idea : idea, file : file};
        
    User.create(candidateInformation, function(err, campground){
        if(err)
        {
            console.log(err);
        }
        else
        {  
            res.redirect("/");
        }
    });
});

// 3) About Route
app.get('/about', (req, res)=>{
    res.render("about");
});

// 4)  Our Courses
app.get('/courses', (req, res) =>{
    res.render("courses");
});

// 5) Our Events
app.get('/event', (req, res)=>{
    res.render('event');
});

// 6) Our Blog
app.get('/blog', (req, res)=>{
    res.render('blog');
});

// 7) Contact Us
app.get('/contact', (req, res)=>{
    res.render('contact');
});

app.post('/contact', (req, res) =>{
    var Name = req.body.Name,
        Email = req.body.Email,
        Subject = req.body.Subject,
        MobileNumber = req.body.MobileNumber,
        Message = req.body.Message;
    
    var contactInformation = {
        Name : Name, 
        Email : Email,
        Subject : Subject,
        MobileNumber : MobileNumber,
        Message : Message
    };

    Contact.create(contactInformation, (err, contact)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.redirect('/');
        }

    })
});
// 8) Volunteer
app.get('/volunteer', (req, res)=>{
    res.render('volunteer');
}); 
app.listen(3000);