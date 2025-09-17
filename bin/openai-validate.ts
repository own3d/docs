import 'dotenv/config'
import OpenAI from "openai";

const openai = new OpenAI();

async function validate() {
    console.log('Validate store...')
    const stream = await openai.responses.create({
        model: "gpt-4o",
        input: "How to write a own3d extension using socket?",
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
        } else {
            console.log(event)
        }
    }
}

validate()