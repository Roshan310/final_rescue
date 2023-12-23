import requests
from bs4 import BeautifulSoup
# import sqlite3
# from models import News

# con = sqlite3.connect('news.db')
# cur = con.cursor()

def get_all_news():
  url = ('https://www.onlinekhabar.com/?search_keyword=disaster&fbclid=IwAR3iFqwtj-DVIkd7GHxWqa9eSAHxMkv-ozK2Y8BLCQQK2kXhD5a7yfpPgZE')
  r = requests.get(url)
  html_content = r.content
  soup = BeautifulSoup(html_content, "html.parser")
  divs = soup.find_all('div', class_='ok-news-post ok-post-ltr')
  # print(soup.p)
  # print(divs)
  news = []

  for div in divs:
      news_link = soup.find('a')['href']
      news_title = div.find("div", class_="ok-post-content-wrap").h2.text		
      news_info = div.find("div", class_="ok-title-info").p.text
      
      news_dict = [
      news_title,
      news_link,
      news_info
      ]
      news.append(news_dict)
  return news

# all_news = get_all_news()
# for news in all_news:
#    print(news[0])
# for news in all_news:
#    qry = f"""INSERT INTO news (news_link, news_title, news_info)
#         VALUES ('{news[0]}', '{news[1]}', '{news[2]}')
#     """
#    cur.execute(qry)
#    con.commit()
#    con.close()
   


# for one_news in news:
#     news = News(news_title=one_news[0], news_link=one_news[1], news_info=one_news[2])
#     db.commit()
    # sql = '''INSERT INTO `nepali_news`
    #         ( `title`, `link`, `summary`) 
    #         VALUES (?, ?, ?)'''
    # cur.executemany(sql,news)
    # con.commit()
    # con.close()

	