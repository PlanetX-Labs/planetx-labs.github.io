---
sidebar_position: 2
---

# Personal AI

## Public Cloud AI Dilemma

The explosion of artificial intelligence solutions has opened the possibilities for everyday computing that just a few years ago seemed like science fiction.  Offerings such as ChatGPT have enabled anyone to easily write a document, generate images, or simply make finding an answer to a question approachable for anyone.  Need a menu plan to create an Italian dinner for 4 people?  Simply ask CoPilot, Gemini or just about any other public AI and not only will you get all of the details for a complete meal, but likely suggestions for pairing a bottle of wine with the meal as well.  Gone are the days of searching the internet and scouring various web sites for bits and pieces of information - it's now only a question-away from getting the exact answer you're looking for.

But, what if you wanted to get, or create, information about you or your family?  For example, details on that family trip you took to Bali.  This is what CoPilot will tell you:

<p align="center">
<img src={require("./copilot-bali.png").default} style={{transform:'scale(.9)'}} />
</p>

While it may seem unfortunate that this type of information isn't available in cloud-based AI solutions, the reality is that this is a very good thing.  You don't want your very personal details available on the internet for anyone to easily find.  Your data is private to you, and it should stay that way.

## DASSET Hybrid AI

DASSET's hybrid AI bridges the gap of public and personal information, enabling you to have an AI agent that knows about you, using your data, while keeping your personal data private on your device.  For non-sensitive queries, DASSET will use cloud service-based AI to process these requests.

Here's a quick breakdown as to how DASSET hybrid AI uses **Public Cloud AI** and **Local AI**  in tandem with one another, and the benefits and tradeoffs of each:

### Public Cloud AI
Public Cloud AI services such as ChatGPT use Large Language Models (LLM) which are trained using massive amounts of data in conjunction with high-performance servers in datacenters around the world.  These LLMs have 100's of billions parameters, meaning they can grasp more complex language nuances, context and generate more sophisticated responses to the user.  The results are quick response to queries from users, or generation of images and content.

While response time and accuracy are high with these LLMs, the downside is most companies offering solutions use your data (the questions you ask) as training data, to further improve the LLM over time.  While this is good for improving accuracy and results, anything personal or business sensitive you ask these services can become property of the company that owns the service.

DASSET AI's public cloud AI takes a different approach.  Rather than developing and using a single LLM that is trained on your data, it uses multiple LLMs which are publicly available.  This provides flexibility to use the best LLM for the task, while at the same time not using your queries for training.

### Local AI
While AI processing in general is heavily compute intensive, there are LLMs that are optimized to be run on computers you may have at your home or office.  Computers with high-end graphics cards, adequate RAM (eg; 32GB) and optionally a Neural Processing Unit (NPU) are best for running on these optimized LLMs, which range in .5-3 billion parameters.

Response time and accuracy of these LLMs may be lower than those in public clouds, however they are completely private as they execute on your DASSET Data Hub, or your PC directly, rather than in the cloud.  With DASSET AI, you can create your own private data library which is referenced by the LLM using [Retrieval-Augmented Generation](https://en.wikipedia.org/wiki/Retrieval-augmented_generation), which uses both your data along with the LLM, giving you truly personalized results that are private to you.