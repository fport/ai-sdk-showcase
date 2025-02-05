import { openai } from '@ai-sdk/openai';
import { generateObject } from 'ai';
import { z } from 'zod';

interface JsonSchema {
  type: string;
  properties?: {
    [key: string]: JsonSchema | { type: string; items?: JsonSchema };
  };
  items?: JsonSchema;
}

function convertJsonSchemaToZod(schema: JsonSchema): z.ZodTypeAny {
  if (schema.type === 'object' && schema.properties) {
    const shape: { [key: string]: z.ZodTypeAny } = {};
    for (const [key, value] of Object.entries(schema.properties)) {
      shape[key] = convertJsonSchemaToZod(value as JsonSchema);
    }
    return z.object(shape);
  }

  if (schema.type === 'array' && schema.items) {
    return z.array(convertJsonSchemaToZod(schema.items));
  }

  switch (schema.type) {
    case 'string':
      return z.string();
    case 'number':
      return z.number();
    case 'boolean':
      return z.boolean();
    default:
      return z.any();
  }
}

export async function POST(req: Request) {
  const { prompt, schema } = await req.json();

  // Convert JSON schema to Zod schema
  const zodSchema = convertJsonSchemaToZod(schema);

  const result = await generateObject({
    model: openai('gpt-4o-mini'),
    system: 'You generate structured data based on the provided schema.',
    prompt,
    schema: zodSchema,
  });

  return result.toJsonResponse();
}