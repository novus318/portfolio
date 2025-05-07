import { google } from '@ai-sdk/google';
import { convertToCoreMessages, streamText } from 'ai';
import { format } from 'date-fns';
import { z } from 'zod';

export const maxDuration = 30;



export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: google('models/gemini-1.5-flash'),
    system: `\
   
    `,
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}
