// 1. Define the structure for a single tool
export interface AiTool {
  slug: string; // Unique ID for the tool
  title: string;
  description: string;
  category: string;
  systemPrompt: string; // The "magic" prompt for this specific tool
}

// 2. Define your list of categories
export const toolCategories = [
  "Blog Tools",
  "YouTube Tools",
  "SEO Tools",
  "Social Media Tools",
  "Code Tools",
  "Writing Tools",
  "Marketing Tools",
  "E-commerce Tools",
  "Email Tools",
  "Copywriting Tools",
  "Creative Tools",
  "Business Tools",
  "Education Tools",
  "Health & Fitness Tools",
  "Travel Tools",
  "Food & Recipe Tools",
  "Finance Tools",
  "Legal Tools",
  "Real Estate Tools",
  "Sports Tools",
  "Gaming Tools",
  "Music Tools",
  "Art & Design Tools",
  "Photography Tools",
  "Video Tools",
  "Audio Tools",
  "Translation Tools",
  "Summarization Tools",
  "Rewriting Tools",
  "Grammar Tools"
] as const;

export type ToolCategory = typeof toolCategories[number];

// 3. Create the master list of all tools
export const allTools: AiTool[] = [
  // Blog Tools
  {
    slug: "blog-title-generator",
    title: "Blog Title Generator",
    description: "Generate viral-worthy titles for your blog posts.",
    category: "Blog Tools",
    systemPrompt: `You are an expert copywriter. Generate 10 viral-worthy blog titles for the following topic: {USER_INPUT}. Provide the titles in a numbered list.`
  },
  {
    slug: "blog-outline-creator",
    title: "Blog Outline Creator",
    description: "Create detailed outlines for your blog posts.",
    category: "Blog Tools",
    systemPrompt: `You are a professional blogger. Create a detailed outline for a blog post about: {USER_INPUT}. Include introduction, main sections, and conclusion.`
  },
  {
    slug: "blog-post-writer",
    title: "Blog Post Writer",
    description: "Write complete blog posts from scratch.",
    category: "Blog Tools",
    systemPrompt: `You are an experienced blogger. Write a complete, engaging blog post about: {USER_INPUT}. Make it SEO-friendly and approximately 800-1000 words.`
  },
  {
    slug: "blog-intro-generator",
    title: "Blog Introduction Generator",
    description: "Create compelling introductions for blog posts.",
    category: "Blog Tools",
    systemPrompt: `Write a compelling introduction paragraph for a blog post about: {USER_INPUT}. Make it engaging and hook the reader.`
  },
  {
    slug: "blog-conclusion-writer",
    title: "Blog Conclusion Writer",
    description: "Create compelling conclusions for blog posts.",
    category: "Blog Tools",
    systemPrompt: `Write a strong, memorable conclusion for a blog post about: {USER_INPUT}. Include a call to action and key takeaways.`
  },
  {
    slug: "blog-meta-description",
    title: "Blog Meta Description Generator",
    description: "Generate SEO-optimized meta descriptions.",
    category: "Blog Tools",
    systemPrompt: `Generate 5 SEO-optimized meta descriptions (under 160 characters each) for a blog post about: {USER_INPUT}.`
  },

  // YouTube Tools
  {
    slug: "youtube-script-creator",
    title: "YouTube Script Creator",
    description: "Generate captivating YouTube scripts instantly.",
    category: "YouTube Tools",
    systemPrompt: `You are a professional YouTube scriptwriter. Write an engaging video script for the following idea: {USER_INPUT}. Include sections for [Intro], [Main Content], and [Outro].`
  },
  {
    slug: "youtube-title-generator",
    title: "YouTube Title Generator",
    description: "Create click-worthy YouTube video titles.",
    category: "YouTube Tools",
    systemPrompt: `Generate 10 attention-grabbing YouTube video titles for a video about: {USER_INPUT}. Make them optimized for clicks and SEO.`
  },
  {
    slug: "youtube-description-writer",
    title: "YouTube Description Writer",
    description: "Write SEO-optimized YouTube video descriptions.",
    category: "YouTube Tools",
    systemPrompt: `Write a compelling YouTube video description for a video about: {USER_INPUT}. Include relevant keywords, timestamps, and calls to action.`
  },
  {
    slug: "youtube-thumbnail-ideas",
    title: "YouTube Thumbnail Ideas",
    description: "Generate creative thumbnail concepts.",
    category: "YouTube Tools",
    systemPrompt: `Generate 5 creative thumbnail ideas for a YouTube video about: {USER_INPUT}. Describe each concept in detail.`
  },
  {
    slug: "youtube-hook-generator",
    title: "YouTube Hook Generator",
    description: "Create attention-grabbing video hooks.",
    category: "YouTube Tools",
    systemPrompt: `Generate 5 powerful hooks for a YouTube video about: {USER_INPUT}. Each hook should be 10-15 seconds long when spoken.`
  },
  {
    slug: "youtube-chapter-timestamps",
    title: "YouTube Chapter Timestamps",
    description: "Generate chapter timestamps for videos.",
    category: "YouTube Tools",
    systemPrompt: `Create chapter timestamps for a YouTube video about: {USER_INPUT}. Include 5-8 chapters with accurate time estimates.`
  },

  // SEO Tools
  {
    slug: "keyword-research",
    title: "Keyword Research Tool",
    description: "Find high-value keywords for your content.",
    category: "SEO Tools",
    systemPrompt: `You are an SEO expert. Provide a list of 20 relevant keywords and phrases for content about: {USER_INPUT}. Include search volume estimates and competition levels.`
  },
  {
    slug: "meta-description-generator",
    title: "Meta Description Generator",
    description: "Create SEO-optimized meta descriptions.",
    category: "SEO Tools",
    systemPrompt: `Write an SEO-optimized meta description (under 160 characters) for a page about: {USER_INPUT}. Include relevant keywords.`
  },
  {
    slug: "seo-title-optimizer",
    title: "SEO Title Optimizer",
    description: "Optimize titles for search engines.",
    category: "SEO Tools",
    systemPrompt: `Optimize the following title for SEO: {USER_INPUT}. Provide 3 optimized versions with keyword placement and character counts.`
  },
  {
    slug: "keyword-research-tool",
    title: "Keyword Research Assistant",
    description: "Find relevant keywords for SEO.",
    category: "SEO Tools",
    systemPrompt: `Perform keyword research for: {USER_INPUT}. Provide primary keywords, long-tail keywords, and search volume estimates.`
  },

  // Social Media Tools
  {
    slug: "twitter-thread-creator",
    title: "Twitter Thread Creator",
    description: "Create engaging Twitter threads.",
    category: "Social Media Tools",
    systemPrompt: `Create an engaging Twitter thread about: {USER_INPUT}. Make it 5-7 tweets long with emojis and hashtags.`
  },
  {
    slug: "instagram-caption-generator",
    title: "Instagram Caption Generator",
    description: "Generate creative Instagram captions.",
    category: "Social Media Tools",
    systemPrompt: `Generate 5 creative Instagram captions for a post about: {USER_INPUT}. Include relevant hashtags and emojis.`
  },
  {
    slug: "facebook-post-writer",
    title: "Facebook Post Writer",
    description: "Write engaging Facebook posts.",
    category: "Social Media Tools",
    systemPrompt: `Write an engaging Facebook post about: {USER_INPUT}. Make it conversational and include a call to action.`
  },
  {
    slug: "linkedin-post-creator",
    title: "LinkedIn Post Creator",
    description: "Create professional LinkedIn content.",
    category: "Social Media Tools",
    systemPrompt: `Write a professional LinkedIn post about: {USER_INPUT}. Make it insightful and encourage engagement.`
  },
  {
    slug: "hashtag-generator",
    title: "Hashtag Generator",
    description: "Generate relevant hashtags for social media posts to increase visibility.",
    category: "Social Media Tools",
    systemPrompt: `Generate trending and relevant hashtags for: {USER_INPUT}. Include a mix of popular and niche hashtags with usage tips.`
  },
  {
    slug: "social-calendar",
    title: "Social Media Calendar",
    description: "Create content calendars for social media with posting schedules and themes.",
    category: "Social Media Tools",
    systemPrompt: `Create a monthly social media content calendar for: {USER_INPUT}. Include posting dates, content types, captions, and engagement strategies.`
  },
  {
    slug: "engagement-booster",
    title: "Engagement Booster",
    description: "Generate strategies to increase social media engagement and follower growth.",
    category: "Social Media Tools",
    systemPrompt: `Develop engagement strategies for: {USER_INPUT}. Include content ideas, posting times, interaction tactics, and growth hacks.`
  },
  {
    slug: "social-analytics",
    title: "Social Media Analytics Report",
    description: "Analyze social media performance with insights and recommendations.",
    category: "Social Media Tools",
    systemPrompt: `Generate a social media analytics report for: {USER_INPUT}. Include key metrics, performance insights, and improvement recommendations.`
  },

  // Code Tools
  {
    slug: "code-reviewer",
    title: "Code Reviewer",
    description: "Review and improve code quality.",
    category: "Code Tools",
    systemPrompt: `Review the following code and provide suggestions for improvement: {USER_INPUT}. Focus on best practices, performance, and readability.`
  },
  {
    slug: "code-comment-generator",
    title: "Code Comment Generator",
    description: "Generate meaningful code comments.",
    category: "Code Tools",
    systemPrompt: `Add meaningful comments to the following code: {USER_INPUT}. Explain what each section does.`
  },
  {
    slug: "bug-fixer",
    title: "Bug Fix Assistant",
    description: "Help identify and fix bugs in code.",
    category: "Code Tools",
    systemPrompt: `Analyze the following code for bugs and provide fixes: {USER_INPUT}. Explain the issues and solutions.`
  },

  // Writing Tools
  {
    slug: "grammar-checker",
    title: "Grammar Checker",
    description: "Check and correct grammar in your writing.",
    category: "Writing Tools",
    systemPrompt: `Check the following text for grammar errors and provide corrections: {USER_INPUT}. Explain each correction.`
  },
  {
    slug: "tone-adjuster",
    title: "Tone Adjuster",
    description: "Adjust the tone of your writing.",
    category: "Writing Tools",
    systemPrompt: `Rewrite the following text in a professional tone: {USER_INPUT}. Maintain the original meaning but make it more formal.`
  },
  {
    slug: "readability-scorer",
    title: "Readability Scorer",
    description: "Analyze the readability of your text.",
    category: "Writing Tools",
    systemPrompt: `Analyze the readability of the following text: {USER_INPUT}. Provide a score and suggestions for improvement.`
  },
  {
    slug: "story-outline-generator",
    title: "Story Outline Generator",
    description: "Create outlines for stories and novels.",
    category: "Writing Tools",
    systemPrompt: `Create a detailed story outline for: {USER_INPUT}. Include plot points, character arcs, and chapter breakdowns.`
  },
  {
    slug: "poetry-generator",
    title: "Poetry Generator",
    description: "Generate poems on any topic.",
    category: "Writing Tools",
    systemPrompt: `Write a poem about: {USER_INPUT}. Choose an appropriate style and structure.`
  },

  // Marketing Tools
  {
    slug: "ad-copy-generator",
    title: "Ad Copy Generator",
    description: "Create compelling advertising copy.",
    category: "Marketing Tools",
    systemPrompt: `Write persuasive ad copy for: {USER_INPUT}. Create headlines, body text, and calls to action.`
  },
  {
    slug: "landing-page-copy",
    title: "Landing Page Copy",
    description: "Write conversion-focused landing page content.",
    category: "Marketing Tools",
    systemPrompt: `Write landing page copy for: {USER_INPUT}. Include headline, subheadline, benefits, and call to action.`
  },
  {
    slug: "product-description-writer",
    title: "Product Description Writer",
    description: "Create compelling product descriptions.",
    category: "Marketing Tools",
    systemPrompt: `Write a compelling product description for: {USER_INPUT}. Highlight key features and benefits.`
  },
  {
    slug: "brand-name-generator",
    title: "Brand Name Generator",
    description: "Generate creative brand names.",
    category: "Marketing Tools",
    systemPrompt: `Generate 10 creative brand names for: {USER_INPUT}. Include availability suggestions and tagline ideas.`
  },

  // E-commerce Tools
  {
    slug: "ecommerce-product-description",
    title: "Product Description Writer",
    description: "Write compelling product descriptions.",
    category: "E-commerce Tools",
    systemPrompt: `Write a compelling product description for: {USER_INPUT}. Highlight benefits, features, and include SEO keywords.`
  },
  {
    slug: "pricing-strategy-advisor",
    title: "Pricing Strategy Advisor",
    description: "Develop pricing strategies for products.",
    category: "E-commerce Tools",
    systemPrompt: `Develop a pricing strategy for: {USER_INPUT}. Consider costs, competition, and target market.`
  },

  // Email Tools
  {
    slug: "email-subject-generator",
    title: "Email Subject Generator",
    description: "Create attention-grabbing email subjects.",
    category: "Email Tools",
    systemPrompt: `Generate 10 compelling email subject lines for an email about: {USER_INPUT}. Make them personalized and engaging.`
  },
  {
    slug: "newsletter-writer",
    title: "Newsletter Writer",
    description: "Write engaging newsletter content.",
    category: "Email Tools",
    systemPrompt: `Write a newsletter about: {USER_INPUT}. Include an introduction, main content, and call to action.`
  },
  {
    slug: "email-sequence-creator",
    title: "Email Sequence Creator",
    description: "Create automated email sequences.",
    category: "Email Tools",
    systemPrompt: `Create a 5-email sequence for: {USER_INPUT}. Include subject lines and key content for each email.`
  },

  // Copywriting Tools
  {
    slug: "headline-generator",
    title: "Headline Generator",
    description: "Create attention-grabbing headlines.",
    category: "Copywriting Tools",
    systemPrompt: `Generate 10 powerful headlines for content about: {USER_INPUT}. Make them compelling and click-worthy.`
  },
  {
    slug: "slogan-creator",
    title: "Slogan Creator",
    description: "Create memorable slogans and taglines.",
    category: "Copywriting Tools",
    systemPrompt: `Create 5 memorable slogans for: {USER_INPUT}. Make them catchy and brandable.`
  },
  {
    slug: "call-to-action-generator",
    title: "Call to Action Generator",
    description: "Create compelling calls to action.",
    category: "Copywriting Tools",
    systemPrompt: `Generate 5 different calls to action for: {USER_INPUT}. Make them urgent and persuasive.`
  },
  {
    slug: "landing-page-copy-writer",
    title: "Landing Page Copy Writer",
    description: "Write compelling landing page copy.",
    category: "Copywriting Tools",
    systemPrompt: `Write complete landing page copy for: {USER_INPUT}. Include headline, subheadline, body text, and CTA.`
  },

  // Creative Tools
  {
    slug: "story-generator",
    title: "Story Generator",
    description: "Create engaging stories and narratives.",
    category: "Creative Tools",
    systemPrompt: `Write a short story about: {USER_INPUT}. Make it engaging with a clear beginning, middle, and end.`
  },
  {
    slug: "poem-writer",
    title: "Poem Writer",
    description: "Compose poems on any topic.",
    category: "Creative Tools",
    systemPrompt: `Write a poem about: {USER_INPUT}. Choose an appropriate style and structure.`
  },
  {
    slug: "character-creator",
    title: "Character Creator",
    description: "Develop detailed character profiles.",
    category: "Creative Tools",
    systemPrompt: `Create a detailed character profile for: {USER_INPUT}. Include background, personality, motivations, and appearance.`
  },
  {
    slug: "story-idea-generator",
    title: "Story Idea Generator",
    description: "Generate creative story ideas.",
    category: "Creative Tools",
    systemPrompt: `Generate 10 creative story ideas based on: {USER_INPUT}. Include plot hooks and unique twists.`
  },
  {
    slug: "brainstorming-assistant",
    title: "Brainstorming Assistant",
    description: "Help with creative brainstorming sessions.",
    category: "Creative Tools",
    systemPrompt: `Brainstorm creative ideas for: {USER_INPUT}. Provide diverse perspectives and unexpected solutions.`
  },

  // Business Tools
  {
    slug: "business-plan-outline",
    title: "Business Plan Outline",
    description: "Create structured business plan outlines.",
    category: "Business Tools",
    systemPrompt: `Create a detailed outline for a business plan about: {USER_INPUT}. Include all essential sections.`
  },
  {
    slug: "meeting-agenda-creator",
    title: "Meeting Agenda Creator",
    description: "Generate structured meeting agendas.",
    category: "Business Tools",
    systemPrompt: `Create a meeting agenda for a discussion about: {USER_INPUT}. Include objectives, topics, and time allocations.`
  },
  {
    slug: "swot-analysis",
    title: "SWOT Analysis Tool",
    description: "Perform SWOT analysis for businesses.",
    category: "Business Tools",
    systemPrompt: `Perform a SWOT analysis for: {USER_INPUT}. Include strengths, weaknesses, opportunities, and threats.`
  },
  {
    slug: "business-plan-generator",
    title: "Business Plan Generator",
    description: "Create comprehensive business plans with market analysis and financial projections.",
    category: "Business Tools",
    systemPrompt: `Generate a detailed business plan for: {USER_INPUT}. Include executive summary, market analysis, marketing strategy, financial projections, and operational plan.`
  },
  {
    slug: "pitch-deck-creator",
    title: "Pitch Deck Creator",
    description: "Generate investor pitch decks with key slides and compelling narratives.",
    category: "Business Tools",
    systemPrompt: `Create a pitch deck outline for: {USER_INPUT}. Include problem, solution, market size, business model, traction, team, and ask.`
  },
  {
    slug: "competitor-analysis",
    title: "Competitor Analysis Tool",
    description: "Analyze competitors with market positioning and strategic insights.",
    category: "Business Tools",
    systemPrompt: `Conduct a competitor analysis for: {USER_INPUT}. Include key competitors, their strengths/weaknesses, market share, and strategic recommendations.`
  },
  {
    slug: "mission-statement-generator",
    title: "Mission Statement Generator",
    description: "Generate compelling mission statements.",
    category: "Business Tools",
    systemPrompt: `Generate 5 compelling mission statements for a company that: {USER_INPUT}. Make them inspiring and purpose-driven.`
  },

  // Education Tools
  {
    slug: "lesson-plan-creator",
    title: "Lesson Plan Creator",
    description: "Create comprehensive lesson plans.",
    category: "Education Tools",
    systemPrompt: `Create a detailed lesson plan for teaching: {USER_INPUT}. Include objectives, materials, activities, and assessment.`
  },
  {
    slug: "quiz-generator",
    title: "Quiz Generator",
    description: "Generate quizzes and assessments.",
    category: "Education Tools",
    systemPrompt: `Create a 10-question quiz about: {USER_INPUT}. Include multiple choice and short answer questions.`
  },
  {
    slug: "study-guide-maker",
    title: "Study Guide Maker",
    description: "Create comprehensive study guides.",
    category: "Education Tools",
    systemPrompt: `Create a study guide for: {USER_INPUT}. Include key concepts, definitions, and practice questions.`
  },
  {
    slug: "presentation-outline",
    title: "Presentation Outline Generator",
    description: "Generate outlines for educational presentations and lectures.",
    category: "Education Tools",
    systemPrompt: `Create a presentation outline for: {USER_INPUT}. Include introduction, main points, supporting evidence, conclusion, and visual suggestions.`
  },

  // Health & Fitness Tools
  {
    slug: "workout-plan-creator",
    title: "Workout Plan Creator",
    description: "Design personalized workout plans.",
    category: "Health & Fitness Tools",
    systemPrompt: `Create a personalized workout plan for: {USER_INPUT}. Include warm-up, main exercises, and cool-down.`
  },
  {
    slug: "meal-plan-generator",
    title: "Meal Plan Generator",
    description: "Create healthy meal plans.",
    category: "Health & Fitness Tools",
    systemPrompt: `Create a 7-day meal plan for: {USER_INPUT}. Include breakfast, lunch, dinner, and snacks with nutritional info.`
  },
  {
    slug: "workout-planner",
    title: "Workout Planner",
    description: "Create personalized workout plans for different fitness goals and levels.",
    category: "Health & Fitness Tools",
    systemPrompt: `Create a workout plan for: {USER_INPUT}. Include warm-up, main exercises, cool-down, sets/reps, and progression tips.`
  },
  {
    slug: "nutrition-advisor",
    title: "Nutrition Advisor",
    description: "Get personalized nutrition advice and meal recommendations.",
    category: "Health & Fitness Tools",
    systemPrompt: `Provide nutrition advice for: {USER_INPUT}. Include macronutrient breakdown, meal timing, supplementation, and healthy eating tips.`
  },
  {
    slug: "fitness-tracker",
    title: "Fitness Progress Tracker",
    description: "Track and analyze fitness progress with goal setting and motivation.",
    category: "Health & Fitness Tools",
    systemPrompt: `Create a fitness progress tracking plan for: {USER_INPUT}. Include measurable goals, tracking methods, and motivational strategies.`
  },

  // Travel Tools
  {
    slug: "itinerary-planner",
    title: "Travel Itinerary Planner",
    description: "Create detailed travel itineraries.",
    category: "Travel Tools",
    systemPrompt: `Create a detailed 7-day travel itinerary for: {USER_INPUT}. Include daily activities, meals, and transportation.`
  },
  {
    slug: "packing-list-generator",
    title: "Packing List Generator",
    description: "Create comprehensive packing lists.",
    category: "Travel Tools",
    systemPrompt: `Create a comprehensive packing list for a trip to: {USER_INPUT}. Include essentials, weather-appropriate clothing, and special items.`
  },

  // Food & Recipe Tools
  {
    slug: "recipe-creator",
    title: "Recipe Creator",
    description: "Create original recipes from ingredients.",
    category: "Food & Recipe Tools",
    systemPrompt: `Create an original recipe using these ingredients: {USER_INPUT}. Include instructions, cooking time, and serving suggestions.`
  },
  {
    slug: "meal-prep-planner",
    title: "Meal Prep Planner",
    description: "Plan weekly meal prep schedules.",
    category: "Food & Recipe Tools",
    systemPrompt: `Create a weekly meal prep plan for: {USER_INPUT}. Include recipes, shopping lists, and prep instructions.`
  },
  {
    slug: "recipe-generator",
    title: "Recipe Generator",
    description: "Generate creative and delicious recipes based on ingredients or cuisine type.",
    category: "Food & Recipe Tools",
    systemPrompt: `Generate a detailed recipe for: {USER_INPUT}. Include ingredients list, step-by-step instructions, cooking time, servings, and nutritional information if possible.`
  },
  {
    slug: "meal-planner",
    title: "Meal Planner",
    description: "Create weekly meal plans with shopping lists and nutritional balance.",
    category: "Food & Recipe Tools",
    systemPrompt: `Create a 7-day meal plan for: {USER_INPUT}. Include breakfast, lunch, dinner, snacks, shopping list, and nutritional breakdown.`
  },
  {
    slug: "cooking-tips",
    title: "Cooking Tips & Techniques",
    description: "Get expert cooking tips, techniques, and kitchen hacks.",
    category: "Food & Recipe Tools",
    systemPrompt: `Provide cooking tips and techniques for: {USER_INPUT}. Include safety tips, time-saving hacks, and professional advice.`
  },

  // Finance Tools
  {
    slug: "budget-planner",
    title: "Personal Budget Planner",
    description: "Create personal budget plans.",
    category: "Finance Tools",
    systemPrompt: `Create a comprehensive personal budget plan for someone earning: {USER_INPUT}. Include income, expenses, savings goals, and financial advice.`
  },
  {
    slug: "investment-advisor",
    title: "Investment Strategy Advisor",
    description: "Provide investment advice and strategies.",
    category: "Finance Tools",
    systemPrompt: `Provide investment advice and strategy for: {USER_INPUT}. Include risk assessment and diversification recommendations.`
  },

  // Legal Tools
  {
    slug: "contract-reviewer",
    title: "Contract Reviewer",
    description: "Review contracts for key terms and issues.",
    category: "Legal Tools",
    systemPrompt: `Review this contract: {USER_INPUT}. Identify key terms, potential issues, and suggest improvements.`
  },
  {
    slug: "terms-of-service-generator",
    title: "Terms of Service Generator",
    description: "Generate terms of service agreements.",
    category: "Legal Tools",
    systemPrompt: `Generate comprehensive terms of service for: {USER_INPUT}. Include user rights, liabilities, and dispute resolution.`
  },

  // Real Estate Tools
  {
    slug: "property-description-writer",
    title: "Property Description Writer",
    description: "Write compelling property listings.",
    category: "Real Estate Tools",
    systemPrompt: `Write a compelling property description for: {USER_INPUT}. Highlight features, amenities, and neighborhood benefits.`
  },
  {
    slug: "home-staging-advisor",
    title: "Home Staging Advisor",
    description: "Provide home staging recommendations.",
    category: "Real Estate Tools",
    systemPrompt: `Provide home staging recommendations for: {USER_INPUT}. Suggest improvements, furniture placement, and presentation tips.`
  },

  // Sports Tools
  {
    slug: "game-analysis-writer",
    title: "Sports Game Analysis",
    description: "Analyze sports games and matches.",
    category: "Sports Tools",
    systemPrompt: `Provide a detailed analysis of this sports game: {USER_INPUT}. Include key plays, player performances, and strategic insights.`
  },
  {
    slug: "training-program-creator",
    title: "Athlete Training Program",
    description: "Create training programs for athletes.",
    category: "Sports Tools",
    systemPrompt: `Create a training program for an athlete in: {USER_INPUT}. Include warm-ups, drills, strength training, and recovery.`
  },

  // Gaming Tools
  {
    slug: "game-review-writer",
    title: "Game Review Writer",
    description: "Write comprehensive game reviews.",
    category: "Gaming Tools",
    systemPrompt: `Write a comprehensive review of this game: {USER_INPUT}. Include gameplay, graphics, story, and recommendations.`
  },
  {
    slug: "game-guide-creator",
    title: "Game Strategy Guide",
    description: "Create strategy guides for games.",
    category: "Gaming Tools",
    systemPrompt: `Create a strategy guide for: {USER_INPUT}. Include tips, walkthroughs, and advanced techniques.`
  },

  // Music Tools
  {
    slug: "song-lyrics-writer",
    title: "Song Lyrics Writer",
    description: "Write original song lyrics.",
    category: "Music Tools",
    systemPrompt: `Write original song lyrics about: {USER_INPUT}. Include verses, chorus, and bridge with rhyme scheme.`
  },
  {
    slug: "album-review-writer",
    title: "Album Review Writer",
    description: "Write album reviews and critiques.",
    category: "Music Tools",
    systemPrompt: `Write a comprehensive album review for: {USER_INPUT}. Include track analysis, production quality, and overall rating.`
  },

  // Art & Design Tools
  {
    slug: "art-description-writer",
    title: "Art Description Writer",
    description: "Write descriptions for artworks.",
    category: "Art & Design Tools",
    systemPrompt: `Write a compelling description for this artwork: {USER_INPUT}. Include style, technique, mood, and artistic elements.`
  },
  {
    slug: "design-brief-creator",
    title: "Design Brief Creator",
    description: "Create design project briefs.",
    category: "Art & Design Tools",
    systemPrompt: `Create a comprehensive design brief for: {USER_INPUT}. Include objectives, target audience, style guidelines, and deliverables.`
  },
  {
    slug: "art-description",
    title: "Art Description Generator",
    description: "Generate detailed descriptions of artworks, styles, and artistic concepts.",
    category: "Art & Design Tools",
    systemPrompt: `Generate a detailed description of: {USER_INPUT}. Include artistic style, techniques, color palette, composition, and emotional impact.`
  },
  {
    slug: "design-brief",
    title: "Design Brief Creator",
    description: "Create comprehensive design briefs for various projects and mediums.",
    category: "Art & Design Tools",
    systemPrompt: `Create a design brief for: {USER_INPUT}. Include project goals, target audience, style guidelines, deliverables, and timeline.`
  },
  {
    slug: "color-palette",
    title: "Color Palette Generator",
    description: "Generate harmonious color palettes for design projects.",
    category: "Art & Design Tools",
    systemPrompt: `Generate a color palette for: {USER_INPUT}. Include hex codes, color names, complementary colors, and usage suggestions.`
  },

  // Photography Tools
  {
    slug: "photo-shoot-planner",
    title: "Photo Shoot Planner",
    description: "Plan professional photo shoots.",
    category: "Photography Tools",
    systemPrompt: `Plan a professional photo shoot for: {USER_INPUT}. Include location suggestions, equipment needs, and shot lists.`
  },
  {
    slug: "photo-editing-tips",
    title: "Photo Editing Guide",
    description: "Provide photo editing advice.",
    category: "Photography Tools",
    systemPrompt: `Provide editing tips and techniques for photos of: {USER_INPUT}. Include software recommendations and step-by-step guidance.`
  },

  // Video Tools
  {
    slug: "video-script-writer",
    title: "Video Script Writer",
    description: "Write scripts for videos.",
    category: "Video Tools",
    systemPrompt: `Write a complete video script for: {USER_INPUT}. Include narration, visual cues, and timing suggestions.`
  },
  {
    slug: "video-editing-outline",
    title: "Video Editing Outline",
    description: "Create video editing plans.",
    category: "Video Tools",
    systemPrompt: `Create a video editing outline for: {USER_INPUT}. Include cuts, transitions, music, and effects suggestions.`
  },

  // Audio Tools
  {
    slug: "podcast-script-writer",
    title: "Podcast Script Writer",
    description: "Write podcast episode scripts.",
    category: "Audio Tools",
    systemPrompt: `Write a podcast episode script about: {USER_INPUT}. Include introduction, main content, interviews, and conclusion.`
  },
  {
    slug: "voice-over-script",
    title: "Voice Over Script Writer",
    description: "Write scripts for voice overs.",
    category: "Audio Tools",
    systemPrompt: `Write a voice over script for: {USER_INPUT}. Include pacing, emphasis, and pronunciation notes.`
  },

  // Translation Tools
  {
    slug: "language-translator",
    title: "Language Translator",
    description: "Translate text between languages.",
    category: "Translation Tools",
    systemPrompt: `Translate the following text to Spanish: {USER_INPUT}. Provide an accurate and natural translation.`
  },
  {
    slug: "cultural-adapter",
    title: "Cultural Content Adapter",
    description: "Adapt content for different cultures.",
    category: "Translation Tools",
    systemPrompt: `Adapt the following content for a Spanish-speaking audience: {USER_INPUT}. Consider cultural nuances and local preferences.`
  },
  {
    slug: "cultural-adaptation",
    title: "Cultural Adaptation Advisor",
    description: "Adapt content for different cultures.",
    category: "Translation Tools",
    systemPrompt: `Adapt this content for cultural context: {USER_INPUT}. Consider local customs, humor, and sensitivities.`
  },
  {
    slug: "multilingual-seo",
    title: "Multilingual SEO Advisor",
    description: "Provide SEO advice for multiple languages.",
    category: "Translation Tools",
    systemPrompt: `Provide multilingual SEO advice for: {USER_INPUT}. Include keyword research and localization strategies.`
  },

  // Summarization Tools
  {
    slug: "text-summarizer",
    title: "Text Summarizer",
    description: "Create concise summaries of long text.",
    category: "Summarization Tools",
    systemPrompt: `Summarize the following text in 3-5 sentences: {USER_INPUT}. Capture the main points and key details.`
  },
  {
    slug: "article-extractor",
    title: "Key Points Extractor",
    description: "Extract key points from articles.",
    category: "Summarization Tools",
    systemPrompt: `Extract the 5 most important points from the following text: {USER_INPUT}. Present them as bullet points.`
  },
  {
    slug: "executive-summary-writer",
    title: "Executive Summary Writer",
    description: "Create executive summaries of documents.",
    category: "Summarization Tools",
    systemPrompt: `Create an executive summary of: {USER_INPUT}. Include key points, conclusions, and recommendations.`
  },
  {
    slug: "book-summary-creator",
    title: "Book Summary Creator",
    description: "Summarize books and their key points.",
    category: "Summarization Tools",
    systemPrompt: `Create a comprehensive summary of this book: {USER_INPUT}. Include main themes, key characters, and plot overview.`
  },

  // Rewriting Tools
  {
    slug: "rewrite-article",
    title: "Rewrite Article (Plagiarism Free)",
    description: "Transform existing blogs into unique articles.",
    category: "Rewriting Tools",
    systemPrompt: `You are an expert editor. Rewrite the following text to be 100% unique, engaging, and bypass AI detectors. Maintain the original meaning and tone: {USER_INPUT}`
  },
  {
    slug: "paraphrase-tool",
    title: "Paraphrase Tool",
    description: "Rephrase text while maintaining meaning.",
    category: "Rewriting Tools",
    systemPrompt: `Paraphrase the following text in your own words: {USER_INPUT}. Keep the meaning the same but change the wording.`
  },
  {
    slug: "simplify-text",
    title: "Text Simplifier",
    description: "Simplify complex text for easier understanding.",
    category: "Rewriting Tools",
    systemPrompt: `Simplify the following text to make it easier to understand: {USER_INPUT}. Use simpler words and shorter sentences.`
  },
  {
    slug: "tone-adjustment",
    title: "Tone Adjustment Tool",
    description: "Adjust the tone of written content.",
    category: "Rewriting Tools",
    systemPrompt: `Adjust the tone of this text to be more: {USER_INPUT}. Maintain the original meaning while changing the style.`
  },
  {
    slug: "readability-improver",
    title: "Readability Improver",
    description: "Improve text readability and comprehension.",
    category: "Rewriting Tools",
    systemPrompt: `Improve the readability of this text: {USER_INPUT}. Simplify complex sentences and improve flow.`
  },

  // Grammar Tools
  {
    slug: "advanced-grammar-check",
    title: "Advanced Grammar Checker",
    description: "Comprehensive grammar and style analysis.",
    category: "Grammar Tools",
    systemPrompt: `Perform a comprehensive grammar and style check on the following text: {USER_INPUT}. Identify errors and suggest improvements.`
  },
  {
    slug: "punctuation-fixer",
    title: "Punctuation Fixer",
    description: "Fix punctuation errors in text.",
    category: "Grammar Tools",
    systemPrompt: `Fix all punctuation errors in the following text: {USER_INPUT}. Explain each correction.`
  }
];

// 4. Helper function to get tools by category
export function getToolsByCategory(category: ToolCategory): AiTool[] {
  return allTools.filter(tool => tool.category === category);
}

// 5. Helper function to get tool by slug
export function getToolBySlug(slug: string): AiTool | undefined {
  return allTools.find(tool => tool.slug === slug);
}

// 6. Helper function to search tools
export function searchTools(query: string): AiTool[] {
  const lowerQuery = query.toLowerCase();
  return allTools.filter(tool => 
    tool.title.toLowerCase().includes(lowerQuery) ||
    tool.description.toLowerCase().includes(lowerQuery) ||
    tool.category.toLowerCase().includes(lowerQuery)
  );
}
