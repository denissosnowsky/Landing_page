const getResource = async (url)=>{
    const result =  await fetch(url);

    if(!result.ok){
        throw new Error(`Fetch failed ${url}, status: ${result.status}`);
    }

    return await result.json();
}


const postData = async (url, data)=>{
    const res = await fetch(url, {
        method: 'POST',
        body:data
    });
    return await res; 
};


export {getResource};
export {postData};