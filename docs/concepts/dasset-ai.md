---
sidebar_position: 2
---

# DASSET AI

## Public Cloud AI Services

The explosion of artificial intelligence solutions has opened the possibilities for everyday computing that just a few years ago seemed like science fiction.  Offerings such as ChatGPT have enabled anyone to easily write a document, generate images, or simply make finding an answer to a question approachable for anyone.  Need a menu plan to create an Italian dinner for 4 people?  Simply ask CoPilot, Gemini or just about any other public AI and not only will you get all of the details for a complete meal, but likely suggestions for pairing a bottle of wine with the meal as well.  Gone are the days of searching the internet and scouring various web sites for bits and pieces of information - it's now only a question-away from getting the exact answer you're looking for.

But, what if you wanted to get, or create, information about you or your family?  For example, details on that family trip you took to Bali.  This is what CoPilot will tell you:

<p align="center">
<img src={require("./copilot-bali.png").default} style={{transform:'scale(.9)'}} />
</p>

While it may seem unfortunate that this type of information isn't available in cloud-based AI solutions, the reality is that this is a very good thing.  You don't want your very personal details available on the internet for anyone to easily find.  Your data is private to you, and it should stay that way.

## DASSET Hybrid AI

DASSET's hybrid AI bridges the gap of public and personal information, enabling you to have an AI agent that knows about you, using your data, while keeping your personal data private on your device.  For non-sensitive queries, DASSET will use cloud service-based AI to process these requests.

Here's a quick breakdown as to how DASSET hybrid AI uses **Public Cloud AI** and **Local AI**  in tandem with one another, and the benefits and tradeoffs of each:

### Cloud AI
Public Cloud AI services such as ChatGPT use Large Language Models (LLM) which are trained using massive amounts of data in conjunction with high-performance servers in datacenters around the world.  These LLMs have 100's of billions parameters, meaning they can grasp more complex language nuances, context and generate more sophisticated responses to the user.  The results are quick response to queries from users, or generation of images and content.

While response time and accuracy are high with these LLMs, the downside is most companies offering solutions use your data (the questions you ask) as training data, to further improve the LLM over time.  While this is good for improving accuracy and results, anything personal or business sensitive you ask these services can become property of the company that owns the service.

DASSET AI's public cloud AI takes a different approach.  Rather than developing and using a single LLM that is trained on your data, it uses multiple LLMs which are publicly available.  This provides flexibility to use the best LLM for the task, while at the same time not using your queries for training.

### Local AI
While AI processing in general is heavily compute intensive, there are LLMs that are optimized to be run on computers you may have at your home or office.  Computers with high-end graphics cards, adequate RAM (eg; 32GB) and optionally a Neural Processing Unit (NPU) are best for running on these optimized LLMs, which range in .5-8 billion parameters.

Response time and accuracy of these LLMs may be slower than those in public clouds, however they are completely private as they execute on your DASSET Data Hub, or your PC directly, rather than in the cloud.  With DASSET AI, you can create your own private data library which is referenced by the LLM using [Retrieval-Augmented Generation](https://en.wikipedia.org/wiki/Retrieval-augmented_generation), which uses both your data along with the LLM, giving you truly personalized results that are private to you.

## DASSET AI Agent Open Platform

The DASSET AI Agent Open platform, developed by PlanetX Labs, is a next-generation AI application platform that understands users better the more it is used. Through cloud-edge-device computing and multi-agent collaboration capabilities, it enables developers to build custom agents and private knowledge bases for users. This enables AI to continuously optimize its understanding and execution of user intention, ultimately mapping out a user's "intelligent avatar" in the digital world, enhancing efficiency and effectiveness in both work and life.

The DASSET AI Agent Open Platform consists of the following components:

* ### Cloud-Edge-Device Collaboration
  
    Cloud-edge-device collaboration works by combining AI capabilities from all three sides based on the different characteristics of tasks to fulfill the user's ultimate requirements.

* ### Hybrid Inference Engine

    The DASSET Hybrid Inference Engine is an AI performance acceleration engine that spans software, chips, and devices. It calls up, scales up, or scales down hardware expenses on demand.

* ### Private Knowledge Base & dSoul

    The **Private Knowledge Base** is used to store vectorized data from user inputs such as text, voice, images, and videos, which are manually maintained by the user. **dSoul (data Soul)** is used to store user behavior characteristic data learned from each interaction with the DASSET App (such as AI tasks, DIM chats). dSoul automatically updates through Self-Learning and can be corrected by humans at any time. Self-Learning extracts features from user knowledge and behavior data to form a digital representation of the user's soul.

## How Self-Learning Works

1. Self-Learning obtains data from Agent interactions.
2. It then uses Large Language Models (LLMs) and embedding models to extract human behavior characteristics from messages received from Agents and stores them in the dSoul knowledge base.
3. Finally, organizes, stores, and retrieves features through the dSoul knowledge base, enabling personalized interactions across multiple sessions and Agents.