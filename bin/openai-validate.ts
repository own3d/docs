import 'dotenv/config'
import OpenAI from 'openai';

const openai = new OpenAI();

async function validate() {
    console.log('Validate store...')
    const stream = await openai.responses.create({
        model: "gpt-4o",
        input: "You are a helpful assistant that building OWN3D extensions. You have access to the entire using your documents.\n" +
        "How to create form fields to chang the font of a text?\n how is the font applied?",
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