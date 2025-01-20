import path from 'path';
import fs from 'fs';

const dataFilePath = path.join(process.cwd(), 'data/data_1-19-2025.json');

export function getAllData() {
  const fileContents = fs.readFileSync(dataFilePath, 'utf8');
  
  // Parse JSON
  const allData = JSON.parse(fileContents)
  // Ensure each item has a unique ID if not already included
  return allData.map((item, index) => ({
    id: item.id || String(index), // Use existing `id` or fallback to index
    ...item,
  }));

}