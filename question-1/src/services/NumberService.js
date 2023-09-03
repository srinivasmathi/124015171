const axios = require('axios');

class NumberService {
    async getNumbers(urls) {
        let numbers = [], used = {};
        for(let url of urls) {
            try {
                const response = await axios({
                    method: 'GET',
                    url
                });
                for(let number of response?.data?.numbers) {
                    if(!(number in used)) {
                        used[number] = true;
                        numbers.push(number);
                    }
                };
            }
            catch(err) {
                console.log(`${url} is not valid`);
            }
            // const data = await response.json();
        }
        numbers.sort(function(a, b) {return a - b})
        return numbers;
    }
}

module.exports = NumberService;