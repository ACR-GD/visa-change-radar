import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const root = process.cwd();
  const changesRoot = path.join(root, 'data', 'changes');
  const sourcesPath = path.join(root, 'data', 'sources', 'sources.json');

  let sources: any[] = [];
  if (fs.existsSync(sourcesPath)) {
    try {
      sources = JSON.parse(fs.readFileSync(sourcesPath, 'utf8'));
    } catch {
      sources = [];
    }
  }

  let changeEvents: any[] = [];
  if (fs.existsSync(changesRoot)) {
    const files = fs
      .readdirSync(changesRoot)
      .filter((f) => f.endsWith('.json'))
      .sort()
      .slice(-100);
    changeEvents = files
      .map((file) => {
        try {
          const content = fs.readFileSync(path.join(changesRoot, file), 'utf8');
          return JSON.parse(content);
        } catch {
          return null;
        }
      })
      .filter(Boolean);
  }

  return NextResponse.json({ sources, changeEvents });
}
