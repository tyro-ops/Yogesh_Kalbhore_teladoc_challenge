import * as fs from 'fs';
import * as path from 'path';

export function loadJson(filePath: string): any {
  const absolutePath = path.resolve(__dirname, '../data', filePath);
  const rawData = fs.readFileSync(absolutePath, 'utf-8');
  return JSON.parse(rawData);
}