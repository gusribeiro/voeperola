import { NextResponse } from "next/server";
const axios = require('axios');

export async function GET(req, res) {
    try {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://newsky.app/api/airline-api/flights/ongoing`,
            headers: {
                'Authorization': `Bearer ${process.env.NEWSKY_API_TOKEN}`
            },
        };

        const response = await axios.request(config);

        // Return a NextResponse in the success case
        return new NextResponse(
            JSON.stringify(response.data),
            { status: 200, headers: { 'content-type': 'application/json' } }
        );
    } catch (error) {
        console.error(error);

        // Return a NextResponse in the error case
        return new NextResponse(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'content-type': 'application/json' } }
        );
    }
}