import 'dotenv/config'
import OpenAI from "openai";

const openai = new OpenAI();

async function validate() {
    console.log('Validate store...')
    const stream = await openai.responses.create({
        model: "gpt-4o",
        input: "Write a simple web console script using the OWN3D SDK that connects to the OWN3D chat and listens for messages. When a message is received, it should display it in the console in the following format: `{username}: {message}`",
        tools: [
            {
                type: "file_search",
                vector_store_ids: [
                    process.env.OPENAI_VECTOR_STORE,
                ],
            },
        ],
        stream: true,
    });

    for await (const event of stream) {
        if (event.type === 'response.output_text.delta') {
            process.stdout.write(event.delta)
        }
    }
}

validate()