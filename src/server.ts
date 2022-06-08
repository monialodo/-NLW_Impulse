import {serverHttp } from "./app"
 
serverHttp.listen(process.env.PORT || 4000, () => console.log (`Server is running on PORT 4000`))

