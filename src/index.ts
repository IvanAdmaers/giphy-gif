import axios from 'axios';

export class GiphyGif {
  private static getLink(id: string) {
    return `https://i.giphy.com/media/${id}/giphy.gif`;
  }

  public static async getDirectLink(url: string) {
    try {
      /* Gif page. Like https://giphy.com/gifs/life-gets-down-olAik8MhYOB9K */
      const gifRegEx = /^https:\/\/giphy\.com\/gifs\/[a-zA-Z0-9_-]+$/i;

      if (url.match(gifRegEx) !== null) {
        const regEx =
          /<meta\s+name="twitter:player"\s+content="https:\/\/giphy.com\/embed\/(\w+)/;

        const { data: page } = await axios.get<string>(url, {
          headers: {
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 7_6_0; en-US) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/55.0.1567.237 Safari/534',
          },
        });

        const id = page.match(regEx)?.[1];

        if (id === undefined) {
          return null;
        }

        return this.getLink(id);
      }
    } catch (error) {
      console.error(error);

      return null;
    }
    /* End of gif page */

    /* Embed gif page */
    const gifEmbedRegEx = /^https:\/\/giphy\.com\/embed\/([a-zA-Z0-9_-]+)$/i;
    const gifEmbedMatch = url.match(gifEmbedRegEx);

    if (gifEmbedMatch !== null) {
      const id = gifEmbedMatch[1];

      return this.getLink(id);
    }
    /* End of embed gif page */

    /* Gif media page */
    const gifMediaRegEx =
      /https:\/\/media\d?\.giphy\.com\/media\/(\w+)\/giphy\.(gif|mp4|webp)/;
    const gifMediaMatch = url.match(gifMediaRegEx);

    if (gifMediaMatch !== null) {
      const id = gifMediaMatch[1];

      return this.getLink(id);
    }
    /* End gif media page */

    throw new URIError('Incorrect uri');
  }
}
