import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Получаем путь к репозиторию git (используем git rev-parse)
const gitRoot = execSync('git rev-parse --git-dir').toString().trim();

// Путь к файлу с сообщением коммита
const commitMsgFile = path.join(gitRoot, 'COMMIT_EDITMSG');

// Проверка на существование файла
if (!fs.existsSync(commitMsgFile)) {
    console.error('❌ Commit message file does not exist!');
    process.exit(1);
}

let commitMessage;

try {
    // Чтение сообщения коммита
    commitMessage = fs.readFileSync(commitMsgFile, 'utf8').trim();
} catch (error) {
    console.error('❌ Cannot read commit message:', commitMsgFile);
    console.error(error.message);
    process.exit(1);
}

console.log('Commit message:\n' + commitMessage);

// Регулярное выражение для проверки формата
const regex = /^(fix|feat|docs|style|refactor|test|chore)\s*(\([a-z0-9-]+\))?\s*:\s[A-Za-z].*/;

if (!regex.test(commitMessage)) {
    console.error('❌ Commit message format is invalid.');
    console.error('Example: feat: Add new user endpoint or feat(api-0): Add new user endpoint');
    process.exit(1);
}

process.exit(0);
