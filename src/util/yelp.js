const apiKey = "5l-WripzRjEhUHcOhy3fd0fO18iuw29Wls6CQa6Cpw83CXmNQZ5-RSa7n-Ho6ZlaBCC41pc4YbWlNXgAvSaDrVMesbTSqvlvUAnkpWYiAGKPJr8FjvdaNr3_iH4tX3Yx";

let Yelp = {
    async search(term, location, sortyBy) {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortyBy}`, { headers: { Authorization: `Bearer ${apiKey}` } });
        const jsonResponse = await response.json();
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => {
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.category,
                    rating: business.rating,
                    reviewCount: business.reviewCount
                };
            });
        }
    }
};

export default Yelp;
