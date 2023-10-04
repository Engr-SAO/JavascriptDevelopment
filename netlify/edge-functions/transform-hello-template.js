export default async(request,context) => {
    const url = new URL(request.url);

    if(url.searchParams.get("method") != "transform"){
        return;
    }
    const response = await context.next();
    const page = await response.text();

    const regex = /LOCATION_UNKNOWN/i;

    const location = `${context.geo.city}, ${context.geo.country.name}`;

    const updatePage = page.replace(regex,location);
    //Replacing the location with the fetch geolocation
    return new Response(updatePage,response);

}; 