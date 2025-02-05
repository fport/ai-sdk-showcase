import { z } from "zod";

export interface Suggestion {
    text: string;
    prompt: string;
  }
  
  const artStyles = ["anime", "art nouveau", "ukiyo-e", "watercolor"];
  
  const structuredPrompts: { text: string; prompt: string; schema: z.ZodSchema }[] = [
    {
      text: "User Profile JSON",
      prompt: "Generate a JSON object for a user profile with fields: id, name, email, age, address, interests",
      schema: z.object({
        id: z.string(),
        name: z.string(),
        email: z.string(),
        age: z.number(),
        address: z.string(),
        interests: z.array(z.string()),
      }),
    },
    {
      text: "Product Data",
      prompt: "Generate a JSON object for a product with fields: id, name, price, description, category, specifications, inventory",
      schema: z.object({
        id: z.string(),
        name: z.string(),
        price: z.number(),
        description: z.string(),
        category: z.string(),
        specifications: z.object({
          color: z.string(),
          size: z.string(),
          material: z.string(),
        }),
        inventory: z.number(),
      }),
    },
    {
      text: "Blog Post Schema",
      prompt: "Generate a JSON schema for a blog post including: title, author, date, content, tags, comments, metadata",
      schema: z.object({
        title: z.string(),
        author: z.string(),
        date: z.string(),
        content: z.string(),
        tags: z.array(z.string()),
        comments: z.array(z.object({
          author: z.string(),
          content: z.string(),
          date: z.string(),
        })),
        metadata: z.object({
          views: z.number(),
          likes: z.number(),
          shares: z.number(),
        }),
      }),
      },
    {
      text: "Event Details",
      prompt: "Create a structured JSON for an event with: id, title, date, location, organizer, attendees, schedule, pricing",
      schema: z.object({
        id: z.string(),
        title: z.string(),
        date: z.string(),
        location: z.string(),
        organizer: z.string(),
        attendees: z.array(z.string()),
        schedule: z.array(z.string()),
        pricing: z.number(),
      }),
    },
    {
      text: "Restaurant Menu",
      prompt: "Generate a JSON structure for a restaurant menu with categories, items, prices, descriptions, and dietary information",
      schema: z.object({
        categories: z.array(z.object({
          name: z.string(),
          items: z.array(z.object({
            name: z.string(),
            description: z.string(),
            price: z.number(),
            dietary: z.string(),
          })),
        })),
      }),
    },
  ];
  
  const textPrompts: { text: string; prompt: string }[] = [
    {
      text: "Why is the sky blue?",
      prompt: "Explain why the sky appears blue in simple terms",
    },
    {
      text: "How do plants grow?",
      prompt: "Explain the basic process of how plants grow from seeds",
    },
    {
      text: "Why do we dream?",
      prompt: "Explain why humans dream and what purpose dreams serve",
    },
    {
      text: "How do rainbows form?",
      prompt: "Explain how rainbows appear in the sky in simple terms",
    },
    {
      text: "Why do leaves change color?",
      prompt: "Explain why leaves change colors in autumn",
    }
  ];
  
  const imagePrompts: { text: string; prompt: string }[] = [
    {
      text: "Salamander Dusk",
      prompt: "A salamander at dusk in a forest pond",
    },
    {
      text: "Cat Vercel",
      prompt: "A cat launching its website on Vercel",
    },
    {
      text: "Red Panda",
      prompt: "A red panda sipping tea under cherry blossoms at sunset with Mount Fuji in the background",
    },
    {
      text: "Beach Otter",
      prompt: "A mischievous otter surfing the waves in Bali at golden hour",
    },
    {
      text: "Zen Frog",
      prompt: "A frog meditating on a lotus leaf in a tranquil forest pond at dawn, surrounded by fireflies",
    }
  ];
  
  function shuffle<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
  
  export function getRandomSuggestions(count: number = 5, type: "text" | "image" | "structured" = "text"): Suggestion[] {
    let prompts;
    switch (type) {
      case "image":
        prompts = imagePrompts;
        break;
      case "structured":
        prompts = structuredPrompts;
        break;
      default:
        prompts = textPrompts;
    }
  
    const shuffledPrompts = shuffle(prompts);
    const shuffledStyles = shuffle(artStyles);
  
    return shuffledPrompts.slice(0, count).map((item, index) => ({
      text: item.text,
      prompt: type === "image" 
        ? `${item.prompt}, in the style of ${shuffledStyles[index % shuffledStyles.length]}`
        : item.prompt,
    }));
  }