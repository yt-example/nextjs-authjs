from langchain_openai import ChatOpenAI
from browser_use import Agent
import asyncio

async def main():
    agent = Agent(
        task="""
        以下のサイトからキービジュアルに書いてあるテキストを取得してください。
        https://note.com/ochyai/n/na5201402202c
        """,
        llm=ChatOpenAI(model="gpt-4o"),
    )
    result = await agent.run()
    print(result)

asyncio.run(main())