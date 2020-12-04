exports.handler = async (event, country) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify(`Hello from ${country.country}!`),
    }
    return response;
};

