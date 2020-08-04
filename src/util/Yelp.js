const apiKey =
  "RZiV22uXjnfDKSkzvcA9E388xqaeqXLd4GOBKBygFq4pdtA6brutWC_3TTDwsgftjMywNjkaF7BVQBnVXk8l8sk2qEeeQqpsEqhcun5EQMavRnuxelQ9MGscMz0pX3Yx";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        console.log(jsonResponse);
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state:  business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories.title,
              rating: business.rating, 
              reviewCount: business.review_count
            };
          });
        }
      });
  },
};

export default Yelp;
