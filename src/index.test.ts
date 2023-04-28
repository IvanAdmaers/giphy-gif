import { GiphyGif } from '.';

describe('GiphyGif', () => {
  describe('GiphyGif.getDirectLink', () => {
    const expectedUrl = 'https://i.giphy.com/media/olAik8MhYOB9K/giphy.gif';

    it('should throw an error when incorrect url', async () => {
      await expect(
        GiphyGif.getDirectLink(
          'https://www.google.com/search?q=what+year+is+it'
        )
      ).rejects.toThrow(URIError);
    });

    it('should return a correct result for a gif from page', async () => {
      const result = await GiphyGif.getDirectLink(
        'https://giphy.com/gifs/life-gets-down-olAik8MhYOB9K'
      );

      expect(result).toBe(expectedUrl);
    });

    it('should return a correct result for an url for embedding', async () => {
      const result = await GiphyGif.getDirectLink(
        'https://giphy.com/embed/olAik8MhYOB9K'
      );

      expect(result).toBe(expectedUrl);
    });

    it('should return a correct result for a media url', async () => {
      const result = await GiphyGif.getDirectLink(
        'https://media4.giphy.com/media/olAik8MhYOB9K/giphy.gif'
      );

      expect(result).toBe(expectedUrl);
    });
  });
});
