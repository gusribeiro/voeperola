import { NextResponse } from "next/server";
const axios = require('axios');

async function getFlightsByDate(req, res) {
    try {
        const data = await req.json()
        
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://newsky.app/api/airline-api/flights/recent',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.NEWSKY_API_TOKEN}`
            },
            data: data
        };

        const response = await axios.request(config);

        return new NextResponse(
            JSON.stringify(response.data),
            { status: 200, headers: { 'content-type': 'application/json' } }
        );
    } catch (error) {
        console.error(error);
        return new NextResponse(
            JSON.stringify({ "error": "internal server error" }),
            {
                status: 500,
                headers: { 'content-type': 'application/json' }
            }
        );
    }
}

export async function POST(req, res) {
    const response = await getFlightsByDate(req, res);
    return response;
}