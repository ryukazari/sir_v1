const regeneratorRuntime = require('regenerator-runtime/runtime');
import app from './app';

const port = process.env.PORT || 3000;

async function main(){
    await app.listen(port,()=>{
        console.log("Server on: "+port);
    });
}
main();