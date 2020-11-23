import { get , post } from 'axios';

const StoreLink = "https://douxprism.me/";
const dokan = StoreLink + "wp-json/dokan/v1";
const wc = StoreLink + "wp-json/wc/v3/";
const key = "ck_a2e71353705c76e517e4101a2fe8300d8fd9d7a7";
const secret = "cs_dbe08171b2dc3ba07f2a894b731662be9e264fc5";

export async function getStores (){
    let url = dokan + "/stores"
    try{
        const response = await get(url);
        return response
    } catch(error){
        console.error(error);
    }
}

export async function getStoreProducts(id){
    let url = dokan + "/stores/" + id + "/products";
    try {
      const response = await get(url);
      return response;
    } catch (error) {
      console.log(error);
      return;
    }
}

export async function getFeaturedProducts(){
    let url = wc + "products";
    try {
        const response = await get(url,{
            params: {
                consumer_secret: secret,
                consumer_key: key,
                featured: true
            }
        });
        return response;
    } catch (error) {
        console.error(error);
    }

}

export async function getBannerPicture(){
    const url = StoreLink + "wp-json/wp/v2/posts/97";
    try {
        const response = await get(url,{params:{_embed: true}});

        return(response.data._embedded['wp:featuredmedia']['0'].source_url);
    } catch (error) {
        console.error(error);
    }
}

export async function createOrder(order){
    const url = wc + "orders";
    try {
        const response = await post(url, order,{
            params:{
                consumer_key: key,
                consumer_secret: secret
            }
        }
        )
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}