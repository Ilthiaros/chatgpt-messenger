import { NextResponse } from 'next/server'
import admin from "firebase-admin";
import { adminDb } from '../../../../firebaseAdmin';
import openai from '../../../../lib/chatgpt';
 
type Data = {
    answer: string,
}

export async function POST(request: Request) {
    const { prompt, chatId, model, session } = await request.json();

    if(!prompt) {
        //res.status(400).json({ answer: 'Please provide a prompt!' });
        return;
    }

    if(!chatId) {
        //res.status(400).json({ answer: 'Please provide a valid chatId!' });
        return;
    }

    const response = await openai.createCompletion({
        model,
        prompt,
        temperature: 0.9,
        top_p: 1,
        max_tokens: 1000,
        frequency_penalty: 0,
        presence_penalty: 0,
    }).then((res) => res.data.choices[0].text)
        .catch((err) => `ChatGPT was unable to respond to your message. (Error: ${err.message})`);

    const message: Message = {
        text: response || 'ChatGPT was unable to respond to your message.',
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: 'ChatGPT',
            name: 'ChatGPT',
            avatar: 'https://links.papareact.com/89k',
        },
    };

    await adminDb
    .collection('users')
    .doc(session?.user?.email)
    .collection('chats')
    .doc(chatId)
    .collection('messages')
    .add(message);

    console.log(message.text);

    return NextResponse.json({ answer: message.text });
}