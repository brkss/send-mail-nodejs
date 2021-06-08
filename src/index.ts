import  express, {Request, Response} from 'express';

(async () => {

    // init express
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded());


    app.get('/', (_, res) => {
        res.send('hello world');
    })

    // recieve mail supbjects 
    app.post('/send-mail', (req: Request, res: Response) => {
        const input = req.body;
        // validate input
        console.log('input => ', input);
        res.send('mail recieved');
    });
    


    app.listen(4000, () => {
        console.log('server listen on http://localhost:4000');
    });
    
})();