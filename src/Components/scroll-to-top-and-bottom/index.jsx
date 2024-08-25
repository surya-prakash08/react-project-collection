import useFetch from "../use-fetch";





export default function ScrollToTopAndBottom(){
    
    const {data, error, pending}= useFetch('https://dummyjson.com/products', {});

    if(error){
        return <h1>Errro Occured! Please try again</h1>
    }

    if(pending){
        return <h1>Loading! Please wait</h1>
    }

     function ScrollToBottom() {
        
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
        
    }
     function ScrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return <div>
        <h1>Scroll to top and bottom feature</h1>
        <h3>This is the top section</h3>
        <button onClick={ScrollToBottom}>Scroll to bottom</button>
        <ul>
            {
                data && data.products && data.products.length ? data.products.map((item)=> <li>{item.title}</li>) : null
            }
        </ul>
        <button onClick={ScrollToTop}>Scroll to top</button>
        <h3>This is the bottom of the page</h3>
    </div>
}