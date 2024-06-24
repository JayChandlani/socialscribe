// pages/api/openai.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export  async function POST(req: Request) {
  if (req.method === 'POST') {
    const { prompt } = await req.json();
    console.log(prompt)
    try {
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo-16k',
        messages: [{ role: 'user', content: prompt }],
      });
      const message = response.data.choices[0]?.message?.content as string; // Optional chaining
    return  NextResponse.json({ result: message });
    } catch (error) {
     return NextResponse.json({ error: error instanceof Error ? error.message : 'Unknown error' });
    }
  } else {
    return NextResponse.json({ message: 'Internal server error' })
  }
}