import axios from 'axios';

export default ({ req }) => {
    if (typeof window === 'undefined') {
        return axios.create({
            baseURL: 'http://a5b851eb22b71487b9e2f41da74fc2c3-79469ccb8054df1d.elb.us-east-2.amazonaws.com',
            headers: req.headers
        });
    } else {
        return axios.create({
            baseURL: '/'
        });
    }
}