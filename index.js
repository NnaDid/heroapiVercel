import express from 'express';
const app     = express();
import cors from 'cors';


app.use( cors({  credentials: true,   origin: true }) );
app.options('*', cors());
app.use(express.json());

app.get('/', (req, res) => res.json( {status:'Working!!!' }) );

app.get('/test', (req, res) =>{
    res.status(200).json({   
        msg:'Successfully',
        data:[
            {userMame: 'John',FirstAtt:'agemt'},
            {userMame: 'John',FirstAtt:'agemt'},
        ]
    });
});

app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});