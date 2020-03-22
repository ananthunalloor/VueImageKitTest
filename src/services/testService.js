/* eslint-disable */
import axios from "axios";

//const url = "http://ec2-52-66-126-44.ap-south-1.compute.amazonaws.com/api/v1/test/";
const url = "https://imagekit.io/api/admin/media/listFiles?skip=0&limit=1000&imagekitId=ananth2nalloor&signature=9fc29cfcefcfc48d48ff934d94d00ab03031cd97";
class TestService{
    //GET Post
    static getPosts() {
        return new Promise(async (reslove, reject) => {
            try{
                const options={
                    url:'https://imagekit.io/api/admin/media/listFiles?skip=0&limit=1000&imagekitId=ananth2nalloor&signature=9fc29cfcefcfc48d48ff934d94d00ab03031cd97',
                    method:"GET",
                    headers:{
                        'Access-Control-Allow-Origin': 'https://imagekit.io',
                        'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
                        'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
                        'Content-Type': 'application/json',
                        'Accept': 'text/html'
                    }
                }
                const res = await axios(url);
                console.log(res.data);
                const data = res.data;
                reslove(
                    data.map(post => ({ 
                        ...data
                    }))
                );
            }
            catch(err){
                reject(err);
            }
        })
    }

    //CREATE Post
    static insertPost(text){
        return axios.post(url, {
            text
        });
    }
    //DELETE Post
    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }
}
 export default TestService;