import app from './app';

async function main(){
    await app.listen(3000);
    console.log("Server on port 4000")
}

main();