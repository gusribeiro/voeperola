import { NextResponse } from "next/server";
const axios = require('axios');

export async function POST(req, res) {
    try {
        const data = await req.json()
        data.start = new Date(data.start)

        if(data.end){
            data.end = new Date(data.end)
        } else{
            data.end = new Date()
        }

        console.log(data)

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://newsky.app/api/airline-api/flights/bydate',
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