const http = require('http');

const PORT = 3000;

// using createServer we can create a basic http server using a http module
// this function returns a server object and takes a callback function
// this fucntion creater the server but didnt start the server 
const server = http.createServer(function listener(request, response){
   // this is a callback fucntion , a kind of a listeneer fucntion tht is going colllect 
   // every http request that we make to our server

    //  request -> we will be able to see details of incoming http request - > object
    // response -> we will be able to configure what reponse we need to send -> object


   // TODO
//    console.log("incoming request details", request);
//    console.log("Response object details", response);
      

      if(request.url == '/home'){

        // console.log(request.method);

        response.end({msg : "Success"});
      }
   console.log("Request Received");
});

server.listen(PORT, function exec(){
    // once we successfully  boot up the server , on the given port this callback will be executed
    console.log(`Server is up and running on the port : ${PORT}`);
})
