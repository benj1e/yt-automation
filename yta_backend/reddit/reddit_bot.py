from decouple import config
import praw, json


with open("yta_backend/reddit/subreddits.json") as f:
    subs = json.load(f)
    subreddits = subs["subreddits"]


username = config("REDDIT_USERNAME")
password = config("REDDIT_PASSWORD")
client_id = config("REDDIT_CLIENT_ID")
client_secret = config("REDDIT_CLIENT_SECRET")
user_agent = config("REDDIT_USER_AGENT")


reddit = praw.Reddit(
    client_id=client_id,
    client_secret=client_secret,
    password=password,
    user_agent=user_agent,
    username=username,
)

for name in subreddits:
    print(f"-----------\nSubreddit: {name}------------")
    subreddit = reddit.subreddit(name).hot(limit=5)
    for post in subreddit:
        print(post.title)
