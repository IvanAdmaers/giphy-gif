export class GiphyGif {
  private static getLink(id: string) {
    return `https://i.giphy.com/media/${id}/giphy.gif`;
  }

  public static getDirectLink(url: string) {
    /* Gif page. Like https://giphy.com/gifs/life-gets-down-olAik8MhYOB9K */
    const gifRegEx =
      /^https?:\/\/giphy\.com\/(?:gifs\/(?:.*-)?([a-zA-Z0-9_-]+)(?:\/|$)|gifs\/([a-zA-Z0-9]+)(?:\/|$))/i;

    const gifRegExMatch = url.match(gifRegEx);

    if (gifRegExMatch !== null) {
      const id = gifRegExMatch[1];

      return this.getLink(id);
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
