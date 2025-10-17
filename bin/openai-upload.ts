import 'dotenv/config'
import OpenAI from "openai";
import fs from "fs";
import path from "path";
import os from "os";

const openai = new OpenAI();

const files = [
    {path: 'docs/docs/notify-sub/event-types.md'},
    {path: 'docs/docs/extensions/sdk.md'},
    {path: 'openai/docs/sdk-source.txt'},
    {path: 'docs/docs/extensions/tokens-and-client-tokens.md'},
    {path: 'docs/docs/notify-sub/README.md', alias: 'notify-sub.md'},
    {path: 'docs/docs/extensions/remote-config.md'},
    {path: 'docs/docs/extensions/designing-extensions.md'},
    {path: 'docs/docs/extensions/manifest-configuration.md'},
    {path: 'docs/docs/chatbot/message-protocol.md'},
    {path: 'docs/docs/extensions/guidelines-and-policies.md'},
    {path: 'docs/docs/extensions/syntax-for-forms.md'},
    {path: 'docs/docs/extensions/README.md'},
];

async function update() {
    const vectorStoreId = process.env.OPENAI_VECTOR_STORE;
    if (!vectorStoreId) {
        console.error('OPENAI_VECTOR_STORE env variable not set.');
        process.exit(1);
    }

    // Delete old files in parallel
    const vectorStoreFiles = await openai.vectorStores.files.list(vectorStoreId);
    await Promise.all(Array.from(vectorStoreFiles, async (vectorStoreFile: any) => {
        await openai.vectorStores.files.delete(vectorStoreFile.id, {vector_store_id: vectorStoreId});
        await openai.files.delete(vectorStoreFile.id);
        console.log('File deleted: ' + vectorStoreFile.id);
    }));

    // Upload and attach new files in sequence
    for (const file of files) {
        let filePath = file.path;
        let tempFilePath: string | null = null;
        try {
            if (file.alias) {
                // Create a temp file with the alias name
                const tempDir = os.tmpdir();
                tempFilePath = path.join(tempDir, file.alias);
                fs.copyFileSync(file.path, tempFilePath);
                filePath = tempFilePath;
            }
            const newFile = await openai.files.create({
                file: fs.createReadStream(filePath),
                purpose: "assistants",
            });
            await openai.vectorStores.files.create(vectorStoreId, {file_id: newFile.id});
            if (file.alias) {
                console.log(`File attached: ${file.path} (as ${file.alias})`);
            } else {
                console.log(`File attached: ${file.path}`);
            }
        } catch (err) {
            console.error(`Failed to upload or attach file: ${file.alias || file.path}`, err);
        } finally {
            if (tempFilePath && fs.existsSync(tempFilePath)) {
                fs.unlinkSync(tempFilePath);
            }
        }
    }
}

update();
