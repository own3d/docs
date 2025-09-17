import 'dotenv/config'
import OpenAI from "openai";
import fs from "fs";

const openai = new OpenAI();

const files = [
    {
        path: 'docs/docs/notify-sub/event-types.md',
    },
    {
        path: 'docs/docs/extensions/sdk.md',
    },
    {
        path: 'docs/docs/extensions/tokens-and-client-tokens.md',
    },
    {
        path: 'docs/docs/notify-sub/README.md',
    },
    {
        path: 'docs/docs/extensions/remote-config.md',
    },
    {
        path: 'docs/docs/extensions/designing-extensions.md',
    },
    {
        path: 'docs/docs/chatbot/message-protocol.md',
    },
    {
        path: 'openai/files/combined.txt',
    },
    {
        path: 'docs/docs/extensions/guidelines-and-policies.md',
    },
    {
        path: 'docs/docs/extensions/syntax-for-forms.md',
    },
    {
        path: 'docs/docs/extensions/README.md',
    },
]

async function update() {
    // Step 1: Delete old file
    const vectorStoreId = process.env.OPENAI_VECTOR_STORE;
    const vectorStoreFiles = await openai.vectorStores.files.list(vectorStoreId);
    for await (const vectorStoreFile of vectorStoreFiles) {
        await openai.vectorStores.files.delete(vectorStoreFile.id, {
            vector_store_id: vectorStoreId,
        });
        await openai.files.delete(vectorStoreFile.id);
        console.log('File deleted: ' + vectorStoreFile.id)
    }

    for (const file of files) {
        // Step 2: Upload new file
        const newFile = await openai.files.create({
            file: fs.createReadStream(file.path),
            purpose: "assistants",
        });

        // Step 3: Add new file to vector store
        await openai.vectorStores.files.create(vectorStoreId, {
            file_id: newFile.id,
        });
        console.log('File attached: ' + file.path)
    }
}

update()